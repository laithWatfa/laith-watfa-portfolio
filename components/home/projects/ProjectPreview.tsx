"use client";

import { AnimatePresence, motion } from "motion/react";
import type { Project } from "../../../data/project-preview-data";
import Image from "next/image";
import { useState } from "react";
import { BiChevronLeft as ChevronLeft, BiChevronRight as ChevronRight } from "react-icons/bi";


type ProjectPreviewProps = {
    project: Project;
    variant?: "selected" | "teaser";
};


export default function ProjectPreview({
    project,
    variant = "selected",
}: ProjectPreviewProps) {

    const isTeaser = variant === "teaser";
  
      return (
        <AnimatePresence mode="wait">
            <motion.div
            layout
            key={project.id}
            initial={{
                opacity: 0,
                x: isTeaser ? 0 : 30,
                scale: 0.96,
            }}
            animate={{
                opacity: 1,
                x: 0,
                scale: isTeaser ? 0.94 : 0.96,
            }}
            exit={{
                opacity: 0,
                x: -20,
                scale: 0.97,
            }}
            transition={{
                duration: isTeaser ? 0.3 :  0.45,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={
                isTeaser
                ? `
                relative
                md:absolute
                right-0
                top-1/2
                hidden
                w-[26%]
                -translate-y-1/2
                lg:block
                `
                : `              
                lg:absolute
                lg:left-[calc(100%+1vw)]
                lg:top-1/2
                w-80vw
                lg:w-[40vw]
                lg:-translate-y-1/2
                block
            `
        }
            >
            {isTeaser ? (
                <TeaserImage project={project} />
                ) : (
                <SelectedPreview project={project} />
            )}
            </motion.div>
        </AnimatePresence>
    );
    // return <SelectedPreview project={project} />
}



function TeaserImage({ project }: { project: Project }) {
  return (
    <motion.div
                    initial={{
                opacity: 0.2,
                y: -40,
                scale: 0.8,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale:  0.96,
            }}
            exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
            }}
            transition={{
                duration:  1.5,
                ease: [0.22, 1, 0.36, 1],
            }}
      className="
        ml-auto
        rounded-md
        overflow-hidden
        border
        border-(--ghost-white)
        bg-(--black)
        absolute
        left-[calc(100%+12vw)]
        top-1/2
        hidden
        w-[25vw]
        -translate-y-1/2
        lg:block
      "
    >
        <Image
            src={project.images.main}
            alt=""
            width={600}
            height={338}
            className="
            aspect-video
            w-full
            object-cover
            "
        />
    </motion.div>
  );
}


function SelectedPreview({
  project,
}: {
  project: ProjectPreviewProps["project"];
}) {
  const images = [
    project.images.left,
    project.images.main,
    project.images.right,
  ].filter(Boolean) as string[];

  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const getIndex = (index: number) => {
    return (index + images.length) % images.length;
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((current) => getIndex(current + 1));
  };

  const goPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => getIndex(current - 1));
  };

  const leftIndex = getIndex(activeIndex - 1);
  const rightIndex = getIndex(activeIndex + 1);

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Preview stage */}
      <div className="relative touch-pan-y flex  items-center justify-center h-60 lg:max-h-105 ">

        {/* LEFT IMAGE */}
        <motion.div
          key={`left-${leftIndex}`}
          initial={{
            x: direction > 0 ? -80 : 80,
            opacity: 0.35,
          }}
          animate={{
            x: 0,
            opacity: 0.35,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="
            absolute
            left-[-5%]
            z-0
            w-[35%]
            overflow-hidden
            rounded-xl
            border
            border-white/10
            lg:block
          "
        >
          <Image
            src={images[leftIndex]}
            alt=""
            width={600}
            height={338}
            className="aspect-video w-full object-cover"
          />
        </motion.div>

        {/* MAIN / ACTIVE IMAGE */}
        <motion.div
          key={`main-${activeIndex}`}
          custom={direction}
          variants={{
            enter: (direction: number) => ({
              x: direction > 0 ? 80 : -80,
              opacity: 0.45,
              scale: 0.75,
            }),
            center: {
              x: 0,
              opacity: 1,
              scale: 1,
            },
            exit: (direction: number) => ({
              x: direction > 0 ? -80 : 80,
              opacity: 0.35,
              scale: 0.75,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            const swipeThreshold = 80;

            if (info.offset.x < -swipeThreshold) {
              goNext();
            } else if (info.offset.x > swipeThreshold) {
              goPrevious();
            }
          }}
          className="
            relative
            z-10
            w-[88%]
            overflow-hidden
            rounded-2xl
            border
            border-azure-blue/30
            bg-black
            shadow-2xl
            sm:w-[80%]
            lg:w-[62%]
          "
        >
          <Image
            src={images[activeIndex]}
            alt={`${project.title} screenshot`}
            width={1200}
            height={675}
            className="block aspect-video w-full object-cover pointer-events-none"
            priority
          />

          {/* Previous */}
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous screenshot"
            className="
              hidden
              md:flex
              absolute
              left-3
              top-1/2
              z-20
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/60
              text-white
              backdrop-blur-md
              transition
              hover:border-azure-blue
              hover:bg-azure-blue
              sm:left-4
              sm:h-10
              sm:w-10
            "
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next screenshot"
            className="
              absolute
              right-3
              top-1/2
              z-20
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/60
              text-white
              backdrop-blur-md
              transition
              hover:border-azure-blue
              hover:bg-azure-blue
              sm:right-4
              sm:h-10
              sm:w-10
            "
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          key={`right-${rightIndex}`}
          initial={{
            x: direction < 0 ? 80 : -80,
            opacity: 0.35,
          }}
          animate={{
            x: 0,
            opacity: 0.35,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="
            absolute
            right-[-5%]
            z-0
            w-[35%]
            overflow-hidden
            rounded-xl
            border
            border-white/10
            lg:block
          "
        >
          <Image
            src={images[rightIndex]}
            alt=""
            width={600}
            height={338}
            className="aspect-video w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Pagination */}
      <div className="mt-3 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
            aria-label={`Show screenshot ${index + 1}`}
            className="p-1"
          >
            <span
              className={`
                block h-1.5 rounded-full transition-all duration-300
                ${
                  index === activeIndex
                    ? "w-6 bg-(--azure-blue)"
                    : "w-1.5 bg-(--ghost-white)/70 hover:bg-(--azure-blue)/80 cursor-pointer"
                }
              `}
            />
          </button>
        ))}
      </div>
    </div>
  );
}



