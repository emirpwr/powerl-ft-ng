import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const COOKIE = 'session_token'
const SECRET = process.env.AUTH_SECRET!

export function setSession(userId: string) {
  const token = jwt.sign({ uid: userId }, SECRET, { expiresIn: '30d' })
  cookies().set(COOKIE, token, { httpOnly: true, secure: true, sameSite: 'lax', maxAge: 60*60*24*30 })
}

export function getSession(): { uid: string } | null {
  const token = cookies().get(COOKIE)?.value
  if (!token) return null
  try { return jwt.verify(token, SECRET) as any } catch { return null }
}

export function clearSession() {
  cookies().set(COOKIE, '', { httpOnly: true, secure: true, maxAge: 0 })
}
