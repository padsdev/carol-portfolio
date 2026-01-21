"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleMenuToggle = () => {
        if (isMobileMenuOpen) {
            // Start closing animation
            setIsClosing(true);
            setTimeout(() => {
                setIsMobileMenuOpen(false);
                setIsClosing(false);
            }, 300);
        } else {
            setIsMobileMenuOpen(true);
        }
    };

    const handleMenuClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsMobileMenuOpen(false);
            setIsClosing(false);
        }, 300);
    };

    const menuItems = [
        { label: "Início", href: "/" },
        { label: "Sobre", href: "#sobre" },
        { label: "Serviços", href: "#servicos" },
        { label: "Contato", href: "#contato" },
    ];

    return (
        <>
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

                    {/* Animated Hamburger Button */}
                    <button
                        className={`md:hidden relative w-8 h-8 flex flex-col items-center justify-center text-text-body ${isMobileMenuOpen && !isClosing ? 'hamburger-active' : ''}`}
                        onClick={handleMenuToggle}
                        aria-label="Menu"
                    >
                        <span className="hamburger-bar"></span>
                        <span className="hamburger-bar"></span>
                        <span className="hamburger-bar"></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay & Panel */}
            {isMobileMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden ${isClosing ? 'overlay-exit' : 'overlay-enter'}`}
                        onClick={handleMenuClose}
                    />

                    {/* Menu Panel */}
                    <div
                        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-50 md:hidden shadow-2xl ${isClosing ? 'mobile-menu-exit' : 'mobile-menu-enter'}`}
                    >
                        {/* Close Button */}
                        <div className="flex justify-end p-6">
                            <button
                                className={`w-8 h-8 flex flex-col items-center justify-center text-text-body hamburger-active`}
                                onClick={handleMenuClose}
                                aria-label="Fechar menu"
                            >
                                <span className="hamburger-bar"></span>
                                <span className="hamburger-bar"></span>
                                <span className="hamburger-bar"></span>
                            </button>
                        </div>

                        {/* Menu Content */}
                        <nav className="flex flex-col px-8 pt-4">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`menu-item stagger-${index + 1} text-text-body font-manrope text-2xl font-semibold py-4 border-b border-gray-100 hover:text-primary transition-colors`}
                                    onClick={handleMenuClose}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Social Icons in Mobile Menu */}
                        <div className={`menu-item stagger-5 flex items-center gap-6 px-8 pt-10`}>
                            <a href="#" className="text-text-body/60 hover:text-primary transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-text-body/60 hover:text-primary transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="text-text-body/60 hover:text-primary transition-colors">
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
