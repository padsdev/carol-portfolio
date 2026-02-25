import VideoCarousel from "./VideoCarousel"

export default function VideosSection() {
    return (
        <section className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-manrope font-bold text-primary mb-3">
                            Entrevistas e Palestras
                        </h3>
                        <p className="text-text-body/60 font-inter text-sm">
                            Confira algumas das minhas participações em eventos e mídias
                        </p>
                    </div>
                    <VideoCarousel />
                </div>
            </div>
        </section>
    )
}
