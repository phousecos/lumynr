import { NextRequest, NextResponse } from 'next/server'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || ''
const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID || ''
const STRIPE_FOUNDING_COUPON_ID = process.env.STRIPE_FOUNDING_COUPON_ID || ''
const STRIPE_REFERRAL_COUPON_ID = process.env.STRIPE_REFERRAL_COUPON_ID || ''
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const MEMBER_PLATFORM_URL = process.env.MEMBER_PLATFORM_URL || 'https://members.lumynr.com'

export async function POST(request: NextRequest) {
  try {
    const { code, codeType } = await request.json()

    if (!code) {
      return NextResponse.json(
        { error: 'Invitation code required' },
        { status: 400 }
      )
    }

    // In demo mode without Stripe, return a placeholder
    if (!STRIPE_SECRET_KEY) {
      console.log('Demo mode: Checkout session would be created', {
        code,
        codeType,
      })

      return NextResponse.json({
        url: `${SITE_URL}/membership?demo=true&code=${code}`,
        message: 'Demo mode - Stripe not configured',
      })
    }

    // Determine which coupon to apply based on code type
    let couponId: string | undefined
    if (codeType === 'founding' && STRIPE_FOUNDING_COUPON_ID) {
      couponId = STRIPE_FOUNDING_COUPON_ID
    } else if (codeType === 'referral' && STRIPE_REFERRAL_COUPON_ID) {
      couponId = STRIPE_REFERRAL_COUPON_ID
    }

    // Create Stripe Checkout Session
    const stripe = require('stripe')(STRIPE_SECRET_KEY)

    const sessionParams: any = {
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${MEMBER_PLATFORM_URL}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/membership?canceled=true`,
      metadata: {
        invitationCode: code,
        codeType: codeType,
      },
      subscription_data: {
        metadata: {
          invitationCode: code,
          codeType: codeType,
        },
      },
    }

    // Apply coupon if applicable
    if (couponId) {
      sessionParams.discounts = [{ coupon: couponId }]
    }

    const session = await stripe.checkout.sessions.create(sessionParams)

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout session error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
