import type { Metadata } from "next"
import ContactHero from "../components/ContactHero"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

export const metadata: Metadata = {
    title: "Contato - Caroline Assis | Psicóloga Clínica",
    description:
        "Entre em contato com a psicóloga Caroline Assis. Agende sua sessão de terapia online pelo WhatsApp ou envie uma mensagem.",
}

export default function ContatoPage() {
    return (
        <main className="bg-background">
            <ContactHero />

            {/* Divider */}
            <div className="container mx-auto px-6">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            <ContactForm />

            {/* WhatsApp CTA */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-manrope font-bold text-primary mb-4">
                            Prefere uma resposta mais rápida?
                        </h2>
                        <p className="text-text-body/70 font-inter text-base leading-relaxed mb-8">
                            Entre em contato diretamente pelo WhatsApp. É o canal mais rápido
                            para agendar sua sessão.
                        </p>
                        <a
                            href="https://wa.me/message/5P5LQTNQ7ZDGC1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-[#4B4B47] text-white font-bold font-manrope text-lg shadow-[0_10px_20px_rgba(75,75,71,0.2)] hover:bg-primary hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-all duration-400 hover:-translate-y-1 hover:scale-[1.03] overflow-hidden"
                        >
                            <span className="relative z-10">Falar pelo WhatsApp</span>
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%] z-0" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
