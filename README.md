# SELLR.ai

AI Sales Coach for Whop sellers. Built with Next.js 14 + Supabase Auth + Claude AI.
UI/UX inspired by MindCore — glassmorphism, dark theme, mobile-first.

## Stack
- Next.js 14 (App Router)
- Supabase (Google OAuth via PKCE)
- Anthropic Claude claude-opus-4-6
- Tailwind CSS + glassmorphism

## Deploy to Vercel

### 1. Supabase setup
1. Go to Supabase Dashboard → SQL Editor
2. Run `supabase/migrations/001_schema.sql`
3. Go to Authentication → Providers → Google → Enable
4. Add your Google Client ID + Secret

### 2. Environment Variables (Vercel)
```
NEXT_PUBLIC_SUPABASE_URL          = https://ppawxmsqwhcpsllbbdai.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY     = eyJ... (from Supabase → Settings → API → anon key)
ANTHROPIC_API_KEY                 = sk-ant-api03-SSFnr3...
NEXT_PUBLIC_APP_URL               = https://your-app.vercel.app
```

### 3. Google OAuth redirect
In Supabase → Authentication → URL Configuration → Redirect URLs, add:
```
https://your-app.vercel.app/auth/callback
```

### 4. Push to GitHub → Import to Vercel → Deploy

## Local development
```bash
npm install
cp .env.example .env.local
# Fill in env vars
npm run dev
```
