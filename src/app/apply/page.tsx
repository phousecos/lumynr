'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  ArrowRight,
  Loader2,
  CheckCircle,
  Star,
  Sparkles,
} from 'lucide-react'

type MembershipLevel = 'luminary' | 'nova'

type FormData = {
  membershipLevel: MembershipLevel
  firstName: string
  lastName: string
  email: string
  linkedinUrl: string
  alternativeSocialUrl: string
  identifiesAsBlackWoman: boolean
  careerStage: string
  university: string
  heardAbout: string
  anythingElse: string
}

const careerStageOptions = [
  { value: 'launching', label: 'Launching (early career, entering IT)' },
  { value: 'relaunching', label: 'Relaunching (returning after a career break)' },
  {
    value: 'advancing',
    label: 'Advancing (growing into leadership or new responsibilities)',
  },
  { value: 'pivoting', label: 'Pivoting (transitioning into IT from another field)' },
  { value: 'exploring', label: 'Exploring (curious about IT careers)' },
  { value: 'student', label: 'Student (currently pursuing a degree)' },
  { value: 'other', label: 'Other' },
]

function ApplicationContent() {
  const searchParams = useSearchParams()
  const levelParam = searchParams.get('level')
  const initialLevel: MembershipLevel =
    levelParam === 'nova' ? 'nova' : 'luminary'

  const [formData, setFormData] = useState<FormData>({
    membershipLevel: initialLevel,
    firstName: '',
    lastName: '',
    email: '',
    linkedinUrl: '',
    alternativeSocialUrl: '',
    identifiesAsBlackWoman: false,
    careerStage: initialLevel === 'nova' ? 'student' : '',
    university: '',
    heardAbout: '',
    anythingElse: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [emailError, setEmailError] = useState('')

  const isNova = formData.membershipLevel === 'nova'

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const newValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }))

    // Validate .edu email for Nova
    if (name === 'email' && isNova) {
      if (value && !value.toLowerCase().endsWith('.edu')) {
        setEmailError('Nova membership requires a valid .edu email address.')
      } else {
        setEmailError('')
      }
    } else if (name === 'email') {
      setEmailError('')
    }
  }

  const handleLevelChange = (level: MembershipLevel) => {
    setFormData((prev) => ({
      ...prev,
      membershipLevel: level,
      careerStage: level === 'nova' ? 'student' : prev.careerStage === 'student' ? '' : prev.careerStage,
    }))
    setEmailError('')
    // Re-validate email when switching to Nova
    if (level === 'nova' && formData.email && !formData.email.toLowerCase().endsWith('.edu')) {
      setEmailError('Nova membership requires a valid .edu email address.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate .edu email for Nova
    if (isNova && !formData.email.toLowerCase().endsWith('.edu')) {
      setEmailError('Nova membership requires a valid .edu email address.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit application')
      }

      setIsSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-navy-900 min-h-screen pt-20">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Application Received!
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Thank you for applying to Lumynr{' '}
                <span className="text-primary font-semibold">
                  {formData.membershipLevel === 'nova' ? 'Nova' : 'Luminary'}
                </span>
                . Every application is reviewed personally—because this community is
                built with intention.
              </p>

              <div className="bg-navy-800 rounded-2xl p-8 text-left mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                  What Happens Next
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      You&apos;ll receive an email confirming we got your application
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Our team will review your application within 48 hours
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Once approved, you&apos;ll receive an invite link to join the
                      Lumynr community
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-400">
                In the meantime, follow us on{' '}
                <a
                  href="https://linkedin.com/company/lumynr"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                and{' '}
                <a
                  href="https://bsky.app/profile/lumynr.com"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bluesky
                </a>{' '}
                to stay connected.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-navy-900 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Apply for Membership
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Tell us a bit about yourself and we&apos;ll review your application
              personally. This isn&apos;t about gatekeeping—it&apos;s about building a
              focused, supportive space where Black women in IT can truly thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Membership Level Toggle */}
              <div>
                <label className="label">
                  Membership Level <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleLevelChange('luminary')}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      formData.membershipLevel === 'luminary'
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Star className={`w-5 h-5 ${formData.membershipLevel === 'luminary' ? 'text-primary' : 'text-gray-400'}`} />
                      <span className={`font-semibold ${formData.membershipLevel === 'luminary' ? 'text-navy-900' : 'text-gray-600'}`}>
                        Luminary
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">$25/month · Base membership</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLevelChange('nova')}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      formData.membershipLevel === 'nova'
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className={`w-5 h-5 ${formData.membershipLevel === 'nova' ? 'text-primary' : 'text-gray-400'}`} />
                      <span className={`font-semibold ${formData.membershipLevel === 'nova' ? 'text-navy-900' : 'text-gray-600'}`}>
                        Nova
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                        Student
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">$15/month · .edu required</p>
                  </button>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="label">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Your first name"
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="label">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Your last name"
                    required
                    className="input-field"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="label">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={isNova ? 'you@university.edu' : 'you@example.com'}
                  required
                  className={`input-field ${emailError ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : ''}`}
                />
                {emailError ? (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                ) : (
                  <p className="text-gray-500 text-sm mt-1">
                    {isNova
                      ? 'A valid .edu email address is required for Nova membership.'
                      : 'This will be your login email for Lumynr.'}
                  </p>
                )}
              </div>

              {/* University (Nova only) */}
              {isNova && (
                <div>
                  <label htmlFor="university" className="label">
                    University / College <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    placeholder="Your university or college name"
                    required={isNova}
                    className="input-field"
                  />
                </div>
              )}

              {/* LinkedIn */}
              <div>
                <label htmlFor="linkedinUrl" className="label">
                  LinkedIn Profile (Recommended)
                </label>
                <input
                  type="url"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="input-field"
                />
                <p className="text-gray-500 text-sm mt-1">
                  Helps us learn more about your professional background.
                </p>
              </div>

              {/* Alternative Social */}
              <div>
                <label htmlFor="alternativeSocialUrl" className="label">
                  Other Professional Profile
                </label>
                <input
                  type="url"
                  id="alternativeSocialUrl"
                  name="alternativeSocialUrl"
                  value={formData.alternativeSocialUrl}
                  onChange={handleInputChange}
                  placeholder="https://..."
                  className="input-field"
                />
                <p className="text-gray-500 text-sm mt-1">
                  If you don&apos;t use LinkedIn, share another professional profile or
                  portfolio.
                </p>
              </div>

              {/* Self-Identification */}
              <div className="bg-gray-50 rounded-xl p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="identifiesAsBlackWoman"
                    checked={formData.identifiesAsBlackWoman}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-navy-900">
                    Yes, I identify as a Black woman{' '}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              {/* Career Stage */}
              <div>
                <label htmlFor="careerStage" className="label">
                  Where are you in your career journey?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="careerStage"
                  name="careerStage"
                  value={formData.careerStage}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                >
                  <option value="">Select an option</option>
                  {careerStageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* How Did You Hear */}
              <div>
                <label htmlFor="heardAbout" className="label">
                  How did you hear about Lumynr?
                </label>
                <input
                  type="text"
                  id="heardAbout"
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleInputChange}
                  placeholder="A friend, LinkedIn, podcast, etc."
                  className="input-field"
                />
              </div>

              {/* Anything Else */}
              <div>
                <label htmlFor="anythingElse" className="label">
                  Anything else you&apos;d like us to know?
                </label>
                <textarea
                  id="anythingElse"
                  name="anythingElse"
                  value={formData.anythingElse}
                  onChange={handleInputChange}
                  placeholder="Optional - share whatever feels relevant"
                  rows={4}
                  className="input-field resize-none"
                />
                <p className="text-gray-500 text-sm mt-1">
                  This is your space to tell us more about yourself or what you&apos;re
                  hoping to find in Lumynr.
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg">{error}</div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !!emailError}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Submitting your application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {/* Back to membership */}
              <p className="text-center text-gray-500">
                Want to compare membership levels?{' '}
                <Link
                  href="/membership"
                  className="text-primary hover:underline font-medium"
                >
                  View membership options
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ApplyPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-navy-900 min-h-screen pt-20 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      }
    >
      <ApplicationContent />
    </Suspense>
  )
}
