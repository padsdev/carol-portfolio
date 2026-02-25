import { Mic2, ArrowRight } from "lucide-react"
import ImprovedVideoCarousel from "./ImprovedVideoCarousel"

const topics = [
    "Prevenção e manejo de Burnout",
    "Inteligência emocional no ambiente de trabalho",
    "Comunicação não-violenta",
    "Saúde mental e produtividade",
    "Gestão do estresse em equipes",
    "Desenvolvimento socioemocional",
]

export default function PalestrasSection() {
    return (
        <section id="palestras-workshops" className="py-20 md:py-28 bg-white scroll-mt-24">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                        {/* Left: Title + Description */}
                        <div className="lg:w-1/2">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 shadow-lg shadow-primary/10">
                                <Mic2 className="w-10 h-10 text-primary" strokeWidth={1.5} />
                            </div>
                            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-manrope font-semibold text-xs tracking-wider uppercase mb-3">
                                Para empresas e grupos
                            </span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-bold text-primary mb-6">
                                Palestras e Workshops
                            </h2>
                            <p className="text-text-body/80 font-inter text-base leading-relaxed">
                                Programas personalizados de saúde mental e desenvolvimento socioemocional
                                para empresas, instituições e grupos. Conteúdo baseado em evidências
                                científicas, adaptado à realidade da sua equipe.
                            </p>
                        </div>

                        {/* Right: Topics */}
                        <div className="lg:w-1/2">
                            <h3 className="text-lg font-manrope font-bold text-text-body mb-5">
                                Temas Disponíveis
                            </h3>
                            <ul className="space-y-3 mb-8">
                                {topics.map((topic, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                        </div>
                                        <span className="text-text-body/80 font-inter text-sm leading-relaxed">
                                            {topic}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://wa.me/message/5P5LQTNQ7ZDGC1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-manrope font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Solicitar Proposta
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-16" />

                {/* Video Carousel */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-manrope font-bold text-primary mb-3">
                            Entrevistas e Palestras
                        </h3>
                        <p className="text-text-body/60 font-inter text-sm">
                            Confira algumas das minhas participações em eventos e mídias
                        </p>
                    </div>
                    <ImprovedVideoCarousel />
                </div>
            </div>
        </section>
    )
}
