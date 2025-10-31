# Braggly - AI Digital Marketing & Automation Agency Website

**Your AI Concierge for Digital Marketing Excellence**

A modern, professional website built with Next.js 14, TypeScript, and Tailwind CSS for Braggly, an AI-powered digital marketing and automation agency targeting small businesses and startups.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Built-in SEO with proper meta tags, semantic HTML, and sitemap
- **Contact Form**: Integrated with Resend for email automation
- **Professional Design**: Clean, trust-building design with blue color scheme
- **Performance Optimized**: Fast loading times with Next.js optimization
- **Accessible**: WCAG 2.1 Level AA compliant

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Set up environment variables**:
   Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables:

```env
# Resend API Key (get from https://resend.com)
RESEND_API_KEY=your_resend_api_key_here

# Email addresses
EMAIL_TO=support@braggly.com
EMAIL_FROM=website@braggly.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://www.braggly.com
```

3. **Run the development server**:

```bash
npm run dev
```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Setup (Resend)

The contact form uses [Resend](https://resend.com) for email delivery.

### Steps to Set Up:

1. **Create a Resend account**: Visit [resend.com](https://resend.com)
2. **Get your API key**: Dashboard → API Keys → Create API Key
3. **Add to `.env.local`**: `RESEND_API_KEY=re_xxxxx`
4. **Verify domain** (for production):
   - Add your domain (braggly.com) in Resend
   - Add DNS records (SPF, DKIM)
   - Verify ownership

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:

```bash
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy on Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

### Custom Domain Setup (braggly.com):

1. **In Vercel**:
   - Go to Project Settings → Domains
   - Add `braggly.com` and `www.braggly.com`

2. **In your DNS provider**:
   - Add A record: `@` → `76.76.21.21`
   - Add CNAME: `www` → `cname.vercel-dns.com`

## 📋 Pages Included

- **Homepage**: Hero, Services, How It Works, Benefits, Testimonials, Stats, CTA
- **Services**: Detailed breakdown of all 7 AI services
- **About**: Mission, values, founder info
- **Pricing**: 3 tiers (Starter, Growth, Scale)
- **Contact**: Form with Resend integration
- **Blog**: Full-featured blog powered by Sanity CMS
  - Blog listing with featured posts
  - Individual post pages with rich content
  - Author profiles and categories
  - SEO optimized
- **Privacy Policy**: Complete privacy policy
- **Terms of Service**: Complete terms

## 📝 Blog (Sanity CMS)

This website includes a **complete, production-ready blog system** powered by Sanity CMS!

**📚 Documentation:**

- **[BLOG_SUMMARY.md](./BLOG_SUMMARY.md)** - Quick overview and what was built
- **[SANITY_SETUP.md](./SANITY_SETUP.md)** - Complete setup guide

**⚡ Quick Start:**

```bash
# 1. Initialize Sanity
npx sanity init
# Create project "Braggly Blog", dataset "production"

# 2. Add Project ID to .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# 3. Run Sanity Studio
npm run sanity
# Opens at http://localhost:3333

# 4. Create content and publish!
```

**✨ Features:**

- Rich text editor with images and code blocks
- Author management with bios and photos
- Category system for organizing posts
- Featured posts section
- SEO optimization with meta tags
- Automatic read time calculation
- Related posts suggestions
- Responsive blog cards

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Resend Docs](https://resend.com/docs)
- [Sanity CMS Docs](https://www.sanity.io/docs)
- [PRD.md](./PRD.md) - Full product requirements document
- [SANITY_SETUP.md](./SANITY_SETUP.md) - Blog setup guide

## 📞 Support

For questions or issues:

- Email: support@braggly.com

---

**Built with ❤️ for small businesses and startups**
