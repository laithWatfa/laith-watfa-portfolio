"use client";

import { motion } from "motion/react";
import { TbArrowBigLeftFilled as ArrowLeft } from "react-icons/tb";
import { useRouter } from "next/navigation";

import { CaseStudyProject } from "@/types/projects";
import CaseStudyGallery from "./CaseStudyGallery";
import CaseStudyHeader from "./CaseStudyHeader";
import CaseStudyInfo from "./CaseStudyInfo";
import CaseStudyActions from "./CaseStudyActions";
import StarField from "../home/StarField";
import ScrollIndicator from "../ui/ScrollIndicator";
import Footer from "../ui/Footer";




interface CaseStudyProps {
    project: CaseStudyProject;
}

export default function CaseStudy({ project }: CaseStudyProps) {
    const router = useRouter();

    return (
        <main className="relative min-h-screen overflow-hidden  text-(--ghost-white)">
            <StarField />
            <ScrollIndicator />
            {/* Existing stars/background can live here */}

            <div className="relative z-10 mx-auto max-w-300 px-6 py-12 md:px-10 lg:px-16">
                {/* Back */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => router.back()}
                    className="
                        group
                        mb-12
                        flex
                        items-center
                        gap-2
                        text-2xl
                        font-bold
                        text-grey
                        transition-colors
                        duration-300
                        hover:text-(--azure-blue)
                    "
                >
                    <ArrowLeft
                        size={28}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />

                    <span>back</span>
                </motion.button>

                {/* Header */}
                <CaseStudyHeader project={project} />

                {/* Information */}
                <CaseStudyInfo project={project} />

                {/* Actions */}
                <CaseStudyActions project={project} />

                {/* Gallery */}
                <CaseStudyGallery images={project.images} />

                <Footer />
            </div>
        </main>
    );
}
