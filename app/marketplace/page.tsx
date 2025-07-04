"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Search, Star, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample marketplace data
const products = [
  {
    id: 1,
    name: "Handwoven Kente Cloth",
    vendor: "Ashanti Weavers",
    category: "Textiles",
    price: 150,
    originalPrice: 200,
    rating: 4.8,
    reviews: 24,
    image: "/images/kente-cloth.png",
    description: "Authentic handwoven Kente cloth with traditional patterns",
    featured: true,
    discount: 25,
  },
  {
    id: 2,
    name: "Carved Wooden Mask",
    vendor: "Kumasi Artisans",
    category: "Art & Crafts",
    price: 85,
    originalPrice: 100,
    rating: 4.6,
    reviews: 18,
    image: "/images/wooden-mask.png",
    description: "Traditional African mask carved from premium wood",
    featured: false,
    discount: 15,
  },
  {
    id: 3,
    name: "Adinkra Fabric",
    vendor: "Accra Textiles",
    category: "Textiles",
    price: 45,
    originalPrice: 60,
    rating: 4.7,
    reviews: 32,
    image: "/images/adinkra-fabric.png",
    description: "Beautiful Adinkra symbols printed on quality fabric",
    featured: true,
    discount: 25,
  },
  {
    id: 4,
    name: "Beaded Necklace Set",
    vendor: "Volta Crafts",
    category: "Jewelry",
    price: 35,
    originalPrice: 45,
    rating: 4.5,
    reviews: 15,
    image: "/images/beaded-necklace.png",
    description: "Colorful traditional beaded necklace with matching earrings",
    featured: false,
    discount: 22,
  },
  {
    id: 5,
    name: "Shea Butter Collection",
    vendor: "Northern Ghana Co-op",
    category: "Beauty & Wellness",
    price: 25,
    originalPrice: 35,
    rating: 4.9,
    reviews: 45,
    image: "/placeholder.svg?height=300&width=300",
    description: "Pure organic shea butter from Northern Ghana",
    featured: true,
    discount: 29,
  },
  {
    id: 6,
    name: "Djembe Drum",
    vendor: "Tamale Musicians",
    category: "Music & Instruments",
    price: 120,
    originalPrice: 150,
    rating: 4.8,
    reviews: 12,
    image: "/placeholder.svg?height=300&width=300",
    description: "Authentic djembe drum handcrafted by local artisans",
    featured: false,
    discount: 20,
  },
  {
    id: 7,
    name: "Batik Wall Art",
    vendor: "Cape Coast Artists",
    category: "Art & Crafts",
    price: 75,
    originalPrice: 90,
    rating: 4.6,
    reviews: 21,
    image: "/placeholder.svg?height=300&width=300",
    description: "Stunning batik artwork depicting Ghanaian landscapes",
    featured: false,
    discount: 17,
  },
  {
    id: 8,
    name: "Cocoa Products Bundle",
    vendor: "Ghana Cocoa Board",
    category: "Food & Beverages",
    price: 40,
    originalPrice: 50,
    rating: 4.7,
    reviews: 38,
    image: "/placeholder.svg?height=300&width=300",
    description: "Premium cocoa powder, chocolate bars, and cocoa butter",
    featured: true,
    discount: 20,
  },
]

const categories = [
  "All",
  "Textiles",
  "Art & Crafts",
  "Jewelry",
  "Beauty & Wellness",
  "Music & Instruments",
  "Food & Beverages",
]
const vendors = [
  "Ashanti Weavers",
  "Kumasi Artisans",
  "Accra Textiles",
  "Volta Crafts",
  "Northern Ghana Co-op",
  "Tamale Musicians",
  "Cape Coast Artists",
  "Ghana Cocoa Board",
]
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
]

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedVendors, setSelectedVendors] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory

      const matchesVendorFilter = selectedVendors.length === 0 || selectedVendors.includes(product.vendor)

      const matchesCategoryFilter = selectedCategories.length === 0 || selectedCategories.includes(product.category)

      return matchesSearch && matchesCategory && matchesVendorFilter && matchesCategoryFilter
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => b.id - a.id)
        break
      case "featured":
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    return filtered
  }, [searchQuery, selectedCategory, selectedVendors, selectedCategories, sortBy])

  const handleVendorChange = (vendor: string, checked: boolean) => {
    if (checked) {
      setSelectedVendors([...selectedVendors, vendor])
    } else {
      setSelectedVendors(selectedVendors.filter((v) => v !== vendor))
    }
  }

  const handleCategoryFilterChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All")
    setSelectedVendors([])
    setSelectedCategories([])
    setSortBy("featured")
  }

  const activeFiltersCount = selectedVendors.length + selectedCategories.length + (selectedCategory !== "All" ? 1 : 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">African Marketplace</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover authentic African crafts, textiles, and products directly from local artisans
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for products, vendors, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-white text-gray-900 border-0 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Clear ({activeFiltersCount})
                  </Button>
                )}
              </div>

              {/* Vendor Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Vendors</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {vendors.map((vendor) => (
                    <div key={vendor} className="flex items-center space-x-2">
                      <Checkbox
                        id={`vendor-${vendor}`}
                        checked={selectedVendors.includes(vendor)}
                        onCheckedChange={(checked) => handleVendorChange(vendor, checked as boolean)}
                      />
                      <label htmlFor={`vendor-${vendor}`} className="text-sm text-gray-700 cursor-pointer">
                        {vendor}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryFilterChange(category, checked as boolean)}
                      />
                      <label htmlFor={`category-${category}`} className="text-sm text-gray-700 cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {product.featured && <Badge className="absolute top-2 left-2 bg-blue-600">Featured</Badge>}
                      {product.discount > 0 && (
                        <Badge className="absolute top-2 right-2 bg-red-500">-{product.discount}%</Badge>
                      )}
                      <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>

                    <CardContent className="p-4">
                      <div className="mb-2">
                        <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.vendor}</p>
                      </div>

                      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{product.description}</p>

                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">${product.price}</span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>

                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
