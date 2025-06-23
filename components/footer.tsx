import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full p-1">
                <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={30} height={30} />
              </div>
              <span className="text-2xl font-bold text-white">Tukwan</span>
            </Link>
            <p className="text-gray-400">
              Discover authentic African experiences, accommodations, and artisan products all in one place.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com/tukwangh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com/tukwangh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com/tukwangh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/vooya-wallet" className="text-gray-400 hover:text-white">
                  Vooya Wallet
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-400 hover:text-white">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-gray-400 hover:text-white">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/discover-ghana" className="text-gray-400 hover:text-white">
                  Discover Ghana
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Join our waitlist</h3>
            <p className="text-gray-400 mb-4">
              Join our waitlist and receive 10% of your first booking and 100points on Vooya Wallet
            </p>
            <div className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/waitlist">Join Waitlist</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tukwan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
