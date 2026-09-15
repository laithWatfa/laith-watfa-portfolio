export type Project = {
    id: string;
    number: string;
    title: string;
    category: string;
    technologies: string[];
    description: string[];
    images: {
        main: string;
        left?: string;
        right?: string;
    };
    caseStudyUrl: string;
};

export const projects: Project[] = [
    {
        id: "theia",
        number: "01.",
        title: "THEIA",
        category: "HEALTHCARE / AI",

        technologies: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "i18n",
        ],

        description: [
        "End-to-End Product Design",
        "Full-Stack Simulation",
        "Cross-Team Integration",
        "Bilingual UX Optimization",
        ],

        images: {
        main: "/projects/theia/main.webp",
        left: "/projects/theia/left.webp",
        right: "/projects/theia/right.webp",
        },

        caseStudyUrl: "/projects/theia",
    },

    {
        id: "alsindyan",
        number: "02.",
        title: "ALSINDYAN CENTER",
        category: "BUSINESS PLATFORM / RESERVATIONS",

        technologies: [
        "Next.js",
        "Prisma ORM",
        "NextAuth",
        "Tailwind CSS",
        ],

        description: [
        "Reservation Management",
        "Subscription Tracking",
        "Invoice Management",
        "Manager & Player Dashboards",
        ],

        images: {
        main: "/projects/alsindyan/manager-reservations-light.webp",
        left: "/projects/alsindyan/player-reservation.webp",
        right: "/projects/alsindyan/manager-groups.webp",
        },

        caseStudyUrl: "/projects/alsindyan",
    },

    {
        id: "emerald",
        number: "03.",
        title: "EMERALD MARBLE AND GRANITE",
        category: "GRANITE / PRODUCT PLATFORM",

        technologies: [
        "Next.js",
        "Supabase",
        "Tailwind CSS",
        ],

        description: [
        "Product Showcase Platform",
        "Arabic-First User Experience",
        "Product Management Dashboard",
        "Image & Inventory Management",
        ],

        images: {
        main: "/projects/emerald/hero.webp",
        left: "/projects/emerald/products.webp",
        right: "/projects/emerald/product-details.webp",
        },

        caseStudyUrl: "/projects/emerald",
    },
];














