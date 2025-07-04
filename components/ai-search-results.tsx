"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star, Calendar } from "lucide-react"
import Image from "next/image"

interface AISearchResultsProps {
  results: any
}

export function AISearchResults({ results }: AISearchResultsProps) {
  if (!results) return null

  return (
    <div className="space-y-6">
      {/* AI Response */}
      {results.response && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">AI Travel Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{results.response}</p>
          </CardContent>
        </Card>
      )}

      {/* Generated Tour Packages */}
      {results.packages && results.packages.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Recommended Tour Packages</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {results.packages.map((pkg: any, index: number) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={pkg.image || "/placeholder.svg?height=200&width=400"}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-blue-600">{pkg.duration}</Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{pkg.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {pkg.location}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600 line-clamp-2">{pkg.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-400" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-gray-400" />
                        Max {pkg.maxGroupSize}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      {pkg.rating}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">GH₵{pkg.price}</span>
                      <span className="text-sm text-gray-500 ml-1">per person</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Calendar className="h-4 w-4 mr-1" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Attractions */}
      {results.attractions && results.attractions.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Related Attractions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {results.attractions.map((attraction: any, index: number) => (
              <Card key={index}>
                <div className="relative h-32">
                  <Image
                    src={attraction.image || "/placeholder.svg?height=150&width=300"}
                    alt={attraction.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">{attraction.name}</h4>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {attraction.location}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
