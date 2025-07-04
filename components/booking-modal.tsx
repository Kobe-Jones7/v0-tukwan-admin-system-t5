"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, CreditCard, Smartphone, DollarSign } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import type { TourPackage } from "@/data/tour-packages"
import { useRouter } from "next/navigation"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  tourPackage: TourPackage
}

export function BookingModal({ isOpen, onClose, tourPackage }: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [guests, setGuests] = useState(1)
  const [specialRequests, setSpecialRequests] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"mobile-money" | "card" | "paypal" | "vooya">("mobile-money")

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // If paying with Vooya Wallet, redirect to Vooya page
    if (paymentMethod === "vooya") {
      setIsSubmitting(false)
      onClose()
      router.push("/vooya-wallet")
      return
    }

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false)
      onClose()
      setDate(undefined)
      setGuests(1)
      setSpecialRequests("")
      setPaymentMethod("mobile-money")
    }, 3000)
  }

  const totalPrice = tourPackage.price * guests

  // Apply discounts based on payment method
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Book Your Tour</DialogTitle>
          <DialogDescription>Complete the form below to book your {tourPackage.title} tour.</DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Booking Confirmed!</h3>
            <p className="text-center text-gray-500 mb-4">
              Your booking for {tourPackage.title} has been confirmed. Check your email for details.
            </p>
            <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              {/* Tour Date */}
              <div className="space-y-2">
                <Label htmlFor="date">Tour Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  min={1}
                  max={tourPackage.maxGroupSize}
                  value={guests}
                  onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                />
                <p className="text-sm text-gray-500">Maximum {tourPackage.maxGroupSize} guests per booking</p>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                <Textarea
                  id="specialRequests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Any dietary requirements, accessibility needs, etc."
                />
              </div>

              {/* Payment Method */}
              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Payment Method</Label>
                <div className="grid grid-cols-2 gap-2">
                  {/* Mobile Money */}
                  <div
                    className={`border rounded-md p-3 cursor-pointer flex items-center gap-2 ${
                      paymentMethod === "mobile-money" ? "border-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setPaymentMethod("mobile-money")}
                  >
                    <Smartphone className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium text-sm">Mobile Money</div>
                      <div className="text-xs text-green-600">2% discount</div>
                    </div>
                  </div>

                  {/* Credit Card */}
                  <div
                    className={`border rounded-md p-3 cursor-pointer flex items-center gap-2 ${
                      paymentMethod === "card" ? "border-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <CreditCard className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium text-sm">Credit Card</div>
                      <div className="text-xs text-gray-500">Visa, Mastercard</div>
                    </div>
                  </div>

                  {/* PayPal */}
                  <div
                    className={`border rounded-md p-3 cursor-pointer flex items-center gap-2 ${
                      paymentMethod === "paypal" ? "border-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <DollarSign className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-sm">PayPal</div>
                      <div className="text-xs text-gray-500">Secure payment</div>
                    </div>
                  </div>

                  {/* Vooya Wallet */}
                  <div
                    className={`border rounded-md p-3 cursor-pointer flex items-center gap-2 ${
                      paymentMethod === "vooya" ? "border-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setPaymentMethod("vooya")}
                  >
                    <Image src="/images/tukwan-logo.png" alt="Vooya" width={20} height={20} className="h-5 w-5" />
                    <div>
                      <div className="font-medium text-sm">Vooya Wallet</div>
                      <div className="text-xs text-green-600">5% discount</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Details */}
              {paymentMethod === "mobile-money" && (
                <div className="space-y-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-700">
                    <Smartphone className="h-4 w-4" />
                    <span className="font-medium">Mobile Money Payment</span>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobileNetwork">Select Network</Label>
                    <select id="mobileNetwork" className="w-full p-2 border rounded-md" defaultValue="">
                      <option value="" disabled>
                        Choose your network
                      </option>
                      <option value="mtn">MTN Mobile Money</option>
                      <option value="vodafone">Vodafone Cash</option>
                      <option value="airteltigo">AirtelTigo Money</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobileNumber">Mobile Number</Label>
                    <Input id="mobileNumber" placeholder="0XX XXX XXXX" />
                  </div>
                  <div className="text-sm text-green-600 bg-green-100 p-2 rounded">
                    Save 2% with Mobile Money payment!
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
                  <div className="flex items-center gap-2 text-blue-700">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-medium">PayPal Payment</span>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paypalEmail">PayPal Email</Label>
                    <Input id="paypalEmail" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="text-sm text-blue-600">
                    You'll be redirected to PayPal to complete your payment securely.
                  </div>
                </div>
              )}

              {paymentMethod === "vooya" && (
                <div className="space-y-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 text-blue-700">
                    <Image src="/images/tukwan-logo.png" alt="Vooya" width={16} height={16} />
                    <span className="font-medium">Vooya Wallet Payment</span>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="walletPin">Wallet PIN</Label>
                    <Input id="walletPin" type="password" placeholder="Enter your 4-digit PIN" maxLength={4} />
                  </div>
                  <div className="text-sm text-blue-600">Current Balance: GH₵ 2,450.00</div>
                  <div className="text-sm text-green-600 bg-green-100 p-2 rounded">
                    Save 5% with Vooya Wallet payment!
                  </div>
                </div>
              )}

              {/* Price Summary */}
              <div className="bg-gray-50 p-4 rounded-md mt-2">
                <div className="flex justify-between mb-2">
                  <span>Price per person:</span>
                  <span>GH₵ {tourPackage.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Number of guests:</span>
                  <span>{guests}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>GH₵ {totalPrice.toLocaleString()}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between mb-2 text-green-600">
                    <span>
                      {paymentMethod === "mobile-money" && "Mobile Money discount (2%):"}
                      {paymentMethod === "vooya" && "Vooya Wallet discount (5%):"}
                    </span>
                    <span>-GH₵ {savings.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                  <span>Total:</span>
                  <span className="text-blue-600">GH₵ {discountedPrice.toLocaleString()}</span>
                </div>
                {savings > 0 && (
                  <p className="text-sm text-green-600 mt-2">
                    You save GH₵ {savings.toLocaleString()} with{" "}
                    {paymentMethod === "mobile-money" ? "Mobile Money" : "Vooya Wallet"}!
                  </p>
                )}
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={!date || isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                {isSubmitting ? "Processing..." : "Confirm Booking"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
