import { Attractions, Booking, TourPackages } from "@/app/generated/prisma"
import { BookingsPage } from "@/components/dashboard/bookings/bookings-page"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Table } from "@/components/Table"
import { getAllBookings } from "@/lib/queries/bookings"

export default async function Bookings() {
  const { data: bookings, error } = await getAllBookings()

  return (
    <DashboardLayout>
      <BookingsPage {...{ bookings }} />
    </DashboardLayout>
  )
}
