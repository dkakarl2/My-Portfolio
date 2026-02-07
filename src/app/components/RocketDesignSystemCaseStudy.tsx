import RdsEdPlus from "@/imports/RdsEdPlus";
import { Navigation } from "@/app/components/Navigation";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/app/components/useScrollAnimation";
import { Footer } from "@/app/components/Footer";
import { RdsNextProjects } from "@/app/components/RdsNextProjects";

export function RocketDesignSystemCaseStudy() {
  // Apply scroll animations to all text elements
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" data-case-study-content>
      <Navigation />

      {/* Top Project Navigation */}
      
      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <RdsEdPlus />
        </motion.div>
      </motion.main>

      {/* Footer - Wrapped to preserve layout spacing */}
      <div className="lg:mt-[6800px]">
        <RdsNextProjects />
        <Footer />
      </div>
    </div>
  );
}
