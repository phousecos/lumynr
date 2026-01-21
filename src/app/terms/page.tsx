import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Lumynr',
  description: 'Lumynr Terms of Service and Membership Agreement',
}

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-3xl mx-auto prose prose-lg prose-navy">
          <h1 className="text-4xl font-bold text-navy-900 mb-8">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Lumynr's services, including our website
              (lumynr.com) and membership platform, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use
              our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              2. Membership Eligibility
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lumynr is an invitation-only community specifically designed for Black
              women working in or transitioning into Information Technology (IT)
              careers. By requesting an invitation and completing membership, you
              confirm that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You identify as a Black woman</li>
              <li>
                You are working in, transitioning into, or exploring careers in IT
              </li>
              <li>You are at least 18 years of age</li>
              <li>
                You have provided accurate information in your invitation request
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              3. Membership and Billing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lumynr membership is billed monthly at $9.95 per month. Founding members
              may receive promotional offers including free trial periods. Your
              subscription will automatically renew each month unless canceled.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              You may cancel your membership at any time. Cancellation will take
              effect at the end of your current billing period. No refunds are
              provided for partial months.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Payment processing is handled by Stripe. By providing payment
              information, you authorize Lumynr to charge your payment method for all
              fees associated with your membership.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              4. Community Guidelines
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              As a member of Lumynr, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Treat all members with respect and dignity</li>
              <li>Maintain confidentiality of discussions within the community</li>
              <li>
                Not share, sell, or distribute member content without permission
              </li>
              <li>Not engage in harassment, discrimination, or harmful behavior</li>
              <li>
                Not use the platform for commercial solicitation without approval
              </li>
              <li>
                Respect intellectual property rights of Lumynr and other members
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Violation of these guidelines may result in immediate termination of
              your membership without refund.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content provided through Lumynr, including learning paths, webinar
              recordings, written materials, and community discussions, is the
              intellectual property of Lumynr or its content creators. Members may not
              reproduce, distribute, or create derivative works from this content
              without explicit written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              6. Referral Program
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Members may earn free months through our referral program by inviting
              friends who become paying members. Referral credits are applied as
              account credits and are not redeemable for cash. Lumynr reserves the
              right to modify or terminate the referral program at any time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lumynr provides educational and community resources for career
              development. We do not guarantee specific career outcomes, job
              placements, or salary increases. Members are responsible for their own
              career decisions. Lumynr's liability is limited to the amount paid for
              membership in the preceding 12 months.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              8. Modifications to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lumynr reserves the right to modify these Terms of Service at any time.
              Members will be notified of significant changes via email. Continued use
              of the service after changes constitutes acceptance of the modified
              terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              9. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lumynr may terminate or suspend your membership at any time for
              violation of these terms, community guidelines, or for any other reason
              at our sole discretion. You may terminate your membership at any time by
              canceling your subscription.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these Terms of Service, please contact us at{' '}
              <a
                href="mailto:members@lumynr.com"
                className="text-primary hover:underline"
              >
                members@lumynr.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
