"use client"
import { data } from '@/contents/contents'
import React from 'react'
import * as motion from 'motion/react-client'
import { childVariant, exploreInfo } from '@/app/motionAnimation'

function ExploreInfo() {
    return (
        <motion.div
            className='border-[1px] border-sc rounded-2xl md:py-20 py-10 md:px-10 px-5 h-full md:w-[60%] w-full flex flex-col gap-24 items-center justify-between'
            variants={childVariant}
            initial='init'
            whileInView='done'
            viewport={{ amount: 0.9 }}
        >
            <motion.h1
                className='text-right sm:text-4xl text-2xl font-coolveticaRg font-medium text-pc w-full'
                variants={exploreInfo}
                initial='init'
                whileInView='done'
                custom={0.5}
            >{data.explore.title}</motion.h1>
            <motion.p
                className='sm:text-lg text-base text-fg'
                variants={exploreInfo}
                initial='init1'
                whileInView='done'
                custom={0.6}
            >{data.explore.description}</motion.p>
        </motion.div>
    )
}

export default ExploreInfo