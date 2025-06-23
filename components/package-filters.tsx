"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Filter, X, Search } from "lucide-react"
import type { TourPackage } from "@/data/tour-packages"

interface PackageFiltersProps {
  packages: TourPackage[]
  onFilterChange: (filteredPackages: TourPackage[]) => void
}

export interface FilterState {
  searchQuery: string
  regions: string[]
  durations: string[]
  priceRange: [number, number]
  ratings: number[]
  tags: string[]
}

export function PackageFilters({ packages, onFilterChange }: PackageFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: "",
    regions: [],
    durations: [],
    priceRange: [0, 3000],
    ratings: [],
    tags: [],
  })

  const [isExpanded, setIsExpanded] = useState(false)

  // Add safety check
  if (!packages || packages.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="p-6 text-center">
          <p className="text-gray-500">No packages available to filter</p>
        </CardContent>
      </Card>
    )
  }

  // Get unique values for filter options
  const uniqueRegions = Array.from(new Set(packages.map((pkg) => pkg.region)))
  const uniqueDurations = Array.from(new Set(packages.map((pkg) => pkg.duration)))
  const uniqueTags = Array.from(new Set(packages.flatMap((pkg) => pkg.tags)))
  const maxPrice = Math.max(...packages.map((pkg) => pkg.price))
  const minPrice = Math.min(...packages.map((pkg) => pkg.price))

  // Apply filters
  const applyFilters = (newFilters: FilterState) => {
    let filtered = packages

    // Search query filter
    if (newFilters.searchQuery) {
      const query = newFilters.searchQuery.toLowerCase()
      filtered = filtered.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(query) ||
          pkg.description.toLowerCase().includes(query) ||
          pkg.region.toLowerCase().includes(query) ||
          pkg.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Region filter
    if (newFilters.regions.length > 0) {
      filtered = filtered.filter((pkg) => newFilters.regions.includes(pkg.region))
    }

    // Duration filter
    if (newFilters.durations.length > 0) {
      filtered = filtered.filter((pkg) => newFilters.durations.includes(pkg.duration))
    }

    // Price range filter
    filtered = filtered.filter((pkg) => pkg.price >= newFilters.priceRange[0] && pkg.price <= newFilters.priceRange[1])

    // Rating filter
    if (newFilters.ratings.length > 0) {
      filtered = filtered.filter((pkg) => {
        const pkgRating = Math.floor(pkg.rating)
        return newFilters.ratings.includes(pkgRating)
      })
    }

    // Tags filter
    if (newFilters.tags.length > 0) {
      filtered = filtered.filter((pkg) => newFilters.tags.some((tag) => pkg.tags.includes(tag)))
    }

    onFilterChange(filtered)
  }

  // Update filters and apply them
  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    applyFilters(updatedFilters)
  }

  // Clear all filters
  const clearFilters = () => {
    const clearedFilters: FilterState = {
      searchQuery: "",
      regions: [],
      durations: [],
      priceRange: [minPrice, maxPrice],
      ratings: [],
      tags: [],
    }
    setFilters(clearedFilters)
    onFilterChange(packages)
  }

  // Handle checkbox changes
  const handleCheckboxChange = (value: string, filterType: keyof FilterState, checked: boolean) => {
    const currentArray = filters[filterType] as string[]
    let newArray: string[]

    if (checked) {
      newArray = [...currentArray, value]
    } else {
      newArray = currentArray.filter((item) => item !== value)
    }

    updateFilters({ [filterType]: newArray })
  }

  // Count active filters
  const activeFiltersCount =
    (filters.searchQuery ? 1 : 0) +
    filters.regions.length +
    filters.durations.length +
    (filters.priceRange[0] !== minPrice || filters.priceRange[1] !== maxPrice ? 1 : 0) +
    filters.ratings.length +
    filters.tags.length

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFiltersCount}
              </Badge>
            )}
          </CardTitle>
          <div className="flex gap-2">
            {activeFiltersCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Hide" : "Show"} Filters
            </Button>
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-6">
          {/* Search */}
          <div className="space-y-2">
            <Label htmlFor="search">Search Packages</Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                id="search"
                placeholder="Search by name, description, or region..."
                value={filters.searchQuery}
                onChange={(e) => updateFilters({ searchQuery: e.target.value })}
                className="pl-8"
              />
            </div>
          </div>

          {/* Region Filter */}
          <div className="space-y-3">
            <Label>Region</Label>
            <div className="space-y-2">
              {uniqueRegions.map((region) => (
                <div key={region} className="flex items-center space-x-2">
                  <Checkbox
                    id={`region-${region}`}
                    checked={filters.regions.includes(region)}
                    onCheckedChange={(checked) => handleCheckboxChange(region, "regions", checked as boolean)}
                  />
                  <Label htmlFor={`region-${region}`} className="text-sm font-normal">
                    {region} Region
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Duration Filter */}
          <div className="space-y-3">
            <Label>Duration</Label>
            <div className="space-y-2">
              {uniqueDurations.map((duration) => (
                <div key={duration} className="flex items-center space-x-2">
                  <Checkbox
                    id={`duration-${duration}`}
                    checked={filters.durations.includes(duration)}
                    onCheckedChange={(checked) => handleCheckboxChange(duration, "durations", checked as boolean)}
                  />
                  <Label htmlFor={`duration-${duration}`} className="text-sm font-normal">
                    {duration}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-3">
            <Label>Price Range (GH₵)</Label>
            <div className="px-2">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
                max={maxPrice}
                min={minPrice}
                step={50}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>GH₵ {filters.priceRange[0].toLocaleString()}</span>
                <span>GH₵ {filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="space-y-3">
            <Label>Minimum Rating</Label>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox
                    id={`rating-${rating}`}
                    checked={filters.ratings.includes(rating)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(rating.toString(), "ratings", checked as boolean)
                    }
                  />
                  <Label htmlFor={`rating-${rating}`} className="text-sm font-normal flex items-center">
                    {rating}+ Stars
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div className="space-y-3">
            <Label>Categories</Label>
            <div className="space-y-2">
              {uniqueTags.map((tag) => (
                <div key={tag} className="flex items-center space-x-2">
                  <Checkbox
                    id={`tag-${tag}`}
                    checked={filters.tags.includes(tag)}
                    onCheckedChange={(checked) => handleCheckboxChange(tag, "tags", checked as boolean)}
                  />
                  <Label htmlFor={`tag-${tag}`} className="text-sm font-normal">
                    {tag}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
