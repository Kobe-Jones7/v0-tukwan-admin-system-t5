import React from 'react'

import { BookingWithItemDetails } from "@/lib/queries/bookings";
import { formatCurrency } from "@/lib/utils";
import clsx from "clsx";

type Props = {
    className?: string;
    booking: BookingWithItemDetails;
    generatedOn: string;
}

const BookingInvoice = ({ booking, className, generatedOn }: Props) => {
    const TAX_VALUE = 121.9;
    const subtotal = ((booking.amount * 100) / TAX_VALUE);
    const NHIL = (subtotal * 0.025);
    const GETFund = (subtotal * 0.025);
    const COVID_TAX = (subtotal * 0.01);
    const LEVY_INCLUSIVE = booking.amount - (NHIL + GETFund + COVID_TAX);
    const VAT = (subtotal * 0.15);
    console.log({
        subtotal,
        NHIL,
        GETFund,
        COVID_TAX,
        LEVY_INCLUSIVE,
        VAT,
        bookingAmount: booking.amount
    });


    return (
        <div className={clsx("max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg", className)} id="invoice-template">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-800">tukwan</h1>
                <p className="text-gray-600">www.tukwan.app</p>
            </header>

            {/* Invoice To + Details */}
            <div className="flex flex-wrap justify-between mb-8">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Invoice To</h2>
                    <p className="text-gray-800">{booking.customer_name}</p>
                    <p className="text-gray-600">{booking.customer_email}</p>
                    {booking.customer_phone && (
                        <p className="text-gray-600">{booking.customer_phone}</p>
                    )}
                </div>

                <div className="text-right">
                    <div className="mb-2">
                        <span className="font-semibold text-gray-700">Date: </span>
                        <span className="text-gray-600">
                            {new Date(booking.createdAt).toLocaleDateString()}
                        </span>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold text-gray-700">Invoice ID #: </span>
                        <span className="text-gray-600">{booking.id.slice(-8)}</span>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-700">Payment Method: </span>
                        <span className="text-gray-600">
                            {booking.payment?.provider || 'N/A'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Items Table */}
            <table className="w-full mb-8">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Ticket</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.items.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="py-3 px-4 text-gray-800">{item.details?.name}</td>
                            <td className="py-3 px-4 text-gray-600">
                                {item.type.charAt(0) + item.type.slice(1).toLowerCase()}
                            </td>
                            <td className="py-3 px-4 text-gray-600">{item.type === 'PACKAGE' ? formatCurrency(item.details?.price!) : '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <hr className="border-t border-gray-300 my-6" />

            {/* Totals */}
            <div className="flex justify-end">
                <div className="w-64">
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">Subtotal</span>
                        <span className="text-gray-800">{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">Tax</span>
                        {/* <span className="text-gray-800">{formatCurrency(booking.taxAmount)}</span> */}
                    </div>
                    <div className="flex justify-between mb-2 pt-2 border-t border-gray-300">
                        <span className="font-semibold text-lg text-gray-900">Total</span>
                        <span className="font-bold text-lg text-blue-700">
                            {formatCurrency(booking.amount)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-10 text-center text-sm text-gray-500">
                Generated on {generatedOn}
            </footer>
        </div>
    )
}

export default BookingInvoice