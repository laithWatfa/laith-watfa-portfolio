"use client";

import { motion } from "motion/react";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
    return (
        
        <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{opacity: 0, y: -40}}
        viewport={{
            once: false,
            margin: "-50px 0px -50px 0px",
        }}
        transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
        }}
        
        >
        <nav className="absolute top-0 right-0 z-20 px-8 py-8 md:px-12 md:py-10">
            <div className="flex items-center gap-10 text-lg font-bold text-(--ghost-white) md:text-2xl">
            <a
            href="#about"
            className="group transition-colors duration-300 hover:text-(--azure-blue) flex items-center gap-2 "
            >
            <MdArrowOutward className="w-0 h-0 transition-all group-hover:w-6 group-hover:h-6 duration-300 "/>
            About Me
            </a>

                        <a
            href="#projects"
            className="group transition-colors duration-300 hover:text-(--azure-blue) flex items-center gap-2 "
            >
            <MdArrowOutward className="w-0 h-0 transition-all group-hover:w-6 group-hover:h-6 duration-300 "/>
            Projects
            </a>
        </div>
        </nav>
        {/* <div className="flex items-center gap-10 text-lg font-bold text-(--ghost-white) md:text-2xl">
            <a
            href="#about"
            className="group transition-colors duration-300 hover:text-(--azure-blue) flex items-center gap-2 "
            >
            <MdArrowOutward className="w-0 h-0 transition-all group-hover:w-6 group-hover:h-6 duration-300 "/>
            About Me
            </a>

                        <a
            href="#projects"
            className="group transition-colors duration-300 hover:text-(--azure-blue) flex items-center gap-2 "
            >
            <MdArrowOutward className="w-0 h-0 transition-all group-hover:w-6 group-hover:h-6 duration-300 "/>
            Projects
            </a>
        </div> */}
        </motion.div>
    );
}