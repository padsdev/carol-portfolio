"use client"

import { useState, useCallback } from "react"
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

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95,
    }),
}

export default function ImprovedVideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

    const getVisibleCount = () => {
        if (typeof window === "undefined") return 3
        if (window.innerWidth < 640) return 1
        if (window.innerWidth < 1024) return 2
        return 3
    }

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection)
        setCurrentIndex((prev) => {
            const visibleCount = getVisibleCount()
            const maxIndex = Math.max(0, VIDEOS.length - visibleCount)
            const next = prev + newDirection
            if (next < 0) return maxIndex
            if (next > maxIndex) return 0
            return next
        })
    }, [])

    const goToIndex = useCallback((index: number) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }, [currentIndex])

    const handleCloseModal = useCallback(() => {
        setSelectedVideo(null)
    }, [])

    const handleOverlayKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            setSelectedVideo(null)
        }
    }, [])

    const selectedVideoTitle = selectedVideo
        ? VIDEOS.find((v) => v.videoId === selectedVideo)?.title ?? "Vídeo"
        : "Vídeo"

    const visibleCount = typeof window !== "undefined" ? getVisibleCount() : 3
    const totalDots = Math.max(1, VIDEOS.length - visibleCount + 1)

    return (
        <LazyMotion features={domAnimation}>
            <div className="relative">
                {/* Carousel Container */}
                <div className="relative overflow-hidden rounded-3xl">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <m.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 },
                            }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {VIDEOS.slice(currentIndex, currentIndex + 3).map((video) => (
                                <div
                                    key={video.id}
                                    className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-black"
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
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="video-play-btn w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/80 transition-all duration-300 border border-white/30">
                                            <Play className="w-7 h-7 text-white fill-white ml-1" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                                        <p className="text-white/60 text-xs font-inter uppercase tracking-wider mb-1">
                                            {video.description}
                                        </p>
                                        <h4 className="text-white text-sm md:text-base font-manrope font-semibold leading-snug">
                                            {video.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </m.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-6 mt-8">
                    {/* Prev Button */}
                    <button
                        onClick={() => paginate(-1)}
                        className="carousel-nav-btn w-12 h-12 rounded-full border-2 border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
                        aria-label="Vídeo anterior"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalDots }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToIndex(i)}
                                className={`carousel-dot rounded-full transition-all duration-300 ${i === currentIndex
                                        ? "w-8 h-3 bg-primary"
                                        : "w-3 h-3 bg-primary/25 hover:bg-primary/50"
                                    }`}
                                aria-label={`Ir para slide ${i + 1}`}
                                aria-current={i === currentIndex ? "true" : undefined}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => paginate(1)}
                        className="carousel-nav-btn w-12 h-12 rounded-full border-2 border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
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
