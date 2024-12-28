import React from 'react'
import Image from 'next/image'
import { data } from '@/contents/contents'

function JustForTest() {
    return (
        <div className="flex flex-col items-start gap-[50px] p-5 relative rounded-[20px] overflow-hidden border border-solid border-[#1c1c1c]">
            <div className="relative w-[346px] h-[53px] mr-[-4.00px]">
                <div className="relative w-[342px] h-[53px]">
                    <div className="absolute w-[342px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#d7f1ff] text-xl tracking-[0] leading-[26.9px]">
                        Connect with me,
                    </div>

                    <div className="absolute w-[342px] top-[21px] left-0 [font-family:'Coolvetica-Regular',Helvetica] font-normal text-[#0800ff] text-2xl tracking-[0] leading-[32.3px]">
                        Popular Space
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between relative flex-1 self-stretch w-full grow">
                <div className="flex w-[342px] h-20 items-center gap-5 p-4 relative bg-[#1c1c1c70] rounded-[15px] overflow-hidden border border-solid border-[#1c1c1c]">
                    <Image className="relative w-10 h-10" width={40} height={40} alt="Group" src={data.about_me.contact_box[0].icon} />

                    <div className="relative w-fit [font-family:'Coolvetica-Regular',Helvetica] font-normal text-[#d7f1ff] text-2xl tracking-[0] leading-[32.3px] whitespace-nowrap">
                        GitHub
                    </div>
                </div>

                <div className="flex w-[342px] h-20 items-center gap-5 p-4 relative bg-[#1c1c1c70] rounded-[15px] overflow-hidden border border-solid border-[#1c1c1c]">
                    <Image className="relative w-10 h-10" width={40} height={40} alt="Group" src={data.about_me.contact_box[0].icon} />

                    <div className="relative w-fit [font-family:'Coolvetica-Regular',Helvetica] font-normal text-[#d7f1ff] text-2xl tracking-[0] leading-[32.3px] whitespace-nowrap">
                        GitHub
                    </div>
                </div>

                <div className="flex w-[342px] h-20 items-center gap-5 p-4 relative bg-[#1c1c1c70] rounded-[15px] overflow-hidden border border-solid border-[#1c1c1c]">
                    <Image className="relative w-10 h-10" width={40} height={40} alt="Group" src={data.about_me.contact_box[0].icon} />

                    <div className="relative w-fit [font-family:'Coolvetica-Regular',Helvetica] font-normal text-[#d7f1ff] text-2xl tracking-[0] leading-[32.3px] whitespace-nowrap">
                        GitHub
                    </div>
                </div>

                <div className="flex w-[342px] h-20 items-center gap-5 p-4 relative bg-[#1c1c1c70] rounded-[15px] overflow-hidden border border-solid border-[#1c1c1c]">
                    <Image className="relative w-10 h-10" width={40} height={40} alt="Group" src={data.about_me.contact_box[0].icon} />

                    <div className="relative w-fit [font-family:'Coolvetica-Regular',Helvetica] font-normal text-[#d7f1ff] text-2xl tracking-[0] leading-[32.3px] whitespace-nowrap">
                        GitHub
                    </div>
                </div>


                {/* <div className="flex w-[342px] h-20 items-center gap-5 p-4 relative bg-[#1c1c1c70] rounded-[15px] overflow-hidden border border-solid border-[#1c1c1c]">
                        <Image
                            className="relative w-10 h-10"
                            alt="Linkedin round"
                            src={linkedinRoundSvgrepoCom}
                        />

                        <div className="relative w-fit [font-family:'Coolvetica-Regular',Helvetica] font-normal text-[#d7f1ff] text-2xl tracking-[0] leading-[32.3px] whitespace-nowrap">
                            LinkedIn
                        </div>
                    </div> */}

                {/* <div className="flex h-20 items-center gap-5 p-4 relative self-stretch w-full bg-[#1c1c1c70] rounded-[15px] overflow-hidden border border-solid border-[#1c1c1c]">
                        <Image
                            className="relative w-11 h-11"
                            alt="Insta icon"
                            src={instaIcon}
                        />

                        <div className="relative w-fit [font-family:'Coolvetica-Regular',Helvetica] font-normal text-[#d7f1ff] text-2xl tracking-[0] leading-[32.3px] whitespace-nowrap">
                            Instagram
                        </div>
                    </div> */}

                {/* <div className="flex w-[342px] h-20 items-center gap-5 p-4 relative bg-[#1c1c1c70] rounded-[15px] overflow-hidden border border-solid border-[#1c1c1c]">
                        <Image className="relative w-10 h-10" alt="Frame" src={frame32} />

                        <div className="relative w-fit [font-family:'Coolvetica-Regular',Helvetica] font-normal text-[#d7f1ff] text-2xl tracking-[0] leading-[32.3px] whitespace-nowrap">
                            Figma
                        </div>
                    </div> */}
            </div>
        </div>
    )
}

export default JustForTest