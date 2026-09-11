import { useRef, useEffect } from 'react';
import deepikaPitchVideo from '@/assets/Deepika pitch video.mp4';

export function VideoHero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        videoElement.muted = false;
        videoElement.volume = 1;

        const handleFirstInteraction = () => {
            if (videoRef.current) {
                videoRef.current.muted = false;
            }
            cleanupInteractionListeners();
        };

        const cleanupInteractionListeners = () => {
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
        };

        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // If browser autoplay policy blocks unmuted audio before user interaction,
                // play muted initially and automatically unmute on user's first interaction
                if (videoElement) {
                    videoElement.muted = true;
                    videoElement.play().catch(() => {});
                }

                window.addEventListener('click', handleFirstInteraction, { once: true });
                window.addEventListener('touchstart', handleFirstInteraction, { once: true });
                window.addEventListener('keydown', handleFirstInteraction, { once: true });
            });
        }

        // Auto pause on scroll out of view and resume on scroll into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoElement.play().catch(() => {});
                    } else {
                        videoElement.pause();
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(videoElement);

        return () => {
            observer.disconnect();
            cleanupInteractionListeners();
        };
    }, []);

    return (
        <section className="relative w-full overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-[1320px] mx-auto">
                <div className="relative aspect-[16/9] w-full rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-gray-200/80 bg-black">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-contain bg-black"
                        autoPlay
                        loop
                        controls
                        playsInline
                        preload="auto"
                    >
                        <source src={deepikaPitchVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}



