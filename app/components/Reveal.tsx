"use client"

import { useRef, type ReactNode } from "react"
import { LazyMotion, domAnimation, m, useInView } from "framer-motion"
import { containerVariants, itemVariants } from "./motionVariants"

const inViewOpts = { once: true, amount: 0.3 } as const

type Props = { children: ReactNode; className?: string }

export function Reveal({ children, className }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, inViewOpts)
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                ref={ref}
                className={className}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}

export function RevealGroup({ children, className }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, inViewOpts)
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                ref={ref}
                className={className}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {children}
            </m.div>
        </LazyMotion>
    )
}

export function RevealItem({ children, className }: Props) {
    return (
        <m.div className={className} variants={itemVariants}>
            {children}
        </m.div>
    )
}
