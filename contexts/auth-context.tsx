"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define types
type User = {
  id: string
  name: string
  email: string
  role: string
} | null

type AuthContextType = {
  user: User
  isLoading: boolean
  isAuthenticated: boolean
  isBackendAvailable: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (userData: any) => Promise<void>
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  isBackendAvailable: false,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
})

// Mock user for frontend-only deployment
const MOCK_USER = {
  id: "user-1",
  name: "Demo User",
  email: "demo@tukwan.com",
  role: "user",
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)

  // For frontend-only deployment, we'll set this to false
  const isBackendAvailable = false

  useEffect(() => {
    // Simulate checking for stored auth
    const checkAuth = async () => {
      try {
        // For frontend-only deployment, check localStorage
        const storedUser = localStorage.getItem("tukwan_user")

        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Auth check error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      // For frontend-only deployment, use mock data
      if (email === "demo@tukwan.com" && password === "password") {
        setUser(MOCK_USER)
        localStorage.setItem("tukwan_user", JSON.stringify(MOCK_USER))
        return
      }

      throw new Error("Invalid credentials")
    } catch (error: any) {
      throw new Error(error.message || "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)

    try {
      // For frontend-only deployment, just clear localStorage
      localStorage.removeItem("tukwan_user")
      setUser(null)
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: any) => {
    setIsLoading(true)

    try {
      // For frontend-only deployment, create a mock user
      const newUser = {
        id: `user-${Date.now()}`,
        name: userData.name,
        email: userData.email,
        role: userData.user_type || "user",
      }

      setUser(newUser)
      localStorage.setItem("tukwan_user", JSON.stringify(newUser))
    } catch (error: any) {
      throw new Error(error.message || "Registration failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        isBackendAvailable,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
