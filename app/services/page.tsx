import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Smartphone, Shield, Tag, Clock } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  // Service features with icons
  const services = [
    {
      title: "Pay in installments",
      description: "Split your payments into manageable installments to make your dream trip more affordable.",
      icon: <CreditCard className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Mobile Money Payments",
      description:
        "Easily pay for tours, accommodations, and marketplace items using your preferred mobile money provider.",
      icon: <Smartphone className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Verified Vendors",
      description: "All our vendors and tour operators are thoroughly vetted to ensure quality and authenticity.",
      icon: <Shield className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Great Deals",
      description: "Access exclusive discounts and special offers available only to Tukwan customers.",
      icon: <Tag className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "24Hr Customer Support",
      description: "Our dedicated support team is available around the clock to assist with any questions or concerns.",
      icon: <Clock className="h-10 w-10 text-blue-600" />,
    },
  ]

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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover the range of services we offer to make your African travel experience seamless and memorable.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="bg-blue-50 p-4 rounded-full">{service.icon}</div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Info */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Services?</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Tukwan, we're committed to providing you with the best possible travel experience. Our services are
                designed with your needs in mind, ensuring that your journey through Africa is not just a trip, but a
                life-changing adventure.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">Start Your Journey</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
