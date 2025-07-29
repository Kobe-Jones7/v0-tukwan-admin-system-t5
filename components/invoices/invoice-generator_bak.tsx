import React, { useRef, useState } from 'react';

import { BookingWithItemDetails } from "@/lib/queries/bookings";
import { generatePdf } from "@/lib/pdfGenerator";
import BookingInvoice from "./booking-invoice_bak";
import { Button } from "../ui/button";
import { DownloadIcon } from "lucide-react";

interface InvoiceGeneratorProps {
    booking: BookingWithItemDetails;
}

const InvoiceGenerator: React.FC<InvoiceGeneratorProps> = ({ booking }) => {
    const invoiceRef = useRef<HTMLDivElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [emailStatus, setEmailStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);

    const generatedOn = new Date().toISOString();

    const handleDownloadPdf = async () => {
        if (invoiceRef.current) {
            try {
                await generatePdf(invoiceRef.current, `tripify-invoice-${booking.id.slice(-6)}.pdf`);
            } catch (error) {
                console.error('PDF generation failed:', error);
                alert('Failed to generate PDF. Please try again.');
            }
        }
    };

    // const handleSendEmail = async () => {
    //     if (!invoiceRef.current || !booking.customer_email) return;

    //     setIsSending(true);
    //     setEmailStatus(null);

    //     try {
    //         // Generate PDF first
    //         const pdfBlob = await generatePdf(invoiceRef.current, '', true);

    //         // Send email with PDF attachment
    //         const result = await sendEmail({
    //             to: booking.customer_email,
    //             subject: `Your Tripify Invoice #${booking.id.slice(-8)}`,
    //             text: `Hi ${booking.customer_name},\n\nPlease find your invoice attached.\n\nThank you for choosing Tripify!`,
    //             attachment: {
    //                 filename: `tripify-invoice-${booking.id.slice(-6)}.pdf`,
    //                 content: pdfBlob,
    //             }
    //         });

    //         setEmailStatus({
    //             success: result.success,
    //             message: result.message || 'Email sent successfully'
    //         });
    //     } catch (error) {
    //         setEmailStatus({
    //             success: false,
    //             message: 'Failed to send email. Please try again later.'
    //         });
    //     } finally {
    //         setIsSending(false);
    //     }
    // };

    return (
        <div className="">
            {/* Invoice Preview */}
            <div ref={invoiceRef}>
                <BookingInvoice
                    // className="hidden"
                    booking={booking}
                    generatedOn={generatedOn}
                />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
                {/* <button
                    onClick={handleDownloadPdf}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Download PDF
                </button> */}
                <Button variant="outline" size="sm" onClick={handleDownloadPdf}>
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Download
                </Button>

                {/* <button
                    onClick={handleSendEmail}
                    disabled={isSending || !booking.customer_email}
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 transition-colors"
                >
                    {isSending ? 'Sending...' : 'Send via Email'}
                </button> */}
            </div>

            {/* Email Status */}
            {emailStatus && (
                <div className={`mt-4 text-center p-3 rounded-md ${emailStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                    {emailStatus.message}
                </div>
            )}

            {!booking.customer_email && (
                <div className="mt-4 text-center text-yellow-700">
                    No email associated with this booking
                </div>
            )}
        </div>
    );
};

export default InvoiceGenerator;