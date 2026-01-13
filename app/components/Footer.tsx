import { Instagram, Linkedin, MessageCircle, MapPin, Mail, Phone, Lock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#4B4B47] text-white pt-16 pb-8" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-manrope font-extrabold text-2xl tracking-wider text-primary">
                                CAROLINE ASSIS
                            </h4>
                            <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-inter mt-1">
                                Psicóloga Clínica
                            </p>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/80">
                            <Lock size={12} />
                            <span>CRP: 14/083109</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed font-inter">
                            Atendimento especializado e acolhimento ético para transformar sua jornada emocional.
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h5 className="font-manrope font-bold text-lg text-primary">Contato</h5>
                        <div className="space-y-4">
                            <a href="mailto:psi.carolineassis@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors text-sm font-inter">
                                <Mail size={18} />
                                psi.carolineassis@gmail.com
                            </a>
                            <a href="tel:+5567992256922" className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors text-sm font-inter">
                                <Phone size={18} />
                                +55 67 99225-6922
                            </a>
                            <div className="flex items-start gap-3 text-white/80 text-sm font-inter">
                                <MapPin size={18} className="shrink-0 mt-1" />
                                <span>
                                    Rua Eduardo Santos Pereira, 1754<br />
                                    Chacara Cachoeira, Campo Grande - MS
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Socials Column */}
                    <div className="space-y-6">
                        <h5 className="font-manrope font-bold text-lg text-primary">Redes Sociais</h5>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Legal/Links Column */}
                    <div className="space-y-6">
                        <h5 className="font-manrope font-bold text-lg text-primary">Menu</h5>
                        <ul className="space-y-2 text-sm font-inter text-white/60">
                            <li><a href="#about" className="hover:text-white transition-colors">Sobre Mim</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
                            <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 font-inter">
                    <p>© 2024 Caroline Assis. Todos os direitos reservados.</p>
                    <p>INSTITUTO VERSAR SAUDE INTEGRAL</p>
                </div>
            </div>
        </footer>
    );
}
