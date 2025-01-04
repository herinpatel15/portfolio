"use client"
import React from 'react'
import * as motion from "motion/react-client"
import { data } from '@/contents/contents'
import { childVariant, titleVariant } from '@/app/motionAnimation'

const AboutInfoCard = () => {
    return (
        <motion.div
            className='border-[1px] border-sc rounded-2xl p-5 md:w-1/2 w-full sm:h-[580px] flex flex-col items-center justify-center sm:gap-40 gap-10'
            variants={childVariant}
            initial='init'
            whileInView='done'
            viewport={{ amount: 0.9 }}
        >
            <motion.h1
                className='font-[CoolveticaRg] font-medium sm:text-5xl text-4xl text-pc'
                variants={titleVariant}
                viewport={{amount: 0.8}}
                custom={0.2}
            >{data.about_me.middle_title}</motion.h1>
            <motion.p
                className='text-lg text-fg'
                variants={titleVariant}
                custom={0.5}
                // initial="init"
                // animate="done"
            >{data.about_me.meddle_subtitle}</motion.p>
        </motion.div>
    )
}

export default AboutInfoCard;