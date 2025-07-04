import { type NextRequest, NextResponse } from "next/server"
import { generateAISearchResult } from "@/lib/ai-search"

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()

    if (!query) {
      return NextResponse.json({ error: "Search query is required" }, { status: 400 })
    }

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const result = await generateAISearchResult(query)

    return NextResponse.json(result)
  } catch (error) {
    console.error("AI Search Error:", error)
    return NextResponse.json({ error: "Failed to generate AI search result" }, { status: 500 })
  }
}
