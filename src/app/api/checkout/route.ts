import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-02-25.clover',
})

// Map plan + billing to Stripe Price IDs
// These should be created in your Stripe Dashboard and added to env vars
const PRICE_MAP: Record<string, string> = {
  'nova-monthly': process.env.STRIPE_PRICE_NOVA_MONTHLY || '',
  'nova-annual': process.env.STRIPE_PRICE_NOVA_ANNUAL || '',
  'luminary-monthly': process.env.STRIPE_PRICE_LUMINARY_MONTHLY || '',
  'luminary-annual': process.env.STRIPE_PRICE_LUMINARY_ANNUAL || '',
}

export async function POST(request: NextRequest) {
  try {
    const { plan, billing, email } = await request.json()

    if (!plan || !billing) {
      return NextResponse.json(
        { error: 'Missing plan or billing parameter' },
        { status: 400 }
      )
    }

    const priceKey = `${plan}-${billing}`
    const priceId = PRICE_MAP[priceKey]

    if (!priceId) {
      return NextResponse.json(
        { error: `No price configured for ${priceKey}. Set STRIPE_PRICE_${plan.toUpperCase()}_${billing.toUpperCase()} in your environment.` },
        { status: 400 }
      )
    }

    const origin = request.headers.get('origin') || 'http://localhost:3000'

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: {
        trial_period_days: 30,
      },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout?plan=${plan}&billing=${billing}`,
      allow_promotion_codes: true,
    }

    if (email) {
      sessionParams.customer_email = email
    }

    const session = await stripe.checkout.sessions.create(sessionParams)

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error('Stripe checkout session error:', err)
    return NextResponse.json(
      { error: err.message || 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
