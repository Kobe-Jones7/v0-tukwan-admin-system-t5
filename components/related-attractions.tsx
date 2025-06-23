import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"
import { getAttractionById } from "@/data/ghana-attractions"
import type { TourPackage } from "@/data/tour-packages"

interface RelatedAttractionsProps {
  tourPackage: TourPackage
  limit?: number
}

export function RelatedAttractions({ tourPackage, limit = 4 }: RelatedAttractionsProps) {
  // Get attractions included in this tour package
  const attractions = tourPackage.attractions
    .map((id) => getAttractionById(id))
    .filter(Boolean)
    .slice(0, limit)

  if (attractions.length === 0) {
    return null
  }

  return (
    <Card>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Attractions You'll Visit</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="flex gap-3">
              <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={
                    attraction.images[0] ||
                    `/placeholder.svg?height=80&width=80&query=${encodeURIComponent(attraction.name)}`
                  }
                  alt={attraction.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{attraction.name}</h4>
                  <Badge variant="outline">{attraction.category}</Badge>
                </div>
                <div className="flex items-center text-gray-500 text-xs mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{attraction.region}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{attraction.description}</p>
                <Link
                  href={`/attractions/${attraction.id}`}
                  className="text-blue-600 text-xs flex items-center mt-1 hover:underline"
                >
                  View details
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {tourPackage.attractions.length > limit && (
          <div className="mt-4 text-center">
            <Button variant="outline" size="sm" asChild>
              <Link href="/attractions">View All Attractions</Link>
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}
