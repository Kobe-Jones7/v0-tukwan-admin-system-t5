"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, CreditCard } from "lucide-react"
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
  const [paymentMethod, setPaymentMethod] = useState<"card" | "vooya">("card")

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
      setPaymentMethod("card")
    }, 3000)
  }

  const totalPrice = tourPackage.price * guests

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
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              {/* Tour Date */}
              <div className="space-y-2">
                <Label htmlFor="date">Tour Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
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
                  <div
                    className={`border rounded-md p-3 cursor-pointer flex items-center gap-2 ${
                      paymentMethod === "card" ? "border-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <CreditCard className="h-5 w-5 text-gray-500" />
                    <span>Credit Card</span>
                  </div>
                  <div
                    className={`border rounded-md p-3 cursor-pointer flex items-center gap-2 ${
                      paymentMethod === "vooya" ? "border-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setPaymentMethod("vooya")}
                  >
                    <Image src="/images/tukwan-logo.png" alt="Vooya" width={20} height={20} className="h-5 w-5" />
                    <span>Vooya Wallet</span>
                  </div>
                </div>
              </div>

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
                {paymentMethod === "vooya" && (
                  <div className="flex justify-between mb-2 text-green-600">
                    <span>Vooya Wallet discount:</span>
                    <span>-GH₵ {Math.round(totalPrice * 0.05).toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                  <span>Total:</span>
                  <span>
                    GH₵{" "}
                    {paymentMethod === "vooya"
                      ? Math.round(totalPrice * 0.95).toLocaleString()
                      : totalPrice.toLocaleString()}
                  </span>
                </div>
                {paymentMethod === "vooya" && (
                  <p className="text-sm text-green-600 mt-2">Save 5% by paying with Vooya Wallet!</p>
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
