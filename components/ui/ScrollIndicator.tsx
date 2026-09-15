"use client"
import React from 'react'
import { motion, useScroll, useSpring } from "motion/react"

const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll()
    
    // Smooth out the raw scroll value using a spring physics configuration
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 80, // Higher numbers mean faster catch-up
        damping: 50,    // Higher numbers reduce bounce/jitter
        restDelta: 0.001
    })

    return (
        <div className='fixed z-50 w-1.5 md:w-2 right-3  md:right-8 top-1/2 -translate-y-1/2 h-24 rounded-full bg-(--ghost-white) overflow-hidden'>
            <motion.div
                id="scroll-indicator"
                className='w-full rounded-full'
                style={{
                    scaleY: scaleY, // Use the smoothed spring value here
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "100%", // Changed from 100 to "100%" to properly scale within the parent container
                    originY: 0,
                    backgroundColor: "var(--azure-blue)",
                }}
            />
        </div>
    )
}

export default ScrollIndicator
