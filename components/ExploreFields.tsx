'use client'
import { data } from '@/contents/contents'
import React from 'react'
import * as motion from 'motion/react-client'
import { childVariant, exploreField } from '@/app/motionAnimation'

function ExploreFields() {
    return (
        <motion.ul
            className='border-[1px] border-sc rounded-2xl p-5 flex flex-col items-center justify-between gap-5 md:w-[40%] w-full h-full'
            variants={childVariant}
            initial='init'
            whileInView='done'
            viewport={{ amount: 0.9 }}
        >
            {
                data.explore.fields.map((e, ind) => (
                    <motion.li
                        key={ind}
                        className='border-[1px] border-sc rounded-2xl w-full p-3 text-center text-xl font-coolveticaRg font-medium hover:bg-pc transition-all duration-300 hover:text-lg cursor-pointer'
                        variants={exploreField}
                        initial="init"
                        whileInView="done"
                        custom={ind}
                    >{e}</motion.li>
                ))
            }
        </motion.ul>
    )
}

export default ExploreFields