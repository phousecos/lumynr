import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Referral Program Terms | Lumynr',
  description:
    'Terms and conditions for the Lumynr referral program. Earn free months by inviting friends.',
}

export default function ReferralTermsPage() {
  return (
    <div className="bg-navy-900 min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Referral Program Terms & Conditions
            </h1>
            <p className="text-gray-400">
              Last Updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Quick Reference */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h2 className="text-xl font-bold text-navy-900 mb-6">Quick Reference</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Reward</p>
                  <p className="font-semibold text-navy-900">1 free month per qualified referral</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Annual Cap</p>
                  <p className="font-semibold text-navy-900">10 free months per calendar year</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Qualification Period</p>
                  <p className="font-semibold text-navy-900">30 days as paid member after trial</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Reward Timing</p>
                  <p className="font-semibold text-navy-900">Within 7 business days</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Who Can Refer</p>
                  <p className="font-semibold text-navy-900">Active members in good standing</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Who Qualifies</p>
                  <p className="font-semibold text-navy-900">New members only</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Program Overview</h2>
                <p className="leading-relaxed">
                  The Lumynr Referral Program ("Program") allows current Lumynr members to earn rewards
                  by referring new members to join. These Terms and Conditions govern your participation
                  in the Program.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Eligibility</h2>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">2.1 Referrer Eligibility</h3>
                <p className="mb-3 leading-relaxed">To participate as a referrer, you must:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Be an active Lumynr member in good standing</li>
                  <li>Have a current, paid membership (trial members may refer, but rewards are credited only after their trial converts to paid)</li>
                  <li>Not have any outstanding balance or payment issues on your account</li>
                </ul>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">2.2 Referred Member Eligibility</h3>
                <p className="mb-3 leading-relaxed">For a referral to qualify, the referred individual must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be a new member who has not previously held a Lumynr membership</li>
                  <li>Not have previously created an account using a different email address</li>
                  <li>Complete registration using your unique referral code or link</li>
                  <li>Meet all standard Lumynr membership eligibility requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">3. How the Program Works</h2>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">3.1 Your Referral Link</h3>
                <p className="mb-6 leading-relaxed">
                  As a Lumynr member, you will receive a unique referral code and link accessible through
                  your member dashboard. This link is personal to you and should not be transferred or sold.
                </p>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">3.2 Sharing Your Link</h3>
                <p className="mb-3 leading-relaxed">You may share your referral link through:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Personal emails and messages</li>
                  <li>Social media posts</li>
                  <li>Word of mouth</li>
                </ul>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">3.3 Referral Tracking</h3>
                <p className="leading-relaxed">
                  When someone clicks your referral link and creates a Lumynr account, that referral is
                  attributed to you. The referred individual must complete the full sign-up process using
                  your link for the referral to be tracked.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Qualifying Referrals</h2>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">4.1 Definition</h3>
                <p className="mb-3 leading-relaxed">A referral is considered "qualified" when ALL of the following conditions are met:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>The referred individual completes registration using your unique referral code or link</li>
                  <li>The referred individual completes their 30-day free trial</li>
                  <li>The referred individual's first payment of $25 is successfully processed</li>
                  <li>The referred individual maintains active, paid membership for at least 30 consecutive days after their first payment</li>
                  <li>The payment is not subject to chargeback, dispute, or refund</li>
                </ol>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">4.2 Qualification Timeline</h3>
                <p className="mb-3 leading-relaxed">For a typical referral:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Day 0:</strong> Referred member signs up (30-day free trial begins)</li>
                  <li><strong>Day 30:</strong> First payment charged ($25)</li>
                  <li><strong>Day 60:</strong> 30 days as paid member completed - <strong>Referral qualifies</strong></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Rewards</h2>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">5.1 Reward Structure</h3>
                <p className="mb-6 leading-relaxed">
                  For each qualified referral, you will receive <strong>one (1) free month</strong> of
                  Lumynr membership.
                </p>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">5.2 Annual Limit</h3>
                <p className="mb-6 leading-relaxed">
                  You may earn a maximum of <strong>10 free months per calendar year</strong> through the
                  referral program. The calendar year runs January 1 through December 31.
                </p>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">5.3 Reward Application</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Rewards are applied as a credit to your next billing cycle</li>
                  <li>If you have multiple rewards pending, they will be applied to consecutive billing cycles</li>
                  <li>Rewards are non-transferable and may not be redeemed for cash</li>
                </ul>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">5.4 Reward Timing</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rewards are credited to your account within 7 business days of a referral becoming qualified</li>
                  <li>You will receive an email notification when a reward is credited</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Conditions and Restrictions</h2>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">6.1 Referrer Account Status</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>If your account is canceled, suspended, or otherwise not in good standing at the time a reward would be credited, the reward is forfeited</li>
                  <li>If you cancel your membership, any uncredited rewards are forfeited</li>
                  <li>Rewards cannot be applied to past billing cycles</li>
                </ul>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">6.2 Prohibited Activities</h3>
                <p className="mb-3 leading-relaxed">
                  The following activities are strictly prohibited and may result in immediate disqualification
                  from the Program, forfeiture of all pending and earned rewards, and/or termination of your
                  Lumynr membership:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Self-referral:</strong> Creating fake or duplicate accounts to refer yourself</li>
                  <li><strong>Unauthorized incentives:</strong> Offering cash, gifts, or other incentives to individuals in exchange for using your referral link, beyond what Lumynr officially provides</li>
                  <li><strong>Spam or misrepresentation:</strong> Using deceptive, misleading, or spammy methods to promote your referral link</li>
                  <li><strong>Paid advertising:</strong> Using paid advertising (PPC, social ads, etc.) to promote your referral link without prior written approval from Lumynr</li>
                  <li><strong>Referral selling:</strong> Selling, trading, or transferring your referral code or link</li>
                  <li><strong>False claims:</strong> Making false or misleading claims about Lumynr or the referral program</li>
                  <li><strong>Bulk distribution:</strong> Mass distributing your referral link to individuals who have not consented to receive it</li>
                </ul>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">6.3 Investigation and Enforcement</h3>
                <p className="mb-3 leading-relaxed">
                  Lumynr reserves the right to investigate any suspected abuse of the Program. If we determine,
                  in our sole discretion, that you have violated these terms, we may:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Void pending referral rewards</li>
                  <li>Revoke previously credited rewards</li>
                  <li>Recover the value of improperly obtained rewards</li>
                  <li>Suspend or terminate your Lumynr membership</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Program Changes and Termination</h2>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">7.1 Modifications</h3>
                <p className="mb-6 leading-relaxed">
                  Lumynr reserves the right to modify, suspend, or terminate the Program or these Terms and
                  Conditions at any time, with or without notice. Changes will be communicated to members via
                  email and/or updates to this page.
                </p>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">7.2 Effect of Changes</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Referrals that have already qualified will be honored under the terms in effect at the time of qualification</li>
                  <li>Pending referrals (not yet qualified) may be subject to new terms</li>
                  <li>We will make reasonable efforts to honor rewards earned in good faith</li>
                </ul>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">7.3 Program Termination</h3>
                <p className="mb-3 leading-relaxed">If the Program is terminated:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rewards for already-qualified referrals will be honored</li>
                  <li>Pending referrals that have not yet qualified may not receive rewards</li>
                  <li>No rewards will be given for new referrals after termination</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Tax Responsibility</h2>
                <p className="leading-relaxed">
                  Referral rewards may be considered taxable income depending on your jurisdiction. You are
                  solely responsible for reporting and paying any applicable taxes on rewards received through
                  the Program. Lumynr does not provide tax advice; please consult a tax professional if you
                  have questions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">9. Privacy</h2>
                <p className="mb-3 leading-relaxed">By participating in the Program, you acknowledge that:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Your referral activity (number of referrals, rewards earned) is tracked by Lumynr</li>
                  <li>Referred individuals may see your name as their referrer</li>
                  <li>Lumynr will not share your personal information with referred individuals beyond your name</li>
                </ul>
                <p className="leading-relaxed">
                  For complete information about how we handle personal data, please review our{' '}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">10. Disputes</h2>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">10.1 Resolution</h3>
                <p className="mb-6 leading-relaxed">
                  If you have a dispute regarding referral tracking, qualification, or rewards, please contact
                  us at <a href="mailto:members@lumynr.com" className="text-primary hover:underline">members@lumynr.com</a>.
                  We will review the matter and respond within 10 business days.
                </p>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">10.2 Final Decision</h3>
                <p className="leading-relaxed">
                  Lumynr's determination regarding referral qualification, reward eligibility, and compliance
                  with these Terms is final and binding.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">11. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  Lumynr's total liability for any claims arising from the Program is limited to the value of
                  rewards you would have received absent the issue giving rise to the claim. Lumynr is not
                  liable for any indirect, incidental, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">12. General Terms</h2>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">12.1 Entire Agreement</h3>
                <p className="mb-6 leading-relaxed">
                  These Terms and Conditions, together with the Lumynr{' '}
                  <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and{' '}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>,
                  constitute the entire agreement between you and Lumynr regarding the Program.
                </p>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">12.2 Severability</h3>
                <p className="mb-6 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will
                  continue in full force and effect.
                </p>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">12.3 No Waiver</h3>
                <p className="mb-6 leading-relaxed">
                  Failure by Lumynr to enforce any provision of these Terms does not constitute a waiver of
                  that provision.
                </p>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">12.4 Assignment</h3>
                <p className="leading-relaxed">
                  You may not assign or transfer your rights or obligations under these Terms. Lumynr may
                  assign its rights and obligations without restriction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">13. Contact</h2>
                <p className="mb-2 leading-relaxed">For questions about the Referral Program, please contact:</p>
                <p className="leading-relaxed">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:members@lumynr.com" className="text-primary hover:underline">members@lumynr.com</a>
                </p>
              </section>

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <p className="text-gray-600 text-sm">
                  By participating in the Lumynr Referral Program, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
