"use client";

import { useState } from "react";
import { HiMiniBriefcase } from "react-icons/hi2";
import { motion } from "motion/react";
import ProjectItem from "./ProjectItem";
import { projects } from "../../../data/project-preview-data";
export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<string | null>(
        null
    );

    const [hoveredProject, setHoveredProject] = useState<string | null>(
        null
    );
    return (
        <section
        id="projects"
        className="
            relative
            z-20
            min-h-screen
            overflow-hidden
            px-8
            py-24
            md:px-14
            lg:px-20
        "
        >
        {/* Section title */}
        <motion.div
            initial={{
            opacity: 0,
            x: -40,
            }}
            whileInView={{
            opacity: 1,
            x: 0,
            }}
            viewport={{
            once: false,
            amount: 0.5,
            }}
            transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            }}
            className="
            flex
            items-center
            gap-4
            "
        >
            <HiMiniBriefcase
            size={30}
            className="text-(--azure-blue)"
            />

            <h2
            className="
                font-mono
                text-3xl
                font-bold
                text-(--azure-blue)
                md:text-4xl
            "
            >
            Selected Projects
            </h2>
        </motion.div>

        {/* Project area */}
        <div
            className="
            relative
            mx-auto
            mt-16
            flex
            min-h-[65vh]
            max-w-350
            items-center
            "
        >
            {/* Project list */}
            <div
            className="
                relative
                z-10
                w-full
                lg:w-[55%]
            "
            >
            <div className="space-y-7">
                {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{
                    opacity: 0,
                    x: -30,
                    }}
                    whileInView={{
                    opacity: 1,
                    x: 0,
                    }}
                    viewport={{
                    once: false,
                    amount: 0.2,
                    }}
                    transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <ProjectItem
                    project={project}
                    isSelected={selectedProject === project.id}
                    isHovered={hoveredProject === project.id}
                    onHover={() => setHoveredProject(project.id)}
                    onLeave={() => setHoveredProject(null)}
                    onSelect={() =>
                        setSelectedProject((current) =>
                        current === project.id ? null : project.id
                        )
                    }
                    />
                </motion.div>
                ))}
            </div>
            </div>

        </div>
        </section>
    );
}