import { type NextRequest, NextResponse } from "next/server"
import { generateAISearchResults } from "@/lib/ai-search"

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()

    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "Query is required and must be a string" }, { status: 400 })
    }

    const results = await generateAISearchResults(query)

    return NextResponse.json(results)
  } catch (error) {
    console.error("AI Search API Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
