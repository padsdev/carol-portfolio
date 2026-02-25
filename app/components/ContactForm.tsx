"use client"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle } from "lucide-react"

const subjects = [
    "Terapia Individual",
    "Terapia de Casal",
    "Palestras e Workshops",
    "Dúvidas Gerais",
    "Outro",
]

export default function ContactForm() {
    const [formState, setFormState] = useState({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const subject = encodeURIComponent(
            `[Site] ${formState.assunto || "Contato"} - ${formState.nome}`
        )
        const body = encodeURIComponent(
            `Nome: ${formState.nome}\nE-mail: ${formState.email}\nTelefone: ${formState.telefone}\nAssunto: ${formState.assunto}\n\nMensagem:\n${formState.mensagem}`
        )

        window.location.href = `mailto:psi.carolineassis@gmail.com?subject=${subject}&body=${body}`
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl font-manrope font-bold text-primary mb-4">
                            Mensagem Preparada!
                        </h2>
                        <p className="text-text-body/70 font-inter text-base leading-relaxed mb-8">
                            Seu cliente de e-mail foi aberto com a mensagem. Caso prefira,
                            entre em contato diretamente pelo WhatsApp para uma resposta mais rápida.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/message/5P5LQTNQ7ZDGC1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-manrope font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300"
                            >
                                Falar pelo WhatsApp
                            </a>
                            <button
                                onClick={() => {
                                    setSubmitted(false)
                                    setFormState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" })
                                }}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary/30 text-primary font-manrope font-bold hover:bg-primary/5 transition-all duration-300"
                            >
                                Enviar Outra Mensagem
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-manrope font-bold text-primary mb-4">
                            Envie uma Mensagem
                        </h2>
                        <p className="text-text-body/60 font-inter text-base">
                            Preencha o formulário abaixo e retorno o mais breve possível
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name + Email row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="nome" className="block text-sm font-manrope font-semibold text-text-body mb-2">
                                    Nome completo *
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formState.nome}
                                    onChange={handleChange}
                                    required
                                    placeholder="Seu nome"
                                    className="contact-input w-full px-5 py-4 rounded-2xl bg-white border border-black/8 text-text-body font-inter text-sm placeholder:text-text-body/30 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-manrope font-semibold text-text-body mb-2">
                                    E-mail *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="seu@email.com"
                                    className="contact-input w-full px-5 py-4 rounded-2xl bg-white border border-black/8 text-text-body font-inter text-sm placeholder:text-text-body/30 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Phone + Subject row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="telefone" className="block text-sm font-manrope font-semibold text-text-body mb-2">
                                    Telefone
                                </label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    value={formState.telefone}
                                    onChange={handleChange}
                                    placeholder="(00) 00000-0000"
                                    className="contact-input w-full px-5 py-4 rounded-2xl bg-white border border-black/8 text-text-body font-inter text-sm placeholder:text-text-body/30 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <label htmlFor="assunto" className="block text-sm font-manrope font-semibold text-text-body mb-2">
                                    Assunto *
                                </label>
                                <select
                                    id="assunto"
                                    name="assunto"
                                    value={formState.assunto}
                                    onChange={handleChange}
                                    required
                                    className="contact-input w-full px-5 py-4 rounded-2xl bg-white border border-black/8 text-text-body font-inter text-sm focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300 appearance-none"
                                >
                                    <option value="" disabled>
                                        Selecione...
                                    </option>
                                    {subjects.map((subj) => (
                                        <option key={subj} value={subj}>
                                            {subj}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="mensagem" className="block text-sm font-manrope font-semibold text-text-body mb-2">
                                Mensagem *
                            </label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                value={formState.mensagem}
                                onChange={handleChange}
                                required
                                rows={6}
                                placeholder="Descreva como posso te ajudar..."
                                className="contact-input w-full px-5 py-4 rounded-2xl bg-white border border-black/8 text-text-body font-inter text-sm placeholder:text-text-body/30 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300 resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-primary text-white font-manrope font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Enviar Mensagem
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </button>
                        </div>

                        <p className="text-text-body/40 font-inter text-xs text-center pt-2">
                            Ao enviar, seu cliente de e-mail será aberto com a mensagem preenchida.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}
