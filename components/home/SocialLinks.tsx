"use client";

import { motion } from "motion/react";
import { BsLinkedin, BsGithub ,  } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function ContactLinks() {
    return (
        <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit= {{opacity: 0 , x: 80}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{ once: false, margin: "0px 0px -40% 0px" }}
        transition={{
            duration: 0.8,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
        }}
        className="
            absolute
            right-8
            bottom-8
            z-12
            flex
            items-center
            gap-6
            md:right-12
            md:bottom-10
        "
        >
        <a
            href="mailto:laith.2723@gmail.com"
            className="
            hidden
            
            text-sm
            text-(--ghost-white)
            transition-colors
            duration-300
            hover:text-(--azure-blue)
            md:block
            md:text-xl
            "
        >
            laith.2723@gmail.com
        </a>

        <div className="flex items-center gap-4">
            <a
            href="https://github.com/laithWatfa"
            target="_blank"
            aria-label="GitHub"
            className="text-(--azure-blue) transition-transform duration-300 hover:scale-110"
            >
            <BsGithub className=" w-8 h-8"/>
            </a>

            <a
            href="https://www.linkedin.com/in/laith-watfa-8276303a1/"
            aria-label="LinkedIn"
            className="text-(--azure-blue) transition-transform duration-300 hover:scale-110"
            >
            <BsLinkedin className=" w-8 h-8"/>
            </a>

            <a
            href="https://www.instagram.com/laithwatfa/"
            aria-label="Instagram"
            className="text-(--azure-blue) transition-transform duration-300 hover:scale-110"
            >
            <AiFillInstagram className=" w-10 h-10"/>
            </a>
        </div>
        </motion.div>
    );
}


