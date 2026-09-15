## 🙏 Design Inspiration

The visual direction and some interaction ideas for this portfolio were inspired by the
portfolio of [Tajmirul Islam](https://www.tajmirul.site/).

His approach to interactive portfolio design, project presentation, and frontend-focused
visual storytelling was an important source of inspiration while developing this project.

This portfolio is my own implementation, with its own visual system, content,
projects, animations, and technical architecture.

Special thanks to Tajmirul for the inspiration.

> Original inspiration: [tajmirul.site](https://www.tajmirul.site/)
> 
# Laith Watfa — Frontend Developer Portfolio

A modern, interactive personal portfolio built to showcase my work, technical skills, and approach to frontend development.

The portfolio focuses on **clean UI, smooth interactions, responsive design, and thoughtful frontend architecture**, with an emphasis on creating polished digital experiences rather than simply displaying projects.

ber
## 🌐 Live Website

**https://laith-watfa-portfolio.vercel.app/**

---

## ✨ Highlights

- Modern dark-themed portfolio design
- Interactive project showcase
- Dedicated case study pages
- Smooth scroll-based animations
- Interactive project previews and galleries
- Responsive design across desktop, tablet, and mobile
- Interactive technology / skills section
- Bilingual-ready architecture
- SEO-friendly metadata
- Dynamic project metadata
- Custom favicon and Open Graph support
- Accessible navigation and interactions
- Optimized images using Next.js Image
- Reduced-motion considerations
- Responsive and performance-focused UI

---

## 🛠️ Tech Stack

### Core

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**

### Animation & Interaction

- **Motion**
- **CSS animations**
- **Scroll-based interactions**
- **Drag / swipe interactions**

### Icons & UI

- **React icons**
- **Next.js Image**

### Development

- **VS Code**
- **Git**
- **GitHub**

---

## 📂 Featured Projects

### 01 — Theia

**Ophthalmology Management Platform**

A responsive ophthalmology management platform designed to manage patients, appointments, treatments, billing, and AI-assisted diagnosis workflows.

#### Features

- Authentication
- Patient management
- Appointment management
- Treatment plans
- Billing
- Fundus image diagnosis workflow
- AI diagnosis result visualization
- Arabic / English localization
- Responsive dashboard
- Mock REST API architecture

#### Technologies

`Next.js` `React` `TypeScript` `Tailwind CSS` `Axios` `REST API` `i18n`

---

### 02 — Alsindyan Center

**Table Tennis Center Management Platform**

A full-stack management platform for a table tennis training center, designed to handle both player-facing and manager-facing workflows.

#### Features

- Player dashboard
- Manager dashboard
- Table reservations
- Training subscriptions
- Subscription tracking
- Invoice management
- Payment status tracking
- Session scheduling
- Player management
- Manager workflows
- Responsive Arabic interface

#### Technologies

`Next.js` `React` `TypeScript` `Tailwind CSS` `Prisma` `NextAuth`

---

### 03 — Emerald

**Marble & Granite Product Platform**

A product showcase and management platform for a marble and granite business, with an Arabic-first responsive interface and an administrative dashboard.

#### Features

- Product showcase
- Product filtering
- Stone categories
- Color filtering
- Product image galleries
- Product management
- Add / edit / delete products
- Admin dashboard
- Arabic RTL interface
- Responsive design

#### Technologies

`Next.js` `React` `TypeScript` `Tailwind CSS` `Supabase`

---

## 🎨 Design Philosophy

The portfolio follows a simple principle:

> **Premium design comes from precision, not complexity.**

The interface combines:

- Minimal layouts
- Strong typography
- Controlled use of color
- Subtle motion
- Interactive elements
- Visual hierarchy
- Consistent spacing
- Responsive behavior

The visual system is based around a dark foundation with Azure blue accents.

### Color Palette

| Color | Hex |
|---|---|
| Azure Blue | `#0980FF` |
| Grey | `#8D8F93` |
| Black | `#212121` |
| Light Blue | `#B8DBD9` |
| Ghost White | `#F4F4F9` |

---

## 🧩 Project Structure

The project uses the Next.js App Router architecture.

```text
app/
├── projects/
│   └── [slug]/
│       └── page.tsx
│
├── robots.ts
├── sitemap.ts
├── layout.tsx
└── page.tsx

components/
├── about/
├── case-study/
├── hero/
├── projects/
└── ...

config/
└── site.ts

data/
└── projects.ts

public/
├── projects/
│   ├── theia/
│   ├── alsindyan/
│   └── emerald/
│
└── ...

The exact structure may evolve as the portfolio continues to grow.

🚀 Getting Started

Clone the repository:

git clone https://github.com/laithWatfa/laith-watfa-portfolio.git

Navigate into the project:

cd laith-watfa-portfolio

Install dependencies:

npm install

Start the development server:

npm run dev

Open:

http://localhost:3000
🔧 Environment Variables

Create a .env.local file in the root directory.

Example:

SITE_URL=http://localhost:3000

For production:

SITE_URL=https://laith-watfa-portfolio.vercel.app/

Additional environment variables may be required depending on the project configuration.

📦 Available Scripts

Run the development server:

npm run dev

Create a production build:

npm run build

Start the production server:

npm run start

Run ESLint:

npm run lint
📱 Responsive Design

The portfolio is designed to work across:

Mobile
Tablet
Laptop
Desktop
Large desktop displays

Interactive elements adapt their behavior depending on the available screen size.

For example:

Desktop project previews use larger interactive layouts.
Mobile project previews use touch-friendly interactions.
Hover interactions are avoided where they don't make sense on touch devices.
Galleries support drag / swipe interactions on mobile.
♿ Accessibility

Accessibility is considered throughout the interface, including:

Semantic HTML
Keyboard-friendly interactions
Descriptive image alt text
Visible focus states
Responsive layouts
Reduced-motion considerations
Appropriate contrast
Touch-friendly controls
🔍 SEO

The portfolio includes:

Dynamic page titles
Meta descriptions
Open Graph metadata
Custom favicon
robots.txt
sitemap.xml
Project-specific metadata
Semantic page structure

Project case studies use dynamic metadata based on the project being viewed.

⚡ Performance

Performance considerations include:

Next.js Image optimization
Responsive image sizing
Minimal client-side JavaScript where possible
Lazy-loaded visual content
Lightweight animation
Reusable components
Responsive layouts
Avoiding unnecessary animation and rendering

The goal is to maintain a balance between visual richness and performance.

🎞️ Animation

Motion is used intentionally throughout the portfolio.

Examples include:

Hero entrance animations
Scroll-triggered reveals
Project list interactions
Project preview transitions
Image gallery transitions
Hover interactions
Drag / swipe interactions
Technology stack interactions

Animations are designed to support the interface rather than distract from the content.

🖼️ Project Case Studies

Each major project has its own case study page.

The case studies focus on:

Project overview
Description
Technologies and techniques
My role
Visual gallery
Key interface screens
Project-specific details

The homepage provides a quick interactive overview, while the case study pages provide a deeper visual presentation.

📈 Future Improvements

Possible future improvements include:

More portfolio projects
Additional case studies
Improved accessibility testing
Performance optimization
Analytics
More advanced page transitions
Additional interactive experiments
Creative frontend experiments
More polished mobile interactions
👨‍💻 About Me

I'm Laith Watfa, a frontend developer focused on building modern, responsive, and interactive web experiences.

My current focus is on:

Frontend development
Next.js
React
TypeScript
UI / UX implementation
Interactive web experiences
Responsive design
Clean component architecture

I'm continuously improving my frontend skills by building real-world projects and experimenting with modern web technologies.

📫 Contact

If you'd like to discuss a project, collaboration, or frontend opportunity:

Website:
laithwatfa.com

GitHub:
github.com/laithWatfa

📄 License

This project is a personal portfolio and is primarily intended to showcase my work and development skills.

The source code is available for reference, but the portfolio content, branding, project screenshots, and personal information should not be reused without permission.

⭐ Acknowledgements

Built with:

Next.js
React
TypeScript
Tailwind CSS
Motion
React icons

Designed and developed by Laith Watfa.
