"use client"

import { useState } from "react"
import { format } from "date-fns"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeftIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  DownloadIcon,
  MapPinIcon,
  PrinterIcon,
  SendIcon,
  UserIcon,
  UsersIcon,
  XCircleIcon,
} from "lucide-react"

// Mock data for a single booking
const mockBookingDetails = {
  id: "B001",
  tourPackage: "Accra City Tour",
  tourId: "T001",
  customerName: "John Doe",
  customerEmail: "john.doe@example.com",
  customerPhone: "+233 20 123 4567",
  bookingDate: new Date("2023-05-15"),
  tourDate: new Date("2023-06-10"),
  tourEndDate: new Date("2023-06-10"),
  amount: 250,
  status: "confirmed",
  paymentStatus: "paid",
  participants: 2,
  paymentMethod: "Credit Card",
  paymentId: "PAY123456",
  specialRequests: "Vegetarian meals preferred. Early pickup if possible.",
  tourDetails: {
    duration: "1 day",
    startTime: "9:00 AM",
    meetingPoint: "Accra Central Hotel",
    includedMeals: ["Lunch"],
    includedTransportation: true,
    guide: "Emmanuel Mensah",
  },
  participants: [
    {
      name: "John Doe",
      age: 35,
      nationality: "American",
      passportNumber: "P123456789",
    },
    {
      name: "Jane Doe",
      age: 32,
      nationality: "American",
      passportNumber: "P987654321",
    },
  ],
  timeline: [
    {
      date: new Date("2023-05-15T10:30:00"),
      action: "Booking created",
      user: "John Doe",
    },
    {
      date: new Date("2023-05-15T10:35:00"),
      action: "Payment received",
      user: "System",
    },
    {
      date: new Date("2023-05-15T11:00:00"),
      action: "Booking confirmed",
      user: "Admin",
    },
    {
      date: new Date("2023-05-20T09:15:00"),
      action: "Confirmation email sent",
      user: "System",
    },
  ],
}

interface BookingDetailsProps {
  bookingId: string
}

export function BookingDetails({ bookingId }: BookingDetailsProps) {
  const [activeTab, setActiveTab] = useState("details")

  // In a real app, you would fetch the booking details based on the ID
  const booking = mockBookingDetails

  // Status badge renderer
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Cancelled</Badge>
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Completed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Payment status badge renderer
  const renderPaymentBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Paid</Badge>
      case "partial":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Partial</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "refunded":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Refunded</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/bookings">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Bookings
            </Link>
          </Button>
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Booking #{booking.id}</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <PrinterIcon className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <SendIcon className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button variant="outline" size="sm">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Status:</span>
          {renderStatusBadge(booking.status)}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Payment:</span>
          {renderPaymentBadge(booking.paymentStatus)}
        </div>
        <div className="ml-auto flex gap-2">
          {booking.status === "pending" && (
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <CheckCircleIcon className="mr-2 h-4 w-4" />
              Confirm Booking
            </Button>
          )}
          {booking.status !== "cancelled" && booking.status !== "completed" && (
            <Button size="sm" variant="destructive">
              <XCircleIcon className="mr-2 h-4 w-4" />
              Cancel Booking
            </Button>
          )}
          {booking.status === "confirmed" && (
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
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
          <TabsTrigger value="participants">Participants</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Booking Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Booking ID:</span>
                  <span>{booking.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Tour Package:</span>
                  <span>{booking.tourPackage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Booking Date:</span>
                  <span>{format(booking.bookingDate, "MMM d, yyyy")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Tour Date:</span>
                  <span>{format(booking.tourDate, "MMM d, yyyy")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Tour End Date:</span>
                  <span>{format(booking.tourEndDate, "MMM d, yyyy")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Number of Participants:</span>
                  <span>{booking.participants.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Total Amount:</span>
                  <span className="font-bold">${booking.amount.toFixed(2)}</span>
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
                  <span className="text-sm">Duration: {booking.tourDetails.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Start Time: {booking.tourDetails.startTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Meeting Point: {booking.tourDetails.meetingPoint}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Guide: {booking.tourDetails.guide}</span>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Included:</h4>
                  <ul className="list-inside list-disc text-sm">
                    {booking.tourDetails.includedMeals.map((meal, index) => (
                      <li key={index}>{meal}</li>
                    ))}
                    {booking.tourDetails.includedTransportation && <li>Transportation</li>}
                  </ul>
                </div>
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
                      <span>{renderPaymentBadge(booking.paymentStatus)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Payment Method:</span>
                      <span>{booking.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Payment ID:</span>
                      <span>{booking.paymentId}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Subtotal:</span>
                      <span>${booking.amount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Tax:</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Total:</span>
                      <span className="font-bold">${booking.amount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {booking.specialRequests && (
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Special Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{booking.specialRequests}</p>
                </CardContent>
              </Card>
            )}
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
                  <h3 className="text-lg font-medium">{booking.customerName}</h3>
                  <p className="text-sm text-muted-foreground">Primary Contact</p>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Contact Information</h4>
                  <div className="space-y-1">
                    <p className="text-sm">Email: {booking.customerEmail}</p>
                    <p className="text-sm">Phone: {booking.customerPhone}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Booking History</h4>
                  <p className="text-sm">Total Bookings: 1</p>
                  <p className="text-sm">First Booking: {format(booking.bookingDate, "MMM d, yyyy")}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" size="sm">
                <SendIcon className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button size="sm">View Customer Profile</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="participants">
          <Card>
            <CardHeader>
              <CardTitle>Participants</CardTitle>
              <CardDescription>Total participants: {booking.participants.length}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {booking.participants.map((participant, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <UsersIcon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{participant.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {participant.age} years old • {participant.nationality}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-2 md:grid-cols-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Passport Number:</span>
                        <span className="text-sm">{participant.passportNumber}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
