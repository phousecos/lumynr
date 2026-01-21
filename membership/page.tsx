'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  GraduationCap,
  Video,
  BookOpen,
  Users,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowRight,
  Gift,
} from 'lucide-react'

type CodeValidationResult = {
  valid: boolean
  type?: 'founding' | 'referral' | 'standard'
  discount?: string
  message?: string
}

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
    icon: Users,
    title: 'Community Access',
    description:
      'Full access to our private forums and discussion groups. Find your accountability partners, get advice on workplace challenges, celebrate wins, and build genuine relationships with women who understand your experience.',
  },
]

// Separate component for the checkout form that uses useSearchParams
function CheckoutForm() {
  const searchParams = useSearchParams()
  const [invitationCode, setInvitationCode] = useState('')
  const [codeValidation, setCodeValidation] = useState<CodeValidationResult | null>(
    null
  )
  const [isValidating, setIsValidating] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  // Pre-fill code from URL parameter
  useEffect(() => {
    const code = searchParams.get('code')
    if (code) {
      setInvitationCode(code)
      validateCode(code)
    }
  }, [searchParams])

  const validateCode = async (code: string) => {
    if (!code || code.length < 8) {
      setCodeValidation(null)
      return
    }

    setIsValidating(true)
    try {
      const response = await fetch('/api/validate-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
      const result = await response.json()
      setCodeValidation(result)
    } catch (error) {
      setCodeValidation({
        valid: false,
        message: 'Unable to validate code. Please try again.',
      })
    } finally {
      setIsValidating(false)
    }
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value.toUpperCase()
    setInvitationCode(code)
    // Auto-validate when code looks complete
    if (code.length >= 12) {
      validateCode(code)
    } else {
      setCodeValidation(null)
    }
  }

  const handleCheckout = async () => {
    if (!codeValidation?.valid || !agreedToTerms) return

    setIsCheckingOut(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: invitationCode,
          codeType: codeValidation.type,
        }),
      })
      const { url } = await response.json()
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
    } finally {
      setIsCheckingOut(false)
    }
  }

  return (
    <div className="bg-navy-900 rounded-3xl p-8 md:p-12 border border-navy-700">
      {/* Price Display */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl md:text-6xl font-bold text-white">
            $9.95
          </span>
          <span className="text-gray-400 text-xl">/month</span>
        </div>
        <p className="text-gray-400 mt-2">
          Cancel anytime. No long-term commitment required.
        </p>
      </div>

      {/* Founding Member Callout */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-4 mb-8 border border-primary/30">
        <div className="flex items-center gap-3">
          <Gift className="w-6 h-6 text-primary flex-shrink-0" />
          <p className="text-white">
            <span className="font-semibold">Founding Member Offer:</span> Your
            first 3 months are FREE, then just $9.95/month.
          </p>
        </div>
      </div>

      {/* Code Entry */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">
          Enter Your Invitation Code
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Your invitation code was included in your welcome email. Enter it
          below to unlock your membership.
        </p>
        <div className="relative">
          <input
            type="text"
            value={invitationCode}
            onChange={handleCodeChange}
            placeholder="XXXX-XXXX-XXXX"
            className="input-field-dark text-center text-lg tracking-widest uppercase"
            maxLength={14}
          />
          {isValidating && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Loader2 className="w-5 h-5 text-primary animate-spin" />
            </div>
          )}
        </div>

        {/* Validation Result */}
        {codeValidation && (
          <div
            className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
              codeValidation.valid
                ? 'bg-green-500/10 border border-green-500/30'
                : 'bg-red-500/10 border border-red-500/30'
            }`}
          >
            {codeValidation.valid ? (
              <>
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-400 font-medium">
                    Code accepted!
                  </p>
                  <p className="text-gray-400 text-sm">
                    {codeValidation.type === 'founding'
                      ? 'Founding Member - 3 months free'
                      : codeValidation.type === 'referral'
                      ? '1 month free (Referral)'
                      : 'Standard Invitation'}
                  </p>
                </div>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-400 font-medium">Invalid code</p>
                  <p className="text-gray-400 text-sm">
                    {codeValidation.message ||
                      'This code is invalid or has already been used. Please check your email and try again.'}
                  </p>
                </div>
              </>
            )}
          </div>
        )}

        {/* No code link */}
        <p className="text-gray-500 text-sm mt-4 text-center">
          Don't have an invitation code?{' '}
          <Link
            href="/request-invitation"
            className="text-primary hover:text-primary-400 underline"
          >
            Request an Invitation
          </Link>
        </p>
      </div>

      {/* Terms Agreement */}
      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-navy-600 text-primary focus:ring-primary focus:ring-offset-navy-900"
          />
          <span className="text-gray-400 text-sm">
            I agree to the{' '}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </span>
        </label>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        disabled={!codeValidation?.valid || !agreedToTerms || isCheckingOut}
        className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {isCheckingOut ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            Processing...
          </>
        ) : codeValidation?.valid ? (
          <>
            Complete Your Membership
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        ) : (
          'Enter your invitation code to continue'
        )}
      </button>

      {/* Referral Note */}
      <p className="text-gray-500 text-sm mt-6 text-center">
        Know someone who should be here? Members earn 1 free month for every
        friend who joins—up to a full year free.
      </p>
    </div>
  )
}

// Loading fallback for the checkout form
function CheckoutFormLoading() {
  return (
    <div className="bg-navy-900 rounded-3xl p-8 md:p-12 border border-navy-700">
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl md:text-6xl font-bold text-white">
            $9.95
          </span>
          <span className="text-gray-400 text-xl">/month</span>
        </div>
        <p className="text-gray-400 mt-2">
          Cancel anytime. No long-term commitment required.
        </p>
      </div>
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    </div>
  )
}

export default function MembershipPage() {
  return (
    <div className="bg-navy-900 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Membership Built for Your Journey
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Lumynr membership gives you the resources, community, and support to
              take your IT career exactly where you want it to go. No fluff, no
              filler—just what you need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Checkout Section */}
      <section className="section-padding bg-navy-800">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <Suspense fallback={<CheckoutFormLoading />}>
              <CheckoutForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}
