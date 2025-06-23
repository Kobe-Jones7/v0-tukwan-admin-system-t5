import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Plane, CreditCard, Wallet, MapPin, Star } from "lucide-react"
import { Footer } from "@/components/footer"
import { WaitlistForm } from "@/components/waitlist-form"

export default function VooyaWalletPage() {
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
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Unlock the World with <span className="text-blue-300">Vooya Wallet</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-10">
            Earn points. Travel more. Join the adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-6 text-lg" asChild>
              <Link href="/sign-up">Sign up for free</Link>
            </Button>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Vooya Wallet?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The smart way to pay, earn, and explore Africa's best destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Earn Travel Points</h3>
              <p className="text-gray-600">
                Earn points on every transaction. Redeem them for discounts on tours, stays, and marketplace purchases.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Payments</h3>
              <p className="text-gray-600">
                Pay for all your travel needs in one place. Mobile money, cards, and bank transfers all supported.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Exclusive Experiences</h3>
              <p className="text-gray-600">
                Unlock special offers and hidden gems across Africa that are only available to Vooya Wallet members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Start your journey in just a few simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your free Vooya Wallet account in minutes.",
              },
              {
                step: "2",
                title: "Add Funds",
                description: "Top up your wallet using your preferred payment method.",
              },
              {
                step: "3",
                title: "Explore & Book",
                description: "Discover amazing destinations and book with your wallet.",
              },
              {
                step: "4",
                title: "Earn & Redeem",
                description: "Collect points and use them for your next adventure.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-lg shadow-sm border relative z-10 h-full text-center">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Vooya Wallet Community</h2>
              <p className="text-xl text-gray-600 mb-8">
                Be among the first to experience the future of travel payments and rewards in Africa. Sign up now or
                join our waitlist for early access.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Plane className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="font-medium">Early access to exclusive travel deals</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="font-medium">500 bonus points for early adopters</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="font-medium">No transaction fees for the first 3 months</p>
                </div>
              </div>
            </div>

            <div>
              <Card className="w-full max-w-md mx-auto">
                <Tabs defaultValue="signin" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>

                  <TabsContent value="signin">
                    <CardHeader>
                      <CardTitle>Sign in to Vooya Wallet</CardTitle>
                      <CardDescription>Access your wallet and travel rewards</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="name@example.com" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input id="password" type="password" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label
                          htmlFor="remember"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Remember me
                        </label>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign In</Button>
                    </CardFooter>
                  </TabsContent>

                  <TabsContent value="register">
                    <CardHeader>
                      <CardTitle>Create a Vooya Wallet</CardTitle>
                      <CardDescription>Start earning travel points and unlock exclusive experiences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input id="firstName" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input id="lastName" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="name@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+233 XX XXX XXXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the{" "}
                          <Link href="/terms" className="text-blue-600 hover:underline">
                            terms and conditions
                          </Link>
                        </label>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Create Account</Button>
                    </CardFooter>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of travelers who are already exploring Africa with Vooya Wallet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Vooya Wallet has completely transformed how I travel in Ghana. The points system is amazing - I've already earned enough for a free tour!",
                name: "Sarah M.",
                location: "Accra, Ghana",
              },
              {
                quote:
                  "I love how easy it is to pay for everything in one place. No more juggling different payment methods while I'm trying to enjoy my vacation.",
                name: "Kwame O.",
                location: "Cape Coast, Ghana",
              },
              {
                quote:
                  "The exclusive experiences available through Vooya Wallet are incredible. I discovered places I never would have found on my own.",
                name: "Ama D.",
                location: "Kumasi, Ghana",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock the World?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Join Vooya Wallet today and start earning points towards your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">Sign Up Now</Button>
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
