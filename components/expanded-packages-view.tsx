"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Star, MapPin, Clock, Users, Search, Filter, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

// Tour packages data with proper slugs that match the detailed pages
const tourPackages = [
  {
    id: "1",
    title: "Cape Coast Heritage Tour",
    description:
      "Explore Ghana's rich history through its colonial castles, slave dungeons, and cultural heritage sites along the beautiful Cape Coast.",
    price: 850,
    originalPrice: 950,
    duration: "3 days",
    location: "Cape Coast, Ghana",
    rating: 4.8,
    reviewCount: 127,
    image: "/images/cape-coast-castle.png",
    category: "Cultural",
    maxGroupSize: 15,
    highlights: ["Cape Coast Castle", "Elmina Castle", "Kakum Canopy Walk", "Local Cultural Shows"],
    slug: "cape-coast-heritage-tour",
    featured: true,
    difficulty: "Easy",
    region: "Central Region",
  },
  {
    id: "2",
    title: "Mole National Park Safari",
    description:
      "Experience Ghana's premier wildlife destination with elephants, antelopes, and over 300 bird species in their natural habitat.",
    price: 1200,
    originalPrice: 1350,
    duration: "4 days",
    location: "Northern Region, Ghana",
    rating: 4.9,
    reviewCount: 89,
    image: "/images/mole-national-park.png",
    category: "Wildlife",
    maxGroupSize: 12,
    highlights: ["Elephant Watching", "Game Drives", "Bird Watching", "Cultural Village Tours"],
    slug: "mole-national-park-safari",
    featured: true,
    difficulty: "Moderate",
    region: "Northern Region",
  },
  {
    id: "3",
    title: "Volta Lake Cruise & Cultural Experience",
    description:
      "Sail on the world's largest artificial lake and explore traditional communities along its shores with luxury accommodation.",
    price: 1450,
    originalPrice: 1600,
    duration: "5 days",
    location: "Volta Region, Ghana",
    rating: 4.7,
    reviewCount: 64,
    image: "/images/volta-lake.png",
    category: "Cruise & Cultural",
    maxGroupSize: 20,
    highlights: ["Lake Cruise", "Luxury Resort", "Cultural Performances", "Traditional Villages"],
    slug: "volta-lake-cruise",
    featured: true,
    difficulty: "Easy",
    region: "Eastern & Volta Regions",
  },
  {
    id: "4",
    title: "Kumasi Cultural Experience",
    description:
      "Discover the heart of Ashanti culture in Kumasi with visits to the Manhyia Palace, Kejetia Market, and traditional craft villages.",
    price: 1200,
    duration: "2 days",
    location: "Kumasi, Ghana",
    rating: 4.6,
    reviewCount: 98,
    image: "/placeholder.svg?height=300&width=400",
    category: "Cultural",
    maxGroupSize: 18,
    highlights: ["Manhyia Palace", "Kejetia Market", "Kente Weaving", "Traditional Crafts"],
    slug: "kumasi-cultural-experience",
    featured: false,
    difficulty: "Easy",
    region: "Ashanti Region",
  },
  {
    id: "5",
    title: "Accra City & Beach Tour",
    description:
      "Explore Ghana's vibrant capital city with its modern attractions, historical sites, and beautiful beaches.",
    price: 800,
    duration: "1 day",
    location: "Accra, Ghana",
    rating: 4.4,
    reviewCount: 203,
    image: "/independence-arch-ghana.png",
    category: "City Tour",
    maxGroupSize: 25,
    highlights: ["Independence Square", "Labadi Beach", "National Museum", "Makola Market"],
    slug: "accra-city-beach-tour",
    featured: false,
    difficulty: "Easy",
    region: "Greater Accra",
  },
  {
    id: "6",
    title: "Wli Waterfalls Adventure",
    description:
      "Hike to Ghana's highest waterfall in the lush Volta Region, with opportunities for swimming and nature photography.",
    price: 600,
    duration: "1 day",
    location: "Volta Region, Ghana",
    rating: 4.5,
    reviewCount: 87,
    image: "/placeholder.svg?height=300&width=400",
    category: "Adventure",
    maxGroupSize: 15,
    highlights: ["Wli Waterfalls", "Nature Hiking", "Swimming", "Photography"],
    slug: "wli-waterfalls-adventure",
    featured: false,
    difficulty: "Moderate",
    region: "Volta Region",
  },
  {
    id: "7",
    title: "Surfing In Ghana",
    description:
      "Discover Ghana's hidden surf gems along the Atlantic coast with professional instruction, equipment, and cultural immersion.",
    price: 950,
    originalPrice: 1100,
    duration: "4 days",
    location: "Coastal Ghana",
    rating: 4.7,
    reviewCount: 73,
    image: "/ghana-beach-sunset.png",
    category: "Water Sports & Adventure",
    maxGroupSize: 8,
    highlights: ["Professional Surf Lessons", "Multiple Surf Breaks", "Cultural Exchange", "Ocean Safety Training"],
    slug: "surfing-in-ghana",
    featured: false,
    difficulty: "Easy",
    region: "Coastal Ghana",
  },
]

