import { NextRequest, NextResponse } from 'next/server'

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
}
