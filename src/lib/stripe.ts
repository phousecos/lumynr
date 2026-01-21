// Stripe server-side configuration
// The @stripe/stripe-js package can be added for client-side Stripe Elements if needed
// npm install @stripe/stripe-js

export const getStripeConfig = () => {
  return {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
    secretKey: process.env.STRIPE_SECRET_KEY || '',
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
  }
}
