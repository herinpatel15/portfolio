import HeadingText from '@/components/HeadingText'
import Section from '@/components/Section'
import { data } from '@/contents/contents'
import Image from 'next/image'
import React from 'react'
import * as motion from "motion/react-client"
import { Variants } from 'motion/react'

const About = () => {

    const parentVariant: Variants  = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25
            }
        }
    }

    // const childVariant: Variants = {
    //     hidden: {scale: 0.8, opacity: 0},
    //     visible: {scale: 1, opacity: 1},
    // }

    return (
        <Section>
            <motion.section
                className='w-full p-5 flex gap-5 items-center justify-center h-[620px]'
                variants={parentVariant}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    // animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{margin: "-200px"}}
                >
                    <Image
                        src={data.about_me.image}
                        alt='about me'
                        // className='rounded-xl'
                        width={392}
                        height={580}
                    />
                </motion.div>
                <Section className='rounded-xl h-full max-w-[436px] flex justify-between py-24 flex-col flex-grow p-5'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        transition={{
                            duration: 0.4,
                            delay: 1,
                            scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
                        }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    >
                        <HeadingText className='text-4xl text-pc'>
                            {data.about_me.middle_title}
                        </HeadingText>
                    </motion.div>
                    <p className='text-fg text-xl'> {/* &apos; is a just ' (I'm)  */}
                        {data.about_me.meddle_subtitle}
                    </p>
                </Section>
                {/* <Section className='rounded-xl h-full flex-grow'>
            hell
        </Section> */}
                <Section className='rounded-xl h-full min-w-[382px] flex flex-col gap-10 flex-grow p-5'>
                    <div>
                        <HeadingText className='text-xl font-normal'>
                            {data.about_me.contact_title[0]}
                        </HeadingText>
                        <HeadingText className='text-2xl text-pc leading-[0.8] font-semibold'>
                            {data.about_me.contact_title[1]}
                        </HeadingText>
                    </div>
                    <div className='h-full flex flex-col items-center justify-between'>
                        {
                            data.about_me.contact_box.map((val, ind) => (
                                <ContactBox data={val} key={ind} />
                            ))
                        }
                    </div>
                </Section>
            </motion.section>
        </Section>
    )
}

const ContactBox = ({ data }: { data: { icon: string, title: string } }) => {
    return (
        <Section className='flex items-center justify-start gap-5 bg-secBg p-5 w-full'>
            <Image
                src={data.icon}
                alt="Group"
                width={40}
                height={40}
            />
            <HeadingText className=''>{data.title}</HeadingText>
        </Section>
    )
}

export default About