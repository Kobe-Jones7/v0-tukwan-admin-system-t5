import { Suspense } from "react"
import { AttractionsShowcase } from "@/components/attractions-showcase"
import { EnhancedSearchBar } from "@/components/enhanced-search-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DiscoverGhanaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ghana-hiking-adventure-hero.jpeg"
            alt="Discover Ghana - Adventure and Culture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Ghana</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Explore the Gateway to Africa - Rich Culture, Stunning Landscapes, Warm Hospitality
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto">
            <EnhancedSearchBar
              placeholder="Search for any destination in Ghana..."
              className="bg-white/95 backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Attractions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">16</div>
              <div className="text-gray-600">Regions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">32M</div>
              <div className="text-gray-600">People</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore by Region</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From bustling cities to pristine beaches, ancient castles to wildlife reserves - Ghana offers diverse
              experiences across all regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Greater Accra */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/independence-arch-ghana.png"
                  alt="Greater Accra - Independence Arch"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">Capital Region</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Greater Accra</h3>
                <p className="text-gray-600 mb-4">
                  Vibrant capital with modern attractions, historical sites, and beautiful beaches
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>25+ Attractions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>4.5/5</span>
                  </div>
                </div>
                <Link href="/attractions?region=Greater+Accra">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore Greater Accra</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Central Region */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/cape-coast-castle-ghana.png"
                  alt="Central Region - Cape Coast Castle"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">UNESCO Sites</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Central Region</h3>
                <p className="text-gray-600 mb-4">
                  Historic castles, pristine beaches, and the famous Kakum National Park
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>30+ Attractions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>4.7/5</span>
                  </div>
                </div>
                <Link href="/attractions?region=Central">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore Central Region</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ashanti Region */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/kwame-nkrumah-memorial-park.png"
                  alt="Ashanti Region - Cultural Heritage"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-yellow-600">Cultural Heart</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ashanti Region</h3>
                <p className="text-gray-600 mb-4">
                  Royal heritage, traditional crafts, and the cultural center of Ghana
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>20+ Attractions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>4.6/5</span>
                  </div>
                </div>
                <Link href="/attractions?region=Ashanti">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore Ashanti Region</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/attractions">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Regions & Attractions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Interests You?</h2>
            <p className="text-xl text-gray-600">Choose your adventure - from historical sites to natural wonders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/attractions?category=Historical" className="group">
              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🏰</span>
                </div>
                <h3 className="font-semibold">Historical</h3>
                <p className="text-sm text-gray-600 mt-1">Castles & Forts</p>
              </div>
            </Link>

            <Link href="/attractions?category=Nature" className="group">
              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-semibold">Nature</h3>
                <p className="text-sm text-gray-600 mt-1">Parks & Wildlife</p>
              </div>
            </Link>

            <Link href="/attractions?category=Cultural" className="group">
              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="font-semibold">Cultural</h3>
                <p className="text-sm text-gray-600 mt-1">Museums & Arts</p>
              </div>
            </Link>

            <Link href="/attractions?category=Beach" className="group">
              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                  <span className="text-2xl">🏖️</span>
                </div>
                <h3 className="font-semibold">Beaches</h3>
                <p className="text-sm text-gray-600 mt-1">Coast & Islands</p>
              </div>
            </Link>

            <Link href="/attractions?category=Religious" className="group">
              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">⛪</span>
                </div>
                <h3 className="font-semibold">Religious</h3>
                <p className="text-sm text-gray-600 mt-1">Sacred Sites</p>
              </div>
            </Link>

            <Link href="/attractions?category=Market" className="group">
              <div className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="font-semibold">Markets</h3>
                <p className="text-sm text-gray-600 mt-1">Local Shopping</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Attractions Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Attractions</h2>
            <p className="text-xl text-gray-600">Discover Ghana's most popular destinations</p>
          </div>

          <Suspense fallback={<div className="text-center">Loading attractions...</div>}>
            <AttractionsShowcase />
          </Suspense>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore Ghana?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Start planning your unforgettable journey through the Gateway to Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Browse Tour Packages
              </Button>
            </Link>
            <Link href="/attractions">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View All Attractions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
