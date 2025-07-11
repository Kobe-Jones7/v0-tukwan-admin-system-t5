import { Plus, MoreHorizontal, Search, Edit, Trash, Eye, Calendar, Router } from "lucide-react"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Attractions } from "@/app/generated/prisma"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { routes } from "@/routes"
import { getAllAttractions } from "@/lib/queries/attractions"
import CustomTableRow from "@/components/custom-table-row"

export default async function ToursPage() {
  const { data: attractions } = await getAllAttractions();

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Attractions</h1>
        </div>
        <Button className="gap-2" asChild>
          <Link href={routes.dashboard.attractions.new}>
            <Plus className="h-4 w-4" />
            Add New Attraction
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          {/* <div className="flex items-center justify-between">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search tours..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div> */}
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Entry Fee</TableHead>
                <TableHead>Bookings</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* show error state */}


              {attractions?.map((attraction) => (
                <CustomTableRow
                  link={routes.dashboard.attractions.update.replace(':slug', attraction.slug)}
                  key={attraction.id}
                >
                  <TableCell className="font-medium">{attraction.name}</TableCell>
                  <TableCell>{attraction.location.address.split(',').pop()}, {attraction.location.region}</TableCell>
                  <TableCell>
                    {attraction.visitingInformation.entry_fee}
                  </TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>N/A</TableCell>
                </CustomTableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
