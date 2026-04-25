import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Lumynr',
  description: 'Lumynr Terms and Conditions of Membership',
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-3xl mx-auto prose prose-lg prose-navy">
          <p className="text-sm font-semibold text-primary-700 uppercase tracking-widest mb-2">
            LUMYNR
          </p>
          <p className="text-gray-500 italic mb-2">
            A Community for Black Women in Technology
          </p>

          <h1 className="text-4xl font-bold text-navy-900 mb-4">
            Terms and Conditions of Membership
          </h1>
          <p className="text-gray-500 mb-8">
            Effective Date: April 1, 2026 &nbsp;|&nbsp; Lumynr LLC
          </p>

          <p className="text-gray-600 leading-relaxed mb-12">
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your membership in
            Lumynr, a community operated by Lumynr LLC. By joining Lumynr, you agree to
            these terms in full. Please read them carefully.
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              1. Membership Eligibility
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lumynr is a community exclusively for Black women in information technology.
              Membership is open to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                Black women who are currently working in or studying information technology,
                computer science, or a related technical field
              </li>
              <li>Black women who are transitioning into a career in IT</li>
              <li>
                Black women who are committed to the values and mission of this community
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Lumynr LLC reserves the right to decline or revoke membership at its sole
              discretion if an applicant or member does not meet eligibility requirements or
              violates these Terms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              2. Membership Tiers &amp; Pricing
            </h2>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Spark Tier (Free)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Spark tier provides free access to the Lumynr community at a limited
              level. Spark members may access general community spaces, public
              announcements, and select resources as designated by Lumynr LLC. The following
              are explicitly excluded from Spark membership:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                Access to mentoring sessions, mentoring circles, or any mentoring
                programming of any kind
              </li>
              <li>
                Access to Constellation group coaching or Polaris executive programming
              </li>
              <li>Access to paid-tier community spaces</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Spark members who attempt to access mentoring spaces will encounter a
              restricted access screen. Mentoring access begins at the Nova tier and above.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Nova Tier</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nova membership is designed for students and early-career Black women in IT.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                Eligibility requires a valid .edu email address, verified annually
              </li>
              <li>
                Nova membership is capped at six (6) years, covering up to four years of
                undergraduate study and two years of graduate study
              </li>
              <li>
                Members will receive a 30-day advance notification before their Nova
                membership transitions to the Luminary tier
              </li>
              <li>
                Nova members have access to open drop-in mentoring sessions (see Section 5)
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              <strong>Annual Re-Verification:</strong> Nova members must re-verify their
              .edu email address each year. Failure to re-verify will result in automatic
              transition to Luminary at the prevailing rate.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Luminary Tier
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Luminary membership is open to all eligible members who do not qualify for
              Nova membership, as well as Nova members who have completed their Nova
              eligibility period.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                Luminary members have access to open drop-in mentoring sessions (see
                Section 5)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Constellation Tier
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Constellation membership provides access to structured group coaching
              facilitated by experienced coaches. Constellation is a goal-oriented,
              accountability-driven engagement &mdash; distinct from mentoring.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Polaris Tier
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Polaris is Lumynr&rsquo;s executive-level mastermind and 1:1 coaching
              program. Polaris operates on a quarterly cohort basis and is available by
              application only. Polaris members receive access to all lower-tier community
              benefits in addition to Polaris programming.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              3. Founding Member Rates &amp; Rate Lock Policy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Founding Member period is open to the first fifty (50) paid Nova or
              Luminary members who join Lumynr. Founding Member status is available on a
              first-come, first-served basis and closes automatically once fifty paid
              memberships have been confirmed, regardless of date.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founding Members are eligible for the following rate-locked pricing for a
              period of twelve (12) months from their individual join date:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                Nova Founding Members: $15.00 per month (standard rate: $20.00)
              </li>
              <li>
                Luminary Founding Members: $25.00 per month (standard rate: $30.00)
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4 mb-4">
              After the twelve (12) month Founding Member rate lock period, membership will
              automatically renew at the then-prevailing standard rate. Lumynr LLC will
              provide thirty (30) days advance written notice before the rate transition
              takes effect.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Important:</strong> The Founding Member rate lock applies exclusively
              to paid memberships. Joining as a Spark (free) member does not qualify a
              member for Founding Member status or rate lock eligibility. A paid Nova or
              Luminary subscription must be initiated to claim Founding Member status.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Continuous Membership Requirement
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Founding Member rate lock applies only during the twelve (12) month lock
              period and only for continuous, uninterrupted membership. If a Founding Member
              cancels their membership for any reason during the lock period and later
              rejoins, they forfeit their Founding Member rate permanently and will be
              required to rejoin at the prevailing standard rate at the time of their
              return.
            </p>
            <p className="text-gray-600 leading-relaxed">
              There are no exceptions to the continuous membership requirement for rate lock
              purposes, including but not limited to financial hardship pauses, voluntary
              cancellations, or administrative cancellations due to failed payments.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Nova Founding Member Graduation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              When a Nova Founding Member&rsquo;s membership transitions to the Luminary
              tier upon completion of their Nova eligibility period, their monthly rate will
              transition to the Luminary founding member rate of $25.00 per month for the
              remainder of their twelve (12) month founding period &mdash; provided their
              membership has been continuous throughout.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Non-Founding Nova Graduate Transition
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nova members who are not Founding Members and transition to the Luminary tier
              upon graduation will receive a 3-month discount transition period at 50% off
              the prevailing Luminary rate at the time of transition, after which the full
              prevailing Luminary rate will apply.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              4. Payment &amp; Billing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Current membership rates for each tier are published on the Lumynr website and
              community platform (&ldquo;Pricing Schedule&rdquo;). Lumynr LLC reserves the
              right to update the Pricing Schedule at any time, subject to the notice
              requirements below and the rate lock protections described in Section 3.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                Membership fees are billed on a monthly basis on the anniversary of your
                join date
              </li>
              <li>All fees are charged in U.S. dollars</li>
              <li>
                You authorize Lumynr LLC to charge your payment method on file for each
                billing cycle
              </li>
              <li>
                It is your responsibility to maintain a valid payment method. If a payment
                fails, your account may be paused or cancelled
              </li>
              <li>
                Lumynr LLC reserves the right to adjust membership rates for non-founding
                members with 30 days advance written notice
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              5. Mentoring Access &amp; Program Terms
            </h2>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Eligible Tiers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access to Lumynr mentoring programming is available to paid Nova and Luminary
              members only. Spark (free) tier members have no access to any mentoring
              sessions, spaces, or programming.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Mentoring Sessions
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nova and Luminary members may attend mentoring sessions facilitated by Lumynr
              mentors. Mentoring sessions are:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                Approximately 45 minutes in duration, conducted via video conference
              </li>
              <li>
                Open to all eligible paid members on a first-come, first-served basis, up
                to six (6) participants per session
              </li>
              <li>
                Organized around a topic selected by the facilitating mentor or in
                coordination with Lumynr LLC
              </li>
              <li>
                Advisory in nature, drawing on the professional experience of the
                facilitating mentor
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Mentoring sessions are a member benefit included in Nova and Luminary
              membership. Lumynr LLC does not guarantee availability of any specific number
              of sessions per month. Session schedules are published in the community
              platform and are subject to change.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Constellation Coaching
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Constellation tier members participate in structured group coaching cohorts.
              Coaching engagements are goal-directed and accountability-based, and are
              distinct from mentoring. Constellation coaching is not available to Nova or
              Luminary members as part of their base membership.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              6. Cancellation &amp; Refund Policy
            </h2>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Cancellation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You may cancel your membership at any time. Cancellations take effect at the
              end of the current billing period. You will retain access to the community
              through the end of the period for which you have already paid.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Refunds</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lumynr LLC does not offer refunds for partial billing periods. If you cancel
              mid-cycle, you will not be charged for the following period but will not
              receive a refund for the current period.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Founding Member Rate Impact:</strong> As noted in Section 3,
              cancellation during the twelve (12) month rate lock period permanently
              forfeits your Founding Member rate. This applies regardless of the reason for
              cancellation.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              7. Code of Conduct &amp; Community Standards
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lumynr is a professional community built on mutual respect, trust, and a
              shared commitment to the advancement of Black women in technology. All members
              are expected to uphold the following standards:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Treat all members with dignity and respect</li>
              <li>Engage in good faith in all community interactions</li>
              <li>
                Protect the confidentiality of information shared by other members within
                the community
              </li>
              <li>
                Refrain from harassment, discrimination, hate speech, or conduct that
                demeans or intimidates other members
              </li>
              <li>
                Refrain from unsolicited commercial promotion, advertising, or solicitation
                within the community &mdash; including posting, messaging, or otherwise
                broadcasting your own products, services, or business offerings to other
                members without prior written consent of Lumynr LLC. Members may discuss
                their professional work when directly relevant to a conversation or when
                asked by another member, but may not use the community as a marketing or
                sales channel
              </li>
              <li>
                Refrain from collecting, harvesting, or using contact information or
                personal details posted by other members for any purpose outside of the
                Lumynr community
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Lumynr LLC reserves the right to remove any member who violates these
              community standards, without refund. Founding member status and rate lock are
              forfeited upon termination for cause.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              8. Intellectual Property &amp; Member Content
            </h2>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Your Content
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You retain ownership of all content you post within the Lumynr community,
              including posts, comments, files, and resources. By posting content, you grant
              Lumynr LLC a non-exclusive, royalty-free license to display and distribute your
              content within the community platform for the purpose of operating the
              community.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Lumynr Content
            </h3>
            <p className="text-gray-600 leading-relaxed">
              All content created and published by Lumynr LLC &mdash; including curriculum,
              programming, Illuminate Book Club materials, and community resources &mdash;
              is the intellectual property of Lumynr LLC and may not be reproduced,
              distributed, or repurposed without written permission.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Respect for Others&rsquo; Content
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Members may not reproduce, redistribute, or repurpose content posted by other
              members outside of the Lumynr community without the explicit written consent
              of the original author.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              9. Data Privacy &amp; Use of Member Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lumynr LLC collects and uses member information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                To administer your membership and provide access to the community
              </li>
              <li>
                To communicate with you about your membership, community programming, and
                relevant opportunities
              </li>
              <li>
                To segment and personalize communications based on your professional profile
                and stated interests
              </li>
              <li>
                To track referrals and membership history, including Founding Member status
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4 mb-4">
              Lumynr LLC does not sell your personal information to third parties. Member
              data may be stored in third-party platforms used to operate the community and
              deliver communications, including but not limited to community platforms, email
              marketing tools, and data management systems.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              By joining Lumynr, you consent to the collection and use of your information
              as described above. You may request deletion of your data at any time by
              contacting Lumynr LLC directly.
            </p>

            <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
              Member-Posted Information
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lumynr LLC&rsquo;s data privacy obligations apply solely to information
              collected directly by Lumynr LLC through the membership signup process,
              billing, and platform administration. Lumynr LLC is not responsible for any
              personal information you voluntarily share within the community &mdash;
              including in posts, discussion threads, member profiles, or mentoring
              sessions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              By posting personal information within the Lumynr community, you acknowledge
              that such information may be visible to other members and that you do so at
              your own risk. Lumynr LLC strongly advises members to exercise discretion when
              sharing personal details in any community space.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Members are prohibited from collecting, recording, harvesting, or using
              personal information posted by other members for any purpose outside of normal
              community engagement. Violations of this prohibition are subject to immediate
              membership termination under Section 7.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              10. Referral Program
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lumynr members may participate in the Lumynr referral program by inviting
              eligible women to join the community. When a referred individual becomes a
              paying member, the referring member earns a one-time referral reward as
              follows:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                Nova tier referral: $20.00 &mdash; equivalent to one month of Nova
                membership
              </li>
              <li>
                Luminary tier referral: $30.00 &mdash; equivalent to one month of Luminary
                membership
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4 mb-4">
              Referral rewards are credited to the referring member&rsquo;s account within
              fifteen (15) days of the end of the month in which the referred
              member&rsquo;s first payment clears. Rewards are applied as a credit against
              the referring member&rsquo;s next billing cycle.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A referral is attributed to the referring member only if the new member
              identifies the referrer at the time of signup. Retroactive referral claims are
              not accepted. Referral rewards are non-transferable and have no cash value.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lumynr LLC reserves the right to modify, suspend, or discontinue the referral
              program at any time with thirty (30) days advance notice to members.
              Modifications to reward amounts apply to referrals made after the effective
              date of the change and do not affect rewards already earned.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              11. Modifications to These Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lumynr LLC reserves the right to update or modify these Terms at any time.
              Members will be notified of material changes with a minimum of 30 days advance
              notice. Continued membership following the effective date of any changes
              constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              12. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms and Conditions are governed by the laws of the State of North
              Carolina, without regard to its conflict of law provisions. Any disputes
              arising under these Terms shall be resolved in the courts of North Carolina.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">13. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              Questions about these Terms may be directed to Lumynr LLC at the contact
              information provided on the Lumynr community platform or website.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-gray-500 text-sm">
              Lumynr LLC &nbsp;|&nbsp; lumynr.com &nbsp;|&nbsp; Effective April 1, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
