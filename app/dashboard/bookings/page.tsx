import { BookingsPage } from "@/components/dashboard/bookings/bookings-page"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function Bookings() {
  return (
    <DashboardLayout partnerType="tour-operator">
      <BookingsPage />
    </DashboardLayout>
  )
}
