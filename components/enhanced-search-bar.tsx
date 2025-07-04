"use client"
import { useState } from "react"
import { Search, Sparkles, MapPin, Calendar, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AISearchModal } from "@/components/ai-search-modal"

const popularSearches = [
  "Best beaches in Ghana",
  "Cultural tours in Kumasi",
  "Wildlife safari at Mole",
  "Historical sites in Cape Coast",
  "Adventure tours in Volta Region",
]

const quickFilters = [
  { icon: MapPin, label: "Destinations", count: "50+" },
  { icon: Calendar, label: "Day Tours", count: "25+" },
  { icon: Users, label: "Group Tours", count: "15+" },
]

export function EnhancedSearchBar() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false)

  return (
    <>
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Where do you want to go in Ghana?"
            onClick={() => setIsAIModalOpen(true)}
            className="pl-12 pr-20 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-full cursor-pointer"
            readOnly
          />
          <Button
            onClick={() => setIsAIModalOpen(true)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full px-4 py-2"
          >
            <Sparkles className="h-4 w-4 mr-1" />
            AI Search
          </Button>
        </div>
      </div>

      <AISearchModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
    </>
  )
}
