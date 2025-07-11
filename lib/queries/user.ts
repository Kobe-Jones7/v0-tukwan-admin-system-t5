"use server";

import { currentUser } from "@clerk/nextjs/server";
import { User } from "@/app/generated/prisma";

import { db } from "@/lib/db";

// create/update user
export const initUser = async (
	data?: Omit<User, "id" | "createdAt" | "updatedAt">
) => {
	try {
		const user = await currentUser();
		if (!user) return;

		const userData = await db.user.upsert({
			where: { email: user.emailAddresses[0].emailAddress },
			update: { ...data },
			create: {
				avatar: user.imageUrl,
				email: user.emailAddresses[0].emailAddress,
				first_name: user.firstName ?? "",
				last_name: user.lastName ?? "",
				phone: user.primaryPhoneNumber?.phoneNumber ?? "",
				status: "active",
			},
		});

		return { success: true, userData };
	} catch (error) {
		console.log(error);
		throw new Error("Failed to create user", { cause: error });
	}
};

// Get all users
export async function getAllUsers() {
	try {
		const users = await db.user.findMany();
		return { success: true, users };
	} catch (error) {
		console.error("Error fetching users:", error);
		return { success: false };
	}
}

// Get a single user by ID
export async function getUserById(id: string) {
	try {
		const user = await db.user.findUnique({ where: { id } });
		return { success: true, user };
	} catch (error) {
		console.error("Error fetching user:", error);
		return { success: false };
	}
}
