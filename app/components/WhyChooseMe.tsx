import Image from "next/image"

import { Sparkles, Users, Globe, ChevronDown } from "lucide-react"

export default function WhyChooseMe() {
    return (
        <section className="snap-section bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div>
                            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-manrope font-semibold text-sm tracking-wider uppercase mb-4">
                                Diferenciais
                            </span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-bold text-primary mb-4">
                                Por que me escolher?
                            </h2>
                            <p className="text-base text-text-body/70 font-inter leading-relaxed">
                                Viver em Barcelona me deu a perspectiva real do que é ser imigrante.
                                Unindo essa vivência à <strong className="text-primary">TCC</strong>, ofereço:
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Benefit 1 */}
                            <div className="flex gap-4 items-start group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                                    <Sparkles className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="font-manrope font-bold text-text-body mb-1">Ferramentas Práticas</h4>
                                    <p className="text-text-body/70 font-inter text-sm">
                                        Para lidar com a ansiedade e os desafios do dia a dia.
                                    </p>
                                </div>
                            </div>

                            {/* Benefit 2 */}
                            <div className="flex gap-4 items-start group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                                    <Users className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="font-manrope font-bold text-text-body mb-1">Autonomia</h4>
                                    <p className="text-text-body/70 font-inter text-sm">
                                        Você se torna protagonista da sua própria história.
                                    </p>
                                </div>
                            </div>

                            {/* Benefit 3 */}
                            <div className="flex gap-4 items-start group">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                                    <Globe className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="font-manrope font-bold text-text-body mb-1">Conexão Cultural</h4>
                                    <p className="text-text-body/70 font-inter text-sm">
                                        Entendo sua cultura, suas gírias e seu contexto.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Quote Card */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                            {/* Quote Mark */}
                            <div className="absolute -top-4 left-6 text-6xl text-primary/20 font-serif leading-none">&ldquo;</div>

                            <div className="relative z-10">
                                <p className="text-xl md:text-2xl font-manrope font-medium text-text-body leading-relaxed mb-6">
                                    Vamos juntos <span className="text-primary">versar</span> sobre a sua história e construir novos caminhos?
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary">
                                        <Image
                                            src="/caroline-assis-portrait.png"
                                            alt="Caroline Assis"
                                            width={48}
                                            height={48}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-manrope font-bold text-text-body">Caroline Assis</p>
                                        <p className="text-sm text-text-body/60 font-inter">Psicóloga Clínica</p>
                                    </div>
                                </div>
                            </div>
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
