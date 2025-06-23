import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Star, Search, Users, Award, Globe, ArrowRight, Calendar, Camera, Compass } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { FeaturedPackages } from "@/components/featured-packages"

export default function HomePage() {
  const stats = [
    { icon: Users, label: "Happy Travelers", value: "5000+" },
    { icon: Award, label: "Tour Packages", value: "350+" },
    { icon: Globe, label: "Destinations", value: "510+" },
    { icon: Star, label: "Average Rating", value: "4.9" },
  ]

  const quickLinks = [
    {
      title: "Tour Packages",
      description: "Discover curated experiences across Ghana",
      icon: Compass,
      href: "/packages",
      color: "bg-blue-600",
    },
    {
      title: "Attractions",
      description: "Explore Ghana's historical and natural wonders",
      icon: Camera,
      href: "/attractions",
      color: "bg-green-600",
    },
    {
      title: "Marketplace",
      description: "Shop authentic African arts and crafts",
      icon: Users,
      href: "/marketplace",
      color: "bg-purple-600",
    },
    {
      title: "Plan Your Trip",
      description: "Get personalized travel recommendations",
      icon: Calendar,
      href: "/packages",
      color: "bg-orange-600",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
        <Image src="/ghana-beach-sunset.png" alt="Beautiful Ghana landscape" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Africa's Hidden Gems</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Experience authentic African culture, breathtaking landscapes, and unforgettable adventures in Ghana
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-md rounded-full p-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                <Input
                  placeholder="Where do you want to go?"
                  className="pl-12 bg-transparent border-0 text-white placeholder:text-white/60 focus-visible:ring-0"
                />
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
                Search Tours
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/packages">Explore Tours</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-blue hover:text-black"
              asChild
            >
              <Link href="/attractions">View Attractions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our curated experiences designed to showcase the best of Ghana's culture, history, and natural
              beauty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 ${link.color} text-white rounded-full mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <link.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="ghost" className="group-hover:bg-gray-100">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <FeaturedPackages />

      {/* Why Choose Tukwan */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Tukwan?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Local Guides</h3>
                    <p className="opacity-90">
                      Our experienced guides share authentic stories and hidden gems you won't find in guidebooks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Small Group Experiences</h3>
                    <p className="opacity-90">
                      Intimate group sizes ensure personalized attention and meaningful cultural exchanges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sustainable Tourism</h3>
                    <p className="opacity-90">
                      We support local communities and preserve Ghana's natural and cultural heritage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/diverse-group.png" alt="Happy travelers in Ghana" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Get the latest travel tips, exclusive offers, and new tour announcements delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
