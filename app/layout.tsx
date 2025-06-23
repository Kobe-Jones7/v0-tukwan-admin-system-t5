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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
