"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, ShoppingBag } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

// Mock data for search results
const mockStays = [
  {
    id: 1,
    name: "Labadi Beach Hotel",
    location: "Accra, Ghana",
    price: "GH₵ 450",
    rating: 4.5,
    reviews: 128,
    image: "/images/labadi-beach-hotel.png",
    amenities: ["Pool", "Beach Access", "WiFi", "Restaurant"],
  },
  {
    id: 2,
    name: "Kempinski Hotel Gold Coast City",
    location: "Accra, Ghana",
    price: "GH₵ 680",
    rating: 4.8,
    reviews: 95,
    image: "/images/kempinski-hotel.png",
    amenities: ["Spa", "Pool", "Gym", "Business Center"],
  },
  {
    id: 3,
    name: "Royal Senchi Resort",
    location: "Akosombo, Ghana",
    price: "GH₵ 320",
    rating: 4.3,
    reviews: 76,
    image: "/images/royal-senchi-resort.png",
    amenities: ["Lake View", "Pool", "Restaurant", "Boat Tours"],
  },
]

const mockPackages = [
  {
    id: 1,
    title: "Cape Coast Heritage Tour",
    location: "Cape Coast, Ghana",
    price: "GH₵ 1,500",
    duration: "3 days",
    rating: 4.7,
    reviews: 45,
    image: "/images/cape-coast-castle.png",
    highlights: ["Castle Tour", "Canopy Walk", "Cultural Village"],
  },
  {
    id: 2,
    title: "Mole National Park Safari",
    location: "Northern Region, Ghana",
    price: "GH₵ 2,200",
    duration: "4 days",
    rating: 4.6,
    reviews: 32,
    image: "/images/mole-national-park.png",
    highlights: ["Wildlife Safari", "Elephant Viewing", "Cultural Experience"],
  },
  {
    id: 3,
    title: "Volta Lake Adventure",
    location: "Volta Region, Ghana",
    price: "GH₵ 1,800",
    duration: "2 days",
    rating: 4.4,
    reviews: 28,
    image: "/images/volta-lake.png",
    highlights: ["Lake Cruise", "Fishing Village", "Sunset Views"],
  },
]

const mockExperiences = [
  {
    id: 1,
    title: "Traditional Kente Weaving Workshop",
    location: "Kumasi, Ghana",
    price: "GH₵ 180",
    duration: "4 hours",
    rating: 4.8,
    reviews: 67,
    image: "/images/kente-cloth.png",
    category: "Cultural",
  },
  {
    id: 2,
    title: "Drumming and Dancing Classes",
    location: "Accra, Ghana",
    price: "GH₵ 120",
    duration: "2 hours",
    rating: 4.6,
    reviews: 89,
    image: "/images/wooden-mask.png",
    category: "Cultural",
  },
  {
    id: 3,
    title: "Local Cooking Classes",
    location: "Cape Coast, Ghana",
    price: "GH₵ 150",
    duration: "3 hours",
    rating: 4.7,
    reviews: 54,
    image: "/images/adinkra-fabric.png",
    category: "Culinary",
  },
]

const mockMarketplace = [
  {
    id: 1,
    title: "Handwoven Kente Cloth",
    vendor: "Ashanti Crafts",
    price: "GH₵ 450",
    rating: 4.9,
    reviews: 23,
    image: "/images/kente-cloth.png",
    category: "Fabrics",
  },
  {
    id: 2,
    title: "Carved Wooden Mask",
    vendor: "Heritage Arts",
    price: "GH₵ 280",
    rating: 4.7,
    reviews: 18,
    image: "/images/wooden-mask.png",
    category: "Art",
  },
  {
    id: 3,
    title: "Adinkra Print Fabric",
    vendor: "Kumasi Textiles",
    price: "GH₵ 180",
    rating: 4.5,
    reviews: 31,
    image: "/images/adinkra-fabric.png",
    category: "Fabrics",
  },
]

function SearchResults() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState<any[]>([])

  const searchType = searchParams.get("type") || "stays"
  const location = searchParams.get("location")
  const destination = searchParams.get("destination")
  const experience = searchParams.get("experience")
  const query = searchParams.get("query")

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      switch (searchType) {
        case "stays":
          setResults(mockStays)
          break
        case "packages":
          setResults(mockPackages)
          break
        case "experiences":
          setResults(mockExperiences)
          break
        case "marketplace":
          setResults(mockMarketplace)
          break
        default:
          setResults([])
      }
      setLoading(false)
    }, 1000)
  }, [searchType])

  const getSearchTitle = () => {
    switch (searchType) {
      case "stays":
        return `Accommodations${location ? ` in ${location}` : ""}`
      case "packages":
        return `Tour Packages${destination ? ` to ${destination}` : ""}`
      case "experiences":
        return `Experiences${experience ? `: ${experience}` : ""}`
      case "marketplace":
        return `Marketplace${query ? ` - "${query}"` : ""}`
      default:
        return "Search Results"
    }
  }

  if (loading) {
    return (
      <div className="container px-4 md:px-6 py-8">
        <Skeleton className="h-8 w-64 mb-6" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <Skeleton className="h-48 w-full" />
              <CardContent className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{getSearchTitle()}</h1>
        <p className="text-gray-600">{results.length} results found</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title || item.name}
                fill
                className="object-cover"
              />
              {item.category && <Badge className="absolute top-3 right-3 bg-blue-600">{item.category}</Badge>}
              {item.duration && <Badge className="absolute top-3 right-3 bg-blue-600">{item.duration}</Badge>}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{item.title || item.name}</h3>
                <div className="text-right">
                  <div className="font-bold">{item.price}</div>
                  {searchType === "stays" && <div className="text-sm text-gray-500">per night</div>}
                  {searchType === "packages" && <div className="text-sm text-gray-500">per person</div>}
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {item.location}
              </div>

              {item.vendor && <div className="text-sm text-gray-500 mb-2">by {item.vendor}</div>}

              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{item.rating}</span>
                </div>
                <span className="text-sm text-gray-500 ml-2">({item.reviews} reviews)</span>
              </div>

              {item.amenities && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.amenities.slice(0, 3).map((amenity: string) => (
                    <Badge key={amenity} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              )}

              {item.highlights && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.highlights.slice(0, 3).map((highlight: string) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              )}

              <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <Link
                  href={
                    searchType === "marketplace"
                      ? `/marketplace/${item.title?.toLowerCase().replace(/\s+/g, "-")}`
                      : searchType === "packages"
                        ? `/packages/${item.title?.toLowerCase().replace(/\s+/g, "-")}`
                        : searchType === "experiences"
                          ? `/experiences/${item.title?.toLowerCase().replace(/\s+/g, "-")}`
                          : `/stays/${item.name?.toLowerCase().replace(/\s+/g, "-")}`
                  }
                >
                  {searchType === "marketplace" ? (
                    <>
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      View Details
                    </>
                  ) : (
                    "View Details"
                  )}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  )
}
