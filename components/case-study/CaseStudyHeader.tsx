"use client";

import { motion } from "motion/react";
import { CaseStudyProject } from "@/types/projects";

interface Props {
    project: CaseStudyProject;
}

export default function CaseStudyHeader({ project }: Props) {
    return (
        <motion.header
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
            }}
            className="mb-10 text-center"
        >
            <h1
                className="
                text-5xl
                font-black
                tracking-tight
                text-(--azure-blue)
                md:text-6xl
                lg:text-7xl
                "
            >
                {project.title}.
            </h1>

            <p
                className="
                mt-2
                text-lg
                text-(--light-blue)
                md:text-xl
                "
            >
                {project.subtitle}
            </p>
        </motion.header>
    );
}
