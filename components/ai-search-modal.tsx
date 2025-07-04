"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Search, Loader2 } from "lucide-react"
import { AISearchResults } from "@/components/ai-search-results"

interface AISearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AISearchModal({ isOpen, onClose }: AISearchModalProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/ai-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      if (response.ok) {
        const data = await response.json()
        setResults(data)
      } else {
        console.error("Search failed:", response.statusText)
      }
    } catch (error) {
      console.error("Search failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setQuery("")
    setResults(null)
    setIsLoading(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600" />
            AI Travel Itinerary Generator
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Enter a location in Ghana (e.g., 'Aflao', 'Kumasi', 'Cape Coast')..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
                autoFocus
              />
            </div>
            <Button type="submit" disabled={isLoading || !query.trim()} className="bg-blue-600 hover:bg-blue-700">
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Generate Itinerary"}
            </Button>
          </form>

          {isLoading && (
            <div className="text-center py-8">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">Creating your personalized Ghana itinerary...</p>
            </div>
          )}

          {results && <AISearchResults results={results} />}

          {!results && !isLoading && (
            <div className="text-center py-8 text-gray-500">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <p className="text-lg font-medium mb-2">AI Itinerary Generator</p>
              <p className="text-sm mb-4">
                Enter any location in Ghana and I'll create a detailed travel itinerary for you!
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Aflao", "Kumasi", "Cape Coast", "Tamale", "Wa"].map((location) => (
                  <Button
                    key={location}
                    variant="outline"
                    size="sm"
                    onClick={() => setQuery(location)}
                    className="text-xs"
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
