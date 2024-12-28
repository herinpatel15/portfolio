import { cn } from '@/utils/classFilter'
import React, { HTMLAttributes } from 'react'

type HeadingTextProps = HTMLAttributes<HTMLHeadingElement> & {
    className?: string
}

const HeadingText: React.FC<HeadingTextProps> = ({className, ...props}) => {
  return (
    <h1
        className={cn('font-coolveticaRg font-bold', className || '')}
        {...props}
    />
  )
}

export default HeadingText