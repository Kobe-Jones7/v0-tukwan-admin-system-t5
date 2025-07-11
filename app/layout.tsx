import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tukwan - Discover Africa's Hidden Gems",
  description: "Experience authentic African culture, tours, and marketplace",
  generator: "v0.dev",
  icons: {
    icon: "/images/tukwan-logo.png",
    shortcut: "/images/tukwan-logo.png",
    apple: "/images/tukwan-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        cssLayerName: 'clerk',
      }}
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
