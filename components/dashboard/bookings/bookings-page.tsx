"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DownloadIcon, FilterIcon, SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { BookingsFilters } from "./bookings-filters"
import { Booking } from "@/app/generated/prisma"
import { Button } from "@/components/ui/button"
import { BookingsList } from "./bookings-list"
import { Input } from "@/components/ui/input"
import { Table } from "@/components/Table"
import { routes } from "@/routes"
import { EnrichedBooking } from "@/types/bookings"
import { Badge, BadgeProps } from "@/components/ui/badge"
import clsx from "clsx"
import { format } from "date-fns"
import { formatCurrency } from "@/lib/utils"

type Props = { bookings?: any[] }

export function BookingsPage({ bookings: data }: Props) {
  console.log(data)
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState("all")
  const router = useRouter()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Bookings</h1>
        {/* <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div> */}
      </div>

      {/* <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <div className="relative w-full">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search bookings..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
            <FilterIcon className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div> */}

      {showFilters && <BookingsFilters />}

      <div className="w-full space-y-4">
        <div className="rounded-md border">
          <Table>
            <thead>
              <tr>
                <Table.TH className="font-semibold">Booking ID</Table.TH>
                <Table.TH className="font-semibold">Tour/Package</Table.TH>
                <Table.TH className="font-semibold">Customer</Table.TH>
                <Table.TH className="font-semibold">Booking Date</Table.TH>
                <Table.TH className="font-semibold">Tour Date</Table.TH>
                <Table.TH className="font-semibold">Amount</Table.TH>
                <Table.TH className="font-semibold">Status</Table.TH>
                <Table.TH className="font-semibold">Payment</Table.TH>
              </tr>
            </thead>

            <tbody className="divide-y min-h-32">
              {data?.map((item, idx: number) => {
                const paymentBadgeVariant: BadgeProps['variant'] =
                  item.payment?.status === 'PENDING'
                    ? 'default'
                    : item.payment?.status === 'COMPLETED'
                      ? 'success'
                      : item.payment?.status === 'FAILED'
                        ? 'destructive'
                        : 'destructive'
                return <tr
                  key={idx}
                  className="cursor-pointer"
                  onClick={() => {
                    router.push(
                      routes.dashboard.bookings.details.replace(":slug", item.id)
                    );
                  }}
                >
                  <Table.TD className="whitespace-nowrap font-semibold">
                    {item.id.slice(0, 7)}
                  </Table.TD>
                  <Table.TD className="whitespace-nowrap">
                    {item.items.map((_item: any, idx: string) => {
                      console.log(_item.details?.name)
                      return <div className="flex flex-col gap-2" key={idx}>
                        {_item.details?.name}
                        <Badge variant={_item.type === 'ATTRACTION' ? 'default' : 'destructive'} className="lowercase w-fit">{_item.type}</Badge>
                      </div>
                    }
                    )}
                  </Table.TD>
                  <Table.TD className="whitespace-nowrap">
                    <div className="flex flex-col items-center gap-2" >
                      <span className="font-medium">{item.customer_name}</span>
                      <span className="text-muted-foreground">{item.customer_email}</span>
                      <span className="text-muted-foreground">{item.customer_phone}</span>
                    </div>
                  </Table.TD>
                  <Table.TD className="whitespace-nowrap">
                    {format(item.createdAt, 'do MMM, yyyy')}
                  </Table.TD>
                  <Table.TD className="whitespace-nowrap">
                    {format(item.tour_date, 'do MMM, yyyy')}
                  </Table.TD>
                  <Table.TD className="whitespace-nowrap">
                    {formatCurrency(item.amount)}
                  </Table.TD>
                  <Table.TD className="whitespace-nowrap">
                    <Badge variant={'secondary'} className="lowercase">{item.status}</Badge>
                  </Table.TD>
                  <Table.TD className="whitespace-nowrap">
                    <Badge variant={paymentBadgeVariant} className="uppercase">{item.payment?.status ?? 'FAILED'}</Badge>
                  </Table.TD>
                </tr>
              }
              )}

              {!data?.length && <Table.Empty title="No bookings found" />}
            </tbody>
          </Table>
        </div>
        {/* <div className="flex items-center justify-between space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>

          <div className="text-muted-foreground text-sm">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div> */}
      </div>
    </div >
  )
}
