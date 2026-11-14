"use client"

import {
    createContext,
    useContext,
    useRef,
    type ReactNode,
    type RefObject,
} from "react"
import {
    LazyMotion,
    domAnimation,
    m,
    useInView,
    useReducedMotion,
} from "framer-motion"
import {
    cardContainerVariants,
    cardVariants,
    ctaVariants,
    featureVariants,
    iconVariants,
    inViewOpts,
    panelVariants,
    sectionTitleVariants,
} from "./sectionMotion"

type Gate = {
    initial: false | "hidden"
    animate: "hidden" | "visible"
}

const MotionGate = createContext<Gate | null>(null)

type Props = { children: ReactNode; className?: string }

function useOwnGate(): Gate & { ref: RefObject<HTMLElement | null> } {
    const ref = useRef<HTMLElement | null>(null)
    const isInView = useInView(ref, inViewOpts)
    const reduceMotion = useReducedMotion()
    return {
        ref,
        initial: reduceMotion ? false : "hidden",
        animate: reduceMotion || isInView ? "visible" : "hidden",
    }
}

function useGate(): Gate & { ref?: RefObject<HTMLElement | null> } {
    const ctx = useContext(MotionGate)
    const own = useOwnGate()
    return ctx ?? own
}

function MaybeLazy({ nested, children }: { nested: boolean; children: ReactNode }) {
    if (nested) return children
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}

type RootProps = Props & { as?: "div" | "section"; id?: string }

/** One inView on the section/block — same gate pattern as ServiceDetail. */
export function RevealRoot({ children, className, as = "div", id }: RootProps) {
    const gate = useOwnGate()
    const body = (
        <MotionGate.Provider value={{ initial: gate.initial, animate: gate.animate }}>
            {children}
        </MotionGate.Provider>
    )
    return (
        <LazyMotion features={domAnimation}>
            {as === "section" ? (
                <section
                    ref={gate.ref as RefObject<HTMLElement | null>}
                    id={id}
                    className={className}
                >
                    {body}
                </section>
            ) : (
                <div
                    ref={gate.ref as RefObject<HTMLDivElement | null>}
                    id={id}
                    className={className}
                >
                    {body}
                </div>
            )}
        </LazyMotion>
    )
}

type RevealProps = Props & { tone?: "title" | "panel"; panelDir?: 1 | -1 }

export function Reveal({
    children,
    className,
    tone = "title",
    panelDir = 1,
}: RevealProps) {
    const nested = useContext(MotionGate) !== null
    const gate = useGate()
    const isPanel = tone === "panel"
    return (
        <MaybeLazy nested={nested}>
            <m.div
                ref={nested ? undefined : (gate.ref as RefObject<HTMLDivElement | null>)}
                className={className}
                custom={panelDir}
                variants={isPanel ? panelVariants : sectionTitleVariants}
                initial={gate.initial}
                animate={gate.animate}
            >
                {children}
            </m.div>
        </MaybeLazy>
    )
}

export function RevealGroup({ children, className }: Props) {
    const nested = useContext(MotionGate) !== null
    const gate = useGate()
    return (
        <MaybeLazy nested={nested}>
            <m.div
                ref={nested ? undefined : (gate.ref as RefObject<HTMLDivElement | null>)}
                className={className}
                variants={cardContainerVariants}
                initial={gate.initial}
                animate={gate.animate}
            >
                {children}
            </m.div>
        </MaybeLazy>
    )
}

type ItemProps = Props & { tone?: "card" | "list" }

export function RevealItem({ children, className, tone = "card" }: ItemProps) {
    return (
        <m.div
            className={className}
            variants={tone === "list" ? featureVariants : cardVariants}
        >
            {children}
        </m.div>
    )
}

export function RevealIcon({ children, className }: Props) {
    const nested = useContext(MotionGate) !== null
    const gate = useGate()
    return (
        <MaybeLazy nested={nested}>
            <m.div
                ref={nested ? undefined : (gate.ref as RefObject<HTMLDivElement | null>)}
                className={className}
                variants={iconVariants}
                initial={gate.initial}
                animate={gate.animate}
            >
                {children}
            </m.div>
        </MaybeLazy>
    )
}

export function RevealCta({ children, className }: Props) {
    const nested = useContext(MotionGate) !== null
    const gate = useGate()
    return (
        <MaybeLazy nested={nested}>
            <m.div
                ref={nested ? undefined : (gate.ref as RefObject<HTMLDivElement | null>)}
                className={className}
                variants={ctaVariants}
                initial={gate.initial}
                animate={gate.animate}
            >
                {children}
            </m.div>
        </MaybeLazy>
    )
}
