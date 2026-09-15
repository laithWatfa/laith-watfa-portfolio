import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
    const [copied, setCopied] = useState(false);
    return (
        <motion.footer
            initial={{
                opacity: 0,
                y: 24,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.65,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
            }}
            className=" w-full px-8 mt-25 flex flex-col md:flex-row gap-4 items-center md:items-end justify-between"
        >
            <div className="relative flex flex-col items-center md:items-start gap-3 text-lg">
                Have a project in mind?
                <a
                    href="mailto:laith.2723@gmail.com"
                    onClick={() => {
                        navigator.clipboard.writeText("laith.2723@gmail.com");
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                    }}
                    className="group flex gap-2 items-center font-bold text-2xl md:text-3xl xl:text-4xl hover:text-(--azure-blue) duration-300"
                >
                    <FaArrowRight className="w-0 h-0 group-hover:w-6 group-hover:h-6 duration-300" />
                    laith.2723@gmail.com
                </a>
                <AnimatePresence>
                    {copied ? (
                        <motion.span
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: 24,
                                transition: { delay: 0, duration: 0.4 },
                            }}
                            transition={{
                                duration: 0.65,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute right-0 text-xs text-(--light-blue) top-4"
                        >
                            {" "}
                            ✓ Copied to clipboard!{" "}
                        </motion.span>
                    ) : (
                        <></>
                    )}
                </AnimatePresence>
            </div>

            <span className="text-(--grey) font-bold">
                Designed & Built By Laith Watfa{" "}
            </span>
        </motion.footer>
    );
};

export default Footer;
