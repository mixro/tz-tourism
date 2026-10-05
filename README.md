<div align="center">

# 🌍 CHONG ADVENTURE

### Premium Tanzania Safari, Kilimanjaro & Zanzibar Experiences

A modern, fully responsive tourism website showcasing handcrafted adventures across Tanzania, from the Serengeti plains to the summit of Kilimanjaro and the shores of Zanzibar.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-0055FF?logo=framer&logoColor=white)
![Status](https://img.shields.io/badge/Status-In_Development-C6A15B)

[Live Demo](#) · [Report a Bug](#) · [Request a Feature](#)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Pages & Routes](#-pages--routes)
- [Design System](#-design-system)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Managing Content](#-managing-content)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🧭 Overview

**CHONG ADVENTURE** is a Tanzania-based adventure and travel company. This repository contains its public-facing website: a premium, story-driven frontend designed to inspire travelers and guide them from discovery to enquiry.

The site presents destinations, curated experiences, safari packages, and travel stories in an elegant, safari-inspired visual language built around deep forest greens, warm sand tones, and gold accents.

> **Note:** This is a **frontend-only** build. All content is served from static mock data inside `src/data`, and no backend or database is required to run it.

### Goals

- Present Tanzania's top destinations with rich, immersive storytelling
- Make safari, Kilimanjaro, and Zanzibar offerings easy to browse and compare
- Deliver a smooth, animated, mobile-first experience
- Keep content easy to update without touching component code

---

## ✨ Features

| Area | Highlights |
| --- | --- |
| **Destinations** | Overview page plus dedicated detail pages for each destination, resolved dynamically by slug |
| **Experiences & Safaris** | Curated experience and safari listings for easy browsing |
| **Signature Journeys** | Dedicated pages for Kilimanjaro and Zanzibar |
| **Storytelling** | About page and a travel journal for brand and destination stories |
| **Enquiries** | Contact page for visitor enquiries |
| **Motion & Polish** | Smooth page transitions and scroll animations powered by Framer Motion |
| **Responsive Design** | Mobile-first layouts that adapt from phones to large desktops |
| **Data-Driven Content** | Destinations, packages, and more live in plain data files for quick edits |

---

## 🛠 Tech Stack

| Technology | Purpose |
| --- | --- |
| [React](https://react.dev/) | UI library |
| [Vite](https://vitejs.dev/) | Fast dev server and production bundler |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations and transitions |
| [Lucide React](https://lucide.dev/) | Icon set |

---

## 🗺 Pages & Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/destinations` | All destinations |
| `/destinations/:slug` | Destination detail page |
| `/experiences` | Experiences |
| `/safaris` | Safari packages |
| `/kilimanjaro` | Kilimanjaro climbs |
| `/zanzibar` | Zanzibar escapes |
| `/about` | About CHONG ADVENTURE |
| `/journal` | Travel journal |
| `/contact` | Contact and enquiries |

### Destination slugs

`serengeti` · `kilimanjaro` · `zanzibar` · `ngorongoro` · `tarangire` · `nyerere`

---

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
| --- | --- | --- |
| Forest | `#173B2D` | Primary brand color |
| Deep Green | `#0B241B` | Dark backgrounds, footer |
| Sand | `#E7D7B7` | Secondary surfaces |
| Cream | `#F8F5EE` | Page background |
| Charcoal | `#1A1A18` | Body text |
| Gold | `#C6A15B` | Accents and calls to action |

### Typography

- **Display:** an elegant serif (e.g. *Cormorant Garamond*) for headlines
- **Body:** a clean sans-serif (e.g. *Manrope*) for readability

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18 or later**
- npm (bundled with Node.js), or yarn / pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git

# 2. Enter the project directory
cd <your-repo>

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open the local URL printed in your terminal (usually `http://localhost:5173`).

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |

---

## 📁 Project Structure

> Adjust this section to match your final folder layout.

```
.
├── public/              # Static assets served as-is
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route-level pages
│   ├── data/            # Static mock data (destinations, safaris, etc.)
│   ├── App.jsx          # Routes and layout
│   ├── main.jsx         # App entry point
│   └── index.css        # Tailwind directives and global styles
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 📝 Managing Content

All site content is stored as plain data in `src/data`, so you can update the website without editing components.

**To add a new destination:**

1. Open the destinations data file in `src/data`.
2. Add a new object following the structure of the existing entries, including a unique `slug`.
3. Save. The new destination appears automatically in listings and gets its own `/destinations/<slug>` page.

**To update packages, stories, or text:** edit the matching file in `src/data`.

---

## 🌐 Deployment

Because the site is a static frontend, it can be hosted almost anywhere.

```bash
npm run build
```

Deploy the generated `dist/` folder to a static host such as **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages**.

> **Single-page app routing:** configure your host to redirect all routes to `index.html` so deep links such as `/destinations/serengeti` work on refresh.

---

## 🧱 Roadmap

- [ ] Connect the contact form to an email or form service
- [ ] Add a booking or quote request flow
- [ ] Integrate a CMS for non-technical content editing
- [ ] Add multilingual support (English / Swahili)
- [ ] SEO improvements: meta tags, sitemap, and structured data
- [ ] Image optimization and performance tuning

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for details.

> Replace this section if the project uses a different license or is proprietary.

---

## 📬 Contact

**CHONG ADVENTURE**
Tanzania

- 🌐 Website: _add URL_
- ✉️ Email: _add email_
- 📱 Phone / WhatsApp: _add number_

---

<div align="center">

Made with ❤️ for the wild beauty of Tanzania

</div>
