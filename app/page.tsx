import { SiteHeader } from "@/components/site-header"
import { FeaturedPackages } from "@/components/featured-packages"
import { AttractionsShowcase } from "@/components/attractions-showcase"
import { VendorShowcase } from "@/components/vendor-showcase"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Calendar, Plane, Hotel, Car, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ghana-hiking-adventure-hero.jpeg"
          alt="Discover Ghana - Hiking Adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Ghana's Hidden Gems</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience authentic African culture, breathtaking landscapes, and unforgettable adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Explore Tours
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-3 bg-transparent"
              >
                Shop Local
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Tour Packages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <FeaturedPackages />

      {/* Why Choose Tukwan */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Tukwan?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're your trusted partner for authentic African experiences, combining local expertise with world-class
              service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Expert Local Guides</h3>
              <p className="text-gray-600 text-sm">
                Our certified local guides share authentic stories and hidden gems you won't find elsewhere.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Booking</h3>
              <p className="text-gray-600 text-sm">
                Easy booking with flexible cancellation policies and customizable itineraries.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Authentic Experiences</h3>
              <p className="text-gray-600 text-sm">
                Immerse yourself in genuine cultural experiences and connect with local communities.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Plane className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">All-Inclusive Packages</h3>
              <p className="text-gray-600 text-sm">
                Worry-free travel with accommodation, meals, and activities all included.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Attractions Showcase */}
      <AttractionsShowcase />

      {/* Travel Services */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Travel Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From flights to accommodations, we handle every detail of your Ghana adventure.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Flight Booking</h3>
              <p className="text-gray-600 mb-4">
                Find the best flight deals to Ghana with our travel partners and booking assistance.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Learn More
              </Button>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Hotel className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Accommodation</h3>
              <p className="text-gray-600 mb-4">
                From luxury resorts to authentic eco-lodges, find the perfect place to stay.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Browse Hotels
              </Button>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Transportation</h3>
              <p className="text-gray-600 mb-4">
                Reliable airport transfers, car rentals, and guided transportation services.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Book Transport
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Vendor Showcase */}
      <VendorShowcase />

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8">
              Get the latest travel tips, exclusive deals, and cultural insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg text-black" />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
