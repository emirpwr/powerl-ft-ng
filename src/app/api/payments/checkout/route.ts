import { NextRequest, NextResponse } from 'next/server'
import { createCheckout } from '@/lib/payments'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { provider = 'paytr', amountTl, userId, successUrl = '/panel', cancelUrl = '/odeme' } = body
  if (!amountTl || !userId) return NextResponse.json({ error: 'amountTl and userId required' }, { status: 400 })

  const { redirectUrl } = await createCheckout({ provider, amountTl, userId, successUrl, cancelUrl })
  return NextResponse.json({ redirectUrl })
}
