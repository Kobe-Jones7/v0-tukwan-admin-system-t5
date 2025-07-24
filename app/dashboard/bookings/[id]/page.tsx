import { BookingDetails } from "@/components/dashboard/bookings/booking-details"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function BookingDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <BookingDetails bookingId={params.id} />
    </DashboardLayout>
  )
}
