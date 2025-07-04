import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, ArrowRight, Eye } from "lucide-react"
import Link from "next/link"

export function FeaturedPackages() {
  const packages = [
    {
      id: 1,
      title: "Cape Coast Heritage Tour",
      location: "Cape Coast, Ghana",
      price: "GH₵ 1,500",
      rating: 4.8,
      reviews: 124,
      duration: "3 days",
      image: "/images/cape-coast-castle-oceanview.webp",
    },
    {
      id: 2,
      title: "Mole National Park Safari",
      location: "Northern Region, Ghana",
      price: "GH₵ 2,200",
      rating: 4.9,
      reviews: 89,
      duration: "4 days",
      image: "/images/mole-national-park-elephant.jpg",
    },
    {
      id: 3,
      title: "Volta Lake Cruise & Resort Stay",
      location: "Volta Region, Ghana",
      price: "GH₵ 1,800",
      rating: 4.7,
      reviews: 56,
      duration: "2 days",
      image: "/images/adome-bridge-volta-lake.jpeg",
    },
  ]

  const stays = [
    {
      id: 1,
      title: "Labadi Beach Hotel",
      location: "Accra, Ghana",
      price: "GH₵ 950/night",
      rating: 4.8,
      reviews: 203,
      image: "/images/labadi-beach-hotel.png",
    },
    {
      id: 2,
      title: "Kempinski Hotel",
      location: "Accra, Ghana",
      price: "GH₵ 1,200/night",
      rating: 4.9,
      reviews: 178,
      image: "/images/kempinski-hotel.png",
    },
    {
      id: 3,
      title: "Royal Senchi Resort",
      location: "Eastern Region, Ghana",
      price: "GH₵ 850/night",
      rating: 4.7,
      reviews: 145,
      image: "/images/royal-senchi-resort.png",
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12">
          {/* Tour Packages */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Featured Tour Packages</h2>
              <Button variant="ghost" className="gap-2">
                View all packages <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                    <Badge className="absolute top-3 right-3 bg-blue-600">{pkg.duration}</Badge>
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{pkg.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {pkg.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{pkg.price}</div>
                        <div className="text-sm text-gray-500">per person</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{pkg.rating}</span>
                      <span className="text-gray-500">({pkg.reviews} reviews)</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Link href="/cart">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Eye className="mr-2 h-4 w-4" />
                        Explore
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Stays */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Popular Stays</h2>
              <Button variant="ghost" className="gap-2">
                View all stays <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stays.map((stay) => (
                <Card key={stay.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={stay.image || "/placeholder.svg"} alt={stay.title} fill className="object-cover" />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{stay.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {stay.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{stay.price}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{stay.rating}</span>
                      <span className="text-gray-500">({stay.reviews} reviews)</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
