import ExploreFields from '@/components/ExploreFields'
import ExploreInfo from '@/components/ExploreInfo'
import React from 'react'

function ExploreSection() {
  return (
    <section
        className='flex md:flex-row flex-col-reverse items-center justify-center md:gap-5 gap-10 md:h-[500px]'
    >
        <ExploreFields />
        <ExploreInfo />
    </section>
  )
}

export default ExploreSection