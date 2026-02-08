import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause } from 'lucide-react';

// Import the video
import portfolioVideo from '@/assets/Portfolio video.mp4';

export function VideoHero() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showBlackScreen, setShowBlackScreen] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
            setShowBlackScreen(false);
        }
    };

    const handlePauseClick = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVideoClick = () => {
        if (isPlaying) {
            handlePauseClick();
        } else if (!showBlackScreen) {
            handlePlayClick();
        }
    };

    const handleMouseMove = () => {
        if (isPlaying) {
            setShowControls(true);
            // Clear existing timeout
            if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current);
            }
            // Hide controls after 2 seconds of no movement
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 2000);
        }
    };

    const handleVideoEnd = () => {
        // Show black screen fade when video ends
        setShowBlackScreen(true);
        setShowControls(false);
        // Reset after fade completes
        setTimeout(() => {
            setIsPlaying(false);
            setShowBlackScreen(false);
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
            }
        }, 1500);
    };

    return (
        <section className="relative w-full bg-black overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div
                    className="relative aspect-video w-full cursor-pointer"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setShowControls(false)}
                >
                    {/* Video element */}
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        onEnded={handleVideoEnd}
                        onClick={handleVideoClick}
                        playsInline
                        preload="metadata"
                    >
                        <source src={portfolioVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Play button overlay - shown when not playing */}
                    <AnimatePresence>
                        {!isPlaying && !showBlackScreen && (
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={handlePlayClick}
                            >
                                <motion.button
                                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group hover:bg-white/30 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Play className="w-10 h-10 lg:w-14 lg:h-14 text-white fill-white ml-2" />
                                </motion.button>
                                <p className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 font-['Caveat_Brush'] text-xl lg:text-2xl text-white/80">
                                    Click to play
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Pause button - shown when playing and mouse moves */}
                    <AnimatePresence>
                        {isPlaying && showControls && (
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.button
                                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-black/50 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-black/60 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePauseClick();
                                    }}
                                >
                                    <Pause className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-white" />
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Black screen fade at end */}
                    <AnimatePresence>
                        {showBlackScreen && (
                            <motion.div
                                className="absolute inset-0 bg-black"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
