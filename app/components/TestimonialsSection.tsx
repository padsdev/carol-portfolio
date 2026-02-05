"use client"

import { Star, ExternalLink } from "lucide-react"

const TESTIMONIALS = [
    {
        id: 1,
        name: "Karina Romão Calvo",
        reviewUrl: "https://www.google.com/maps/contrib/100693044807179363240/place/ChIJUSkPRHXphpQRQOL1SUxj4iA/@-16.4970129,-55.1633121,7z/data=!4m6!1m5!8m4!1e1!2s100693044807179363240!3m1!1e1?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
        text: "A melhor psicóloga que já tive! tenho a oportunidade de ser acompanhada por ela há anos. Muito atenciosa e competente. Desenrola o novelo emaranhado dos meus pensamentos mais complexos.",
        rating: 5,
        time: "15 de jul. de 2024",
    },
    {
        id: 2,
        name: "Ana Carolina Santos Vieira",
        reviewUrl: "https://www.google.com/maps/contrib/101459516376373106191/place/ChIJUSkPRHXphpQRQOL1SUxj4iA/@-20.4536786,-54.5945959,16z/data=!4m6!1m5!8m4!1e1!2s101459516376373106191!3m1!1e1?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
        text: "A Carol é Sempre maravilhosa comigo! Uma excelente profissional, faço questão de indicar para todos que eu conheço. Ela é Super empática com seus pacientes. Sou Grata por ela sempre me ajudar do melhor jeito possível!",
        rating: 5,
        time: "23 de fev. de 2025",
    },
    {
        id: 3,
        name: "Thaynara Espínola",
        reviewUrl: "https://www.google.com/maps/contrib/110639524933807549888/place/ChIJUSkPRHXphpQRQOL1SUxj4iA/@-20.4496947,-54.6012846,17z/data=!4m6!1m5!8m4!1e1!2s110639524933807549888!3m1!1e1?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
        text: "Se tivesse como colocar nota mil eu com certeza colocaria. É uma ótima profissional, querida, acolhedora.. sorte a minha ter você como psicóloga.",
        rating: 5,
        time: "25 de abr. de 2023",
    },
]

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-secondary/30 flex-1 flex flex-col">
            <div className="container mx-auto px-4 my-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-manrope font-bold text-primary mb-4">
                        Depoimentos
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-text-body/80 font-inter font-medium">
                        <span className="flex items-center gap-1">
                            5.0
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                            ))}
                        </span>
                        <span>no Google Maps</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {TESTIMONIALS.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-6 rounded-xl shadow-sm border border-black/5 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-manrope font-bold text-sm">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        {testimonial.reviewUrl ? (
                                            <a
                                                href={testimonial.reviewUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-1"
                                            >
                                                <h4 className="font-inter font-semibold text-sm text-text-body group-hover:text-primary transition-colors duration-200">
                                                    {testimonial.name}
                                                </h4>
                                                <ExternalLink className="w-3 h-3 text-text-body/40 group-hover:text-primary transition-colors duration-200" />
                                            </a>
                                        ) : (
                                            <h4 className="font-inter font-semibold text-sm text-text-body">
                                                {testimonial.name}
                                            </h4>
                                        )}
                                        <p className="text-xs text-text-body/60 font-inter">
                                            {testimonial.time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 text-yellow-400 fill-current"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-text-body/80 leading-relaxed font-inter">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
