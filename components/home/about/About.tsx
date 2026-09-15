"use client";
import { motion } from "motion/react";
import TechStack from "./stack/TechStack";
import BuildPrinciples from "./principles/BuildPrinciples";
import Footer from "@/components/ui/Footer";

const About = () => {
    return (
        <section
            id="about"
            className="relative
        z-20
        min-h-screen
        overflow-hidden
        px-8
        py-24
        pb-4
        md:px-14
        lg:px-20"
        >
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                exit={{ opacity: 0, x: -80 }}
                viewport={{
                    once: false,
                    margin: "0px 0px -30% 0px",
                }}
                transition={{
                    duration: 0.9,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <motion.h1 className="text-4xl text-(--azure-blue) font-bold font-mono uppercase mb-4 ">
                    from idea <br /> to interface.
                </motion.h1>
                <p className="font-mono md:text-2xl text-(--light-blue) lg:max-w-4/5 font-light">
                    I&apos;m a Front-End Developer focused on building modern,
                    responsive web experiences. I enjoy turning ideas into clean
                    interfaces and bringing them to life through thoughtful
                    interaction and motion.
                </p>
            </motion.div>

            <div className="mt-10">
                <h2
                    className="
                        mb-6
                        font-sans
                        text-4xl
                        font-bold
                        text-(--ghost-white)
                    "
                >
                    MY STACK
                </h2>

                <TechStack />
            </div>

            <BuildPrinciples />

            <Footer />
        </section>
    );
};

export default About;
