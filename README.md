# MyTinyCEO Marketing Website

AI-powered business planning tool - Marketing website built with Astro + Tailwind CSS.

## 🚀 Project Structure

```
/
├── public/
│   ├── screenshots/        # Product screenshots (add your PNG files here)
│   └── favicon.svg         # CEO favicon
├── src/
│   ├── components/
│   │   ├── Header.astro    # Navigation header
│   │   ├── Footer.astro    # Footer with 4Cast branding
│   │   ├── Hero.astro      # Hero section component
│   │   ├── FeatureCard.astro
│   │   ├── PricingCard.astro
│   │   └── FAQ.tsx         # React accordion component
│   ├── layouts/
│   │   └── Layout.astro    # Base page layout
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   ├── product.astro
│   │   ├── pricing.astro
│   │   ├── use-cases.astro
│   │   ├── resources.astro
│   │   ├── about.astro
│   │   ├── faq.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css      # Global styles + Tailwind
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📝 Next Steps

### 1. Add Your Content

- **Screenshots**: Drop your product screenshots into `/public/screenshots/`
  - Current placeholder locations in code can be replaced with:
    - `<img src="/screenshots/your-file.png" alt="Description" />`

- **Headshot**: Add your photo to `/public/` as `steve-headshot.jpg`
  - Update About page placeholder with actual image

- **4Cast Logo**: Add 4Cast Concrete logo to `/public/4cast-logo.png`
  - Update Footer component to display the logo

### 2. Configure Contact Form

The contact form on `/contact` currently has no backend. Options:

- **Formspree** (easiest): https://formspree.io
  - Add action="https://formspree.io/f/YOUR_FORM_ID" to form
- **Netlify Forms** (if hosting on Netlify)
- **Custom API endpoint**

### 3. Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - MyTinyCEO marketing site"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Astro settings
   - Click "Deploy"

3. **Connect Custom Domain**
   - In Vercel project settings → Domains
   - Add `mytinyceo.com`
   - Follow DNS configuration instructions
   - Point your domain's DNS to Vercel

## 🎨 Design System

### Colors
- **Steel Blue**: `#4B7DAA` (Primary - Headings)
- **Tech Teal**: `#2DA3A3` (Secondary - CTAs)
- **Soft Olive**: `#A5B28C` (Accent)
- **Charcoal**: `#3A3A3C` (Text)
- **Off-White**: `#F8F9FA` (Background)

### Fonts
- **Headings**: Montserrat Alternates (Bold 700, Semi-Bold 600)
- **Body**: Inter (Regular 400, Medium 500)
- **CTAs**: Poppins (Medium 500)

### Tailwind Classes
- Use `btn-primary` for CTA buttons
- Use `font-heading` for headings
- Use `text-steel-blue`, `text-tech-teal` for brand colors

## 📄 License

© 2025 4Cast Concrete Solutions LLC. All rights reserved.

---

Built with ❤️ by Steve Dickens
