import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNavigation } from "@/components/main-navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-bold text-blue-600">Tukwan</span>
          </Link>
        </div>

        <div className="hidden md:flex">
          <MainNavigation />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/vooya-wallet">
            <Button variant="outline" className="hidden md:flex bg-transparent">
              Vooya Wallet
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-4">
                <Link href="/" className="flex items-center gap-2 px-2">
                  <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={30} height={30} className="w-8 h-8" />
                  <span className="text-xl font-bold text-blue-600">Tukwan</span>
                </Link>
                <div className="grid gap-2">
                  <Link href="/packages">
                    <Button variant="ghost" className="w-full justify-start">
                      Tour Packages
                    </Button>
                  </Link>
                  <Link href="/attractions">
                    <Button variant="ghost" className="w-full justify-start">
                      Attractions
                    </Button>
                  </Link>
                  <Link href="/marketplace">
                    <Button variant="ghost" className="w-full justify-start">
                      Marketplace
                    </Button>
                  </Link>
                  <Link href="/vooya-wallet">
                    <Button variant="ghost" className="w-full justify-start">
                      Vooya Wallet
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
