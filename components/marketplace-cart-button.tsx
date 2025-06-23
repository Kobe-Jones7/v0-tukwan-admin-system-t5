"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

interface MarketplaceCartButtonProps {
  productId?: string
  productName?: string
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
}

export function MarketplaceCartButton({
  productId,
  productName,
  className = "w-full",
  variant = "default",
  size = "default",
}: MarketplaceCartButtonProps) {
  return (
    <Link href="/cart">
      <Button className={`bg-blue-600 hover:bg-blue-700 ${className}`} variant={variant} size={size}>
        <ShoppingBag className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    </Link>
  )
}
