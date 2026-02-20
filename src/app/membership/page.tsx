'use client'

import Link from 'next/link'
import {
  GraduationCap,
  Video,
  BookOpen,
  Users,
  ArrowRight,
  Newspaper,
  Mic,
  CircleDot,
  UsersRound,
  Sparkles,
  Star,
} from 'lucide-react'

export default function MembershipPage() {
  const benefits = [
    {
      icon: GraduationCap,
      title: 'Learning Paths',
      description:
        "Structured skill development tracks designed for Black women in IT. Whether you're building technical expertise, preparing for certifications, or developing leadership capabilities, our paths guide you forward with purpose.",
    },
    {
      icon: Video,
      title: 'Weekly Webinars',
      description:
        "Live sessions every week featuring industry experts, career strategists, and women who've been where you're going. Ask questions in real-time, get actionable advice, and connect with speakers who look like you.",
    },
    {
      icon: BookOpen,
      title: 'Illuminate Book Club',
      description:
        'Our monthly book club features selections by Black women authors covering leadership, professional development, and personal growth. Participate in discussions, attend author events, and expand your perspective alongside your sisters in tech.',
    },
    {
      icon: Newspaper,
      title: 'Amplify Publication',
      description:
        'Your monthly dose of insights, trends, and inspiration. Amplify brings you curated content, member spotlights, and resources designed specifically for Black women navigating tech careers.',
    },
    {
      icon: Mic,
      title: 'Prept Interview Prep',
      description:
        'AI-powered interview practice that actually prepares you for the real thing. From technical interviews to salary negotiations, build your confidence before the conversation counts.',
    },
    {
      icon: CircleDot,
      title: 'Mentoring Circles',
      description:
        'Structured small-group mentorship with senior IT leaders. Get guidance, accountability, and support from women who understand your journey and want to see you succeed.',
      comingSoon: true,
    },
    {
      icon: Users,
      title: 'Community Access',
      description:
        'Full access to our private forums and discussion groups. Find your accountability partners, get advice on workplace challenges, celebrate wins, and build genuine relationships with women who understand your experience.',
    },
    {
      icon: UsersRound,
      title: 'Group Coaching',
      description:
        'Intensive sessions with experienced coaches focused on leadership, career strategy, and breaking through barriers. Small groups, big impact. Available to members at special pricing.',
      comingSoon: true,
    },
  ]

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
            Both membership levels include full access to the Lumynr community and
            resources. Apply today and we&apos;ll review your application personally.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Luminary Card */}
            <div className="bg-navy-900 rounded-3xl p-8 md:p-10 border border-navy-700 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">Luminary</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our core membership for Black women in IT at any stage of their
                career. Whether you&apos;re launching, advancing, pivoting, or
                leading—Luminary membership gives you everything you need to thrive.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">$25</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <p className="text-primary-400 font-medium mt-1 text-sm">
                  Start with 30 days free
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Full access to all learning paths and resources
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Weekly live webinars and recordings
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Illuminate Book Club and Amplify Publication
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Prept AI interview prep
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Private community forums
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Cancel anytime—no long-term commitment
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
                  <span className="text-4xl font-bold text-white">$10</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                <p className="text-primary-400 font-medium mt-1 text-sm">
                  Start with 30 days free · Requires .edu email
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Everything in Luminary
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Student-friendly pricing
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Early career guidance and mentorship
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Interview prep for internships and first roles
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Connect with professionals in your target field
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-primary mt-0.5">✓</span>
                  Valid .edu email address required
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">
            What&apos;s Included
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Every membership level includes full access to these resources and
            community features.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-navy-900">
                      {benefit.title}
                    </h3>
                    {'comingSoon' in benefit && benefit.comingSoon && (
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
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
              personally—because this community is built with intention.
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
