"use client";

import {  motion } from "motion/react";
import Navbar from "./Navbar";
import StarField from "./StarField";
import ContactLinks from "./SocialLinks";

export default function Hero() {
    return (
        <section className="relative z-10 min-h-screen overflow-hidden bg-var(--black)">
        <StarField />

        <Navbar />

        
        <motion.main
            initial={{ opacity: 0, x: -80 }}
            whileInView={{
            opacity: 1,
            x: 0,
            }}
            exit= {{opacity: 0 , x: -80}}
            viewport={
                {
                once: false,
                margin: "0px 0px -40% 0px" 
                }
            }
            
            transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
            }}
            className="
            relative z-10
            flex min-h-screen
            items-center
            px-8
            md:px-12
            "
        >
            <div className="max-w-3xl">
            <h1 className="font-black uppercase leading-[0.85]  -tracking-widest ">
                <span className="block text-5xl sm:text-[clamp(4rem,9vw,9rem)] text-(--azure-blue)">
                FrontEnd
                </span>

                <span className="ml-8 block text-5xl sm:text-[clamp(4rem,9vw,9rem)] text-(--light-blue) md:ml-12">
                Developer
                </span>
            </h1>

            <p className="mt-8 max-w-xl  text-sm leading-relaxed text-(--grey) md:text-base">
                Hi! I&apos;m <span className="text-(--ghost-white)">Laith</span>. A Frontend Developer crafting polished,
                interactive web applications with Next.js, React &amp; TypeScript.
            </p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{
                    amount:0.2,
                    once: false,
                }}

                transition={{
                duration: 0.6,
                delay: 1.05,
                }}
                className="mt-8 flex items-center gap-3 font-mono text-sm text-(--light-blue) md:text-base"
            >
                <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--light-blue) opacity-40" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-(--light-blue)" />
                </span>

                AVAILABLE FOR WORK
            </motion.div>
            </div>
        </motion.main>



        <ContactLinks />
        </section>
  );
}