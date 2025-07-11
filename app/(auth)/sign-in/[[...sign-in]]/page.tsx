"use client"

import { SignIn } from "@clerk/nextjs"
import type React from "react"
import Link from "next/link"

export default function SignInPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 flex flex-col items-center justify-center">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <img className="mx-auto h-12 w-auto" src="/images/tukwan-logo.png" alt="Tukwan" />
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome to Tukwan</h2>
          <p className="mt-2 text-sm text-gray-600">Your gateway to authentic Ghanaian experiences</p>
        </div>

        <SignIn />

        <div className="text-center">
          <p className="text-sm text-gray-600">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="font-medium text-blue-600 hover:text-blue-500">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-medium text-blue-600 hover:text-blue-500">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
