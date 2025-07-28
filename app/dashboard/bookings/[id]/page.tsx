import { BookingsDetail } from "@/components/dashboard/bookings/booking-details";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { getBookingById } from "@/lib/queries/bookings";
import { BookingItemWithDetails } from "@/types/bookings";
import Image from "next/image";

type Props = { params: Promise<{ id: string }> }

export default async function BookingDetailsPage({ params }: Props) {

  const { id } = await params;

  const { data, error, success } = await getBookingById(id);
  console.log("booking details", data, error, success);

  return (
    <DashboardLayout>
      {success && data &&
        <BookingsDetail
          data={{
            ...data,
            items: data.items.map(
              (item: any) => item
            ) as BookingItemWithDetails[]
          }}
        />
      }
      {/* {error &&
        <div className="flex flex-col h-[calc(100dvh-7rem)] items-center justify-center gap-4">
          <Image src="/images/booking-error.png" alt="Error" width={192} height={192} />
          <h2 className="text-xl font-semibold">Error Loading Booking</h2>
          <p className="text-gray-500">Please try again later.</p>
        </div>
      } */}
      <></>
    </DashboardLayout>
  )
}
