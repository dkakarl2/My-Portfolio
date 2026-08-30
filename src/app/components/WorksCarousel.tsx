import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectCard } from "./ProjectCard";

interface ProjectItem {
  title: string;
  description: string;
  pills: { label: string; value?: string }[];
  company: string;
  timeline: string;
  duration: string;
  images: any;
  folderColor: string;
  reverse?: boolean;
  staticImage?: string;
  hoverImage?: string;
  hoverComponent?: React.ReactNode;
  caseStudyLink?: string;
}

interface WorksCarouselProps {
  projects: ProjectItem[];
}

export function WorksCarousel({ projects }: WorksCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll with delay (5 seconds per slide)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, projects.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <div
      className="relative w-full py-4 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Navigation Indicator Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-[#e5e5e5] shadow-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
        aria-label="Previous Project"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Navigation Indicator Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-[#e5e5e5] shadow-lg flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
        aria-label="Next Project"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Content Area */}
      <div className="relative min-h-[480px] sm:min-h-[500px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.25 },
              scale: { duration: 0.25 }
            }}
            className="w-full"
          >
            <ProjectCard {...projects[currentIndex]} reverse={false} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Indicators & Step Counter */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <span className="font-['Inter'] font-semibold text-[13px] text-[#888] tracking-wider">
          0{currentIndex + 1} / 0{projects.length}
        </span>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-black"
                  : "w-2.5 bg-[#e0e0e0] hover:bg-[#bbb]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
