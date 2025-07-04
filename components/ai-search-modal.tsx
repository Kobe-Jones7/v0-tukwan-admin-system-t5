"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Search, Loader2 } from "lucide-react"
import { AISearchResults } from "./ai-search-results"
import type { AISearchResult } from "@/lib/ai-search"

interface AISearchModalProps {
  isOpen: boolean
  onClose: () => void
  initialQuery?: string
}

export function AISearchModal({ isOpen, onClose, initialQuery = "" }: AISearchModalProps) {
  const [query, setQuery] = useState(initialQuery)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<AISearchResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async () => {
    if (!query.trim()) return

    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch("/api/ai-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query.trim() }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate AI search result")
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError("Failed to generate AI search result. Please try again.")
      console.error("AI Search Error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setQuery("")
    setResult(null)
    setError(null)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600" />
            AI-Powered Tour Search
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {!result && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Search for any location in Ghana..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSearch}
                  disabled={isLoading || !query.trim()}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                  {isLoading ? "Generating..." : "AI Search"}
                </Button>
              </div>

              {isLoading && (
                <div className="text-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
                  <p className="text-muted-foreground">AI is creating your custom tour package for '{query}'...</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Analyzing location factors and generating real-time pricing...
                  </p>
                </div>
              )}

              {error && (
                <div className="text-center py-4">
                  <p className="text-red-600">{error}</p>
                  <Button variant="outline" onClick={handleSearch} className="mt-2 bg-transparent">
                    Try Again
                  </Button>
                </div>
              )}
            </div>
          )}

          {result && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Button variant="outline" onClick={() => setResult(null)} size="sm">
                  ← New Search
                </Button>
                <Button variant="outline" onClick={handleClose} size="sm">
                  Close
                </Button>
              </div>
              <AISearchResults result={result} />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
