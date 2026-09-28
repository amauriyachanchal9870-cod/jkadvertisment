# JK Advertisement – Modern Static Website

Official static website for **JK Advertisement**, a premier advertising and creative digital marketing agency based in Firozabad, Uttar Pradesh.

Developed with **React 18**, **Vite 6**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## 🌟 Key Features

- **Agency Branding:** Modern monogram logo and clean visual identity highlighting local advertising and marketing capabilities.
- **Full Spectrum of Services:**
  - Social Media Marketing
  - Facebook Advertising & Page Promotion
  - Graphic Design & Creative Services
  - Video Editing & Instagram Reels
  - Bulk SMS Marketing (DLT Compliant)
  - WhatsApp Marketing Solutions
  - Voice Call & Audio Broadcast Services
  - 1800 Toll-Free & Business Hotline Services
  - Commercial Photography & Printing Services
- **Contact & Lead Generation (No Backend Required):**
  - Instant WhatsApp click-to-chat with dynamic prefilled service quotes (`wa.me`).
  - Form validation with dual submission actions: *Send Enquiry on WhatsApp* or *Send Enquiry via Email*.
  - Direct click-to-call links for mobile phone dialers (`tel:+919837436607`, `tel:+917042497485`).
  - Direct mailto link (`mailto:jsadvertisment@gmail.com`).
  - Verified Facebook business page integration (`https://www.facebook.com/share/1EezkbZBDH/`).
- **Interactive Portfolio:** Filterable showcase with detailed modal reviews and authentic sample badges.
- **Mobile-First Responsive Design:** Fully optimized across mobile (320px–430px), tablet (768px–1024px), laptop, and 4K desktop viewports.
- **SEO & Performance:** Structured data (Schema.org `AdvertisingAgency`), Open Graph metadata, semantic HTML5, sitemap.xml, robots.txt, and client-side SPA route fallbacks.

---

## 🚀 Tech Stack

- **Framework:** React 18
- **Bundler / Dev Server:** Vite 6
- **Styling:** Tailwind CSS (Custom Color Theme: Deep Green `#0B6B35`, Emerald `#16A34A`, Golden Yellow `#F4C542`, Soft Bg `#F6F8F5`, Dark `#17231B`)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router v6

---

## 📁 Project Structure

```text
JK Advertisment/
├── public/
│   ├── favicon.svg          # Modern SVG brand icon
│   ├── robots.txt           # SEO crawler directions
│   ├── sitemap.xml          # Complete page sitemap
│   └── _redirects           # Netlify/Cloudflare SPA rewrites
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx   # Form with client validation & WhatsApp/Mailto dispatch
│   │   ├── Footer.jsx        # Verified business footer
│   │   ├── IconMapper.jsx    # Lucide dynamic icon wrapper
│   │   ├── Logo.jsx          # Vector monogram brand logo
│   │   ├── Navbar.jsx        # Sticky navigation with mega-menu & mobile drawer
│   │   ├── PageHeader.jsx    # Breadcrumbs & inner hero banner
│   │   ├── PortfolioCard.jsx # Portfolio thumbnail card
│   │   ├── PortfolioModal.jsx# Interactive project dialog
│   │   ├── SEO.jsx           # Dynamic title & meta updater
│   │   ├── ServiceCard.jsx   # Interactive service card
│   │   └── WhatsAppButton.jsx# Floating pulsing WhatsApp CTA
│   ├── data/
│   │   ├── agencyData.js     # Workflow steps, value pillars, and FAQs
│   │   ├── business.js       # Centralized contact numbers, email, address & WhatsApp logic
│   │   ├── portfolio.js      # Portfolio projects & categories
│   │   └── services.js       # In-depth service details, features, and workflows
│   ├── pages/
│   │   ├── About.jsx         # Agency story, philosophy, and location
│   │   ├── Contact.jsx       # 2-column contact page with map and channels
│   │   ├── Home.jsx          # High-converting homepage
│   │   ├── NotFound.jsx      # Branded 404 page
│   │   ├── Portfolio.jsx     # Filterable project gallery
│   │   ├── ServiceDetails.jsx# Reusable deep-dive service template
│   │   └── Services.jsx      # Complete services catalog
│   ├── App.jsx               # Route mappings
│   ├── index.css             # Tailwind base & utilities
│   └── main.jsx              # Application bootstrap
├── index.html                # HTML5 shell with schema.org JSON-LD
├── package.json
├── tailwind.config.js
├── vercel.json               # Vercel SPA route rewrite rules
└── vite.config.js
```

---

## 🛠️ Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port indicated in your terminal).

### 3. Build for Production
```bash
npm run build
```
This generates the optimized static files in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment to Static Hosting

### Vercel
1. Import the repository into your Vercel dashboard.
2. Vercel automatically detects Vite. Build command: `npm run build`, output directory: `dist`.
3. `vercel.json` is included to handle SPA routing seamlessly on page reloads.

### Netlify
1. Connect the repository or drag-and-drop the `dist` folder.
2. Build command: `npm run build`, publish directory: `dist`.
3. The included `public/_redirects` ensures `/* /index.html 200` rewrite rules apply automatically.

### GitHub Pages / Hostinger / cPanel / Shared Hosting
Upload the static files from the `dist/` directory directly to your web root (`public_html`). Ensure `.htaccess` or server redirects non-file requests to `index.html`.

---

## 📞 Business Information Reference
- **Agency Name:** JK Advertisement
- **Office Address:** Dwarkapuri, Kotla Road, Firozabad – 283203, Uttar Pradesh, India
- **Phones:** +91-9837436607, +91-7042497485
- **Email:** jsadvertisment@gmail.com
- **Facebook:** [https://www.facebook.com/share/1EezkbZBDH/](https://www.facebook.com/share/1EezkbZBDH/)
