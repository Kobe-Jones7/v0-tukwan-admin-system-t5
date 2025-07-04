"use client"

import type React from "react"

import { useState } from "react"
import { Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AISearchModal } from "@/components/ai-search-modal"

export function EnhancedSearchBar() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Redirect to search page with query
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <>
      <div className="relative w-full">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search destinations, tours, or experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4"
            />
          </div>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Search
          </Button>
        </form>

        {/* AI Search Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAIModalOpen(true)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-3 text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 hover:from-purple-600 hover:to-blue-600"
        >
          <Sparkles className="h-3 w-3 mr-1" />
          AI Search
        </Button>
      </div>

      <AISearchModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
    </>
  )
}
