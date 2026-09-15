"use client";

import { AnimatePresence, motion } from "motion/react";
import { BsArrowUpRight } from "react-icons/bs";
import type { Project } from "../../../data/project-preview-data";
import ProjectPreview from "./ProjectPreview";

type ProjectItemProps = {
    project: Project;
    isSelected: boolean;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
    onSelect: () => void;
};


export default function ProjectItem({
    project,
    isSelected,
    isHovered,
    onHover,
    onLeave,
    onSelect,
}: ProjectItemProps) {
    const isActive = isSelected || isHovered;
    let letterCount = 0;
    const totalLetters = project.title.replace(/\s/g, "").length;

    return (
        <motion.article
            layout
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="relative"
        >
            <button
                type="button"
                onClick={onSelect}
                className="
          group
          w-full
          cursor-pointer
          text-left
          outline-none
        "
                style={{ "--total": totalLetters } as React.CSSProperties}
            >
                <div className="flex items-start gap-4 md:gap-6">
                    {/* Number */}
                    <span
                        className={`
                shrink-0
                font-mono
                text-2xl
                font-bold
                leading-none
                transition-colors
                duration-300
                md:text-3xl
                text-(--azure-blue)
            `}
                    >
                        {project.number}
                    </span>

                    <div className="min-w-0">
                        {/* Title */}
                        <h3
                            className={`
                group
                font-mono
                text-xl
                font-bold
                leading-tight
                transition-all
                duration-300
                md:text-3xl
                ${isActive ? "translate-x-2 " : "text-(--ghost-white)"}
              `}
                        >
                            {project.title.split("").map((char, index) => {
                                if (char === " ") {
                                    return (
                                        <span
                                            key={index}
                                            className="text-transparent"
                                        >
                                            &nbsp;
                                        </span>
                                    );
                                }

                                const currentIndex = letterCount;
                                letterCount++;

                                return (
                                    <span
                                        key={index}
                                        className={`letter-fill-target bg-clip-text text-transparent  ${isActive ? "bg-position-[0%_0]!" : ""}`}
                                        style={{ "--index": currentIndex } as React.CSSProperties}
                                    >
                                        {char}
                                    </span>
                                );
                            })}
                        </h3>

                        {/* Category */}
                        <p
                            className="
                            mt-2
                            font-mono
                            text-xs
                            text-(--light-blue)
                            md:text-sm
                          "
                        >
                            {project.category}
                        </p>

                        {/* Technologies */}
                        <div
                            className="
                              mt-4
                              flex
                              flex-wrap
                              items-center
                              gap-x-3
                              gap-y-2
                              font-mono
                              text-xs
                              text-(--grey)
                              md:text-sm
                            "
                        >
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="flex items-center gap-2"
                                >
                                    <span className="h-2 w-2 rounded-full bg-(--grey)" />
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </button>

            {isHovered && !isSelected && (
                <ProjectPreview project={project} variant="teaser" />
            )}

            {/* Expanded content */}
            <AnimatePresence initial={false}>
                {isSelected && (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                    >
                        <div className="ml-10 mt-6 max-w-xl md:ml-16">
                            <ProjectPreview
                                project={project}
                                variant="selected"
                            />
                            <h4 className="font-mono text-sm font-bold text-(--ghost-white)">
                                What I Built
                            </h4>

                            <ul className="mt-3 space-y-2">
                                {project.description.map((item) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                        className="
                                        flex
                                        items-start
                                        gap-2
                                        font-mono
                                        text-xs
                                        leading-relaxed
                                        text-(--grey)
                                        md:text-sm
                                      "
                                    >
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--light-blue)" />

                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Case study */}
                            <a
                                href={project.caseStudyUrl}
                                onClick={(event) => event.stopPropagation()}
                                className="
                                  mt-6
                                  inline-flex
                                  items-center
                                  gap-2
                                  font-mono
                                  text-sm
                                  font-bold
                                  text-(--azure-blue)
                                  transition-all
                                  duration-300
                                  hover:gap-3
                                "
                            >
                                VIEW CASE STUDY
                                <BsArrowUpRight size={16} strokeWidth={2} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Separator */}
            <motion.div
                layout
                className="
          mt-7
          h-px
          w-full
          bg-(--light-blue)/50
        "
            />
        </motion.article>
    );
}
