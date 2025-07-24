import {
	Attractions,
	Booking,
	BookingStatus,
	TourPackages,
} from "@/app/generated/prisma";

type BaseBookingItem = {
	id: string;
	type: Booking["items"][0]["type"];
};

type EnrichedBookingItem =
	| (BaseBookingItem & {
			type: "ATTRACTION";
			details: Attractions | null;
	  })
	| (BaseBookingItem & {
			type: "PACKAGE";
			details: TourPackages | null;
	  });

export type EnrichedBooking = Omit<Booking, "items"> & {
	items: EnrichedBookingItem[];
};
