'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Loader2, Sparkles } from 'lucide-react'

const CIRCLE_COMMUNITY_URL = 'https://community.lumynr.com'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div className="bg-navy-900 min-h-screen pt-20">
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success icon */}
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to Lumynr!
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your membership is active and your 30-day free trial has begun.
              You&apos;re officially a founding member.
            </p>

            {/* Next steps */}
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 text-left mb-8 border border-navy-700/50">
              <h2 className="text-xl font-semibold text-white mb-6">
                What happens next
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-400 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Check your email</p>
                    <p className="text-gray-400 text-sm mt-0.5">
                      You&apos;ll receive a confirmation email with your membership details
                      and a receipt from Stripe.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-400 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Join the community</p>
                    <p className="text-gray-400 text-sm mt-0.5">
                      Click below to set up your profile on the Lumynr community
                      platform and start connecting.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-400 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Explore your benefits</p>
                    <p className="text-gray-400 text-sm mt-0.5">
                      Dive into learning paths, book club sessions, interview
                      prep, and more — all included with your membership.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA to community */}
            <a
              href={CIRCLE_COMMUNITY_URL}
              className="btn-primary text-lg py-4 px-8 inline-flex items-center"
            >
              Enter the community
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            {/* Founding member badge */}
            <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 text-sm font-medium">
                Founding Member
              </span>
            </div>

            {/* Social follow */}
            <p className="text-gray-500 text-sm mt-8">
              Follow us on{' '}
              <a
                href="https://linkedin.com/company/lumynr"
                className="text-primary-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{' '}
              and{' '}
              <a
                href="https://bsky.app/profile/lumynr.com"
                className="text-primary-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bluesky
              </a>{' '}
              for community updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-navy-900 min-h-screen pt-20 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
