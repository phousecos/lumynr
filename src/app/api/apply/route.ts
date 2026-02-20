import { NextRequest, NextResponse } from 'next/server'

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || ''
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || ''
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Membership Applications'

type ApplicationData = {
  membershipLevel: 'luminary' | 'nova'
  firstName: string
  lastName: string
  email: string
  linkedinUrl?: string
  alternativeSocialUrl?: string
  identifiesAsBlackWoman: boolean
  careerLevel: string
  employmentStatus: string
  hiresEmployees?: string
  technologyInterests: string[]
  sectors: string[]
  languages: string[]
  otherLanguage?: string
  coachingMentoring: string
  willingToLeadMentoring?: string
  willingToLeadNovaMentoring?: string
  university?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ApplicationData = await request.json()

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.careerLevel || !data.employmentStatus || !data.coachingMentoring) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!data.identifiesAsBlackWoman) {
      return NextResponse.json(
        { success: false, message: 'Self-identification is required' },
        { status: 400 }
      )
    }

    // Validate at least one profile link
    if (!data.linkedinUrl && !data.alternativeSocialUrl) {
      return NextResponse.json(
        { success: false, message: 'Please provide either a LinkedIn profile or another professional profile link' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate .edu email for Nova membership
    if (data.membershipLevel === 'nova') {
      if (!data.email.toLowerCase().endsWith('.edu')) {
        return NextResponse.json(
          { success: false, message: 'Nova membership requires a valid .edu email address' },
          { status: 400 }
        )
      }
      if (!data.university) {
        return NextResponse.json(
          { success: false, message: 'University name is required for Nova membership' },
          { status: 400 }
        )
      }
    }

    // Validate membership level
    if (!['luminary', 'nova'].includes(data.membershipLevel)) {
      return NextResponse.json(
        { success: false, message: 'Invalid membership level' },
        { status: 400 }
      )
    }

    // Validate checkbox selections
    if (!data.technologyInterests || data.technologyInterests.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please select at least one technology area of interest' },
        { status: 400 }
      )
    }

    if (!data.sectors || data.sectors.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please select at least one sector' },
        { status: 400 }
      )
    }

    if (!data.languages || data.languages.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please select at least one language' },
        { status: 400 }
      )
    }

    // Build languages string (include other language if specified)
    const languagesList = [...data.languages]
    if (languagesList.includes('Other') && data.otherLanguage) {
      const idx = languagesList.indexOf('Other')
      languagesList[idx] = `Other: ${data.otherLanguage}`
    }

    // Demo mode - when Airtable is not configured
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.log('Demo mode: Membership application received', {
        membershipLevel: data.membershipLevel,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        careerLevel: data.careerLevel,
        employmentStatus: data.employmentStatus,
        hiresEmployees: data.hiresEmployees || 'N/A',
        technologyInterests: data.technologyInterests,
        sectors: data.sectors,
        languages: languagesList,
        coachingMentoring: data.coachingMentoring,
        willingToLeadMentoring: data.willingToLeadMentoring || 'N/A',
        willingToLeadNovaMentoring: data.willingToLeadNovaMentoring || 'N/A',
        university: data.university || 'N/A',
      })

      return NextResponse.json({
        success: true,
        message: 'Application received successfully',
      })
    }

    // Production: Send to Airtable
    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`

    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              'Membership Level': data.membershipLevel === 'nova' ? 'Nova' : 'Luminary',
              'First Name': data.firstName,
              'Last Name': data.lastName,
              'Email': data.email,
              'LinkedIn URL': data.linkedinUrl || '',
              'Alternative Social URL': data.alternativeSocialUrl || '',
              'Identifies as Black Woman': data.identifiesAsBlackWoman,
              'Career Level': data.careerLevel,
              'Employment Status': data.employmentStatus,
              'Hires Employees': data.hiresEmployees || '',
              'Technology Interests': data.technologyInterests.join(', '),
              'Sectors': data.sectors.join(', '),
              'Languages': languagesList.join(', '),
              'Coaching or Mentoring': data.coachingMentoring,
              'Willing to Lead Mentoring': data.willingToLeadMentoring || '',
              'Willing to Lead Nova Mentoring': data.willingToLeadNovaMentoring || '',
              'University': data.university || '',
              'Application Date': new Date().toISOString(),
              'Status': 'Pending Review',
            },
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Airtable API error:', response.status, errorData)

      if (response.status === 422) {
        return NextResponse.json(
          { success: false, message: 'There was an issue with your application data. Please check your entries and try again.' },
          { status: 422 }
        )
      }

      throw new Error('Airtable API error')
    }

    return NextResponse.json({
      success: true,
      message: 'Application received successfully',
    })
  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Unable to process your application. Please try again.' },
      { status: 500 }
    )
  }
}
