import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/lib/db";
import { translatePaystackStatus } from "@/lib/paystack";
import { revalidatePath } from "next/cache";
import { routes } from "@/routes";

export const POST = async (req: NextRequest, res: NextResponse) => {
	const reqBody = await req.json();
	const secret = process.env.PAYSTACK_SECRET_KEY!;

	//validate event
	const hash = crypto
		.createHmac("sha512", secret)
		.update(JSON.stringify(reqBody))
		.digest("hex");

	if (hash == req.headers.get("x-paystack-signature")) {
		// Retrieve the request's body
		const {
			metadata: { order_id },
			status,
		} = reqBody.data;

		// find payment with reference and update it's status
		await db.payment.update({
			where: {
				order_id,
			},
			data: { status: await translatePaystackStatus(status) },
		});

		// revalidate orders path
		revalidatePath(routes.dashboard.bookings.index, "page");
		revalidatePath(routes.dashboard.bookings.details, "page");

		return new NextResponse("", { status: 200 });
	} else {
		throw new Error("Failed to validate origin");
	}
};
