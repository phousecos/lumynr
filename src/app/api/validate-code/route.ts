import { NextRequest, NextResponse } from 'next/server'

const VELORUM_API_URL = process.env.VELORUM_API_URL || 'https://api.velorum.io/v1'
const VELORUM_API_KEY = process.env.VELORUM_API_KEY || ''

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json(
        { valid: false, message: 'No code provided' },
        { status: 400 }
      )
    }

    // In production, this would call the Velorum API
    // For now, we'll simulate validation
    if (!VELORUM_API_KEY) {
      // Demo mode - simulate different code types
      const demoCode = code.toUpperCase()

      if (demoCode.startsWith('FOUND')) {
        return NextResponse.json({
          valid: true,
          type: 'founding',
          discount: '3 months free',
          message: 'Founding member code accepted',
        })
      } else if (demoCode.startsWith('REF')) {
        return NextResponse.json({
          valid: true,
          type: 'referral',
          discount: '1 month free',
          message: 'Referral code accepted',
        })
      } else if (demoCode.length >= 12) {
        return NextResponse.json({
          valid: true,
          type: 'standard',
          message: 'Invitation code accepted',
        })
      } else {
        return NextResponse.json({
          valid: false,
          message: 'Invalid code format',
        })
      }
    }

    // Production: Call Velorum API
    const response = await fetch(`${VELORUM_API_URL}/codes/validate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${VELORUM_API_KEY}`,
      },
      body: JSON.stringify({ code }),
    })

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({
          valid: false,
          message: 'This code is invalid or has already been used.',
        })
      }
      throw new Error('Velorum API error')
    }

    const data = await response.json()

    return NextResponse.json({
      valid: true,
      type: data.codeType,
      discount: data.discount,
      message: 'Code accepted',
    })
  } catch (error) {
    console.error('Code validation error:', error)
    return NextResponse.json(
      { valid: false, message: 'Unable to validate code. Please try again.' },
      { status: 500 }
    )
  }
}
