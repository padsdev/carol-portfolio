import { GraduationCap, Building2, BookOpen, Award, ChevronDown } from "lucide-react"

export default function AcademicSection() {
    return (
        <section className="snap-section bg-white">
            <div className="container mx-auto px-6 py-8">
                <div className="text-center mb-10">
                    <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-manrope font-semibold text-sm tracking-wider uppercase mb-4">
                        Formação
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-manrope font-bold text-primary mb-4">
                        Experiência e Rigor Acadêmico
                    </h2>
                    <p className="text-lg text-text-body/70 font-inter max-w-2xl mx-auto">
                        Acredito que a prática clínica deve ser sempre embasada pela ciência.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Card 1: USP */}
                    <div className="group bg-background p-6 rounded-3xl border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <GraduationCap className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-lg font-manrope font-bold text-text-body mb-2">
                            Instituto de Psiquiatria da USP
                        </h3>
                        <p className="text-text-body/70 font-inter text-sm leading-relaxed">
                            Colaboradora no AMIT, um dos maiores centros de referência em saúde mental do Brasil.
                        </p>
                    </div>

                    {/* Card 2: Instituto Versar */}
                    <div className="group bg-background p-6 rounded-3xl border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <Building2 className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-lg font-manrope font-bold text-text-body mb-2">
                            Instituto Versar de Saúde Mental
                        </h3>
                        <p className="text-text-body/70 font-inter text-sm leading-relaxed">
                            Proprietária e coordenadora de frentes de cuidado e bem-estar no Brasil.
                        </p>
                    </div>

                    {/* Card 3: Autora */}
                    <div className="group bg-background p-6 rounded-3xl border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <BookOpen className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-lg font-manrope font-bold text-text-body mb-2">
                            Autora e Pesquisadora
                        </h3>
                        <p className="text-text-body/70 font-inter text-sm leading-relaxed">
                            Co-autora de &quot;Novos Humanos de 2030&quot; e &quot;Ética e Psicologia&quot;.
                        </p>
                    </div>
                </div>

                {/* Additional Experience Text */}
                <div className="mt-8 max-w-3xl mx-auto text-center">
                    <div className="bg-secondary/20 p-6 rounded-3xl border border-primary/10">
                        <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                        <p className="text-text-body font-inter text-sm leading-relaxed">
                            Com mais de <strong className="text-primary">6 anos de experiência</strong> em atendimento online,
                            já ajudei centenas de brasileiros. Ministrei cursos para a <strong>FAB</strong> e a
                            <strong> Subsecretaria de Políticas para a Juventude</strong>.
                        </p>
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
