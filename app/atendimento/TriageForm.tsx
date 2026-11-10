"use client"

import type { FormEvent } from "react"
import styles from "./atendimento.module.css"
import { WhatsAppIcon } from "./icons"
import { secretariaWhatsApp } from "./secretaria"

const COUNTRIES = [
    { value: "Espanha (CET)", label: "Espanha" },
    { value: "Portugal (WET)", label: "Portugal" },
    { value: "Reino Unido (GMT/BST)", label: "Reino Unido (UK)" },
    { value: "Irlanda (GMT/IST)", label: "Irlanda" },
    { value: "Alemanha (CET)", label: "Alemanha" },
    { value: "Holanda (CET)", label: "Holanda" },
    { value: "França (CET)", label: "França" },
    { value: "Suíça (CET)", label: "Suíça" },
    { value: "Itália (CET)", label: "Itália" },
    { value: "Outro país na Europa", label: "Outro país na Europa" },
    { value: "Brasil", label: "Brasil" },
]

const TURNS = [
    { value: "Manhã (horário europeu)", label: "Manhã (horário europeu)" },
    { value: "Tarde (horário europeu)", label: "Tarde (horário europeu)" },
    { value: "Final de tarde / Noite", label: "Final de tarde / Noite (horário europeu)" },
    { value: "Sábados", label: "Sábados (conforme disponibilidade)" },
]

const REASONS = [
    { value: "Luto migratório e saudades", label: "Luto migratório & saudades" },
    { value: "Ansiedade e estresse no exterior", label: "Ansiedade & estresse" },
    { value: "Solidão e isolamento na Europa", label: "Solidão & isolamento" },
    { value: "Relacionamento / Casal", label: "Relacionamento / Casal" },
    { value: "Carreira e reinvenção profissional", label: "Carreira no exterior" },
    { value: "Autoconhecimento geral", label: "Autoconhecimento geral" },
]

// Formulário de triagem: monta a mensagem e abre o WhatsApp da secretaria
export default function TriageForm() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const field = (key: string) => String(data.get(key) ?? "").trim()

        const name = field("name")
        const country = field("country")
        const turn = field("turn")
        const notes = field("notes")
        const reason = field("reason")

        const text =
            `Olá, equipe da Secretaria do Instituto Versar! Meu nome é *${name}*.\n\n` +
            `📍 Estou morando em: *${country}*\n` +
            `💡 Principal motivo da busca: *${reason}*\n` +
            `⏰ Melhor turno: *${turn}*\n` +
            (notes ? `💬 Meu momento: "${notes}"\n\n` : "\n") +
            `Gostaria de falar com a secretaria para agendar uma consulta com a psicóloga Caroline Assis! 🌿`

        // same tab: window.open after preventDefault is often blocked on phones
        window.location.href = secretariaWhatsApp(text)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="triage-name">
                    Como você gostaria de ser chamado(a)?
                </label>
                <input
                    type="text"
                    id="triage-name"
                    name="name"
                    className={styles.formControl}
                    placeholder="Seu nome ou apelido"
                    required
                />
            </div>

            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="triage-country">
                        Em qual país você mora?
                    </label>
                    <select id="triage-country" name="country" className={styles.formControl} required defaultValue="">
                        <option value="" disabled>
                            Selecione seu país...
                        </option>
                        {COUNTRIES.map((country) => (
                            <option key={country.value} value={country.value}>
                                {country.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="triage-turn">
                        Melhor turno para as sessões:
                    </label>
                    <select id="triage-turn" name="turn" className={styles.formControl} required defaultValue="">
                        <option value="" disabled>
                            Escolha o período...
                        </option>
                        {TURNS.map((turn) => (
                            <option key={turn.value} value={turn.value}>
                                {turn.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <fieldset className={`${styles.formGroup} ${styles.fieldset}`}>
                <legend className={styles.formLabel}>Principal motivo da busca neste momento:</legend>
                <div className={styles.chipsWrap}>
                    {REASONS.map((reason) => (
                        <label key={reason.value} className={styles.chipChoice}>
                            <input type="radio" name="reason" value={reason.value} required />
                            <span>{reason.label}</span>
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="triage-notes">
                    Quer adiantar algo sobre o que tem vivido? (Opcional — vai para a secretaria, não para a Caroline)
                </label>
                <textarea
                    id="triage-notes"
                    name="notes"
                    className={styles.formControl}
                    rows={3}
                    placeholder="Escreva brevemente há quanto tempo está fora ou o que tem sido mais desafiador..."
                />
            </div>

            <button type="submit" className={styles.btnSubmitWpp}>
                <WhatsAppIcon size={22} />
                Falar com a Secretaria no WhatsApp
            </button>
        </form>
    )
}
