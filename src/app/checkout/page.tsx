'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Loader2,
  Shield,
  CheckCircle,
  Sparkles,
  Star,
  CreditCard,
} from 'lucide-react'

const PLAN_DETAILS: Record<
  string,
  {
    name: string
    monthlyPrice: number
    annualPrice: number
    icon: typeof Sparkles
    features: string[]
  }
> = {
  nova: {
    name: 'Nova',
    monthlyPrice: 20,
    annualPrice: 17,
    icon: Sparkles,
    features: [
      'Everything in Stardust',
      'Illuminate Book Club',
      'Be Transformidable content + podcast',
      'Ask a Leader Forum',
      'Prept — AI interview prep',
      'Resource Library',
    ],
  },
  luminary: {
    name: 'Luminary',
    monthlyPrice: 30,
    annualPrice: 25,
    icon: Star,
    features: [
      'Everything in Nova',
      'Full Lumynr Courses library',
      'Full Resource Library',
      'Member directory',
      'Prept — full access',
      'Founding rate locked permanently',
    ],
  },
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || 'luminary'
  const billing = searchParams.get('billing') || 'monthly'

  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const details = PLAN_DETAILS[plan]

  if (!details) {
    return (
      <div className="bg-navy-900 min-h-screen pt-20">
        <section className="py-16 md:py-24">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              Plan not found
            </h1>
            <p className="text-gray-400 mb-8">
              The plan you selected isn&apos;t available. Please choose a
              membership.
            </p>
            <Link href="/membership" className="btn-primary">
              View membership options
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const price = billing === 'annual' ? details.annualPrice : details.monthlyPrice
  const isAnnual = billing === 'annual'
  const PlanIcon = details.icon

  async function handleCheckout() {
    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, billing, email: email || undefined }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to start checkout')
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-navy-900 min-h-screen pt-20">
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to membership
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Left: Order Summary */}
              <div className="md:col-span-2">
                <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 border border-navy-700/50 sticky top-28">
                  <h2 className="text-lg font-semibold text-white mb-6">
                    Order summary
                  </h2>

                  {/* Plan card */}
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                      <PlanIcon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Lumynr {details.name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {isAnnual ? 'Annual' : 'Monthly'} subscription
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-navy-700 mb-4" />

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {details.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="h-px bg-navy-700 mb-4" />

                  {/* Price breakdown */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">
                        {details.name} ({isAnnual ? 'annual' : 'monthly'})
                      </span>
                      <span className="text-white">
                        ${price}/mo
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">30-day free trial</span>
                      <span className="text-green-400">Included</span>
                    </div>
                  </div>

                  <div className="h-px bg-navy-700 mb-4" />

                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Due today</span>
                    <span className="text-2xl font-bold text-white">$0</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    ${price}/mo starts after 30-day trial
                  </p>

                  {/* Trust badges */}
                  <div className="mt-6 pt-4 border-t border-navy-700">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Shield className="w-3.5 h-3.5" />
                      Secure payment via Stripe
                    </div>
                    <p className="text-gray-500 text-xs mt-1">
                      Cancel anytime during your trial — no charge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Checkout Form */}
              <div className="md:col-span-3">
                <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-700/50">
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Start your free trial
                  </h1>
                  <p className="text-gray-400 mb-8">
                    Enter your email to continue to secure checkout. Your
                    30-day free trial begins immediately.
                  </p>

                  {/* Email input */}
                  <div className="mb-6">
                    <label htmlFor="email" className="label-dark">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="input-field-dark"
                    />
                    <p className="text-gray-500 text-xs mt-1.5">
                      This will be your Lumynr account email.
                    </p>
                  </div>

                  {/* Billing toggle */}
                  <div className="mb-8 p-4 rounded-xl bg-navy-900/50 border border-navy-700/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">
                          {isAnnual ? 'Annual billing' : 'Monthly billing'}
                        </p>
                        <p className="text-xs text-gray-400">
                          {isAnnual
                            ? `$${details.annualPrice}/mo — save $${(details.monthlyPrice - details.annualPrice) * 12}/yr`
                            : `$${details.monthlyPrice}/mo — switch to annual and save`}
                        </p>
                      </div>
                      <Link
                        href={`/checkout?plan=${plan}&billing=${isAnnual ? 'monthly' : 'annual'}`}
                        className="text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors"
                      >
                        {isAnnual ? 'Switch to monthly' : 'Switch to annual'}
                      </Link>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Checkout button */}
                  <button
                    onClick={handleCheckout}
                    disabled={isLoading}
                    className="btn-primary text-lg py-4 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Connecting to Stripe...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5 mr-2" />
                        Continue to payment
                      </>
                    )}
                  </button>

                  <p className="text-gray-500 text-xs text-center mt-4">
                    You&apos;ll be redirected to Stripe&apos;s secure checkout.
                    Your founding rate of ${price}/mo is locked permanently.
                  </p>

                  {/* Founding member callout */}
                  <div className="mt-8 p-4 rounded-xl bg-primary-500/5 border border-primary-500/20">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-primary-400">
                          Founding Member benefit
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Your ${price}/mo rate is locked permanently. This
                          founding rate won&apos;t increase — even as we add new
                          features and raise prices for future members.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-navy-900 min-h-screen pt-20 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  )
}
