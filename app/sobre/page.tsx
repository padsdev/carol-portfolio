import VideoCarousel from "../components/VideoCarousel"
import TestimonialsSection from "../components/TestimonialsSection"
import Image from "next/image"

export default function SobrePage() {
    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section - About (Layout invertido: texto à esquerda, foto à direita com parallax) */}
            <section className="relative container mx-auto px-6 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-visible">

                {/* Floating Balls - Decorative elements */}
                <div
                    className="absolute top-10 right-[-50px] lg:right-0 w-32 h-32 rounded-full bg-primary/10 animate-float z-0 pointer-events-none"
                    style={{ animationDelay: '0s' }}
                ></div>
                <div
                    className="absolute top-40 right-[20%] lg:right-40 w-16 h-16 rounded-full bg-[#4B4B47]/10 animate-float z-0 pointer-events-none"
                    style={{ animationDelay: '2s' }}
                ></div>
                <div
                    className="absolute bottom-20 right-10 lg:right-20 w-40 h-40 rounded-full bg-primary/5 animate-float z-0 pointer-events-none"
                    style={{ animationDelay: '4s' }}
                ></div>

                {/* Left Column: Content (opposite of Home) */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 relative z-10 order-2 lg:order-1">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary/30 text-primary font-manrope font-bold text-sm tracking-wider uppercase mb-4">
                            CRP 14/10380
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-primary leading-tight mb-4">
                            Sobre Mim
                        </h1>
                    </div>

                    <div className="space-y-4 text-text-body font-inter leading-relaxed max-w-lg mx-auto lg:mx-0">
                        <p>
                            Olá! Sou <strong className="text-primary">Caroline Assis</strong>, psicóloga clínica
                            especializada em Terapia Cognitivo-Comportamental (TCC). Minha missão é proporcionar
                            um espaço seguro e acolhedor para você explorar suas emoções e desenvolver
                            ferramentas para lidar com os desafios da vida.
                        </p>
                        <p>
                            Com formação sólida e experiência em atendimento online, trabalho com brasileiros
                            no Brasil e no exterior, oferecendo suporte especializado em ansiedade, depressão,
                            relacionamentos e desenvolvimento pessoal.
                        </p>
                        <p>
                            Acredito que cada pessoa tem o potencial de transformar sua história.
                            Meu papel é caminhar ao seu lado nessa jornada de autoconhecimento.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 pt-4 justify-center lg:justify-start">
                        <div className="text-center lg:text-left">
                            <span className="text-3xl font-manrope font-bold text-primary">+500</span>
                            <p className="text-sm text-text-body/60 font-inter">Pacientes atendidos</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <span className="text-3xl font-manrope font-bold text-primary">+8</span>
                            <p className="text-sm text-text-body/60 font-inter">Anos de experiência</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <span className="text-3xl font-manrope font-bold text-primary">5.0</span>
                            <p className="text-sm text-text-body/60 font-inter">Avaliação Google</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Photo with Parallax Tilt Effect (like HeroSection but mirrored) */}
                <div className="w-full lg:w-1/2 relative z-10 flex justify-center perspective-[1000px] order-1 lg:order-2">
                    {/* Photo Container with Tilt Effect - mirrored from Home */}
                    <div className="photo-card-container-sobre relative aspect-[3/4] w-full max-w-md lg:max-w-lg rounded-[40px] overflow-hidden shadow-2xl bg-secondary/30 group">
                        <div className="absolute inset-0 bg-secondary flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                            <Image
                                src="/caroline-assis-portrait.png"
                                alt="Caroline Assis - Psicóloga Clínica"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* Video Carousel */}
            <VideoCarousel />

            {/* Testimonials */}
            <TestimonialsSection />
        </main>
    )
}
