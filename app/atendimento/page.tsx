import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"
import { Calendar, ChevronDown } from "lucide-react"

import styles from "./atendimento.module.css"
import TriageForm from "./TriageForm"
import { GoogleLogo, WhatsAppIcon } from "./icons"
import { SECRETARIA_MESSAGE, secretariaWhatsApp } from "./secretaria"

export const metadata: Metadata = {
    title: "Caroline Assis | Psicoterapia Online para Brasileiros no Exterior",
    description:
        "Psicóloga Caroline Assis - CRP 14/083109. Psicoterapia online para brasileiros na Europa e exterior. Agende sua primeira consulta pelo WhatsApp.",
}

const AGENDA_URL = "https://calendar.app.google/Ur74T3Fvcc3ZoMTaA"
const GOOGLE_REVIEWS_URL = "https://share.google/xM1OYrgiITmmKEG86"

const REVIEWS = [
    {
        name: "Karina Romão Calvo",
        date: "15 de jul. de 2024",
        text: "A melhor psicóloga que já tive! Tenho a oportunidade de ser acompanhada por ela há anos. Muito atenciosa e competente. Desenrola o novelo emaranhado dos meus pensamentos mais complexos.",
    },
    {
        name: "Ana Carolina Santos Vieira",
        date: "23 de fev. de 2025",
        text: "A Carol é sempre maravilhosa comigo! Uma excelente profissional, faço questão de indicar para todos que eu conheço. Ela é super empática com seus pacientes. Sou grata por ela sempre me ajudar do melhor jeito possível!",
    },
    {
        name: "Thaynara Espínola",
        date: "25 de abr. de 2023",
        text: "Se tivesse como colocar nota mil eu com certeza colocaria. É uma ótima profissional, querida, acolhedora... Sorte a minha ter você como psicóloga.",
    },
]

const THOUGHTS = [
    {
        title: "Não quero preocupar minha família no Brasil...",
        text: "Você finge que está tudo bem nas chamadas de vídeo de domingo para não causar angústia em quem ficou, mas desliga o celular sentindo um vazio enorme.",
    },
    {
        title: "Será que eu tomei a decisão certa?",
        text: "A dúvida constante que aparece nos dias difíceis: a sensação de que você abriu mão de coisas preciosas e a cobrança implacável de que tudo precisa dar certo.",
    },
    {
        title: "Não pertenço mais lá, nem aqui...",
        text: "No exterior você sempre é visto como estrangeiro(a). Quando volta ao Brasil para visitar, percebe que a vida continuou e você também já não se encaixa igual.",
    },
    {
        title: "Cansa tentar explicar sentimentos em outra língua",
        text: "Explicar nuances de saudade, família e angústia em inglês ou no idioma local é exaustivo. Metade da sessão se perde traduzindo a nossa cultura.",
    },
]

const BENEFITS = [
    {
        title: "Especialização & Rigor",
        text: "Especialista em TCC, Mestranda em Psicologia Geral Sanitária e Colaboradora do Ambulatório dos Transtornos do Impulso (USP).",
    },
    {
        title: "+6 Anos de Clínica Online",
        text: "Mais de 500 pacientes brasileiros acolhidos em diversos países.",
    },
    {
        title: "Sem Barreiras Culturais",
        text: "Você fala na sua língua materna, com seu sotaque e seus sentimentos reais.",
    },
    {
        title: "Praticidade & Foco no Presente",
        text: "Estratégias para você gerenciar a ansiedade e construir estabilidade fora.",
    },
]

const STEPS = [
    {
        title: "Envie sua Mensagem",
        text: "Preencha a triagem rápida abaixo de 1 minuto ou clique no botão para me chamar diretamente no WhatsApp.",
    },
    {
        title: "Alinhamos o Horário",
        text: "Eu te apresento os horários livres no seu fuso horário (Lisboa, Londres, Berlim, Dublin, Madrid, etc.).",
    },
    {
        title: "Confirmação Simples",
        text: "Você garante a vaga com o acerto da 1ª sessão via Revolut, Wise ou Pix, travando seu horário na agenda.",
    },
    {
        title: "Sua Primeira Sessão",
        text: "No dia marcado, nos encontramos no Google Meet (50 min) no conforto da sua casa para acolher o seu momento.",
    },
]

