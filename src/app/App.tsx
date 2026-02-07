import { IntroAnimation } from "@/app/components/IntroAnimation";
import { CustomCursor } from "@/app/components/CustomCursor";
import { CaseStudyNavigator } from "@/app/components/CaseStudyNavigator";
import { AboutPage } from "@/app/components/AboutPage";
import { HomePage } from "@/app/components/HomePage";
import { MayoClinicCaseStudy } from "@/app/components/MayoClinicCaseStudy";
import { RocketDesignSystemCaseStudy } from "@/app/components/RocketDesignSystemCaseStudy";
import { EdPlusHackathonCaseStudy } from "@/app/components/EdPlusHackathonCaseStudy";
import { EduFundCaseStudy } from "@/app/components/EduFundCaseStudy";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { ScrollToTopHandler } from "@/app/components/ScrollToTopHandler";
import { ContactPage } from "@/app/components/ContactPage";
import { AIAssistant } from "@/app/components/AIAssistant";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Import project images
import imgImage3 from "figma:asset/9b1d984b5a3331721ca8520d91e1dae8087d3753.png";
import imgImage5 from "figma:asset/913c7bdd0782127c6add2bf191da6da72c1d498a.png";
import imgImage2 from "figma:asset/e2a3f144890df13d498134c35c69a488c3384e95.png";
import imgImage23 from "figma:asset/fa0fa915ca52b7cc2b903914318e7d7aeda70798.png";
import imgImage22 from "figma:asset/9eeca02bc786feb3f52bfb28300731165d09f8ea.png";
import imgImage12 from "figma:asset/4f82695b46f6d2e8fc2518899c01206d5876a2e4.png";
import imgImage11 from "figma:asset/d349b829820164c6ffd8680038fb41c9c830b08e.png";
import imgFrame22 from "figma:asset/2096313866740ff08589de188acef2c08565190b.png";
import imgFrame1000006081 from "figma:asset/eafd58cd408b75d2c671a24115c9d94c6665d7c4.png";
import imgMayoClinicLogo from "figma:asset/6e4de7965720e764d62d472550ce59788110d82a.png";
import imgMayoClinicBg from "figma:asset/afe2fe1f42e31e77411b7caa6e9c409cb41fe7bd.png";
import imgMayoHover from "figma:asset/7cec038dc695b271cf7a02627140ad70f778973a.png";
// EduFund images
import imgEduFund9 from "figma:asset/7c952b9e250d5658aecbab616dc9e7bf5799e506.png";
import imgEduFund2 from "figma:asset/64184af0c9ebee18abab8494831f8cc713d0485b.png";

function AppContent() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Skip intro if navigating to case study or about page
    if (location.pathname !== '/') {
      setShowIntro(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    // If there's a hash in the URL (navigating to a section)
    if (location.hash) {
      // Scroll to section after a brief delay
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <CustomCursor />
      <CaseStudyNavigator />
      <ScrollToTopHandler />
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/mayo-clinic-case-study" element={<MayoClinicCaseStudy />} />
        <Route path="/rocket-design-system-case-study" element={<RocketDesignSystemCaseStudy />} />
        <Route path="/ed-plus-hackathon-case-study" element={<EdPlusHackathonCaseStudy />} />
        <Route path="/edufund-case-study" element={<EduFundCaseStudy />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
      {!showIntro && <AIAssistant />}
      
      {/* ScrollToTop should be the absolutely last element to ensure highest stacking context */}
      <ScrollToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}