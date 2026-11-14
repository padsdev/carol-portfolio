"use client"

import { useRef, type ReactNode } from "react"
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "framer-motion"

const inViewOpts = { once: true, amount: 0.3 } as const

/** Matches ServiceDetail title slide — not the hero titleVariants (y). */
const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    },
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.25,
        },
    },
}

/** Grid/list cards — spring enter, no 3D. */
const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 20,
        },
    },
}

const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 15,
        },
    },
}

const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    },
}

type Props = { children: ReactNode; className?: string }

function useRevealMotion() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, inViewOpts)
    const reduceMotion = useReducedMotion()
    return {
        ref,
        initial: reduceMotion ? false : ("hidden" as const),
        animate: reduceMotion || isInView ? ("visible" as const) : ("hidden" as const),
    }
}

export function Reveal({ children, className }: Props) {
    const { ref, initial, animate } = useRevealMotion()
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                ref={ref}
                className={className}
                variants={titleVariants}
                initial={initial}
                animate={animate}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}

export function RevealGroup({ children, className }: Props) {
    const { ref, initial, animate } = useRevealMotion()
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                ref={ref}
                className={className}
                variants={containerVariants}
                initial={initial}
                animate={animate}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}

export function RevealItem({ children, className }: Props) {
    return (
        <m.div className={className} variants={cardVariants}>
            {children}
        </m.div>
    )
}

/** Nested under RevealItem/Group — icon pop like ServiceDetail. */
export function RevealIcon({ children, className }: Props) {
    return (
        <m.div className={className} variants={iconVariants}>
            {children}
        </m.div>
    )
}

export function RevealCta({ children, className }: Props) {
    return (
        <m.div className={className} variants={ctaVariants}>
            {children}
        </m.div>
    )
}
