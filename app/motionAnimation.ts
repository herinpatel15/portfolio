import { Variants } from 'motion/react'

export const parentVariant: Variants = {
    init: {
        opacity: 0,
        // scale: 0.8,
    },
    done: {
        opacity: 1,
        // scale: 1,
        transition: {
            duration: 0.5, ease: 'easeInOut', staggerChildren: 0.25
        }
    }
}

export const childVariant: Variants = {
    init: { opacity: 0.5, scale: 0.8 },
    done: {
        opacity: 1,
        scale: 1,
        transition: {
            // duration: 0.5,
            ease: 'easeInOut',
            staggerChildren: 0.25,
            delay: 0.15
        },
    }
}

export const titleVariant: Variants = {
    init: { opacity: 0.5, x: -50},
    done: (e: number) => ({
        opacity: 1,
        x: 0, 
        transition: {
            duration: 0.4,
            ease: 'easeInOut',
            delay: 0.5 * e, // Delay ensures it starts after div animation
            // staggerChildren: 0.25
        },
    })
};

export const aboutContact: Variants = {
    init: {opacity: 0, y: -20},
    done: (e: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            // duration: 0.25,
            ease: 'easeInOut',
            delay: 0.3 * e, // Delay ensures it starts after div animation
        },
    })
}

export const exploreField: Variants = {
    init: {opacity: 0, x: -50},
    done: (e: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            // duration: 0.25,
            ease: 'easeInOut',
            delay: 0.2 * e, // Delay ensures it starts after div animation
        }
    })
}

export const exploreInfo: Variants = {
    init: {opacity: 0.5, x: 100},
    init1: {opacity: 0.5, x: -100},
    done: (e: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            // duration: 0.4,
            ease: 'easeIn',
            delay: 0.5 * e, // Delay ensures it starts after div animation
        }
    })
}