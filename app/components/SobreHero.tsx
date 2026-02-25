import Image from "next/image"
import { assetPath } from "../lib/assetPath"
import { ChevronDown } from "lucide-react"

export default function SobreHero() {
    return (
        <section className="snap-section relative bg-background">
            <div className="container mx-auto px-6 pt-24 pb-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Floating Balls - Decorative elements */}
                <div
                    className="absolute top-32 right-0 w-32 h-32 rounded-full bg-primary/10 animate-float z-0 pointer-events-none"
                    style={{ animationDelay: '0s' }}
                ></div>
                <div
                    className="absolute top-52 right-[20%] lg:right-40 w-16 h-16 rounded-full bg-[#4B4B47]/10 animate-float z-0 pointer-events-none"
                    style={{ animationDelay: '2s' }}
                ></div>
                <div
                    className="absolute bottom-32 right-10 lg:right-20 w-40 h-40 rounded-full bg-primary/5 animate-float z-0 pointer-events-none"
                    style={{ animationDelay: '4s' }}
                ></div>

                {/* Left Column: Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 relative z-10 order-2 lg:order-1">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary/30 text-primary font-manrope font-bold text-sm tracking-wider uppercase mb-4">
                            CRP 14/083109
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-primary leading-tight mb-4">
                            Olá, eu sou <br />Caroline Assis
                        </h1>
                    </div>

                    <div className="space-y-4 text-text-body font-inter leading-relaxed max-w-lg mx-auto lg:mx-0">
                        <p>
                            Minha jornada na psicologia começou em <strong className="text-primary">Campo Grande - MS</strong>,
                            mas hoje minha base física é em <strong className="text-primary">Barcelona, na Espanha</strong>.
                        </p>
                        <p>
                            Sou psicóloga clínica devidamente regularizada pelo Conselho Regional de Psicologia
                            e pelo <strong>E-Psi</strong>, o que me autoriza legalmente a cuidar da sua saúde mental
                            de forma online com total segurança.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 pt-2 justify-center lg:justify-start">
                        <div className="text-center lg:text-left">
                            <span className="text-3xl font-manrope font-bold text-primary">+6</span>
                            <p className="text-sm text-text-body/60 font-inter">Anos de experiência</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <span className="text-3xl font-manrope font-bold text-primary">+500</span>
                            <p className="text-sm text-text-body/60 font-inter">Pacientes atendidos</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <span className="text-3xl font-manrope font-bold text-primary">5.0</span>
                            <p className="text-sm text-text-body/60 font-inter">Avaliação Google</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Photo */}
                <div className="w-full lg:w-1/2 relative z-10 flex justify-center perspective-[1000px] order-1 lg:order-2">
                    <div className="photo-card-container-sobre relative aspect-[3/4] w-full max-w-sm lg:max-w-md rounded-[40px] overflow-hidden shadow-2xl bg-secondary/30 group">
                        <div className="absolute inset-0 bg-secondary flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                            <Image
                                src={assetPath("/caroline-assis-portrait.png")}
                                alt="Caroline Assis - Psicóloga Clínica"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-body/50">
                <span className="text-xs font-inter uppercase tracking-widest">Role para baixo</span>
                <ChevronDown className="w-5 h-5 scroll-indicator" />
            </div>
        </section>
    )
}
