import ChemobuddyMayoclinic, { Frame8, Frame134, Frame9, Frame10, Frame11, Frame12, Frame144, Frame13, Frame14, Frame129, Frame143, Frame18, Frame150, Frame16, Frame17, Frame161, Frame164, Frame167, Frame172 } from "@/imports/ChemobuddyMayoclinic-88-613";
import { Navigation } from "@/app/components/Navigation";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/app/components/useScrollAnimation";
import { CaseStudyNavArrows } from "@/app/components/CaseStudyNavArrows";
import { Footer } from "@/app/components/Footer";
import { RecruiterCaseStudyHeader } from "@/app/components/RecruiterCaseStudyHeader";
import { useMode } from "@/app/contexts/ModeContext";
import { useState, useRef, useEffect } from "react";

// Import key images for recruiter view
import videoChemoBuddyCover from '@/assets/Chemobuddy cover.mov';
import videoChemobuddy from '@/assets/Chemobuddy video.mp4';
import imgHeroReplace from 'figma:asset/f620a291096457bf1aa42dee938f437a6005b47b.png';

// Import all 47 iPhone Mockups
import imgIMockupIPhone13 from "figma:asset/1965a5d424e01dd455dd1ec4300e7f9ea38ae7c4.png";
import imgIMockupIPhone14 from "figma:asset/2893ead9a89805d8a10906af120dd562888c00dc.png";
import imgIMockupIPhone15 from "figma:asset/7b8165c300fea4d58bde0e973fe080399464fec7.png";
import imgIMockupIPhone16 from "figma:asset/8d758829d4d2888ac82f34ff16202e0757030178.png";
import imgIMockupIPhone17 from "figma:asset/b1ee3d4faffebc7f8331658bfae67c7304407fbe.png";
import imgIMockupIPhone18 from "figma:asset/26494fa0ad2d5db98def977291bca874483bdb9d.png";
import imgIMockupIPhone19 from "figma:asset/332043ce212addfd6db05a2fac75d0ca75c96ca4.png";
import imgIMockupIPhone20 from "figma:asset/48819c699861360fb882a29927c13a6079c59f7f.png";
import imgIMockupIPhone21 from "figma:asset/e045c91f83dd01e4f6afd27c4ed7d24f54209883.png";
import imgIMockupIPhone22 from "figma:asset/e41a3d8f36936369ad1a2b20485b4293a8cfcd0c.png";
import imgIMockupIPhone23 from "figma:asset/fea715c0b8803a7997e17059bd2093a2e7e532c7.png";
import imgIMockupIPhone24 from "figma:asset/e582d0de16f635686a2813b02d49168594803bf7.png";
import imgIMockupIPhone25 from "figma:asset/ede1a01c6123711df493813af09916b61092e348.png";
import imgIMockupIPhone26 from "figma:asset/d3770cbbc295c8124a2c451668da4bb3b57a7b1d.png";
import imgIMockupIPhone27 from "figma:asset/d28efcf4c0dbe7c33855c27434a0b56f47959829.png";
import imgIMockupIPhone28 from "figma:asset/dc89f8aa46c7241fcfc515c6f6f5b51df5d24540.png";
import imgIMockupIPhone29 from "figma:asset/e8f547267a338c57ccd733ecc5b899eb8498abc0.png";
import imgIMockupIPhone30 from "figma:asset/27a29cadbe049aed443e2e760d2e4c7a3a6792d8.png";
import imgIMockupIPhone31 from "figma:asset/2805b102e7a6d73a651e470403d2f596caa2c028.png";
import imgIMockupIPhone32 from "figma:asset/ecc5d2b70bd329a7faeacbb76e9e40f20d7f0ace.png";
import imgIMockupIPhone33 from "figma:asset/7438c8f99265001ec8f0c62e304b503bd6e713d3.png";
import imgIMockupIPhone34 from "figma:asset/28634281244487352d0f9fb9e6caae0d25c0bee0.png";
import imgIMockupIPhone35 from "figma:asset/0c3e4a7e4e3e62c15d92f8bb977c6d3e8cb91d56.png";
import imgIMockupIPhone36 from "figma:asset/f23597591c10ee18ee484c123e7fee97f6ab485d.png";
import imgIMockupIPhone37 from "figma:asset/9b13f016ed86270a4f8d81049854ddb153bbc10b.png";
import imgIMockupIPhone38 from "figma:asset/a91869fa385c15360d365cf7cc84211bb2981f99.png";
import imgIMockupIPhone39 from "figma:asset/ae5b73036f1fa50c1d91e355a41da006cace74a1.png";
import imgIMockupIPhone40 from "figma:asset/c4deb71f94a66280c24242c16b551416117c3e7a.png";
import imgIMockupIPhone41 from "figma:asset/612f3e18d93f5f750a41541b9a71187b8babc86c.png";
import imgIMockupIPhone42 from "figma:asset/438388f365a5cafdd4c6fca5d71f01e2572f798d.png";
import imgIMockupIPhone43 from "figma:asset/e6b9ac105d38f6488ffcc7fb700bc60a0021410c.png";
import imgIMockupIPhone44 from "figma:asset/ef6668c6d4383f93841a5b1a70820a0b73d27bbf.png";
import imgIMockupIPhone45 from "figma:asset/51d1ad920c87f7b2075388559630218b12ca0110.png";
import imgIMockupIPhone46 from "figma:asset/d6a872d2fa8387a0783f0ba0514f4d757521ec97.png";
import imgIMockupIPhone47 from "figma:asset/221dfc4420b5d1c0b4b50e08683299891bc68ccb.png";
import imgIMockupIPhone48 from "figma:asset/f651b042e80398f4d930e939579af2b635028bec.png";
import imgIMockupIPhone49 from "figma:asset/6d043ad4c7885fee453ea162cbd382796ac29755.png";
import imgIMockupIPhone50 from "figma:asset/d4817338e7cb4f1eb431368a94b4da6c2aca88d4.png";
import imgIMockupIPhone51 from "figma:asset/612be195921a722989a8906f9bb56508e2d0bf02.png";
import imgIMockupIPhone52 from "figma:asset/bae65a21941de44aef87b7495eb2ebd064f179c4.png";
import imgIMockupIPhone53 from "figma:asset/6310992336a0453c1c13c3837a4216f66e602867.png";
import imgIMockupIPhone54 from "figma:asset/a918e771581d38b10e7b56dd74cae8383b069a3e.png";
import imgIMockupIPhone55 from "figma:asset/4727dbaad980766861432725dcc2333a0aaa097e.png";
import imgIMockupIPhone56 from "figma:asset/907584ce69275c94dc38c691b9af330b0b37b38f.png";
import imgIMockupIPhone57 from "figma:asset/2d2f6f515e91970c4f4503390133ee579ae0e26a.png";
import imgIMockupIPhone58 from "figma:asset/e7ce3c203ae692748c12aaa177d525653f4432c5.png";
import imgIMockupIPhone59 from "figma:asset/98b48c1dc9c3d6023a301c842dea59e59b59a0a4.png";

