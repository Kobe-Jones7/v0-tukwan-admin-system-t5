import { ClerkProvider } from '@clerk/nextjs'
import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { MapProvider } from '@/providers/map'
import ModalProvider from '@/providers/modal'

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
        elements: {
          footer: "hidden",
        },
      }}
    >
      <html lang="en">
        <body>
          <ModalProvider>
            <MapProvider>
              {children}
            </MapProvider>
          </ModalProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
