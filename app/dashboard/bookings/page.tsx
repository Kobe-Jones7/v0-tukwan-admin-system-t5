import { Attractions, Booking, TourPackages } from "@/app/generated/prisma"
import { BookingsPage } from "@/components/dashboard/bookings/bookings-page"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Table } from "@/components/Table"
import { getAllBookings } from "@/lib/queries/bookings"

type BookingItemWithDetails = {
  id: string
  type: string
  details: Attractions | TourPackages | null
}

type BookingWithItems = Booking & {
  items: BookingItemWithDetails[]
}

export default async function Bookings() {
  const { data: bookings, error } = await getAllBookings()

  return (
    <DashboardLayout>
      <BookingsPage {...{ bookings }} />
    </DashboardLayout>
  )
}
