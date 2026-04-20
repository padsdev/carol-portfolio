import { MessageCircle, Mail, Globe } from "lucide-react"

const contactCards = [
    {
        icon: MessageCircle,
        title: "WhatsApp",
        subtitle: "Principal canal de agendamento",
        info: "+34 623 765 058",
        href: "https://wa.link/ufs2ot",
        highlight: true,
    },
    {
        icon: Mail,
        title: "E-mail",
        subtitle: "Para dúvidas e informações",
        info: "psi.carolineassis@gmail.com",
        href: "mailto:psi.carolineassis@gmail.com",
        highlight: false,
    },
]

export default function ContactHero() {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-background overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1.5 px-5 rounded-full bg-primary/10 text-primary font-manrope font-semibold text-sm tracking-wider uppercase mb-6">
                        Contato
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-extrabold text-primary mb-6 leading-tight">
                        Entre em Contato
                    </h1>
                    <p className="text-lg text-text-body/70 font-inter leading-relaxed max-w-2xl mx-auto mb-4">
                        Estou aqui para te acolher. Entre em contato para agendar sua
                        sessão ou tirar qualquer dúvida.
                    </p>

                    {/* Online Badge */}
                    <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-emerald-50 border border-emerald-200">
                        <Globe className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-manrope font-semibold text-sm">
                            Atendimento 100% Online
                        </span>
                    </div>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {contactCards.map((card) => (
                        <a
                            key={card.title}
                            href={card.href}
                            target={card.href.startsWith("http") ? "_blank" : undefined}
                            rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={`group relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${card.highlight
                                ? "bg-primary/5 border-primary/20 hover:border-primary/40"
                                : "bg-white border-black/5 hover:border-primary/20"
                                }`}
                        >
                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${card.highlight ? "bg-primary/15" : "bg-primary/10"
                                    }`}>
                                    <card.icon className="w-7 h-7 text-primary" />
                                </div>

                                <h3 className="text-xl font-manrope font-bold text-primary mb-1">
                                    {card.title}
                                </h3>
                                <p className="text-text-body/50 font-inter text-xs uppercase tracking-wider mb-3">
                                    {card.subtitle}
                                </p>
                                <p className="text-text-body font-inter text-sm font-medium group-hover:text-primary transition-colors">
                                    {card.info}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
