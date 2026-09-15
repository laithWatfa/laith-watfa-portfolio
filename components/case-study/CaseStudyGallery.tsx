"use client";

import Image from "next/image";
import { AnimatePresence, motion, PanInfo } from "motion/react";

import {
    BiChevronLeft as ChevronLeft,
    BiChevronRight as ChevronRight,
} from "react-icons/bi";
import { useEffect, useState } from "react";

import { ProjectImage } from "@/types/projects";

interface Props {
    images: ProjectImage[];
}

type Direction = 1 | -1;

export default function CaseStudyGallery({ images }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<Direction>(1);

    const total = images.length;

    
    /*
     * Keyboard navigation
     */
        const next = () => {
        setDirection(1);

        setActiveIndex((current) => (current + 1) % total);
    };

    const previous = () => {
        setDirection(-1);

        setActiveIndex((current) => (current - 1 + total) % total);
    };


        useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") {
                next();
            }

            if (event.key === "ArrowLeft") {
                previous();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    if (!total) return null;

    const previousIndex = (activeIndex - 1 + total) % total;

    const nextIndex = (activeIndex + 1) % total;


    /*
     * Drag / swipe
     */
    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) => {
        const swipeDistance = 70;

        if (info.offset.x < -swipeDistance) {
            next();
        }

        if (info.offset.x > swipeDistance) {
            previous();
        }
    };

    return (
        <section className="relative mt-12 w-full">
            {/* ========================================
          DESKTOP
      ======================================== */}

            <div className="relative hidden h-140 w-full items-center justify-center md:flex">
                {/* Background / side images */}

                {total > 1 && (
                    <>
                        {/* LEFT PREVIEW */}
                        <button
                            type="button"
                            onClick={previous}
                            aria-label="Previous image"
                            className="
                                group
                                absolute
                                -left-37.5
                                z-10
                                h-75
                                w-105
                                overflow-hidden
                                rounded-lg
                                opacity-40
                                transition-all
                                duration-500
                                hover:scale-[1.03]
                                hover:opacity-70
                                focus:outline-none
                            "
                        >
                            <motion.div
                                key={previousIndex}
                                initial={{
                                    opacity: 0,
                                    x: -25,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeOut",
                                }}
                                className="relative h-full w-full"
                            >
                                <Image
                                    src={images[previousIndex].src}
                                    alt={images[previousIndex].alt}
                                    fill
                                    sizes="420px"
                                    className="
                                    object-contain
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                    rounded-md
                                "
                                />

                                {/* Hover overlay */}
                                <div
                                    className="
                                    absolute
                                    inset-0
                                    bg-azure-blue/0
                                    transition-colors
                                    duration-500
                                    group-hover:bg-azure-blue/5
                                "
                                />
                            </motion.div>
                        </button>

                        {/* RIGHT PREVIEW */}
                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next image"
                            className="
                                group
                                absolute
                                -right-37.5
                                z-10
                                h-75
                                w-105
                                overflow-hidden
                                rounded-lg
                                opacity-40
                                transition-all
                                duration-500
                                hover:scale-[1.03]
                                hover:opacity-70
                                focus:outline-none
                            "
                        >
                            <motion.div
                                key={nextIndex}
                                initial={{
                                    opacity: 0,
                                    x: 25,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeOut",
                                }}
                                className="relative h-full w-full"
                            >
                                <Image
                                    src={images[nextIndex].src}
                                    alt={images[nextIndex].alt}
                                    fill
                                    sizes="420px"
                                    className="
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                                />

                                <div
                                    className="
                    absolute
                    inset-0
                    bg-azure-blue/0
                    transition-colors
                    duration-500
                    group-hover:bg-azure-blue/5
                  "
                                />
                            </motion.div>
                        </button>
                    </>
                )}

                {/* ========================================
            MAIN IMAGE
        ======================================== */}

                <div className="relative z-20 flex h-115 w-190 rounded-lg items-center justify-center overflow-hidden">
                    <AnimatePresence
                        initial={false}
                        custom={direction}
                        mode="wait"
                    >
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={{
                                enter: (direction: Direction) => ({
                                    x: direction * 80,
                                    opacity: 0,
                                    scale: 0.97,
                                }),

                                center: {
                                    x: 0,
                                    opacity: 1,
                                    scale: 1,
                                },

                                exit: (direction: Direction) => ({
                                    x: direction * -80,
                                    opacity: 0,
                                    scale: 0.97,
                                }),
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            drag="x"
                            dragConstraints={{
                                left: 0,
                                right: 0,
                            }}
                            dragElastic={0.15}
                            onDragEnd={handleDragEnd}
                            className="
                relative
                h-full
                w-full
                cursor-grab
                
                active:cursor-grabbing
              "
                        >
                            <Image
                                src={images[activeIndex].src}
                                alt={images[activeIndex].alt}
                                fill
                                priority={activeIndex === 0}
                                sizes="760px"
                                className="object-contain rounded-lg pointer-events-none"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ========================================
            ARROWS
        ======================================== */}

                <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous image"
                    className="
            absolute
            left-4
            z-30
            rounded-full
            p-3
            text-light-blue
            transition-all
            duration-300
            hover:scale-110
            hover:text-azure-blue
            focus:outline-none
          "
                >
                    <ChevronLeft size={32} />
                </button>

                <button
                    type="button"
                    onClick={next}
                    aria-label="Next image"
                    className="
            absolute
            right-4
            z-30
            rounded-full
            p-3
            text-light-blue
            transition-all
            duration-300
            hover:scale-110
            hover:text-azure-blue
            focus:outline-none
          "
                >
                    <ChevronRight size={32} />
                </button>

                {/* ========================================
            COUNTER
        ======================================== */}

                <div
                    className="
            absolute
            bottom-2
            left-1/2
            -translate-x-1/2
            font-mono
            text-sm
            text-grey
          "
                >
                    <span className="text-light-blue">
                        {String(activeIndex + 1).padStart(2, "0")}
                    </span>

                    <span className="mx-2">/</span>

                    {String(total).padStart(2, "0")}
                </div>
            </div>

            {/* ========================================
          MOBILE
      ======================================== */}

            <div className="md:hidden">
                <div className="relative overflow-hidden">
                    <AnimatePresence
                        initial={false}
                        custom={direction}
                        mode="wait"
                    >
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={{
                                enter: (direction: Direction) => ({
                                    x: direction * 60,
                                    opacity: 0,
                                }),

                                center: {
                                    x: 0,
                                    opacity: 1,
                                },

                                exit: (direction: Direction) => ({
                                    x: direction * -60,
                                    opacity: 0,
                                }),
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            drag="x"
                            dragConstraints={{
                                left: 0,
                                right: 0,
                            }}
                            dragElastic={0.2}
                            onDragEnd={handleDragEnd}
                            className="
                relative
                aspect-video
                w-full
                cursor-grab
                active:cursor-grabbing
              "
                        >
                            <Image
                                src={images[activeIndex].src}
                                alt={images[activeIndex].alt}
                                fill
                                sizes="100vw"
                                className="object-contain"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Mobile arrows */}

                    <button
                        type="button"
                        onClick={previous}
                        aria-label="Previous image"
                        className="
              absolute
              left-2
              top-1/2
              z-20
              -translate-y-1/2
              rounded-full
              p-2
              text-light-blue
            "
                    >
                        <ChevronLeft size={26} />
                    </button>

                    <button
                        type="button"
                        onClick={next}
                        aria-label="Next image"
                        className="
              absolute
              right-2
              top-1/2
              z-20
              -translate-y-1/2
              rounded-full
              p-2
              text-light-blue
            "
                    >
                        <ChevronRight size={26} />
                    </button>
                </div>

                {/* Mobile counter */}

                <div className="mt-4 text-center font-mono text-sm text-grey">
                    <span className="text-light-blue">
                        {String(activeIndex + 1).padStart(2, "0")}
                    </span>

                    <span className="mx-2">/</span>

                    {String(total).padStart(2, "0")}
                </div>
            </div>
        </section>
    );
}
