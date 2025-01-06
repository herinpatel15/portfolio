import Image from 'next/image'
// import { useRouter } from 'next/router'
import { data } from '@/contents/contents'
import React from 'react'
// import Link from 'next/link'

async function WorkAllInfoPage({params}: {params: {work_id: number}}) { // { e }: { e: { img: string, title: string, platform: string, description: string } }
    // const {img, title, platform, description} = useRouter()
    // console.log(await params);
    
    return (
        <main className='h-screen flex items-center justify-center gap-5 max-w-screen-xl mx-auto p-10'>
            {/* <h1>{params.work_id}</h1> */}
            <div className='w-[50%] sm:h-[70vh] flex items-center justify-center'>
                <Image
                    src={data.work.workFields[params.work_id].img}
                    alt="WorkAllInfoPage"
                    className='h-full w-full'
                />
            </div>
            <div className='flex gap-5 flex-col w-1/2'>
                <h1 className='text-4xl font-coolveticaRg font-medium text-pc'>{data.work.workFields[params.work_id].title}</h1>
                <div>
                    <h2 className='font-2xl font-semibold text-fg1'>{data.work.workFields[params.work_id].platform}</h2>
                    <p className='text-base text-fg'>{data.work.workFields[params.work_id].description}</p>
                </div>
            </div>
        </main>
    )
}

export default WorkAllInfoPage