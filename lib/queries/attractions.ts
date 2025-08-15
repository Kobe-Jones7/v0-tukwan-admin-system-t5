"use server";

import { currentUser } from "@clerk/nextjs/server";

import { Attractions, User } from "@/app/generated/prisma";
import { db } from "@/lib/db";

/**
 * Create or update attraction based on slug
 */
export async function upsertAttraction(
	data: Omit<Attractions, "id" | "createdAt" | "updatedAt">,
	id?: string
) {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user"
		};

	try {
		console.log("Upserting attraction with data:", data);
		let query_where;
		if (id) {
			query_where = { id };
		} else {
			query_where = { slug: data.slug };
		}

		const attraction = await db.attractions.upsert({
			where: query_where,
			update: { ...data },
			create: { ...data }
		});

		return { success: true, data: attraction };
	} catch (error) {
		console.error("Error in upsertAttraction:", error);
		return {
			success: false,
			error: "Failed to create or update attraction"
		};
	}
}

/**
 * Get all attractions
 */
export async function getAllAttractions() {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user"
		};

	try {
		const attractions = await db.attractions.findMany({
			orderBy: { createdAt: "desc" }
		});
		return { success: true, data: attractions };
	} catch (error) {
		console.error("Error fetching attractions:", error);
		return { success: false, error: "Error fetching attractions:" };
	}
}

/**
 * Get a single attraction by slug
 */
export async function getSingleAttraction(slug: string) {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user"
		};

	try {
		const attraction = await db.attractions.findUnique({
			where: { slug }
		});
		return { success: true, data: attraction };
	} catch (error) {
		console.error("Error fetching attraction by slug:", error);
		return { success: false, error: "Error fetching attraction by slug:" };
	}
}

/**
 * Delete an attraction by slug
 */
export async function deleteAttraction(slug: string) {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user"
		};

	try {
		await db.attractions.delete({ where: { slug } });
		return { success: true };
	} catch (error) {
		console.error("Error deleting attraction:", error);
		return { success: false, error: "Failed to delete attraction" };
	}
}
