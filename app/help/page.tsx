import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MapPin, Clock, MessageSquare, Facebook, Instagram, Twitter } from "lucide-react"

export default function HelpCenterPage() {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're here to help you with any questions or concerns about your travel experience.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p className="text-gray-600 mb-1">Call us directly:</p>
                      <p className="text-lg font-medium">0203960435</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-gray-600 mb-1">Send us an email:</p>
                      <p className="text-lg font-medium">travel@tukwangh.com</p>
                      <p className="text-lg font-medium">hello@tukwangh.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Location</h3>
                      <p className="text-gray-600 mb-1">Visit our office:</p>
                      <p className="text-lg font-medium">205/6 2nd Emmaus Lane</p>
                      <p className="text-gray-600">Accra, Ghana</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Business Hours</h3>
                      <p className="text-gray-600 mb-1">We're available:</p>
                      <p className="text-lg font-medium">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-lg font-medium">Saturday: 9:00 AM - 3:00 PM</p>
                      <p className="text-lg font-medium">Sunday: Closed</p>
                    </div>
                  </div>

                  {/* Social Media Section */}
                  <div>
                    <h3 className="font-bold text-lg mb-3">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://facebook.com/tukwangh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        <Facebook className="h-6 w-6 text-blue-600" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="https://instagram.com/tukwangh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        <Instagram className="h-6 w-6 text-blue-600" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="https://twitter.com/tukwangh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        <Twitter className="h-6 w-6 text-blue-600" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="bg-blue-50 rounded-2xl p-8 relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-64 h-64">
                        <Image
                          src="/placeholder.svg?height=256&width=256"
                          alt="Customer support representative"
                          width={256}
                          height={256}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                      <p className="text-gray-600 mb-6">
                        Our customer support team is ready to help you with any questions or concerns.
                      </p>
                      <div className="space-y-3">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Phone className="mr-2 h-4 w-4" />
                          Call Us Now
                        </Button>
                        <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Live Chat
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find quick answers to common questions about our services.
              </p>
            </div>

            <Tabs defaultValue="general" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  General
                </TabsTrigger>
                <TabsTrigger
                  value="bookings"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Bookings
                </TabsTrigger>
                <TabsTrigger
                  value="payments"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Payments
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "What is Tukwan/Vooya?",
                      answer:
                        "Tukwan, now evolving into Vooya, is a travel platform that connects people to authentic African experiences, accommodations, and artisan products. We offer curated tours, a digital wallet, and a marketplace for African arts and crafts.",
                    },
                    {
                      question: "How do I create an account?",
                      answer:
                        "You can create an account by clicking the 'Sign In' button at the top right of our website and selecting 'Register'. Follow the prompts to set up your account with your email, name, and password.",
                    },
                    {
                      question: "What areas do you serve?",
                      answer:
                        "We currently operate primarily in Ghana, with plans to expand to other African countries. Our tours and experiences showcase the best of Ghana's natural beauty, rich culture, and historical sites.",
                    },
                    {
                      question: "How can I contact customer support?",
                      answer:
                        "You can reach our customer support team by phone at 0203960435, by email at travel@tukwangh.com or hello@tukwangh.com, or by visiting our office at 205/6 2nd Emmaus Lane, Accra, Ghana.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="bookings">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "How do I book a tour package?",
                      answer:
                        "You can book a tour package by browsing our 'Tour Packages' section, selecting the package you're interested in, and clicking 'View Details'. From there, you can select your dates and number of travelers, then proceed to checkout.",
                    },
                    {
                      question: "Can I modify or cancel my booking?",
                      answer:
                        "Yes, you can modify or cancel your booking by logging into your account and going to 'My Bookings'. Please note that cancellation policies vary by package and timing.",
                    },
                    {
                      question: "Do you offer group discounts?",
                      answer:
                        "Yes, we offer discounts for groups of 5 or more people. Please contact our customer support team for more information about group rates.",
                    },
                    {
                      question: "What should I bring on my tour?",
                      answer:
                        "The items you should bring depend on the specific tour. Once your booking is confirmed, you'll receive a detailed itinerary with a packing list. Generally, comfortable clothing, sun protection, and a camera are recommended.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="payments">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "What payment methods do you accept?",
                      answer:
                        "We accept various payment methods including credit/debit cards, mobile money (MTN, Vodafone, AirtelTigo), bank transfers, and payments through our Vooya Wallet.",
                    },
                    {
                      question: "How does the Vooya Wallet work?",
                      answer:
                        "Vooya Wallet is our digital payment system that allows you to store funds, earn points on transactions, and make seamless payments across our platform. You can top up your wallet using various payment methods.",
                    },
                    {
                      question: "Are there any booking fees?",
                      answer:
                        "We charge a small service fee on bookings, which varies depending on the package. The fee is always clearly displayed before you complete your purchase.",
                    },
                    {
                      question: "How do refunds work?",
                      answer:
                        "Refund policies vary by package and timing of cancellation. Generally, cancellations made more than 7 days before the tour date are eligible for a full refund. Please refer to the specific terms for each package.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-xl text-gray-600">
                  Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="font-medium">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="font-medium">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="What is your message about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-[150px]"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Social Media Icons */}
      <footer className="bg-gray-900 text-gray-200 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full p-1">
                  <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={30} height={30} />
                </div>
                <span className="text-2xl font-bold text-white">Tukwan</span>
              </Link>
              <p className="text-gray-400">
                Discover authentic African experiences, accommodations, and artisan products all in one place.
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://facebook.com/tukwangh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://instagram.com/tukwangh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://twitter.com/tukwangh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/vooya-wallet" className="text-gray-400 hover:text-white">
                    Vooya Wallet
                  </Link>
                </li>
                <li>
                  <Link href="/packages" className="text-gray-400 hover:text-white">
                    Tour Packages
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="text-gray-400 hover:text-white">
                    Marketplace
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Join our waitlist</h3>
              <p className="text-gray-400 mb-4">
                Join our waitlist and receive 10% of your first booking and 100points on Vooya Wallet
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Join Waitlist</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Tukwan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
