"use client"

import { useRef } from "react"
import { ArrowRight, Heart, Users, Mic2 } from "lucide-react"
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "framer-motion"
import {
    ctaVariants,
    descriptionCardVariants,
    featureContainerVariants,
    featureVariants,
    iconVariants,
    inViewOpts,
    sectionTitleVariants,
} from "./sectionMotion"

const iconMap = {
    heart: Heart,
    users: Users,
    mic2: Mic2,
} as const

type IconName = keyof typeof iconMap

interface ServiceDetailProps {
    id: string
    iconName: IconName
    title: string
    subtitle: string
    description: string
    features: string[]
    ctaText: string
    ctaHref: string
    reversed?: boolean
}

export default function ServiceDetail({
    id,
    iconName,
    title,
    subtitle,
    description,
    features,
    ctaText,
    ctaHref,
    reversed = false,
}: ServiceDetailProps) {
    const Icon = iconMap[iconName]
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, inViewOpts)
    const reduceMotion = useReducedMotion()
    const initial = reduceMotion ? false : "hidden"
    const animate = reduceMotion || isInView ? "visible" : "hidden"

    return (
        <LazyMotion features={domAnimation}>
            <section
                ref={sectionRef}
                id={id}
                className="snap-section bg-background"
            >
                <div className="container mx-auto px-6 py-12 md:py-0">
                    <div
                        className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                            } gap-12 lg:gap-20 items-center`}
                    >
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
                                        <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                                    </m.div>

                                    <m.div
                                        variants={sectionTitleVariants}
                                        initial={initial}
                                        animate={animate}
                                    >
                                        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-manrope font-semibold text-xs tracking-wider uppercase mb-3">
                                            {subtitle}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-manrope font-bold text-primary mb-6">
                                            {title}
                                        </h2>
                                    </m.div>

                                    <m.ul
                                        className="space-y-4 mb-8"
                                        variants={featureContainerVariants}
                                        initial={initial}
                                        animate={animate}
                                    >
                                        {features.map((feature, idx) => (
                                            <m.li
                                                key={idx}
                                                variants={featureVariants}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                </div>
                                                <span className="text-text-body/80 font-inter text-sm leading-relaxed">
                                                    {feature}
                                                </span>
                                            </m.li>
                                        ))}
                                    </m.ul>

                                    <m.div
                                        variants={ctaVariants}
                                        initial={initial}
                                        animate={animate}
                                    >
                                        <a
                                            href={ctaHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#4B4B47] text-white font-manrope font-bold shadow-[0_10px_20px_rgba(75,75,71,0.2)] hover:bg-primary hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-[background-color,box-shadow,translate,scale] duration-400 hover:-translate-y-0.5 hover:scale-[1.03] overflow-hidden"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                {ctaText}
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
                                custom={reversed}
                                variants={descriptionCardVariants}
                                initial={initial}
                                animate={animate}
                                className="relative bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-black/5"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-[32px]" />

                                <p className="text-text-body/80 font-inter text-base md:text-lg leading-relaxed relative z-10">
                                    {description}
                                </p>

                                <div className="mt-8 pt-6 border-t border-primary/10">
                                    <p className="text-primary/60 font-manrope text-sm font-semibold tracking-wide uppercase">
                                        Atendimento 100% Online
                                    </p>
                                </div>
                            </m.div>
                        </div>
                    </div>
                </div>
            </section>
        </LazyMotion>
    )
}
