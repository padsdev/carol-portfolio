"use client"

import { useRef, useState, useCallback } from "react"
import { LazyMotion, domAnimation, m, useScroll, useTransform, useSpring, type MotionValue, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const VIDEOS = [
    {
        id: "1",
        title: "Palestra para OAB/MS",
        thumbnail: "https://img.youtube.com/vi/40tlIkekFBE/hqdefault.jpg",
        videoId: "40tlIkekFBE",
    },
    {
        id: "2",
        title: "Ciclo de Debates sobre Saúde e Temas Emergentes em Psicologia",
        thumbnail: "https://img.youtube.com/vi/HmUBnFW7iYI/hqdefault.jpg",
        videoId: "HmUBnFW7iYI",
    },
    {
        id: "3",
        title: "Programa Neuro e Você",
        thumbnail: "https://img.youtube.com/vi/8SA5q6El-bU/hqdefault.jpg",
        videoId: "8SA5q6El-bU",
    },
    {
        id: "4",
        title: "Entrevista programa Saúde e Algo+",
        thumbnail: "https://img.youtube.com/vi/fjeF-Y0ogzY/hqdefault.jpg",
        videoId: "fjeF-Y0ogzY",
    },
]

function VideoCard({
    video,
    index,
    scrollProgress,
    onPlay,
}: {
    video: typeof VIDEOS[0]
    index: number
    scrollProgress: MotionValue<number>
    onPlay: (videoId: string) => void
}) {
    const position = useTransform(scrollProgress, (pos) => {
        const currentParams = pos * (VIDEOS.length - 1)
        return currentParams - index
    })

    const scale = useTransform(position, [-1, 0, 1], [0.85, 1.1, 0.85])
    const opacity = useTransform(position, [-1, 0, 1], [0.5, 1, 0.5])
    const zIndex = useTransform(position, (pos) => (Math.abs(pos) < 0.5 ? 10 : 1))

    const scaleSpring = useSpring(scale, { stiffness: 200, damping: 20 })
    const opacitySpring = useSpring(opacity, { stiffness: 200, damping: 20 })

    const handlePlay = useCallback(() => {
        onPlay(video.videoId)
    }, [onPlay, video.videoId])

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onPlay(video.videoId)
        }
    }, [onPlay, video.videoId])

    return (
        <m.div
            style={{
                scale: scaleSpring,
                opacity: opacitySpring,
                zIndex,
            }}
            className="flex-shrink-0 w-[70vw] md:w-[45vw] max-w-[700px] aspect-video relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`Assistir: ${video.title}`}
            onClick={handlePlay}
            onKeyDown={handleKeyDown}
        >
            <div className="block w-full h-full relative group">
                <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 70vw, 45vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                        <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="text-white text-base md:text-xl font-manrope font-medium tracking-wide">
                        {video.title}
                    </h3>
                </div>
            </div>
        </m.div>
    )
}

export default function VideoCarousel() {
    const targetRef = useRef<HTMLDivElement>(null)
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"])

    const handleCloseModal = useCallback(() => {
        setSelectedVideo(null)
    }, [])

    const handleOverlayKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
            setSelectedVideo(null)
        }
    }, [])

    const selectedVideoTitle = selectedVideo
        ? VIDEOS.find(v => v.videoId === selectedVideo)?.title ?? "Vídeo"
        : "Vídeo"

    return (
        <LazyMotion features={domAnimation}>
            <section ref={targetRef} className="h-[300vh] bg-background relative">
                <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl text-center mb-4 md:mb-12 font-manrope font-bold text-primary relative z-20 px-4">
                        Entrevistas e Palestras
                    </h2>

                    <m.div
                        style={{ x }}
                        className="flex items-center w-max gap-4 md:gap-8 px-4"
                    >
                        {VIDEOS.map((video, idx) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                index={idx}
                                scrollProgress={scrollYProgress}
                                onPlay={setSelectedVideo}
                            />
                        ))}
                    </m.div>

                    <p className="text-text-body/60 text-sm mt-8 animate-bounce relative z-20 font-inter">
                        Role para ver mais
                    </p>
                </div>

                <AnimatePresence>
                    {selectedVideo && (
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                            role="button"
                            tabIndex={0}
                            aria-label="Fechar vídeo"
                            onClick={handleCloseModal}
                            onKeyDown={handleOverlayKeyDown}
                        >
                            <div
                                className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
                                role="presentation"
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
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </section>
        </LazyMotion>
    )
}
