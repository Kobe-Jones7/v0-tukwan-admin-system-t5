// components/Invoice/PdfInvoiceTemplate.tsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { BookingWithItemDetails } from "@/lib/queries/bookings";
import { formatCurrency } from "@/lib/utils";

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 12,
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e40af', // blue-800
    },
    website: {
        color: '#4b5563', // gray-600
        marginTop: 4,
    },
    section: {
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        color: '#374151', // gray-700
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f3f4f6', // gray-100
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontWeight: 'bold',
        color: '#374151', // gray-700
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb', // gray-200
    },
    col1: { width: '40%' },
    col2: { width: '15%' },
    col3: { width: '15%' },
    col4: { width: '15%' },
    col5: { width: '15%' },
    totalSection: {
        marginTop: 20,
        alignItems: 'flex-end',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        marginBottom: 8,
    },
    totalLabel: {
        fontWeight: 'bold',
        color: '#374151',
    },
    grandTotal: {
        borderTopWidth: 1,
        borderTopColor: '#d1d5db', // gray-300
        paddingTop: 8,
        fontWeight: 'bold',
        fontSize: 14,
    },
    footer: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 10,
        color: '#6b7280', // gray-500
    },
});

interface PdfInvoiceTemplateProps {
    booking: BookingWithItemDetails;
    generatedOn: string;
}

export default function PdfInvoiceTemplate({ booking, generatedOn }: PdfInvoiceTemplateProps) {
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
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>TRIPIFY</Text>
                    <Text style={styles.website}>www.tripify.dev</Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.section}>
                        <Text style={styles.label}>Invoice To</Text>
                        <Text>{booking.customer_name}</Text>
                        <Text>{booking.customer_email}</Text>
                        {booking.customer_phone && <Text>{booking.customer_phone}</Text>}
                    </View>
                    <View style={styles.section}>
                        <Text>
                            <Text style={styles.label}>Date: </Text>
                            {new Date(booking.createdAt).toLocaleDateString()}
                        </Text>
                        <Text>
                            <Text style={styles.label}>Invoice ID #: </Text>
                            {booking.id.slice(-8)}
                        </Text>
                        <Text>
                            <Text style={styles.label}>Payment Method: </Text>
                            {booking.payment?.provider || 'N/A'}
                        </Text>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    {/* Table Header */}
                    <View style={styles.tableHeader}>
                        <Text style={styles.col1}>Ticket</Text>
                        <Text style={styles.col2}>Type</Text>
                        <Text style={styles.col5}>Price</Text>
                    </View>

                    {/* Table Rows */}
                    {booking.items.map((item, index) => (
                        <View key={item.id} style={styles.tableRow}>
                            <Text style={styles.col1}>{item.details?.name}</Text>
                            <Text style={styles.col2}>
                                {item.type.charAt(0) + item.type.slice(1).toLowerCase()}
                            </Text>
                            <Text style={styles.col5}>{formatCurrency(booking.amount)}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.totalSection}>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Subtotal</Text>
                        <Text>{formatCurrency(subtotal)}</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>NHIL(2.5%)</Text>
                        <Text>{formatCurrency(NHIL)}</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>GETFund(2.5%)</Text>
                        <Text>{formatCurrency(GETFund)}</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>COVID(1%)</Text>
                        <Text>{formatCurrency(COVID_TAX)}</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>VAT(15%)</Text>
                        <Text>{formatCurrency(VAT)}</Text>
                    </View>
                    <View style={[styles.totalRow, styles.grandTotal]}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={{ color: '#1d4ed8' }}>{formatCurrency(booking.amount)}</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text>Generated on {generatedOn}</Text>
                </View>
            </Page>
        </Document>
    );
};
