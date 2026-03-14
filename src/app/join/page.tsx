'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react'

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/26824712/uxjo7mj/'

const CIRCLE_INVITE_LINKS: Record<string, string> = {
  stardust:
    'https://community.lumynr.com/join?invitation_token=a00999077ea94592e5a69473164856058946c93f-7d2229cd-30ed-403b-a1fa-4fcdefc49a7e',
  'nova-monthly':
    'https://community.lumynr.com/join?invitation_token=aee801314ba90ab314c3449c93de2f424668e50e-3e6abbf5-6e5d-46bb-a9dc-76aca6fa24dc',
  'nova-annual':
    'https://community.lumynr.com/join?invitation_token=b06442ac02fd9ce3ed00421c8c9ffeb5d58fe8d0-1bc90eb4-129b-4e40-a59c-606436e24136',
  'luminary-monthly':
    'https://community.lumynr.com/join?invitation_token=afc9cd91cde9bd6ec8cf5288c0d49238d4d9c30c-4172e50d-9de3-464b-8858-e1bfd2224848',
  'luminary-annual':
    'https://community.lumynr.com/join?invitation_token=f49b8d3c89ec444230a207b45317fdbb51ae0832-934eb8f9-c872-4db4-a55f-00913cdfa10f',
}

const TIER_OPTIONS = ['Stardust', 'Nova', 'Luminary'] as const

const ROLE_OPTIONS = [
  'Business Analysis & Information Systems',
  'Data & Database Management',
  'Information Security & Cybersecurity',
  'Infrastructure & Systems Operations',
  'IT Project & Product Management',
  'Software Development & Engineering',
  'Technical Support & Operations',
  'Freelancer / Contractor',
  'Business Owner',
]

const SPECIALIZATION_OPTIONS = [
  'Artificial Intelligence',
  'Cloud Computing / Architecture',
  'Cybersecurity',
  'Database Administration / Architecture',
  'Data Science and Analytics',
  'DevOps Engineering',
  'IT Project Management / Leadership',
  'Network and Systems Administration',
  'Software Development / Engineering',
  'Web Development',
]

const CAREER_LEVEL_OPTIONS = [
  'Student',
  'Entry Level (0–2 years)',
  'Early Career (2–5 years)',
  'Mid Career (5–10 years)',
  'Senior (10–15 years)',
  'Executive / Leadership (15+ years)',
]

const LOCATION_GROUPS = [
  {
    label: 'United States',
    options: [
      'Northeast US',
      'Southeast US',
      'Midwest US',
      'Southwest US',
      'West US',
    ],
  },
  {
    label: 'Africa',
    options: [
      'West Africa',
      'East Africa',
      'Southern Africa',
      'Central Africa',
      'North Africa',
    ],
  },
  {
    label: 'South America',
    options: [
      'Brazil',
      'Caribbean',
      'Central America',
      'South America (Other)',
    ],
  },
  {
    label: 'Europe',
    options: [
      'United Kingdom',
      'Western Europe',
      'Northern Europe',
      'Southern Europe',
      'Eastern Europe',
    ],
  },
  {
    label: 'Other Regions',
    options: [
      'Canada',
      'Asia',
      'Australia / New Zealand',
      'Middle East',
      'Other',
    ],
  },
]

const LANGUAGE_OPTIONS = [
  'English',
  'French',
  'Spanish',
  'Portuguese',
  'Swahili',
  'Hausa',
  'Yoruba',
  'Amharic',
  'Fula',
  'Igbo',
  'Zulu',
  'Oromo',
  'Xhosa',
]

