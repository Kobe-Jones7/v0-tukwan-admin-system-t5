import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Star, Clock, Check, X, Users, Calendar, Shield, Camera, Heart, Share2 } from "lucide-react"
import { getPackageBySlug } from "@/data/tour-packages"
import { PackageBookingSection } from "@/components/package-booking-section"
import { DetailedItinerary } from "@/components/detailed-itinerary"
import { Footer } from "@/components/footer"

interface PackagePageProps {
  params: {
    slug: string
  }
}

export default function PackagePage({ params }: PackagePageProps) {
  const tourPackage = getPackageBySlug(params.slug)

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
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container px-4 md:px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-blue-600">
              Tour Packages
            </Link>
            <span>/</span>
            <span className="text-gray-900">{tourPackage.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          src={tourPackage.images[0] || "/placeholder.svg?height=500&width=1200&query=Ghana+tourism"}
          alt={tourPackage.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container px-4 md:px-6 pb-8">
            <div className="max-w-3xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-600">{tourPackage.category}</Badge>
                <Badge variant="outline" className="text-white border-white">
                  {tourPackage.difficulty}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{tourPackage.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {tourPackage.region}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {tourPackage.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Max {tourPackage.maxGroupSize} people
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 fill-yellow-400 text-yellow-400" />
                  {tourPackage.rating} ({tourPackage.reviews} reviews)
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
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="included">What's Included</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 pt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About This Tour</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed mb-6">{tourPackage.longDescription}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Tour Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Duration:</span>
                              <span>{tourPackage.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Group Size:</span>
                              <span>Max {tourPackage.maxGroupSize} people</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Minimum Age:</span>
                              <span>{tourPackage.minAge} years</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Difficulty:</span>
                              <span>{tourPackage.difficulty}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Languages:</span>
                              <span>{tourPackage.languages.join(", ")}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Best Time to Visit</h4>
                          <div className="space-y-2">
                            {tourPackage.bestTimeToVisit.map((time, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-blue-600" />
                                <span className="text-sm">{time}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
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
                      <CardTitle>What to Bring</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {tourPackage.whatToBring.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="itinerary" className="pt-6">
                  <DetailedItinerary tourPackage={tourPackage} />
                </TabsContent>

                <TabsContent value="included" className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-green-700 flex items-center">
                          <Check className="h-5 w-5 mr-2" />
                          What's Included
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {tourPackage.included.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
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
                        <div className="space-y-3">
                          {tourPackage.notIncluded.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <X className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-blue-600" />
                        Cancellation Policy
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{tourPackage.cancellationPolicy}</p>
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
                      <CardDescription>Get a preview of what awaits you on this amazing journey</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {tourPackage.images.map((image, index) => (
                          <div key={index} className="h-64 relative rounded-lg overflow-hidden group">
                            <Image
                              src={image || "/placeholder.svg?height=300&width=400&query=Ghana+tourism"}
                              alt={`${tourPackage.title} - Image ${index + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="pt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Reviews</CardTitle>
                      <CardDescription>
                        {tourPackage.reviews} reviews with an average rating of {tourPackage.rating}/5
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl font-bold">{tourPackage.rating}</div>
                        <div>
                          <div className="flex mb-1">
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
                          <p className="text-sm text-gray-500">Based on {tourPackage.reviews} reviews</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="border-b pb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">KA</span>
                            </div>
                            <div>
                              <p className="font-semibold">Kwame Asante</p>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">2 weeks ago</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700">
                            "Absolutely incredible experience! The guides were knowledgeable and passionate about
                            sharing Ghana's history. Every detail was perfectly planned, and the cultural immersion was
                            authentic and respectful."
                          </p>
                        </div>

                        <div className="border-b pb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-green-600 font-semibold">AM</span>
                            </div>
                            <div>
                              <p className="font-semibold">Ama Mensah</p>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">1 month ago</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700">
                            "This tour exceeded all my expectations. The accommodation was comfortable, the food was
                            delicious, and the experiences were life-changing. Highly recommend!"
                          </p>
                        </div>

                        <Button variant="outline" className="w-full">
                          View All Reviews
                        </Button>
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
