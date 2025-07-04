"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles } from "lucide-react"
import { AISearchModal } from "./ai-search-modal"

interface EnhancedSearchBarProps {
  placeholder?: string
  onRegularSearch?: (query: string) => void
  className?: string
}

export function EnhancedSearchBar({
  placeholder = "Search destinations, attractions, or any place in Ghana...",
  onRegularSearch,
  className = "",
}: EnhancedSearchBarProps) {
  const [query, setQuery] = useState("")
  const [showAIModal, setShowAIModal] = useState(false)

  const handleRegularSearch = () => {
    if (query.trim() && onRegularSearch) {
      onRegularSearch(query.trim())
    }
  }

  const handleAISearch = () => {
    setShowAIModal(true)
  }

  return (
    <>
      <div className={`flex gap-2 ${className}`}>
        <div className="flex-1 relative">
          <Input
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleRegularSearch()}
            className="pr-10"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        {onRegularSearch && (
          <Button onClick={handleRegularSearch} disabled={!query.trim()} className="bg-blue-600 hover:bg-blue-700">
            Search
          </Button>
        )}

        <Button
          onClick={handleAISearch}
          variant="outline"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white border-none hover:from-purple-600 hover:to-blue-700"
        >
          <Sparkles className="h-4 w-4" />
          AI Search
        </Button>
      </div>

      <AISearchModal isOpen={showAIModal} onClose={() => setShowAIModal(false)} initialQuery={query} />
    </>
  )
}
