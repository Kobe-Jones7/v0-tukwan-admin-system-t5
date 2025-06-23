"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, Users, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface PackageCardProps {
  id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  duration: string
  location: string
  rating: number
  reviewCount: number
  image: string
  category: string
  maxGroupSize: number
  highlights: string[]
  slug?: string
  className?: string
  featured?: boolean
}

function PackageCard({
  id,
  title,
  description,
  price,
  originalPrice,
  duration,
  location,
  rating,
  reviewCount,
  image,
  category,
  maxGroupSize,
  highlights,
  slug,
  className,
  featured = false,
}: PackageCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)
  const packageUrl = slug ? `/packages/${slug}` : `/packages/${id}`
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        featured && "ring-2 ring-orange-500",
        className,
      )}
    >
      <div className="relative">
        <Link href={packageUrl}>
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {featured && <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">Featured</Badge>}
            {discount > 0 && (
              <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">{discount}% OFF</Badge>
            )}
          </div>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
          onClick={() => setIsFavorited(!isFavorited)}
        >
          <Heart className={cn("h-4 w-4", isFavorited ? "fill-red-500 text-red-500" : "text-gray-600")} />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
        </div>

        <Link href={packageUrl}>
          <h3 className="mb-2 font-semibold leading-tight transition-colors hover:text-orange-600">{title}</h3>
        </Link>

        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="mb-3 space-y-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Max {maxGroupSize} people</span>
          </div>
        </div>

        {highlights && highlights.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-medium text-muted-foreground mb-1">Highlights:</p>
            <div className="flex flex-wrap gap-1">
              {highlights.slice(0, 2).map((highlight, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {highlight}
                </Badge>
              ))}
              {highlights.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{highlights.length - 2} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-600">${price}</span>
            {originalPrice && <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>}
            <span className="text-sm text-muted-foreground">per person</span>
          </div>
          <Link href={packageUrl}>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
              View Details
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

// Named export
export { PackageCard }

// Default export for backward compatibility
export default PackageCard
