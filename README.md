# 🧠 Caroline Assis — Psicóloga Clínica

Site institucional da psicóloga **Caroline Assis**, especializada em atendimento online a brasileiros no exterior. Construído com foco em performance, acessibilidade e uma experiência visual premium.

🔗 **Produção:** [https://padsdev.github.io/carol-portfolio/]

---

## ✨ Visão Geral

O site apresenta os serviços de psicoterapia individual e de casal, palestras, depoimentos de pacientes e um canal direto de contato via WhatsApp. O design utiliza scroll snap para uma navegação fluida em telas desktop, tons dourados e tipografia refinada para transmitir acolhimento e profissionalismo.

---

## 🛠️ Stack

| Camada        | Tecnologia                                                          |
| ------------- | ------------------------------------------------------------------- |
| Framework     | [Next.js 16](https://nextjs.org/) (App Router)                     |
| Linguagem     | TypeScript                                                          |
| UI / Estilo   | [Tailwind CSS 4](https://tailwindcss.com/) + CSS customizado       |
| Animações     | [Framer Motion](https://www.framer.com/motion/) · [GSAP](https://gsap.com/) |
| Tipografia    | [Manrope](https://fonts.google.com/specimen/Manrope) · [Inter](https://fonts.google.com/specimen/Inter) (via `next/font`) |
| Transições    | [next-view-transitions](https://github.com/shuding/next-view-transitions) |
| Ícones        | [Lucide React](https://lucide.dev/)                                 |
| Scroll suave  | [Lenis](https://lenis.darkroom.engineering/)                        |

---

## 📁 Estrutura do Projeto

```
app/
├── page.tsx                 # Home — Hero + Grid de Serviços
├── sobre/
│   └── page.tsx             # Sobre — Bio, Experiência, Depoimentos
├── servicos/
│   └── page.tsx             # Serviços — Terapia Individual, Casal, Palestras, Vídeos
├── contato/
│   └── page.tsx             # Contato — Formulário inline (mailto)
├── components/
│   ├── Header.tsx           # Navbar com menu mobile animado
│   ├── Footer.tsx           # Rodapé com links e créditos
│   ├── HeroSection.tsx      # Hero da home
│   ├── ServicesGrid.tsx     # Grid de serviços (home)
│   ├── ServicesHero.tsx     # Hero da página de serviços
│   ├── ServiceDetail.tsx    # Card detalhado de serviço (reutilizável)
│   ├── PalestrasSection.tsx # Seção de palestras e workshops
│   ├── VideosSection.tsx    # Wrapper do carrossel de vídeos
│   ├── VideoCarousel.tsx    # Carrossel de vídeos do YouTube
│   ├── SobreHero.tsx        # Hero da página sobre
│   ├── AcademicSection.tsx  # Experiência acadêmica
│   ├── WhyChooseMe.tsx      # Diferenciais
│   ├── SobreServices.tsx    # Serviços resumidos (sobre)
│   ├── SobreCTA.tsx         # CTA da página sobre
│   ├── TestimonialsSection.tsx # Depoimentos de pacientes
│   ├── ContactHero.tsx      # Hero do contato
│   ├── ContactForm.tsx      # Formulário de contato inline
│   └── BackToTopButton.tsx  # Botão voltar ao topo
├── globals.css              # Tema, scroll snap, animações
└── layout.tsx               # Layout raiz (fontes, header, ViewTransitions)
```

---

## 🎨 Design System

| Token              | Valor       | Uso                       |
| ------------------ | ----------- | ------------------------- |
| `--color-primary`  | `#D4AF37`   | Dourado — CTAs, headings  |
| `--color-secondary`| `#E1D6C0`   | Bege claro — acentos      |
| `--color-surface`  | `#FFFFFF`   | Cards e superfícies       |
| `--color-text-body`| `#4B4B47`   | Texto principal           |
| `--color-background`| `#F9F7F2`  | Fundo geral               |

**Fontes:** Manrope (headings) · Inter (body text)

---

## 📱 Responsividade

- **Desktop (≥ 768px):** Scroll snap (`y mandatory`) com seções full-viewport
- **Mobile (< 768px):** Scroll snap desativado, layout com scroll contínuo
- **Telas baixas (< 700px altura):** Snap desativado automaticamente
- **Menu mobile:** Hamburger animado → X com itens em stagger

---

## ♿ Acessibilidade

- `lang="pt-BR"` no `<html>`
- Hierarquia de headings respeitada (`h1` → `h2` → `h3`)
- `alt` em todas as imagens; imagens decorativas com `aria-hidden`
- `prefers-reduced-motion` desativa todas as animações
- Links externos com `rel="noopener noreferrer"`

---

## 📄 Licença

Projeto privado — todos os direitos reservados.
