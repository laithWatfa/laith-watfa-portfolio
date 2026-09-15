export interface ProjectImage {
    src: string;
    alt: string;
}

export interface CaseStudyProject {
    slug: string;

    title: string;
    subtitle: string;

    technologies: string[];
    description: string;

    role: string[];
    
    isDemo : boolean; 
    liveUrl?: string;
    githubUrl?: string;

    images: ProjectImage[];
}
