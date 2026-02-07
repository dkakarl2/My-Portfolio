import Hackathon from "@/imports/Hackathon";
import { Navigation } from "@/app/components/Navigation";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/app/components/useScrollAnimation";
import { Footer } from "@/app/components/Footer";
import { HackathonNextProjects } from "@/app/components/HackathonNextProjects";

export function EdPlusHackathonCaseStudy() {
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
          <Hackathon />
        </motion.div>
      </motion.main>

      {/* Footer - Wrapped to preserve layout spacing */}
      <div className="lg:mt-[16700px] mt-0">
        <HackathonNextProjects />
        <Footer />
      </div>
    </div>
  );
}
