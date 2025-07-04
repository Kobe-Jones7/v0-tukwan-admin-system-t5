import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Star,
  Share2,
  Bookmark,
  Calendar,
  Info,
  Camera,
  Navigation,
} from "lucide-react"
import { getAttractionById } from "@/data/ghana-attractions"
import { RelatedTourPackages } from "@/components/related-tour-packages"

interface AttractionPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function AttractionPage({ params }: AttractionPageProps) {
  const { id } = await params
  const attraction = getAttractionById(id)

  if (!attraction) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={attraction.images[0] || "/placeholder.svg"}
          alt={attraction.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container px-4 md:px-6 pb-8">
            <div className="max-w-3xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {attraction.category}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {attraction.region} Region
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{attraction.name}</h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">{attraction.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Quick Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium">Opening Hours</div>
                      <div className="text-sm text-gray-600">{attraction.practicalInfo.openingHours}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium">Entry Fee</div>
                      <div className="text-sm text-gray-600">{attraction.practicalInfo.entryFee}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium">Best Time to Visit</div>
                      <div className="text-sm text-gray-600">{attraction.practicalInfo.bestTimeToVisit}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium">Accessibility</div>
                      <div className="text-sm text-gray-600">{attraction.practicalInfo.accessibility}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {attraction.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* History */}
            <Card>
              <CardHeader>
                <CardTitle>History</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{attraction.history}</p>
              </CardContent>
            </Card>

            {/* Cultural Significance */}
            {attraction.culturalSignificance && (
              <Card>
                <CardHeader>
                  <CardTitle>Cultural Significance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{attraction.culturalSignificance}</p>
                </CardContent>
              </Card>
            )}

            {/* Tips */}
            {attraction.tips && attraction.tips.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Visitor Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {attraction.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-sm text-gray-700">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Wildlife */}
            {attraction.wildlife && (
              <Card>
                <CardHeader>
                  <CardTitle>Wildlife</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {attraction.wildlife.mammals && (
                    <div>
                      <h4 className="font-medium mb-2">Mammals</h4>
                      <div className="flex flex-wrap gap-2">
                        {attraction.wildlife.mammals.map((mammal, index) => (
                          <Badge key={index} variant="outline">
                            {mammal}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {attraction.wildlife.birds && (
                    <div>
                      <h4 className="font-medium mb-2">Birds</h4>
                      <div className="flex flex-wrap gap-2">
                        {attraction.wildlife.birds.map((bird, index) => (
                          <Badge key={index} variant="outline">
                            {bird}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Image Gallery */}
            {attraction.images.length > 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Photo Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {attraction.images.slice(1).map((image, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${attraction.name} - Image ${index + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Book a Tour</Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                      <Bookmark className="h-4 w-4" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">{attraction.region} Region, Ghana</div>
                  <div className="text-xs text-gray-500">
                    Coordinates: {attraction.coordinates.lat}, {attraction.coordinates.lng}
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {attraction.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            {attraction.nearbyAttractions && attraction.nearbyAttractions.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Nearby Attractions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {attraction.nearbyAttractions.map((nearby, index) => (
                      <div key={index} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        {nearby}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Related Tour Packages */}
        <RelatedTourPackages
          attractionCategory={attraction.category}
          attractionRegion={attraction.region}
          maxItems={3}
        />
      </div>
    </div>
  )
}
