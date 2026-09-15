"use client";

import { motion } from "motion/react";
import { CaseStudyProject } from "@/types/projects";

interface Props {
    project: CaseStudyProject;
}

export default function CaseStudyInfo({ project }: Props) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: 0.15,
            }}
            className="mx-auto max-w-250"
        >
            {/* Technologies */}
            <InfoBlock title="TECHNOLOGIES">
                <p className=" text-sm font-bold leading-7 text-(--ghost-white) md:text-base font-mono">
                    {project.technologies.join(", ")}.
                </p>
            </InfoBlock>

            {/* Description */}
            <InfoBlock title="DESCRIPTION">
                <p className=" text-sm font-bold leading-7 text-(--ghost-white) md:text-base font-mono">
                    {project.description}
                </p>
            </InfoBlock>

            {/* Role */}
            <InfoBlock title="MY ROLE">
                <ul className="space-y-2 font-mono">
                    {project.role.map((item, index) => (
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.25 + index * 0.06,
                            }}
                            className="
                                flex
                                items-start
                                gap-2
                                
                                text-sm
                                font-bold
                                leading-6
                                text-(--ghost-white)
                                md:text-base
                            "
                        >
                            <span className="text-azure-blue">•</span>

                            <span>{item}</span>
                        </motion.li>
                    ))}
                </ul>
            </InfoBlock>
        </motion.section>
    );
}

function InfoBlock({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mb-5">
            <h2
                className="
                mb-1
                text-2xl
                font-black
                tracking-tight
                text-(--grey)
                md:text-3xl
                "
            >
                {title}
            </h2>

            {children}
        </div>
    );
}
