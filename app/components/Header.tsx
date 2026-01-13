"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, Menu, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex flex-col">
                    <span className={`font-manrope font-extrabold text-xl tracking-wider ${isScrolled ? "text-primary" : "text-primary/90"}`}>
                        CAROLINE ASSIS
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-text-body/70 font-inter">
                        Psicóloga Clínica
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="group relative text-text-body hover:text-primary font-inter text-sm font-medium transition-colors">
                        Início
                        <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                    {["Sobre", "Serviços", "Contato"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace("ç", "c").replace("õ", "o")}`}
                            className="group relative text-text-body hover:text-primary font-inter text-sm font-medium transition-colors"
                        >
                            {item}
                            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </Link>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="hidden md:flex items-center gap-4 border-l border-gray-200 pl-8">
                    <a href="#" className="text-text-body/60 hover:text-primary transition-colors hover:scale-110 duration-200">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="text-text-body/60 hover:text-primary transition-colors hover:scale-110 duration-200">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-text-body/60 hover:text-primary transition-colors hover:scale-110 duration-200">
                        <MessageCircle size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text-body"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 md:hidden shadow-lg flex flex-col gap-4">
                    <Link
                        href="#about"
                        className="text-text-body font-inter text-sm font-medium p-2 hover:bg-gray-50 rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Sobre
                    </Link>
                    <Link
                        href="#services"
                        className="text-text-body font-inter text-sm font-medium p-2 hover:bg-gray-50 rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Serviços
                    </Link>
                    <Link
                        href="#contact"
                        className="text-text-body font-inter text-sm font-medium p-2 hover:bg-gray-50 rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contato
                    </Link>
                </div>
            )}
        </header>
    );
}
