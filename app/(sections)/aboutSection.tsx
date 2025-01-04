import React from 'react'
import * as motion from "motion/react-client"
// import Section from '@/components/Section'
import AboutImageCard from '@/components/AboutImageCard'
import { parentVariant } from '../motionAnimation'
import AboutInfoCard from '@/components/AboutInfoCard'
import AboutContactCard from '@/components/AboutContactCard'

function AboutSection() {
    return (
        <motion.section
            // className='bg-slate-400grid lg:grid-cols-2 grid-col-1 gap-5'
            // className="grid gap-5 grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 lg:[grid-template-areas:'image image image' 'info contact contact']"
            className='flex flex-col items-center justify-center gap-10'

        // variants={parentVariant}
        // initial='init'
        // whileInView='done'
        // viewport={{ amount: 'all' }}
        >
            <AboutImageCard />
            <div className='flex md:flex-row flex-col w-full items-center justify-center gap-5'>
                <AboutInfoCard />
                <AboutContactCard />
            </div>
        </motion.section>
    )
}

export default AboutSection