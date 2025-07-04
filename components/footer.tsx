import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/tukwan-logo.png" alt="Tukwan" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold">Tukwan</span>
            </div>
            <p className="text-gray-300 text-sm">
              Discover the beauty and rich culture of Ghana with our expertly crafted tours and authentic experiences.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tour-packages" className="text-gray-300 hover:text-white transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="text-gray-300 hover:text-white transition-colors">
                  Attractions
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-gray-300 hover:text-white transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/discover-ghana" className="text-gray-300 hover:text-white transition-colors">
                  Discover Ghana
                </Link>
              </li>
              <li>
                <Link href="/become-partner" className="text-gray-300 hover:text-white transition-colors">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Tour Planning
                </Link>
              </li>
              <li>
                <Link href="/custom-tour-request" className="text-gray-300 hover:text-white transition-colors">
                  Custom Tours
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Travel Dashboard
                </Link>
              </li>
              <li>
                <Link href="/vooya-wallet" className="text-gray-300 hover:text-white transition-colors">
                  Tukwan Wallet
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="space-y-3 text-sm pt-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">team@tukwan.app</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+233 538132303</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-300">
                  Accra, Ghana
                  <br />
                  West Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2025 Tukwan. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
