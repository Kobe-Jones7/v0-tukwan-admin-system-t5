"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Sparkles, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface AISearchResultsProps {
  results: any
}

export function AISearchResults({ results }: AISearchResultsProps) {
  const router = useRouter()

  if (!results) return null

  const handleBookNow = () => {
    // Navigate to checkout with the itinerary data
    const bookingData = {
      type: "custom-itinerary",
      location: results.location,
      duration: results.itinerary?.length || 3,
      estimatedCost: results.estimatedCost?.total || 1500,
      itinerary: results.itinerary,
    }

    localStorage.setItem("bookingData", JSON.stringify(bookingData))
    router.push("/checkout")
  }

  const handleCustomize = () => {
    // Navigate to custom tour request page
    const customData = {
      location: results.location,
      itinerary: results.itinerary,
      estimatedCost: results.estimatedCost,
    }

    localStorage.setItem("customTourData", JSON.stringify(customData))
    router.push("/custom-tour-request")
  }

  return (
    <div className="space-y-6">
      {/* AI Generated Itinerary */}
      {results.itinerary && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-blue-600" />
              Your Personalized {results.location} Itinerary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700 leading-relaxed">{results.overview}</p>

            {/* Daily Itinerary */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Daily Schedule</h4>
              {results.itinerary.map((day: any, index: number) => (
                <Card key={index} className="bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Badge className="bg-blue-600">Day {day.day}</Badge>
                      {day.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {day.activities.map((activity: any, actIndex: number) => (
                      <div key={actIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-16 text-sm font-medium text-gray-500">{activity.time}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="font-medium">{activity.activity}</span>
                          </div>
                          <p className="text-sm text-gray-600">{activity.description}</p>
                          {activity.location && (
                            <div className="flex items-center gap-1 mt-1">
                              <MapPin className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-500">{activity.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Travel Tips */}
            {results.tips && (
              <div>
                <h4 className="text-lg font-semibold mb-3">Local Tips & Recommendations</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {results.tips.map((tip: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Estimated Costs */}
            {results.estimatedCost && (
              <div className="bg-white p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Estimated Costs</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">GH₵{results.estimatedCost.accommodation}</div>
                    <div className="text-sm text-gray-600">Accommodation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">GH₵{results.estimatedCost.meals}</div>
                    <div className="text-sm text-gray-600">Meals</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">GH₵{results.estimatedCost.transport}</div>
                    <div className="text-sm text-gray-600">Transport</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">GH₵{results.estimatedCost.total}</div>
                    <div className="text-sm text-gray-600">Total</div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button onClick={handleBookNow} className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="h-4 w-4 mr-2" />
                Book This Itinerary
              </Button>
              <Button onClick={handleCustomize} variant="outline">
                Customize Itinerary
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
