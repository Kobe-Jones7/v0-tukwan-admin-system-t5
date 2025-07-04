"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Clock, Grid, List, Sparkles } from "lucide-react"
import { attractions, getAllCategories, getAllRegions } from "@/data/ghana-attractions"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { EnhancedSearchBar } from "@/components/enhanced-search-bar"

export default function AttractionsPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const initialRegion = searchParams.get("region") || ""
  const initialCategory = searchParams.get("category") || ""

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)
  const [selectedRegion, setSelectedRegion] = useState<string>(initialRegion)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categories = getAllCategories()
  const regions = getAllRegions()

  // Filter attractions based on search query, category, and region
  const filteredAttractions = attractions.filter((attraction) => {
    const matchesSearch =
      searchQuery === "" ||
      attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.region.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      selectedCategory === "" || selectedCategory === "all" || attraction.category === selectedCategory

    const matchesRegion = selectedRegion === "" || selectedRegion === "all" || attraction.region === selectedRegion

    return matchesSearch && matchesCategory && matchesRegion
  })

  const handleRegularSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Ghana Attractions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Ghana's Attractions</h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Explore historical sites, natural wonders, and cultural landmarks across Ghana
              </p>

              {/* Enhanced Search Bar */}
              <div className="max-w-xl">
                <EnhancedSearchBar
                  placeholder="Search attractions or try AI for custom tours..."
                  onRegularSearch={handleRegularSearch}
                />
                <div className="mt-2 text-sm opacity-75">
                  <Sparkles className="inline h-4 w-4 mr-1" />
                  Can't find what you're looking for? Try our AI search!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8 flex-1">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">View:</span>
            <Tabs defaultValue="grid" value={viewMode} onValueChange={(value) => setViewMode(value as "grid" | "list")}>
              <TabsList>
                <TabsTrigger value="grid">
                  <Grid className="h-4 w-4 mr-1" />
                  Grid
                </TabsTrigger>
                <TabsTrigger value="list">
                  <List className="h-4 w-4 mr-1" />
                  List
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-500">
            Showing {filteredAttractions.length} {filteredAttractions.length === 1 ? "attraction" : "attractions"}
            {selectedCategory && selectedCategory !== "all" && ` in ${selectedCategory}`}
            {selectedRegion && selectedRegion !== "all" && ` from ${selectedRegion}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAttractions.map((attraction) => (
              <Link href={`/attractions/${attraction.id}`} key={attraction.id}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={
                        attraction.images[0] ||
                        `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(attraction.name) || "/placeholder.svg"}`
                      }
                      alt={attraction.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-blue-600">{attraction.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-1">{attraction.name}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{attraction.region}</span>
                    </div>
                    <p className="text-gray-600 line-clamp-2 text-sm">{attraction.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between text-sm text-gray-500">
                    {attraction.visitingInfo?.openingHours && (
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="line-clamp-1">
                          {attraction.visitingInfo.openingHours.length > 20
                            ? attraction.visitingInfo.openingHours.substring(0, 20) + "..."
                            : attraction.visitingInfo.openingHours}
                        </span>
                      </div>
                    )}
                    <Button variant="link" size="sm" className="p-0 h-auto text-blue-600">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-4">
            {filteredAttractions.map((attraction) => (
              <Link href={`/attractions/${attraction.id}`} key={attraction.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 md:h-auto md:w-48 lg:w-64">
                      <Image
                        src={
                          attraction.images[0] ||
                          `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(attraction.name) || "/placeholder.svg"}`
                        }
                        alt={attraction.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                          <div className="flex items-center text-gray-500 text-sm mb-3">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{attraction.region}</span>
                            <span className="mx-2">•</span>
                            <Badge className="bg-blue-600">{attraction.category}</Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{attraction.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        {attraction.visitingInfo?.openingHours && (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{attraction.visitingInfo.openingHours}</span>
                          </div>
                        )}
                        {attraction.visitingInfo?.entryFee && (
                          <div className="flex items-center">
                            <span className="font-medium mr-1">Entry:</span>
                            <span>{attraction.visitingInfo.entryFee}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredAttractions.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No attractions found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("")
                  setSelectedRegion("")
                }}
              >
                Clear all filters
              </Button>
              <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                <Sparkles className="h-4 w-4 mr-2" />
                Try AI Search Instead
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
