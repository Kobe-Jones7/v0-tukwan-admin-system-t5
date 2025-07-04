import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { EnhancedSearchBar } from "@/components/enhanced-search-bar"
import { FeaturedPackages } from "@/components/featured-packages"
import { AttractionsShowcase } from "@/components/attractions-showcase"
import { VendorShowcase } from "@/components/vendor-showcase"
import Link from "next/link"
import Image from "next/image"
import { Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/ghana-hiking-adventure.jpeg"
            alt="Ghana Adventure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Ghana's Hidden Gems</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Experience authentic African culture, breathtaking landscapes, and unforgettable adventures
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <EnhancedSearchBar
              placeholder="Search any destination in Ghana or let AI create your perfect tour..."
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            />
            <p className="text-sm text-white/80 mt-2 flex items-center justify-center gap-1">
              <Sparkles className="h-4 w-4" />
              Try AI search for locations like "Aflao Border", "Wa", or any Ghana destination
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Explore Tours
              </Button>
            </Link>
            <Link href="/attractions">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                View Attractions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Tour Packages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Attractions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <FeaturedPackages />

      {/* Attractions Showcase */}
      <AttractionsShowcase />

      {/* AI Search Promotion */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our AI can create custom tour packages for ANY location in Ghana. Just search for any destination and
              we'll generate a complete itinerary for you!
            </p>
            <div className="max-w-md mx-auto">
              <EnhancedSearchBar placeholder="Try 'Aflao Border' or any Ghana location..." />
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Showcase */}
      <VendorShowcase />

      <Footer />
    </div>
  )
}