const FAQ: { question: string; answer: ReactNode }[] = [
    {
        question: "Como fica a diferença de fuso horário?",
        answer: "Minha base física é em Barcelona, na Europa. Por isso, quando conversarmos no WhatsApp, todos os horários apresentados a você já estarão calculados no fuso exato do seu país (horário de Lisboa, Londres, Berlim, Dublin, etc.). Você não precisará fazer contas de conversão.",
    },
    {
        question: "Como realizo o pagamento morando no exterior?",
        answer: (
            <>
                Você pode pagar diretamente em Euro (€) ou Libra (£) via <strong>Revolut</strong> ou{" "}
                <strong>Wise</strong> (transferência local entre contas europeias, sem taxas de IOF internacional de
                cartão). Se você ainda mantém conta bancária no Brasil, também aceito transferência instantânea via{" "}
                <strong>Pix</strong> em reais.
            </>
        ),
    },
    {
        question: "Qual a duração da sessão e onde nos encontramos?",
        answer: "Cada sessão tem duração de 50 minutos e é realizada por videochamada privada e criptografada pelo Google Meet. Você só precisa de uma conexão de internet estável, um cômodo privativo e fones de ouvido para sua total privacidade.",
    },
    {
        question: "E se eu precisar desmarcar ou tiver um imprevisto?",
        answer: "Imprevistos acontecem. Remarcações são feitas sem qualquer custo com aviso prévio de até 24 horas de antecedência, permitindo reorganizar a agenda e acolher outros pacientes.",
    },
]

const external = { target: "_blank", rel: "noopener noreferrer" } as const

