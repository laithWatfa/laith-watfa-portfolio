"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import PrincipleItem from "./PrincipleItem";
const principles = [
    {
        number: "01.",
        title: "CLEAN INTERFACE",
        description: "Interfaces that feel intentional, not overloaded.",
    },
    {
        number: "02.",
        title: "RESPONSIVE BY DEFAULT",
        description: "Experiences that work across every screen.",
    },
    {
        number: "03.",
        title: "THOUGHTFUL INTERACTION",
        description: "Motion and feedback that have a purpose.",
    },
    {
        number: "04.",
        title: "MAINTAINABLE CODE",
        description: "Components and systems that remain easy to evolve.",
    },
];

export default function BuildPrinciples() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.3,
    });

    return (
        <section ref={sectionRef} className="mt-20 md:mt-24">
            {/* Heading */}
            <motion.h2
                initial={{
                    opacity: 0,
                    y: 18,
                }}
                animate={
                    isInView
                        ? {
                              opacity: 1,
                              y: 0,
                          }
                        : {
                              opacity: 0,
                              y: 18,
                          }
                }
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    mb-6
                    font-sans
                    text-4xl
                    font-bold
                    text-(--ghost-white)
                "
            >
                HOW I BUILD.
            </motion.h2>

            {/* Principles */}
            <div
                className="
                mt-10
                grid
                gap-2
                sm:grid-cols-2
                lg:grid-cols-4
                "
            >
                {principles.map((principle, index) => (
                    <PrincipleItem
                        key={principle.number}
                        principle={principle}
                        index={index}
                        isInView={isInView}
                    />
                ))}
            </div>
        </section>
    );
}
