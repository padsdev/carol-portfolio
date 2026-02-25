import { type LucideIcon, ArrowRight } from "lucide-react"

interface ServiceDetailProps {
    id: string
    icon: LucideIcon
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
    icon: Icon,
    title,
    subtitle,
    description,
    features,
    ctaText,
    ctaHref,
    reversed = false,
}: ServiceDetailProps) {
    return (
        <section id={id} className="py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
                <div
                    className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                        } gap-12 lg:gap-20 items-center`}
                >
                    {/* Left side: Icon + Title + Features */}
                    <div className="w-full lg:w-5/12">
                        <div className="relative">
                            {/* Decorative background element */}
                            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 shadow-lg shadow-primary/10">
                                    <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-manrope font-semibold text-xs tracking-wider uppercase mb-3">
                                    {subtitle}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-manrope font-bold text-primary mb-6">
                                    {title}
                                </h2>

                                {/* Features list */}
                                <ul className="space-y-4 mb-8">
                                    {features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            </div>
                                            <span className="text-text-body/80 font-inter text-sm leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href={ctaHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-manrope font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    {ctaText}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Description card */}
                    <div className="w-full lg:w-7/12">
                        <div className="relative bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-black/5">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-[32px]" />

                            <p className="text-text-body/80 font-inter text-base md:text-lg leading-relaxed relative z-10">
                                {description}
                            </p>

                            {/* Decorative line */}
                            <div className="mt-8 pt-6 border-t border-primary/10">
                                <p className="text-primary/60 font-manrope text-sm font-semibold tracking-wide uppercase">
                                    Atendimento 100% Online
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
