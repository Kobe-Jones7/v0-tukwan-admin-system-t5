"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Smartphone, DollarSign, CheckCircle, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function CheckoutPage() {
  const [bookingData, setBookingData] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState<"mobile-money" | "card" | "paypal" | "vooya">("mobile-money")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
    travelDate: "",
  })

  useEffect(() => {
    const data = localStorage.getItem("bookingData")
    if (data) {
      setBookingData(JSON.parse(data))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Clear booking data
    localStorage.removeItem("bookingData")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SiteHeader />
        <main className="container px-4 md:px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">No Booking Data Found</h1>
            <p className="text-gray-600 mb-8">Please select a tour package or create an itinerary first.</p>
            <Button onClick={() => window.history.back()} className="bg-blue-600 hover:bg-blue-700">
              Go Back
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const totalPrice = bookingData.estimatedCost || 1500
  const getDiscountedPrice = () => {
    switch (paymentMethod) {
      case "vooya":
        return Math.round(totalPrice * 0.95) // 5% discount
      case "mobile-money":
        return Math.round(totalPrice * 0.98) // 2% discount
      default:
        return totalPrice
    }
  }

  const discountedPrice = getDiscountedPrice()
  const savings = totalPrice - discountedPrice

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />

      <main className="container px-4 md:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>

          {isSuccess ? (
            <Card className="max-w-2xl mx-auto">
              <CardContent className="text-center py-12">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">Booking Confirmed!</h2>
                <p className="text-gray-600 mb-6">
                  Your {bookingData.type === "custom-itinerary" ? "custom itinerary" : "tour package"} has been booked
                  successfully. You'll receive a confirmation email shortly with all the details.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="text-sm text-gray-600">Booking Reference</div>
                  <div className="text-lg font-bold">TUK-{Date.now().toString().slice(-6)}</div>
                </div>
                <Button onClick={() => (window.location.href = "/")} className="bg-blue-600 hover:bg-blue-700">
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Booking Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {bookingData.location} Experience
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {bookingData.type === "custom-itinerary" ? "Custom AI-Generated Itinerary" : "Tour Package"}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      {bookingData.duration} days
                    </div>

                    {bookingData.itinerary && (
                      <div>
                        <h4 className="font-medium mb-2">Itinerary Highlights</h4>
                        <div className="space-y-1">
                          {bookingData.itinerary.slice(0, 3).map((day: any, index: number) => (
                            <div key={index} className="text-sm text-gray-600">
                              Day {day.day}: {day.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Base Price:</span>
                        <span>GH₵ {totalPrice.toLocaleString()}</span>
                      </div>
                      {savings > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>
                            {paymentMethod === "mobile-money" && "Mobile Money discount:"}
                            {paymentMethod === "vooya" && "Tukwan Wallet discount:"}
                          </span>
                          <span>-GH₵ {savings.toLocaleString()}</span>
                        </div>
                      )}
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span className="text-blue-600">GH₵ {discountedPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+233 XXX XXX XXX"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="travelDate">Preferred Travel Date</Label>
                          <Input
                            id="travelDate"
                            type="date"
                            value={formData.travelDate}
                            onChange={(e) => handleInputChange("travelDate", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                        <Textarea
                          id="specialRequests"
                          value={formData.specialRequests}
                          onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                          placeholder="Any dietary requirements, accessibility needs, etc."
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Method */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        {/* Mobile Money */}
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            paymentMethod === "mobile-money" ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setPaymentMethod("mobile-money")}
                        >
                          <div className="flex items-center gap-3">
                            <Smartphone className="h-6 w-6 text-green-600" />
                            <div>
                              <div className="font-medium">Mobile Money</div>
                              <div className="text-sm text-green-600">2% discount</div>
                            </div>
                          </div>
                        </div>

                        {/* Credit Card */}
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            paymentMethod === "card" ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setPaymentMethod("card")}
                        >
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-6 w-6 text-gray-600" />
                            <div>
                              <div className="font-medium">Credit Card</div>
                              <div className="text-sm text-gray-500">Visa, Mastercard</div>
                            </div>
                          </div>
                        </div>

                        {/* PayPal */}
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            paymentMethod === "paypal" ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setPaymentMethod("paypal")}
                        >
                          <div className="flex items-center gap-3">
                            <DollarSign className="h-6 w-6 text-blue-600" />
                            <div>
                              <div className="font-medium">PayPal</div>
                              <div className="text-sm text-gray-500">Secure payment</div>
                            </div>
                          </div>
                        </div>

                        {/* Tukwan Wallet */}
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            paymentMethod === "vooya" ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setPaymentMethod("vooya")}
                        >
                          <div className="flex items-center gap-3">
                            <Image src="/images/tukwan-logo.png" alt="Tukwan" width={24} height={24} />
                            <div>
                              <div className="font-medium">Tukwan Wallet</div>
                              <div className="text-sm text-green-600">5% discount</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment Details */}
                      {paymentMethod === "mobile-money" && (
                        <div className="space-y-3 p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="space-y-2">
                            <Label htmlFor="mobileNetwork">Select Network</Label>
                            <select id="mobileNetwork" className="w-full p-2 border rounded-md">
                              <option value="">Choose your network</option>
                              <option value="mtn">MTN Mobile Money</option>
                              <option value="vodafone">Vodafone Cash</option>
                              <option value="airteltigo">AirtelTigo Money</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="mobileNumber">Mobile Number</Label>
                            <Input id="mobileNumber" placeholder="0XX XXX XXXX" />
                          </div>
                        </div>
                      )}

                      {paymentMethod === "card" && (
                        <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" placeholder="Enter name as on card" />
                          </div>
                        </div>
                      )}

                      {paymentMethod === "paypal" && (
                        <div className="space-y-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="space-y-2">
                            <Label htmlFor="paypalEmail">PayPal Email</Label>
                            <Input id="paypalEmail" type="email" placeholder="your@email.com" />
                          </div>
                        </div>
                      )}

                      {paymentMethod === "vooya" && (
                        <div className="space-y-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="space-y-2">
                            <Label htmlFor="walletPin">Wallet PIN</Label>
                            <Input id="walletPin" type="password" placeholder="Enter your 4-digit PIN" maxLength={4} />
                          </div>
                          <div className="text-sm text-blue-600">Current Balance: GH₵ 2,450.00</div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg"
                  >
                    {isSubmitting ? "Processing Payment..." : `Pay GH₵ ${discountedPrice.toLocaleString()}`}
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
