"use client";

import { motion } from "motion/react";
import { IconType } from "react-icons";

type TechNodeProps = {
    tech: {
        id: string;
        name: string;
        description: string;
        icon: IconType;
    };
    isActive: boolean;
    isConnected: boolean;
    onHover: () => void;
    onLeave: () => void;
    nodeRef: (element: HTMLDivElement | null) => void;
};

export default function TechNode({
    tech,
    isActive,
    isConnected,
    onHover,
    onLeave,
    nodeRef,
}: TechNodeProps) {
    const Icon = tech.icon;

    return (
        <div
            ref={nodeRef}
            className="relative"
            onMouseEnter={onHover}
            onClick={(event) => {
                event.stopPropagation();
                onHover();
            }}
            onMouseLeave={onLeave}
        >
            <motion.div
                animate={{
                    opacity: isActive ? 1 : isConnected ? 1 : 0.7,

                    x: isActive ? 4 : 0,
                }}
                transition={{
                    duration: 0.25,
                    ease: "easeOut",
                }}
                className="group flex cursor-pointer items-center gap-2"
            >
                {/* Node */}
                <motion.span
                    animate={{
                        scale: isActive ? [1, 1.15, 1] : 1,
                        color: isActive
                            ? "var(--azure-blue)"
                            : isConnected
                              ? "var(--light-blue)"
                              : "var(--ghost-white)",
                    }}
                    transition={{
                        scale: {
                            duration: 1.6,
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut",
                        },
                    }}
                >
                    <Icon size={18} />
                </motion.span>

                {/* Technology name */}
                <motion.span
                    animate={{
                        color: isActive
                            ? "var(--azure-blue)"
                            : isConnected
                              ? "var(--light-blue)"
                              : "var(--ghost-white)",
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="font-mono text-xl"
                >
                    {tech.name}
                </motion.span>
            </motion.div>

            {/* Description */}
            {isActive && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 6,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: 6,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="
                        absolute
                        left-0
                        top-full
                        z-30
                        mt-3
                        w-60
                        border
                        border-(--azure-blue)/30
                        bg-gray-900/20
                        p-3
                        rounded-md
                        backdrop-blur-md
                    "
                >
                    <div className="mb-1 font-mono text-xs uppercase tracking-wider text-(--azure-blue)">
                        {tech.name}
                    </div>

                    <p className="font-mono text-xs leading-relaxed text-(--light-blue)">
                        {tech.description}
                    </p>
                </motion.div>
            )}
        </div>
    );
}
