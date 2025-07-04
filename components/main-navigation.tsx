"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronDown,
  Compass,
  Calendar,
  Users,
  Camera,
  Mountain,
  Waves,
  TreePine,
  Building2,
  Utensils,
  ShoppingBag,
} from "lucide-react"

interface MainNavigationProps {
  mobile?: boolean
}

export function MainNavigation({ mobile = false }: MainNavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const exploreItems = [
    { href: "/packages", label: "Tour Packages", icon: Calendar, description: "Curated travel experiences" },
    { href: "/attractions", label: "Attractions", icon: Camera, description: "Must-see destinations" },
    { href: "/marketplace", label: "Marketplace", icon: ShoppingBag, description: "Local crafts & products" },
    { href: "/discover-ghana", label: "Discover Ghana", icon: Compass, description: "Explore the country" },
  ]

  const destinationItems = [
    { href: "/destinations/accra", label: "Accra", icon: Building2, description: "Capital city adventures" },
    { href: "/destinations/cape-coast", label: "Cape Coast", icon: Waves, description: "Historical coastal town" },
    { href: "/destinations/kumasi", label: "Kumasi", icon: Users, description: "Ashanti cultural heart" },
    {
      href: "/destinations/northern-region",
      label: "Northern Region",
      icon: TreePine,
      description: "Wildlife & nature",
    },
    {
      href: "/destinations/volta-region",
      label: "Volta Region",
      icon: Mountain,
      description: "Mountains & waterfalls",
    },
    { href: "/destinations/western-region", label: "Western Region", icon: Waves, description: "Beaches & forests" },
  ]

  const categoryItems = [
    { href: "/categories/cultural", label: "Cultural Tours", icon: Users, description: "Traditional experiences" },
    { href: "/categories/adventure", label: "Adventure", icon: Mountain, description: "Thrilling activities" },
    { href: "/categories/wildlife", label: "Wildlife Safari", icon: TreePine, description: "Nature & animals" },
    { href: "/categories/beach", label: "Beach & Coast", icon: Waves, description: "Coastal experiences" },
    { href: "/categories/food", label: "Food Tours", icon: Utensils, description: "Culinary adventures" },
    { href: "/categories/historical", label: "Historical", icon: Building2, description: "Heritage sites" },
  ]

  const handleMouseEnter = (dropdown: string) => {
    if (!mobile) {
      setActiveDropdown(dropdown)
    }
  }

  const handleMouseLeave = () => {
    if (!mobile) {
      setActiveDropdown(null)
    }
  }

  const handleClick = (dropdown: string) => {
    if (mobile) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    }
  }

  if (mobile) {
    return (
      <nav className="space-y-2">
        {/* Explore */}
        <div>
          <button
            onClick={() => handleClick("explore")}
            className="flex items-center justify-between w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg"
          >
            <span className="font-medium">Explore</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${activeDropdown === "explore" ? "rotate-180" : ""}`}
            />
          </button>
          {activeDropdown === "explore" && (
            <div className="ml-4 mt-2 space-y-1">
              {exploreItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 rounded-lg"
                >
                  <item.icon className="h-4 w-4 text-blue-600" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Destinations */}
        <div>
          <button
            onClick={() => handleClick("destinations")}
            className="flex items-center justify-between w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg"
          >
            <span className="font-medium">Destinations</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${activeDropdown === "destinations" ? "rotate-180" : ""}`}
            />
          </button>
          {activeDropdown === "destinations" && (
            <div className="ml-4 mt-2 space-y-1">
              {destinationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 rounded-lg"
                >
                  <item.icon className="h-4 w-4 text-blue-600" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Categories */}
        <div>
          <button
            onClick={() => handleClick("categories")}
            className="flex items-center justify-between w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg"
          >
            <span className="font-medium">Categories</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${activeDropdown === "categories" ? "rotate-180" : ""}`}
            />
          </button>
          {activeDropdown === "categories" && (
            <div className="ml-4 mt-2 space-y-1">
              {categoryItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 rounded-lg"
                >
                  <item.icon className="h-4 w-4 text-blue-600" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    )
  }

  return (
    <nav className="flex items-center space-x-8">
      {/* Explore Dropdown */}
      <div className="relative" onMouseEnter={() => handleMouseEnter("explore")} onMouseLeave={handleMouseLeave}>
        <button className="flex items-center gap-1 font-medium hover:text-blue-600 transition-colors">
          Explore
          <ChevronDown className="h-4 w-4" />
        </button>
        {activeDropdown === "explore" && (
          <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border p-4 z-50">
            <div className="grid grid-cols-1 gap-2">
              {exploreItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <item.icon className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Destinations Dropdown */}
      <div className="relative" onMouseEnter={() => handleMouseEnter("destinations")} onMouseLeave={handleMouseLeave}>
        <button className="flex items-center gap-1 font-medium hover:text-blue-600 transition-colors">
          Destinations
          <ChevronDown className="h-4 w-4" />
        </button>
        {activeDropdown === "destinations" && (
          <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border p-4 z-50">
            <div className="grid grid-cols-2 gap-2">
              {destinationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <item.icon className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Categories Dropdown */}
      <div className="relative" onMouseEnter={() => handleMouseEnter("categories")} onMouseLeave={handleMouseLeave}>
        <button className="flex items-center gap-1 font-medium hover:text-blue-600 transition-colors">
          Categories
          <ChevronDown className="h-4 w-4" />
        </button>
        {activeDropdown === "categories" && (
          <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border p-4 z-50">
            <div className="grid grid-cols-2 gap-2">
              {categoryItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <item.icon className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
