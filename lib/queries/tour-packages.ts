"use server";

import { currentUser } from "@clerk/nextjs/server";

import { TourPackages } from "@/app/generated/prisma";
import { db } from "@/lib/db";

export const upsertTourPackage = async (
	data: Omit<TourPackages, "id" | "createdAt" | "updatedAt">
) => {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user"
		};

	try {
		const tourPackage = await db.tourPackages.upsert({
			where: { slug: data.slug },
			update: { ...data },
			create: { ...data }
		});

		return { success: true, data: tourPackage };
	} catch (error) {
		console.error("Error in upsertTourPackage:", error);
		return {
			success: false,
			error: "Failed to create or update tour package"
		};
	}
};

export const getTourPackageBySlug = async (slug: string) => {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user"
		};

	try {
		const tourPackage = await db.tourPackages.findUnique({
			where: { slug }
		});

		if (!tourPackage) {
			return { success: false, error: "Tour package not found" };
		}
		return { success: true, data: tourPackage };
	} catch (error) {
		console.error("Error fetching tour package:", error);
		return { success: false, error: "Error fetching tour package" };
	}
};

export const getAllTourPackages = async () => {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user"
		};

	try {
		const tourPackages = await db.tourPackages.findMany({
			orderBy: { createdAt: "desc" }
		});

		if (tourPackages.length === 0) {
			return { success: false, error: "No tour packages found" };
		}

		return { success: true, data: tourPackages };
	} catch (error) {
		console.error("Error fetching tour packages:", error);
		return { success: false, error: "Error fetching tour packages" };
	}
};

export const deleteTourPackageBySlug = async (slug: string) => {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user"
		};

	try {
		const tourPackage = await db.tourPackages.delete({
			where: { slug }
		});
		if (!tourPackage) {
			return { success: false, error: "Tour package not found" };
		}
		return { success: true };
	} catch (error) {
		console.error("Error deleting tour package:", error);
		return { success: false, error: "Error deleting tour package" };
	}
};
