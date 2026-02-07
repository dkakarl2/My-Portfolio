import ChemobuddyMayoclinic from "@/imports/ChemobuddyMayoclinic-88-613";
import { Navigation } from "@/app/components/Navigation";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/app/components/useScrollAnimation";
import { MayoClinicNextProjects } from "@/app/components/MayoClinicNextProjects";
import { Footer } from "@/app/components/Footer";

export function MayoClinicCaseStudy() {
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
          <ChemobuddyMayoclinic />
        </motion.div>
      </motion.main>

      {/* New Footer - Wrapped to preserve layout spacing */}
      <div className="lg:mt-[27000px]">
        <MayoClinicNextProjects />

        <Footer />
      </div>
    </div>
  );
}
