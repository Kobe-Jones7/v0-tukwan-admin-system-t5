import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="container px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Tukwan Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using Tukwan's services, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tukwan provides travel booking services, tour packages, and marketplace services for authentic African
                travel experiences. Our platform connects travelers with local guides, accommodations, and cultural
                experiences throughout Ghana.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of Tukwan, you may be required to create an account. You are responsible for
                maintaining the confidentiality of your account information and for all activities that occur under your
                account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Booking and Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All bookings made through Tukwan are subject to availability and confirmation. Payment terms vary by
                service provider. Tukwan Wallet users may receive discounts on select services. Cancellation policies
                vary by tour package and service provider.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Tukwan Wallet</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tukwan Wallet is our digital payment solution that offers convenient payment options and exclusive
                discounts. Wallet terms and conditions apply separately and are available in your account settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. User Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users agree to use Tukwan services responsibly and in accordance with local laws and customs.
                Inappropriate behavior, harassment, or violation of local customs may result in service termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tukwan acts as an intermediary between travelers and service providers. While we strive to ensure
                quality experiences, Tukwan is not liable for the actions of third-party service providers, weather
                conditions, or other circumstances beyond our control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of Tukwan
                services, to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tukwan reserves the right to modify these terms at any time. Users will be notified of significant
                changes via email or platform notifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Email:{" "}
                  <a href="mailto:team@tukwan.app" className="text-blue-600 hover:underline">
                    team@tukwan.app
                  </a>
                  <br />
                  Phone:{" "}
                  <a href="tel:+233538132303" className="text-blue-600 hover:underline">
                    +233 538132303
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
