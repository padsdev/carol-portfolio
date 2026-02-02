import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#4a4a43] text-[#ebeee3] font-[family-name:var(--font-lato)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[195px] py-8 md:py-0">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <div className="relative w-[216px] h-[98px] mb-2">
              <Image
                src="/instituto-versar-logo.png"
                alt="Instituto Versar"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[10px] leading-tight text-[#ebeee3] tracking-widest uppercase">
              INSTITUTO VERSAR SAUDE INTEGRAL
              <br />
              48.732.733/0001-47
            </p>
          </div>

          {/* Address */}
          <div className="text-center mb-8 md:mb-0 px-6">
            <h5 className="text-4xl font-normal text-[#ebeee3] mb-2 font-[family-name:var(--font-cormorant)]">
              Endereço:
            </h5>
            <p className="text-[#ebeee3] text-lg leading-relaxed max-w-[250px] mx-auto">
              Rua Eduardo Santos
              <br />
              Pereira, 1754 - Chácara
              <br />
              Cachoeira
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h5 className="text-4xl font-normal text-[#ebeee3] mb-2 font-[family-name:var(--font-cormorant)]">
              Contato
            </h5>
            <div className="space-y-1 text-lg flex flex-col items-center md:items-end">
              <Link
                href="mailto:psi.carolineassis@gmail.com"
                className="text-[#ebeee3] hover:text-white transition-colors"
              >
                psi.carolineassis@gmail.com
              </Link>
              <Link
                href="tel:+5567992256922"
                className="text-[#ebeee3] hover:text-white transition-colors"
              >
                +55 67 99225-6922
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar - Keeping as requested, strictly implies outside the 195px logical container or within main wrapper if implied */}
        <div className="border-t border-[#ebeee3]/20 py-4">
          <p className="text-center text-xs text-[#ebeee3]/60">
            © {new Date().getFullYear()} Caroline Assis - Psicóloga Clínica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
