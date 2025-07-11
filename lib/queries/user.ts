"use server";

import { currentUser } from "@clerk/nextjs/server";
import { User } from "@/app/generated/prisma";

import { db } from "@/lib/db";

export const initUser = async (userUpdate?: User) => {
	try {
		const user = await currentUser();
		if (!user) return;

		const userData = await db.user.upsert({
			where: { email: user.emailAddresses[0].emailAddress },
			update: { ...userUpdate },
			create: {
				avatar: user.imageUrl,
				email: user.emailAddresses[0].emailAddress,
				first_name: user.firstName ?? "",
				last_name: user.lastName ?? "",
				phone: user.primaryPhoneNumber?.phoneNumber ?? "",
				status: "active",
			},
		});

		return userData;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to create user", { cause: error });
	}
};
