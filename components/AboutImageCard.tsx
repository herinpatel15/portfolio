import React from 'react'
import * as motion from "motion/react-client"
import Image from 'next/image'
import { data } from '@/contents/contents'
import { childVariant } from '@/app/motionAnimation'

const AboutImageCard = () => {
    return (
        <motion.div
            variants={childVariant}
            initial='init'
            whileInView='done'
            viewport={{ amount: 0.9 }}
        // children={}
        >
            <Image
                src={data.about_me.image}
                alt="About Us"
                className='w-full'
            />
        </motion.div>
    )
}

export default AboutImageCard