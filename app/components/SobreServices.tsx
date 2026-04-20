import { Heart, Users, GraduationCap, ArrowRight, ChevronDown } from "lucide-react"

export default function SobreServices() {
    return (
        <section className="snap-section bg-white">
            <div className="container mx-auto px-6 py-8">
                <div className="text-center mb-10">
                    <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-manrope font-semibold text-sm tracking-wider uppercase mb-4">
                        Serviços
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-manrope font-bold text-primary mb-4">
                        Meus Serviços
                    </h2>
                    <p className="text-base text-text-body/70 font-inter max-w-2xl mx-auto">
                        Cuidado desde o primeiro clique até o momento da sua alta.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Service 1: Individual */}
                    <div className="group relative bg-background p-6 rounded-3xl border border-black/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Heart className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-manrope font-bold text-primary mb-2">
                                Psicoterapia Individual
                            </h3>
                            <p className="text-text-body/70 font-inter text-sm leading-relaxed mb-4">
                                Espaço seguro para autoconhecimento. Sessões de 45min a 1h.
                            </p>
                            <a
                                href="https://wa.link/ufs2ot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-manrope font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                            >
                                Agendar <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Service 2: Casal */}
                    <div className="group relative bg-background p-6 rounded-3xl border border-black/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-manrope font-bold text-primary mb-2">
                                Psicoterapia de Casal
                            </h3>
                            <p className="text-text-body/70 font-inter text-sm leading-relaxed mb-4">
                                Melhorem a comunicação e encontrem soluções juntos. 1h30min.
                            </p>
                            <a
                                href="https://wa.link/ufs2ot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-manrope font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                            >
                                Agendar <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Service 3: Palestras */}
                    <div className="group relative bg-background p-6 rounded-3xl border border-black/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <GraduationCap className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-manrope font-bold text-primary mb-2">
                                Palestras e Workshops
                            </h3>
                            <p className="text-text-body/70 font-inter text-sm leading-relaxed mb-4">
                                Saúde mental para empresas: Burnout, inteligência emocional.
                            </p>
                            <a
                                href="https://wa.link/ufs2ot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-manrope font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                            >
                                Saiba mais <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <ChevronDown className="w-5 h-5 text-text-body/30 scroll-indicator" />
            </div>
        </section>
    )
}
