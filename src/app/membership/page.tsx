'use client'

import { useState } from 'react'
import { Sparkles, Clock } from 'lucide-react'

// Founding member deadline — hide the banner after this date
const FOUNDING_DEADLINE = '2026-06-15'

function SoonBadge() {
  return (
    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
      soon
    </span>
  )
}

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

            {/* ── Stardust Card ── */}
            <div className="bg-navy-900 rounded-3xl p-8 border border-navy-700 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Stardust</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Explore the community. No commitment, no card needed.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">Free</span>
                  <span className="text-gray-400 text-lg">always</span>
                </div>
              </div>

              <div className="h-px bg-navy-700 mb-6" />

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
                  Upgrade to paid tier anytime
                </li>
              </ul>

              <a
                href="https://community.lumynr.com/join?invitation_token=a00999077ea94592e5a69473164856058946c93f-7d2229cd-30ed-403b-a1fa-4fcdefc49a7e"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base py-4 w-full justify-center"
              >
                Join free
              </a>
            </div>

            {/* ── Nova Card ── */}
            <div className="bg-navy-900 rounded-3xl p-8 border border-navy-700 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Nova</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                For students and early-career Black women in IT. Requires .edu email.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">${novaPrice}</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <p className="text-primary-400 font-medium mt-1 text-sm">
                  Founding rate &mdash; locked permanently
                </p>
              </div>

              <div className="h-px bg-navy-700 mb-6" />

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Everything in Stardust
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Illuminate Book Club &mdash; monthly live sessions
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Be Transformidable &mdash; content + podcast archive
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Ask a Leader Forum
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Early Career &amp; Students Space
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
                  <span>Mentoring circles<SoonBadge /></span>
                </li>
              </ul>

              <a
                href={isAnnual
                  ? 'https://community.lumynr.com/join?invitation_token=b06442ac02fd9ce3ed00421c8c9ffeb5d58fe8d0-1bc90eb4-129b-4e40-a59c-606436e24136'
                  : 'https://community.lumynr.com/join?invitation_token=aee801314ba90ab314c3449c93de2f424668e50e-3e6abbf5-6e5d-46bb-a9dc-76aca6fa24dc'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-4 w-full justify-center"
              >
                Start free trial
              </a>
            </div>

            {/* ── Luminary Card (Most Popular) ── */}
            <div className="bg-navy-900 rounded-3xl p-8 border border-primary-500/40 flex flex-col h-full relative">
              {/* Most popular badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-500 text-navy-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary-500/30">
                Most popular
              </div>

              <div className="flex items-center gap-2 mb-3 mt-2">
                <Sparkles className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Luminary</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                For Black women in IT at any stage &mdash; launching, advancing, or leading.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">${luminaryPrice}</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <p className="text-primary-400 font-medium mt-1 text-sm">
                  Founding rate &mdash; locked permanently
                </p>
              </div>

              <div className="h-px bg-navy-700 mb-6" />

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Everything in Nova
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Full Lumynr Courses library
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
                  Prept &mdash; full access, no extra charge
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  Founding rate locked permanently
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  <span>Webinar replay library<SoonBadge /></span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckIcon />
                  <span>Small group coaching<SoonBadge /></span>
                </li>
              </ul>

              <a
                href={isAnnual
                  ? 'https://community.lumynr.com/join?invitation_token=f49b8d3c89ec444230a207b45317fdbb51ae0832-934eb8f9-c872-4db4-a55f-00913cdfa10f'
                  : 'https://community.lumynr.com/join?invitation_token=afc9cd91cde9bd6ec8cf5288c0d49238d4d9c30c-4172e50d-9de3-464b-8858-e1bfd2224848'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-4 w-full justify-center"
              >
                Start free trial
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
    </div>
  )
}