const regions = [
  "All Regions",
  "Greater Accra",
  "Central Region",
  "Northern Region",
  "Volta Region",
  "Ashanti Region",
  "Eastern & Volta Regions",
  "Coastal Ghana",
]
const categories = [
  "All Categories",
  "Cultural",
  "Wildlife",
  "Cruise & Cultural",
  "City Tour",
  "Adventure",
  "Water Sports & Adventure",
]
const difficulties = ["All Levels", "Easy", "Moderate", "Challenging"]

export function ExpandedPackagesView() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("All Regions")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels")
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("featured")
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (packageId: string) => {
    setFavorites((prev) => (prev.includes(packageId) ? prev.filter((id) => id !== packageId) : [...prev, packageId]))
  }

  // Filter packages
  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = selectedRegion === "All Regions" || pkg.region === selectedRegion
    const matchesCategory = selectedCategory === "All Categories" || pkg.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "All Levels" || pkg.difficulty === selectedDifficulty
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1]

    return matchesSearch && matchesRegion && matchesCategory && matchesDifficulty && matchesPrice
  })

  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "duration":
        return Number.parseInt(a.duration) - Number.parseInt(b.duration)
      case "featured":
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    }
  })

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search tours, destinations, activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Difficulty</label>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Price Range: GH₵ {priceRange[0]} - GH₵ {priceRange[1]}
              </label>
              <Slider value={priceRange} onValueChange={setPriceRange} max={3000} min={0} step={100} className="mt-2" />
            </div>
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing {sortedPackages.length} of {tourPackages.length} tours
        </p>
        {searchQuery && (
          <Button
            variant="ghost"
            onClick={() => {
              setSearchQuery("")
              setSelectedRegion("All Regions")
              setSelectedCategory("All Categories")
              setSelectedDifficulty("All Levels")
              setPriceRange([0, 3000])
            }}
          >
            Clear filters
          </Button>
        )}
      </div>

      {/* Package Grid */}
      {sortedPackages.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPackages.map((pkg) => {
            const discount = pkg.originalPrice
              ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
              : 0
            const isFavorited = favorites.includes(pkg.id)

            return (
              <Card
                key={pkg.id}
                className={cn(
                  "group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  pkg.featured && "ring-2 ring-blue-500",
                )}
              >
                <div className="relative">
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {pkg.featured && (
                      <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">Featured</Badge>
                    )}
                    {discount > 0 && (
                      <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">{discount}% OFF</Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(pkg.id)}
                  >
                    <Heart className={cn("h-4 w-4", isFavorited ? "fill-red-500 text-red-500" : "text-gray-600")} />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {pkg.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                      <span className="text-xs text-muted-foreground">({pkg.reviewCount})</span>
                    </div>
                  </div>

                  <h3 className="mb-2 font-semibold leading-tight">{pkg.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{pkg.description}</p>

                  <div className="mb-3 space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{pkg.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>Max {pkg.maxGroupSize} people</span>
                    </div>
                  </div>

                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Highlights:</p>
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.slice(0, 2).map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {pkg.highlights.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{pkg.highlights.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-600">GH₵ {pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">GH₵ {pkg.originalPrice}</span>
                      )}
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                    <Link href={`/packages/${pkg.slug}`}>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No tours found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search criteria or browse all available tours.</p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setSelectedRegion("All Regions")
              setSelectedCategory("All Categories")
              setSelectedDifficulty("All Levels")
              setPriceRange([0, 3000])
            }}
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  )
}
