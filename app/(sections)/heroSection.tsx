import { data } from '@/contents/contents'
import Image from 'next/image'
import React from 'react'
import * as motion from "motion/react-client"

function HeroSection() {
    return (
        <section className='flex items-center justify-between sm:flex-row flex-col sm:gap-10 overflow-x-hidden'>
            <motion.div
                className='w-full'
                initial={{ opacity: 0, scale: 0.9, x: -200 }}
                whileInView={{ opacity: 1, scale: 0.9, x: 0 }}
                // viewport={{amount: }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            >
                <Image
                    src={data.hero.name_img}
                    alt="Hero Image"
                    className='w-full'
                // fill
                // width={fill}
                // height={1080}
                />
            </motion.div>
            <motion.div
                className='w-full'
                initial={{ opacity: 0, scale: 0.9, x: 200 }}
                whileInView={{ opacity: 1, scale: 0.9, x: 0 }}
                // viewport={{amount: 'all'}}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            >
                <Image
                    src={data.hero.illustration_img}
                    alt="Hero Image"
                    className='w-full'
                // width={1920}
                // height={1080}
                />
            </motion.div>
        </section>
    )
}

export default HeroSection