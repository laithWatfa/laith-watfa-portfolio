"use client";

import {
    FaExternalLinkAlt as ExternalLink,
    FaGithub as Github,
} from "react-icons/fa";
import { motion } from "motion/react";

import { CaseStudyProject } from "@/types/projects";

interface Props {
    project: CaseStudyProject;
}

export default function CaseStudyActions({ project }: Props) {
    if (!project.liveUrl && !project.githubUrl) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.35,
            }}
            className="my-8 flex justify-center gap-4"
        >
            {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        relative
                        button
                        overflow-hidden
                        group
                        flex
                        items-center
                        gap-2
                        rounded-md
                        border
                        border-(--azure-blue)
                        px-4
                        py-2
                        
                        font-bold
                        text-(--azure-blue)
                        transition-all
                        duration-300
                        hover:bg-(--azure-blue)
                        hover:text-black
                    "
                >
                    <span> 
                        <ExternalLink
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                    {project.isDemo ? "Live Demo"  : `Visit ${project.title}`}
                    </span>

                </a>
            )}

            {project.githubUrl && (
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        relative
                        button
                        after:bg-(--light-blue)!
                        group
                        flex
                        items-center
                        gap-2
                        rounded-md
                        border
                        border-(--light-blue)
                        px-4
                        py-2
                        
                        font-bold
                        text-(--light-blue)
                        transition-all
                        duration-300
                        hover:bg-(--light-blue)
                        hover:text-black
                    "
                >
                    <span className=" ">
                        <Github size={18} />
                        GitHub
                    </span>

                </a>
            )}
        </motion.div>
    );
}
