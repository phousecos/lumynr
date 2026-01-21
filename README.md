# Lumynr Marketing Website

The marketing website for Lumynr, an invitation-only membership community for Black women in IT.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Payments:** Stripe
- **Deployment:** Vercel
- **Invitation Service:** Velorum API

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the example environment file and fill in your values:

```bash
cp .env.local.example .env.local
```

Required environment variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe public key |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `STRIPE_PRICE_ID` | Price ID for monthly membership ($9.95) |
| `STRIPE_FOUNDING_COUPON_ID` | Coupon ID for 3-month free trial |
| `STRIPE_REFERRAL_COUPON_ID` | Coupon ID for 1-month referral bonus |
| `VELORUM_API_URL` | Velorum invitation service URL |
| `VELORUM_API_KEY` | Velorum API key |
| `MEMBER_PLATFORM_URL` | Third-party member platform URL |
| `NEXT_PUBLIC_SITE_URL` | Your site URL (for redirects) |

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Demo Mode

If environment variables are not configured, the site runs in demo mode:

- **Code Validation:** Codes starting with `FOUND` are treated as founding member codes (3 months free). Codes starting with `REF` are treated as referral codes (1 month free). Any 12+ character code is accepted as a standard invitation.
- **Form Submissions:** Logged to console but not sent to any API.
- **Checkout:** Redirects to a demo URL instead of Stripe.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── about/
│   │   └── page.tsx                # About / Founder story
│   ├── membership/
│   │   └── page.tsx                # Membership & checkout
│   ├── request-invitation/
│   │   └── page.tsx                # Invitation request form
│   ├── terms/
│   │   └── page.tsx                # Terms of Service
│   ├── privacy/
│   │   └── page.tsx                # Privacy Policy
│   └── api/
│       ├── validate-code/
│       │   └── route.ts            # Code validation endpoint
│       ├── request-invitation/
│       │   └── route.ts            # Invitation request endpoint
│       ├── create-checkout-session/
│       │   └── route.ts            # Stripe checkout creation
│       └── webhooks/
│           └── stripe/
│               └── route.ts        # Stripe webhook handler
├── components/
│   ├── Header.tsx                  # Site header
│   └── Footer.tsx                  # Site footer
├── lib/
│   └── stripe.ts                   # Stripe client helper
└── public/
    └── images/
        ├── logo-full.png           # Full logo
        ├── logo-icon.png           # Logo icon
        └── founder.jpg             # Founder photo
```

## Deployment to Vercel

1. Push to your GitHub repository
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Stripe Webhook Setup

After deployment, configure your Stripe webhook:

1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://lumynr.com/api/webhooks/stripe`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
4. Copy the signing secret to `STRIPE_WEBHOOK_SECRET`

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Amber) | `#F59E0B` | CTAs, highlights, accents |
| Secondary (Orange) | `#F97316` | Gradients, hover states |
| Dark Navy | `#091929` | Backgrounds, text |

## Pages

- `/` - Landing page with hero, features, founder intro, how it works
- `/about` - Full founder story, mission & vision
- `/membership` - Benefits, pricing, invitation code entry, checkout
- `/request-invitation` - Invitation request form
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Proprietary - Lumynr © 2026
