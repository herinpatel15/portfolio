// import HeadingText from '@/components/HeadingText'
import Section from '@/components/Section'
import * as motion from "motion/react-client"
import Image from 'next/image'
import React from 'react'

export default function hero() {
  return (
    <Section className='md:py-16 sm:py-12 py-8 md:px-32 sm:px-20 px-10 flex items-start justify-center flex-col'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      // style={ball}
      >
        <Image
          src="/images/main_hero_name.svg"
          alt='hello'
          width={600}
          height={100}
        />
      </motion.div>
      {/* <HeadingText className='2xl:text-8xl xl:text-8xl lg:text-8xl md:text-6xl tracking-tight text-transparent outline-text'>Hello I Am</HeadingText>
        <HeadingText className='text-fg 2xl:text-[13rem] xl:text-[13rem] lg:text-[13rem] md:text-[8rem] sm:text-[6rem] text-[4rem] tracking-tight leading-[1.2]'>Herin Patel</HeadingText>
        <HeadingText className='text-8xl tracking-tight text-transparent outline-text'>Software Developer</HeadingText> */}
    </Section>
  )
}
