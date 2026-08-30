import Hackathon from "@/imports/Hackathon";
import { Navigation } from "@/app/components/Navigation";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/app/components/useScrollAnimation";
import { Footer } from "@/app/components/Footer";
import { CaseStudyNavArrows } from "@/app/components/CaseStudyNavArrows";

export function EdPlusHackathonCaseStudy() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" data-case-study-content>
      <Navigation />

      {/* Main Content */}
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

      {/* Footer Section */}
      <div className="lg:mt-[16700px] mt-0">
        <div className="flex justify-end pr-6 lg:pr-12 py-12">
          <CaseStudyNavArrows />
        </div>
        <Footer />
      </div>
    </div>
  );
}
