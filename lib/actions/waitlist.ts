"use server"

import { z } from "zod"

const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  phone: z.string().optional(),
  interests: z.string().optional(),
  source: z.string().default("general"),
})

export async function submitToWaitlist(formData: FormData) {
  try {
    const rawData = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      interests: formData.get("interests") as string,
      source: (formData.get("source") as string) || "general",
    }

    // Validate the data
    const validatedData = waitlistSchema.parse(rawData)

    // Make API call to our waitlist endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Failed to join waitlist",
      }
    }

    return {
      success: true,
      message: result.message,
      data: result.data,
    }
  } catch (error) {
    console.error("Server action error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your information and try again",
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
