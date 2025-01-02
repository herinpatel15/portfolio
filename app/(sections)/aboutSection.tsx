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
            className='grid grid-cols-3 gap-5'
            variants={parentVariant}
            initial='init'
            whileInView='done'
            viewport={{ amount: 'all' }}
        >
            <AboutImageCard />
            <AboutInfoCard />
            <AboutContactCard />
        </motion.section>
    )
}

export default AboutSection