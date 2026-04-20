import { ArrowRight, ChevronDown } from "lucide-react"

export default function SobreCTA() {
    return (
        <section className="snap-section bg-[#2B2B27] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-manrope font-bold text-primary mb-6 drop-shadow-[0_0_30px_rgba(202,169,81,0.4)]">
                        Sua Saúde Importa!
                    </h2>
                    <p className="text-base md:text-lg text-white/80 font-inter leading-relaxed mb-8">
                        Seja você um indivíduo em busca de autoconhecimento, um casal passando por desafios
                        ou alguém que deseja se conectar com um grupo de apoio, estou aqui para caminhar ao seu lado.
                        Juntos, podemos explorar novos caminhos e encontrar o equilíbrio necessário para uma vida mais significativa.
                    </p>
                    <a
                        href="https://wa.link/ufs2ot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-white font-bold font-manrope shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-primary/90 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Agendar Consulta
                            <ArrowRight className="w-5 h-5" />
                        </span>
                        {/* Shine Effect */}
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%] z-0"></div>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <ChevronDown className="w-5 h-5 text-white/30 scroll-indicator" />
            </div>
        </section>
    )
}
