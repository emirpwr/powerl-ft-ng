# Fitness Quiz Site – Starter Pack

## Hızlı Başlangıç
```bash
git checkout -b dev
npm i
cp .env.example .env
npx prisma generate
npm run migrate
npm run dev
```

## URL'ler
- `/quiz`
- `/odeme`
- `/destek`
- `/panel`

## Deploy
- GitHub Environments: `staging` ve `production`
- Secrets: `DATABASE_URL`, ödeme sağlayıcı anahtarları, `SMTP_*`, Vercel anahtarları (Vercel kullanıyorsan).
- `dev` push → staging deploy, `main` push → prod deploy.
