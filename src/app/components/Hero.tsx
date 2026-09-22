import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import assets
import videoDoodleHomepage from '@/assets/doodle hompage.mp4';
import imgBingoIcon from '@/assets/Bingo.svg';
import imgSparkBingo from '@/assets/Spark bingo.svg';
import imgSparkDoodle from '@/assets/Spark doodle.svg';
import imgGreenScribble from '@/assets/Green scribble.svg';
import imgBlueScribble from '@/assets/Blue scribble.svg';
import imgPinkScribble from '@/assets/Pink scribble.svg';
import imgHealthcare from '@/assets/Healthcare.svg';
import imgEdufund from '@/assets/Edufund.svg';
import imgFintech from '@/assets/Fintech.svg';
import imgAI from '@/assets/AI.svg';


function AnimatedCounter({ from, to, duration, isReady, suffix = "" }: { from: number, to: number, duration: number, isReady: boolean, suffix?: string }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isReady) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(from + (to - from) * easeOut));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isReady]);

  return <span>{count}{suffix}</span>;
}

export function Hero() {
  const [isReady, setIsReady] = useState(() => !!window.hasIntroFinished);
  const [isBingoHovered, setIsBingoHovered] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const bingoPhrases = [
    "you can talk to him",
    "ask him about me",
    "ask him about her experience",
    "ask him about her projects",
    "he can show you around",
    "he speaks multiple languages",
    "he's still learning"
  ];

  useEffect(() => {
    if (!isReady) return;
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % bingoPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isReady]);

  const [expIndex, setExpIndex] = useState(0);

  const experiences = [
    { text: "healthcare", icon: imgHealthcare },
    { text: "edtech", icon: imgEdufund },
    { text: "fintech", icon: imgFintech },
    { text: "and agentic experience", icon: imgAI }
  ];

  useEffect(() => {
    if (!isReady) return;
    const interval = setInterval(() => {
      setExpIndex((prev) => (prev + 1) % experiences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isReady]);


  useEffect(() => {
    // Sync with intro animation if needed
    const handleIntroFinished = () => setIsReady(true);
    window.addEventListener('INTRO_FINISHED', handleIntroFinished);
    
    // Safe fallback in case event is missed
    const timer = setTimeout(() => setIsReady(true), 4000); 

    return () => {
      window.removeEventListener('INTRO_FINISHED', handleIntroFinished);
      clearTimeout(timer);
    };
  }, []);

  const handleBingoClick = () => {
    window.dispatchEvent(new Event('START_BINGO'));
  };

  return (
    <section className="relative w-full max-w-[1000px] mx-auto px-6 pt-[120px] pb-[80px] lg:pt-[160px] lg:pb-[100px] flex flex-col items-center justify-center min-h-[70vh]">
      
      <motion.div 
        initial={window.hasIntroFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center w-full"
      >
        
        {/* Title Line 1 with Doodle */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-2 md:gap-4 mb-2 md:-mb-2">
          <h1 className="text-[32px] md:text-[48px] font-bold text-black tracking-tight leading-tight font-['Inter']">
            Hello, I’m Deepika
          </h1>
          
          {/* Animated Doodle */}
          <motion.div 
            className="relative w-[110px] h-[110px] shrink-0"
          >
            <video src={videoDoodleHomepage} autoPlay loop muted playsInline className="w-full h-full object-contain pointer-events-none" />
          </motion.div>
        </div>

        {/* Title Line 2 */}
        <h2 className="text-[32px] md:text-[48px] font-bold text-black tracking-tight leading-tight font-['Inter'] mb-8">
          UX & Design Systems Designer
        </h2>

        {/* Description Paragraph */}
        <div className="max-w-[1000px] text-center text-[#555555] text-[30px] font-medium leading-[1.3] mb-12 px-4 md:px-0 font-['Inter'] flex flex-col items-center">
          <div>A 0→1 product designer designing scalable</div>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center mt-2 px-2">
            <span>experiences across </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={expIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center ml-2"
              >
                {experiences[expIndex].text}
                <motion.img 
                  src={experiences[expIndex].icon} 
                  alt="" 
                  className="w-12 h-12 md:w-[56px] md:h-[56px] object-contain ml-2"
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mb-16 font-['Inter'] font-bold text-sm md:text-base">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#8BC34A]">
              <AnimatedCounter from={0} to={250} duration={2} isReady={isReady} suffix="K+ families reached" />
            </span>
            <img src={imgGreenScribble} alt="" className="h-[6px] w-[180px] object-cover object-center" />
          </div>
          
          <span className="text-[#00BCD4] hidden md:block">•</span>
          
          {/* Stat 2 */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#00BCD4]">
              <AnimatedCounter from={0} to={20} duration={2} isReady={isReady} suffix="+ components built" />
            </span>
            <img src={imgBlueScribble} alt="" className="h-[6px] w-[160px] object-cover object-center" />
          </div>

          <span className="text-[#E91E63] hidden md:block">•</span>
          
          {/* Stat 3 */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[#E91E63]">
              <AnimatedCounter from={0} to={15} duration={2} isReady={isReady} suffix="+ ASU Online pages supported" />
            </span>
            <img src={imgPinkScribble} alt="" className="h-[6px] w-[220px] object-cover object-center" />
          </div>
        </div>

        {/* Bingo Button */}
        <motion.button
          onClick={handleBingoClick}
          onMouseEnter={() => setIsBingoHovered(true)}
          onMouseLeave={() => setIsBingoHovered(false)}
          initial={window.hasIntroFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-transparent cursor-pointer transition-all "
        >
          {/* Animated Bingo Icon */}
          <motion.div 
            className="relative w-[68.04px] h-[59.94px]"
            animate={{ rotate: isBingoHovered ? [-10, 10, -10] : [-5, 5, -5] }}
            transition={{ duration: isBingoHovered ? 1.5 : 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={imgBingoIcon} alt="Bingo" className="w-full h-full object-contain" />
            <img 
              src={imgSparkBingo} 
              alt="Sparks" 
              className="absolute -top-[5px] -left-[12px] w-[22px] h-[22px] object-contain pointer-events-none" 
            />
          </motion.div>
          
          {/* Text */}
          <div className="font-['Inter'] flex items-center text-left">
            <span className="font-bold text-[#333333] text-[15px] whitespace-nowrap">Meet Bingo</span>
            <span className="text-[#999999] font-medium mx-2">-</span>
            <div className="relative overflow-hidden h-[20px] w-[220px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isReady ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 text-[#999999] font-medium text-[15px] whitespace-nowrap"
                >
                  {bingoPhrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.button>
        
      </motion.div>
    </section>
  );
}
