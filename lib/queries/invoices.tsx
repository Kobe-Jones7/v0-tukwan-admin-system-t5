"use server";

import { renderToBuffer } from "@react-pdf/renderer";
import PdfInvoiceTemplate from "@/components/invoices/pdf-invoice-template";
// import { sendEmailWithPdf } from "@/lib/email";
import { BookingWithItemDetails } from "./bookings";

export const generatePdfAction = async (
	booking: BookingWithItemDetails,
	generatedOn: string
) => {
	try {
		const buffer = await renderToBuffer(
			<PdfInvoiceTemplate
				booking={booking}
				generatedOn={generatedOn}
			/>
		);
		return buffer.toString("base64");
	} catch (error) {
		console.error("PDF generation failed:", error);
		throw new Error("Failed to generate PDF");
	}
};

// export const sendEmailAction = async (
// 	booking: BookingWithItemDetails,
// 	generatedOn: string
// ) => {
// 	try {
// 		// Generate PDF
// 		const pdfBase64 = await generatePdfAction(booking, generatedOn);
// 		const pdfBuffer = Buffer.from(pdfBase64, "base64");

// 		// Send email
// 		await sendEmailWithPdf(
// 			booking.customer_email,
// 			booking.customer_name,
// 			booking.id,
// 			pdfBuffer
// 		);

// 		return { success: true, message: "Email sent successfully" };
// 	} catch (error) {
// 		console.error("Email sending failed:", error);
// 		return {
// 			success: false,
// 			message:
// 				error instanceof Error ? error.message : "Email sending failed",
// 		};
// 	}
// };
