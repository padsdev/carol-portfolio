"use client"

import { useRef } from "react"
import { Mic2, ArrowRight, Presentation, Brain, MessageCircleHeart } from "lucide-react"
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "framer-motion"
import {
    cardContainerVariants,
    cardHoverClass,
    cardVariants,
    ctaVariants,
    iconVariants,
    inViewOpts,
    sectionTitleVariants,
} from "./sectionMotion"
import { SECRETARIA_MESSAGE, secretariaWhatsApp } from "../lib/channels"

const solutions = [
    {
        icon: Presentation,
        title: "Palestras",
        description: "Conscientização sobre saúde mental, prevenção do suicídio e valorização da vida com foco na quebra de estigmas no trabalho.",
    },
    {
        icon: Brain,
        title: "Workshops Práticos",
        description: "Treinamentos imersivos e interativos focados no desenvolvimento de habilidades socioemocionais (soft skills).",
    },
    {
        icon: MessageCircleHeart,
        title: "Programas de Saúde Mental",
        description: "Consultoria para implementação de uma cultura de cuidado contínuo, foco em prevenção de Burnout e segurança psicológica.",
    },
]

export default function PalestrasSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, inViewOpts)
    const reduceMotion = useReducedMotion()
    const initial = reduceMotion ? false : "hidden"
    const animate = reduceMotion || isInView ? "visible" : "hidden"

    return (
        <LazyMotion features={domAnimation}>
            <section
                ref={sectionRef}
                id="palestras-workshops"
                className="snap-section bg-white"
            >
                <div className="container mx-auto px-6 py-12 md:py-0">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                        <div className="w-full lg:w-5/12">
                            <div className="relative">
                                <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />

                                <div className="relative z-10">
                                    <m.div
                                        variants={iconVariants}
                                        initial={initial}
                                        animate={animate}
                                        className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 shadow-lg shadow-primary/10"
                                    >
                                        <Mic2 className="w-10 h-10 text-primary" strokeWidth={1.5} />
                                    </m.div>

                                    <m.div
                                        variants={sectionTitleVariants}
                                        initial={initial}
                                        animate={animate}
                                    >
                                        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-manrope font-semibold text-xs tracking-wider uppercase mb-3">
                                            In Company
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-manrope font-bold text-primary mb-6">
                                            Palestras e Workshops
                                        </h2>
                                    </m.div>

                                    <m.p
                                        variants={sectionTitleVariants}
                                        initial={initial}
                                        animate={animate}
                                        className="text-text-body/80 font-inter text-base leading-relaxed mb-8"
                                    >
                                        Saúde mental é um pilar estratégico para o sucesso de qualquer organização.
                                        Ofereço intervenções baseadas na Terapia Cognitivo-Comportamental (TCC) para
                                        empresas que buscam promover um ambiente de trabalho mais saudável e produtivo.
                                    </m.p>

                                    <m.div
                                        variants={ctaVariants}
                                        initial={initial}
                                        animate={animate}
                                    >
                                        <a
                                            href={secretariaWhatsApp(SECRETARIA_MESSAGE)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#4B4B47] text-white font-manrope font-bold shadow-[0_10px_20px_rgba(75,75,71,0.2)] hover:bg-primary hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-[background-color,box-shadow,translate,scale] duration-400 hover:-translate-y-0.5 hover:scale-[1.03] overflow-hidden"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                Falar com a Secretaria
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </span>
                                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-[left] duration-700 ease-in-out group-hover:left-[100%] z-0" />
                                        </a>
                                    </m.div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-7/12" style={{ perspective: "1000px" }}>
                            <m.div
                                variants={cardContainerVariants}
                                initial={initial}
                                animate={animate}
                                className="space-y-5"
                            >
                                {solutions.map((solution) => (
                                    <m.div
                                        key={solution.title}
                                        variants={cardVariants}
                                        className={`relative bg-background rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-black/5 hover:shadow-lg hover:border-primary/15 ${cardHoverClass} group`}
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-[scale] duration-300">
                                                <solution.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-manrope font-bold text-text-body mb-2">
                                                    {solution.title}
                                                </h3>
                                                <p className="text-text-body/70 font-inter text-sm leading-relaxed">
                                                    {solution.description}
                                                </p>
                                            </div>
                                        </div>
                                    </m.div>
                                ))}
                            </m.div>
                        </div>
                    </div>
                </div>
            </section>
        </LazyMotion>
    )
}
