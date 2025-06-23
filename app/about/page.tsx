import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Lightbulb, Leaf, Users, Wallet, Smartphone } from "lucide-react"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-2xl font-bold text-blue-600">Tukwan</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/vooya-wallet" className="font-medium">
                Vooya Wallet
              </Link>
              <Link href="/packages" className="font-medium">
                Tour Packages
              </Link>
              <Link href="/marketplace" className="font-medium">
                Marketplace
              </Link>
              <Link href="/become-partner" className="font-medium">
                Become a Partner
              </Link>
            </nav>
          </div>
          <div>
            <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">From Tukwan to Vooya: A New Chapter in African Travel</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  What started as Tukwan, a passion project connecting people to Ghana's rich culture, nature, and
                  heritage through curated local tours, has grown into something much bigger. Today, we're proud to
                  introduce Vooya—our bold new identity, built to power the future of travel in Africa.
                </p>
                <p className="text-gray-700 mb-6">
                  At Vooya, we believe that travel is more than movement. It's a journey of discovery, connection, and
                  transformation. Whether you're a curious explorer, an adventure seeker, or a cultural enthusiast,
                  Vooya is your trusted companion—offering seamless, authentic, and unforgettable travel experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To reimagine African travel by making exploration more accessible, immersive, and rewarding for both
                  tourists and local communities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To become the leading homegrown travel tech brand in Africa, known for empowering local tourism
                  through innovation, storytelling, and community impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Curated Tours & Experiences",
                  description: "From hidden waterfalls to bustling markets, we connect you to the soul of Ghana.",
                  icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Vooya Wallet",
                  description:
                    "Our smart travel wallet rewards your journey. Earn points, redeem for tours, and enjoy cashless convenience.",
                  icon: <Wallet className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Cultural Immersion",
                  description: "Travel like a local. Eat, dance, and live the culture.",
                  icon: <Users className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Tech-Enabled Convenience",
                  description: "Book, plan, and explore—all from your phone.",
                  icon: <Smartphone className="h-10 w-10 text-blue-600" />,
                },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <div className="mx-auto">{item.icon}</div>
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Africa is filled with untold stories, unexplored paths, and uncelebrated gems. We're here to change
              that—by making local travel cool, conscious, and community-driven.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Authenticity",
                  description: "Real places. Real people. Real stories.",
                  icon: <Heart className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Innovation",
                  description: "We blend tech with tradition to elevate every journey.",
                  icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Empowerment",
                  description: "We invest in local guides, vendors, and creators.",
                  icon: <Users className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Sustainability",
                  description: "We protect what we promote—our culture and environment.",
                  icon: <Leaf className="h-10 w-10 text-blue-600" />,
                },
              ].map((value, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-xl">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Whether you're traveling across Ghana or discovering Africa for the first time, Vooya is your passport to
              meaningful adventure.
            </p>
            <p className="text-2xl font-medium text-blue-600 mb-8">Let's go further, together.</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">Join our waitlist</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
