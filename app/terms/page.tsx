import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  // Static effective date
  const effectiveDate = "January 1, 2025"

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/tukwan-logo.png" alt="Tukwan Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-2xl font-bold text-blue-600">Tukwan</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/vooya-wallet" className="font-medium">
                Vooya Wallet
              </Link>
              <Link href="/packages" className="font-medium">
                Tour Packages
              </Link>
              <Link href="/marketplace" className="font-medium">
                Marketplace
              </Link>
              <Link href="/become-partner" className="font-medium">
                Become a Partner
              </Link>
            </nav>
          </div>
          <div>
            <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl max-w-3xl mx-auto">Please read these terms carefully before using our services.</p>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Vooya Terms of Service</h2>
                <p className="text-gray-600 mb-6">
                  <strong>Effective Date:</strong> {effectiveDate}
                </p>

                <p className="mb-6">
                  Welcome to Vooya, your smart travel companion. By accessing or using our website, app, tours, wallet,
                  or any other services we provide, you agree to the following terms and conditions:
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">1. Acceptance of Terms</h3>
                    <p className="text-gray-700">
                      By using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If
                      you do not agree, you may not access or use Tukwan.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">2. Who Can Use Vooya</h3>
                    <p className="text-gray-700 mb-3">To use Vooya, you must be:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>At least 18 years old or have permission from a legal guardian.</li>
                      <li>Able to form a binding contract under applicable laws.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">3. Services We Provide</h3>
                    <p className="text-gray-700 mb-3">Tukwan offers:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Booking of tours and cultural experiences</li>
                      <li>Travel wallet with point-earning and redemption features</li>
                      <li>Vendor and guide connection platform</li>
                      <li>Travel content and local insights</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      We reserve the right to modify or discontinue services at any time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">4. Your Account</h3>
                    <p className="text-gray-700 mb-3">You are responsible for:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Keeping your account information accurate and secure</li>
                      <li>Maintaining the confidentiality of your login credentials</li>
                      <li>All activity under your account</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      We reserve the right to suspend or terminate accounts for violations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">5. Payment and Wallet Terms</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Payments can be made through our wallet or supported channels.</li>
                      <li>You may earn or redeem points based on our rewards system.</li>
                      <li>Points are not cash and cannot be transferred outside Vooya.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">6. Cancellations and Refunds</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Each tour or experience has specific cancellation rules.</li>
                      <li>Refunds may be available depending on the timing and reason for cancellation.</li>
                      <li>No-shows and late cancellations may result in forfeiture of payment.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">7. User Conduct</h3>
                    <p className="text-gray-700 mb-3">You agree not to:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Abuse or misuse the platform</li>
                      <li>Post illegal or offensive content</li>
                      <li>Harm other users or local communities</li>
                    </ul>
                    <p className="text-gray-700 mt-3">Violation of these rules may lead to account termination.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">8. Intellectual Property</h3>
                    <p className="text-gray-700">
                      All content, logos, and technology on Vooya are protected and owned by Tukwan, Inc. You may not
                      reproduce or distribute our material without permission.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">9. Limitation of Liability</h3>
                    <p className="text-gray-700 mb-3">Vooya is not liable for:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Injuries, losses, or damages during a tour or trip</li>
                      <li>Delays, cancellations, or disruptions caused by third parties</li>
                      <li>Misuse of your account by others</li>
                    </ul>
                    <p className="text-gray-700 mt-3">Use our services at your own risk.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">10. Changes to Terms</h3>
                    <p className="text-gray-700">
                      We may update these terms from time to time. Continued use of Vooya means you accept the new
                      terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">11. Contact Us</h3>
                    <p className="text-gray-700">
                      If you have questions about these terms, contact us at:
                      <br />
                      <a href="mailto:travel@tukwangh.com" className="text-blue-600 hover:underline">
                        travel@tukwangh.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <p className="text-gray-600 text-center">
                    By using Vooya, you acknowledge that you have read, understood, and agree to be bound by these Terms
                    of Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
