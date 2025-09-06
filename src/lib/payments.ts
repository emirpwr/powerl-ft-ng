// Basit arayüz; gerçek sağlayıcı SDK'ları ile doldurulacak.
export type Provider = 'iyzico' | 'paytr' | 'craftgate'

export async function createCheckout(opts: {
  provider: Provider
  amountTl: number
  userId: string
  successUrl: string
  cancelUrl: string
}): Promise<{ redirectUrl: string, providerTxId?: string }> {
  // TODO: seçilen sağlayıcı SDK'sını kullan
  // Şimdilik sahte bir URL döndürür.
  return { redirectUrl: opts.successUrl + '?mockPaid=1' }
}

export function verifyWebhookSignature(headers: Headers, rawBody: string): boolean {
  // TODO: sağlayıcıya göre imza doğrulaması
  return true
}
