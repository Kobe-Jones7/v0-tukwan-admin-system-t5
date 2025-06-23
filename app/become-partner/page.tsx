"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function BecomePartnerPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    productType: "",
    priceRange: "",
    location: "",
    description: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // Reset form after submission
    setFormData({
      businessName: "",
      businessType: "",
      productType: "",
      priceRange: "",
      location: "",
      description: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
    })
    // Scroll to top to show confirmation message
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
        <section className="bg-blue-600 text-white py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Become a Partner</h1>
            <p className="max-w-2xl text-lg">
              Join our marketplace as a tour operator, accommodation provider, or artisan vendor and reach thousands of
              customers across Africa and beyond.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            {formSubmitted ? (
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Application Received</h2>
                    <p className="text-gray-600 mb-6 max-w-md">
                      Thank you for your interest in partnering with Tukwan. We will review your application and be in
                      touch shortly.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
                      Submit Another Application
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="sticky top-24">
                    <h2 className="text-2xl font-bold mb-4">Why Partner With Us?</h2>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-2">Expand Your Reach</h3>
                        <p className="text-gray-600">
                          Connect with thousands of travelers and customers looking for authentic African experiences
                          and products.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-2">Easy Management</h3>
                        <p className="text-gray-600">
                          Use our simple dashboard to manage your listings, bookings, and customer communications.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-2">Secure Payments</h3>
                        <p className="text-gray-600">
                          Receive payments securely through our platform with multiple payment options.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Partner Application Form</CardTitle>
                      <CardDescription>
                        Please fill out the form below to apply to become a Tukwan partner. We'll review your
                        application and contact you shortly.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Business Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Business Information</h3>

                          <div className="grid gap-4">
                            <div>
                              <Label htmlFor="businessName">Business Name *</Label>
                              <Input
                                id="businessName"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                placeholder="Your business name"
                                required
                              />
                            </div>

                            <div>
                              <Label htmlFor="businessType">Business Type *</Label>
                              <RadioGroup
                                value={formData.businessType}
                                onValueChange={(value) => handleSelectChange("businessType", value)}
                                className="flex flex-col space-y-1 mt-2"
                                required
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="accommodation" id="accommodation" />
                                  <Label htmlFor="accommodation" className="font-normal">
                                    Accommodation Provider
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="tour" id="tour" />
                                  <Label htmlFor="tour" className="font-normal">
                                    Tour Operator
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="vendor" id="vendor" />
                                  <Label htmlFor="vendor" className="font-normal">
                                    Artisan/Vendor
                                  </Label>
                                </div>
                              </RadioGroup>
                            </div>

                            <div>
                              <Label htmlFor="productType">What do you sell? *</Label>
                              <Select
                                value={formData.productType}
                                onValueChange={(value) => handleSelectChange("productType", value)}
                                required
                              >
                                <SelectTrigger id="productType">
                                  <SelectValue placeholder="Select product/service type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="hotel">Hotel Rooms</SelectItem>
                                  <SelectItem value="resort">Resort Stays</SelectItem>
                                  <SelectItem value="tours">Guided Tours</SelectItem>
                                  <SelectItem value="experiences">Experiences</SelectItem>
                                  <SelectItem value="fabrics">Fabrics & Textiles</SelectItem>
                                  <SelectItem value="art">Art & Sculptures</SelectItem>
                                  <SelectItem value="jewelry">Jewelry & Accessories</SelectItem>
                                  <SelectItem value="homeDecor">Home Decor</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label htmlFor="priceRange">Price Range *</Label>
                              <Select
                                value={formData.priceRange}
                                onValueChange={(value) => handleSelectChange("priceRange", value)}
                                required
                              >
                                <SelectTrigger id="priceRange">
                                  <SelectValue placeholder="Select price range" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="budget">Budget (Under GH₵ 100)</SelectItem>
                                  <SelectItem value="midRange">Mid-range (GH₵ 100 - 500)</SelectItem>
                                  <SelectItem value="premium">Premium (GH₵ 500 - 2,000)</SelectItem>
                                  <SelectItem value="luxury">Luxury (GH₵ 2,000+)</SelectItem>
                                  <SelectItem value="various">Various Price Points</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label htmlFor="location">Location *</Label>
                              <Input
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="City, Region, Country"
                                required
                              />
                            </div>

                            <div>
                              <Label htmlFor="description">Description of Products/Services *</Label>
                              <Textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Please provide details about what you offer..."
                                className="min-h-[120px]"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Contact Information</h3>

                          <div className="grid gap-4">
                            <div>
                              <Label htmlFor="contactName">Contact Person *</Label>
                              <Input
                                id="contactName"
                                name="contactName"
                                value={formData.contactName}
                                onChange={handleChange}
                                placeholder="Full name"
                                required
                              />
                            </div>

                            <div>
                              <Label htmlFor="contactEmail">Email Address *</Label>
                              <Input
                                id="contactEmail"
                                name="contactEmail"
                                type="email"
                                value={formData.contactEmail}
                                onChange={handleChange}
                                placeholder="email@example.com"
                                required
                              />
                            </div>

                            <div>
                              <Label htmlFor="contactPhone">Phone Number *</Label>
                              <Input
                                id="contactPhone"
                                name="contactPhone"
                                type="tel"
                                value={formData.contactPhone}
                                onChange={handleChange}
                                placeholder="Include country code"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                            Submit Application
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-10">What Our Partners Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Joining Tukwan has transformed our business. We've seen a 40% increase in bookings since becoming a partner.",
                  name: "Sarah Mensah",
                  business: "Cape Coast Heritage Tours",
                },
                {
                  quote:
                    "The platform is easy to use and the support team is always available to help. I've been able to reach customers from all over the world.",
                  name: "Kwame Osei",
                  business: "Ashanti Crafts",
                },
                {
                  quote:
                    "As a small hotel owner, Tukwan has helped me compete with larger chains. The commission structure is fair and payments are always on time.",
                  name: "Ama Darko",
                  business: "Lakeside Resort",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.business}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How long does the application process take?",
                  answer:
                    "The application review typically takes 3-5 business days. Once approved, you can start listing your products or services immediately.",
                },
                {
                  question: "What are the fees and commissions?",
                  answer:
                    "We charge a 10% commission on successful bookings and sales. There are no upfront fees or monthly charges to join as a partner.",
                },
                {
                  question: "How do I receive payments?",
                  answer:
                    "Payments are processed securely through our platform. We support mobile money, bank transfers, and international payment methods. Partners receive payouts twice a month.",
                },
                {
                  question: "Can I list multiple types of products or services?",
                  answer:
                    "Yes, you can list multiple categories of products or services under one account. Each listing can be managed separately through your partner dashboard.",
                },
                {
                  question: "What support do partners receive?",
                  answer:
                    "Partners receive dedicated support from our team, access to marketing tools, analytics dashboard, and regular training on how to maximize their presence on the platform.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
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
