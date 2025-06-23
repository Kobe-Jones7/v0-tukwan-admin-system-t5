"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { tourPackages } from "@/data/tour-packages"
import { MapPin, Calendar, Users, Star, Filter, Search, ChevronDown, ChevronUp, List, Loader2 } from "lucide-react"
import { Footer } from "@/components/footer"

export default function TourPackagesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [packages, setPackages] = useState<typeof tourPackages>([])

  // Simulate data loading and add error handling
  useEffect(() => {
    try {
      // Ensure tourPackages is defined and has data
      if (tourPackages && tourPackages.length > 0) {
        setPackages(tourPackages)
      } else {
        console.error("Tour packages data is empty or undefined")
        // Set to empty array as fallback
        setPackages([])
      }
    } catch (error) {
      console.error("Error loading tour packages:", error)
      setPackages([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
          <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-2xl font-bold text-blue-600">Tukwan</span>
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
          </div>
        </header>

        <main className="flex-1">
          <section className="bg-blue-600 text-white py-12">
            <div className="container px-4 md:px-6">
              <h1 className="text-3xl font-bold mb-4">Tour Packages</h1>
              <p className="max-w-2xl">
                Discover our carefully curated tour packages that showcase the best of Ghana's natural beauty, rich
                culture, and historical sites.
              </p>
            </div>
          </section>

          <section className="py-12">
            <div className="container px-4 md:px-6 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Loader2 className="h-12 w-12 animate-spin text-blue-600 mb-4" />
                <p className="text-lg text-gray-600">Loading tour packages...</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    )
  }

  // If no packages are available after loading
  if (packages.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
          <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-2xl font-bold text-blue-600">Tukwan</span>
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
          </div>
        </header>

        <main className="flex-1">
          <section className="bg-blue-600 text-white py-12">
            <div className="container px-4 md:px-6">
              <h1 className="text-3xl font-bold mb-4">Tour Packages</h1>
              <p className="max-w-2xl">
                Discover our carefully curated tour packages that showcase the best of Ghana's natural beauty, rich
                culture, and historical sites.
              </p>
            </div>
          </section>

          <section className="py-12">
            <div className="container px-4 md:px-6 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">No Tour Packages Available</h2>
                <p className="text-gray-600 mb-6">
                  We're currently updating our tour packages. Please check back later.
                </p>
                <Link href="/">
                  <Button className="bg-blue-600 hover:bg-blue-700">Return to Homepage</Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header (simplified) */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-bold text-blue-600">Tukwan</span>
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-blue-600 text-white py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-4">Tour Packages</h1>
            <p className="max-w-2xl">
              Discover our carefully curated tour packages that showcase the best of Ghana's natural beauty, rich
              culture, and historical sites.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters */}
                <div className="lg:w-1/4 space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h2 className="font-bold text-lg mb-4 flex items-center">
                      <Filter className="h-5 w-5 mr-2" />
                      Filters
                    </h2>

                    <div className="space-y-6">
                      {/* Search */}
                      <div>
                        <h3 className="font-medium mb-2">Search</h3>
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                          <Input placeholder="Search packages..." className="pl-8" />
                        </div>
                      </div>

                      {/* Region */}
                      <div>
                        <h3 className="font-medium mb-2">Region</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="region-greater-accra" />
                            <Label htmlFor="region-greater-accra" className="text-sm">
                              Greater Accra
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="region-central" />
                            <Label htmlFor="region-central" className="text-sm">
                              Central Region
                            </Label>
                          </div>
                        </div>
                      </div>

                      {/* Duration */}
                      <div>
                        <h3 className="font-medium mb-2">Duration</h3>
                        <div className="space-y-2">
                          {["1 day", "2 days", "3 days", "4+ days"].map((duration) => (
                            <div key={duration} className="flex items-center space-x-2">
                              <Checkbox id={`duration-${duration}`} />
                              <Label htmlFor={`duration-${duration}`} className="text-sm">
                                {duration}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price Range */}
                      <div>
                        <h3 className="font-medium mb-2">Price Range</h3>
                        <Slider defaultValue={[1500]} min={500} max={3000} step={100} className="my-4" />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>GH₵ 500</span>
                          <span>GH₵ 3000</span>
                        </div>
                      </div>

                      {/* Package Type */}
                      <div>
                        <h3 className="font-medium mb-2">Package Type</h3>
                        <div className="space-y-2">
                          {["Historical", "Cultural", "Nature", "Adventure", "Beach"].map((type) => (
                            <div key={type} className="flex items-center space-x-2">
                              <Checkbox id={`type-${type}`} />
                              <Label htmlFor={`type-${type}`} className="text-sm">
                                {type}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
                    </div>
                  </div>
                </div>

                {/* Package Listings */}
                <div className="lg:w-3/4">
                  <div className="flex justify-between items-center mb-6">
                    <TabsList className="mb-4">
                      <TabsTrigger value="all">All Packages</TabsTrigger>
                      <TabsTrigger value="greater-accra">Greater Accra</TabsTrigger>
                      <TabsTrigger value="central">Central Region</TabsTrigger>
                    </TabsList>
                    <div className="flex items-center gap-4">
                      <ExpandAllButton />
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Sort by:</span>
                        <select className="border rounded-md p-1 text-sm">
                          <option>Recommended</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
                          <option>Duration</option>
                          <option>Rating</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <TabsContent value="all" className="mt-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      {packages.map((pkg) => (
                        <PackageCard key={pkg.id} package={pkg} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="greater-accra" className="mt-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      {packages
                        .filter((pkg) => pkg.region === "Greater Accra")
                        .map((pkg) => (
                          <PackageCard key={pkg.id} package={pkg} />
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="central" className="mt-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      {packages
                        .filter((pkg) => pkg.region === "Central")
                        .map((pkg) => (
                          <PackageCard key={pkg.id} package={pkg} />
                        ))}
                    </div>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

function ExpandAllButton() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Button
      variant="outline"
      className="flex items-center gap-1"
      onClick={() => {
        setExpanded(!expanded)
        // Toggle the expanded state for all package cards
        document.querySelectorAll("[data-expanded]").forEach((el) => {
          el.setAttribute("data-expanded", (!expanded).toString())
        })
      }}
    >
      {expanded ? (
        <>
          <ChevronUp className="h-4 w-4" />
          <span>Collapse All</span>
        </>
      ) : (
        <>
          <ChevronDown className="h-4 w-4" />
          <span>Expand All</span>
        </>
      )}
    </Button>
  )
}

function PackageCard({ package: pkg }: { package: any }) {
  const [expanded, setExpanded] = useState(false)

  // Safety check for undefined package
  if (!pkg) {
    return null
  }

  // Function to map attraction IDs to readable names
  const getAttractionName = (id: string) => {
    const attractionMap: Record<string, string> = {
      // Greater Accra
      "independence-arch": "Independence Arch",
      "kwame-nkrumah-museum": "Kwame Nkrumah Museum",
      "christiansborg-castle": "Christiansborg Castle",
      "national-museum": "National Museum",
      "fort-prampram": "Fort in Prampram",
      "makola-market": "Makola Market",
      "accra-arts-center": "Accra Arts Center",
      "oxford-street": "Oxford Street",
      "shai-hills": "Shai Hills",
      "tsenku-waterfalls": "Tsenku Waterfalls",
      "accra-beaches": "Beaches in Accra",
      "tema-harbour": "Tema Harbour",

      // Central Region
      "cape-coast-castle": "Cape Coast Castle",
      "elmina-castle": "St. Georges Castle (Elmina)",
      "fort-williams": "Fort Williams",
      "fort-st-jago": "Fort St. Jago",
      "kakum-national-park": "Kakum National Park",
      "assin-manso-slave-river": "Assin Slave River",
    }

    return attractionMap[id] || id
  }

  // Ensure all required properties exist
  const {
    id = "",
    title = "Package Title",
    description = "No description available",
    price = 0,
    region = "Unknown Region",
    duration = "Unknown duration",
    rating = 0,
    reviews = 0,
    maxGroupSize = 0,
    attractions = [],
    images = [],
    tags = [],
  } = pkg

  return (
    <Card className="overflow-hidden border hover:shadow-md transition-shadow" data-expanded={expanded.toString()}>
      <div className="h-48 bg-gray-100 relative">
        <Image
          src={
            images && images[0]
              ? images[0]
              : `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(title || "Tour Package")}`
          }
          alt={title || "Tour Package"}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-medium">
          {duration}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {region}
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-lg">GH₵ {price.toLocaleString()}</div>
            <div className="text-sm text-gray-500">per person</div>
          </div>
        </div>
        <p className={`text-gray-600 my-3 ${expanded ? "" : "line-clamp-2"}`}>{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags && tags.length > 0
            ? tags.slice(0, 3).map((tag: string) => (
                <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))
            : null}
        </div>
        <div className="flex items-center gap-1 mb-4">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating}</span>
          <span className="text-gray-500">({reviews} reviews)</span>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            Max {maxGroupSize} people
          </div>
        </div>

        {/* Attractions List - Only visible when expanded */}
        {expanded && attractions && attractions.length > 0 && (
          <div className="mt-4 mb-4 border-t pt-4">
            <h4 className="font-medium text-sm mb-2 flex items-center">
              <List className="h-4 w-4 mr-1" />
              Attractions Included:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
              {attractions.map((attraction: string) => (
                <li key={attraction} className="text-sm text-gray-600 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  {getAttractionName(attraction)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-2">
          <Link href={`/tour-packages/${id}`} className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">View Details</Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Collapse package details" : "Expand package details"}
          >
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
