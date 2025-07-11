"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Plus, MoreHorizontal, Search, Edit, Trash, Eye, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"
import { routes } from "@/routes"
import { Attractions } from "@/app/generated/prisma"

// Sample data for tours
const attractions: Attractions[] = [
  {
    name: "Cape Coast Castle",
    id: '1',
    slug: 'cape-coast-heritage-tour',
    category: 'Cultural',
    overview: "A UNESCO World Heritage site and former slave trading post, Cape Coast Castle stands as a powerful reminder of Ghana's complex history and the transatlantic slave trade.",
    history: "Built by the Swedish Africa Company in 1653, Cape Coast Castle became the headquarters of British colonial administration in the Gold Coast. It served as a major hub for the transatlantic slave trade for over 200 years.",
    cultural_significance: "",
    images: [
      "http://localhost:3000/images/cape-coast-castle-oceanview.webp",
      "http://localhost:3000/cape-coast-castle-ghana.png",
      "http://localhost:3000/cape-coast-castle-interior.png"],
    location: {
      address: "Victoria Rd, Cape Coast",
      country: "Ghana",
      country_code: "GH",
      city: "Cape Coast",
      longitude: -1.2410174900423185,
      latitude: 5.103817575656471,
      region: "Central Region",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    visitingInformation: {
      entry_fee: "GH₵ 40 (Adults), GH₵ 20 (Students)",
      opening_hours: "9:00 AM - 5:00 PM daily"
    }
  }
]

export default function ToursPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTours = attractions.filter((attraction) => attraction.slug.toLowerCase().includes(searchQuery.toLowerCase()))

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
          <div className="flex items-center justify-between">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search tours..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
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
              {filteredTours.map((attraction) => (
                <TableRow className="cursor-pointer" key={attraction.id} onClick={() => { router.push(routes.dashboard.attractions.details.replace(':slug', attraction.id)) }}>
                  <TableCell className="font-medium">{attraction.name}</TableCell>
                  <TableCell>{attraction.location.address.split(',').pop()}, {attraction.location.region}</TableCell>
                  <TableCell>
                    {attraction.visitingInformation.entry_fee}
                  </TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
