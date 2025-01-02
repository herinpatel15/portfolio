import { data } from '@/contents/contents'
import React from 'react'

function ExperienceSection() {
  return (
    <div className='border-[1px] border-sc rounded-3xl flex flex-col items-center justify-center py-10'>
        <h1 className='text-6xl font-semibold text-pc'>{data.experience.number}</h1>
        <h2 className='text-fg1 text-xl'>{data.experience.title}</h2>
    </div>
  )
}

export default ExperienceSection