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
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-500" />
            AI-Powered Travel Search
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Ask me anything about Ghana travel... (e.g., 'Best beaches near Accra' or 'Cultural tours in Kumasi')"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            </Button>
          </form>

          {results && <AISearchResults results={results} />}

          {!results && !isLoading && (
            <div className="text-center py-8 text-gray-500">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-purple-300" />
              <p className="text-lg font-medium mb-2">Discover Ghana with AI</p>
              <p className="text-sm">
                Ask me about destinations, activities, cultural experiences, or anything about traveling in Ghana!
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
