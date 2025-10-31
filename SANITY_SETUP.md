# Sanity CMS Setup Guide

## 🚀 Quick Setup (5 Minutes)

**TL;DR - Get your blog running:**

```bash
# 1. Initialize Sanity project
cd braggly-website
npx sanity init
# Follow prompts: create project "Braggly Blog", dataset "production"

# 2. Add Project ID to .env.local
echo "NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id" >> .env.local
echo "NEXT_PUBLIC_SANITY_DATASET=production" >> .env.local

# 3. Run Sanity Studio locally
npm run sanity
# Opens at http://localhost:3333

# 4. Create content and start blogging!
```

## Overview

Your Braggly website now has a full-featured blog powered by Sanity CMS! This gives you a professional content management system with real-time editing, image optimization, and a great editing experience.

## Features Implemented

✅ **Complete Blog System**

- Blog listing page with featured posts
- Individual blog post pages with dynamic routing
- Rich text editor with images, code blocks, and formatting
- Author management with bios and photos
- Category system for organizing posts
- Automatic read time calculation
- SEO optimization with meta tags
- Related posts suggestions

✅ **Sanity Studio**

- Custom schemas for posts, authors, and categories
- Image upload and optimization
- Real-time preview
- Portable Text editor
- Code syntax highlighting

## Quick Start

### Step 1: Initialize Sanity Project

First, initialize your Sanity project from your project directory:

```bash
cd braggly-website
npx sanity init
```

**Follow the prompts:**

- Login or create account (opens browser)
- Create new project? **Yes**
- Project name: **Braggly Blog**
- Use default dataset configuration? **Yes**
- Dataset name: **production**
- Output path: Press Enter (uses current directory)
- Project template: **Clean project with no predefined schemas** (we already have schemas!)

This will create your project in Sanity Cloud and give you a **Project ID**.

### Step 2: Configure Environment Variables

Add the Project ID you just received to your `.env.local` file:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

### Step 3: Deploy Sanity Studio

Now deploy your Sanity Studio so you can access it from anywhere:

```bash
npx sanity deploy
```

You'll be asked to choose a studio hostname (e.g., `braggly-blog`).

Your studio will be available at: `https://braggly-blog.sanity.studio`

**Alternative - Run Studio Locally:**

If you prefer to run the studio locally for now:

```bash
npm run sanity
```

This opens the studio at `http://localhost:3333`

### Step 4: Create Your First Content

1. **Create an Author:**
   - Go to your Sanity Studio
   - Click "Author" in the sidebar
   - Click "Create new author"
   - Add name, photo, and bio
   - Click "Publish"

2. **Create a Category:**
   - Click "Category" in the sidebar
   - Add categories like:
     - "AI Marketing"
     - "Automation"
     - "SEO"
     - "Social Media"
   - Click "Publish"

3. **Create Your First Blog Post:**
   - Click "Blog Post" in the sidebar
   - Add title
   - Generate slug (click "Generate")
   - Select author
   - Upload main image
   - Select categories
   - Write excerpt (shown in blog cards)
   - Write your content using the rich text editor
   - Toggle "Featured Post" if you want it highlighted
   - Click "Publish"

## Content Editor Features

### Rich Text Editor

The blog editor supports:

- **Headings** (H1-H4)
- **Bold, italic, and code** formatting
- **Links** with custom URLs
- **Lists** (bulleted and numbered)
- **Blockquotes**
- **Images** with captions
- **Code blocks** with syntax highlighting

### Adding Images

1. Click the image icon in the editor
2. Upload or select an image
3. Add alternative text for SEO
4. Images are automatically optimized

### Code Blocks

1. Click "+" button in editor
2. Select "Code"
3. Choose language (JavaScript, Python, HTML, etc.)
4. Paste your code

## Blog Structure

### Post Schema

Each blog post includes:

- **Title** (required)
- **Slug** (auto-generated from title)
- **Author** (reference to author)
- **Main Image** (with alt text)
- **Categories** (multiple allowed)
- **Published Date** (auto-set to now)
- **Excerpt** (200 char max, for previews)
- **Body** (rich text content)
- **Featured** (boolean, shows in featured section)

### Author Schema

