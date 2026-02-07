import svgPaths from "@/imports/svg-t4zg9il96f";
import imgImage109 from "figma:asset/45189c12896bd7ac8633c8f1229265acd4e2d9e6.png";
import imgImage106 from "figma:asset/c1366e9e4fa99b835ea3664cf295be514c999b29.png";
import imgImage107 from "figma:asset/db0c048f566a005b6ae99b7d8e878dbb5a7d4c8e.png";
import imgImage108 from "figma:asset/707c97d14934918ad3a4eea553555f8ad34e3acf.png";
import imgImage54 from "figma:asset/ba81c99bc9fa2a7a974274dd5278fe652f58f7ca.png";
import { motion } from "motion/react";
import { useInView } from "react";
import { useRef } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Scroll animation wrapper component
function ScrollAnimationWrapper({ 
  children, 
  variant = fadeInUp,
  className = ""
}: { 
  children: React.ReactNode;
  variant?: any;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { ScrollAnimationWrapper, fadeInUp, fadeIn, staggerContainer };
