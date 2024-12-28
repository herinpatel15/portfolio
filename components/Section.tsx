import { cn } from '@/utils/classFilter'
// import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'

// interface SectionProps extends HTMLAttributes<HTMLDivElement> {}
type SectionProps = HTMLAttributes<HTMLDivElement> & {
    className?: string
}

const Section: React.FC<SectionProps> = ({className, ...props}) => {
    // const classes = cn('border-[1px] border-sc rounded-3xl bg-slate-300', className || '')
    // console.log(classes);
    
  return (
    <div 
        className={cn(
          'border-[1px] border-sc rounded-3xl', 
          className || ''
        )}
        {...props}
    />
  )
}

export default Section