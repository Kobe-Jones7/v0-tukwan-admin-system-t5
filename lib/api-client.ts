// Simple API client for frontend-only deployment
// Uses mock data and localStorage for persistence

// Mock delay to simulate network requests
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Get data from localStorage or return default
const getStoredData = (key: string, defaultValue: any) => {
  if (typeof window === "undefined") return defaultValue

  try {
    const stored = localStorage.getItem(`tukwan_${key}`)
    return stored ? JSON.parse(stored) : defaultValue
  } catch (error) {
    console.error(`Error retrieving ${key} from storage:`, error)
    return defaultValue
  }
}

// Save data to localStorage
const saveData = (key: string, data: any) => {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(`tukwan_${key}`, JSON.stringify(data))
  } catch (error) {
    console.error(`Error saving ${key} to storage:`, error)
  }
}

// API client with methods that work without a backend
export const apiClient = {
  // Auth methods
  async login(email: string, password: string) {
    await delay(800) // Simulate network delay

    if (email === "demo@tukwan.com" && password === "password") {
      const user = {
        id: "user-1",
        name: "Demo User",
        email: "demo@tukwan.com",
        role: "user",
      }
      saveData("user", user)
      return { success: true, data: user }
    }

    throw new Error("Invalid credentials")
  },

  async register(userData: any) {
    await delay(1000) // Simulate network delay

    const newUser = {
      id: `user-${Date.now()}`,
      name: userData.name,
      email: userData.email,
      role: userData.user_type || "user",
    }

    saveData("user", newUser)
    return { success: true, data: newUser }
  },

  async logout() {
    await delay(500) // Simulate network delay
    localStorage.removeItem("tukwan_user")
    return { success: true }
  },

  // Bookings methods
  async getBookings() {
    await delay(800)
    return { success: true, data: getStoredData("bookings", []) }
  },

  async createBooking(bookingData: any) {
    await delay(1000)

    const bookings = getStoredData("bookings", [])
    const newBooking = {
      id: `booking-${Date.now()}`,
      status: "confirmed",
      createdAt: new Date().toISOString(),
      ...bookingData,
    }

    bookings.push(newBooking)
    saveData("bookings", bookings)

    return { success: true, data: newBooking }
  },

  // Wishlist methods
  async getWishlist() {
    await delay(600)
    return { success: true, data: getStoredData("wishlist", []) }
  },

  async addToWishlist(itemId: string, itemType: string) {
    await delay(500)

    const wishlist = getStoredData("wishlist", [])
    const newItem = {
      id: `wishlist-${Date.now()}`,
      itemId,
      itemType,
      addedAt: new Date().toISOString(),
    }

    wishlist.push(newItem)
    saveData("wishlist", wishlist)

    return { success: true, data: newItem }
  },

  async removeFromWishlist(itemId: string) {
    await delay(500)

    const wishlist = getStoredData("wishlist", [])
    const updatedWishlist = wishlist.filter((item: any) => item.itemId !== itemId)

    saveData("wishlist", updatedWishlist)

    return { success: true }
  },

  // Health check
  async healthCheck() {
    await delay(300)
    return { success: true, message: "Frontend-only mode active" }
  },
}

export default apiClient
