"use client"

import { useCallback, useRef } from "react"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { Heart, Users, Mic2 } from "lucide-react"

const anchors = [
    {
        label: "Terapia Individual",
        targetId: "terapia-individual",
        icon: Heart,
        color: "from-rose-100 to-rose-50",
    },
    {
        label: "Terapia de Casal",
        targetId: "terapia-casal",
        icon: Users,
        color: "from-blue-100 to-blue-50",
    },
    {
        label: "Palestras e Workshops",
        targetId: "palestras-workshops",
        icon: Mic2,
        color: "from-amber-100 to-amber-50",
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const itemVariants = {
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

const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    },
}

export default function ServicesHero() {
    const heroRef = useRef<HTMLElement>(null)

    const scrollToSection = useCallback((targetId: string) => {
        const target = document.getElementById(targetId)
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [])

    return (
        <LazyMotion features={domAnimation}>
            <section
                ref={heroRef}
                className="snap-section relative bg-background overflow-hidden flex flex-col justify-center items-center"
            >
                {/* Decorative elements */}
                <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <m.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <m.span
                            variants={titleVariants}
                            className="inline-block py-1.5 px-5 rounded-full bg-primary/10 text-primary font-manrope font-semibold text-sm tracking-wider uppercase mb-6"
                        >
                            Serviços
                        </m.span>
                        <m.h1
                            variants={titleVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-manrope font-extrabold text-primary mb-6 leading-tight"
                        >
                            Áreas de Atuação
                        </m.h1>
                        <m.p
                            variants={titleVariants}
                            className="text-lg text-text-body/70 font-inter leading-relaxed max-w-2xl mx-auto"
                        >
                            Cuidado profissional e acolhedor, desde o primeiro clique até o momento da sua alta.
                            Atendimento 100% online para você, onde quer que esteja.
                        </m.p>
                    </m.div>

                    {/* Service Cards — popup-like navigation */}
                    <m.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {anchors.map((anchor) => (
                            <m.button
                                key={anchor.targetId}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => scrollToSection(anchor.targetId)}
                                className="group relative flex flex-col items-center gap-4 px-8 py-7 rounded-3xl bg-white border border-black/5 shadow-lg hover:shadow-2xl hover:border-primary/25 transition-shadow duration-500 w-full sm:w-56 overflow-hidden cursor-pointer"
                            >
                                {/* Hover gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    {/* Icon with morph animation hint */}
                                    <m.div
                                        className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 mx-auto"
                                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.15 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <anchor.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                    </m.div>
                                    <span className="font-manrope font-bold text-sm text-text-body group-hover:text-primary transition-colors text-center block">
                                        {anchor.label}
                                    </span>
                                </div>

                                {/* Arrow indicator */}
                                <m.div
                                    className="text-primary/40 group-hover:text-primary transition-colors"
                                    animate={{ y: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </m.div>
                            </m.button>
                        ))}
                    </m.div>
                </div>

                {/* Scroll hint */}
                <m.p
                    className="absolute bottom-8 text-text-body/40 text-xs font-inter tracking-wider uppercase"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Selecione um serviço acima
                </m.p>
            </section>
        </LazyMotion>
    )
}
