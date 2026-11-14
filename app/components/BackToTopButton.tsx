"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronUp } from "lucide-react"

const SHOW_AFTER_PX = 50

function readScrollY() {
    return window.scrollY || document.documentElement.scrollTop || 0
}

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setVisible(readScrollY() > SHOW_AFTER_PX)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [pathname])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div
            className={`fixed bottom-6 right-6 z-40 transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-[opacity,visibility] motion-reduce:duration-200 motion-reduce:translate-y-0 motion-reduce:scale-100 ${
                visible
                    ? "visible opacity-100 translate-y-0 scale-100"
                    : "invisible pointer-events-none opacity-0 translate-y-2 scale-95"
            }`}
            inert={!visible}
            aria-hidden={!visible}
        >
            <button
                type="button"
                onClick={scrollToTop}
                tabIndex={visible ? 0 : -1}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg shadow-primary/30 backdrop-blur-sm transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-primary [@media(hover:hover)_and_(pointer:fine)]:hover:scale-105"
                aria-label="Voltar ao topo"
            >
                <ChevronUp className="h-5 w-5" />
            </button>
        </div>
    )
}
