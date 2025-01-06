import Image from 'next/image'
import React from 'react'

function SimpalImage({src}: {src:string}) {
  return (
    <Image 
        src={src}
        alt='hello'
        className='w-full'
    />
  )
}

export default SimpalImage