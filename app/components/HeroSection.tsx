import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative container mx-auto px-6 py-32 lg:py-48 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-visible">

            {/* Floating Balls - Julia Style */}
            {/* Ball 1: Large light primary */}
            <div
                className="absolute top-10 left-[-50px] lg:left-0 w-32 h-32 rounded-full bg-primary/10 animate-float z-0 pointer-events-none"
                style={{ animationDelay: '0s' }}
            ></div>
            {/* Ball 2: Small dark accent */}
            <div
                className="absolute top-40 left-[20%] lg:left-40 w-16 h-16 rounded-full bg-[#4B4B47]/10 animate-float z-0 pointer-events-none"
                style={{ animationDelay: '2s' }}
            ></div>
            {/* Ball 3: Large bottom */}
            <div
                className="absolute bottom-20 left-10 lg:left-20 w-40 h-40 rounded-full bg-primary/5 animate-float z-0 pointer-events-none"
                style={{ animationDelay: '4s' }}
            ></div>

            {/* Left Column: Image/Visual */}
            <div className="w-full lg:w-1/2 relative z-10 flex justify-center perspective-[1000px]">
                {/* Photo Container with Tilt Effect */}
                <div className="photo-card-container relative aspect-[4/5] w-full max-w-lg lg:max-w-xl rounded-[40px] overflow-hidden shadow-2xl bg-secondary/30 group">
                    {/* Placeholder for Caroline's Photo */}
                    <div className="absolute inset-0 bg-secondary flex items-center justify-center text-primary-900/50 text-xl font-manrope font-bold group-hover:scale-105 transition-transform duration-700 ease-out">
                        <Image
                            src="/carol-looking-left.png"
                            alt="Caroline Assis"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 relative z-10">
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
                        className="group relative px-10 py-5 rounded-full bg-[#4B4B47] text-white font-bold font-manrope shadow-[0_10px_20px_rgba(75,75,71,0.2)] hover:bg-primary hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform hover:-translate-y-[5px] hover:scale-[1.03] overflow-hidden"
                    >
                        <span className="relative z-10">Agendar Consulta</span>
                        {/* Shine Effect - Julia Style */}
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%] z-0"></div>
                    </Link>
                    <Link
                        href="#about"
                        className="px-10 py-5 rounded-full border-2 border-[#4B4B47] text-[#4B4B47] font-bold font-manrope hover:bg-[#4B4B47] hover:text-white transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] hover:-translate-y-[5px]"
                    >
                        Sobre Mim
                    </Link>
                </div>
            </div>
        </section>
    );
}
