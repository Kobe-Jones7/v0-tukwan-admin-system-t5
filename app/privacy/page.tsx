import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Privacy Policy</h1>

            <div className="prose prose-blue max-w-none">
              <p>Last updated: May 23, 2024</p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to Tukwan ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you
                have a positive experience on our website and while using our services. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you visit our website or use our
                services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We collect information in the following ways:</p>
              <ul>
                <li>
                  <strong>Information you provide to us:</strong> We collect information you provide when you create an
                  account, make a booking, purchase products, contact customer support, or otherwise communicate with
                  us. This may include your name, email address, phone number, payment information, and travel
                  preferences.
                </li>
                <li>
                  <strong>Information collected automatically:</strong> When you use our services, we automatically
                  collect certain information about your device and how you interact with our website, including IP
                  address, browser type, pages visited, and time spent on those pages.
                </li>
                <li>
                  <strong>Information from third parties:</strong> We may receive information about you from our
                  business partners, such as travel agencies, payment processors, and social media platforms if you
                  choose to link your social media accounts with our services.
                </li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize your experience and deliver content relevant to your interests</li>
              </ul>

              <h2>4. Sharing of Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>
                  <strong>Service providers:</strong> We share information with third-party vendors, consultants, and
                  other service providers who perform services on our behalf.
                </li>
                <li>
                  <strong>Business partners:</strong> We may share information with our business partners to offer you
                  certain products, services, or promotions.
                </li>
                <li>
                  <strong>Legal requirements:</strong> We may disclose information if required to do so by law or in
                  response to valid requests by public authorities.
                </li>
              </ul>

              <h2>5. Your Rights and Choices</h2>
              <p>
                You have certain rights regarding your personal information, including the right to access, correct, or
                delete the personal information we have about you. You can also object to the processing of your
                personal information or request that we restrict how we use your personal information.
              </p>

              <h2>6. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>

              <h2>7. International Data Transfers</h2>
              <p>
                Your information may be transferred to, and processed in, countries other than the country in which you
                are resident. These countries may have data protection laws that are different from the laws of your
                country.
              </p>

              <h2>8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2>9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>
                Email: privacy@tukwan.com
                <br />
                Address: 123 Tourism Street, Accra, Ghana
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
