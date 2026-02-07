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
    }, 1300); // 0.8s animation + 0.5s pause

    // Stage 2: Fade out non-logo letters (0.6s) and pause
    const fadeTimer = setTimeout(() => {
      setStage("move");
    }, 2200); // 1300 + 900 (600ms fade + 300ms buffer)

    // Stage 3: Close after pause on "d."
    const completeTimer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(onComplete, 500);
    }, 3000); // Pause on "d." then fade out

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
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: stage === "fade" && !isLogo ? 0 : 1,
                        y: 0,
                      }}
                      transition={
                        stage === "reveal"
                          ? {
                              duration: 0.3,
                              delay: index * 0.1,
                              ease: "easeOut",
                            }
                          : {
                              duration: 0.6,
                              ease: "easeInOut",
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
              <div className="font-['Caveat_Brush'] text-[96px] text-[#747474] absolute top-0 left-0">
                d.
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}