/** Shared enter motion — ServiceDetail / Palestras / Reveal. One curve site-wide. */

export const easeOut = [0.25, 0.46, 0.45, 0.94] as [
    number,
    number,
    number,
    number,
]

export const inViewOpts = { once: true, amount: 0.3 } as const

export const iconVariants = {
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

export const sectionTitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.65,
            delay: 0.15,
            ease: easeOut,
        },
    },
}

export const featureContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.35,
        },
    },
}

export const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            stiffness: 180,
            damping: 22,
            mass: 0.85,
        },
    },
}

/** ServiceDetail description card (3D). */
export const descriptionCardVariants = {
    hidden: (reversed: boolean) => ({
        opacity: 0,
        x: reversed ? -60 : 60,
        rotateY: reversed ? 10 : -10,
        scale: 0.92,
    }),
    visible: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 22,
            mass: 0.9,
            delay: 0.25,
            opacity: { duration: 0.55, ease: easeOut, delay: 0.25 },
        },
    },
}

/** Quote / award panels — same spring, no rotateY. */
export const panelVariants = {
    hidden: (dir: 1 | -1 = 1) => ({
        opacity: 0,
        x: 56 * dir,
        scale: 0.94,
    }),
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 22,
            mass: 0.9,
            delay: 0.25,
            opacity: { duration: 0.55, ease: easeOut, delay: 0.25 },
        },
    },
}

export const cardContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.28,
        },
    },
}

export const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 22,
            mass: 0.9,
            opacity: { duration: 0.5, ease: easeOut },
        },
    },
}

export const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            delay: 0.55,
            ease: easeOut,
        },
    },
}

/** Hover on motion cards — never transition-all (fights FM transform). */
export const cardHoverClass =
    "transition-[box-shadow,border-color,background-color,translate] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
