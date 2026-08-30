import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { RecruiterHero } from "@/app/components/RecruiterHero";
import { ProjectCard } from "@/app/components/ProjectCard";
import { StackedProjectCards } from "@/app/components/StackedProjectCards";
import { RocketHoverCard, RocketDefaultCard } from "@/app/components/RocketHoverCard";
import { EdPlusHoverCard } from "@/app/components/EdPlusHoverCard";
import { EduFundHoverCard, EduFundDefaultCard } from "@/app/components/EduFundHoverCard";
import { MayoHoverCard, MayoDefaultCard } from "@/app/components/MayoHoverCard";
import { ComingSoonDivider } from "@/app/components/ComingSoonDivider";
import { Playground } from "@/app/components/Playground";
import { Footer } from "@/app/components/Footer";
import { SectionHeader } from "@/app/components/SectionHeader";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Trophy } from "lucide-react";
import { useRef } from "react";
import { useMode } from "@/app/contexts/ModeContext";

// Import project images
import imgImage3 from "figma:asset/9b1d984b5a3331721ca8520d91e1dae8087d3753.png";
import imgImage5 from "figma:asset/913c7bdd0782127c6add2bf191da6da72c1d498a.png";
import imgImage2 from "figma:asset/e2a3f144890df13d498134c35c69a488c3384e95.png";
import imgImage12 from "figma:asset/4f82695b46f6d2e8fc2518899c01206d5876a2e4.png";
import imgImage11 from "figma:asset/d349b829820164c6ffd8680038fb41c9c830b08e.png";
import imgFrame22 from "figma:asset/2096313866740ff08589de188acef2c08565190b.png";
import imgFrame1000006081 from "figma:asset/eafd58cd408b75d2c671a24115c9d94c6665d7c4.png";
import imgMayoClinicLogo from "figma:asset/6e4de7965720e764d62d472550ce59788110d82a.png";
import imgMayoClinicBg from "figma:asset/afe2fe1f42e31e77411b7caa6e9c409cb41fe7bd.png";
import imgMayoHover from "figma:asset/7cec038dc695b271cf7a02627140ad70f778973a.png";
import imgEduFund9 from "figma:asset/7c952b9e250d5658aecbab616dc9e7bf5799e506.png";
import imgEduFund2 from "figma:asset/64184af0c9ebee18abab8494831f8cc713d0485b.png";

// Rocket Design System Images
import imgRDS1 from "figma:asset/fa0fa915ca52b7cc2b903914318e7d7aeda70798.png";
import imgRDS2 from "figma:asset/9eeca02bc786feb3f52bfb28300731165d09f8ea.png";
import imgRDS3 from "figma:asset/944ac635c2d45a20c649055ea33346334c892754.png";

// Aura Images
import imgAuraFolder from "@/assets/Aura folder.png";
import { AuraHoverCard, AuraDefaultCard } from "@/app/components/AuraHoverCard";

// Aisle Images & Components
import { AisleHoverCard, AisleDefaultCard } from "@/app/components/AisleHoverCard";

