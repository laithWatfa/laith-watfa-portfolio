import { motion } from "motion/react";

type PrincipleProps = {
    principle: {
        number: string;
        title: string;
        description: string;
    };
    index: number;
    isInView: boolean;
};

export default function PrincipleItem({ principle, index, isInView }: PrincipleProps) {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 24,
            }}
            animate={
                isInView
                    ? {
                          opacity: 1,
                          y: 0,
                      }
                    : {
                          opacity: 0,
                          y: 24,
                      }
            }
            transition={{
                duration: 0.65,
                delay: 0.12 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`
            group
            relative
            px-4
            py-5
            md:px-5
            md:py-6
            ${index !== 0 ? "md:border-l md:border-(--light-blue)/70" : ""}
      `}
        >
            {/* Animated vertical accent */}
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={
                    isInView
                            ? {
                                opacity: 1,
                            }
                            : {
                                opacity: 0,
                            }
                }
                transition={{
                    duration: 0.7,
                    delay: 0.05 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-px
                    origin-top
                    bg-(--azure-blue)
                    md:hidden
                    "
            />

            {/* Number + title */}
            <div
                className="
          flex
          items-baseline
          gap-1
        "
            >
                <motion.span
                    whileHover={{
                        x: 3,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="
            font-mono
            text-2xl
            font-bold
            text-(--azure-blue)
          "
                >
                    {principle.number}
                </motion.span>

                <motion.h3
                    whileHover={{
                        x: 3,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="
            font-mono
            text-lg
            font-bold
            tracking-tight
            text-(--azure-blue)
            md:text-lg
          "
                >
                    {principle.title}
                </motion.h3>
            </div>

            {/* Description */}
            <motion.p
                whileHover={{
                    x: 3,
                }}
                transition={{
                    duration: 0.25,
                }}
                className="
          mt-3
          md:max-w-xs
          font-mono
          text-base
          leading-relaxed
          text-(--light-blue)
          md:text-lg
        "
            >
                {principle.description}
            </motion.p>
        </motion.article>
    );
}