export default function AtendimentoPage() {
    return (
        <main className={styles.page}>
            {/* Barra superior ética */}
            <div className={styles.topNotice}>
                <span>
                    🔒 Psicoterapia Online para Brasileiros no Exterior | <strong>CRP 14/083109</strong> (Cadastro
                    e-Psi) | Base em Barcelona, Espanha
                </span>
            </div>

            {/* HERO */}
            <section className={styles.hero} id="inicio">
                <div className={`${styles.container} ${styles.heroGrid}`}>
                    <div>
                        <a
                            href={GOOGLE_REVIEWS_URL}
                            {...external}
                            className={styles.heroProofBadge}
                            title="Ver as avaliações no Google"
                        >
                            <GoogleLogo size={18} />
                            <span className={styles.starsGold}>★★★★★</span>
                            <span className={styles.proofText}>5.0 no Google (Avaliações Reais)</span>
                        </a>

                        <h1 className={styles.heroTitle}>
                            Viver fora tem belezas que ninguém avisa, e{" "}
                            <span className={styles.highlight}>pesos que poucos compreendem</span>.
                        </h1>

                        <p className={styles.heroSubtitle}>
                            Você não precisa carregar a sobrecarga da imigração, a saudade e a ansiedade sozinho(a). Um
                            espaço acolhedor na sua <strong>língua materna</strong>, com quem vive na Europa e entende
                            exatamente o que você está sentindo.
                        </p>

                        {/* Caixa de conversão imediata */}
                        <div className={styles.heroCtaBox}>
                            <p className={styles.urgency}>
                                <span className={styles.pulseDot} />
                                Horários compatíveis com o seu fuso europeu.
                            </p>

                            <div className={styles.heroButtons}>
                                <a href={AGENDA_URL} {...external} className={`${styles.btn} ${styles.btnGold} ${styles.btnGrow}`}>
                                    <Calendar size={18} strokeWidth={2.2} aria-hidden="true" />
                                    Escolher Horário na Agenda&nbsp;↗
                                </a>
                                <a
                                    href={secretariaWhatsApp(
                                        "Olá! Gostaria de falar com a secretaria do Instituto Versar sobre o atendimento da psicóloga Caroline Assis."
                                    )}
                                    {...external}
                                    className={`${styles.btn} ${styles.btnWpp}`}
                                >
                                    <WhatsAppIcon size={20} />
                                    Falar com a Secretaria
                                </a>
                            </div>

                            <div className={styles.microReassurance}>
                                <span>✓ Resposta rápida e humanizada</span>
                                <span>✓ Sem burocracia</span>
                                <span>✓ Fuso europeu (CET/GMT)</span>
                                <span>✓ Pagamento em EUR, GBP ou Pix</span>
                            </div>
                        </div>
                    </div>

                    {/* Foto de Caroline */}
                    <div>
                        <div className={styles.heroPhotoCard}>
                            <div className={styles.photoFrame}>
                                <span className={styles.floatingCityTag}>📍 Barcelona, Espanha</span>
                                <Image
                                    src="/carol-looking-left.png"
                                    alt="Psicóloga Caroline Assis - CRP 14/083109"
                                    fill
                                    priority
                                    sizes="(max-width: 900px) 100vw, 440px"
                                />
                            </div>
                            <h2 className={styles.photoAuthorTitle}>Caroline Assis</h2>
                            <span className={styles.photoAuthorCrp}>Psicóloga Clínica · CRP 14/083109</span>
                            <p className={styles.photoQuoteBox}>
                                “Viver fora não exige que você dê conta de tudo sozinho(a). A psicoterapia é o lugar
                                para respirar e reorganizar a sua vida.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEPOIMENTOS DO GOOGLE */}
            <section className={styles.sectionGoogleReviews} id="depoimentos">
                <div className={styles.container}>
                    <div className={styles.googleHeader}>
                        <div>
                            <span className={styles.eyebrowPill}>Avaliações no Google</span>
                            <h2 className={styles.reviewsTitle}>O que dizem os pacientes que já deram esse passo</h2>
                            <p className={styles.reviewsSubtitle}>Depoimentos públicos deixados por pacientes no Google.</p>
                        </div>

                        <a
                            href={GOOGLE_REVIEWS_URL}
                            {...external}
                            className={styles.googleScoreBox}
                            title="Ver as avaliações no Google"
                        >
                            <GoogleLogo size={32} />
                            <div>
                                <div className={styles.googleScoreNum}>5.0 ★★★★★</div>
                                <span className={styles.scoreCaption}>Classificação Máxima no Google</span>
                            </div>
                        </a>
                    </div>

                    <div className={styles.reviewsGrid}>
                        {REVIEWS.map((review) => (
                            <div key={review.name} className={styles.reviewCard}>
                                <div className={styles.reviewTop}>
                                    <div className={styles.reviewerInfo}>
                                        <div className={styles.reviewerAvatar} aria-hidden="true">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className={styles.reviewerName}>{review.name}</h4>
                                            <span className={styles.reviewDate}>{review.date}</span>
                                        </div>
                                    </div>
                                    <div className={styles.googleBadge}>Google</div>
                                </div>

                                <div className={styles.reviewStars} aria-label="5 estrelas">
                                    ★★★★★
                                </div>

                                <p className={styles.reviewBody}>“{review.text}”</p>

                                <div className={styles.reviewSource}>
                                    <GoogleLogo size={14} />
                                    <span>Avaliação pública no Google</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IDENTIFICAÇÃO: COISAS QUE A GENTE SÓ SENTE QUANDO MORA LONGE */}
            <section className={styles.sectionPains}>
                <div className={styles.container}>
                    <div className={styles.talkHeader}>
                        <span className={styles.eyebrowPill}>Você já se pegou pensando nisso?</span>
                        <h2 className={styles.talkTitle}>Coisas que a gente só sente quando mora longe de casa</h2>
                        <p className={styles.talkLead}>
                            Às vezes, a rotina parece funcionar para todo mundo, menos por dentro da sua cabeça.
                        </p>
                    </div>

                    <div className={styles.dialogueGrid}>
                        {THOUGHTS.map((thought) => (
                            <div key={thought.title} className={styles.thoughtCard}>
                                <h4>“{thought.title}”</h4>
                                <p>{thought.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Banner de transição */}
                    <div className={styles.interCtaBanner}>
                        <div>
                            <h4>Identificou seu momento em algum desses pontos?</h4>
                            <p>
                                Esse é o momento exato de buscar apoio. A psicoterapia é o lugar onde você não precisa
                                fingir força.
                            </p>
                        </div>
                        <a href={AGENDA_URL} {...external} className={`${styles.btn} ${styles.btnGold}`}>
                            Ver Horários na Agenda Online&nbsp;↗
                        </a>
                    </div>
                </div>
            </section>

            {/* QUEM SOU EU */}
            <section className={styles.sectionAbout} id="quem-sou-eu">
                <div className={`${styles.container} ${styles.aboutWrap}`}>
                    <div className={styles.aboutPortraitBox}>
                        <Image
                            src="/caroline-assis-portrait.png"
                            alt="Caroline Assis Psicóloga Clínica"
                            fill
                            sizes="(max-width: 900px) 100vw, 460px"
                        />
                        <div className={styles.aboutBadgeBar}>
                            <p>
                                📍 <strong>Base em Barcelona, Espanha</strong> · Vivendo na pele os desafios da
                                adaptação na Europa.
                            </p>
                        </div>
                    </div>

                    <div className={styles.aboutContent}>
                        <span className={styles.eyebrowPill}>Muito prazer, sou a Carol</span>
                        <h2>Estou aqui para caminhar ao seu lado no exterior</h2>

                        <p className={styles.aboutLead}>
                            Minha história na psicologia começou em <strong>Campo Grande - MS</strong>, mas hoje meu
                            consultório e minha vida estão sediados em <strong>Barcelona, na Espanha</strong>.
                        </p>

                        <p className={styles.aboutText}>
                            Como imigrante na Europa, eu conheço a realidade além das fotos bonitas: a saudade da
                            família, a burocracia, o impacto do inverno e a constante reconstrução de identidade. Uno
                            essa vivência pessoal à <strong>Terapia Cognitivo-Comportamental (TCC)</strong> para te
                            entregar ferramentas práticas, claras e aplicáveis à sua rotina.
                        </p>

                        <div className={styles.benefitsGrid}>
                            {BENEFITS.map((benefit) => (
                                <div key={benefit.title} className={styles.benefitItem}>
                                    <strong>{benefit.title}</strong>
                                    <span>{benefit.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.aboutCtas}>
                            <a href={AGENDA_URL} {...external} className={`${styles.btn} ${styles.btnGold}`}>
                                <Calendar size={18} strokeWidth={2.2} aria-hidden="true" />
                                Agendar na Agenda Online&nbsp;↗
                            </a>
                            <a
                                href={secretariaWhatsApp(
                                    "Olá! Gostaria de falar com a secretaria do Instituto Versar sobre as sessões com a psicóloga Caroline."
                                )}
                                {...external}
                                className={`${styles.btn} ${styles.btnOutline}`}
                            >
                                Falar com a Secretaria
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMO FUNCIONA */}
            <section className={styles.sectionHow} id="como-funciona">
                <div className={styles.container}>
                    <div className={styles.talkHeader}>
                        <span className={styles.eyebrowPill}>Sem burocracia</span>
                        <h2 className={styles.talkTitle}>Como começamos a nossa caminhada juntos</h2>
                        <p className={styles.talkLead}>
                            Você não precisa preencher formulários intermináveis ou esperar semanas por uma resposta.
                        </p>
                    </div>

                    <div className={styles.howTimeline}>
                        {STEPS.map((step, index) => (
                            <div key={step.title} className={styles.stepBox}>
                                <div className={styles.stepNum}>{index + 1}</div>
                                <h4>{step.title}</h4>
                                <p>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRIAGEM & PRÉ-AGENDAMENTO */}
            <section className={styles.sectionTriagem} id="triagem">
                <div className={styles.container}>
                    <div className={styles.triagemCard}>
                        <h3>Dê o primeiro passo para o seu cuidado</h3>
                        <p className={styles.triagemSub}>
                            Escolha a forma mais confortável para você agendar sua primeira conversa:
                        </p>

                        {/* Destaque: agendamento direto pela agenda online */}
                        <div className={styles.fastTrack}>
                            <div className={styles.fastTrackPill}>
                                <span>⚡ Caminho Mais Rápido</span>
                            </div>
                            <h4 className={styles.fastTrackTitle}>Escolher dia e horário na Agenda Online Oficial</h4>
                            <p className={styles.fastTrackText}>
                                Minha agenda Google calcula automaticamente o fuso horário da sua cidade (Londres,
                                Berlim, Lisboa, etc.) e já gera o link seguro do Google Meet na hora.
                            </p>
                            <a
                                href={AGENDA_URL}
                                {...external}
                                className={`${styles.btn} ${styles.btnGold} ${styles.fastTrackBtn}`}
                            >
                                <Calendar size={20} strokeWidth={2.2} aria-hidden="true" />
                                Abrir Agenda Online Oficial&nbsp;↗
                            </a>
                        </div>

                        <div className={styles.divider}>
                            <div className={styles.dividerLine} />
                            <span className={styles.dividerText}>Ou se preferir, converse antes no WhatsApp</span>
                            <div className={styles.dividerLine} />
                        </div>

                        <TriageForm />

                        <div className={styles.privacyNotice}>
                            <span>🔒 Sigilo profissional conforme o Código de Ética</span>
                            <span>💳 Pagamento fácil: Revolut, Wise ou Pix</span>
                            <span>⚡ Sem filas de espera</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PERGUNTAS FREQUENTES */}
            <section className={styles.sectionFaq} id="faq">
                <div className={styles.container}>
                    <div className={styles.talkHeader}>
                        <span className={styles.eyebrowPill}>Dúvidas Frequentes</span>
                        <h2 className={styles.talkTitle}>Tudo o que você precisa saber antes de agendar</h2>
                    </div>

                    <div className={styles.faqList}>
                        {FAQ.map((item) => (
                            // name igual em todos: o navegador mantém só um aberto por vez
                            <details key={item.question} name="faq" className={styles.faqCard}>
                                <summary className={styles.faqQuestion}>
                                    <span>{item.question}</span>
                                    <ChevronDown className={styles.faqArrow} strokeWidth={2.5} aria-hidden="true" />
                                </summary>
                                <div className={styles.faqAnswer}>{item.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className={styles.siteFooter}>
                <div className={styles.container}>
                    <div className={styles.footerGrid}>
                        <div className={styles.footerCol}>
                            <h5>CAROLINE ASSIS</h5>
                            <p className={styles.footerCrp}>Psicóloga Clínica · CRP 14/083109</p>
                            <p>
                                INSTITUTO VERSAR SAÚDE INTEGRAL
                                <br />
                                CNPJ: 48.732.733/0001-47
                                <br />
                                Atendimento 100% Online
                            </p>
                        </div>

                        <div className={styles.footerCol}>
                            <h5>Atendimento Especializado</h5>
                            <p>
                                Atendimento psicológico online para brasileiros residentes na Europa e em todo o mundo.
                                <br />
                                Base em Barcelona, Espanha.
                            </p>
                            <p className={styles.footerNotice}>
                                <strong>Aviso Ético:</strong> A psicoterapia online não é indicada para emergências
                                psiquiátricas imediatas. Na Europa, disque <strong>112</strong> ou procure o hospital
                                mais próximo.
                            </p>
                        </div>

                        <div className={styles.footerCol}>
                            <h5>Secretaria & Contato</h5>
                            <p>
                                E-mail: <a href="mailto:psi.carolineassis@gmail.com">psi.carolineassis@gmail.com</a>
                                <br />
                                WhatsApp Secretaria:{" "}
                                <a href={secretariaWhatsApp()} {...external}>
                                    +55 67 9836-9479
                                </a>
                            </p>
                            <p className={styles.footerSpaced}>
                                Instagram:{" "}
                                <a href="https://www.instagram.com/psi.carolineassis/" {...external}>
                                    @psi.carolineassis
                                </a>{" "}
                                ·{" "}
                                <a href="https://www.instagram.com/versarinstituto/" {...external}>
                                    @versarinstituto
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className={styles.footerBottom}>
                        <span>© {new Date().getFullYear()} Caroline Assis - Psicóloga Clínica. Todos os direitos reservados.</span>
                        <span>
                            Site Oficial:{" "}
                            <a href="https://psicarolineassis.com/" {...external}>
                                psicarolineassis.com
                            </a>
                        </span>
                    </div>
                </div>
            </footer>

            {/* BOTÃO FLUTUANTE DO WHATSAPP */}
            <a
                href={secretariaWhatsApp(SECRETARIA_MESSAGE)}
                {...external}
                className={styles.floatingWpp}
                aria-label="Falar com a Secretaria do Instituto Versar"
            >
                <span className={styles.floatingWppBadge} />
                <WhatsAppIcon size={22} />
                <span className={styles.floatingWppLabel}>Secretaria Versar</span>
            </a>
        </main>
    )
}
