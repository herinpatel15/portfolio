'use client'
import React from 'react'
import * as motion from "motion/react-client"
import Image from 'next/image'
import { data } from '@/contents/contents'
import { aboutContact, childVariant } from '@/app/motionAnimation'

const AboutContactCard = () => {
    return (
        <motion.div
            className='border-[1px] border-sc rounded-2xl md:w-1/2 w-full sm:h-[580px] p-5 flex flex-col items-start justify-start gap-10'
            variants={childVariant}
            initial='init'
            whileInView='done'
            viewport={{ amount: 0.9 }}
        >
            <motion.div>
                <motion.h2 className='font-coolveticaRg text-xl'>{data.about_me.contact_title[0]}</motion.h2>
                <motion.h2 className='font-coolveticaRg text-xl text-pc'>{data.about_me.contact_title[1]}</motion.h2>
            </motion.div>
            <motion.ul className='w-full h-full flex flex-col justify-between items-center gap-5'>
                {
                    data.about_me.contact_box.map((val, ind) => (
                        <motion.li
                            className='w-full'
                            key={ind}
                            variants={aboutContact}
                            initial='init'
                            whileInView='done'
                            viewport={{ amount: 0.9 }}
                            custom={ind+0.2}
                        // transition={{delay: 0.5}}
                        ><ContactBox data={val} /></motion.li>
                    ))
                }
            </motion.ul>
        </motion.div>
    )
}

const ContactBox = ({ data }: { data: { icon: string, title: string } }) => {
    return (
        <div className='flex items-center justify-start gap-5 bg-secBg p-5 w-full border-[1px] border-sc rounded-3xl hover:bg-pc transition duration-400 hover:scale-95 cursor-pointer'>
            <div className='w-10 h-10'>
                <Image
                    src={data.icon}
                    alt="Group"
                    className='w-full'
                />
            </div>
            <h3 className=''>{data.title}</h3>
        </div>
    )
}

export default AboutContactCard