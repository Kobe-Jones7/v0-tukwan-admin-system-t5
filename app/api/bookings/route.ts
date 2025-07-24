// app/api/bookings/route.ts
import { db } from "@/lib/db";
import { initializePayment } from "@/lib/paystack";
import { upsertBooking } from "@/lib/queries/bookings";
import { createPayment } from "@/lib/queries/payment";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		console.log(body);

		const {
			data: booking,
			success: bookingSuccess,
			error: bookingError,
		} = await upsertBooking(body);

		let result = booking;

		// initialize payment for booking
		let payment;
		if (booking) {
			payment = await initializePayment({
				amount: body.amount * 100, // Paystack expects amount in smallest currency unit
				email: body.customer_email,
				order_id: booking.id,
			});

			console.log("payment:", payment);
			await createPayment({
				provider: "PAYSTACK",
				checkout_url: payment.data.authorization_url,
				access_code: payment.data.access_code,
				reference: payment.data.reference,
				status: "PENDING",
				order_id: booking.id,
			})
				.then((paymentResponse) => {
					if (!paymentResponse.success) {
						console.error(
							"[CREATE_PAYMENT_ERROR]",
							paymentResponse.error
						);
						return Error(paymentResponse.error);
					}

					return paymentResponse;
				})
				.catch((error) => {
					console.error("[CREATE_PAYMENT_ERROR]", error);
				});
		}

		if (!bookingSuccess) {
			return NextResponse.json({ error: bookingError }, { status: 400 });
		}

		return NextResponse.json(
			{
				data: {
					...result,
					payment: { checkout_link: payment?.data.authorization_url },
				},
				message: "Booking created successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error("[API_BOOKING_POST]", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
