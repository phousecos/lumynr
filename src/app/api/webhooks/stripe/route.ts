import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || ''
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || ''
const VELORUM_API_URL = process.env.VELORUM_API_URL || 'https://api.velorum.io/v1'
const VELORUM_API_KEY = process.env.VELORUM_API_KEY || ''

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const headersList = headers()
    const signature = headersList.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      )
    }

    // In demo mode without Stripe, just log and return success
    if (!STRIPE_SECRET_KEY || !STRIPE_WEBHOOK_SECRET) {
      console.log('Demo mode: Webhook received but Stripe not configured')
      return NextResponse.json({ received: true })
    }

    const stripe = require('stripe')(STRIPE_SECRET_KEY)

    let event
    try {
      event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET)
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message)
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    // Handle specific events
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        const { invitationCode, codeType } = session.metadata || {}

        console.log('Checkout completed:', {
          sessionId: session.id,
          customerEmail: session.customer_email,
          invitationCode,
          codeType,
        })

        // Mark code as redeemed in Velorum
        if (invitationCode && VELORUM_API_KEY) {
          try {
            await fetch(`${VELORUM_API_URL}/codes/redeem`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${VELORUM_API_KEY}`,
              },
              body: JSON.stringify({
                code: invitationCode,
                stripeSessionId: session.id,
                customerEmail: session.customer_email,
              }),
            })
          } catch (err) {
            console.error('Failed to mark code as redeemed:', err)
          }
        }

        break
      }

      case 'customer.subscription.created': {
        const subscription = event.data.object
        console.log('Subscription created:', {
          subscriptionId: subscription.id,
          customerId: subscription.customer,
          status: subscription.status,
        })
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        console.log('Subscription canceled:', {
          subscriptionId: subscription.id,
          customerId: subscription.customer,
        })

        // Optionally notify Velorum about cancellation
        if (VELORUM_API_KEY) {
          try {
            await fetch(`${VELORUM_API_URL}/members/churn`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${VELORUM_API_KEY}`,
              },
              body: JSON.stringify({
                stripeCustomerId: subscription.customer,
                subscriptionId: subscription.id,
              }),
            })
          } catch (err) {
            console.error('Failed to notify Velorum of churn:', err)
          }
        }

        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        console.log('Payment failed:', {
          invoiceId: invoice.id,
          customerId: invoice.customer,
        })
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}
