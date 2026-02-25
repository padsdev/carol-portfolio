"use client"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle } from "lucide-react"
import { LazyMotion, domAnimation, m } from "framer-motion"

const subjects = [
    "Terapia Individual",
    "Terapia de Casal",
    "Palestras e Workshops",
    "Dúvidas Gerais",
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
}

const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    },
}

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    },
}

export default function InlineContactForm() {
    const [formState, setFormState] = useState({
        nome: "",
        assunto: "",
        email: "",
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
            `Nome: ${formState.nome}\nE-mail: ${formState.email}\nAssunto: ${formState.assunto}\n\nMensagem:\n${formState.mensagem}`
        )

        window.location.href = `mailto:psi.carolineassis@gmail.com?subject=${subject}&body=${body}`
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <LazyMotion features={domAnimation}>
                <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-xl mx-auto"
                >
                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h2 className="text-3xl font-manrope font-bold text-primary mb-4">
                        Mensagem Preparada!
                    </h2>
                    <p className="text-text-body/70 font-inter text-base leading-relaxed mb-8">
                        Seu cliente de e-mail foi aberto. Caso prefira, entre em contato diretamente pelo WhatsApp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/message/5P5LQTNQ7ZDGC1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#4B4B47] text-white font-manrope font-bold shadow-[0_10px_20px_rgba(75,75,71,0.2)] hover:bg-primary hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-all duration-400 hover:-translate-y-0.5 hover:scale-[1.03] overflow-hidden"
                        >
                            <span className="relative z-10">Falar pelo WhatsApp</span>
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%] z-0" />
                        </a>
                        <button
                            onClick={() => {
                                setSubmitted(false)
                                setFormState({ nome: "", assunto: "", email: "", mensagem: "" })
                            }}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary/30 text-primary font-manrope font-bold hover:bg-primary/5 transition-all duration-300"
                        >
                            Enviar Outra Mensagem
                        </button>
                    </div>
                </m.div>
            </LazyMotion>
        )
    }

    const inputClass =
        "bg-transparent border-b-2 border-primary/20 text-text-body font-inter text-base md:text-lg px-1 py-1 focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-text-body/25"

    return (
        <LazyMotion features={domAnimation}>
            <form onSubmit={handleSubmit}>
                <m.div
                    className="space-y-8 md:space-y-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Line 1 */}
                    <m.div
                        variants={lineVariants}
                        className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-text-body font-inter text-lg md:text-xl leading-relaxed"
                    >
                        <span>Olá, meu nome é</span>
                        <input
                            type="text"
                            name="nome"
                            value={formState.nome}
                            onChange={handleChange}
                            required
                            placeholder="Seu Nome"
                            className={`${inputClass} w-48 md:w-64`}
                        />
                        <span>e estou buscando</span>
                        <select
                            name="assunto"
                            value={formState.assunto}
                            onChange={handleChange}
                            required
                            className={`${inputClass} w-52 md:w-64 appearance-none cursor-pointer`}
                        >
                            <option value="" disabled>
                                Tipo de Atendimento
                            </option>
                            {subjects.map((subj) => (
                                <option key={subj} value={subj}>
                                    {subj}
                                </option>
                            ))}
                        </select>
                        <span>.</span>
                    </m.div>

                    {/* Line 2 */}
                    <m.div
                        variants={lineVariants}
                        className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-text-body font-inter text-lg md:text-xl leading-relaxed"
                    >
                        <span>Entre em contato comigo em</span>
                        <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            placeholder="seu@email.com"
                            className={`${inputClass} w-56 md:w-72`}
                        />
                        <span>!</span>
                    </m.div>

                    {/* Line 3 */}
                    <m.div
                        variants={lineVariants}
                        className="text-text-body font-inter text-lg md:text-xl leading-relaxed"
                    >
                        <span className="block mb-3">Gostaria de contar um pouco mais sobre o que preciso</span>
                        <textarea
                            name="mensagem"
                            value={formState.mensagem}
                            onChange={handleChange}
                            placeholder="Conte-me mais..."
                            rows={3}
                            className={`${inputClass} w-full border-b-2 resize-none`}
                        />
                    </m.div>

                    {/* Submit */}
                    <m.div variants={buttonVariants} className="flex justify-end pt-2">
                        <button
                            type="submit"
                            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#4B4B47] text-white font-manrope font-bold shadow-[0_10px_20px_rgba(75,75,71,0.2)] hover:bg-primary hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-all duration-400 hover:-translate-y-0.5 hover:scale-[1.03] overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                Enviar Mensagem
                            </span>
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[100%] z-0" />
                        </button>
                    </m.div>
                </m.div>
            </form>
        </LazyMotion>
    )
}
