"use client";

import { Link, useTransitionRouter } from "next-view-transitions";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

// Custom SVG icons from Simple Icons (replacing deprecated Lucide brand icons)
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
);

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const LattesIcon = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor">
        <path d="M 97.871854,434.73261 C 51.534463,339.78442 23.965602,282.44369 23.965602,281.02029 c 0,-2.32214 2.831558,-1.99974 30.672084,3.45957 48.965204,9.61389 75.126384,12.32631 118.735104,12.34258 57.69707,0.0159 104.6807,-9.1222 141.18473,-27.4842 19.31194,-9.71476 30.92555,-18.32755 40.43708,-29.99337 11.716,-14.37824 15.47977,-24.28004 15.61512,-40.94646 0.11867,-15.85237 -2.01801,-24.21167 -11.19035,-43.60874 -3.62892,-7.66433 -6.8168,-16.46265 -7.12098,-19.54964 -0.47493,-4.96814 -0.0684,-5.68084 3.59445,-6.10361 8.00292,-0.94846 47.50732,37.40224 62.05491,60.24069 25.07592,39.38574 27.11161,81.99337 5.88408,123.1953 -13.03903,25.31314 -27.44972,42.82712 -51.57723,62.73362 -40.09844,33.06211 -86.70754,56.08608 -151.06833,74.63514 C 186.61557,459.91141 130.71496,472 119.20225,472 c -2.44075,0 -7.02006,-8.00296 -21.295953,-37.28315 l -0.03402,0.0151 z M 110.77601,281.61191 C 65.760136,275.77998 27.985273,270.70947 26.81537,270.33687 24.815625,269.6926 17.660677,245.82107 13.624773,226.39004 12.607902,221.4726 11.11559,208.45131 10.30202,197.43174 6.6716589,148.26132 17.370799,114.26648 46.041165,83.697237 94.583571,31.98518 198.51713,25.694031 315.77765,67.369458 c 20.58274,7.324215 28.75504,12.410983 24.975,15.580668 -2.79708,2.339846 -21.75315,2.305883 -54.50916,-0.102387 -51.20464,-3.763759 -90.18335,3.357226 -110.27491,20.176211 -30.58742,25.60158 -25.92345,81.72365 13.53071,162.68196 4.27316,8.76586 8.57881,17.34466 9.56318,19.09094 2.28966,4.01773 0.62803,7.74899 -3.3572,7.56196 -1.69755,-0.0813 -39.91486,-4.91203 -84.92926,-10.74592 z m 151.01614,-44.04726 c -35.92814,-6.45997 -68.22691,-28.7388 -78.65437,-54.22127 -5.00209,-12.24165 -4.76437,-28.2131 0.57585,-37.77483 4.83279,-8.64723 17.3107,-18.64993 28.48481,-22.83843 18.59924,-6.96791 51.17019,-4.18853 74.90688,6.40975 22.53229,10.05487 42.50672,27.73816 49.93183,44.18457 9.52925,21.10841 1.59321,44.65955 -18.82072,55.90059 -13.5307,7.44285 -39.82676,11.32572 -56.44249,8.34109 h 0.0181 z" />
    </svg>
);

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const pathname = usePathname();
    const router = useTransitionRouter();

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
        { label: "Sobre", href: "/sobre" },
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
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href === "/" && pathname === "/") ||
                                (item.href !== "/" && pathname.startsWith(item.href));
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="group relative text-text-body hover:text-primary font-inter text-sm font-medium transition-colors"
                                >
                                    {item.label}
                                    <span className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300 origin-left`}></span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Social Icons */}
                    <div className="hidden md:flex items-center gap-4 border-l border-gray-200 pl-8">
                        <a href="https://www.instagram.com/psi.carolineassis/" target="_blank" rel="noopener noreferrer" className="text-text-body/60 hover:text-primary transition-colors hover:scale-110 duration-200" title="Instagram">
                            <InstagramIcon size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/carolineassisb/" target="_blank" rel="noopener noreferrer" className="text-text-body/60 hover:text-primary transition-colors hover:scale-110 duration-200" title="LinkedIn">
                            <LinkedInIcon size={20} />
                        </a>
                        <a href="https://wa.me/message/5P5LQTNQ7ZDGC1" target="_blank" rel="noopener noreferrer" className="text-text-body/60 hover:text-primary transition-colors hover:scale-110 duration-200" title="WhatsApp">
                            <MessageCircle size={20} />
                        </a>
                        <a href="http://lattes.cnpq.br/4434362741632614" target="_blank" rel="noopener noreferrer" className="text-text-body/60 hover:text-primary transition-colors hover:scale-110 duration-200" title="Currículo Lattes">
                            <LattesIcon size={20} />
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
                            <a href="https://www.instagram.com/psi.carolineassis/" target="_blank" rel="noopener noreferrer" className="text-text-body/60 hover:text-primary transition-colors" title="Instagram">
                                <InstagramIcon size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/carolineassisb/" target="_blank" rel="noopener noreferrer" className="text-text-body/60 hover:text-primary transition-colors" title="LinkedIn">
                                <LinkedInIcon size={24} />
                            </a>
                            <a href="https://wa.me/message/5P5LQTNQ7ZDGC1" target="_blank" rel="noopener noreferrer" className="text-text-body/60 hover:text-primary transition-colors" title="WhatsApp">
                                <MessageCircle size={24} />
                            </a>
                            <a href="http://lattes.cnpq.br/4434362741632614" target="_blank" rel="noopener noreferrer" className="text-text-body/60 hover:text-primary transition-colors" title="Currículo Lattes">
                                <LattesIcon size={24} />
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
