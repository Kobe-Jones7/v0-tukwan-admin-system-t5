"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { submitToWaitlist } from "@/lib/actions/waitlist"
import { Loader2, Check, AlertCircle } from "lucide-react"

export default function WaitlistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setError("")

    // Add source to form data
    formData.append("source", "general")

    const result = await submitToWaitlist(formData)

    if (result.success) {
      setIsSuccess(true)
    } else {
      setError(result.message)
    }

    setIsSubmitting(false)
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Welcome to the Waitlist!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for joining our waitlist! We'll notify you as soon as Tukwan launches with exclusive early
                access and special offers.
              </p>
              <Button onClick={() => setIsSuccess(false)} variant="outline" className="mr-4">
                Join Another Email
              </Button>
              <Button asChild>
                <a href="/">Return Home</a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join Our Waitlist</h1>
            <p className="mt-4 text-lg text-gray-600">
              Be the first to experience authentic African travel and marketplace with Tukwan. Join our waitlist and
              receive 10% off your first booking and 100 points on Vooya Wallet.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            {error && (
              <div className="mb-6 flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-md">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            )}

            <form action={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="mt-1 block w-full"
                  disabled={isSubmitting}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="mt-1 block w-full"
                  disabled={isSubmitting}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
                  What are you most interested in?
                </label>
                <select
                  id="interests"
                  name="interests"
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  disabled={isSubmitting}
                >
                  <option value="">Select an option</option>
                  <option value="tours">Tour Packages</option>
                  <option value="marketplace">Marketplace Products</option>
                  <option value="accommodation">Accommodation</option>
                  <option value="becoming-partner">Becoming a Partner</option>
                  <option value="all">All of the above</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining Waitlist...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-500">
              By joining our waitlist, you agree to our{" "}
              <a href="/terms" className="font-medium text-blue-600 hover:text-blue-500">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="font-medium text-blue-600 hover:text-blue-500">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
