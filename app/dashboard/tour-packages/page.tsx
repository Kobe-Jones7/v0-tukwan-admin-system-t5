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
import { Plus, MoreHorizontal, Search, Edit, Trash, Eye, Calendar, Users } from "lucide-react"

// Sample data for tour packages
const tourPackages = [
  {
    id: 1,
    title: "Ghana Explorer Package",
    destinations: "Accra, Cape Coast, Kumasi",
    price: "GH₵ 4,500",
    duration: "7 days",
    status: "active",
    bookings: 12,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Beach & Culture Combo",
    destinations: "Accra, Ada, Elmina",
    price: "GH₵ 3,200",
    duration: "5 days",
    status: "active",
    bookings: 8,
    rating: 4.7,
  },
  {
    id: 3,
    title: "Northern Ghana Adventure",
    destinations: "Tamale, Mole, Bolgatanga",
    price: "GH₵ 5,800",
    duration: "8 days",
    status: "draft",
    bookings: 0,
    rating: 0,
  },
  {
    id: 4,
    title: "Volta Region Explorer",
    destinations: "Ho, Wli Falls, Hohoe",
    price: "GH₵ 2,800",
    duration: "4 days",
    status: "active",
    bookings: 15,
    rating: 4.8,
  },
  {
    id: 5,
    title: "Ghana Cultural Immersion",
    destinations: "Accra, Kumasi, Tamale",
    price: "GH₵ 4,200",
    duration: "6 days",
    status: "inactive",
    bookings: 5,
    rating: 4.5,
  },
]

export default function TourPackagesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPackages = tourPackages.filter((pkg) => pkg.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <DashboardLayout partnerType="tour-operator">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Tour Packages</h1>
          <p className="text-gray-500 mt-1">Manage your tour package offerings</p>
        </div>
        <Button className="gap-2" asChild>
          <Link href="/dashboard/tour-packages/new">
            <Plus className="h-4 w-4" />
            Add New Package
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Package Listings</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search packages..."
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
                <TableHead>Package Name</TableHead>
                <TableHead>Destinations</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Bookings</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPackages.map((pkg) => (
                <TableRow key={pkg.id}>
                  <TableCell className="font-medium">{pkg.title}</TableCell>
                  <TableCell>{pkg.destinations}</TableCell>
                  <TableCell>{pkg.price}</TableCell>
                  <TableCell>{pkg.duration}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        pkg.status === "active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : pkg.status === "draft"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                      }
                    >
                      {pkg.status.charAt(0).toUpperCase() + pkg.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{pkg.bookings}</TableCell>
                  <TableCell>{pkg.rating > 0 ? `${pkg.rating}★` : "N/A"}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit Package</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Manage Schedule</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="mr-2 h-4 w-4" />
                          <span>Assign Guides</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          <span>Delete Package</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
