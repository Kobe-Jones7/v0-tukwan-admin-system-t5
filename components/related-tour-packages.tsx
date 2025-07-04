"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TourPackage {
  id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  duration: string
  groupSize: string
  rating: number
  reviewCount: number
  image: string
  highlights: string[]
  category: string
  location: string
}

const mockTourPackages: TourPackage[] = [
  {
    id: "1",
    title: "Historical Ghana Explorer",
    description: "Discover Ghana's rich history through its castles, museums, and cultural sites.",
    price: 450,
    originalPrice: 550,
    duration: "5 days",
    groupSize: "8-12 people",
    rating: 4.8,
    reviewCount: 124,
    image: "/images/cape-coast-castle.png",
    highlights: ["Cape Coast Castle", "Elmina Castle", "Kwame Nkrumah Museum", "Local guide"],
    category: "Historical",
    location: "Central & Greater Accra",
  },
  {
    id: "2",
    title: "Nature & Wildlife Adventure",
    description: "Experience Ghana's incredible wildlife and pristine natural environments.",
    price: 680,
    originalPrice: 780,
    duration: "7 days",
    groupSize: "6-10 people",
    rating: 4.9,
    reviewCount: 89,
    image: "/images/mole-national-park-elephant.jpg",
    highlights: ["Mole National Park", "Kakum Canopy Walk", "Wildlife Safari", "Bird Watching"],
    category: "Nature",
    location: "Northern & Central",
  },
  {
    id: "3",
    title: "Lake Volta Scenic Cruise",
    description: "Sail across one of the world's largest artificial lakes with stunning island views.",
    price: 320,
    originalPrice: 380,
    duration: "3 days",
    groupSize: "10-15 people",
    rating: 4.7,
    reviewCount: 156,
    image: "/images/volta-lake.png",
    highlights: ["Boat cruise", "Island hopping", "Fishing villages", "Sunset views"],
    category: "Nature",
    location: "Volta Region",
  },
  {
    id: "4",
    title: "Cultural Heritage Journey",
    description: "Immerse yourself in Ghana's vibrant culture, traditions, and local communities.",
    price: 390,
    originalPrice: 450,
    duration: "4 days",
    groupSize: "8-14 people",
    rating: 4.6,
    reviewCount: 203,
    image: "/images/kente-cloth.png",
    highlights: ["Traditional villages", "Kente weaving", "Local festivals", "Craft workshops"],
    category: "Cultural",
    location: "Ashanti & Eastern",
  },
  {
    id: "5",
    title: "Complete Ghana Experience",
    description: "The ultimate Ghana tour combining history, nature, culture, and adventure.",
    price: 1200,
    originalPrice: 1400,
    duration: "12 days",
    groupSize: "6-12 people",
    rating: 4.9,
    reviewCount: 67,
    image: "/images/ghana-hiking-adventure.jpeg",
    highlights: ["All major attractions", "Multiple regions", "Expert guides", "Luxury accommodation"],
    category: "Comprehensive",
    location: "Nationwide",
  },
]

interface RelatedTourPackagesProps {
  attractionCategory?: string
  attractionRegion?: string
  maxItems?: number
}

export function RelatedTourPackages({
  attractionCategory = "Historical",
  attractionRegion = "Central",
  maxItems = 3,
}: RelatedTourPackagesProps) {
  // Filter packages based on attraction category or region
  const filteredPackages = mockTourPackages
    .filter(
      (pkg) =>
        pkg.category === attractionCategory ||
        pkg.location.includes(attractionRegion) ||
        pkg.category === "Comprehensive",
    )
    .slice(0, maxItems)

  if (filteredPackages.length === 0) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Related Tour Packages</h2>
        <Link href="/tour-packages">
          <Button variant="outline">View All Tours</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
              {pkg.originalPrice && (
                <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
                  Save ${pkg.originalPrice - pkg.price}
                </Badge>
              )}
            </div>

            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {pkg.category}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                  <span className="text-xs text-gray-500">({pkg.reviewCount})</span>
                </div>
              </div>
              <CardTitle className="text-lg leading-tight">{pkg.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 line-clamp-2">{pkg.description}</p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{pkg.groupSize}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{pkg.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-gray-500">Highlights:</div>
                <div className="flex flex-wrap gap-1">
                  {pkg.highlights.slice(0, 3).map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                  {pkg.highlights.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{pkg.highlights.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-600">${pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${pkg.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">per person</div>
                </div>
                <Link href={`/tour-packages/${pkg.id}`}>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
