"use server";

import { currentUser } from "@clerk/nextjs/server";

import { Attractions, User } from "@/app/generated/prisma";

import { db } from "@/lib/db";

/**
 * Create or update attraction based on slug
 */
export async function upsertAttraction(
	data: Omit<Attractions, "id" | "createdAt" | "updatedAt">
): Promise<
	| { success: true; attraction: Attractions }
	| { success: false; error: string }
> {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user",
		};

	try {
		const attraction = await db.attractions.upsert({
			where: { slug: data.slug },
			update: { ...data },
			create: { ...data },
		});

		return { success: true, attraction };
	} catch (error) {
		console.error("Error in upsertAttraction:", error);
		return {
			success: false,
			error: "Failed to create or update attraction",
		};
	}
}

/**
 * Get all attractions
 */
export async function getAllAttractions() {
	try {
		const attractions = await db.attractions.findMany({
			orderBy: { createdAt: "desc" },
		});
		return { success: true, attractions };
	} catch (error) {
		console.error("Error fetching attractions:", error);
		return { success: false, error: "Error fetching attractions:" };
	}
}

/**
 * Get a single attraction by slug
 */
export async function getSingleAttraction(slug: string) {
	try {
		const attraction = await db.attractions.findUnique({
			where: { slug },
		});
		return attraction;
	} catch (error) {
		console.error("Error fetching attraction by slug:", error);
		return { success: false, error: "Error fetching attraction by slug:" };
	}
}

/**
 * Delete an attraction by slug
 */
export async function deleteAttraction(slug: string) {
	try {
		await db.attractions.delete({ where: { slug } });
		return { success: true };
	} catch (error) {
		console.error("Error deleting attraction:", error);
		return { success: false, error: "Failed to delete attraction" };
	}
}
