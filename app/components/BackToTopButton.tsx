"use client"

import { ChevronUp } from "lucide-react"

export default function BackToTopButton() {
    const scrollToTop = () => {
        const container = document.querySelector(".scroll-snap-container")
        if (container) {
            container.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-40">
            <button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full bg-primary/90 text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                aria-label="Voltar ao topo"
            >
                <ChevronUp className="w-5 h-5" />
            </button>
        </div>
    )
}
