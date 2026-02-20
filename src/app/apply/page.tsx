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
  careerLevel: string
  employmentStatus: string
  hiresEmployees: string
  technologyInterests: string[]
  sectors: string[]
  languages: string[]
  otherLanguage: string
  coachingMentoring: string
  willingToLeadMentoring: string
  willingToLeadNovaMentoring: string
  university: string
}

const careerLevelOptions = [
  { value: 'student', label: 'Student' },
  { value: 'entry_level', label: 'Entry-level / Junior' },
  { value: 'mid_level', label: 'Mid-level / Experienced' },
  { value: 'senior_manager', label: 'Senior / Manager' },
  { value: 'director_executive', label: 'Director / Executive' },
]

const employmentStatusOptions = [
  { value: 'employed', label: 'Employed (full or part-time)' },
  { value: 'self_employed', label: 'Self-employed / Freelancer' },
  { value: 'laid_off', label: 'Temporarily laid off or on leave' },
  { value: 'unemployed', label: 'Unemployed and looking for work' },
  { value: 'retired', label: 'Retired' },
  { value: 'student_homemaker', label: 'Student / Homemaker' },
]

const technologyOptions = [
  'Cloud Computing (AWS, Azure, GCP)',
  'Cybersecurity',
  'Data Science & Analytics',
  'Artificial Intelligence / Machine Learning',
  'Software Development / Engineering',
  'DevOps & Infrastructure',
  'Project / Product Management',
  'Networking & Systems Administration',
  'UX / UI Design',
  'Database Management & Administration',
]

const sectorOptions = [
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'financial_services', label: 'Financial Services' },
  { value: 'information_technology', label: 'Information Technology' },
  { value: 'education_government', label: 'Education and Government' },
  { value: 'retail_wholesale', label: 'Retail or Wholesale Trade' },
]