const allScreens = [
  { img: imgIMockupIPhone13, name: "Onboarding Welcome" },
  { img: imgIMockupIPhone14, name: "Login Portal" },
  { img: imgIMockupIPhone15, name: "Verify Identity" },
  { img: imgIMockupIPhone16, name: "Select Treatment" },
  { img: imgIMockupIPhone17, name: "Welcome Dashboard" },
  { img: imgIMockupIPhone18, name: "Profile Setup" },
  { img: imgIMockupIPhone19, name: "Medication Setup" },
  { img: imgIMockupIPhone20, name: "Symptom Logging" },
  { img: imgIMockupIPhone21, name: "Calendar Schedule" },
  { img: imgIMockupIPhone22, name: "Care Circle" },
  { img: imgIMockupIPhone23, name: "Treatment Home" },
  { img: imgIMockupIPhone24, name: "Track Symptoms" },
  { img: imgIMockupIPhone25, name: "Daily Mood Checker" },
  { img: imgIMockupIPhone26, name: "Quick Logger" },
  { img: imgIMockupIPhone27, name: "Symptom Selection" },
  { img: imgIMockupIPhone28, name: "Severity Slider" },
  { img: imgIMockupIPhone29, name: "Trigger Factors" },
  { img: imgIMockupIPhone30, name: "Medication Tracker" },
  { img: imgIMockupIPhone31, name: "Add Medication" },
  { img: imgIMockupIPhone32, name: "Medication Schedule" },
  { img: imgIMockupIPhone33, name: "Dose Confirmation" },
  { img: imgIMockupIPhone34, name: "Side Effect Insights" },
  { img: imgIMockupIPhone35, name: "Trends Dashboard" },
  { img: imgIMockupIPhone36, name: "Symptom History" },
  { img: imgIMockupIPhone37, name: "PDF Report Builder" },
  { img: imgIMockupIPhone38, name: "Share Report" },
  { img: imgIMockupIPhone39, name: "Care Circle Feed" },
  { img: imgIMockupIPhone40, name: "Add Caregiver" },
  { img: imgIMockupIPhone41, name: "Caregiver Chat" },
  { img: imgIMockupIPhone42, name: "Mayo Clinic News" },
  { img: imgIMockupIPhone43, name: "Article Details" },
  { img: imgIMockupIPhone44, name: "Support Hotlines" },
  { img: imgIMockupIPhone45, name: "Emergency Contacts" },
  { img: imgIMockupIPhone46, name: "Reminders Settings" },
  { img: imgIMockupIPhone47, name: "Notification Preferences" },
  { img: imgIMockupIPhone48, name: "Accessibility Tools" },
  { img: imgIMockupIPhone49, name: "Contrast Settings" },
  { img: imgIMockupIPhone50, name: "Text Resizer" },
  { img: imgIMockupIPhone51, name: "Offline Sync Indicator" },
  { img: imgIMockupIPhone52, name: "Sync Settings" },
  { img: imgIMockupIPhone53, name: "Account Details" },
  { img: imgIMockupIPhone54, name: "Security & PIN" },
  { img: imgIMockupIPhone55, name: "Help & FAQ" },
  { img: imgIMockupIPhone56, name: "Report Bug" },
  { img: imgIMockupIPhone57, name: "Feedback Form" },
  { img: imgIMockupIPhone58, name: "Privacy Policy" },
  { img: imgIMockupIPhone59, name: "Terms of Service" }
];

function ChemobuddyVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex justify-center items-center my-8 shrink-0 overflow-hidden">
      <div className="w-[1440px] max-w-[100vw] shrink-0 bg-transparent overflow-hidden border-none outline-none shadow-none rounded-none">
        <video
          ref={videoRef}
          src={videoChemobuddy}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onTimeUpdate={() => {
            if (videoRef.current && videoRef.current.duration) {
              if (videoRef.current.currentTime >= videoRef.current.duration - 0.08) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(() => {});
              }
            }
          }}
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play().catch(() => {});
            }
          }}
          style={{ outline: "none", border: "none", boxShadow: "none" }}
          className="w-full h-auto object-cover pointer-events-none select-none border-none outline-none shadow-none block rounded-none"
        />
      </div>
    </div>
  );
}

export function MayoClinicCaseStudy() {
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
          <ChemobuddyMayoclinic />
        </motion.div>
      </motion.main>

      {/* Footer Section */}
      <div className="mt-16">
        <div className="flex justify-end pr-6 lg:pr-12 py-12">
          <CaseStudyNavArrows />
        </div>
        <Footer />
      </div>
    </div>
  );
}
