"use server";

import { currentUser } from "@clerk/nextjs/server";

import { Marketplace, Prisma } from "@/app/generated/prisma";
import { db } from "@/lib/db";

// Extended type for upsert input
type UpsertMarketplaceItemInput = Omit<
	Marketplace,
	"id" | "createdAt" | "updatedAt" | "vendorId" | "specifications"
> & {
	id?: string;
	specifications?: any;
	vendor: {
		id?: string;
		name: string;
	};
};

// Upsert (Create or Update) Marketplace Item
export async function upsertMarketplaceItem(data: UpsertMarketplaceItemInput) {
	const user = await currentUser();
	if (!user) {
		return {
			success: false,
			error: "Failed to validate user"
		};
	}

	try {
		// Upsert vendor first
		const vendor = await db.vendor.upsert({
			where: { name: data.vendor.name },
			create: { name: data.vendor.name },
			update: { name: data.vendor.name }
		});

		// Prepare marketplace data
		const itemData: Prisma.MarketplaceCreateInput = {
			...data,
			specifications: data.specifications || {},
			vendor: {
				connect: { id: vendor.id }
			}
		};

		// Upsert marketplace item
		const item = await db.marketplace.upsert({
			where: { slug: data.slug },
			create: itemData,
			update: itemData
		});

		return { success: true, data: item };
	} catch (error: any) {
		console.error("Market place upsert error:", error);

		return {
			success: false,
			error:
				error.message || "Failed to create or update market place item"
		};
	}
}

export async function createVendor(name: string) {
	const user = await currentUser();
	if (!user) {
		return {
			success: false,
			error: "Failed to validate user"
		};
	}
	try {
		const vendor = await db.vendor.create({
			data: { name }
		});
		return { success: true, data: vendor };
	} catch (error: any) {
		console.error("Vendor creation error:", error);
		return {
			success: false,
			error: error.message || "Failed to create vendor"
		};
	}
}

export async function getMarketplaceVendors() {
	try {
		const vendors = await db.vendor.findMany({
			select: { id: true, name: true },
			orderBy: { name: "asc" }
		});
		return { success: true, data: vendors };
	} catch (error: any) {
		console.error("Fetch vendors error:", error);
		return {
			success: false,
			error: error.message || "Failed to fetch vendors"
		};
	}
}

// Get Single Item by ID or Slug
export async function getMarketplaceItem(identifier: {
	id?: string;
	slug?: string;
}) {
	try {
		if (!identifier.id && !identifier.slug) {
			throw new Error("Either id or slug must be provided");
		}

		const where = identifier.id
			? { id: identifier.id }
			: { slug: identifier.slug! };

		const item = await db.marketplace.findUnique({
			where,
			include: { vendor: true }
		});

		return { success: true, data: item };
	} catch (error) {
		console.error("Fetch error:", error);
		return { success: false, error: "Error fetching market place item" };
	}
}

// Get All Marketplace Items
// export async function getAllMarketplaceItems(
// 	params: {
// 		page?: number;
// 		limit?: number;
// 		category?: string;
// 	} = {}
// ) {
// 	try {
// 		const page = params.page || 1;
// 		const limit = params.limit || 10;
// 		const skip = (page - 1) * limit;

// 		const items = await db.marketplace.findMany({
// 			skip,
// 			take: limit,
// 			where: params.category ? { category: params.category } : undefined,
// 			orderBy: { createdAt: "desc" },
// 			include: { vendor: { select: { name: true } } }
// 		});

// 		const total = await db.marketplace.count({
// 			where: params.category ? { category: params.category } : undefined
// 		});

// 		return {
// 			success: true,
// 			data: {
// 				items,
// 				pagination: {
// 					total,
// 					totalPages: Math.ceil(total / limit),
// 					currentPage: page,
// 					limit
// 				}
// 			}
// 		};
// 	} catch (error) {
// 		console.error("Fetch all error:", error);
// 		return { success: false, error: "Error fetching market place item" };
// 	}
// }

export async function getAllMarketplaceItems(
	params: {
		page?: number;
		limit?: number;
		category?: string;
	} = {}
) {
	try {
		const page = params.page || 1;
		const limit = params.limit || 10;
		const skip = (page - 1) * limit;

		// Get paginated marketplace items
		const items = await db.marketplace.findMany({
			skip,
			take: limit,
			where: params.category ? { category: params.category } : undefined,
			orderBy: { createdAt: "desc" },
			include: { vendor: true }
		});

		// Get item IDs for sold count calculation
		const itemIds = items.map((item) => item.id);

		// Get sold counts for these items
		const soldCounts = await db.marketplacePurchase.groupBy({
			by: ["itemIds"],
			where: {
				itemIds: {
					hasSome: itemIds
				}
			},
			_count: {
				itemIds: true
			}
		});

		// Create a map of itemId to sold count
		const soldCountMap = new Map<string, number>();

		soldCounts.forEach((result) => {
			result.itemIds.forEach((itemId) => {
				if (itemIds.includes(itemId)) {
					const currentCount = soldCountMap.get(itemId) || 0;
					soldCountMap.set(
						itemId,
						currentCount + result._count.itemIds
					);
				}
			});
		});

		// Add soldCount to each item
		const itemsWithSoldCount = items.map((item) => ({
			...item,
			items_sold: soldCountMap.get(item.id) || 0
		}));

		const total = await db.marketplace.count({
			where: params.category ? { category: params.category } : undefined
		});

		return {
			success: true,
			data: {
				items: itemsWithSoldCount,
				pagination: {
					total,
					totalPages: Math.ceil(total / limit),
					currentPage: page,
					limit
				}
			}
		};
	} catch (error) {
		console.error("Fetch all error:", error);
		return { success: false, error: "Error fetching market place item" };
	}
}

// Delete Marketplace Item
export async function deleteMarketplaceItem(id: string) {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user"
		};

	try {
		await db.marketplace.delete({
			where: { id }
		});
		return { success: true };
	} catch (error) {
		console.error("Delete error:", error);
		return { success: false, error: "Item not found or delete failed" };
	}
}

export async function getAllMarketplaceCategories() {
	try {
		// Get distinct categories
		const categories = await db.marketplace.groupBy({
			by: ["category"],
			orderBy: {
				category: "asc"
			}
		});

		// Extract just the category strings from the result
		const categoryNames = categories.map((item) => item.category);

		return {
			success: true,
			data: categoryNames
		};
	} catch (error) {
		console.error("Failed to fetch categories:", error);
		return {
			success: false,
			error: "Failed to retrieve categories"
		};
	}
}
