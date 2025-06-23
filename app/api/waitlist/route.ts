import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Validation schema for waitlist submissions
const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  phone: z.string().optional(),
  interests: z.string().optional(),
  source: z.enum(["vooya-wallet", "general", "tour-packages"]).default("general"),
})

// In a real application, you would use a database
// For demo purposes, we'll simulate database operations
class WaitlistStorage {
  private static async getWaitlist(): Promise<any[]> {
    // In production, this would be a database query
    // For now, we'll return an empty array and log submissions
    return []
  }

  private static async addToWaitlist(data: any): Promise<void> {
    // In production, this would save to your database
    console.log("Adding to waitlist:", data)

    // Simulate database save
    const timestamp = new Date().toISOString()
    const entry = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
      createdAt: timestamp,
      status: "pending",
    }

    // In a real app, you would:
    // await db.waitlist.create({ data: entry })
    console.log("Waitlist entry created:", entry)
  }

  private static async emailExists(email: string): Promise<boolean> {
    // In production, check if email already exists in database
    // For demo, we'll always return false
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request data
    const validatedData = waitlistSchema.parse(body)

    // Check if email already exists
    const emailExists = await WaitlistStorage.emailExists(validatedData.email)
    if (emailExists) {
      return NextResponse.json(
        {
          success: false,
          message: "This email is already on our waitlist!",
        },
        { status: 409 },
      )
    }

    // Add to waitlist
    await WaitlistStorage.addToWaitlist(validatedData)

    // In production, you might want to:
    // 1. Send a welcome email
    // 2. Add to email marketing list
    // 3. Send notification to admin
    // 4. Track analytics event

    return NextResponse.json({
      success: true,
      message: "Successfully added to waitlist! We'll notify you when we launch.",
      data: {
        email: validatedData.email,
        position: Math.floor(Math.random() * 1000) + 1, // Simulated position
      },
    })
  } catch (error) {
    console.error("Waitlist submission error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid data provided",
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    // Get waitlist statistics (for admin dashboard)
    const waitlist = await WaitlistStorage.getWaitlist()

    return NextResponse.json({
      success: true,
      data: {
        total: waitlist.length,
        recent: waitlist.slice(-10), // Last 10 entries
      },
    })
  } catch (error) {
    console.error("Error fetching waitlist:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch waitlist data" }, { status: 500 })
  }
}
