import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar, Info, History, Landmark, Camera, Heart, Share2, ArrowLeft } from "lucide-react"
import { getAttractionById } from "@/data/ghana-attractions"
import { RelatedTourPackages } from "@/components/related-tour-packages"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

interface AttractionPageProps {
  params: {
    id: string
  }
}

export default function AttractionPage({ params }: AttractionPageProps) {
  const attraction = getAttractionById(params.id)

  if (!attraction) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src={attraction.images[0] || "/placeholder.svg?height=500&width=1200"}
          alt={attraction.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl text-white">
              <Link href="/attractions" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Attractions
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{attraction.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-lg">
                <Badge className="bg-blue-600 text-white">{attraction.category}</Badge>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {attraction.location?.address || `${attraction.region} Region`}, Ghana
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="mr-2 h-5 w-5 text-blue-600" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{attraction.description}</p>
              </CardContent>
            </Card>

            {/* History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="mr-2 h-5 w-5 text-blue-600" />
                  History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{attraction.history}</p>
              </CardContent>
            </Card>

            {/* Cultural Significance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Landmark className="mr-2 h-5 w-5 text-blue-600" />
                  Cultural Significance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{attraction.culturalSignificance}</p>
              </CardContent>
            </Card>

            {/* Visiting Information */}
            {attraction.visitingInfo && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="mr-2 h-5 w-5 text-blue-600" />
                    Visiting Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {attraction.visitingInfo.openingHours && (
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Opening Hours</h4>
                        <p className="text-gray-600">{attraction.visitingInfo.openingHours}</p>
                      </div>
                    </div>
                  )}

                  {attraction.visitingInfo.entryFee && (
                    <div className="flex items-start gap-3">
                      <div className="h-5 w-5 flex items-center justify-center text-gray-500 mt-0.5">₵</div>
                      <div>
                        <h4 className="font-medium">Entry Fee</h4>
                        <p className="text-gray-600">{attraction.visitingInfo.entryFee}</p>
                      </div>
                    </div>
                  )}

                  {attraction.visitingInfo.bestTimeToVisit && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Best Time to Visit</h4>
                        <p className="text-gray-600">{attraction.visitingInfo.bestTimeToVisit}</p>
                      </div>
                    </div>
                  )}

                  {attraction.visitingInfo.accessibility && (
                    <div className="flex items-start gap-3">
                      <div className="h-5 w-5 flex items-center justify-center text-gray-500 mt-0.5">♿</div>
                      <div>
                        <h4 className="font-medium">Accessibility</h4>
                        <p className="text-gray-600">{attraction.visitingInfo.accessibility}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Nearby Attractions */}
            {attraction.nearbyAttractions && attraction.nearbyAttractions.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                    Nearby Attractions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {attraction.nearbyAttractions.map((nearby: string, index: number) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{nearby}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tips for Visitors */}
            {attraction.tips && attraction.tips.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="mr-2 h-5 w-5 text-blue-600" />
                    Tips for Visitors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {attraction.tips.map((tip: string, index: number) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Photo Gallery */}
            {attraction.images && attraction.images.length > 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="mr-2 h-5 w-5 text-blue-600" />
                    Photo Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {attraction.images.slice(1).map((image: string, index: number) => (
                      <div key={index} className="h-48 relative rounded-lg overflow-hidden">
                        <Image
                          src={image || `/placeholder.svg?height=200&width=300&text=Gallery+${index + 1}`}
                          alt={`${attraction.name} - Image ${index + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Related Tour Packages */}
            <RelatedTourPackages attraction={attraction} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Action Buttons */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                      <Link href={`/tour-packages?attraction=${attraction.id}`}>
                        Find Tours Including This Attraction
                      </Link>
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="w-full">
                        <Heart className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          {(attraction.location?.coordinates?.latitude || attraction.coordinates?.lat)?.toFixed(4) ||
                            "N/A"}
                          ,{" "}
                          {(attraction.location?.coordinates?.longitude || attraction.coordinates?.lng)?.toFixed(4) ||
                            "N/A"}
                        </p>
                        <Button variant="link" className="mt-2">
                          View on Google Maps
                        </Button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Coordinates: {attraction.location?.coordinates?.latitude || attraction.coordinates?.lat || "N/A"},{" "}
                    {attraction.location?.coordinates?.longitude || attraction.coordinates?.lng || "N/A"}
                  </p>
                </CardContent>
              </Card>

              {/* Special Features */}
              {attraction.wildlife && (
                <Card>
                  <CardHeader>
                    <CardTitle>Wildlife</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {attraction.wildlife.mammals && attraction.wildlife.mammals.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Mammals</h4>
                        <div className="flex flex-wrap gap-1">
                          {attraction.wildlife.mammals.slice(0, 6).map((animal: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {animal}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {attraction.wildlife.birds && attraction.wildlife.birds.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Birds</h4>
                        <div className="flex flex-wrap gap-1">
                          {attraction.wildlife.birds.slice(0, 6).map((bird: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {bird}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Events */}
              {attraction.events && attraction.events.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Events & Ceremonies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {attraction.events.map((event: string, index: number) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{event}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
