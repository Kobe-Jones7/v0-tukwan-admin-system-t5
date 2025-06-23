"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import {
  Phone,
  Mail,
  MessageSquare,
  Search,
  Package,
  ShoppingBag,
  Users,
  BarChart3,
  Settings,
  CreditCard,
  Calendar,
} from "lucide-react"

export default function DashboardHelpPage() {
  const [partnerType, setPartnerType] = useState<"tour-guide" | "vendor" | "tour-operator">("tour-guide")

  // FAQ data based on partner type
  const getFAQs = () => {
    const commonFAQs = [
      {
        question: "How do I update my business profile?",
        answer:
          "Go to the Profile section in your dashboard. Click 'Edit Profile' to make changes to your business information, contact details, and social media links. Don't forget to save your changes.",
      },
      {
        question: "How do I view my earnings and analytics?",
        answer:
          "Navigate to the Analytics section to view detailed reports on your earnings, bookings, customer data, and performance metrics. You can filter data by date ranges and export reports.",
      },
      {
        question: "How do I change my account settings?",
        answer:
          "Go to Settings in your dashboard to update your password, notification preferences, payment methods, and other account configurations.",
      },
      {
        question: "What should I do if I forgot my password?",
        answer:
          "Click 'Forgot Password' on the login page and enter your email address. You'll receive instructions to reset your password via email.",
      },
      {
        question: "How do I contact customer support?",
        answer:
          "You can reach our support team through this help page, by email at partners@tukwangh.com, or by phone at 0203960435. We're available Monday-Friday, 8:00 AM - 6:00 PM.",
      },
    ]

    const specificFAQs = {
      "tour-guide": [
        {
          question: "How do I add a new tour?",
          answer:
            "Go to 'My Tours' and click 'Add New Tour'. Fill in the tour details including title, description, price, duration, and itinerary. Upload high-quality images and set your tour status to 'Active' when ready to accept bookings.",
        },
        {
          question: "How do I manage tour bookings?",
          answer:
            "Visit the 'Bookings' section to view all your tour reservations. You can see booking details, customer information, payment status, and communicate with customers directly.",
        },
        {
          question: "How do I set my tour availability?",
          answer:
            "In the 'My Tours' section, click on a tour and go to 'Manage Schedule'. You can set available dates, block out unavailable periods, and manage group sizes.",
        },
        {
          question: "What happens when someone books my tour?",
          answer:
            "You'll receive an instant notification via email and in your dashboard. The booking will appear in your 'Bookings' section with customer details and payment information.",
        },
        {
          question: "How do I handle cancellations?",
          answer:
            "Cancellation policies are set when creating your tour. If a customer cancels, you'll be notified and can process refunds according to your policy through the booking management system.",
        },
      ],
      vendor: [
        {
          question: "How do I add products to my store?",
          answer:
            "Navigate to 'Products' and click 'Add New Product'. Include detailed descriptions, high-quality images, pricing, and inventory information. Set your product status to 'Active' to make it available for purchase.",
        },
        {
          question: "How do I manage my inventory?",
          answer:
            "In the 'Products' section, you can update stock levels, set low-stock alerts, and manage product variations. The system will automatically update availability based on your inventory levels.",
        },
        {
          question: "How do I process orders?",
          answer:
            "Check the 'Orders' section regularly for new orders. You can view order details, update order status, print shipping labels, and communicate with customers about their purchases.",
        },
        {
          question: "How do I set up shipping options?",
          answer:
            "Go to Settings > Shipping to configure your shipping zones, rates, and delivery options. You can offer different shipping methods and set handling times.",
        },
        {
          question: "What are the commission rates?",
          answer:
            "Tukwan charges a 10% commission on successful sales. This covers payment processing, platform maintenance, and customer support. There are no upfront fees or monthly charges.",
        },
      ],
      "tour-operator": [
        {
          question: "How do I create tour packages?",
          answer:
            "Go to 'Tour Packages' and click 'Add Tour Package'. Create comprehensive packages including accommodations, activities, meals, and transportation. You can bundle multiple services for better value.",
        },
        {
          question: "How do I manage my tour guides?",
          answer:
            "In the 'Guides' section, you can add guide profiles, assign them to specific tours, manage their schedules, and track their performance ratings.",
        },
        {
          question: "How do I handle group bookings?",
          answer:
            "Large group bookings appear in your 'Bookings' section with special indicators. You can offer group discounts and coordinate with multiple travelers through the group booking management tools.",
        },
        {
          question: "Can I create custom packages for clients?",
          answer:
            "Yes! Use the 'Custom Package' feature to create tailored experiences for specific client requests. You can adjust pricing, itineraries, and inclusions based on client needs.",
        },
        {
          question: "How do I coordinate with accommodation providers?",
          answer:
            "The platform allows you to connect with verified accommodation partners. You can check availability, make reservations, and manage bookings through the integrated system.",
        },
      ],
    }

    return [...specificFAQs[partnerType], ...commonFAQs]
  }

  const faqs = getFAQs()

  // Getting started guides based on partner type
  const getGettingStartedSteps = () => {
    if (partnerType === "tour-guide") {
      return [
        {
          title: "Complete Your Profile",
          description: "Add your business information, contact details, and upload a professional photo.",
          icon: <Users className="h-5 w-5 text-blue-600" />,
        },
        {
          title: "Create Your First Tour",
          description: "Add a detailed tour with descriptions, pricing, and high-quality images.",
          icon: <Package className="h-5 w-5 text-blue-600" />,
        },
        {
          title: "Set Your Availability",
          description: "Configure your tour schedule and availability calendar.",
          icon: <Calendar className="h-5 w-5 text-blue-600" />,
        },
        {
          title: "Start Receiving Bookings",
          description: "Once approved, your tours will be visible to customers for booking.",
          icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
        },
      ]
    } else if (partnerType === "vendor") {
      return [
        {
          title: "Set Up Your Store",
          description: "Complete your vendor profile with business details and branding.",
          icon: <ShoppingBag className="h-5 w-5 text-blue-600" />,
        },
        {
          title: "Add Your Products",
          description: "Upload products with detailed descriptions and professional photos.",
          icon: <Package className="h-5 w-5 text-blue-600" />,
        },
        {
          title: "Configure Shipping",
          description: "Set up your shipping zones, rates, and delivery options.",
          icon: <Settings className="h-5 w-5 text-blue-600" />,
        },
        {
          title: "Start Selling",
          description: "Once approved, customers can discover and purchase your products.",
          icon: <CreditCard className="h-5 w-5 text-blue-600" />,
        },
      ]
    } else {
      return [
        {
          title: "Complete Business Setup",
          description: "Add your company information, licenses, and certifications.",
          icon: <Users className="h-5 w-5 text-blue-600" />,
        },
        {
          title: "Create Tour Packages",
          description: "Design comprehensive tour packages with multiple services.",
          icon: <Package className="h-5 w-5 text-blue-600" />,
        },
        {
          title: "Add Your Team",
          description: "Register your tour guides and assign them to packages.",
          icon: <Users className="h-5 w-5 text-blue-600" />,
        },
        {
          title: "Launch Your Business",
          description: "Start accepting bookings and managing your tour operations.",
          icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
        },
      ]
    }
  }

  const gettingStartedSteps = getGettingStartedSteps()

  return (
    <DashboardLayout partnerType={partnerType}>
      <div className="mb-8">
        <Tabs defaultValue="tour-guide" onValueChange={(value) => setPartnerType(value as any)}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Help & Support</h1>
              <p className="text-gray-500 mt-1">Get help with managing your business on Tukwan</p>
            </div>
            <TabsList>
              <TabsTrigger value="tour-guide">Tour Guide</TabsTrigger>
              <TabsTrigger value="vendor">Vendor</TabsTrigger>
              <TabsTrigger value="tour-operator">Tour Operator</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>

      {/* Contact Support Section */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone Support</h3>
                <p className="text-gray-600 mb-2">Call us directly for urgent issues</p>
                <p className="text-lg font-medium">0203960435</p>
                <p className="text-sm text-gray-500">Mon-Fri, 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Support</h3>
                <p className="text-gray-600 mb-2">Send us detailed questions</p>
                <p className="text-lg font-medium">partners@tukwangh.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Live Chat</h3>
                <p className="text-gray-600 mb-2">Get instant help</p>
                <Button className="bg-blue-600 hover:bg-blue-700 mt-2">Start Chat</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started Guide */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Getting Started Guide</CardTitle>
          <CardDescription>
            Follow these steps to set up your{" "}
            {partnerType === "tour-guide" ? "tour guide" : partnerType === "vendor" ? "vendor" : "tour operator"}{" "}
            business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gettingStartedSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg border relative z-10 h-full">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < gettingStartedSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Common questions about managing your{" "}
            {partnerType === "tour-guide" ? "tour guide" : partnerType === "vendor" ? "vendor" : "tour operator"}{" "}
            business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search for answers..." className="pl-10" />
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium py-4 hover:no-underline hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>Send Us a Message</CardTitle>
          <CardDescription>
            Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" type="text" placeholder="What is your message about?" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" required />
            </div>

            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
