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

// Sample data for tours
const tours = [
  {
    id: 1,
    title: "Cape Coast Heritage Tour",
    location: "Cape Coast, Ghana",
    price: "GH₵ 1,500",
    duration: "3 days",
    status: "active",
    bookings: 24,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Accra City Tour",
    location: "Accra, Ghana",
    price: "GH₵ 800",
    duration: "1 day",
    status: "active",
    bookings: 42,
    rating: 4.6,
  },
  {
    id: 3,
    title: "Volta Lake Cruise",
    location: "Volta Region, Ghana",
    price: "GH₵ 1,200",
    duration: "2 days",
    status: "draft",
    bookings: 0,
    rating: 0,
  },
  {
    id: 4,
    title: "Kakum National Park Adventure",
    location: "Central Region, Ghana",
    price: "GH₵ 950",
    duration: "1 day",
    status: "active",
    bookings: 36,
    rating: 4.9,
  },
  {
    id: 5,
    title: "Elmina Castle Historical Tour",
    location: "Elmina, Ghana",
    price: "GH₵ 750",
    duration: "1 day",
    status: "inactive",
    bookings: 18,
    rating: 4.7,
  },
]

export default function ToursPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTours = tours.filter((tour) => tour.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <DashboardLayout partnerType="tour-guide">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">My Tours</h1>
          <p className="text-gray-500 mt-1">Manage your tour offerings</p>
        </div>
        <Button className="gap-2" asChild>
          <Link href="/dashboard/tours/new">
            <Plus className="h-4 w-4" />
            Add New Tour
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Tour Listings</CardTitle>
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
                <TableHead>Tour Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Bookings</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTours.map((tour) => (
                <TableRow key={tour.id}>
                  <TableCell className="font-medium">{tour.title}</TableCell>
                  <TableCell>{tour.location}</TableCell>
                  <TableCell>{tour.price}</TableCell>
                  <TableCell>{tour.duration}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        tour.status === "active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : tour.status === "draft"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                      }
                    >
                      {tour.status.charAt(0).toUpperCase() + tour.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{tour.bookings}</TableCell>
                  <TableCell>{tour.rating > 0 ? `${tour.rating}★` : "N/A"}</TableCell>
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
                          <span>Edit Tour</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Manage Schedule</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          <span>Delete Tour</span>
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
