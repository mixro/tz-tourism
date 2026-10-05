<div align="center">

# 🌍 CHONG ADVENTURE

### Premium Tanzania Safari, Kilimanjaro & Zanzibar Experiences

<a href="https://unsplash.com/photos/H1THPgRuKg0">
  <img src="https://unsplash.com/photos/H1THPgRuKg0/download?force=true&w=1400" alt="Wildebeest crossing the Serengeti" width="100%" />
</a>

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
- [Gallery](#-gallery)
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
- [Image Credits](#-image-credits)
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

## 📸 Gallery

A preview of the destinations featured on the site. Click any image to open the original photo.

<table>
  <tr>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/ZaMYDt6FE58"><img src="https://unsplash.com/photos/ZaMYDt6FE58/download?force=true&w=800" alt="Serengeti Migration" width="100%" /></a>
      <br /><sub><b>Serengeti Migration</b><br />Photo by Doina Gavrilov</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/IYMeU7G3L4E"><img src="https://unsplash.com/photos/IYMeU7G3L4E/download?force=true&w=800" alt="Serengeti Leopard" width="100%" /></a>
      <br /><sub><b>Serengeti Leopard</b><br />Photo by Crystal McClernon</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/FmUx8z_Tz4A"><img src="https://unsplash.com/photos/FmUx8z_Tz4A/download?force=true&w=800" alt="Serengeti Elephants" width="100%" /></a>
      <br /><sub><b>Serengeti Elephants</b><br />Photo by Dawn Westveld</sub>
    </td>
  </tr>
  <tr>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/DDEBAl7ULAo"><img src="https://unsplash.com/photos/DDEBAl7ULAo/download?force=true&w=800" alt="Kilimanjaro, Rongai Route" width="100%" /></a>
      <br /><sub><b>Kilimanjaro, Rongai Route</b><br />Photo by Crispin Jones</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/KDQ6D6V5RtM"><img src="https://unsplash.com/photos/KDQ6D6V5RtM/download?force=true&w=800" alt="Kilimanjaro from Moshi" width="100%" /></a>
      <br /><sub><b>Kilimanjaro from Moshi</b><br />Photo by Twende Africa Tours</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/Y2fRDPQyAj4"><img src="https://unsplash.com/photos/Y2fRDPQyAj4/download?force=true&w=800" alt="Serengeti Gazelle" width="100%" /></a>
      <br /><sub><b>Serengeti Gazelle</b><br />Photo by Olaf Janssen</sub>
    </td>
  </tr>
  <tr>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/VqxfYDgg8RQ"><img src="https://unsplash.com/photos/VqxfYDgg8RQ/download?force=true&w=800" alt="Zanzibar Coastline" width="100%" /></a>
      <br /><sub><b>Zanzibar Coastline</b><br />Photo by Alexander Osipenko</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/G4zORfstMW0"><img src="https://unsplash.com/photos/G4zORfstMW0/download?force=true&w=800" alt="Zanzibar Beach Retreat" width="100%" /></a>
      <br /><sub><b>Zanzibar Beach Retreat</b><br />Photo by Danai Tsoutreli</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/nkLfKiCf3EQ"><img src="https://unsplash.com/photos/nkLfKiCf3EQ/download?force=true&w=800" alt="Stone Town, Zanzibar" width="100%" /></a>
      <br /><sub><b>Stone Town, Zanzibar</b><br />Photo by Javi Lorbada</sub>
    </td>
  </tr>
  <tr>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/46wm-yYcYEs"><img src="https://unsplash.com/photos/46wm-yYcYEs/download?force=true&w=800" alt="Ngorongoro Crater Elephants" width="100%" /></a>
      <br /><sub><b>Ngorongoro Crater Elephants</b><br />Photo by Michael Wilcox</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/mYiFarnp-ko"><img src="https://unsplash.com/photos/mYiFarnp-ko/download?force=true&w=800" alt="Ngorongoro Highlands" width="100%" /></a>
      <br /><sub><b>Ngorongoro Highlands</b><br />Photo by Mariola Grobelska</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://unsplash.com/photos/AtYVjxDqlPI"><img src="https://unsplash.com/photos/AtYVjxDqlPI/download?force=true&w=800" alt="Tarangire Elephant" width="100%" /></a>
      <br /><sub><b>Tarangire Elephant</b><br />Photo by Davia Breitenmoser</sub>
    </td>
  </tr>
</table>

> **Demonstration project:** all imagery is sourced online from [Unsplash](https://unsplash.com/) for demo purposes only. Browse more: [Tarangire](https://unsplash.com/s/photos/tarangire) · [Nyerere / Selous](https://unsplash.com/s/photos/selous-game-reserve) · [Serengeti](https://unsplash.com/s/photos/serengeti)

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

## 🖼 Image Credits

This is a non-commercial demonstration website. Photographs are provided by the photographers below via [Unsplash](https://unsplash.com/) and used under the [Unsplash License](https://unsplash.com/license). Thank you to:

Doina Gavrilov · Crystal McClernon · Dawn Westveld · Uzuri Safaris Tanzania · Crispin Jones · Twende Africa Tours · Olaf Janssen · Alexander Osipenko · Danai Tsoutreli · Javi Lorbada · Michael Wilcox · Mariola Grobelska · Davia Breitenmoser

> Before any commercial launch, replace these with your own licensed or original photography.

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