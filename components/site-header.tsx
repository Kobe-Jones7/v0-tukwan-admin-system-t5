"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNavigation } from "@/components/main-navigation"
import { EnhancedSearchBar } from "@/components/enhanced-search-bar"
import { Menu, X, Wallet } from "lucide-react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-bold text-blue-600">Tukwan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <MainNavigation />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <EnhancedSearchBar />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Vooya Wallet Button */}
            <Link href="/vooya-wallet">
              <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2 bg-transparent">
                <Wallet className="h-4 w-4" />
                Vooya Wallet
              </Button>
            </Link>

            {/* Sign In Button */}
            <Link href="/sign-in">
              <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden py-3 border-t">
          <EnhancedSearchBar />
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="py-4 space-y-4">
              <MainNavigation mobile />
              <div className="pt-4 border-t">
                <Link href="/vooya-wallet" className="block">
                  <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                    <Wallet className="h-4 w-4" />
                    Vooya Wallet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
