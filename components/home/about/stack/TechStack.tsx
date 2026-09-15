"use client";

import { useEffect, useRef, useState } from "react";
import {
    motion,
    useInView,
    useMotionValue,
    useSpring,
} from "motion/react";

interface Position {
    x : number;
    y : number;
}

import { technologies } from "./techData";
import TechCategory from "./TechCategory";
import TechConnections from "./TechConnections";



export default function TechStack() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.2,
    });

    const [activeTech, setActiveTech] = useState<string | null>(null);

    const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const [positions, setPositions] = useState<
        Record<string, { x: number; y: number }>
    >({});

    /*
     * Mouse position
     */
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {
        stiffness: 80,
        damping: 20,
    });

    const springY = useSpring(mouseY, {
        stiffness: 80,
        damping: 20,
    });

    /*
     * Measure node positions
     */
    useEffect(() => {
        const updatePositions = () => {
            const container = sectionRef.current;

            if (!container) return;

            const containerRect = container.getBoundingClientRect();

            const nextPositions: Record<string, { x: number; y: number }> = {};

            Object.entries(nodeRefs.current).forEach(([id, element]) => {
                if (!element) return;

                const rect = element.getBoundingClientRect();

                nextPositions[id] = {
                    x: rect.left - containerRect.left + rect.width / 2,
                    y: rect.top - containerRect.top + rect.height / 2,
                };
            });

            setPositions(nextPositions);
        };

        updatePositions();

        const resizeObserver = new ResizeObserver(updatePositions);

        if (sectionRef.current) {
            resizeObserver.observe(sectionRef.current);
        }

        window.addEventListener("resize", updatePositions);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updatePositions);
        };
    }, []);

    /*
     * Mouse parallax
     */
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const relativeX = (event.clientX - rect.left) / rect.width - 0.5;

        const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(relativeX * 8);
        mouseY.set(relativeY * 8);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setActiveTech(null);
    };

    /*
     * Connected technologies
     */
    const connectedIds = new Set(
        activeTech
            ? (technologies.find((tech) => tech.id === activeTech)
                  ?.connections ?? [])
            : [],
    );

    const activeConnections =
  activeTech
    ? (
        technologies.find(
          (tech) => tech.id === activeTech,
        )?.connections ?? []
      )
        .map((connectionId) => {
          const from =
            positions[activeTech];

          const to =
            positions[connectionId];

          if (!from || !to) {
            return null;
          }

          return {
            key: `${activeTech}-${connectionId}`,
            from,
            to,
          };
        })
        .filter(
          (
            connection,
          ): connection is {
            key: string;
            from: Position;
            to: Position;
          } => connection !== null,
        )
    : [];

    return (
        <motion.section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveTech(null)}
            className="relative
            border-l-2 pl-8 border-(--light-blue)"
            style={{
                x: springX,
                y: springY,
            }}
        >

            <TechConnections
                connections={activeConnections}
            />

            {/* Content */}
            <div className="relative z-10">
                <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
                    {/* {categories.map((category, categoryIndex) => {
                        const categoryTechs = technologies.filter(
                            (tech) => tech.category === category.id,
                        );

                        return (
                            <motion.div
                                key={category.id}
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
                                    delay: 0.1 + categoryIndex * 0.1,
                                }}
                                className="relative"
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
                                    {category.label}
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
                                                delay:
                                                    0.2 +
                                                    categoryIndex * 0.1 +
                                                    index * 0.04,
                                            }}
                                        >
                                            <TechNode
                                                tech={tech}
                                                isActive={
                                                    activeTech === tech.id
                                                }
                                                isConnected={connectedIds.has(
                                                    tech.id,
                                                )}
                                                onHover={() =>
                                                    setActiveTech(tech.id)
                                                }
                                                onLeave={() => {}}
                                                nodeRef={(element) => {
                                                    nodeRefs.current[tech.id] =
                                                        element;
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })} */}
                    <TechCategory
                    category="frontend"
                    title="FRONTEND"
                    isInView={isInView}
                    activeTech={activeTech}
                    connectedIds={connectedIds}
                    onHover={setActiveTech}
                    nodeRefs={nodeRefs}
                    />

                    <div className="flex flex-col gap-10">
                    <TechCategory
                        category="backend"
                        title="BACKEND"
                        isInView={isInView}
                        activeTech={activeTech}
                        connectedIds={connectedIds}
                        onHover={setActiveTech}
                        nodeRefs={nodeRefs}
                    />

                    <TechCategory
                        category="tools"
                        title="TOOLS"
                        isInView={isInView}
                        activeTech={activeTech}
                        connectedIds={connectedIds}
                        onHover={setActiveTech}
                        nodeRefs={nodeRefs}
                    />
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
