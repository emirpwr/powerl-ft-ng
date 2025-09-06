'use client'
import { useState } from 'react'

export default function OdemePage() {
  const [loading, setLoading] = useState(false)
  async function pay() {
    setLoading(true)
    const res = await fetch('/api/payments/checkout', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amountTl: 299, userId: 'demo-user', successUrl: '/panel', cancelUrl: '/odeme' })
    })
    const data = await res.json()
    if (data.redirectUrl) window.location.href = data.redirectUrl
    setLoading(false)
  }
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Ödeme</h1>
      <p className="mb-6">Aylık Plan – <strong>299 TL</strong></p>
      <button onClick={pay} disabled={loading} className="px-4 py-2 rounded bg-black text-white">
        {loading ? 'Yönlendiriliyor…' : 'Ödemeye Geç'}
      </button>
    </main>
  )
}
