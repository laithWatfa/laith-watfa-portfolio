"use client";

import { motion } from "motion/react";

import TechNode from "./TechNode";
import { technologies, type TechCategory } from "./techData";

type TechCategoryProps = {
    category: string;
    title: string;
    isInView: boolean;
    activeTech: string | null;
    connectedIds: Set<string>;
    onHover: (id: string) => void;
    nodeRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
};

export default function TechCategory({
    category,
    title,
    isInView,
    activeTech,
    connectedIds,
    onHover,
    nodeRefs,
}: TechCategoryProps) {
    const categoryTechs = technologies.filter(
        (tech) => tech.category === category,
    );
    console.log(category, categoryTechs );
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={
                isInView
                    ? {
                          opacity: 1,
                          y: 0,
                      }
                    : {
                          opacity: 0,
                          y: 20,
                      }
            }
            transition={{
                duration: 0.5,
            }}
        >
            <h3
                className="
                    mb-6
                    font-sans
                    text-3xl
                    font-bold
                    text-(--grey)
                    "
            >
                {title}
            </h3>

            <div className="flex flex-wrap gap-x-7 gap-y-5">
                {categoryTechs.map((tech, index) => (
                    <motion.div
                        key={tech.id}
                        initial={{
                            opacity: 0,
                            y: 8,
                        }}
                        animate={
                            isInView
                                ? {
                                    opacity: 1,
                                    y: 0,
                                }
                                : {
                                    opacity: 0,
                                    y: 8,
                                }
                        }
                        transition={{
                            duration: 0.35,
                            delay: 0.15 + index * 0.05,
                        }}
                    >
                        <TechNode
                            tech={tech}
                            isActive={activeTech === tech.id}
                            isConnected={connectedIds.has(tech.id)}
                            onHover={() => onHover(tech.id)}
                            onLeave={() => {}}
                            nodeRef={(element) => {
                                nodeRefs.current[tech.id] = element;
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