const languageOptions = [
  'English',
  'Arabic',
  'French',
  'Spanish',
  'Portuguese',
  'Swahili',
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
    careerLevel: initialLevel === 'nova' ? 'student' : '',
    employmentStatus: '',
    hiresEmployees: '',
    technologyInterests: [],
    sectors: [],
    languages: [],
    otherLanguage: '',
    coachingMentoring: '',
    willingToLeadMentoring: '',
    willingToLeadNovaMentoring: '',
    university: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [profileError, setProfileError] = useState('')

  const isNova = formData.membershipLevel === 'nova'
  const isSeniorOrAbove =
    formData.careerLevel === 'senior_manager' ||
    formData.careerLevel === 'director_executive'
  const isDirector = formData.careerLevel === 'director_executive'

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

    // Clear profile error when either profile field is filled
    if (name === 'linkedinUrl' || name === 'alternativeSocialUrl') {
      setProfileError('')
    }

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

    // Clear conditional fields when employment status changes
    if (name === 'employmentStatus' && value !== 'self_employed') {
      setFormData((prev) => ({ ...prev, [name]: value, hiresEmployees: '' }))
    }
  }

  const handleCheckboxArray = (field: 'technologyInterests' | 'sectors' | 'languages', value: string) => {
    setFormData((prev) => {
      const current = prev[field]
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, [field]: updated }
    })
  }

  const handleLevelChange = (level: MembershipLevel) => {
    setFormData((prev) => ({
      ...prev,
      membershipLevel: level,
      careerLevel: level === 'nova' ? 'student' : prev.careerLevel === 'student' ? '' : prev.careerLevel,
    }))
    setEmailError('')
    if (level === 'nova' && formData.email && !formData.email.toLowerCase().endsWith('.edu')) {
      setEmailError('Nova membership requires a valid .edu email address.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setProfileError('')

    // Validate .edu email for Nova
    if (isNova && !formData.email.toLowerCase().endsWith('.edu')) {
      setEmailError('Nova membership requires a valid .edu email address.')
      return
    }

    // Validate that at least one profile link is provided
    if (!formData.linkedinUrl && !formData.alternativeSocialUrl) {
      setProfileError('Please provide either a LinkedIn profile or another professional profile link.')
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
            <form onSubmit={handleSubmit} className="space-y-8">
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
                    <p className="text-sm text-gray-500">$25/month</p>
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

              {/* Q1: Full Name */}
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

              {/* Q2: LinkedIn Profile */}
              <div>
                <label htmlFor="linkedinUrl" className="label">
                  LinkedIn Profile Link{' '}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className={`input-field ${profileError && !formData.linkedinUrl && !formData.alternativeSocialUrl ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : ''}`}
                />
                <p className="text-gray-500 text-sm mt-1">
                  Either LinkedIn or another professional profile link is required.
                </p>
              </div>

              {/* Q3: Other Professional Profile Links */}
              <div>
                <label htmlFor="alternativeSocialUrl" className="label">
                  Other Professional Profile Links{' '}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="alternativeSocialUrl"
                  name="alternativeSocialUrl"
                  value={formData.alternativeSocialUrl}
                  onChange={handleInputChange}
                  placeholder="https://..."
                  className={`input-field ${profileError && !formData.linkedinUrl && !formData.alternativeSocialUrl ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : ''}`}
                />
                <p className="text-gray-500 text-sm mt-1">
                  Portfolio, GitHub, personal website, or other professional profile.
                </p>
                {profileError && (
                  <p className="text-red-500 text-sm mt-1">{profileError}</p>
                )}
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

              {/* Q4: Career Level */}
              <div>
                <label className="label">
                  How would you describe your career level?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {careerLevelOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="radio"
                        name="careerLevel"
                        value={option.value}
                        checked={formData.careerLevel === option.value}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="text-navy-900">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q5: Employment Status */}
              <div>
                <label className="label">
                  What is your current employment status?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {employmentStatusOptions.map((option) => (
                    <div key={option.value}>
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="employmentStatus"
                          value={option.value}
                          checked={formData.employmentStatus === option.value}
                          onChange={handleInputChange}
                          required
                          className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                        />
                        <span className="text-navy-900">{option.label}</span>
                      </label>
                      {/* Sub-question for self-employed */}
                      {option.value === 'self_employed' &&
                        formData.employmentStatus === 'self_employed' && (
                          <div className="ml-11 mt-3 p-4 bg-gray-50 rounded-lg">
                            <label className="label text-sm">
                              Does your business currently hire employees or contract with
                              professionals?
                            </label>
                            <div className="space-y-2 mt-2">
                              {['Yes', 'No'].map((val) => (
                                <label
                                  key={val}
                                  className="flex items-center gap-3 cursor-pointer"
                                >
                                  <input
                                    type="radio"
                                    name="hiresEmployees"
                                    value={val.toLowerCase()}
                                    checked={formData.hiresEmployees === val.toLowerCase()}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                                  />
                                  <span className="text-navy-900 text-sm">{val}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Q6: Technology Areas of Interest */}
              <div>
                <label className="label">
                  What are your technology areas of interest?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <p className="text-gray-500 text-sm mb-3">
                  Select all that apply.
                </p>
                <div className="space-y-3">
                  {technologyOptions.map((tech) => (
                    <label
                      key={tech}
                      className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.technologyInterests.includes(tech)}
                        onChange={() => handleCheckboxArray('technologyInterests', tech)}
                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-navy-900">{tech}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q7: Sectors */}
              <div>
                <label className="label">
                  Which sectors align with your professional experience and interests?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <p className="text-gray-500 text-sm mb-3">
                  Select all that apply.
                </p>
                <div className="space-y-3">
                  {sectorOptions.map((sector) => (
                    <label
                      key={sector.value}
                      className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.sectors.includes(sector.value)}
                        onChange={() => handleCheckboxArray('sectors', sector.value)}
                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-navy-900">{sector.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q8: Languages */}
              <div>
                <label className="label">
                  Which languages do you speak?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <p className="text-gray-500 text-sm mb-3">
                  Select all that apply.
                </p>
                <div className="space-y-3">
                  {languageOptions.map((lang) => (
                    <label
                      key={lang}
                      className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(lang)}
                        onChange={() => handleCheckboxArray('languages', lang)}
                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-navy-900">{lang}</span>
                    </label>
                  ))}
                  {/* Other language option */}
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.languages.includes('Other')}
                      onChange={() => handleCheckboxArray('languages', 'Other')}
                      className="mt-0.5 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <div className="flex-1">
                      <span className="text-navy-900">Other</span>
                      {formData.languages.includes('Other') && (
                        <input
                          type="text"
                          name="otherLanguage"
                          value={formData.otherLanguage}
                          onChange={handleInputChange}
                          placeholder="Please specify"
                          className="input-field mt-2"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Q9: Coaching or Mentoring */}
              <div>
                <label className="label">
                  Are you interested in receiving coaching or mentoring?{' '}
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {[
                    { value: 'coaching', label: 'Coaching' },
                    { value: 'mentoring', label: 'Mentoring' },
                    { value: 'both', label: 'Both' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="radio"
                        name="coachingMentoring"
                        value={option.value}
                        checked={formData.coachingMentoring === option.value}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="text-navy-900">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q10: Willing to lead mentoring circle (Director/Executive only) */}
              {isDirector && (
                <div>
                  <label className="label">
                    Are you willing to lead a mentoring circle?
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                      { value: 'maybe', label: 'Maybe — tell me more' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="radio"
                          name="willingToLeadMentoring"
                          value={option.value}
                          checked={formData.willingToLeadMentoring === option.value}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                        />
                        <span className="text-navy-900">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Q11: Willing to lead Nova mentoring circle (Senior/Manager or Director/Executive) */}
              {isSeniorOrAbove && (
                <div>
                  <label className="label">
                    Are you willing to lead a Nova members (university students) mentoring
                    circle?
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                      { value: 'maybe', label: 'Maybe — tell me more' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="radio"
                          name="willingToLeadNovaMentoring"
                          value={option.value}
                          checked={formData.willingToLeadNovaMentoring === option.value}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                        />
                        <span className="text-navy-900">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

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
