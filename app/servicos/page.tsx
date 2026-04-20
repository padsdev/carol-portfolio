import type { Metadata } from "next"
import ServicesHero from "../components/ServicesHero"
import ServiceDetail from "../components/ServiceDetail"
import PalestrasSection from "../components/PalestrasSection"
import VideosSection from "../components/VideosSection"

import Footer from "../components/Footer"
import BackToTopButton from "../components/BackToTopButton"

export const metadata: Metadata = {
    title: "Serviços - Caroline Assis | Psicóloga Clínica",
    description:
        "Conheça os serviços da psicóloga Caroline Assis: Terapia Individual, Terapia de Casal, Palestras e Workshops. Atendimento 100% online.",
}

export default function ServicosPage() {
    return (
        <main className="scroll-snap-container overflow-x-hidden">
            {/* Hero — locked first screen */}
            <ServicesHero />

            {/* Terapia Individual */}
            <ServiceDetail
                id="terapia-individual"
                iconName="heart"
                title="Terapia Individual"
                subtitle="Psicoterapia Online"
                description="Tudo acontece numa plataforma segura, onde o sigilo absoluto é minha principal premissa e um direito seu. Criaremos juntos estratégias personalizadas para amenizar as angústias e desafios que a vida no exterior impõe. Para que o cuidado vá além da sessão, teremos uma pasta no Google Drive. Nela, você terá acesso a materiais de apoio, exercícios e, se necessário, instrumentos psicológicos aplicados, tudo disponível e acessível na palma da sua mão."
                features={[
                    "Conexão cultural: fale com quem entende o peso e a alegria de ser brasileiro",
                    "Sem barreiras: 100% online por videochamada (Google Meet ou WhatsApp)",
                    "Flexibilidade: horários adaptados ao seu fuso horário local",
                    "Sigilo total: ambiente seguro e rigorosamente ético",
                    "Plano terapêutico personalizado com abordagem TCC",
                    "Pasta exclusiva no Google Drive com materiais de apoio",
                ]}
                ctaText="Agendar Sessão"
                ctaHref="https://wa.link/ufs2ot"
            />

            {/* Terapia de Casal */}
            <ServiceDetail
                id="terapia-casal"
                iconName="users"
                title="Terapia de Casal"
                subtitle="Relacionamentos"
                description="Viver em outro país coloca o relacionamento sob uma pressão única. Longe da rede de apoio familiar, o casal precisa ser parceiro, amigo e suporte — tudo ao mesmo tempo. As sessões ocorrem via plataforma criptografada, garantindo um ambiente onde ambos possam falar e ser ouvidos com total imparcialidade e sigilo. Assim como na individual, o casal terá acesso a uma pasta no Google Drive com exercícios de conexão, leituras e ferramentas práticas para aplicar na rotina."
                features={[
                    "Espaço neutro e seguro via plataforma criptografada",
                    "Estratégias de comunicação para substituir críticas por diálogo construtivo",
                    "Identificação de pontos de conflito e objetivos comuns",
                    "Suporte digital exclusivo com pasta no Google Drive",
                    "Ferramentas práticas para fortalecer o vínculo na rotina",
                    "Atendimento 100% online",
                ]}
                ctaText="Agendar Sessão"
                ctaHref="https://wa.link/ufs2ot"
                reversed
            />

            {/* Palestras e Workshops — own snap section */}
            <PalestrasSection />

            {/* Videos + CTA + Footer */}
            <section className="snap-section-auto flex flex-col justify-between">
                <div className="flex-grow">
                    <VideosSection />

                    {/* CTA Final */}
                    <section className="snap-section-auto flex flex-col justify-between pt-50">
                        <div className="mx-auto text-center">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-manrope font-bold text-primary mb-6">
                                    Pronto para começar?
                                </h2>
                                <p className="text-text-body/70 font-inter text-lg leading-relaxed mb-10">
                                    O primeiro passo é sempre o mais importante. Entre em contato e agende a sua
                                    primeira sessão. Estou aqui para te acolher.
                                </p>
                                <a
                                    href="https://wa.link/ufs2ot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center px-12 py-5 rounded-full bg-[#4B4B47] text-white font-bold font-manrope text-lg shadow-[0_10px_20px_rgba(75,75,71,0.2)] hover:bg-primary hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-all duration-400 hover:-translate-y-1 hover:scale-[1.03] overflow-hidden"
                                >
                                    <span className="relative z-10">Agendar Consulta</span>
                                    {/* Shine Effect */}
                                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%] z-0" />
                                </a>
                            </div>
                        </div>
                        <Footer />
                    </section>
                </div>
            </section>

            <BackToTopButton />
        </main>
    )
}