export function HomePage() {
  const worksRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();
  const isRecruiter = mode === "recruiter";

  // Project data
  const projects = [
    {
      title: "ChemoBuddy - Mayo Clinic",
      description: "ChemoBuddy: Patient companion app simplifying chemotherapy symptom tracking, awarded the Mayo Clinic Observership.",
      pills: [
        { label: "Healthcare UX" },
        { label: "Task Completion", value: "+34%" },
        { label: "Patient Onboarding" }
      ],
      company: "Mayo Clinic",
      timeline: "Healthcare UX",
      duration: "10 Weeks",
      images: [],
      defaultComponent: <MayoDefaultCard />,
      folderColor: "#4AB7C4",
      hoverComponent: <MayoHoverCard />,
      caseStudyLink: "/mayo-clinic-case-study",
    },
    {
      title: "AURA",
      description: "AURA: An AI-powered workplace presence layer mapping biometrics to status indicators, built in 72 hours at the Figbuild Hackathon.",
      pills: [
        { label: "Hackathon" },
        { label: "AI + Emotion" },
        { label: "72-Hr Sprint" }
      ],
      company: "Figbuild Hackathon",
      timeline: "AI Workplace Experience",
      duration: "72 Hours",
      images: [],
      defaultComponent: <AuraDefaultCard />,
      folderColor: "#AFA9EC",
      hoverComponent: (
        <div className="relative w-full h-full flex items-center justify-center">
          <AuraHoverCard />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-center justify-center px-4 py-1.5 bg-[#FCE7F3] border-[1px] border-[#F472B6] rounded-full gap-2 shadow-sm whitespace-nowrap z-20 w-fit">
            <span className="font-['Inter'] font-bold text-[#BE185D] text-[12px]">
              Built in 72-hrs
            </span>
          </div>
        </div>
      ),
      caseStudyLink: "/aura-case-study",
    },
    {
      title: "Aisle",
      description: "Aisle: An AI agent manager that orchestrates automated workflows with clarity, context, and intelligent feedback.",
      pills: [
        { label: "AI & Agents" },
        { label: "Workflow UX" },
        { label: "SaaS Product" }
      ],
      company: "AI Product Design",
      timeline: "AI Agent Manager",
      duration: "2026",
      images: [],
      defaultComponent: <AisleDefaultCard />,
      folderColor: "#6366F1",
      hoverComponent: (
        <div className="relative w-full h-full flex items-center justify-center">
          <AisleHoverCard />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center justify-center px-4 py-1.5 bg-[#EEF2FF] border-[1px] border-[#6366F1] rounded-full gap-2 shadow-sm whitespace-nowrap z-10 w-fit">
            <span className="font-['Inter'] font-bold text-[#4338CA] text-[12px]">
              AI Agent Platform
            </span>
          </div>
        </div>
      ),
      caseStudyLink: "/aisle-case-study",
    },
    {
      title: "EduFund",
      description: "EduFund Fixed Deposits: A mobile-first investment flow that simplified financial onboarding, resulting in a 30% increase in user engagement.",
      pills: [
        { label: "Fintech" },
        { label: "User Retention", value: "+40%" },
        { label: "Mobile-First UX" }
      ],
      company: "EduFund",
      timeline: "Fintech Product Design",
      duration: "2024",
      images: [],
      defaultComponent: <EduFundDefaultCard />,
      folderColor: "#FFC627",
      hoverComponent: (
        <div className="relative w-full h-full flex items-center justify-center">
          <EduFundHoverCard />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center justify-center px-4 py-1.5 bg-[#D1F7EA] border-[1px] border-[#34D399] rounded-full gap-2 shadow-sm whitespace-nowrap z-10 w-fit">
            <span className="font-['Inter'] font-bold text-[#059669] text-[12px]">
              Shipped in 2024
            </span>
          </div>
        </div>
      ),
      caseStudyLink: "/edufund-case-study",
    },
    {
      title: "Rocket Design System",
      description: "Rocket Design System: A WCAG 2.1 AA compliant UI library at ASU that standardized digital products and reduced QA cycles by 30%.",
      pills: [
        { label: "Design Systems" },
        { label: "10+ Components" },
        { label: "WCAG 2.1 AA" }
      ],
      company: "EdPlus at ASU",
      timeline: "Design systems",
      duration: "2025 - Present",
      images: [],
      defaultComponent: <RocketDefaultCard />,
      folderColor: "#E74973",
      hoverComponent: (
        <div className="relative w-full h-full flex items-center justify-center">
          <RocketHoverCard />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center justify-center px-4 py-1.5 bg-[#FBF4D8] border-[1px] border-[#DCC368] rounded-full gap-2 shadow-sm whitespace-nowrap z-10 w-fit">
            <span className="font-['Inter'] font-bold text-[#B59220] text-[12px]">
              Published 10+ components
            </span>
          </div>
        </div>
      ),
      caseStudyLink: "/rocket-design-system-case-study",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <Navigation />

      <main>
        <motion.div
          key="designer-hero"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero />
        </motion.div>

        {/* ——————————————————————————————————— */}
        {/* Selected Works Section              */}
        {/* ——————————————————————————————————— */}
        <section id="work" className="py-20 lg:py-32 px-8 lg:px-0 max-w-[1224px] mx-auto" ref={worksRef}>
          <div className="lg:pl-[204px]">
            <SectionHeader
              title="Selected Works"
              subtitle="Case studies and projects I've poured my heart into - from healthcare to fintech to design systems."
            />
          </div>

          {/* Project cards Stacked Parallax */}
          <StackedProjectCards projects={projects} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
