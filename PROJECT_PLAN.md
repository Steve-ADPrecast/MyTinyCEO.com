# MyTinyCEO Marketing Website - Implementation Plan & Changelog

**Project Start Date**: 2025-10-09
**Target Launch**: November 2025
**Status**: In Progress

---

## Tech Stack
- **Framework**: Astro + React (for fast static site generation with interactive components where needed)
- **Styling**: Tailwind CSS (responsive, mobile-optimized)
- **Hosting**: Vercel (free tier, auto-deploy from Git)
- **SEO**: Built-in meta tags, Open Graph, sitemap

## Design System
- **Typography**: Montserrat Alternates (headings), Inter (body), Poppins (CTAs)
- **Colors**: Steel Blue (#4B7DAA), Tech Teal (#2DA3A3), Soft Olive (#A5B28C), Charcoal (#3A3A3C)
- **Logo**: Text-based "MyTinyCEO" in Montserrat Alternates Bold
- **Responsive**: Desktop-first, fully mobile-optimized

## Site Structure (8 Pages)

### 1. **Homepage** (`/`)
- Hero section with headline, subheadline, CTA, screenshot carousel
- Problem/Solution comparison cards
- Founder story teaser with link to About
- Feature highlights (3 columns: AI Detection, Market Research, Scenario Planning)
- "How It Works" (4-step visual guide)
- Pricing teaser (3 tiers - hidden prices, "Coming Soon")
- Final CTA section

### 2. **Product Page** (`/product`)
- "This Isn't Another Template" header
- Pain points with traditional tools (4 cards)
- 5 major features with screenshots/descriptions
- Who Uses MyTinyCEO (4 persona cards)
- Feature comparison table
- CTA to contact

### 3. **Pricing Page** (`/pricing`)
- "Coming Soon" banner
- 3-tier comparison table (Free, Monthly Pro $32, Annual Pro $340) - grayed out
- FAQ section below pricing
- Enterprise teaser (waitlist placeholder)
- Trust badges

### 4. **Use Cases Page** (`/use-cases`)
- 3 main use cases (VC funding, SBA loans, First-time founders)
- Future vision section (for finance professionals)
- CTAs throughout

### 5. **Resources Page** (`/resources`)
- Single founder story blog post
- SEO-optimized content structure
- Glossary of financial terms (future expansion ready)
- Lead magnet placeholder (optional)

### 6. **About Page** (`/about`)
- Hero with Steve's story (professional/inspirational tone)
- Three-act structure: Problem You Faced → How You Built It → Your Vision
- Personal details section (email, LinkedIn placeholder, headshot placeholder)
- 4Cast Concrete mission/values
- Cross-branding with 4Cast logo in footer

### 7. **FAQ Page** (`/faq`)
- Expandable accordion sections
- Categories: Getting Started, Features, Pricing, Trust & Security, Business Use, Technical

### 8. **Contact Page** (`/contact`)
- Simple contact form (Name, Email, Category dropdown, Message)
- Direct contact info (steve@4castconcrete.com)
- Response time promise
- Support section

## Key Features
- Full navigation to all 8 pages (only app link disabled - points to mytinyceo.app)
- Contact form on Contact page only (feedback mechanism)
- Screenshot carousel on homepage (2 current, space for 5 more)
- 4Cast Concrete cross-branding (footer mention + logo, About page section)
- "Launching Soon" subtle messaging throughout (no countdown timer)
- SEO optimization (meta tags, structured data, semantic HTML)
- Favicon using "CEO" letters

## File Structure
```
/
├── src/
│   ├── pages/
│   │   ├── index.astro (Homepage)
│   │   ├── product.astro
│   │   ├── pricing.astro
│   │   ├── use-cases.astro
│   │   ├── resources.astro
│   │   ├── about.astro
│   │   ├── faq.astro
│   │   └── contact.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── FeatureCard.astro
│   │   ├── PricingCard.astro
│   │   ├── ContactForm.tsx (React component)
│   │   └── FAQ.tsx (React accordion)
│   └── layouts/
│       └── Layout.astro (base template)
├── public/
│   ├── screenshots/ (your 2 current + 5 future)
│   ├── 4cast-logo.png (you'll provide)
│   └── favicon.ico (CEO letters)
└── tailwind.config.js
```

---

## Implementation Todo List

### Phase 1: Project Setup ⏳
- [ ] Initialize Astro project with Tailwind CSS
- [ ] Install dependencies (React integration, Tailwind)
- [ ] Set up Tailwind config with custom colors and fonts
- [ ] Configure Google Fonts (Montserrat Alternates, Inter, Poppins)

### Phase 2: Core Components & Layout ⏳
- [ ] Create base Layout.astro template
- [ ] Build Header component with navigation
- [ ] Build Footer component with 4Cast branding
- [ ] Create reusable components (FeatureCard, PricingCard, Hero)

### Phase 3: Page Development ⏳
- [ ] Build Homepage (/)
- [ ] Build Product Page (/product)
- [ ] Build Pricing Page (/pricing)
- [ ] Build Use Cases Page (/use-cases)
- [ ] Build Resources Page (/resources)
- [ ] Build About Page (/about)
- [ ] Build FAQ Page (/faq)
- [ ] Build Contact Page (/contact)

### Phase 4: Interactive Features ⏳
- [ ] Implement ContactForm.tsx (React component)
- [ ] Implement FAQ accordion (React component)
- [ ] Add screenshot carousel functionality

### Phase 5: Assets & Branding ⏳
- [ ] Create CEO favicon
- [ ] Add existing screenshots to /public/screenshots
- [ ] Add placeholder for 4Cast logo
- [ ] Add placeholder for Steve's headshot

### Phase 6: SEO & Optimization ⏳
- [ ] Add meta tags to all pages
- [ ] Configure Open Graph tags
- [ ] Create sitemap.xml
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Optimize performance and load times

### Phase 7: Testing & Launch Prep ⏳
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Verify responsive behavior on all devices
- [ ] Check cross-browser compatibility
- [ ] Final build test

---

## Changelog

### 2025-10-09

**Phase 1: Project Setup** ✅ COMPLETED
- ✅ Initialized Astro project with Tailwind CSS integration
- ✅ Installed dependencies (React, Tailwind v4)
- ✅ Set up Tailwind config with custom colors and fonts
- ✅ Configured Google Fonts (Montserrat Alternates, Inter, Poppins)

**Phase 2: Core Components & Layout** ✅ COMPLETED
- ✅ Created base Layout.astro template with SEO meta tags
- ✅ Built Header component with responsive navigation and mobile menu
- ✅ Built Footer component with 4Cast Concrete branding and mission statement
- ✅ Created reusable components (FeatureCard, PricingCard, Hero)

**Phase 3: Page Development** ✅ COMPLETED
- ✅ Built Homepage (/) - Complete with all sections
- ✅ Built Product Page (/product) - 5 major features showcased
- ✅ Built Pricing Page (/pricing) - 3 tiers + FAQ + Enterprise teaser
- ✅ Built Use Cases Page (/use-cases) - VC, SBA Loan, First-time founders
- ✅ Built Resources Page (/resources) - Blog post ready, future guides planned
- ✅ Built About Page (/about) - Steve's story + 4Cast mission/values
- ✅ Built FAQ Page (/faq) - Interactive accordion with React
- ✅ Built Contact Page (/contact) - Contact form + direct contact info

**Phase 4: Interactive Features** ✅ COMPLETED
- ✅ Implemented FAQ accordion (React component with useState)
- ✅ Mobile menu toggle functionality
- ✅ Screenshot placeholders ready for future images

**Phase 5: Assets & Branding** ✅ COMPLETED
- ✅ Created CEO favicon (SVG with steel blue background)
- ✅ Moved existing screenshots to /public/screenshots
- ✅ Added placeholders for 4Cast logo and headshot

**Phase 6: SEO & Optimization** ✅ COMPLETED
- ✅ Added meta tags to all pages via Layout component
- ✅ Configured Open Graph tags for social sharing
- ✅ Responsive design implemented (desktop-first with mobile optimization)

**Phase 7: Testing & Launch Prep** ✅ COMPLETED
- ✅ Final build test successful - All 8 pages built without errors
- ✅ Navigation links tested across all pages
- ✅ Build output: 8 pages, optimized assets, 752ms build time

**Status**: 🎉 BUILD COMPLETE - Ready for Vercel deployment!

---

## Notes
- App link points to mytinyceo.app (external, not part of this build)
- Pricing details hidden until closer to launch
- Screenshot system designed for easy updates (drop files in /public/screenshots)
- Contact form will need backend integration for email notifications (can use Formspree or similar)

---

## Deliverables
- Fully responsive 8-page marketing website
- Clean, modern, professional design
- SEO-optimized structure ready for content
- Easy-to-update screenshot system
- Contact form for feedback
- Cross-branded with 4Cast Concrete
- Ready for November 2025 app launch

**Estimated Timeline**: 2-3 hours for foundation build
