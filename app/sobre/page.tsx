import type { Metadata } from "next"
import SobreHero from "../components/SobreHero"
import AcademicSection from "../components/AcademicSection"
import WhyChooseMe from "../components/WhyChooseMe"
import SobreServices from "../components/SobreServices"
import SobreCTA from "../components/SobreCTA"
import TestimonialsSection from "../components/TestimonialsSection"
import Footer from "../components/Footer"
import BackToTopButton from "../components/BackToTopButton"

export const metadata: Metadata = {
    title: "Sobre - Caroline Assis | Psicóloga Clínica",
    description:
        "Conheça a psicóloga Caroline Assis. Mais de 6 anos de experiência, colaboradora do Instituto de Psiquiatria da USP, proprietária do Instituto Versar de Saúde Mental.",
}

export default function SobrePage() {
    return (
        <main className="scroll-snap-container">
            <SobreHero />
            <AcademicSection />
            <WhyChooseMe />
            <SobreServices />
            <SobreCTA />

            {/* Testimonials + Footer */}
            <section className="snap-section-auto flex flex-col justify-between">
                <div className="flex-grow flex flex-col">
                    <TestimonialsSection />
                </div>
                <Footer />
            </section>

            <BackToTopButton />
        </main>
    )
}
