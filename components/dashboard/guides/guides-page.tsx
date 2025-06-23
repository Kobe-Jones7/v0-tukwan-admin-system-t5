"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Phone, Mail, MapPin, Star } from "lucide-react"
import { AddGuideForm } from "./add-guide-form"
import { EditGuideForm } from "./edit-guide-form"

interface Guide {
  id: string
  name: string
  email: string
  phone: string
  speciality: string
  region: string
  city: string
  rating: number
  totalTours: number
  status: "active" | "inactive"
  avatar?: string
  languages: string[]
  experience: number
}

// Mock data for demonstration
const mockGuides: Guide[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    speciality: "Wildlife & Nature",
    region: "East Africa",
    city: "Nairobi",
    rating: 4.8,
    totalTours: 156,
    status: "active",
    languages: ["English", "Swahili"],
    experience: 8,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 234-5678",
    speciality: "Cultural Heritage",
    region: "West Africa",
    city: "Accra",
    rating: 4.9,
    totalTours: 203,
    status: "active",
    languages: ["English", "Twi", "French"],
    experience: 12,
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.brown@email.com",
    phone: "+1 (555) 345-6789",
    speciality: "Adventure Sports",
    region: "Southern Africa",
    city: "Cape Town",
    rating: 4.7,
    totalTours: 89,
    status: "active",
    languages: ["English", "Afrikaans"],
    experience: 5,
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    phone: "+1 (555) 456-7890",
    speciality: "Historical Tours",
    region: "North Africa",
    city: "Cairo",
    rating: 4.6,
    totalTours: 134,
    status: "inactive",
    languages: ["English", "Arabic"],
    experience: 10,
  },
]

export function GuidesPage() {
  const [guides, setGuides] = useState<Guide[]>(mockGuides)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingGuide, setEditingGuide] = useState<Guide | null>(null)

  const filteredGuides = guides.filter((guide) => {
    const matchesSearch =
      guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.city.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRegion = selectedRegion === "all" || guide.region === selectedRegion
    const matchesStatus = selectedStatus === "all" || guide.status === selectedStatus

    return matchesSearch && matchesRegion && matchesStatus
  })

  const handleAddGuide = (newGuide: Omit<Guide, "id" | "rating" | "totalTours">) => {
    const guide: Guide = {
      ...newGuide,
      id: Date.now().toString(),
      rating: 0,
      totalTours: 0,
    }
    setGuides([...guides, guide])
    setIsAddDialogOpen(false)
  }

  const handleEditGuide = (updatedGuide: Guide) => {
    setGuides(guides.map((guide) => (guide.id === updatedGuide.id ? updatedGuide : guide)))
    setEditingGuide(null)
  }

  const handleDeleteGuide = (guideId: string) => {
    setGuides(guides.filter((guide) => guide.id !== guideId))
  }

  const regions = ["East Africa", "West Africa", "Southern Africa", "North Africa", "Central Africa"]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tour Guides</h1>
          <p className="text-gray-600 mt-1">Manage your tour guides and their information</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Guide
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Tour Guide</DialogTitle>
            </DialogHeader>
            <AddGuideForm onSubmit={handleAddGuide} onCancel={() => setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Guides</p>
                <p className="text-2xl font-bold text-gray-900">{guides.length}</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Guides</p>
                <p className="text-2xl font-bold text-green-600">
                  {guides.filter((g) => g.status === "active").length}
                </p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {(guides.reduce((acc, guide) => acc + guide.rating, 0) / guides.length).toFixed(1)}
                </p>
              </div>
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tours</p>
                <p className="text-2xl font-bold text-purple-600">
                  {guides.reduce((acc, guide) => acc + guide.totalTours, 0)}
                </p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Guides List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search guides by name, speciality, or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Regions</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Guides List */}
          <div className="space-y-4">
            {filteredGuides.map((guide) => (
              <div key={guide.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={guide.avatar || "/placeholder.svg"} alt={guide.name} />
                      <AvatarFallback className="text-lg">
                        {guide.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{guide.name}</h3>
                        <Badge variant={guide.status === "active" ? "default" : "secondary"}>{guide.status}</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>
                            {guide.city}, {guide.region}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>{guide.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>{guide.email}</span>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge variant="outline">{guide.speciality}</Badge>
                        {guide.languages.map((lang) => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span>{guide.rating} rating</span>
                        </div>
                        <span>•</span>
                        <span>{guide.totalTours} tours completed</span>
                        <span>•</span>
                        <span>{guide.experience} years experience</span>
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setEditingGuide(guide)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Guide
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteGuide(guide.id)} className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Guide
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No guides found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Guide Dialog */}
      {editingGuide && (
        <Dialog open={!!editingGuide} onOpenChange={() => setEditingGuide(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Tour Guide</DialogTitle>
            </DialogHeader>
            <EditGuideForm guide={editingGuide} onSubmit={handleEditGuide} onCancel={() => setEditingGuide(null)} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
