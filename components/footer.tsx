import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export function Footer() {
  return (
    <>
      {/* TEST BANNER */}
      <div className="bg-red-500 text-white text-center p-2 font-bold">
        FOOTER IS WORKING
      </div>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/tukwan-logo.png"
                  alt="Tukwan"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold">Tukwan</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Discover the beauty and rich culture of Ghana with our expertly
                crafted tours and authentic experiences.
              </p>
              <div className="flex space-x-4 pt-2">
                <Link href="#" className="hover:text-white text-gray-400">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white text-gray-400">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white text-gray-400">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-white text-gray-400">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tour-packages" className="text-gray-300 hover:text-white">
                    Tour Packages
                  </Link>
                </li>
                <li>
                  <Link href="/attractions" className="text-gray-300 hover:text-white">
                    Attractions
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="text-gray-300 hover:text-white">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/discover-ghana" className="text-gray-300 hover:text-white">
                    Discover Ghana
                  </Link>
                </li>
                <li>
                  <Link href="/become-partner" className="text-gray-300 hover:text-white">
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
                  <Link href="/services" className="text-gray-300 hover:text-white">
                    Tour Planning
                  </Link>
                </li>
                <li>
                  <Link href="/custom-tour-request" className="text-gray-300 hover:text-white">
                    Custom Tours
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-gray-300 hover:text-white">
                    Travel Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/vooya-wallet" className="text-gray-300 hover:text-white">
                    Tukwan Wallet
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/help" className="text-gray-300 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>

              <div className="space-y-3 text-sm pt-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>team@tukwan.app</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>+233 538132303</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                  <span>
                    Accra, Ghana
                    <br />
                    West Africa
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <div>© 2025 Tukwan. All rights reserved.</div>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                <Link href="/faq" className="hover:text-white">FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
