import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Lumynr',
  description: 'Lumynr Privacy Policy - How we collect, use, and protect your information',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-3xl mx-auto prose prose-lg prose-navy">
          <h1 className="text-4xl font-bold text-navy-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lumynr ("we," "us," or "our") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our website (lumynr.com) and
              membership services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Information You Provide
            </h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Name and email address</li>
              <li>Professional information (LinkedIn profile, career stage)</li>
              <li>Self-identification information</li>
              <li>Payment information (processed securely by Stripe)</li>
              <li>
                Any additional information you choose to share in your invitation
                request
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Information Collected Automatically
            </h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Usage data (pages visited, features used)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Process your invitation request and membership</li>
              <li>Provide access to Lumynr services and content</li>
              <li>Process payments and manage your subscription</li>
              <li>Communicate with you about your membership</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              4. Information Sharing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information
              with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third parties that help us operate
                our services (payment processing, email delivery, hosting)
              </li>
              <li>
                <strong>Community Platform:</strong> Our third-party membership
                platform provider to enable your community access
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information. Payment information is processed
              securely by Stripe and is never stored on our servers. However, no
              method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict certain processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise these rights, contact us at{' '}
              <a
                href="mailto:members@lumynr.com"
                className="text-primary hover:underline"
              >
                members@lumynr.com
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar technologies to enhance your experience,
              analyze usage, and assist in our marketing efforts. You can control
              cookies through your browser settings, but disabling cookies may affect
              the functionality of our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              8. Third-Party Links
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our services may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lumynr is not intended for individuals under 18 years of age. We do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              10. Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information for as long as necessary to provide
              our services and fulfill the purposes described in this policy. When you
              cancel your membership, we will retain certain information as required
              by law or for legitimate business purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              11. Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you
              of any material changes by email or by posting a notice on our website.
              Your continued use of our services after such changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Lumynr</strong>
              <br />
              Email:{' '}
              <a
                href="mailto:members@lumynr.com"
                className="text-primary hover:underline"
              >
                members@lumynr.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
