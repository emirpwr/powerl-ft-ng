import { NextRequest, NextResponse } from 'next/server'
import { simpleRateLimit } from '@/lib/rate-limit'

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || 'local'
  if (!simpleRateLimit('fb:' + ip, 5, 60_000))
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })

  const { type, subject, message } = await req.json()
  if (!type || !subject || !message)
    return NextResponse.json({ error: 'type, subject, message required' }, { status: 400 })

  // TODO: DB'ye kaydet + mail gönder
  return NextResponse.json({ ok: true })
}
