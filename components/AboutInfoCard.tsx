"use client"
import React from 'react'
import * as motion from "motion/react-client"
import { data } from '@/contents/contents'
import { childVariant, titleVariant } from '@/app/motionAnimation'

const AboutInfoCard = () => {
    return (
        <motion.div
            className='border-[1px] border-sc rounded-2xl p-5 flex flex-col items-center justify-center gap-40'
            variants={childVariant}
        >
            <motion.h1
                className='font-[CoolveticaRg] font-medium text-4xl text-pc'
                variants={titleVariant}
                custom={0}
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