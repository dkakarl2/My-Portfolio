import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [stage, setStage] = useState<"reveal" | "fade" | "move">("reveal");
  const letters = ["d", "e", "e", "p", "i", "k", "a", "."];

  useEffect(() => {
    // Stage 1: Reveal letters (0.8s)
    const revealTimer = setTimeout(() => {
      setStage("fade");
    }, 1400);

    // Stage 2: Fade out non-logo letters
    const fadeTimer = setTimeout(() => {
      setStage("move");
    }, 2300);

    // Stage 3: Close after pause on "d."
    const completeTimer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(onComplete, 600);
    }, 3200);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient gradient orb */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(231,73,115,0.04) 0%, transparent 70%)",
            }}
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative">
            {/* Main word container */}
            <div className="flex">
              {letters.map((letter, index) => {
                const isLogo = index === 0 || index === 7; // "d" and "."
                
                // Show letters individually during reveal and fade stages
                if (stage !== "move") {
                  return (
                    <motion.span
                      key={index}
                      className="font-['Caveat_Brush'] text-[96px] text-[#747474] inline-block"
                      initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                      animate={{
                        opacity: stage === "fade" && !isLogo ? 0 : 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      transition={
                        stage === "reveal"
                          ? {
                              duration: 0.4,
                              delay: index * 0.08,
                              ease: [0.22, 1, 0.36, 1],
                            }
                          : {
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            }
                      }
                    >
                      {letter}
                    </motion.span>
                  );
                } else if (isLogo) {
                  // Hide individual logo letters during move stage
                  return (
                    <span
                      key={index}
                      className="font-['Caveat_Brush'] text-[96px] text-[#747474] inline-block opacity-0"
                    >
                      {letter}
                    </span>
                  );
                }
                return null;
              })}
            </div>

            {/* Logo "d." that stays in place */}
            {stage === "move" && (
              <motion.div
                className="font-['Caveat_Brush'] text-[96px] text-[#747474] absolute top-0 left-0"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                d.
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}