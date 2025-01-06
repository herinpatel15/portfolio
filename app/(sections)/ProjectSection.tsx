import { data } from '@/contents/contents'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

function ProjectSection() {
    return (
        <section className='w-full flex flex-col gap-5'>
            <h1 className='text-3xl text-pc font-coolveticaRg text-center'>{data.project.title}</h1>
            <ul className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5'>
            {/* <ul className='grid grid-cols-3 gap-5'> */}
            {/* <ul className='flex flex-wrap items-center justify-center gap-5'> */}
                {
                    data.project.ProjectFields.map((e, ind) => (
                        <li className='w-full h-full max-w-[400px]' key={ind}>
                            <ProjectCard e={e} />
                        </li>
                    ))
                }
            </ul>
            {/* <div>
                <div className='w-[500px] h-[500px] bg-slate-100 relative'>
                    <div className='bg-slate-300 absolute top-0 left-0 w-full h-full'>

                    </div>
                    <div className='absolute bottom-0 left-0 w-full h-[200px] bg-black'>

                    </div>
                </div>
            </div> */}
        </section>
    )
}

function ProjectCard({ e }: { e: { img: StaticImageData, title: string, platform: string, description: string } }) {
    return (
        // <div className='max-w-[500px] max-h-[500px] relative border-[1px] border-sc rounded-2xl'>
        //     <div className='w-[500px] h-[500px]'>
        //         <Image
        //             src={e.img}
        //             alt='hello'
        //             className='w-full h-full'
        //         />
        //     </div>

        //     <div className='z-10 bottom-0 left-0 w-full absolute'>
        //         <div className='h-[200px] bg-bg align-bottom'>
        //             <h2>{e.title}</h2>
        //             <div>
        //                 <h3>{e.platform}</h3>
        //                 <p>{e.description}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className='border-[1px] border-sc rounded-2xl w-full aspect-square'> {/*lg:w-[500px] md:w-[450px] w-[300px]*/}
            <div className='w-full h-full relative'>
                <div className='rounded-2xl absolute top-0 left-0 w-full h-full'>
                    <Image
                        src={e.img}
                        alt='hello'
                        className='w-full h-full rounded-2xl'
                    />
                </div>
                <div className='rounded-b-2xl absolute bottom-0 left-0 w-full h-[30%] bg-bg p-3 flex-col flex items-start justify-center'>
                    <h2 className='text-xl text-pc font-coolveticaRg'>{e.title}</h2>
                    <div>
                        <h3 className='text-fg1'>{e.platform}</h3>
                        {/* <p>{e.description}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection