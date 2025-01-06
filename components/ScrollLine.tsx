"use client"
import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";

function ScrollLine() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <motion.div
            className="fixed left-0 right-0 h-[5px] bg-pc top-[0px] z-50"
            style={{ scaleX }}
        />
    )
}

export default ScrollLine