'use client'
import { useState } from 'react'

export default function DestekPage() {
  const [msg, setMsg] = useState('')
  async function send(e: any) {
    e.preventDefault()
    await fetch('/api/feedback', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'öneri', subject: 'Genel', message: msg }) })
    setMsg('')
    alert('Gönderildi')
  }
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Öneri & Şikayet</h1>
      <form onSubmit={send} className="space-y-4">
        <textarea value={msg} onChange={e=>setMsg(e.target.value)} className="border rounded w-full p-2 h-32" placeholder="Mesajın"/>
        <button className="px-4 py-2 rounded bg-black text-white">Gönder</button>
      </form>
    </main>
  )
}
