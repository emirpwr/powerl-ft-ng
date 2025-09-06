const windows = new Map<string, { count: number; ts: number }>()

export function simpleRateLimit(key: string, limit = 20, windowMs = 60_000) {
  const now = Date.now()
  const rec = windows.get(key)
  if (!rec || now - rec.ts > windowMs) {
    windows.set(key, { count: 1, ts: now })
    return true
  }
  if (rec.count >= limit) return false
  rec.count += 1
  return true
}
