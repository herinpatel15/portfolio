// "use client"
// import React, { useRef } from 'react'
// import * as motion from "motion/react-client"
// import {
//     useScroll,
//     useSpring,
//     useTransform,
//     MotionValue
// } from "framer-motion"
// import SimpalImage from '@/components/SimpalImage'
// import { data } from '@/contents/contents'

// function useParallax(value: MotionValue<number>, distance: number) {
//     return useTransform(value, [0, 1], [-distance, distance])
// }

// function ImageMy({id, img}: {id: number, img: string}) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "end start"]})
//     const y = useParallax(scrollYProgress, 300)

//     return (
//         <section className='h-screen flex items-center justify-center relative snap-center perspective-500'>
//             <div className='w-[300px] h-[400px] relative max-h-[90vh] m-[20px] bg-white overflow-hidden'>
//                 <SimpalImage src={img} />
//             </div>
//             <motion.h2 style={{y: y as any}}>{`#00${id}`}</motion.h2>
//         </section>
//     )
// }

// function WorkPage() {
//     const {scrollYProgress} = useScroll()
//     const scaleX = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 30,
//         restDelta: 0.001
//     })
//   return (
//     <div>
//         {
//             data.work.workFields.map((e, ind) => (
//                 <ImageMy key={ind} img={e.img} id={ind} />
//             ))
//         }
//         <div className='fixed left-0 right-0 h-[5px] bg-slate-200 bottom-[100px]' style={{scaleX}} />
//     </div>
//   )
// }

// export default WorkPage


"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
// import SimpalImage from "@/components/SimpalImage";
import { data } from "@/contents/contents";
import Image from "next/image";
import Link from "next/link";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageMy({ id, e }: { id: number; e: { img: string, title: string, platform: string, description: string } }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useParallax(scrollYProgress, 200);

    return (
        <section className="h-[90vh] sm:p-2 flex items-center justify-center relative snap-center perspective-500">
            <div
                ref={ref}
                className="relative max-h-[90vh] m-[20px] w-[500px] flex items-center justify-center overflow-hidden"
            >
                {/* <SimpalImage src={img} /> */}
                <Image
                    src={e.img}
                    alt="hello"
                />
            </div>
            <motion.h2
                style={{ y, fontSize: "20px" }}
                className=""
            >
                <p className="font-semibold text-pc sm:text-5xl text-2xl">{`#00${id += 1}`}</p>
                <p className="sm:text-2xl text-lg text-fg font-coolveticaRg">{e.title}</p>
                <Link className="text-pc sm:text-base text-sm" href={`/work/${id-=1}`}>Learn More</Link>
            </motion.h2>

        </section>
    );
}

function WorkPage() {
    return (
        <div className="scroll-snap-y scroll-snap-mandatory relative sm:border-[1px] border-sc rounded-2xl py-10">
            <h1 className="text-center text-3xl font-coolveticaRg text-pc">{data.work.title}</h1>
            {data.work.workFields.map((e, ind) => (
                <ImageMy key={ind} e={e} id={ind} />
            ))}
            
        </div>
    );
}

export default WorkPage;
