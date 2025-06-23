import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowRight } from "lucide-react"
import { attractions } from "@/data/ghana-attractions"

export function AttractionsShowcase() {
  // Get 4 featured attractions (one from each main category)
  const featuredAttractions = [
    attractions.find((a) => a.category === "Historical"),
    attractions.find((a) => a.category === "Nature"),
    attractions.find((a) => a.category === "Cultural"),
    attractions.find((a) => a.category === "Beach"),
  ]
    .filter(Boolean)
    .map((attraction) => {
      if (attraction && attraction.category === "Nature") {
        return {
          ...attraction,
          images: ["/images/mole-national-park-elephant.jpg"],
        }
      }
      return attraction
    })

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Explore Ghana's Attractions</h2>
            <p className="text-gray-500 mt-2">Discover historical sites, natural wonders, and cultural landmarks</p>
          </div>
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/attractions">
              View all attractions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAttractions.map((attraction) => (
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
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link href="/attractions">Explore All Attractions</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
