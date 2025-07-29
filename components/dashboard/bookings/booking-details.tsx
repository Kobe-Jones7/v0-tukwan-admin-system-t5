"use client"

import {
  ArrowLeftIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  DownloadIcon,
  MapPinIcon,
  SendIcon,
  UserIcon,
  UsersIcon,
  XCircleIcon,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { useState } from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { BookingDetails } from "@/types/bookings"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { base64ToBlob, formatCurrency } from "@/lib/utils"
import { routes } from "@/routes"
import { BookingWithItemDetails, updateBookingStatus } from "@/lib/queries/bookings"
import Link from "next/link"
import { toast } from "sonner"
import { renderPaymentBadge, renderStatusBadge } from "../badges"
import InvoiceGenerator from "@/components/invoices/invoice-generator_bak"
import { generatePdfAction } from "@/lib/queries/invoices"

interface BookingDetailsProps {
  data: BookingWithItemDetails
}

export function BookingsDetail({ data }: BookingDetailsProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("details")
  const [updatingStatus, setUpdatingStatus] = useState<'confirmed' | 'cancelled' | 'completed' | null>(null)
  const [isDownloading, setIsDownloading] = useState(false);


  const confirmBooking = async () => {
    toast('confirming booking')
    setUpdatingStatus('confirmed')

    const updatedBooking = await updateBookingStatus(data.id, "confirmed")
    console.log("Updated booking status:", updatedBooking)
    if (!updatedBooking.success) {
      toast.error("Failed to confirm booking")
      return
    }

    setUpdatingStatus(null)
    toast.success("Booking confirmed")
    setActiveTab("details")
  }

  const cancelBooking = async () => {
    toast('cancelling booking')
    setUpdatingStatus('cancelled')

    const updatedBooking = await updateBookingStatus(data.id, "cancelled")
    console.log("Updated booking status:", updatedBooking)
    if (!updatedBooking.success) {
      toast.error("Failed to cancel booking")
      return
    }

    setUpdatingStatus(null)
    toast.success("Booking cancelled")
    setActiveTab("details")
  }

  const completeBooking = async () => {
    toast('completing booking')
    setUpdatingStatus('completed')

    const updatedBooking = await updateBookingStatus(data.id, "completed")
    console.log("Updated booking status:", updatedBooking)
    if (!updatedBooking.success) {
      toast.error("Failed to complete booking")
      return
    }

    setUpdatingStatus(null)
    toast.success("Booking completed")
    setActiveTab("details")
  }

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    try {
      const base64Pdf = await generatePdfAction(data, format(new Date(), "do MM, yyyy HH:mm a"));
      const blob = base64ToBlob(base64Pdf, 'application/pdf');
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `tripify-invoice-${data.id.slice(-7)}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      // Clean up
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error('PDF download failed:', error);
      alert('Failed to download PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };


  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => { router.push(routes.dashboard.bookings.index) }}>
            <ArrowLeftIcon className="h-4 w-4" />
          </Button>
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Booking #{data.id?.slice(-7)}</h1>
        <div className="flex items-center gap-2">
          {/* <Button variant="outline" size="sm">
            <PrinterIcon className="mr-2 h-4 w-4" />
            Print
          </Button> */}
          {/* <Button variant="outline" size="sm">
            <SendIcon className="mr-2 h-4 w-4" />
            Email
          </Button> */}
          <Button variant="outline" size="sm" onClick={handleDownloadPdf} disabled={isDownloading}>
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download
          </Button>

          {/* <InvoiceGenerator booking={data} /> */}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Status:</span>
          {renderStatusBadge(data.status)}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Payment:</span>
          {renderPaymentBadge(data.payment?.status ?? '')}
        </div>
        <div className="ml-auto flex gap-2">
          {['pending', 'cancelled'].includes(data.status) && (
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700"
              onClick={confirmBooking}
              disabled={!!updatingStatus || updatingStatus === 'confirm'}
            >
              <CheckCircleIcon className="mr-2 h-4 w-4" />
              Confirm Booking
            </Button>
          )}

          {!['cancelled', 'completed'].includes(data.status) && (
            <Button
              size="sm"
              variant="destructive"
              onClick={cancelBooking}
              disabled={!!updatingStatus || updatingStatus === 'cancelled'}
            >
              <XCircleIcon className="mr-2 h-4 w-4" />
              Cancel Booking
            </Button>
          )}
          {!['cancelled', 'completed'].includes(data.status) && (
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
              disabled={!!updatingStatus || updatingStatus === 'completed'}
              onClick={completeBooking}
            >
              <ClockIcon className="mr-2 h-4 w-4" />
              Mark as Completed
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="details">Booking Details</TabsTrigger>
          <TabsTrigger value="customer">Customer Info</TabsTrigger>
          {/* <TabsTrigger value="timeline">Timeline</TabsTrigger> */}
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Booking Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Booking ID</span>
                  <span>{data.id?.slice(-7)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Attraction/Package</span>
                  <span>{data.items[0].details?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Booking Date</span>
                  <span>{format(data.createdAt, "MMM d, yyyy")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Tour Date</span>
                  <span>{format(data.tour_date, "MMM d, yyyy")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Total Amount:</span>
                  <span className="font-bold">{formatCurrency(data.amount)}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tour Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Duration: {data.items[0].type === "ATTRACTION" ? "1 day" : `${data.items[0].details?.duration} day${data.items[0].details?.duration! > 1 ? 's' : ''}`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Guide: Emmanuel Mensah</span>
                </div>
                {data.items[0].type === "PACKAGE" &&
                  <>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Included:</h4>
                      <ul className="list-inside list-disc text-sm">
                        {data.items[0].type === "PACKAGE" &&
                          data.items[0].details?.whats_included?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </>
                }
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Payment Status:</span>
                      <span>{renderPaymentBadge(data.payment?.status ?? '')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Payment Method:</span>
                      <span>{data.payment?.provider}</span>
                    </div>
                    {/* <div className="flex justify-between">
                      <span className="text-sm font-medium">Payment ID:</span>
                      <span>{data.payment?.reference}</span>
                    </div> */}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Subtotal:</span>
                      <span>${formatCurrency(data.amount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Total:</span>
                      <span className="font-bold">{formatCurrency(data.amount)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customer">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <UserIcon className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{data.customer_name}</h3>
                  <p className="text-sm text-muted-foreground">Primary Contact</p>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Contact Information</h4>
                  <div className="space-y-1">
                    <p className="text-sm">Email: {data.customer_email}</p>
                    <p className="text-sm">Phone: {data.customer_phone}</p>
                  </div>
                </div>
                {/* <div className="space-y-2">
                  <h4 className="text-sm font-medium">Booking History</h4>
                  <p className="text-sm">Total Bookings: 1</p>
                  <p className="text-sm">First Booking: {format(booking.bookingDate, "MMM d, yyyy")}</p>
                </div> */}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Link href={`sms:${data.customer_phone}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <SendIcon className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </Link>
              {/* <Button size="sm">View Customer Profile</Button> */}
            </CardFooter>
          </Card>
        </TabsContent>

        {/* <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Booking Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {booking.timeline.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <ClockIcon className="h-4 w-4" />
                      </div>
                      {index < booking.timeline.length - 1 && <div className="h-full w-0.5 bg-gray-200" />}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">{event.action}</p>
                        <p className="text-xs text-muted-foreground">
                          {format(event.date, "MMM d, yyyy 'at' h:mm a")} • by {event.user}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent> */}
      </Tabs>
    </div>
  )
}
