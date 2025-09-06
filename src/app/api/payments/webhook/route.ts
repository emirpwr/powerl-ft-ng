import { NextRequest, NextResponse } from 'next/server'
import { verifyWebhookSignature } from '@/lib/payments'

export async function POST(req: NextRequest) {
  const raw = await req.text()
  const ok = verifyWebhookSignature(req.headers, raw)
  if (!ok) return NextResponse.json({ error: 'invalid signature' }, { status: 401 })

  // TODO: provider payload parse → Payment & Subscription güncelle
  return NextResponse.json({ received: true })
}
