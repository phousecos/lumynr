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
  careerStage: string
  university?: string
  heardAbout?: string
  anythingElse?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ApplicationData = await request.json()

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.careerStage) {
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

    // Demo mode - when Airtable is not configured
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.log('Demo mode: Membership application received', {
        membershipLevel: data.membershipLevel,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        careerStage: data.careerStage,
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
              'Career Stage': data.careerStage,
              'University': data.university || '',
              'How Did You Hear': data.heardAbout || '',
              'Additional Info': data.anythingElse || '',
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
