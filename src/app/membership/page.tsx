'use client'

import { useState } from 'react'
import { Clock, ArrowRight, Users, Award } from 'lucide-react'

// Founding member deadline — hide the banner after this date
const FOUNDING_DEADLINE = '2026-06-15'

function CheckIcon() {
  return <span className="text-primary mt-0.5 shrink-0">&#10003;</span>
}

export default function MembershipPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const showFoundingBanner = new Date().toISOString().slice(0, 10) <= FOUNDING_DEADLINE

  const novaPrice = isAnnual ? 12 : 15
  const luminaryPrice = isAnnual ? 20 : 25

  return (
    <div className="bg-navy-900 min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-400 font-semibold tracking-widest uppercase text-sm mb-4">
              Membership
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find your place in Lumynr
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              A private community built exclusively for Black women in technology.
            </p>
          </div>

          {/* Founding Member Deadline Banner */}
          {showFoundingBanner && (
            <div className="flex justify-center mt-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-500/40 bg-primary-500/10 text-primary-400 font-medium text-sm">
                <Clock className="w-4 h-4" />
                Founding Member rate locks on June 15, 2026 &mdash; paid plans only
              </div>
            </div>
          )}

          {/* Monthly / Annual Toggle */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-navy-900 ${
                isAnnual ? 'bg-primary-500' : 'bg-navy-600'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual
            </span>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">

            {/* ── Spark Card (Free) ── */}
            <div className="bg-navy-900 rounded-3xl p-8 border border-navy-700 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-2">Spark</h3>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">Free</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Explore the community. No commitment, no card needed.
              </p>

              <p className="text-gray-400 text-sm font-medium mb-4">Includes:</p>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  The Network &mdash; general community space
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Connect with Black women in IT
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Be Transformidable &mdash; content + podcast archive
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Upgrade to paid tier anytime
                </li>
              </ul>

              <a
                href="https://community.lumynr.com/join?invitation_token=a00999077ea94592e5a69473164856058946c93f-7d2229cd-30ed-403b-a1fa-4fcdefc49a7e"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base py-4 w-full justify-center"
              >
                Join Now
              </a>
            </div>

            {/* ── Nova Card ── */}
            <div className="bg-navy-900 rounded-3xl p-8 border border-navy-700 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-2">Nova</h3>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">${novaPrice}</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  17% Discount for Annual Payment ($149)
                </p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                For students and early-career Black women in IT. Requires .edu email.
              </p>

              <p className="text-gray-400 text-sm font-medium mb-4">Includes:</p>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Everything in Spark
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Illuminate Book Club &mdash; monthly live sessions
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Ask a Leader Forum
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Students Community Space
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Prept &mdash; AI interview prep, basic access
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Resource Library &mdash; foundational toolkit
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Mentoring circles
                </li>
              </ul>

              <a
                href="https://community.lumynr.com/checkout/nova-membership-tier-founder"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-4 w-full justify-center"
              >
                Join Now
              </a>
            </div>

            {/* ── Luminary Card (Most Popular) ── */}
            <div className="bg-navy-900 rounded-3xl p-8 border border-primary-500/40 flex flex-col h-full relative">
              {/* Most popular badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-500 text-navy-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary-500/30 uppercase tracking-wide">
                Most Popular
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 mt-2">Luminary</h3>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">${luminaryPrice}</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  17% Discount for Annual Payment ($249)
                </p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                For Black women in IT at any stage &mdash; launching, advancing, or leading.
              </p>

              <p className="text-gray-400 text-sm font-medium mb-4">Includes:</p>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Everything in Nova
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Full Lumynr Academy Courses library
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Full Resource Library
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Member directory &mdash; full career visibility
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Custom Resource Creation
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Prept &mdash; full access, no extra charge
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Founding rate locked permanently
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Webinar replay library
                </li>
              </ul>

              <a
                href="https://community.lumynr.com/checkout/luminary-membership-tier-founder"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-4 w-full justify-center"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Footer notes */}
          <div className="max-w-3xl mx-auto text-center mt-12 space-y-2">
            <p className="text-gray-400 text-sm">
              All paid plans include a 30-day free trial &middot; Cancel anytime
            </p>
            <p className="text-gray-500 text-xs">
              Founding Member rates locked permanently for paid subscribers who join by June 15, 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── Constellation Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-500 py-20 md:py-28">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-amber-900/20 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/15 text-navy-900 text-sm font-semibold mb-8">
              <Users className="w-4 h-4" />
              Small-Group Coaching &mdash; Cohorts of 4
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              You&rsquo;ve Got Goals.<br />
              Let&rsquo;s Build Accountability<br className="hidden md:block" /> Around Them.
            </h2>

            <p className="text-lg md:text-xl text-navy-900/80 max-w-2xl mx-auto mb-4 leading-relaxed">
              Constellation is a 3-month group coaching program for women in IT who are ready to move from intention to action &mdash; with structure, support, and real accountability.
            </p>

            <p className="text-navy-900/60 text-sm font-medium mb-10">
              Starting at $250/month &middot; First cohorts open June 1, 2026 &middot; Limited to 4 members per cohort
            </p>

            <a
              href="https://community.lumynr.com/untitled-page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-900 text-amber-400 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg shadow-navy-900/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 focus:ring-offset-amber-400"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Polaris Hero Section ── */}
      <section className="relative overflow-hidden bg-[#4A0E2A] py-20 md:py-28">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[#C9A96E]/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#4A0E2A]/40 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A96E]/15 text-[#C9A96E] text-sm font-semibold mb-8">
              <Award className="w-4 h-4" />
              Executive Leadership Coaching + Certification
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#C9A96E] mb-6 leading-tight">
              This Is Where Transformation<br className="hidden md:block" /> Becomes a Credential.
            </h2>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
              Polaris is a 3-month intensive executive coaching program built around the Transformidable leadership methodology &mdash; weekly 1:1 coaching, a certification, and 12 months of AgentPMO access.
            </p>

            <p className="text-[#C9A96E]/60 text-sm font-medium mb-10">
              Starting at $1,800/month &middot; First cohort opens July 1, 2026 &middot; Employer reimbursement available
            </p>

            <a
              href="https://community.lumynr.com/untitled-page-dfc425"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#4A0E2A] font-semibold px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#C9A96E]/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A96E] focus:ring-offset-2 focus:ring-offset-[#4A0E2A]"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
