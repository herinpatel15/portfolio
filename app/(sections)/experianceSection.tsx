"use client"
// import { data } from '@/contents/contents'
// import React from 'react'
// import * as motion from 'motion/react-client'
// import { childVariant } from '../motionAnimation'

// function ExperienceSection() {
//   return (
//     <motion.div
//       className='border-[1px] border-sc rounded-3xl flex flex-col items-center justify-center py-10'
      // variants={childVariant}
      // initial='init'
      // whileInView='done'
      // viewport={{ amount: 0.9 }}
//     >
//       <motion.h1 className='text-6xl font-semibold text-pc'><span>1.5</span><span>{data.experience.number}</span></motion.h1>
//       <motion.h2 className='text-fg1 text-xl'>{data.experience.title}</motion.h2>
//     </motion.div>
//   )
// }

// export default ExperienceSection

"use client";
import { data } from "@/contents/contents";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { childVariant } from "../motionAnimation"

function ExperienceSection() {
  const [count, setCount] = useState(0); // State to store the current count
  const controls = useAnimation(); // Framer Motion animation controls
  const { ref, inView } = useInView({ threshold: 0.9 }); // Intersection observer for viewport tracking

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 1 } });

      let start = 0;
      const duration = 1500; // Duration in milliseconds
      const target = 1.5;

      const step = (timestamp: number) => {
        start = start || timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(parseFloat((progress * target).toFixed(1))) // Update the count state
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="border-[1px] border-sc rounded-3xl flex flex-col items-center justify-center py-10"
      // initial={{ opacity: 0 }}
      // animate={controls}
      variants={childVariant}
      initial='init'
      whileInView='done'
      viewport={{ amount: 0.9 }}
    >
      <motion.h1 className="text-6xl font-semibold text-pc">
        <span>{count}</span>
        <span>{data.experience.number}</span>
      </motion.h1>
      <motion.h2 className="text-fg1 text-xl">{data.experience.title}</motion.h2>
    </motion.div>
  );
}

export default ExperienceSection;
