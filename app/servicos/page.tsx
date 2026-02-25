import type { Metadata } from "next"
import { Heart, Users } from "lucide-react"
import ServicesHero from "../components/ServicesHero"
import ServiceDetail from "../components/ServiceDetail"
import PalestrasSection from "../components/PalestrasSection"
import Footer from "../components/Footer"

export const metadata: Metadata = {
    title: "Serviços - Caroline Assis | Psicóloga Clínica",
    description:
        "Conheça os serviços da psicóloga Caroline Assis: Terapia Individual, Terapia de Casal, Palestras e Workshops. Atendimento 100% online.",
}

export default function ServicosPage() {
    return (
        <main className="bg-background">
            <ServicesHero />

            {/* Divider */}
            <div className="container mx-auto px-6">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            {/* Terapia Individual */}
            <ServiceDetail
                id="terapia-individual"
                icon={Heart}
                title="Terapia Individual"
                subtitle="Psicoterapia"
                description="Num espaço seguro e acolhedor, trabalho com a abordagem cognitivo-comportamental (TCC) para ajudá-lo a compreender seus pensamentos, emoções e comportamentos. Juntos, desenvolveremos estratégias personalizadas para lidar com ansiedade, depressão, autoestima, luto e outros conflitos emocionais — sempre no seu ritmo e com respeito à sua história."
                features={[
                    "Sessões de 45 minutos a 1 hora",
                    "Abordagem cognitivo-comportamental (TCC)",
                    "Ansiedade, depressão, autoestima e luto",
                    "Atendimento a brasileiros no exterior",
                    "Plano terapêutico personalizado",
                    "Atendimento 100% online",
                ]}
                ctaText="Agendar Sessão"
                ctaHref="https://wa.me/message/5P5LQTNQ7ZDGC1"
            />

            {/* Divider */}
            <div className="container mx-auto px-6">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            {/* Terapia de Casal */}
            <ServiceDetail
                id="terapia-casal"
                icon={Users}
                title="Terapia de Casal"
                subtitle="Relacionamentos"
                description="A terapia de casal é um espaço para ambos se sentirem ouvidos e compreendidos. Com técnicas baseadas em evidências, ajudo o casal a identificar padrões de comunicação disfuncionais, resolver conflitos recorrentes e fortalecer o vínculo afetivo. Cada sessão é conduzida com imparcialidade, empatia e foco na construção de um relacionamento mais saudável."
                features={[
                    "Sessões de 1 hora e 30 minutos",
                    "Mediação de conflitos com imparcialidade",
                    "Melhoria da comunicação entre o casal",
                    "Fortalecimento de vínculos afetivos",
                    "Resolução de crises e padrões disfuncionais",
                    "Atendimento 100% online",
                ]}
                ctaText="Agendar Sessão"
                ctaHref="https://wa.me/message/5P5LQTNQ7ZDGC1"
                reversed
            />

            {/* Palestras e Workshops */}
            <PalestrasSection />

            {/* CTA Final */}
            <section className="py-20 md:py-28 bg-background">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-manrope font-bold text-primary mb-6">
                            Pronta para começar?
                        </h2>
                        <p className="text-text-body/70 font-inter text-lg leading-relaxed mb-10">
                            O primeiro passo é sempre o mais importante. Entre em contato e agende a sua
                            primeira sessão. Estou aqui para te acolher.
                        </p>
                        <a
                            href="https://wa.me/message/5P5LQTNQ7ZDGC1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-[#4B4B47] text-white font-bold font-manrope text-lg shadow-[0_10px_20px_rgba(75,75,71,0.2)] hover:bg-primary hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-all duration-400 hover:-translate-y-1 hover:scale-[1.03] overflow-hidden"
                        >
                            <span className="relative z-10">Agendar Consulta</span>
                            {/* Shine Effect */}
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%] z-0" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
