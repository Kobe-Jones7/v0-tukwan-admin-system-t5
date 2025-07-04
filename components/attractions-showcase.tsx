import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, ArrowRight } from "lucide-react"

export function AttractionsShowcase() {
  const attractions = [
    {
      id: 1,
      name: "Cape Coast Castle",
      location: "Cape Coast, Central Region",
      description: "UNESCO World Heritage Site with deep historical significance in the transatlantic slave trade.",
      image: "/images/cape-coast-castle-oceanview.webp",
      rating: 4.8,
      reviews: 245,
      category: "Historical",
    },
    {
      id: 2,
      name: "Mole National Park",
      location: "Northern Region",
      description: "Ghana's largest wildlife park, home to elephants, antelopes, and over 300 bird species.",
      image: "/images/mole-national-park-elephant.jpg",
      rating: 4.7,
      reviews: 189,
      category: "Wildlife",
    },
    {
      id: 3,
      name: "Kakum Canopy Walk",
      location: "Central Region",
      description: "Famous canopy walkway suspended 30 meters above the tropical rainforest floor.",
      image: "/kakum-canopy-walk.png",
      rating: 4.6,
      reviews: 156,
      category: "Adventure",
    },
    {
      id: 4,
      name: "Lake Volta",
      location: "Eastern & Volta Regions",
      description: "One of the world's largest man-made lakes, perfect for cruises and water activities.",
      image: "/images/volta-lake.png",
      rating: 4.5,
      reviews: 134,
      category: "Nature",
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Top Attractions</h2>
            <p className="text-gray-600">Discover Ghana's most iconic destinations and hidden gems</p>
          </div>
          <Link href="/attractions">
            <Button variant="ghost" className="gap-2">
              View all attractions <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction) => (
            <Card key={attraction.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-blue-600">{attraction.category}</Badge>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{attraction.name}</CardTitle>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {attraction.location}
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{attraction.description}</p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{attraction.rating}</span>
                  <span className="text-gray-500 text-sm">({attraction.reviews} reviews)</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/attractions/${attraction.id}`} className="w-full">
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
