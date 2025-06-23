import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Check, Camera, Heart, Share2, Navigation } from "lucide-react"
import { getAttractionById } from "@/data/attractions"
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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container px-4 md:px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/discover-ghana" className="hover:text-blue-600">
              Discover Ghana
            </Link>
            <span>/</span>
            <span className="text-gray-900">{attraction.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          src={attraction.images[0] || "/placeholder.svg?height=500&width=1200&query=Ghana+tourism"}
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
                <Badge className="bg-blue-600">{attraction.region} Region</Badge>
                {attraction.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-white border-white">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{attraction.name}</h1>
              <div className="flex flex-wrap items-center gap-6 text-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {attraction.region} Region, Ghana
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {attraction.practicalInfo.openingHours}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="practical">Practical Info</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 pt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About {attraction.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed mb-6">{attraction.description}</p>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Highlights</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {attraction.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="history" className="pt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Historical Background</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">{attraction.history}</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="gallery" className="pt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Camera className="h-5 w-5 mr-2" />
                        Photo Gallery
                      </CardTitle>
                      <CardDescription>Explore {attraction.name} through these images</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {attraction.images.map((image, index) => (
                          <div key={index} className="h-64 relative rounded-lg overflow-hidden group">
                            <Image
                              src={image || "/placeholder.svg?height=300&width=400&query=Ghana+tourism"}
                              alt={`${attraction.name} - Image ${index + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="practical" className="pt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Practical Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Visiting Hours</h4>
                            <p className="text-gray-700">{attraction.practicalInfo.openingHours}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Entry Fee</h4>
                            <p className="text-gray-700">{attraction.practicalInfo.entryFee}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Accessibility</h4>
                            <p className="text-gray-700">{attraction.practicalInfo.accessibility}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                            <p className="text-gray-700">{attraction.practicalInfo.bestTimeToVisit}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Action Buttons */}
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline">
                          <Heart className="mr-2 h-4 w-4" />
                          Save
                        </Button>
                        <Button variant="outline">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">{attraction.region} Region, Ghana</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Coordinates: {attraction.coordinates.lat}, {attraction.coordinates.lng}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {attraction.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Find Tours */}
                <Card>
                  <CardHeader>
                    <CardTitle>Find Tours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">Discover tour packages that include {attraction.name}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/packages?attraction=${attraction.id}`}>Browse Tours</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