function JoinForm() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get('plan') ?? ''
  const billingParam = searchParams.get('billing') ?? 'monthly'

  const initialTier = TIER_OPTIONS.find(
    (t) => t.toLowerCase() === planParam.toLowerCase()
  ) ?? ''

  const [form, setForm] = useState({
    memberName: '',
    email: '',
    membershipTier: initialTier,
    billing: billingParam,
    currentRole: '',
    specialization: '',
    careerLevel: '',
    careerGoals: '',
    location: '',
    language: '',
    identifyAsBlackWoman: false,
    linkedIn: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Sync tier from URL if it changes
  useEffect(() => {
    if (initialTier) {
      setForm((f) => ({ ...f, membershipTier: initialTier, billing: billingParam }))
    }
  }, [initialTier, billingParam])

  function update(field: string, value: string | boolean) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function getInviteLink(): string {
    const tier = form.membershipTier.toLowerCase()
    if (tier === 'stardust') return CIRCLE_INVITE_LINKS.stardust
    const key = `${tier}-${form.billing}`
    return CIRCLE_INVITE_LINKS[key] ?? ''
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const inviteLink = getInviteLink()

    const payload = {
      member_name: form.memberName,
      email_address: form.email,
      membership_tier: form.membershipTier,
      member_status: 'Pending',
      founding_member: true,
      join_date: new Date().toISOString().slice(0, 10),
      cancellation_date: '',
      circle_invite_link: inviteLink,
      referral_link: '',
      current_role_title: form.currentRole,
      area_of_it_specialization_interest: form.specialization,
      career_level: form.careerLevel,
      career_goals: form.careerGoals,
      geographic_location: form.location,
      languages_spoken: form.language,
      identify_as_black_woman: form.identifyAsBlackWoman,
      linkedin_profile: form.linkedIn,
    }

    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      setStatus('success')

      // Redirect to Circle invite after a short delay
      if (inviteLink) {
        setTimeout(() => {
          window.location.href = inviteLink
        }, 2000)
      }
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">You&apos;re in!</h2>
        <p className="text-gray-400 mb-2">
          Redirecting you to the community now&hellip;
        </p>
        <p className="text-gray-500 text-sm">
          If you&apos;re not redirected,{' '}
          <a href={getInviteLink()} className="text-primary-400 underline">
            click here
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
      {/* Tier indicator */}
      {form.membershipTier && (
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium">
            Joining as {form.membershipTier}
            {form.membershipTier !== 'Stardust' && ` (${form.billing})`}
          </span>
        </div>
      )}

      {/* Personal Info */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-semibold text-white mb-4">About you</legend>

        <div>
          <label htmlFor="memberName" className="label-dark">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="memberName"
            type="text"
            required
            value={form.memberName}
            onChange={(e) => update('memberName', e.target.value)}
            className="input-field-dark"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="label-dark">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="input-field-dark"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="linkedIn" className="label-dark">
            LinkedIn or Professional Social Profile
          </label>
          <input
            id="linkedIn"
            type="url"
            value={form.linkedIn}
            onChange={(e) => update('linkedIn', e.target.value)}
            className="input-field-dark"
            placeholder="https://linkedin.com/in/yourname"
          />
        </div>
      </fieldset>

      {/* Membership */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-semibold text-white mb-4">Membership</legend>

        <div>
          <label htmlFor="membershipTier" className="label-dark">
            Membership Tier <span className="text-red-400">*</span>
          </label>
          <select
            id="membershipTier"
            required
            value={form.membershipTier}
            onChange={(e) => update('membershipTier', e.target.value)}
            className="input-field-dark"
          >
            <option value="">Select a tier</option>
            {TIER_OPTIONS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {form.membershipTier && form.membershipTier !== 'Stardust' && (
          <div>
            <label htmlFor="billing" className="label-dark">
              Billing
            </label>
            <select
              id="billing"
              value={form.billing}
              onChange={(e) => update('billing', e.target.value)}
              className="input-field-dark"
            >
              <option value="monthly">Monthly</option>
              <option value="annual">Annual</option>
            </select>
          </div>
        )}

        <div className="flex items-start gap-3">
          <input
            id="identifyAsBlackWoman"
            type="checkbox"
            checked={form.identifyAsBlackWoman}
            onChange={(e) => update('identifyAsBlackWoman', e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-navy-600 bg-navy-800 text-primary-500 focus:ring-primary-500 focus:ring-offset-navy-900"
          />
          <label htmlFor="identifyAsBlackWoman" className="text-sm text-gray-300">
            I identify as a Black woman <span className="text-red-400">*</span>
          </label>
        </div>
      </fieldset>

      {/* Career Info */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-semibold text-white mb-4">Career</legend>

        <div>
          <label htmlFor="currentRole" className="label-dark">
            Current Role / Title
          </label>
          <select
            id="currentRole"
            value={form.currentRole}
            onChange={(e) => update('currentRole', e.target.value)}
            className="input-field-dark"
          >
            <option value="">Select your role</option>
            {ROLE_OPTIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="specialization" className="label-dark">
            Area of IT Specialization / Interest
          </label>
          <select
            id="specialization"
            value={form.specialization}
            onChange={(e) => update('specialization', e.target.value)}
            className="input-field-dark"
          >
            <option value="">Select your specialization</option>
            {SPECIALIZATION_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="careerLevel" className="label-dark">
            Career Level
          </label>
          <select
            id="careerLevel"
            value={form.careerLevel}
            onChange={(e) => update('careerLevel', e.target.value)}
            className="input-field-dark"
          >
            <option value="">Select your career level</option>
            {CAREER_LEVEL_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="careerGoals" className="label-dark">
            Career Goals
          </label>
          <textarea
            id="careerGoals"
            rows={3}
            value={form.careerGoals}
            onChange={(e) => update('careerGoals', e.target.value)}
            className="input-field-dark"
            placeholder="What are you working toward in your career?"
          />
        </div>
      </fieldset>

      {/* Location & Language */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-semibold text-white mb-4">Location &amp; Language</legend>

        <div>
          <label htmlFor="location" className="label-dark">
            Geographic Location
          </label>
          <select
            id="location"
            value={form.location}
            onChange={(e) => update('location', e.target.value)}
            className="input-field-dark"
          >
            <option value="">Select your location</option>
            {LOCATION_GROUPS.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="language" className="label-dark">
            Languages Spoken
          </label>
          <select
            id="language"
            value={form.language}
            onChange={(e) => update('language', e.target.value)}
            className="input-field-dark"
          >
            <option value="">Select your primary language</option>
            {LANGUAGE_OPTIONS.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
      </fieldset>

      {/* Submit */}
      {errorMessage && (
        <p className="text-red-400 text-sm text-center">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting' || !form.identifyAsBlackWoman}
        className="btn-primary text-lg py-4 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting&hellip;
          </>
        ) : (
          form.membershipTier === 'Stardust' ? 'Join Lumynr' : 'Start your free trial'
        )}
      </button>

      {!form.identifyAsBlackWoman && (
        <p className="text-gray-500 text-xs text-center">
          Please confirm that you identify as a Black woman to continue.
        </p>
      )}
    </form>
  )
}

export default function JoinPage() {
  return (
    <div className="bg-navy-900 min-h-screen pt-20">
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="mb-8">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to membership
            </Link>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-primary-400 font-semibold tracking-widest uppercase text-sm mb-4">
              Join Lumynr
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome to the community
            </h1>
            <p className="text-gray-400 leading-relaxed">
              Fill out the form below and you&apos;ll be taken straight to your new community space.
            </p>
          </div>

          <Suspense fallback={
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 text-primary-400 animate-spin" />
            </div>
          }>
            <JoinForm />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
