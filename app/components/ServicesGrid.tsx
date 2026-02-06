import { User, Users, Mic2 } from "lucide-react";

const services = [
    {
        title: "Terapia Individual",
        description: "Espaço seguro para autoconhecimento e tratamento de ansiedade, depressão e outros conflitos.",
        icon: User,
    },
    {
        title: "Terapia de Casal",
        description: "Mediação de conflitos e fortalecimento de vínculos para relacionamentos mais saudáveis.",
        icon: Users,
    },
    {
        title: "Palestras e Workshops",
        description: "Programas de saúde mental e desenvolvimento socioemocional para empresas e grupos.",
        icon: Mic2,
    },
];

export default function ServicesGrid() {
    return (
        <section className="container mx-auto px-6 py-20" id="services">
            <div className="text-center mb-16">
                <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-2 font-manrope mt-15">
                    Áreas de Atuação
                </h3>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#435770] font-manrope">
                    Como posso te ajudar?
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group bg-surface rounded-[40px] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 border border-transparent hover:border-primary/20 flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-secondary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <service.icon size={32} strokeWidth={1.5} />
                        </div>

                        <h3 className="text-xl font-bold text-[#435770] font-manrope mb-4">
                            {service.title}
                        </h3>

                        <p className="text-text-body/80 font-inter text-sm leading-relaxed mb-8 flex-grow">
                            {service.description}
                        </p>

                        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 text-primary font-manrope font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            Saiba Mais
                            <span className="block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
