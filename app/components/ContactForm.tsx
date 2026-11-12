import TriageForm from "../atendimento/TriageForm"
import styles from "../atendimento/atendimento.module.css"

const CLINIC_EMAIL = "psi.carolineassis@gmail.com"

export default function ContactForm() {
    return (
        <div className="text-left max-w-xl mx-auto">
            {/* .page holds Triagem CSS variables; padding/bg belong to Atendimento only */}
            <div className={styles.page} style={{ paddingTop: 0, background: "transparent" }}>
                <TriageForm />
            </div>
            <p className="mt-8 text-center text-sm text-text-body/70 font-inter">
                Prefere e-mail?{" "}
                <a
                    href={`mailto:${CLINIC_EMAIL}`}
                    className="text-primary font-manrope font-semibold hover:underline"
                >
                    {CLINIC_EMAIL}
                </a>
            </p>
        </div>
    )
}
