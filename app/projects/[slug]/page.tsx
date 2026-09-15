import { notFound } from "next/navigation";

import CaseStudy from "@/components/case-study/CaseStudy";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug }= await params;

    const project = projects[slug as keyof typeof projects];

    if (!project) {
        return {
        title: "Project Not Found",
        };
    }
    return {
        metadataBase: new URL(siteConfig.url), 
        title: project.title,
        description: project.description,
        openGraph: {
        title: `${project.title} | Laith Watfa`,
        description: project.description,
        url: `${siteConfig.url}/projects/${slug}`,
        images: [
            {
            url: project.images[0].src,
            width: 1200,
            height: 630,
            alt: project.title,
            },
        ],
    },
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;

    const project = projects[slug as keyof typeof projects];

    if (!project) {
        notFound();
    }

    return <CaseStudy project={project} />;
}
