import type { Metadata } from "next"
import Image from "next/image"

import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

export const metadata: Metadata = {
    title: "Contato - Caroline Assis | Psicóloga Clínica",
    description:
        "Entre em contato com a psicóloga Caroline Assis. Agende sua sessão de terapia online pelo WhatsApp ou envie uma mensagem.",
}

export default function ContatoPage() {
    return (
        <main className="overflow-x-hidden">
            {/* Main Contact Section — Full viewport with background image */}
            <section className="relative min-h-screen flex flex-col justify-center items-center bg-background overflow-hidden">
                {/* Background Image — very transparent */}
                <div className="absolute inset-0 pointer-events-none">
                    <Image
                        src="/caroline-assis.png"
                        alt=""
                        fill
                        className="object-contain object-center opacity-[0.06]"
                        sizes="100vw"
                        priority
                        aria-hidden="true"
                    />
                    {/* Extra white wash overlay */}
                    <div className="absolute inset-0 bg-background/40" />
                </div>

                {/* Decorative blurs */}
                <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Header */}
                        <div className="mb-12">
                            <span className="inline-block text-text-body/40 font-inter text-sm tracking-wider uppercase mb-3">
                                /&nbsp; Entre em Contato
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-extrabold text-primary leading-tight">
                                Agende sua Consulta
                            </h1>
                        </div>

                        {/* Inline Form */}
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    )
}
