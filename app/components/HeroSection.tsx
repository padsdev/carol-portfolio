import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Column: Image/Visual */}
            <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-full rounded-[40px] overflow-hidden shadow-2xl bg-secondary/30">
                    {/* Placeholder for Caroline's Photo */}
                    <div className="absolute inset-0 bg-secondary flex items-center justify-center text-primary-900/50 text-xl font-manrope font-bold">
                        [Foto de Caroline Assis]
                    </div>
                    {/* Decorative Overlay mimic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
                <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary/30 text-primary font-manrope font-bold text-sm tracking-wider uppercase mb-4">
                        CRP: 14/083109
                    </span>
                    <h2 className="text-xl md:text-2xl font-light text-text-body font-manrope mb-2">
                        Psicóloga Clínica
                    </h2>
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-primary font-manrope leading-tight">
                        CAROLINE <br /> ASSIS
                    </h1>
                </div>

                <p className="text-lg text-text-body/80 leading-relaxed max-w-lg mx-auto lg:mx-0 font-inter">
                    Atendimento especializado a brasileiros no exterior e psicoterapia baseada em evidências.
                    Acolhimento, ética e ciência para transformar sua saúde mental.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                    <Link
                        href="#contact"
                        className="group relative px-8 py-4 rounded-full bg-gradient-to-br from-primary to-[#B49419] text-white font-bold font-manrope shadow-[0_8px_20px_rgba(67,87,112,0.2)] hover:shadow-[0_12px_25px_rgba(67,87,112,0.3)] transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-[5px] overflow-hidden"
                    >
                        <span className="relative z-10">Agendar Consulta</span>
                        {/* Shine Effect */}
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%]"></div>
                    </Link>
                    <Link
                        href="#about"
                        className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold font-manrope hover:bg-primary/5 transition-all duration-300 hover:scale-[1.05]"
                    >
                        Saiba Mais
                    </Link>
                </div>
            </div>
        </section>
    );
}
