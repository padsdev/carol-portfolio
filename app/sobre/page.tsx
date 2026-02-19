"use client"

import TestimonialsSection from "../components/TestimonialsSection"
import Footer from "../components/Footer"
import Image from "next/image"
import { GraduationCap, Building2, BookOpen, Users, Heart, Globe, ArrowRight, Award, Sparkles, ChevronDown } from "lucide-react"

export default function SobrePage() {
    return (
        <main
            className="scroll-snap-container"
        >
            {/* Hero Section - About */}
            <section
                className="snap-section relative bg-background"
            >
                <div className="container mx-auto px-6 pt-24 pb-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Floating Balls - Decorative elements */}
                    <div
                        className="absolute top-32 right-0 w-32 h-32 rounded-full bg-primary/10 animate-float z-0 pointer-events-none"
                        style={{ animationDelay: '0s' }}
                    ></div>
                    <div
                        className="absolute top-52 right-[20%] lg:right-40 w-16 h-16 rounded-full bg-[#4B4B47]/10 animate-float z-0 pointer-events-none"
                        style={{ animationDelay: '2s' }}
                    ></div>
                    <div
                        className="absolute bottom-32 right-10 lg:right-20 w-40 h-40 rounded-full bg-primary/5 animate-float z-0 pointer-events-none"
                        style={{ animationDelay: '4s' }}
                    ></div>

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 relative z-10 order-2 lg:order-1">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-secondary/30 text-primary font-manrope font-bold text-sm tracking-wider uppercase mb-4">
                                CRP 14/083109
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-primary leading-tight mb-4">
                                Olá, eu sou <br />Caroline Assis
                            </h1>
                        </div>

                        <div className="space-y-4 text-text-body font-inter leading-relaxed max-w-lg mx-auto lg:mx-0">
                            <p>
                                Minha jornada na psicologia começou em <strong className="text-primary">Campo Grande - MS</strong>,
                                mas hoje minha base física é em <strong className="text-primary">Barcelona, na Espanha</strong>.
                            </p>
                            <p>
                                Sou psicóloga clínica devidamente regularizada pelo Conselho Regional de Psicologia
                                e pelo <strong>E-Psi</strong>, o que me autoriza legalmente a cuidar da sua saúde mental
                                de forma online com total segurança.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-2 justify-center lg:justify-start">
                            <div className="text-center lg:text-left">
                                <span className="text-3xl font-manrope font-bold text-primary">+6</span>
                                <p className="text-sm text-text-body/60 font-inter">Anos de experiência</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="text-3xl font-manrope font-bold text-primary">+500</span>
                                <p className="text-sm text-text-body/60 font-inter">Pacientes atendidos</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <span className="text-3xl font-manrope font-bold text-primary">5.0</span>
                                <p className="text-sm text-text-body/60 font-inter">Avaliação Google</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Photo */}
                    <div className="w-full lg:w-1/2 relative z-10 flex justify-center perspective-[1000px] order-1 lg:order-2">
                        <div className="photo-card-container-sobre relative aspect-[3/4] w-full max-w-sm lg:max-w-md rounded-[40px] overflow-hidden shadow-2xl bg-secondary/30 group">
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
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-body/50">
                    <span className="text-xs font-inter uppercase tracking-widest">Role para baixo</span>
                    <ChevronDown className="w-5 h-5 scroll-indicator" />
                </div>
            </section>

            {/* Experiência e Rigor Acadêmico */}
            <section
                className="snap-section bg-white"
            >
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

            {/* Por que escolher meu acompanhamento */}
            <section
                className="snap-section bg-gradient-to-b from-background to-secondary/30"
            >
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

            {/* Serviços Section */}
            <section
                className="snap-section bg-white"
            >
                <div className="container mx-auto px-6 py-8">
                    <div className="text-center mb-10">
                        <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-manrope font-semibold text-sm tracking-wider uppercase mb-4">
                            Serviços
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-manrope font-bold text-primary mb-4">
                            Meus Serviços
                        </h2>
                        <p className="text-base text-text-body/70 font-inter max-w-2xl mx-auto">
                            Cuidado desde o primeiro clique até o momento da sua alta.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Service 1: Individual */}
                        <div className="group relative bg-background p-6 rounded-3xl border border-black/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Heart className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-lg font-manrope font-bold text-primary mb-2">
                                    Psicoterapia Individual
                                </h3>
                                <p className="text-text-body/70 font-inter text-sm leading-relaxed mb-4">
                                    Espaço seguro para autoconhecimento. Sessões de 45min a 1h.
                                </p>
                                <a
                                    href="https://wa.me/message/5P5LQTNQ7ZDGC1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary font-manrope font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                                >
                                    Agendar <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Service 2: Casal */}
                        <div className="group relative bg-background p-6 rounded-3xl border border-black/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-lg font-manrope font-bold text-primary mb-2">
                                    Psicoterapia de Casal
                                </h3>
                                <p className="text-text-body/70 font-inter text-sm leading-relaxed mb-4">
                                    Melhorem a comunicação e encontrem soluções juntos. 1h30min.
                                </p>
                                <a
                                    href="https://wa.me/message/5P5LQTNQ7ZDGC1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary font-manrope font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                                >
                                    Agendar <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Service 3: Palestras */}
                        <div className="group relative bg-background p-6 rounded-3xl border border-black/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <GraduationCap className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-lg font-manrope font-bold text-primary mb-2">
                                    Palestras e Workshops
                                </h3>
                                <p className="text-text-body/70 font-inter text-sm leading-relaxed mb-4">
                                    Saúde mental para empresas: Burnout, inteligência emocional.
                                </p>
                                <a
                                    href="https://wa.me/message/5P5LQTNQ7ZDGC1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary font-manrope font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                                >
                                    Saiba mais <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <ChevronDown className="w-5 h-5 text-text-body/30 scroll-indicator" />
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="snap-section bg-[#2B2B27] relative overflow-hidden"
            >
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
                            href="https://wa.me/message/5P5LQTNQ7ZDGC1"
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

            {/* Testimonials + Footer */}
            <section
                className="snap-section-auto flex flex-col justify-between"
            >
                <div className="flex-grow flex flex-col">
                    <TestimonialsSection />
                </div>
                <Footer />
            </section>
        </main>
    )
}
