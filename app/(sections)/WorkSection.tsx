// import { data } from '@/contents/contents'
// import Image from 'next/image'
import React from 'react'
import * as motion from "motion/react-client"
// import { childVariant } from '../motionAnimation'
import WorkPage from '../../components/WorkMain'

function WorkSection() {
    return (
        // <section
        //     className='flex flex-col items-center justify-center gap-10' // border-[1px] border-sc rounded-2xl  md:p-5 p-2
        // >
        //     <motion.h2
        //         className='text-4xl font-coolveticaRg font-medium text-pc'
        //         variants={childVariant}
        //         initial='init'
        //         whileInView='done'
        //         viewport={{ amount: 0.9 }}
        //     >{data.work.title}</motion.h2>
        //     <ul className='flex flex-col gap-5'>
        //         {
        //             data.work.workFields.map((e, ind) => (
        //                 <motion.li
        //                     key={ind}
        //                     variants={childVariant}
        //                     initial='init'
        //                     whileInView='done'
        //                     viewport={{ amount: 0.9 }}
        //                 >
        //                     <WorkCard e={e} ind={ind} />
        //                 </motion.li>
        //             ))
        //         }
        //     </ul>
        // </section>
        <motion.div
        className='overflow-hidden'
            // variants={childVariant}
            // initial='init'
            // whileInView='done'
            // viewport={{amount: 0.4}}
        ><WorkPage /></motion.div>

    )
}

// const WorkCard = ({ e, ind }: { e: { img: string, title: string, platform: string, description: string }, ind: number }) => {
//     return (
//         <motion.div
//             className={`sm:min-h-[350px] flex items-center justify-center sm:gap-5 gap-2 border-[1px] border-sc rounded-2xl flex-col ${ind % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
//         >
//             <motion.div className={`md:w-[40%] w-full sm:h-full h-[250px] p-5 flex items-center justify-center border-sc ${ind % 2 !== 0 ? "md:border-l-[1px]" : "md:border-r-[1px]"}`}>
//                 <Image
//                     src={e.img}
//                     alt='hello'
//                     className='h-full'
//                 />
//             </motion.div>
//             <motion.div className='md:w-[60%] w-full h-full flex flex-col items-center justify-between md:gap-0 gap-5 md:p-10 p-5'>
//                 <motion.h2
//                     className='sm:text-4xl text-2xl font-coolveticaRg font-medium text-pc w-full'
//                 >{e.title}</motion.h2>
//                 <motion.div className='sm:block hidden'>
//                     <motion.h3
//                         className='text-xl font-semibold text-fg1'
//                     >{e.platform}</motion.h3>
//                     <motion.p
//                         className='text-base text-fg'
//                     >{e.description}</motion.p>
//                 </motion.div>
//             </motion.div>
//         </motion.div>
//     )
// }

export default WorkSection