"use server";

import { currentUser } from "@clerk/nextjs/server";

import {
	Attractions,
	Booking,
	BookingItemType,
	BookingStatus,
	Payment,
	TourPackages,
} from "@/app/generated/prisma";
import { db } from "../db";
import { revalidatePath } from "next/cache";
import { routes } from "@/routes";

type BookingItemWithDetails =
	| {
			id: string;
			type: "ATTRACTION";
			details: Attractions | null;
	  }
	| {
			id: string;
			type: "PACKAGE";
			details: TourPackages | null;
	  };

export type BookingWithItemDetails = {
	id: string;
	customer_name: string;
	customer_email: string;
	customer_phone: string;
	tour_date: Date;
	amount: number;
	status: BookingStatus;
	createdAt: Date;
	updatedAt: Date;
	items: BookingItemWithDetails[];
	payment?: Payment | null;
};

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

export async function getBookingById(id: string): Promise<{
	success: boolean;
	data?: BookingWithItemDetails;
	error?: string;
}> {
	try {
		const booking = await db.booking.findUnique({
			where: { id },
			include: { payment: true },
		});

		if (!booking) {
			return { success: false, error: "Booking not found" };
		}

		// Fetch details for all items in parallel
		const itemsWithDetails: BookingItemWithDetails[] = await Promise.all(
			booking.items.map(async (item) => {
				if (item.type === "ATTRACTION") {
					const details = await db.attractions.findUnique({
						where: { id: item.id },
					});
					return {
						id: item.id,
						type: "ATTRACTION",
						details,
					};
				} else if (item.type === "PACKAGE") {
					const details = await db.tourPackages.findUnique({
						where: { id: item.id },
					});
					return {
						id: item.id,
						type: "PACKAGE",
						details,
					};
				}
				// Fallback for unexpected types (should never happen with proper schema)
				return {
					id: item.id,
					type: item.type as "ATTRACTION" | "PACKAGE",
					details: null,
				};
			})
		);
		console.log("item details", itemsWithDetails);

		return {
			success: true,
			data: { ...booking, items: itemsWithDetails },
		};
	} catch (e: any) {
		console.error("[GET_BOOKING_ERROR]", e);
		return { success: false, error: "Failed to fetch booking" };
	}
}

export const getAllBookings = async (opts?: {
	take?: number;
	skip?: number;
}) => {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user",
		};

	try {
		const bookings = await db.booking.findMany({
			take: opts?.take,
			skip: opts?.skip,
			include: {
				payment: true,
			},
			orderBy: { createdAt: "desc" },
		});

		const bookings_with_item_details = await Promise.all(
			bookings.map(async (booking) => {
				const itemsWithDetails = await Promise.all(
					booking.items.map(async (item) => {
						if (item.type === "ATTRACTION") {
							const details = await db.attractions.findUnique({
								where: { id: item.id },
							});
							return { ...item, details };
						} else {
							const details = await db.tourPackages.findUnique({
								where: { id: item.id },
							});
							return { ...item, details };
						}
					})
				);

				return {
					...booking,
					items: itemsWithDetails,
				};
			})
		);
		console.log("[GET_ALL_BOOKINGS]", bookings_with_item_details);
		return {
			success: true,
			data: bookings_with_item_details,
		};
	} catch (e: any) {
		console.error("[GET_ALL_BOOKINGS_ERROR]", e);
		return { success: false, error: "Failed to fetch bookings" };
	}
};

export const updateBookingStatus = async (
	bookingId: string,
	newStatus: BookingStatus
) => {
	const user = await currentUser();
	if (!user)
		return {
			success: false,
			error: "Failed to validate user",
		};

	try {
		// Validate status input
		const validStatuses = Object.values(BookingStatus);
		if (!validStatuses.includes(newStatus)) {
			return {
				success: false,
				error: `Invalid status: ${newStatus}`,
			};
		}

		// Update booking status
		const updatedBooking = await db.booking.update({
			where: { id: bookingId },
			data: {
				status: newStatus,
			},
		});

		revalidatePath(routes.dashboard.bookings.index, "page");
		revalidatePath(routes.dashboard.bookings.details, "page");

		return {
			success: true,
			data: updatedBooking,
		};
	} catch (error: any) {
		console.error(`Failed to update booking ${bookingId}:`, error);

		console.error("[UPDATE_BOOKING_ERROR]", error);
		return { success: false, error: "Failed to update booking status" };
	}
};

// export async function deleteBooking(id: string) {
// 	try {
// 		await db.booking.delete({ where: { id } });
// 		return { success: true };
// 	} catch (e: any) {
// 		console.error("[DELETE_BOOKING_ERROR]", e);
// 		return {
// 			success: false,
// 			error:
// 				e.code === "P2025"
// 					? "Booking not found"
// 					: "Failed to delete booking",
// 		};
// 	}
// }
