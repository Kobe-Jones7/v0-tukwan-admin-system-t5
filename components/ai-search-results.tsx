import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, DollarSign, Calendar, Info, CheckCircle, XCircle, Lightbulb, Sparkles } from "lucide-react"
import type { AISearchResult } from "@/lib/ai-search"

interface AISearchResultsProps {
  result: AISearchResult
}

export function AISearchResults({ result }: AISearchResultsProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            AI Generated Package
          </Badge>
        </div>
        <h1 className="text-3xl font-bold">{result.packageTitle}</h1>
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <MapPin className="h-4 w-4" />
          {result.location}
        </p>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Location Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{result.overview}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Key Facts:</h4>
              <ul className="space-y-1">
                {result.keyFacts.map((fact, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Package Details:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>{result.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span>Best Time: {result.bestTimeToVisit}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Real-Time Pricing Analysis
            <Badge variant="outline" className="ml-2">
              Live Pricing
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                GH₵ {result.pricing.finalPrice.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground mb-4">Per person (based on 2 people sharing)</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Book This Package</Button>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Pricing Breakdown:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Base Package:</span>
                  <span>GH₵ {result.pricing.basePrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Accessibility Factor:</span>
                  <span>+GH₵ {result.pricing.accessibilityAdjustment}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tourist Demand:</span>
                  <span>+GH₵ {result.pricing.demandAdjustment}</span>
                </div>
                <div className="flex justify-between">
                  <span>Accommodation Level:</span>
                  <span>+GH₵ {result.pricing.accommodationAdjustment}</span>
                </div>
                <div className="flex justify-between">
                  <span>Distance Factor:</span>
                  <span>+GH₵ {result.pricing.distanceAdjustment}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cultural Significance:</span>
                  <span>+GH₵ {result.pricing.culturalAdjustment}</span>
                </div>
                <div className="flex justify-between">
                  <span>Natural Attractions:</span>
                  <span>+GH₵ {result.pricing.attractionsAdjustment}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Seasonal Multiplier:</span>
                  <span>×{result.pricing.seasonalMultiplier}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Final Price:</span>
                  <span>GH₵ {result.pricing.finalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Itinerary */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Itinerary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {result.itinerary.map((day, index) => (
              <div key={index} className="border-l-2 border-blue-200 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {day.day}
                  </div>
                  <h4 className="font-semibold">{day.title}</h4>
                </div>
                <div className="ml-10 space-y-2">
                  <div>
                    <h5 className="font-medium text-sm mb-1">Activities:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-1">Meals:</h5>
                    <ul className="text-sm text-muted-foreground">
                      {day.meals.map((meal, mealIndex) => (
                        <li key={mealIndex} className="flex items-center gap-2">
                          <DollarSign className="h-3 w-3 text-orange-600" />
                          {meal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Included/Not Included */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              What's Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {result.included.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <XCircle className="h-5 w-5" />
              What's Not Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {result.notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Travel Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Travel Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {result.travelTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Lightbulb className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Package generated on {new Date(result.lastUpdated).toLocaleDateString()}</p>
        <p>Pricing updated in real-time based on current market conditions</p>
      </div>
    </div>
  )
}
