import { NextRequest, NextResponse } from 'next/server'

<<<<<<< claude/add-membership-levels-O431d
// Legacy endpoint - redirects to the new /api/apply route
export async function POST(request: NextRequest) {
  const data = await request.json()

  // Forward to the new apply endpoint with default membership level
  const response = await fetch(new URL('/api/apply', request.url), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      membershipLevel: data.membershipLevel || 'luminary',
    }),
  })

  const result = await response.json()
  return NextResponse.json(result, { status: response.status })
=======
const VELORUM_API_URL = process.env.VELORUM_API_URL || 'https://api.velorum.io/v1'
const VELORUM_API_KEY = process.env.VELORUM_API_KEY || ''

type InvitationRequest = {
  firstName: string
  lastName: string
  email: string
  linkedinUrl?: string
  alternativeSocialUrl?: string
  identifiesAsBlackWoman: boolean
  careerStage: string
  itArea: string
  itAreaOther?: string
  careerGoal: string
  communityValue?: string[]
  communityValueOther?: string
  willingToContribute: string
  referralCode?: string
  heardAbout?: string
  anythingElse?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: InvitationRequest = await request.json()

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.careerStage || !data.itArea || !data.careerGoal || !data.willingToContribute) {
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

    // In production, this would call the Velorum API
    if (!VELORUM_API_KEY) {
      // Demo mode - simulate successful submission
      console.log('Demo mode: Invitation request received', {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        careerStage: data.careerStage,
        itArea: data.itArea,
        careerGoal: data.careerGoal,
        willingToContribute: data.willingToContribute,
      })

      return NextResponse.json({
        success: true,
        message: 'Request received successfully',
      })
    }

    // Production: Call Velorum API
    const response = await fetch(`${VELORUM_API_URL}/invitations/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${VELORUM_API_KEY}`,
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        linkedinUrl: data.linkedinUrl || null,
        alternativeSocialUrl: data.alternativeSocialUrl || null,
        selfIdentification: data.identifiesAsBlackWoman,
        careerStage: data.careerStage,
        itArea: data.itArea,
        itAreaOther: data.itAreaOther || null,
        careerGoal: data.careerGoal,
        communityValue: data.communityValue || [],
        communityValueOther: data.communityValueOther || null,
        willingToContribute: data.willingToContribute,
        referralCode: data.referralCode || null,
        referralSource: data.heardAbout || null,
        additionalInfo: data.anythingElse || null,
      }),
    })

    if (!response.ok) {
      if (response.status === 409) {
        return NextResponse.json(
          { success: false, message: 'An invitation request already exists for this email.' },
          { status: 409 }
        )
      }
      throw new Error('Velorum API error')
    }

    return NextResponse.json({
      success: true,
      message: 'Request received successfully',
    })
  } catch (error) {
    console.error('Invitation request error:', error)
    return NextResponse.json(
      { success: false, message: 'Unable to process request. Please try again.' },
      { status: 500 }
    )
  }
>>>>>>> main
}
