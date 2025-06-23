"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Clock, Grid, List } from "lucide-react"
import { getAllAttractions } from "@/data/attractions"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export default function DiscoverGhanaPage() {
  const attractions = getAllAttractions()

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState<string>("")
  const [selectedTag, setSelectedTag] = useState<string>("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Get unique regions and tags
  const regions = Array.from(new Set(attractions.map((attraction) => attraction.region))).sort()
  const allTags = Array.from(new Set(attractions.flatMap((attraction) => attraction.tags))).sort()

  // Filter attractions based on search query, region, and tag
  const filteredAttractions = attractions.filter((attraction) => {
    const matchesSearch =
      searchQuery === "" ||
      attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesRegion = selectedRegion === "" || selectedRegion === "all" || attraction.region === selectedRegion

    const matchesTag = selectedTag === "" || selectedTag === "all" || attraction.tags.includes(selectedTag)

    return matchesSearch && matchesRegion && matchesTag
  })

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/placeholder.svg?height=500&width=1200&query=Ghana+tourist+attractions+diverse+landscape"
          alt="Discover Ghana"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Ghana</h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
                Explore Ghana's rich cultural heritage, stunning natural landscapes, and historical landmarks. From
                ancient castles to pristine waterfalls, discover the beauty and diversity of the Gold Coast.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search attractions, regions, or activities..."
                  className="pl-10 h-12 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8 flex-1">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Regions" />
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

            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {allTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
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
            {selectedRegion && selectedRegion !== "all" && ` in ${selectedRegion}`}
            {selectedTag && selectedTag !== "all" && ` tagged as ${selectedTag}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAttractions.map((attraction) => (
              <Link href={`/discover-ghana/${attraction.id}`} key={attraction.id}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow group">
                  <div className="relative h-48">
                    <Image
                      src={
                        attraction.images[0] ||
                        `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(attraction.name) || "/placeholder.svg"}`
                      }
                      alt={attraction.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-blue-600">{attraction.region}</Badge>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-1">{attraction.name}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{attraction.region} Region</span>
                    </div>
                    <p className="text-gray-600 line-clamp-2 text-sm mb-3">{attraction.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {attraction.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {attraction.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{attraction.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between text-sm text-gray-500">
                    {attraction.practicalInfo?.openingHours && (
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span className="line-clamp-1">
                          {attraction.practicalInfo.openingHours.length > 15
                            ? attraction.practicalInfo.openingHours.substring(0, 15) + "..."
                            : attraction.practicalInfo.openingHours}
                        </span>
                      </div>
                    )}
                    <Button variant="link" size="sm" className="p-0 h-auto text-blue-600">
                      Learn More
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
              <Link href={`/discover-ghana/${attraction.id}`} key={attraction.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 md:h-auto md:w-64 lg:w-80">
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
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                          <div className="flex items-center text-gray-500 text-sm mb-3">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{attraction.region} Region</span>
                            <span className="mx-2">•</span>
                            <Badge className="bg-blue-600">{attraction.tags[0]}</Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-3">{attraction.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        {attraction.practicalInfo?.openingHours && (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{attraction.practicalInfo.openingHours}</span>
                          </div>
                        )}
                        {attraction.practicalInfo?.entryFee && (
                          <div className="flex items-center">
                            <span className="font-medium mr-1">Entry:</span>
                            <span>{attraction.practicalInfo.entryFee}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {attraction.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
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
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedRegion("")
                setSelectedTag("")
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* Featured Regions */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Explore by Region</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regions.slice(0, 8).map((region) => {
              const regionAttractions = attractions.filter((a) => a.region === region)
              const regionImage =
                regionAttractions[0]?.images[0] || `/placeholder.svg?height=200&width=300&query=${region}+Ghana`

              return (
                <Card
                  key={region}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedRegion(region)}
                >
                  <div className="relative h-32">
                    <Image
                      src={regionImage || "/placeholder.svg"}
                      alt={`${region} Region`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="font-semibold">{region}</h3>
                        <p className="text-sm opacity-90">{regionAttractions.length} attractions</p>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
