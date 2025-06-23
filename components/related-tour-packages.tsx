import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Calendar } from "lucide-react"
import { getPackagesByAttraction } from "@/data/tour-packages"
import type { Attraction } from "@/data/ghana-attractions"

interface RelatedTourPackagesProps {
  attraction: Attraction
  limit?: number
}

export function RelatedTourPackages({ attraction, limit = 3 }: RelatedTourPackagesProps) {
  // Add safety checks for attraction and its properties
  if (!attraction || !attraction.id) {
    return null
  }

  const relatedPackages = (() => {
    try {
      const packages = getPackagesByAttraction(attraction.id)
      return Array.isArray(packages) ? packages.slice(0, limit) : []
    } catch (error) {
      console.error("Error fetching related packages:", error)
      return []
    }
  })()

  if (relatedPackages.length === 0) {
    return null
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Tour Packages Including This Attraction</h2>
        <p className="text-gray-600 mt-1">Experience {attraction.name} as part of these curated tour packages</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPackages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image
                src={pkg.images?.[0] || "/placeholder.svg?height=200&width=300&query=Ghana+tour+package"}
                alt={pkg.title || "Tour Package"}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-blue-600">{pkg.duration || "Duration TBD"}</Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">{pkg.title || "Untitled Package"}</h3>
              <div className="flex flex-col gap-1 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{pkg.region || "Location TBD"}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{pkg.duration || "Duration TBD"}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Available year-round</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <div className="font-bold text-lg">GH₵ {pkg.price?.toLocaleString() || "0"}</div>
                  <div className="text-xs text-gray-500">per person</div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href={`/tour-packages/${pkg.id}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/tour-packages">View All Tour Packages</Link>
        </Button>
      </div>
    </div>
  )
}
