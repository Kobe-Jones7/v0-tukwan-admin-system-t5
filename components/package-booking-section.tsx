"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Star, Car, Shield } from "lucide-react"
import { BookingModal } from "@/components/booking-modal"
import type { TourPackage } from "@/data/tour-packages"

interface PackageBookingSectionProps {
  tourPackage: TourPackage
}

export function PackageBookingSection({ tourPackage }: PackageBookingSectionProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <>
      <Card className="sticky top-24">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-blue-600">GH₵ {tourPackage.price.toLocaleString()}</div>
            <div className="text-gray-500">per person</div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 font-medium">{tourPackage.rating}</span>
            </div>
            <span className="text-gray-500">({tourPackage.reviews} reviews)</span>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-gray-500" />
              <span>Duration: {tourPackage.duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-gray-500" />
              <span>Max group size: {tourPackage.maxGroupSize} people</span>
            </div>
            <div className="flex items-center gap-3">
              <Car className="h-5 w-5 text-gray-500" />
              <span>Transportation included</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-gray-500" />
              <span>Difficulty: {tourPackage.difficulty}</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12" onClick={() => setIsBookingModalOpen(true)}>
              Book Now
            </Button>
            <Button variant="outline" className="w-full h-12 flex items-center justify-center gap-2">
              <Image src="/images/tukwan-logo.png" alt="Vooya" width={20} height={20} className="h-5 w-5" />
              Pay with Vooya Wallet
            </Button>
            <Button variant="ghost" className="w-full h-12" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
              <Shield className="h-4 w-4" />
              Free Cancellation
            </div>
            <p className="text-sm text-blue-600">
              Cancel up to 24 hours before the experience starts for a full refund.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tourPackage={tourPackage}
      />
    </>
  )
}
