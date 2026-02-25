import { User, Users, Mic2 } from "lucide-react"

const anchors = [
    { label: "Terapia Individual", href: "#terapia-individual", icon: User },
    { label: "Terapia de Casal", href: "#terapia-casal", icon: Users },
    { label: "Palestras e Workshops", href: "#palestras-workshops", icon: Mic2 },
]

export default function ServicesHero() {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-background overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1.5 px-5 rounded-full bg-primary/10 text-primary font-manrope font-semibold text-sm tracking-wider uppercase mb-6">
                        Serviços
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-extrabold text-primary mb-6 leading-tight">
                        Áreas de Atuação
                    </h1>
                    <p className="text-lg text-text-body/70 font-inter leading-relaxed max-w-2xl mx-auto">
                        Cuidado profissional e acolhedor, desde o primeiro clique até o momento da sua alta.
                        Atendimento 100% online para você, onde quer que esteja.
                    </p>
                </div>

                {/* Quick Navigation Anchors */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {anchors.map((anchor) => (
                        <a
                            key={anchor.href}
                            href={anchor.href}
                            className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <anchor.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                            </div>
                            <span className="font-manrope font-semibold text-sm text-text-body group-hover:text-primary transition-colors">
                                {anchor.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
