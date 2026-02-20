'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Star } from 'lucide-react'

export default function MembershipPage() {
  return (
    <div className="bg-navy-900 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/membership-hero.png)' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy-900/50" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Membership Built for Your Journey
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Lumynr membership gives you the resources, community, and support to
              take your IT career exactly where you want it to go. Choose the
              membership that fits where you are right now.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="section-padding bg-navy-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Choose Your Membership
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Both membership levels include full access to the Lumynr community.
            Apply today and we&apos;ll review your application personally.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Nova Card */}
            <div className="bg-navy-900 rounded-3xl p-8 md:p-10 border border-primary-500/30 flex flex-col relative overflow-hidden">
              {/* Student badge */}
              <div className="absolute top-6 right-6 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary-500/30">
                For Students
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">Nova</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Exclusively for university students with a valid .edu email address.
                Get a head start on your IT career with the full power of the Lumynr
                community behind you while you&apos;re still in school.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">$15</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <p className="text-primary-400 font-medium mt-1 text-sm">
                  30-day free trial · ~$149/year with annual billing
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Requires .edu email · Re-verifies each year
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Access to all Community Spaces (discussions, job board, member directory)
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Live monthly webinars
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Virtual book club &mdash; monthly live discussion session
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Early Career &amp; Students Space &mdash; dedicated forum for navigating the path
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Cross-generational mentoring circles &mdash; matched with mid-career and senior professionals
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Ask a Leader forum &mdash; direct access to Luminary and Constellation members
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  The Transformidable Leader Space &mdash; chapter discussions and framework application
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Prept &mdash; AI interview prep tool, basic access included at no extra charge
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Resource library &mdash; foundational career toolkit and podcast archive
                </li>
              </ul>

              <Link
                href="/apply?level=nova"
                className="btn-primary text-lg py-4 w-full justify-center"
              >
                Apply for Nova
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Luminary Card */}
            <div className="bg-navy-900 rounded-3xl p-8 md:p-10 border border-navy-700 flex flex-col relative overflow-hidden">
              {/* Founding badge */}
              <div className="absolute top-6 right-6 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary-500/30">
                Base Membership
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">Luminary</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our core membership for Black women in IT at any stage of their
                career. Whether you&apos;re launching, advancing, pivoting, or
                leading&mdash;Luminary membership gives you everything you need to thrive.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">$25</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <p className="text-primary-400 font-medium mt-1 text-sm">
                  30-day free trial, then auto-charge
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Founding Member rate locked permanently (April launch cohort)
                </p>
              </div>

              <p className="text-primary-400 font-semibold text-sm mb-3">
                Everything in Nova, plus:
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Full webinar replay library &mdash; every session on demand
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Full Lumynr Courses library &mdash; complete access to all courses
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Full Resource Library &mdash; career toolkit, industry reports, certification guides, and newsletter archive
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Member directory with full career stage visibility for networking and mentoring matching
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Prept &mdash; AI interview prep tool, full access included at no extra charge
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  Founding Member rate locked permanently
                </li>
              </ul>

              <Link
                href="/apply?level=luminary"
                className="btn-primary text-lg py-4 w-full justify-center"
              >
                Apply for Luminary
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Apply for membership today. Every application is reviewed
              personally&mdash;because this community is built with intention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply?level=luminary"
                className="btn-primary text-base"
              >
                Apply for Luminary
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/apply?level=nova"
                className="btn-secondary text-base"
              >
                Apply for Nova (Students)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
