'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Loader2, CheckCircle, Linkedin } from 'lucide-react'

type FormData = {
  firstName: string
  lastName: string
  email: string
  linkedinUrl: string
  alternativeSocialUrl: string
  identifiesAsBlackWoman: boolean
  careerStage: string
  heardAbout: string
  anythingElse: string
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  linkedinUrl: '',
  alternativeSocialUrl: '',
  identifiesAsBlackWoman: false,
  careerStage: '',
  heardAbout: '',
  anythingElse: '',
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
  { value: 'other', label: 'Other' },
]

export default function RequestInvitationPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/request-invitation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit request')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
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
                Thank You! We've Received Your Request.
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Every invitation request is reviewed personally—because this
                community is built with intention. You'll hear from us within 48
                hours.
              </p>

              <div className="bg-navy-800 rounded-2xl p-8 text-left mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                  What to Expect
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      You'll receive an email confirming we got your request
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Within 48 hours, you'll hear back with your invitation or a
                      follow-up question
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Once approved, you'll get a personal invitation link to
                      complete your membership
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
              We'd Love to Get to Know You
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Lumynr is an invitation-only community, and every request is reviewed
              personally. This isn't about gatekeeping—it's about building a focused,
              supportive space where Black women in IT can truly thrive. Tell us a bit
              about yourself, and we'll be in touch within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="you@example.com"
                  required
                  className="input-field"
                />
                <p className="text-gray-500 text-sm mt-1">
                  This will be your login email for Lumynr.
                </p>
              </div>

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
                  If you don't use LinkedIn, share another professional profile or
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
                  Anything else you'd like us to know?
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
                  This is your space to tell us more about yourself or what you're
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
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Sending your request...
                  </>
                ) : (
                  <>
                    Request My Invitation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {/* Already have invitation */}
              <p className="text-center text-gray-500">
                Already have an invitation?{' '}
                <Link
                  href="/membership"
                  className="text-primary hover:underline font-medium"
                >
                  Complete your membership →
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
