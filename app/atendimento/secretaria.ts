// Contato oficial da Secretaria do Instituto Versar (usado na página de atendimento e no header)

export const SECRETARIA_PHONE = "556798369479"

export const SECRETARIA_MESSAGE = "Olá! Gostaria de falar com a secretaria do Instituto Versar."

export const secretariaWhatsApp = (text?: string) =>
    `https://api.whatsapp.com/send?phone=${SECRETARIA_PHONE}${text ? `&text=${encodeURIComponent(text)}` : ""}`
