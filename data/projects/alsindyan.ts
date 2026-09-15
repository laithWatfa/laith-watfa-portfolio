import { CaseStudyProject } from "@/types/projects";

export const alsindyan: CaseStudyProject = {
  slug: "alsindyan",
  title: "ALSINDYAN CENTER",
  subtitle: "Table Tennis Training Center Management System",
  
  description:
    "An enterprise-grade workspace ecosystem featuring a dual-sided architecture that optimizes operations for professional table tennis training centers, blending a mobile-responsive player portal with a powerful operations command center.",

  technologies: [
    "Next.js 15 (App Router)",
    "React 19",
    "TypeScript",
    "Prisma ORM",
    "PostgreSQL",
    "Tailwind CSS",
    "NextAuth.js",
    "React Server Actions",
  ],

  role: [
    "Spearheading end-to-end Product Design and layout systems, optimizing dense dashboard UI grids for desk managers and touch-friendly layouts for mobile users.",
    "Architecting a dual-sided application access layer featuring real-time booking wizards, financial tickers, and interactive timeline canvas scheduling grids.",
    "Engineering a robust 'Ghost Profile' billing auto-complete engine to handle complex structural updates and transaction state management for walk-in clients.",
    "Implementing safe cascading database purges and strict type systems using Prisma ORM to guarantee referential integrity and design-to-code alignment.",
    "Designing and implementing a multi-role RBAC framework restricting configuration changes strictly to Super-Admin profiles.",
  ],

  isDemo: true,
  liveUrl: "https://alsindyan-center.vercel.app/", // Ready for deployment tracking link

  githubUrl: "https://github.com/laithWatfa/table-tennis-training-center-management",

  images: [
    {
      src: "/projects/alsindyan/manager-bills.webp",
      alt: "Financial Receipts Ledger dashboard for managing total monthly earnings and cash invoices.",
    },
    {
      src: "/projects/alsindyan/manager-groups.webp",
      alt: "Subscription and program architect view mapping weekly team recurring training schedules.",
    },
    {
      src: "/projects/alsindyan/manager-player-profile.webp",
      alt: "Player account directory detailing individual transactional logs and database credentials tracking.",
    },
    {
      src: "/projects/alsindyan/manager-reservations.webp",
      alt: "Visual schedule calendar tracking interactive timeline grid table allocations in dark mode layout.",
    },
    {
      src: "/projects/alsindyan/manager-reservations-light.webp",
      alt: "High-contrast visual schedule grid timeline tracking table reservations in light theme layout.",
    },
    {
      src: "/projects/alsindyan/manager-settings.webp",
      alt: "Global facility configuration panel managing operational price metrics and active table safeguards.",
    },
    {
      src: "/projects/alsindyan/player-reservation.webp",
      alt: "Mobile-responsive user booking wizard showing real-time court availability calendar grids.",
    },
    {
      src: "/projects/alsindyan/player-subscription.webp",
      alt: "Mobile dashboard view for members displaying outstanding balance tickers and localized active contracts.",
    },
  ],
};
