import {
	Attractions,
	Booking,
	Payment,
	TourPackages,
} from "@/app/generated/prisma";

export type BookingItemWithDetails =
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

export type BookingDetails = Booking & {
	items: BookingItemWithDetails[];
} & { payment: Payment | null };
