import aboutVideo from '@/assets/About video placeholder.mp4';

export function VideoHero() {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="relative aspect-video w-full">
                    {/* Video element */}
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        controls
                        playsInline
                        preload="metadata"
                    >
                        <source src={aboutVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
