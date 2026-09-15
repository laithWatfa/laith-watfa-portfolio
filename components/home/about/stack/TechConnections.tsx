"use client";

import { AnimatePresence, motion } from "motion/react";

type Position = {
    x: number;
    y: number;
};

type TechConnection = {
    from: Position;
    to: Position;
    key: string;
};

type TechConnectionsProps = {
    connections: TechConnection[];
};

export default function TechConnections({ connections }: TechConnectionsProps) {
    return (
        <svg
            className="
        pointer-events-none
        absolute
        inset-0
        z-0
        h-full
        w-full
        overflow-visible
      "
            aria-hidden="true"
        >
            <defs>
                {/* Subtle glow */}
                <filter
                    id="connection-glow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                >
                    <feGaussianBlur stdDeviation="2" result="blur" />

                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <AnimatePresence>
                {connections.map((connection) => {
                    const path = createOrganicPath(
                        connection.from,
                        connection.to,
                    );

                    return <Connection key={connection.key} path={path} />;
                })}
            </AnimatePresence>
        </svg>
    );
}

function createOrganicPath(from: Position, to: Position) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    /*
     * Perpendicular direction.
     *
     * This lets us push the control points
     * away from the direct line.
     */
    const perpendicularX = -dy / distance;
    const perpendicularY = dx / distance;

    /*
     * Keep the curve subtle.
     *
     * We don't want a giant arc.
     */
    const curveAmount = Math.min(distance * 0.15, 35);

    const control1 = {
        x: from.x + dx * 0.35 + perpendicularX * curveAmount,

        y: from.y + dy * 0.35 + perpendicularY * curveAmount,
    };

    const control2 = {
        x: from.x + dx * 0.65 - perpendicularX * curveAmount,

        y: from.y + dy * 0.65 - perpendicularY * curveAmount,
    };

    return `
        M ${from.x} ${from.y}
        C
        ${control1.x} ${control1.y},
        ${control2.x} ${control2.y},
        ${to.x} ${to.y}
    `;
}

function Connection({
    path,
    }: {
    path: string;
    }) {
    return (
        <motion.g
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
        }}
        exit={{
            opacity: 0,
        }}
        transition={{
            duration: 0.25,
        }}
        >
        {/* Base line */}
        <motion.path
            d={path}
            fill="none"
            stroke="var(--azure-blue)"
            strokeWidth="1"
            strokeOpacity="0.5"
            initial={{
            pathLength: 0,
            }}
            animate={{
            pathLength: 1,
            }}
            exit={{
            pathLength: 0,
            }}
            transition={{
            duration: 0.45,
            ease: "easeOut",
            }}
        />

        {/* Animated signal */}
        <circle
            r="2.5"
            fill="var(--azure-blue)"
        >
            <animateMotion
            dur="1.8s"
            repeatCount="indefinite"
            path={path}
            />

            <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="1.8s"
            repeatCount="indefinite"
            />
        </circle>
        </motion.g>
    );
}