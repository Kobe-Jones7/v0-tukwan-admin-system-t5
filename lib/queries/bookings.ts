// app/actions/booking.ts
"use server";

import { z } from "zod";
import { db } from "../db";
import { Booking } from "@/app/generated/prisma";
import { currentUser } from "@clerk/nextjs/server";

// --- Zod schemas ---

// const bookingItemSchema = z.object({
// 	id: z.string().min(1),
// 	type: z.enum(["ATTRACTION", "PACKAGE"]),
// });

// const bookingSchema = z.object({
// 	items: z.array(bookingItemSchema).min(1),
// 	customer_name: z.string().min(1),
// 	customer_email: z.string().email(),
// 	customer_phone: z.string().min(5),
// 	tour_date: z.preprocess(
// 		(arg) => (typeof arg === "string" ? new Date(arg) : arg),
// 		z.instanceof(Date)
// 	),
// 	amount: z.number().nonnegative(),
// 	status: z
// 		.enum(["pending", "confirmed", "cancelled", "completed"])
// 		.optional(),
// });

// type BookingInput = z.infer<typeof bookingSchema>;

// --- Server actions with error handling ---

export async function upsertBooking(
	data: Omit<Booking, "id" | "createdAt" | "updatedAt">,
	id?: string
) {
	try {
		if (!id) {
			const created = await db.booking.create({ data });
			return { success: true, data: created };
		}

		const booking = await db.booking.upsert({
			where: { id },
			update: { ...data },
			create: { ...data },
		});
		return { success: true, data: booking };
	} catch (e: any) {
		console.error("[CREATE_BOOKING_ERROR]", e);
		return { success: false, error: "Failed to create booking" };
	}
}

export async function getBookingById(id: string) {
	try {
		const booking = await db.booking.findUnique({ where: { id } });
		if (!booking) {
			return { success: false, error: "Booking not found" };
		}
		return { success: true, data: booking };
	} catch (e: any) {
		console.error("[GET_BOOKING_ERROR]", e);
		return { success: false, error: "Failed to fetch booking" };
	}
}

export async function getAllBookings() {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user",
		};

	try {
		const bookings = await db.booking.findMany({
			orderBy: { createdAt: "desc" },
			include: {
				payment: {
					select: {
						status: true,
						reference: true,
					},
				},
			},
		});

		// Gather all IDs by type
		const allAttractionIds = bookings.flatMap((b) =>
			b.items.filter((i) => i.type === "ATTRACTION").map((i) => i.id)
		);
		const allPackageIds = bookings.flatMap((b) =>
			b.items.filter((i) => i.type === "PACKAGE").map((i) => i.id)
		);

		// Fetch referenced details in bulk
		const [attractions, packages] = await Promise.all([
			db.attractions.findMany({
				where: { id: { in: allAttractionIds } },
			}),
			db.tourPackages.findMany({
				where: { id: { in: allPackageIds } },
			}),
		]);
		// Helper maps for lookup
		const attractionMap = new Map(attractions.map((a) => [a.id, a]));
		const packageMap = new Map(packages.map((p) => [p.id, p]));

		// Add `.details` to each booking item
		const enrichedBookings = bookings.map((b) => ({
			...b,
			items: b.items.map((item) => ({
				...item,
				details:
					item.type === "ATTRACTION"
						? attractionMap.get(item.id) || null
						: packageMap.get(item.id) || null,
			})),
		}));

		return { success: true, data: enrichedBookings };
	} catch (e: any) {
		console.error("[GET_ALL_BOOKINGS_ERROR]", e);
		return { success: false, error: "Failed to fetch bookings" };
	}
}

export async function deleteBooking(id: string) {
	try {
		await db.booking.delete({ where: { id } });
		return { success: true };
	} catch (e: any) {
		console.error("[DELETE_BOOKING_ERROR]", e);
		return {
			success: false,
			error:
				e.code === "P2025"
					? "Booking not found"
					: "Failed to delete booking",
		};
	}
}
