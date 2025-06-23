import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, HelpCircle, Wallet } from "lucide-react"
import { Footer } from "@/components/footer"

export default function FAQPage() {
  // Tour FAQs
  const tourFaqs = [
    {
      question: "What types of tours do you offer?",
      answer:
        "We offer curated cultural, adventure, nature, and food-based tours across Ghana. These include day trips, weekend getaways, and themed experiences.",
    },
    {
      question: "How do I book a tour?",
      answer:
        "You can book through our website or mobile app. Simply choose a tour, select a date, provide your details, and complete payment.",
    },
    {
      question: "What's included in the tour packages?",
      answer:
        "Each tour includes transportation, a tour guide, entrance fees (if any), and sometimes meals. Full details are provided on the tour page.",
    },
    {
      question: "Can I cancel or reschedule a booking?",
      answer:
        "Yes, but cancellation policies vary by tour. Please check the tour details before booking. Late cancellations may not be eligible for a refund.",
    },
    {
      question: "Are your tours safe?",
      answer:
        "Absolutely. We work with verified guides and drivers and prioritize your safety, comfort, and experience.",
    },
    {
      question: "Can I request a private or custom tour?",
      answer:
        "Yes! We offer private or custom group tours. Contact us at travel@tukwangh.com to plan your personalized trip.",
    },
    {
      question: "Do you cater to tourists visiting from outside Ghana?",
      answer:
        "Yes. We provide support for international tourists, including airport pickups, hotel partnerships, and local SIM activation assistance.",
    },
  ]

  // Wallet FAQs
  const walletFaqs = [
    {
      question: "What is the Vooya Wallet?",
      answer:
        "The Vooya Wallet is a digital wallet that lets you fund, earn, and redeem points for travel experiences and vendor services.",
    },
    {
      question: "How do I fund my wallet?",
      answer:
        "You can fund your wallet through mobile money, bank cards, or other supported methods directly in the app or on our website.",
    },
    {
      question: "What can I use my wallet for?",
      answer:
        "You can: Pay for tours and experiences, Earn and redeem travel points, Access partner deals and local vendor services.",
    },
    {
      question: "How do points work?",
      answer:
        "You earn points when you complete bookings or engage with certain activities. Points can be redeemed for discounts or full payments on selected tours.",
    },
    {
      question: "Do points expire?",
      answer: "Yes, points are valid for 12 months from the date they're earned.",
    },
    {
      question: "Is my wallet balance refundable?",
      answer:
        "Wallet balances are not directly refundable as cash, but you can use your funds for any available services. Exceptions may be made in rare cases—email hello@tukwangh.com for help.",
    },
    {
      question: "Can I transfer wallet funds or points to another user?",
      answer:
        "Not yet. We're working on a peer-to-peer feature, but currently, funds and points are tied to individual accounts.",
    },
    {
      question: "Is the wallet secure?",
      answer:
        "Yes, we use bank-grade encryption and multi-factor authentication to keep your information and funds safe.",
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Find answers to common questions about our tours, wallet, and services.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white border-b">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="tours" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger
                  value="tours"
                  className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <HelpCircle className="h-4 w-4" />
                  Tours & Experiences
                </TabsTrigger>
                <TabsTrigger
                  value="wallet"
                  className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <Wallet className="h-4 w-4" />
                  Vooya Wallet
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tours" className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-600 mb-2">Tours & Experiences</h2>
                  <p className="text-gray-600">
                    Everything you need to know about booking and enjoying our curated tours across Ghana.
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {tourFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`tour-item-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left font-medium py-4 hover:no-underline hover:text-blue-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="wallet" className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-600 mb-2">Vooya Wallet</h2>
                  <p className="text-gray-600">
                    Learn about our digital wallet, how to earn and redeem points, and manage your funds.
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {walletFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`wallet-item-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left font-medium py-4 hover:no-underline hover:text-blue-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-8">
                Can't find the answer you're looking for? Our team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">Contact Support</Button>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3">Live Chat</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
