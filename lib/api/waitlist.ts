interface WaitlistSubmission {
  email: string
  name?: string
  phone?: string
  interests?: string
  source?: string
}

interface ApiResponse<T> {
  success: boolean
  message: string
  data?: T
  errors?: any[]
}

export async function submitWaitlistEntry(data: WaitlistSubmission): Promise<ApiResponse<any>> {
  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.error("API call failed:", error)
    return {
      success: false,
      message: "Network error. Please check your connection and try again.",
    }
  }
}

export async function getWaitlistStats(): Promise<ApiResponse<any>> {
  try {
    const response = await fetch("/api/waitlist", {
      method: "GET",
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.error("API call failed:", error)
    return {
      success: false,
      message: "Failed to fetch waitlist statistics",
    }
  }
}
