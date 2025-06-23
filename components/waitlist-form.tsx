"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check, Loader2, AlertCircle } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { submitWaitlistEntry } from "@/lib/api/waitlist"

interface WaitlistFormProps {
  source?: string
  buttonText?: string
  className?: string
}

export function WaitlistForm({
  source = "vooya-wallet",
  buttonText = "Join the Waitlist",
  className,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setError("")

    try {
      const result = await submitWaitlistEntry({
        email,
        source,
      })

      if (result.success) {
        setIsSuccess(true)
        setWaitlistPosition(result.data?.position || null)
        setEmail("")

        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSuccess(false)
          setIsOpen(false)
          setWaitlistPosition(null)
        }, 5000)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button className={`bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg ${className}`}>
          {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center p-2">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Welcome to the Waitlist!</h3>
            <p className="text-center text-gray-500 mb-2">You've been successfully added to our waitlist.</p>
            {waitlistPosition && (
              <p className="text-center text-sm text-blue-600 font-medium">You're #{waitlistPosition} on the list!</p>
            )}
            <p className="text-center text-xs text-gray-400 mt-2">We'll notify you when Vooya Wallet launches.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Join the Vooya Wallet Waitlist</h3>
              <p className="text-sm text-gray-500">
                Be the first to know when we launch and get exclusive early access benefits.
              </p>
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-2 rounded-md">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
                disabled={isSubmitting}
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting || !email}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </div>
          </form>
        )}
      </PopoverContent>
    </Popover>
  )
}
