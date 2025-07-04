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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export default function CustomTourRequestPage() {
  const [customData, setCustomData] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
    groupSize: "1",
    budget: "",
    travelDates: "",
    specialRequests: "",
    modifications: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem("customTourData")
    if (data) {
      setCustomData(JSON.parse(data))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Clear form after success
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredContact: "email",
        groupSize: "1",
        budget: "",
        travelDates: "",
        specialRequests: "",
        modifications: "",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />

      <main className="container px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Customize Your Tour</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let our travel experts create a personalized itinerary just for you. Fill out the form below and we'll
              contact you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Current Itinerary Preview */}
            {customData && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Current {customData.location} Itinerary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {customData.itinerary?.slice(0, 2).map((day: any, index: number) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-600">Day {day.day}</Badge>
                        <span className="font-medium">{day.title}</span>
                      </div>
                      <div className="space-y-1">
                        {day.activities?.slice(0, 2).map((activity: any, actIndex: number) => (
                          <div key={actIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {activity.activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {customData.estimatedCost && (
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Estimated Total Cost</div>
                      <div className="text-2xl font-bold text-blue-600">GH₵{customData.estimatedCost.total}</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Request Custom Tour</CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Request Submitted!</h3>
                    <p className="text-gray-600 mb-4">
                      Our travel experts will contact you within 24 hours to discuss your custom tour.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        +233 538132303
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        team@tukwan.app
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Personal Information */}
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
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+233 XXX XXX XXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                        <Select
                          value={formData.preferredContact}
                          onValueChange={(value) => handleInputChange("preferredContact", value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Trip Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="groupSize">Group Size</Label>
                        <Select
                          value={formData.groupSize}
                          onValueChange={(value) => handleInputChange("groupSize", value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 person</SelectItem>
                            <SelectItem value="2">2 people</SelectItem>
                            <SelectItem value="3-5">3-5 people</SelectItem>
                            <SelectItem value="6-10">6-10 people</SelectItem>
                            <SelectItem value="10+">10+ people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range (GH₵)</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="500-1000">GH₵ 500 - 1,000</SelectItem>
                            <SelectItem value="1000-2000">GH₵ 1,000 - 2,000</SelectItem>
                            <SelectItem value="2000-5000">GH₵ 2,000 - 5,000</SelectItem>
                            <SelectItem value="5000+">GH₵ 5,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                      <Input
                        id="travelDates"
                        value={formData.travelDates}
                        onChange={(e) => handleInputChange("travelDates", e.target.value)}
                        placeholder="e.g., March 15-20, 2024 or Flexible"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="modifications">Requested Modifications</Label>
                      <Textarea
                        id="modifications"
                        value={formData.modifications}
                        onChange={(e) => handleInputChange("modifications", e.target.value)}
                        placeholder="What would you like to change about the current itinerary?"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        placeholder="Dietary requirements, accessibility needs, special occasions, etc."
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      {isSubmitting ? "Submitting Request..." : "Submit Custom Tour Request"}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      Our team will review your request and contact you within 24 hours with a personalized quote.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
