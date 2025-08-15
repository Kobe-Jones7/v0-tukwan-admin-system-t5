"use server";

import { PaymentProvider, PaymentStatus } from "@/app/generated/prisma";
import { db } from "../db";

type paymentBody = {
	provider: PaymentProvider;
	checkout_url: string;
	access_code: string;
	reference: string;
	status: PaymentStatus;
	order_id: string;
};

export async function createPayment(paymentBody: paymentBody) {
	try {
		const payment = await db.payment.create({
			data: paymentBody
		});

		return { success: true, data: payment };
	} catch (e: any) {
		console.error("CREATE_PAYMENT_ERROR", e);
		return { success: false, error: "Failed to create payment" };
	}
}
