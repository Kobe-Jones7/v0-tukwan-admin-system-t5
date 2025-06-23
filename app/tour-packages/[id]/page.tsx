import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getPackageById } from "@/data/tour-packages"
import { MapPin, Star, Clock, Check, X } from "lucide-react"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"
import { PackageBookingSection } from "@/components/package-booking-section"

export default function TourPackageDetailPage({ params }: { params: { id: string } }) {
  const tourPackage = getPackageById(params.id)

  if (!tourPackage) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-bold text-blue-600">Tukwan</span>
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-96">
        <Image
          src={tourPackage.images[0] || "/placeholder.svg"}
          alt={tourPackage.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{tourPackage.title}</h1>
              <div className="flex items-center gap-4 text-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {tourPackage.region}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {tourPackage.duration}
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
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="included">What's Included</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-6 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tour Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">{tourPackage.description}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tour Highlights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {tourPackage.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Photo Gallery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {tourPackage.images.map((image, index) => (
                          <div key={index} className="h-48 relative rounded-lg overflow-hidden">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${tourPackage.title} - Image ${index + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="itinerary" className="space-y-6 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Detailed Itinerary</CardTitle>
                      <CardDescription>Day-by-day plan for your {tourPackage.duration} tour</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {tourPackage.itinerary.map((day, index) => (
                        <div key={index}>
                          <div className="flex items-center gap-3 mb-3">
                            <Badge className="bg-blue-600">Day {day.day}</Badge>
                            <h3 className="font-semibold text-lg">{day.title}</h3>
                          </div>
                          <div className="space-y-2 ml-4">
                            {day.activities.map((activity, actIndex) => (
                              <div key={actIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-600">{activity}</span>
                              </div>
                            ))}
                          </div>
                          {day.accommodation && (
                            <div className="mt-3 ml-4 text-gray-600 italic">
                              <span className="font-medium">Accommodation:</span> {day.accommodation}
                            </div>
                          )}
                          {index < tourPackage.itinerary.length - 1 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="included" className="pt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-green-700 flex items-center">
                          <Check className="h-5 w-5 mr-2" />
                          What's Included
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {tourPackage.included.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-600 mt-1" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-red-700 flex items-center">
                          <X className="h-5 w-5 mr-2" />
                          Not Included
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {tourPackage.notIncluded.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <X className="h-4 w-4 text-red-600 mt-1" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Reviews</CardTitle>
                      <CardDescription>
                        {tourPackage.reviews} reviews with an average rating of {tourPackage.rating}/5
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                star <= Math.round(tourPackage.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-bold text-lg">{tourPackage.rating}</span>
                        <span className="text-gray-500">({tourPackage.reviews} reviews)</span>
                      </div>

                      <div className="space-y-4">
                        <p className="text-gray-500 italic">
                          Reviews are coming soon. Be among the first to experience this tour and leave a review!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <PackageBookingSection tourPackage={tourPackage} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