- **Name** (required)
- **Slug** (auto-generated)
- **Image** (profile photo)
- **Bio** (text, shown on posts)

### Category Schema

- **Title** (required)
- **Slug** (auto-generated)
- **Description** (text)

## Frontend Pages

### Blog Listing (`/blog`)

- Displays all published posts
- Featured post section (if any posts marked as featured)
- Grid layout for all posts
- Falls back to "coming soon" if no posts exist
- Revalidates every 60 seconds (ISR)

### Individual Post (`/blog/[slug]`)

- Full post content with rich formatting
- Featured image
- Author info with bio
- Read time calculation
- Related posts at the bottom
- Social sharing meta tags

## Customization

### Styling

Blog posts use Portable Text components located at:
`components/blog/PortableTextComponents.tsx`

You can customize:

- Heading styles
- Paragraph spacing
- Code block appearance
- Image layouts
- Link colors

### Blog Card

The blog preview cards can be customized at:
`components/blog/BlogCard.tsx`

Includes:

- Featured image
- Title
- Excerpt
- Categories
- Author info
- Read time
- Publish date

## Best Practices

### SEO

- **Write descriptive titles** (50-60 characters)
- **Add alt text** to all images
- **Write excerpts** for better previews
- **Use categories** to organize content
- **Include keywords** naturally in content

### Content

- **Aim for 1000+ words** for in-depth posts
- **Use headings** to break up content
- **Add images** every 2-3 paragraphs
- **Include code examples** when relevant
- **Link to related content**

### Publishing

- **Set featured posts** strategically
- **Publish consistently** (weekly is ideal)
- **Update old posts** to keep them relevant
- **Use categories** to help readers find content

## Sample Blog Post Ideas

Based on your PRD, here are great first posts:

1. **"10 AI Marketing Tools Every Small Business Should Use in 2025"**
   - Review popular AI tools
   - Include pros/cons
   - Add pricing information

2. **"How to Automate Your Social Media in 30 Minutes a Week"**
   - Step-by-step tutorial
   - Include screenshots
   - Add tool recommendations

3. **"The Ultimate Guide to Chatbots for Small Business"**
   - What are chatbots?
   - Use cases
   - Implementation guide

4. **"5 Email Automation Workflows That Convert"**
   - Welcome sequence
   - Cart abandonment
   - Lead nurturing
   - Include examples

5. **"Why Small Businesses Need AI: A Practical Guide"**
   - Benefits of AI
   - Common objections
   - Getting started

6. **"Calculate Your ROI: The True Cost of Manual Marketing"**
   - Cost comparison
   - Time savings
   - ROI calculator

## Troubleshooting

### "No posts showing on the blog"

- Make sure you've published posts (not just drafted)
- Check your Sanity Project ID is correct in `.env.local`
- Verify the dataset name matches ("production")
- Wait 60 seconds for revalidation or clear Next.js cache

### "Images not loading"

- Ensure images are uploaded in Sanity
- Check alt text is added
- Verify Sanity Project ID is correct
- Check image URLs in browser console

### "Build errors"

Make sure all dependencies are installed:

```bash
npm install
```

### "Can't access Sanity Studio"

- Run `npx sanity deploy` to deploy your studio
- Or run locally with `npx sanity dev`

## Local Development

To run Sanity Studio locally:

```bash
npx sanity dev
```

This opens the studio at `http://localhost:3333`

## Production Deployment

When deploying to Vercel:

1. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`

2. Deploy your Sanity Studio:

   ```bash
   npx sanity deploy
   ```

3. Your blog will automatically fetch content from Sanity!

## CORS Configuration

If you get CORS errors:

1. Go to Sanity dashboard
2. Navigate to "API" settings
3. Add your domains to CORS origins:
   - `http://localhost:3000`
   - `https://www.braggly.com`
   - `https://www.braggly.com`

## Support

- **Sanity Docs:** [sanity.io/docs](https://www.sanity.io/docs)
- **Sanity Community:** [slack.sanity.io](https://slack.sanity.io)
- **Next.js + Sanity:** [sanity.io/plugins/next-sanity](https://www.sanity.io/plugins/next-sanity)

---

**Your blog is ready to go! Start creating content and watch your thought leadership grow!** 🚀
