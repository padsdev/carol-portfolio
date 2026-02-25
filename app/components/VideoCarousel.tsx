"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react"

const VIDEOS = [
    {
        id: "1",
        title: "Palestra para OAB/MS",
        description: "Saúde mental no ambiente jurídico",
        thumbnail: "https://img.youtube.com/vi/40tlIkekFBE/hqdefault.jpg",
        videoId: "40tlIkekFBE",
    },
    {
        id: "2",
        title: "Ciclo de Debates sobre Saúde e Temas Emergentes em Psicologia",
        description: "Discussão sobre temas contemporâneos",
        thumbnail: "https://img.youtube.com/vi/HmUBnFW7iYI/hqdefault.jpg",
        videoId: "HmUBnFW7iYI",
    },
    {
        id: "3",
        title: "Programa Neuro e Você",
        description: "Neurociência e psicologia aplicada",
        thumbnail: "https://img.youtube.com/vi/8SA5q6El-bU/hqdefault.jpg",
        videoId: "8SA5q6El-bU",
    },
    {
        id: "4",
        title: "Entrevista programa Saúde e Algo+",
        description: "Saúde mental e bem-estar",
        thumbnail: "https://img.youtube.com/vi/fjeF-Y0ogzY/hqdefault.jpg",
        videoId: "fjeF-Y0ogzY",
    },
]

const AUTO_SCROLL_INTERVAL = 4000

export default function VideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
    const [isPaused, setIsPaused] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const total = VIDEOS.length

    // Auto-scroll: circular — wraps from last to first
    useEffect(() => {
        if (isPaused || selectedVideo) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
            return
        }

        intervalRef.current = setInterval(() => {
            setDirection(1)
            setCurrentIndex((prev) => (prev + 1) % total)
        }, AUTO_SCROLL_INTERVAL)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [isPaused, selectedVideo, total])

    const goTo = useCallback((idx: number) => {
        setDirection(idx > currentIndex ? 1 : -1)
        setCurrentIndex(idx)
    }, [currentIndex])

    const handlePrev = useCallback(() => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + total) % total)
    }, [total])

    const handleNext = useCallback(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % total)
    }, [total])

    const handleCloseModal = useCallback(() => {
        setSelectedVideo(null)
    }, [])

    const handleOverlayKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === "Escape") setSelectedVideo(null)
    }, [])

    const selectedVideoTitle = selectedVideo
        ? VIDEOS.find((v) => v.videoId === selectedVideo)?.title ?? "Vídeo"
        : "Vídeo"

    const video = VIDEOS[currentIndex]

    return (
        <LazyMotion features={domAnimation}>
            <div
                className="relative max-w-4xl mx-auto"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Single video display */}
                <div className="relative overflow-hidden rounded-3xl">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <m.div
                            key={currentIndex}
                            custom={direction}
                            initial={{ x: direction > 0 ? 400 : -400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: direction < 0 ? 400 : -400, opacity: 0 }}
                            transition={{
                                x: { type: "spring", stiffness: 250, damping: 30 },
                                opacity: { duration: 0.25 },
                            }}
                            className="group relative aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-black"
                            role="button"
                            tabIndex={0}
                            aria-label={`Assistir: ${video.title}`}
                            onClick={() => setSelectedVideo(video.videoId)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault()
                                    setSelectedVideo(video.videoId)
                                }
                            }}
                        >
                            <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 800px"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all duration-300 border border-white/30">
                                    <Play className="w-9 h-9 text-white fill-white ml-1" />
                                </div>
                            </div>

                            {/* Title */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                                <p className="text-white/60 text-xs font-inter uppercase tracking-wider mb-1">
                                    {video.description}
                                </p>
                                <h4 className="text-white text-lg md:text-xl font-manrope font-semibold leading-snug">
                                    {video.title}
                                </h4>
                            </div>

                            {/* Progress bar for auto-scroll */}
                            {!isPaused && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                                    <m.div
                                        className="h-full bg-primary"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: AUTO_SCROLL_INTERVAL / 1000, ease: "linear" }}
                                        key={`progress-${currentIndex}`}
                                    />
                                </div>
                            )}
                        </m.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-6 mt-8">
                    {/* Prev Button */}
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full border-2 border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
                        aria-label="Vídeo anterior"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {VIDEOS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`rounded-full transition-all duration-300 ${i === currentIndex
                                    ? "w-8 h-3 bg-primary"
                                    : i < currentIndex
                                        ? "w-3 h-3 bg-primary/50"
                                        : "w-3 h-3 bg-primary/20 hover:bg-primary/40"
                                    }`}
                                aria-label={`Ir para vídeo ${i + 1}`}
                                aria-current={i === currentIndex ? "true" : undefined}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full border-2 border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
                        aria-label="Próximo vídeo"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Reproduzindo: ${selectedVideoTitle}`}
                        onClick={handleCloseModal}
                        onKeyDown={handleOverlayKeyDown}
                    >
                        <m.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                                aria-label="Fechar vídeo"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                                title={selectedVideoTitle}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
        </LazyMotion>
    )
}
