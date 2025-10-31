# Quick Setup Guide for Braggly Website

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Dependencies

```bash
cd braggly-website
npm install
```

### Step 2: Configure Email

1. Go to [resend.com](https://resend.com) and create a free account
2. Get your API key from the dashboard
3. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Edit `.env.local` and add your Resend API key:
   ```env
   RESEND_API_KEY=re_your_key_here
   ```

### Step 3: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) - Your website is live!

## 📝 Next Steps

### 1. Test the Contact Form

- Navigate to `/contact`
- Fill out and submit the form
- Check your email (support@braggly.com) for the notification
- Check the submitted email for the auto-reply

### 2. Customize Content

- **Add Your Logo**: Replace placeholder in `components/layout/Header.tsx` and `Footer.tsx`
- **Update Testimonials**: Edit `components/sections/Testimonials.tsx` with real client quotes
- **Adjust Pricing**: Modify plans in `app/pricing/page.tsx`
- **Update About**: Add your photo and bio in `app/about/page.tsx`

### 3. Set Up Social Media Links

Update social media URLs in `components/layout/Footer.tsx`:

- LinkedIn: Add your company page URL
- Facebook: Add your business page URL
- Instagram: Add your profile URL
- TikTok: Add your account URL

### 4. Deploy to Production

#### Option A: Deploy to Vercel (Easiest)

1. Push your code to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables:
   - `RESEND_API_KEY`
   - `EMAIL_TO=support@braggly.com`
   - `EMAIL_FROM=website@braggly.com`
   - `NEXT_PUBLIC_SITE_URL=https://www.braggly.com`
6. Click "Deploy"

#### Option B: Configure Custom Domain (braggly.com)

1. In Vercel, go to your project → Settings → Domains
2. Add `braggly.com` and `www.braggly.com`
3. Vercel will provide DNS records
4. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Add the A record for `@` (root domain)
   - Add the CNAME record for `www`
5. Wait for DNS propagation (up to 48 hours, usually < 1 hour)

#### Configure Resend for Production

1. In Resend dashboard, add your domain (braggly.com)
2. Add the provided DNS records (SPF, DKIM, DMARC)
3. Verify the domain
4. Update `EMAIL_FROM` in production env vars to use your domain:
   ```
   EMAIL_FROM=noreply@braggly.com
   ```

### 5. Add Google Analytics (Optional)

1. Create a Google Analytics 4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local` and Vercel:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Add Google Analytics script to `app/layout.tsx`:
   ```tsx
   {
     process.env.NEXT_PUBLIC_GA_ID && (
       <>
         <script
           async
           src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
         ></script>
         <script
           dangerouslySetInnerHTML={{
             __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
         `,
           }}
         />
       </>
     );
   }
   ```

## ✅ Pre-Launch Checklist

Before going live, make sure:

- [ ] Resend API key is configured
- [ ] Contact form works (test it!)
- [ ] All placeholder content is replaced
- [ ] Your logo is added
- [ ] Social media links are correct
- [ ] Privacy Policy is reviewed
- [ ] Terms of Service is reviewed
- [ ] Domain is configured
- [ ] SSL certificate is active (automatic with Vercel)
- [ ] Google Analytics is set up (optional)
- [ ] Test on mobile devices
- [ ] Test all navigation links
- [ ] Check all pages load correctly

## 🎨 Customization Tips

### Change Brand Colors

Edit `app/globals.css`:

```css
:root {
  --primary: #0f52ba; /* Your primary color */
  --primary-dark: #1e40af; /* Darker shade */
  --primary-light: #3b82f6; /* Lighter shade */
}
```

### Add Your Logo

1. Save your logo to `public/logo/braggly-logo.svg` (or .png)
2. In `components/layout/Header.tsx`, replace the placeholder:
   ```tsx
   <Image src="/logo/braggly-logo.svg" alt="Braggly" width={120} height={40} />
   ```

### Update Meta Tags for SEO

Edit `app/layout.tsx` metadata object with your specific details.

## 🐛 Troubleshooting

### Contact Form Not Working

**Error: "Failed to send email"**

- Check `.env.local` has correct Resend API key
- Verify API key in Resend dashboard
- Check browser console for specific errors
- Make sure `EMAIL_TO` and `EMAIL_FROM` are valid email addresses

### Build Errors

**Type errors:**

```bash
npm run type-check
```

**Clear cache and rebuild:**

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styling Not Updating

- Stop dev server (Ctrl+C)
- Delete `.next` folder
- Restart: `npm run dev`

## 📞 Need Help?

- Review the [PRD.md](./PRD.md) for detailed specifications
- Check [README.md](./README.md) for full documentation
- Email: support@braggly.com

## 🎉 You're All Set!

Your professional AI marketing agency website is ready to go. Start attracting clients and automating your lead generation!

**Next Steps:**

1. Share your website URL on social media
2. Add it to your email signature
3. Submit to Google Search Console
4. Start creating blog content (see PRD.md for blog setup)
5. Monitor analytics and conversions

---

Good luck with Braggly! 🚀
