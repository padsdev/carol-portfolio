import VideoCarousel from "./VideoCarousel"
import { RevealRoot, Reveal } from "./Reveal"

export default function VideosSection() {
    return (
        <RevealRoot as="section" className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <Reveal className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-manrope font-bold text-primary mb-3">
                            Entrevistas e Palestras
                        </h3>
                        <p className="text-text-body/60 font-inter text-sm">
                            Confira algumas das minhas participações em eventos e mídias
                        </p>
                    </Reveal>
                    <Reveal tone="panel">
                        <VideoCarousel />
                    </Reveal>
                </div>
            </div>
        </RevealRoot>
    )
}
