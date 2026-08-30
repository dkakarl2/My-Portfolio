import { useState, useEffect, useRef, useCallback } from 'react';
import { Map, HeartPulse, ShieldCheck, Trophy, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudyNavArrows } from "@/app/components/CaseStudyNavArrows";
import videoChemoBuddyCover from '@/assets/Chemobuddy cover.mov';
import videoChemobuddy from '@/assets/Chemobuddy video.mp4';
import videoChemoWireframes from '@/assets/chemo wireframes.mp4';
import mayoRoleDoodle from '@/assets/Role and contribution.png';
import imgHeroReplace from 'figma:asset/f620a291096457bf1aa42dee938f437a6005b47b.png';
import imgSecondaryResearchSynthesis from '@/assets/secondary_research_synthesis.jpg';
import image_1bf5f60255a20498a2f475250c718f058eaf3940 from 'figma:asset/1bf5f60255a20498a2f475250c718f058eaf3940.png'
import image_1fe621dd30fe83aba6261433a0f4db9c285c46f0 from 'figma:asset/1fe621dd30fe83aba6261433a0f4db9c285c46f0.png'
import svgPaths from "./svg-3aenywbug4";
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
import imgImage54 from "figma:asset/ba81c99bc9fa2a7a974274dd5278fe652f58f7ca.png";
import imgImage106 from "figma:asset/c1366e9e4fa99b835ea3664cf295be514c999b29.png";
import imgImage107 from "figma:asset/db0c048f566a005b6ae99b7d8e878dbb5a7d4c8e.png";
import imgImage108 from "figma:asset/707c97d14934918ad3a4eea553555f8ad34e3acf.png";
import imgImage109 from "figma:asset/45189c12896bd7ac8633c8f1229265acd4e2d9e6.png";
import imgImage112 from "figma:asset/3ea8ddc2fcc8e226b09f672e7bf1038eb7ecc98b.png";
import imgImage30 from "figma:asset/8312b4d0ed8e2101bb7daa1796b6a655a783e34a.png";
import imgImage31 from "figma:asset/ad42ff3d4ee35d3261a670c9255c26fd373bf9fa.png";
import imgImage32 from "figma:asset/80a42a5449e08fa53f1507b3c660ecbd449f6205.png";
import imgImage33 from "figma:asset/582fc0ccaf4da8d9a77baa10b7e8dc11e6e3b084.png";
import imgImage34 from "figma:asset/0e792e22873181f30dda23a221f251dadf5b43bc.png";
import imgImage35 from "figma:asset/9e9c2ec81fb0b907886a872fb2eade88e6e3b29a.png";
import imgFrame1686557603 from "figma:asset/0f96027c033f69bc8ae94d0a91d1680efcea10cb.png";
import imgIMockupIPhone23 from "figma:asset/fea715c0b8803a7997e17059bd2093a2e7e532c7.png";
import imgIMockupIPhone24 from "figma:asset/e582d0de16f635686a2813b02d49168594803bf7.png";
import imgFrame1686557604 from "figma:asset/5091c7d29652c24f140af348b385bc43bd1debc7.png";
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
import imgFrame1686557605 from "figma:asset/faa657941405fed2979a54874004850da020feda.png";
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
import imgFrame1686557606 from "figma:asset/851d0d8a71ebcdcc5527aef4a1e8b273e679b9e7.png";
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
import imgWireframeGif from "figma:asset/38e4c66c4ae584ade297b719bde2e877ab70e770.png";
import imgOnboardingGif from "figma:asset/fc48fc997c89cb6846d6b9edaac4d7b0155f61fc.png";
import imgChatbotGif from "figma:asset/38d64cbf8c94f7973fa167cc74f57eeb39b88ef9.png";
import imgSymptomTrackerGif from "figma:asset/ffc44faf8f58f88ff8e40e4a47c6adb5fbada62a.png";
import imgChatHistoryGif from "figma:asset/259e2c63d8b9c2342eb8a8daa6f434a035054d9d.png";
import imgResearchGif from "figma:asset/7db52d7e82ca83f78490bd0efa1d31ce216b7265.png";
import { ConfusedGirlDoodle } from "@/app/components/ConfusedGirlDoodle";

function Frame28() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Caveat_Brush:Regular',sans-serif] gap-[56px] items-center leading-[normal] left-1/2 not-italic text-[#747474] text-[20px] top-1/2">
      <p className="relative shrink-0">Works</p>
      <p className="relative shrink-0">Playground</p>
      <p className="relative shrink-0">About</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[45px] relative shrink-0 w-[134px]">
      <div className="absolute h-[40px] left-[16px] top-[3px] w-[109px]">
        <div className="absolute inset-[-25%_-9.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.008 59.9997">
            <path d={svgPaths.p7365b70} id="Vector 92" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="20" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Caveat_Brush:Regular',sans-serif] leading-[normal] left-[42px] not-italic text-[20px] text-white top-[10px]">Contact</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[56px] items-center left-[1076px] top-[calc(50%+0.5px)] w-[244px]">
      <p className="font-['Caveat_Brush:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747474] text-[20px]">Resume</p>
      <Frame30 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="absolute h-[88px] left-0 overflow-clip top-0 w-[1440px]">
      <p className="absolute font-['Caveat_Brush:Regular',sans-serif] leading-[normal] left-[120px] not-italic text-[#747474] text-[36px] top-[calc(50%-30px)]">d.</p>
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Component() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute left-0 top-[400px] w-full object-cover rounded-2xl pointer-events-none select-none"
      src={videoChemoBuddyCover}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
  );
}

function Group() {
  return (
    <div className="absolute contents left-[16px] top-[3px]">
      <div className="absolute h-[40px] left-[16px] top-[3px] w-[109px]">
        <div className="absolute inset-[-25%_-9.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.008 59.9997">
            <path d={svgPaths.p7365b70} id="Vector 92" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="20" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Caveat_Brush:Regular',sans-serif] leading-[normal] left-[37px] not-italic text-[20px] text-white top-[10px]">LinkedIn</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-[45px] relative shrink-0 w-[141px]">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[40px] ml-0 mt-0 relative row-1 w-[86px]">
        <div className="absolute inset-[-25%_-11.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.002 59.9999">
            <path d={svgPaths.p1e3e2500} id="Vector 92" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="20" />
          </svg>
        </div>
      </div>
      <p className="col-1 font-['Caveat_Brush:Regular',sans-serif] leading-[normal] ml-[24px] mt-[7.5px] not-italic relative row-1 text-[20px] text-white">Email</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute bottom-[112px] content-stretch flex gap-[37px] items-center left-[124px]">
      <Frame31 />
      <Group1 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute bottom-0 h-[371px] left-0 overflow-clip w-[1440px]">
      <Frame50 />
      <div className="absolute bottom-0 h-[132px] left-[556px] w-[232px]" data-name="image 54">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[277.71%] left-[-56.81%] max-w-none top-[-61.8%] w-[236.49%]" src={imgImage54} />
        </div>
      </div>
      <div className="absolute bottom-[165px] font-['Caveat_Brush:Regular',sans-serif] leading-[normal] left-[943px] not-italic text-[24px] text-black translate-y-full whitespace-nowrap">
        <p className="mb-0">{`Open to conversations, projects `}</p>
        <p>and internship roles!</p>
      </div>
      <p className="absolute bottom-[81px] font-['Caveat_Brush:Regular',sans-serif] leading-[normal] left-[943px] not-italic text-[#747474] text-[20px] translate-y-full w-[357px] whitespace-pre-wrap">{`Designed & developed with love and care by Deepika :) `}</p>
      <p className="absolute bottom-[68px] font-['Caveat_Brush:Regular',sans-serif] leading-[normal] left-[124px] not-italic text-[#747474] text-[20px] translate-y-full w-[297px] whitespace-pre-wrap">© 2026 Deepika. ALL RIGHTS RESERVED.</p>
    </div>
  );
}

interface OverviewCardItem {
  id: string;
  icon: any;
  title: string;
  badge: string;
  subtitle: string;
  detail: string;
  accentColor: string;
  iconBg: string;
  badgeStyle: string;
  hoverGlow: string;
}

const overviewCardItems: OverviewCardItem[] = [
  {
    id: "learning-paths",
    icon: Map,
    title: "3 Simplified Learning Paths",
    badge: "Structured Care",
    subtitle: "Tailored preparation for pre-treatment, active chemo, and post-cycle recovery.",
    detail: "Replaces overwhelming clinic binders with bite-sized, interactive visual guides tailored to the patient's specific regimen and daily cognitive capacity.",
    accentColor: "text-emerald-600 group-hover:text-emerald-500",
    iconBg: "bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white",
    badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    hoverGlow: "group-hover:border-emerald-300 group-hover:shadow-emerald-500/10",
  },
  {
    id: "symptom-support",
    icon: HeartPulse,
    title: "Personalized Symptom & Question Support",
    badge: "24/7 Companion",
    subtitle: "Empathetic real-time side-effect logging and NLP question assistance.",
    detail: "Combines interactive body-map symptom logging with sentiment-aware AI that escalates red-flag symptoms instantly to oncology triage nurses.",
    accentColor: "text-rose-600 group-hover:text-rose-500",
    iconBg: "bg-rose-50 border-rose-100 group-hover:bg-rose-600 group-hover:text-white",
    badgeStyle: "bg-rose-50 text-rose-700 border-rose-200/80",
    hoverGlow: "group-hover:border-rose-300 group-hover:shadow-rose-500/10",
  },
  {
    id: "mayo-guidance",
    icon: ShieldCheck,
    title: "Built with Mayo Clinic Clinical Guidance",
    badge: "Clinically Validated",
    subtitle: "Co-designed with oncology mentors and Mayo Clinic observership insights.",
    detail: "Iteratively refined through mentor role-play research and usability testing with Dr. Umar (Oncology mentor) to guarantee patient safety and medical accuracy.",
    accentColor: "text-sky-600 group-hover:text-sky-500",
    iconBg: "bg-sky-50 border-sky-100 group-hover:bg-sky-600 group-hover:text-white",
    badgeStyle: "bg-sky-50 text-sky-700 border-sky-200/80",
    hoverGlow: "group-hover:border-sky-300 group-hover:shadow-sky-500/10",
  },
];

function OverviewCards() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 w-full"
    >
      {overviewCardItems.map((card) => {
        const IconComponent = card.icon;
        const isSelected = activeCard === card.id;

        return (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCard(isSelected ? null : card.id)}
            className={`group relative cursor-pointer rounded-2xl bg-white p-6 border border-gray-100 transition-all duration-300 shadow-sm hover:shadow-xl ${card.hoverGlow} ${
              isSelected ? "ring-2 ring-black/10 shadow-lg bg-gray-50/50" : ""
            }`}
          >
            {/* Badge & Arrow Header */}
            <div className="flex items-center justify-between mb-4">
              <span className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${card.badgeStyle}`}>
                {card.badge}
              </span>
              <motion.div
                animate={{ rotate: isSelected ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 group-hover:text-black transition-colors"
              >
                <ArrowRight size={16} />
              </motion.div>
            </div>

            {/* Icon Box */}
            <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-300 ${card.iconBg}`}>
              <IconComponent size={24} strokeWidth={1.8} className="transition-colors duration-300" />
            </div>

            {/* Title */}
            <h3 className="font-['Inter'] font-bold text-gray-900 text-base leading-snug group-hover:text-black transition-colors mb-2">
              {card.title}
            </h3>

            {/* Subtitle */}
            <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed mb-3">
              {card.subtitle}
            </p>

            {/* Interactive Expanded Detail */}
            <motion.div
              initial={false}
              animate={{ height: isSelected ? "auto" : 0, opacity: isSelected ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-3 border-t border-gray-100 text-xs text-gray-700 leading-relaxed bg-gray-50/80 p-3 rounded-lg mt-1 font-medium">
                💡 <span className="text-gray-800">{card.detail}</span>
              </div>
            </motion.div>

            {/* Action Prompt */}
            <div className="mt-2 text-[11px] font-semibold text-gray-400 group-hover:text-gray-600 transition-colors flex items-center gap-1">
              <span>{isSelected ? "Click to collapse" : "Click to expand details"}</span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-[994px]">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-black shadow-[0_0_8px_black] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[50px] relative shrink-0 text-[24px] text-black">Overview</p>
      </div>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#484848] text-[20px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">Chemotherapy education is often overwhelming, confusing, and emotionally heavy for patients. ChemoBuddy transforms complex treatment information into guided, supportive learning so patients can feel informed, prepared, and more in control of their care.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <OverviewCards />
      </div>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#484848] text-[20px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`Result - Patients move from anxious & uncertain to informed & confident`}</p>
        <p>I validated the experience through patient-centered research, iterative prototyping, and clinician feedback to ensure medical clarity, emotional sensitivity, and real-world usability.</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[41px] h-[360px] items-center ml-0 mt-0 relative row-1 w-[298px]">
      <div className="h-[266px] relative shrink-0 w-[147px]" data-name="image 106">
        <ConfusedGirlDoodle />
      </div>
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[#484848] text-[16px] w-[min-content] whitespace-pre-wrap">Complex medical information leaves patients feeling confused and unsure about what to expect.</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[36px] items-center ml-[377px] mt-px relative row-1 w-[286px]">
      <div className="h-[266px] relative shrink-0 w-[247px]" data-name="image 107">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[157.54%] left-[-39.04%] max-w-none top-[-30.15%] w-[159.8%]" src={imgImage107} />
        </div>
      </div>
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[#484848] text-[16px] w-[min-content] whitespace-pre-wrap">ChemoBuddy provides clear, compassionate guidance tailored to each stage of treatment.</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[48px] h-[359px] items-center ml-[742px] mt-px relative row-1 w-[280px]">
      <div className="h-[257px] relative shrink-0 w-[202px]" data-name="image 108">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[189.98%] left-[-57.31%] max-w-none top-[-25.42%] w-[226.89%]" src={imgImage108} />
        </div>
      </div>
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] min-w-full relative shrink-0 text-[#484848] text-[16px] w-[min-content] whitespace-pre-wrap">Patients feel informed, reassured, and ready to move forward with confidence.</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[59px] mt-[428px] not-italic relative row-1 text-[#bd4800] text-[32px]">Confused</p>
      <p className="col-1 font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[781px] mt-[428px] not-italic relative row-1 text-[#78be20] text-[32px]">Reassured</p>
      <Frame73 />
      <p className="col-1 font-['Caveat_Brush:Regular',sans-serif] leading-[normal] ml-[59px] mt-[475px] not-italic relative row-1 text-[#484848] text-[20px]">Problem</p>
      <p className="col-1 font-['Caveat_Brush:Regular',sans-serif] leading-[normal] ml-[781px] mt-[477px] not-italic relative row-1 text-[#484848] text-[20px]">Impact</p>
      <Frame71 />
      <Frame72 />
      <div className="col-1 h-0 ml-[252.93px] mt-[158.76px] relative row-1 w-[88.643px]">
        <div className="absolute inset-[-1px_-1.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.6435 2">
            <path d="M1 1H89.6435" id="Vector 215" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-0 ml-[652px] mt-[158.76px] relative row-1 w-[88.643px]">
        <div className="absolute inset-[-1px_-1.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.6435 2">
            <path d="M1 1H89.6435" id="Vector 215" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-[10.874px] ml-[337.18px] mt-[153.89px] relative row-1 w-[5.858px]">
        <div className="absolute inset-[-9.2%_-17.1%_-9.2%_-17.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.86035 12.8744">
            <path d={svgPaths.p1f64600} id="Vector 216" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-[10.874px] ml-[736.25px] mt-[153.89px] relative row-1 w-[5.858px]">
        <div className="absolute inset-[-9.2%_-17.1%_-9.2%_-17.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.86035 12.8744">
            <path d={svgPaths.p1f64600} id="Vector 216" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TransformationFlowSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const steps = [
    {
      id: "problem",
      tag: "Problem",
      status: "Confused",
      subtitle: "Overwhelmed & Uncertain",
      statusColor: "text-[#BD4800]",
      badgeBg: "bg-amber-100/90 text-amber-900 border-amber-200",
      cardBg: "bg-gradient-to-b from-amber-50/60 via-white to-amber-50/20 border-amber-200/60",
      glowColor: "hover:border-amber-300 hover:shadow-amber-500/10",
      renderIllustration: () => (
        <div className="h-48 flex items-center justify-center p-2">
          <div className="w-36 h-full flex items-center justify-center">
            <ConfusedGirlDoodle />
          </div>
        </div>
      ),
      description: "Complex, dense medical information leaves patients feeling confused, fearful, and unsure about what to expect.",
    },
    {
      id: "solution",
      tag: "The Solution",
      status: "Guided",
      subtitle: "ChemoBuddy Companion",
      statusColor: "text-[#00A3E0]",
      badgeBg: "bg-sky-100/90 text-sky-900 border-sky-200",
      cardBg: "bg-gradient-to-b from-sky-50/60 via-white to-sky-50/20 border-sky-200/60",
      glowColor: "hover:border-sky-300 hover:shadow-sky-500/10",
      renderIllustration: () => (
        <div className="h-48 flex items-center justify-center p-2 overflow-hidden">
          <img src={imgImage107} alt="ChemoBuddy Solution" className="h-44 object-contain transition-transform duration-300 group-hover:scale-105" />
        </div>
      ),
      description: "ChemoBuddy provides clear, compassionate guidance tailored to each stage of treatment and daily emotional readiness.",
    },
    {
      id: "impact",
      tag: "Impact",
      status: "Reassured",
      subtitle: "Informed & Confident",
      statusColor: "text-[#78BE20]",
      badgeBg: "bg-emerald-100/90 text-emerald-900 border-emerald-200",
      cardBg: "bg-gradient-to-b from-emerald-50/60 via-white to-emerald-50/20 border-emerald-200/60",
      glowColor: "hover:border-emerald-300 hover:shadow-emerald-500/10",
      renderIllustration: () => (
        <div className="h-48 flex items-center justify-center p-2 overflow-hidden">
          <img src={imgImage108} alt="Reassured Impact" className="h-44 object-contain transition-transform duration-300 group-hover:scale-105" />
        </div>
      ),
      description: "Patients feel informed, reassured, and empowered to move forward with confidence and clarity throughout care.",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="w-full my-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((step, idx) => (
          <div key={step.id} className="relative flex flex-col">
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex-1 flex flex-col justify-between rounded-2xl p-6 border transition-all duration-300 shadow-sm hover:shadow-xl ${step.cardBg} ${step.glowColor}`}
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${step.badgeBg}`}>
                    {step.tag}
                  </span>
                  <span className="text-xs font-bold text-gray-400">0{idx + 1}</span>
                </div>

                {/* Illustration Box */}
                <div className="mb-4 rounded-xl bg-white/90 border border-gray-100/80 shadow-inner overflow-hidden group-hover:shadow-md transition-shadow">
                  {step.renderIllustration()}
                </div>

                {/* Status Title */}
                <div className="mb-2">
                  <h3 className={`font-['Inter'] font-extrabold text-2xl ${step.statusColor} leading-tight`}>
                    {step.status}
                  </h3>
                  <p className="font-['Inter'] text-xs font-semibold text-gray-500 mt-0.5">
                    {step.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="font-['Inter'] text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

            </motion.div>

            {/* Connecting Arrow between cards (hidden on mobile) */}
            {idx < steps.length - 1 && (
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-gray-400">
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight size={16} className="text-gray-600" />
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame52 />
      <TransformationFlowSection />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#484848] text-[20px]">Results and impact</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame133 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content] whitespace-pre-wrap">Measuring how design decisions improved clarity, confidence, and care</p>
    </div>
  );
}

function StickyNote() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[329.11px] inline-grid items-[start] justify-items-[start] ml-0 mt-[6.91px] relative row-1 w-[311.482px]" data-name="Sticky Note">
      <div className="col-1 flex h-[62.419px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[247.546px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[309.965px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="bg-[#fcffc5] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 col-1 flex h-[84.338px] items-center justify-center ml-[146.62px] mt-[158.51px] relative row-1 w-[214.322px]" style={{ "--transform-inner-width": "379.3125", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative text-[0px] text-black text-center w-[209.607px] whitespace-pre-wrap">
            <p className="font-['Inter:Bold',sans-serif] font-bold mb-0 text-[24px]">{`95% `}</p>
            <p className="text-[16.569px]">of participants completed all tasks successfully.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <StickyNote />
    </div>
  );
}

function StickyNote1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[314.96px] inline-grid items-[start] justify-items-[start] ml-0 mt-[9.06px] relative row-1 w-[296.281px]" data-name="Sticky Note">
      <div className="col-1 flex h-[49.792px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[245.972px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[295.764px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <div className="bg-[#ffdeeb] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 col-1 flex h-[93.333px] items-center justify-center ml-[144.71px] mt-[163.38px] relative row-1 w-[201.677px]" style={{ "--transform-inner-width": "503.625", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative text-[0px] text-black text-center w-[199.381px] whitespace-pre-wrap">
            <p className="font-['Inter:Bold',sans-serif] font-bold mb-0 text-[24px]">{`40% `}</p>
            <p className="text-[16.569px]">self-reported reduction in anxiety while navigating the prototype.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[346.15px] mt-[11.05px] relative row-1">
      <StickyNote1 />
    </div>
  );
}

function StickyNote2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[337.318px] inline-grid items-[start] justify-items-[start] ml-0 mt-[8.28px] relative row-1 w-[320.356px]" data-name="Sticky Note">
      <div className="col-1 flex h-[70.054px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[248.176px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[318.231px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <div className="bg-[#c5f6ff] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 col-1 flex h-[115.082px] items-center justify-center ml-[148.68px] mt-[163.3px] relative row-1 w-[188.313px]" style={{ "--transform-inner-width": "361.609375", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[9.2deg]">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative text-[0px] text-black text-center w-[176.517px] whitespace-pre-wrap">
            <p className="font-['Inter:Bold',sans-serif] font-bold mb-0 text-[24px]">{`30% `}</p>
            <p className="text-[16.569px]">improvement in symptom reporting accuracy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[675.81px] mt-[11.05px] relative row-1">
      <StickyNote2 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function StickyNote3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[329.112px] inline-grid items-[start] justify-items-[start] ml-0 mt-[6.91px] relative row-1 w-[311.482px]" data-name="Sticky Note">
      <div className="col-1 flex h-[62.419px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[247.546px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "1256.828125" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[309.965px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "1106.828125" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="bg-[#dfffcc] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 col-1 flex h-[105.37px] items-center justify-center ml-[147px] mt-[153.17px] relative row-1 w-[220.833px]" style={{ "--transform-inner-width": "512.234375", "--transform-inner-height": "1125.828125" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.73deg]">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative text-[0px] text-black text-center w-[214.307px] whitespace-pre-wrap">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold mb-0 text-[24px]">{`85% `}</p>
            <p className="text-[16.569px]">increase in engagement time (4.2 to 7.8 minutes average session).</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <StickyNote3 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start leading-[0] relative shrink-0 w-full">
      <Group6 />
      <Group5 />
    </div>
  );
}

function AnimatedCounter({ target, suffix = '%', color, duration = 1800 }: { target: number; suffix?: string; color: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  const easeOutCubic = useCallback((t: number) => 1 - Math.pow(1 - t, 3), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const currentValue = Math.round(easedProgress * target);
            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated, easeOutCubic]);

  return (
    <p
      ref={ref}
      className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[56px]"
      style={{ color }}
    >
      {count}{suffix}
    </p>
  );
}

import { ImpactCard } from '@/app/components/ImpactCard';

function Frame100() {
  return (
    <div className="flex flex-col gap-[51px] items-start relative shrink-0 w-[997px]">
      {/* Header */}
      <div className="flex flex-col gap-[24px] items-start justify-center w-full">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#484848] text-[20px]">Results and impact</p>
          </div>
        </div>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic text-[24px] text-black whitespace-pre-wrap">Measuring how design decisions improved clarity, confidence, and care</p>
      </div>

      {/* Metric Cards */}
      <div className="flex flex-col gap-[24px] w-full">
        {/* Row 1 */}
        <div className="flex gap-[24px] items-stretch w-full">
          {/* Card: 95% */}
          <ImpactCard
            target={95}
            description="of participants completed all tasks successfully"
            themeColor="#E74973"
            maxWidth="320px"
          />

          {/* Card: 40% */}
          <ImpactCard
            target={40}
            description="self-reported reduction in anxiety while navigating the prototype."
            themeColor="#78BE20"
            maxWidth="372px"
          />
        </div>

        {/* Row 2 */}
        <div className="flex gap-[24px] items-stretch w-full">
          {/* Card: 30% */}
          <ImpactCard
            target={30}
            description="improvement in symptom reporting accuracy."
            themeColor="#FF7F32"
            maxWidth="337px"
          />

          {/* Card: 85% */}
          <ImpactCard
            target={85}
            description="increase in engagement time (4.2 to 7.8 minutes average session)."
            themeColor="#00A3E0"
            maxWidth="357px"
          />
        </div>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col gap-[155px] items-start relative shrink-0 w-full">
      <Frame130 />
      <Frame100 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">Context and Problem</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full">But….. why does chemotherapy often feel so emotionally and informationally overwhelming for patients?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">Chemotherapy patients manage an enormous amount of medical and emotional stress. Many receive thick binders of generic information and must juggle symptoms, schedules, and medications while coping with uncertainty.</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col gap-[54px] items-start leading-[0] not-italic relative w-[228.284px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Simplified self-tracking</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Allow patients to log symptoms easily, identify red-flag conditions, and receive guidance instantly.</p>
      </div>
    </div>
  );
}

function StickyNote4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[329.11px] inline-grid items-[start] justify-items-[start] ml-0 mt-[6.91px] relative row-1 w-[311.482px]" data-name="Sticky Note">
      <div className="col-1 flex h-[62.419px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[247.546px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[309.965px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="bg-[#fcffc5] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[173.538px] items-center justify-center ml-[28.8px] mt-[59px] relative row-1 w-[239.889px]" style={{ "--transform-inner-width": "873.671875", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <Frame115 />
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <StickyNote4 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[53px] items-start leading-[0] not-italic relative w-[228.283px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Personalised education</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Deliver information tailored to each patient’s treatment regimen, literacy level, and emotional readiness.</p>
      </div>
    </div>
  );
}

function StickyNote5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[314.962px] inline-grid items-[start] justify-items-[start] ml-0 mt-[9.07px] relative row-1 w-[296.281px]" data-name="Sticky Note">
      <div className="col-1 flex h-[49.792px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[245.972px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[295.764px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <div className="bg-[#ffdeeb] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[161.087px] items-center justify-center ml-[23.01px] mt-[55.14px] relative row-1 w-[232.371px]" style={{ "--transform-inner-width": "914.65625", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <Frame116 />
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[346px] mt-[11.05px] relative row-1">
      <StickyNote5 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-[53px] items-start leading-[0] not-italic relative w-[228.283px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Unified communication</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Connect patients, caregivers, and clinicians through a shared, secure platform.</p>
      </div>
    </div>
  );
}

function StickyNote6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[337.317px] inline-grid items-[start] justify-items-[start] ml-0 mt-[8.28px] relative row-1 w-[320.356px]" data-name="Sticky Note">
      <div className="col-1 flex h-[70.054px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[248.176px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[318.231px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <div className="bg-[#c5f6ff] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[179.311px] items-center justify-center ml-[23.01px] mt-[55.18px] relative row-1 w-[244.035px]" style={{ "--transform-inner-width": "735.875", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <Frame117 />
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[675.64px] mt-[11.05px] relative row-1">
      <StickyNote6 />
    </div>
  );
}

function CoreOpportunitiesStickyNotes() {
  const [activeNote, setActiveNote] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  const noteVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const opportunities = [
    {
      id: "tracking",
      title: "Simplified self-tracking",
      description: "Allow patients to log symptoms easily, identify red-flag conditions, and receive guidance instantly.",
      badge: "01",
      initialRotate: "-rotate-2",
      badgeColor: "bg-amber-200/80 text-amber-900 border-amber-300",
      bgColor: "bg-gradient-to-br from-[#FFFDE7] via-[#FFF9C4] to-[#FFF59D]",
      borderColor: "border-[#FBC02D]/40",
      accentDot: "bg-[#F57F17]",
      detailText: "💡 Focuses on frictionless symptom recording and instant triaging to lower daily anxiety.",
    },
    {
      id: "education",
      title: "Personalised education",
      description: "Deliver information tailored to each patient's treatment regimen, literacy level, and emotional readiness.",
      badge: "02",
      initialRotate: "rotate-1",
      badgeColor: "bg-rose-200/80 text-rose-900 border-rose-300",
      bgColor: "bg-gradient-to-br from-[#FCE4EC] via-[#F8BBD0] to-[#F48FB1]/70",
      borderColor: "border-[#E91E63]/30",
      accentDot: "bg-[#C2185B]",
      detailText: "💡 Replaces 100-page generic binders with digestible, stage-specific bite-sized lessons.",
    },
    {
      id: "communication",
      title: "Unified communication",
      description: "Connect patients, caregivers, and clinicians through a shared, secure platform.",
      badge: "03",
      initialRotate: "rotate-3",
      badgeColor: "bg-sky-200/80 text-sky-900 border-sky-300",
      bgColor: "bg-gradient-to-br from-[#E0F7FA] via-[#B2EBF2] to-[#80DEEA]/70",
      borderColor: "border-[#00BCD4]/40",
      accentDot: "bg-[#0097A7]",
      detailText: "💡 Keeps family caregivers and care teams aligned without disjointed phone calls.",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="w-full my-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4 pb-2">
        {opportunities.map((item, index) => {
          const isActive = activeNote === index;
          return (
            <motion.div
              key={item.id}
              variants={noteVariants}
              whileHover={{ rotate: 0, y: -10, scale: 1.03 }}
              onClick={() => setActiveNote(isActive ? null : index)}
              className={`relative cursor-pointer transition-all duration-300 group ${item.initialRotate}`}
            >
              {/* Top Washi Tape Header (Clean without OPPORTUNITY text) */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 w-16 h-3.5 bg-white/70 backdrop-blur-md border border-white/80 shadow-2xs rounded-xs transform -rotate-1 group-hover:rotate-0 transition-transform flex items-center justify-between px-1.5">
                <div className={`w-1 h-1 rounded-full ${item.accentDot}`} />
                <div className={`w-1 h-1 rounded-full ${item.accentDot}`} />
              </div>

              {/* Main Sticky Note Card */}
              <div
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border shadow-md hover:shadow-2xl transition-all duration-300 ${item.bgColor} ${item.borderColor}`}
                style={{
                  minHeight: "260px",
                  boxShadow: isActive
                    ? "0 20px 30px -10px rgba(0,0,0,0.15), 0 10px 15px -5px rgba(0,0,0,0.1)"
                    : "0 10px 20px -8px rgba(0,0,0,0.1)",
                }}
              >
                {/* Paper fold accent at bottom right corner */}
                <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-br-2xl">
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-black/5 transform rotate-45 translate-x-6 translate-y-6 shadow-inner" />
                </div>

                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <Sparkles size={15} className="text-gray-400 group-hover:text-amber-600 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Inter'] font-bold text-xl text-gray-900 mb-3 group-hover:text-black transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Body text */}
                  <p className="font-['Inter'] text-sm text-gray-800 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Interactive Detail Drawer */}
                <div className="mt-5 pt-3 border-t border-black/10 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-700">
                    <span className="font-['Caveat_Brush'] text-base">Design Rationale</span>
                    <span className="text-[11px] underline text-gray-600 group-hover:text-black">
                      {isActive ? "Tap to hide" : "Tap to expand"}
                    </span>
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-gray-800 italic bg-white/70 p-2.5 rounded-lg border border-black/5"
                    >
                      {item.detailText}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function Group8() {
  return <CoreOpportunitiesStickyNotes />;
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#484848] text-[22px] w-full">Core Opportunities</p>
      <CoreOpportunitiesStickyNotes />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[994px]">
      <Frame74 />
      <Frame82 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">{`Role & Contribution`}</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[28px] text-black w-full">Designing Clarity in a Complex Care Journey</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#484848] text-[18px] w-full pr-12">{`UX and instructional designer for ChemoBuddy, translating complex chemotherapy information into structured, patient-friendly learning experiences. Conducted research, mapped learning flows, and designed supportive, accessible interfaces aligned with clinical guidance from Mayo Clinic.`}</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="flex flex-col md:flex-row items-center w-[994px] py-16 gap-8 relative shrink-0">
      <div className="flex-1">
        <Frame75 />
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img src={mayoRoleDoodle} alt="Role and Contribution doodle" className="max-w-full w-[450px] h-auto object-contain" />
      </div>
    </div>
  );
}

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

function ChemoWireframesVideoPlayer() {
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
          src={videoChemoWireframes}
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

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">Research</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full">Understanding the Needs of Patients and Caregivers</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">A 10-week exploration to understand how chemotherapy patients learn, cope, and communicate</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">
        <p className="mb-0">{` I followed a structured 4-phase research approach, combining clinical insights, patient emotions, and caregiver perspectives to uncover what truly matters during chemotherapy. What began as a goal to simplify education evolved into an exploration of how patients process medical information, manage fear, and depend on family support.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Through this 10-week process, I moved from literature and competitive analysis to real user interactions, validating each design decision through evidence and empathy.</p>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="absolute h-[173px] left-[680px] rounded-[16px] top-[446px] w-[294px]">
      <div className="leading-[normal] overflow-clip relative rounded-[inherit] size-full text-[14px] whitespace-pre-wrap">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[22px] not-italic text-black top-[18px] w-[250px]">{`Validation & Design direction`}</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[22px] not-italic text-black top-[41px] w-[250px]">Worked with oncology mentor to validate findings, align concepts with accuracy and define requirements for prototyping</p>
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic left-[22px] text-[#747474] top-[121px] w-[250px]">(Output: Validated problem statement + user needs)</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}

function Frame107() {
  return (
    <div className="absolute h-[194px] left-[21px] rounded-[16px] top-[32px] w-[294px]">
      <div className="leading-[normal] overflow-clip relative rounded-[inherit] size-full text-[14px] whitespace-pre-wrap">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[22px] not-italic text-black top-[60px] w-[250px]">Explored 11 peer - reviewed oncology journals and Evaluated 8 healthcare and oncology apps to identify usability gaps.</p>
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic left-[22px] text-[#747474] top-[146px] w-[250px]">(Output: 4 key problem clusters, feature benchmarking matrix)</p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[22px] not-italic text-black top-[18px] w-[250px]">{`Literature review & Competitive analysis`}</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}

function Frame110() {
  return (
    <div className="absolute h-[173px] left-[230px] rounded-[16px] top-[446px] w-[294px]">
      <div className="leading-[normal] overflow-clip relative rounded-[inherit] size-full text-[14px] whitespace-pre-wrap">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[22px] not-italic text-black top-[49px] w-[250px]">Gathering input from cancer patients, caregivers, and medical mentors to understand emotional, educational and technical pain points</p>
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic left-[22px] text-[#747474] top-[132px] w-[250px]">(Output: Personas)</p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[22px] not-italic text-black top-[18px] w-[250px]">{`Surveys & Interviews`}</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}

function Frame109() {
  return (
    <div className="absolute h-[165px] left-[500px] rounded-[16px] top-[61px] w-[294px]">
      <div className="leading-[normal] overflow-clip relative rounded-[inherit] size-full text-[14px] whitespace-pre-wrap">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[22px] not-italic text-black top-[39px] w-[250px]">Transcribed interviews and clustered findings into themes, trust, overload, accessibility and caregiver support</p>
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic left-[22px] text-[#747474] top-[110px] w-[250px]">(Output: Affinity map + design opportunity areas)</p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[22px] not-italic text-black top-[18px] w-[250px]">{`Synthesis & Insight mapping`}</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-full">
      <div className="absolute h-0 left-[4.64px] top-[328.84px] w-[991.434px]">
        <div className="absolute inset-[-3px_-0.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 997.434 6">
            <path d="M3 3H994.434" id="Vector 219" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="6" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[24.409px] left-[147.17px] top-[314.37px] w-[21.288px]">
        <div className="absolute inset-[-12.29%_-14.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2875 30.4093">
            <path d={svgPaths.p8956140} id="Vector 220" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="6" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[24.409px] left-[366px] top-[314px] w-[21.288px]">
        <div className="absolute inset-[-12.29%_-14.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2875 30.4093">
            <path d={svgPaths.p8956140} id="Vector 220" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="6" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[24.409px] left-[585px] top-[314px] w-[21.288px]">
        <div className="absolute inset-[-12.29%_-14.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2875 30.4093">
            <path d={svgPaths.p8956140} id="Vector 220" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="6" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[24.409px] left-[842px] top-[314px] w-[21.288px]">
        <div className="absolute inset-[-12.29%_-14.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2875 30.4093">
            <path d={svgPaths.p8956140} id="Vector 220" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="6" />
          </svg>
        </div>
      </div>
      <p className="absolute font-sans font-medium leading-[1.2] left-[51px] not-italic text-[#484848] text-[14px] top-[268px] w-[293px] whitespace-pre-wrap">
        Secondary Research
        <br aria-hidden="true" />
        Week (1-3)
      </p>
      <p className="absolute font-sans font-medium leading-[1.2] left-[544px] not-italic text-[#484848] text-[14px] top-[268px] w-[147px] whitespace-pre-wrap">
        Data Synthesis
        <br aria-hidden="true" />
        Week (6-7)
      </p>
      <div className="absolute font-sans font-medium leading-[1.2] left-[310px] not-italic text-[#484848] text-[14px] top-[345px] w-[134px] whitespace-pre-wrap">
        <p className="mb-0">User Research</p>
        <p>Week (4-5)</p>
      </div>
      <div className="absolute font-sans font-medium leading-[1.2] left-[786px] not-italic text-[#484848] text-[16px] top-[345px] w-[134px] whitespace-pre-wrap">
        <p className="mb-0">User Testing</p>
        <p>Week (8-10)</p>
      </div>


      <Frame111 />
      <Frame107 />
      <Frame110 />
      <Frame109 />
    </div>
  );
}

function SynthesisCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'affinity',
      title: 'Affinity Mapping Artifact',
      subtitle: '5 Synthesised Pattern Clusters derived from role-play observation notes',
      image: imgImage32,
      alt: 'Affinity Mapping Artifact'
    },
    {
      id: 'persona-1',
      title: 'User Persona 01 — Patient Journey',
      subtitle: 'Primary archetype mapping information needs, cognitive fatigue, and side-effect logging',
      image: imgImage33,
      alt: 'User Persona 01'
    },
    {
      id: 'persona-2',
      title: 'User Persona 02 — Caregiver Support',
      subtitle: 'Secondary archetype focusing on caregiver coordination and communication features',
      image: imgImage34,
      alt: 'User Persona 02'
    }
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[currentSlide];

  return (
    <div className="space-y-4 pt-4 border-t border-gray-200/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0]">Synthesis Artifacts Carousel</span>
          <h4 className="font-bold text-lg text-black">{slide.title}</h4>
          <p className="text-xs text-gray-500 font-medium mt-0.5">{slide.subtitle}</p>
        </div>

        {/* Carousel Nav Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-semibold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={prevSlide}
            aria-label="Previous Artifact Slide"
            className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer shadow-xs"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Artifact Slide"
            className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer shadow-xs"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Slide Image */}
      <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300">
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.alt}
          className="w-full h-auto object-contain max-h-[600px] animate-fade-in"
        />
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentSlide === idx ? 'w-8 bg-[#00A3E0]' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SecondaryResearchLiteratureMatrix() {
  return (
    <div className="w-full my-6 flex flex-col gap-3">
      <div className="w-full overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-white">
        <img
          src="/secondary_research_matrix.png"
          alt="Chemo Education Research Papers — Secondary Literature Review Matrix"
          className="w-full h-auto object-cover block"
        />
      </div>
      <p className="text-xs text-gray-500 font-medium text-center italic">
        Secondary Research Matrix — Auditing 11 peer-reviewed oncology, mHealth, and AI chatbot studies
      </p>
    </div>
  );
}

function InteractiveResearchSection() {
  const [activeTab, setActiveTab] = useState<'secondary' | 'competitive' | 'user-research' | 'synthesis'>('secondary');

  const tabs = [
    { id: 'secondary', label: 'SECONDARY RESEARCH', subtitle: 'Week 1–3' },
    { id: 'competitive', label: 'COMPETITIVE ANALYSIS', subtitle: 'Week 3' },
    { id: 'user-research', label: 'USER RESEARCH', subtitle: 'Week 4–5' },
    { id: 'synthesis', label: 'DATA SYNTHESIS', subtitle: 'Week 6–7' }
  ] as const;

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveTab(tabs[nextIndex].id as any);
    const nextTabButton = document.getElementById(`tab-${tabs[nextIndex].id}`);
    nextTabButton?.focus();
  };

  return (
    <div className="space-y-8 my-10">
      {/* Research Intro & Header */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A3E0] block mb-1">Research Archive</span>
          <h2 className="font-['Inter'] font-bold text-2xl lg:text-3xl text-black border-b pb-3 border-gray-100">
            RESEARCH — Understanding the Needs of Patients and Caregivers
          </h2>
          <p className="text-base text-gray-500 font-medium mt-2">
            A 10-week exploration to understand how chemotherapy patients learn, cope, and communicate.
          </p>
        </div>

        <p className="font-['Inter'] text-[#484848] text-base leading-relaxed max-w-3xl">
          I followed a structured 4-phase research approach, combining clinical insights, patient emotions, and caregiver perspectives to uncover what truly matters during chemotherapy. What began as a goal to simplify education evolved into an exploration of how patients process medical information, manage fear, and depend on family support.
        </p>

        <p className="font-['Inter'] text-[#484848] text-base leading-relaxed max-w-3xl">
          Through this 10-week process, I moved from literature and competitive analysis to role-play research under oncology mentor guidance and usability testing, validating each design direction through evidence and clinical guidance.
        </p>

        {/* 4-Phase Timeline Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <div className="space-y-1 border-l-2 border-[#00A3E0] pl-3">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">01</span>
            <span className="block text-xs font-bold text-black">SECONDARY RESEARCH</span>
            <span className="block text-[11px] text-gray-500 font-medium">Week 1–3</span>
          </div>
          <div className="space-y-1 border-l-2 border-[#00A3E0] pl-3">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">02</span>
            <span className="block text-xs font-bold text-black">USER RESEARCH</span>
            <span className="block text-[11px] text-gray-500 font-medium">Week 4–5</span>
          </div>
          <div className="space-y-1 border-l-2 border-[#00A3E0] pl-3">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">03</span>
            <span className="block text-xs font-bold text-black">DATA SYNTHESIS</span>
            <span className="block text-[11px] text-gray-500 font-medium">Week 6–7</span>
          </div>
          <div className="space-y-1 border-l-2 border-gray-300 pl-3">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">04</span>
            <span className="block text-xs font-bold text-black">USER TESTING</span>
            <span className="block text-[11px] text-gray-500 font-medium">Week 8–10</span>
          </div>
        </div>
      </div>

      {/* Interactive Tabs Bar */}
      <div className="space-y-6">
        <div 
          role="tablist" 
          aria-label="Research Phases"
          className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200 scrollbar-none"
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.id as any)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`flex flex-col items-start px-5 py-3 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#00A3E0] ${
                  isActive 
                    ? 'bg-black text-white shadow-sm' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black'
                }`}
              >
                <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-gray-900'}`}>{tab.label}</span>
                <span className={`text-[10px] font-medium ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>{tab.subtitle}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        <div className="relative">
          {/* TAB 1: SECONDARY RESEARCH */}
          {activeTab === 'secondary' && (
            <div 
              role="tabpanel"
              id="panel-secondary"
              aria-labelledby="tab-secondary"
              tabIndex={0}
              className="space-y-8 animate-fade-in"
            >
              {/* Subsection 1: Literature Review */}
              <div className="space-y-4 bg-gray-50/60 p-6 lg:p-8 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between border-b border-gray-200/80 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">01 — Subsection</span>
                    <h3 className="font-['Inter'] font-bold text-xl text-black">Literature Review</h3>
                  </div>
                  <span className="text-xs text-[#747474] font-medium bg-white px-3 py-1 rounded-full border border-gray-200">Week 1–2</span>
                </div>
                <p className="font-['Inter'] text-[#484848] text-base leading-relaxed">
                  I started with a literature review to ground my work in existing oncology and digital health research, instead of relying on assumptions.
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="font-bold text-sm text-black uppercase tracking-wider">Four Core Research Questions:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                    <li className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <span>How do chemotherapy patients currently receive education and support?</span>
                    </li>
                    <li className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <span>What are the documented gaps or failures in existing chemo education tools?</span>
                    </li>
                    <li className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <span>What has already been tried with digital health, symptom trackers, and AI chatbots?</span>
                    </li>
                    <li className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                      <span>What clinical risks and safety boundaries must I respect as a designer?</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-sm text-black uppercase tracking-wider">What I Did:</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    I reviewed 11 peer-reviewed oncology studies and digital health journals focusing on: (1) mHealth cancer apps, (2) symptom management & patient-reported outcomes (PROs), (3) digital education tools and treatment adherence, and (4) early experiments with chatbots in oncology.
                  </p>
                </div>

                <SecondaryResearchLiteratureMatrix />

                <div className="space-y-3 pt-4 border-t border-gray-200/80">
                  <h4 className="font-bold text-sm text-black uppercase tracking-wider">Findings from Literature:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-5 rounded-xl border border-gray-100 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0]">Insight 01</span>
                      <h5 className="font-bold text-black text-sm">Personalized Content Delivery</h5>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Patients absorb information better when it is tailored to their specific regimen and stage, not when it is generic.
                      </p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0]">Insight 02</span>
                      <h5 className="font-bold text-black text-sm">Real-Time Feedback Guidance</h5>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Symptom trackers that provide clear "this is okay" vs "call your doctor now" guidance can prevent avoidable ER trips.
                      </p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0]">Insight 03</span>
                      <h5 className="font-bold text-black text-sm">Clear Chatbot Boundaries</h5>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Chatbots work best as educational and supportive tools, not as diagnostic engines. Clinical supervision is essential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COMPETITIVE ANALYSIS */}
          {activeTab === 'competitive' && (
            <div 
              role="tabpanel"
              id="panel-competitive"
              aria-labelledby="tab-competitive"
              tabIndex={0}
              className="space-y-6 bg-gray-50/60 p-6 lg:p-8 rounded-2xl border border-gray-100 animate-fade-in"
            >
              <div className="flex items-center justify-between border-b border-gray-200/80 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Competitive Benchmark</span>
                  <h3 className="font-['Inter'] font-bold text-xl text-black">Competitive Analysis — Existing Oncology & Health Apps</h3>
                </div>
                <span className="text-xs text-[#747474] font-medium bg-white px-3 py-1 rounded-full border border-gray-200">Week 3</span>
              </div>

              <p className="font-['Inter'] text-[#484848] text-base leading-relaxed">
                I conducted a competitive evaluation of 8 healthcare and oncology platforms (including MyChart, Cancer.Net, Belong, and hospital portals) to identify what existing tools do well and where they fall short.
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-sm text-black uppercase tracking-wider">Research Goals:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 space-y-1">
                    <span className="text-xs font-bold text-[#00A3E0]">Goal 1</span>
                    <p className="text-xs text-gray-700">What existing apps do well that we can build upon.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 space-y-1">
                    <span className="text-xs font-bold text-[#00A3E0]">Goal 2</span>
                    <p className="text-xs text-gray-700">Where tools fall short in emotional support and caregiver features.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 space-y-1">
                    <span className="text-xs font-bold text-[#00A3E0]">Goal 3</span>
                    <p className="text-xs text-gray-700">How ChemoBuddy can be meaningfully different rather than redundant.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-sm text-black uppercase tracking-wider">7 Evaluation Dimensions:</h4>
                <div className="flex flex-wrap gap-2">
                  {['1. Onboarding', '2. Information Architecture', '3. Education Content', '4. Symptom Reporting', '5. Caregiver Features', '6. Visual Tone', '7. Accessibility'].map((dim, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-800">
                      {dim}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-bold text-sm text-black uppercase tracking-wider">Feature Benchmarking Artifact:</h4>
                <img src={imgImage30} alt="Competitive Analysis Matrix" className="w-full rounded-xl shadow-sm border border-gray-100" />
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" /></svg>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">Key Market Gap Identified</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Most existing tools act as rigid medical record depositories with zero conversational guidance, high medical terminology barriers, and complete absence of caregiver-controlled privacy controls.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: USER RESEARCH */}
          {activeTab === 'user-research' && (
            <div 
              role="tabpanel"
              id="panel-user-research"
              aria-labelledby="tab-user-research"
              tabIndex={0}
              className="space-y-6 bg-gray-50/60 p-6 lg:p-8 rounded-2xl border border-gray-100 animate-fade-in"
            >
              <div className="flex items-center justify-between border-b border-gray-200/80 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Qualitative Exploration</span>
                  <h3 className="font-['Inter'] font-bold text-xl text-black">Role-Play Research with Oncology Mentor</h3>
                </div>
                <span className="text-xs text-[#747474] font-medium bg-white px-3 py-1 rounded-full border border-gray-200">Week 4–5</span>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 p-5 rounded-xl text-amber-900 space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Research Integrity & Methodology Notice</span>
                <p className="text-sm leading-relaxed">
                  Because direct access to active chemotherapy patients or caregivers was not available due to clinical privacy restrictions, I conducted the user research phase under the ethical guidance of my oncology mentor, Dr. Umar.
                </p>
                <p className="text-sm leading-relaxed">
                  To ensure realism and clinical accuracy, I designed structured role-play sessions that mimicked authentic patient and caregiver interactions and decision-making moments during chemotherapy.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-sm text-black uppercase tracking-wider">Methodology — Survey Simulation:</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  I adapted my survey questions into a structured interview checklist and used them during the role-play sessions with Dr. Umar. This allowed me to collect qualitative insights without violating confidentiality or requiring real patient participation.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-sm text-black uppercase tracking-wider">Four Key Findings:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-gray-100 space-y-1.5">
                    <span className="text-xs font-bold text-[#00A3E0]">01 — CLEAR GUIDANCE</span>
                    <h5 className="font-bold text-black text-sm">Direct Action Guidance</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Patients prefer direct instructions ("Do this next") rather than being presented with multiple ambiguous choices.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 space-y-1.5">
                    <span className="text-xs font-bold text-[#00A3E0]">02 — VISUAL LEARNING</span>
                    <h5 className="font-bold text-black text-sm">Visual & Audio Media</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Video, infographics, and audio playback help low-energy users retain critical information during fatigue periods.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 space-y-1.5">
                    <span className="text-xs font-bold text-[#00A3E0]">03 — CAREGIVER CLARITY</span>
                    <h5 className="font-bold text-black text-sm">Dedicated Caregiver Space</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Caregivers need their own space with simplified summaries ("today's focus"), not full uncurated access.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 space-y-1.5">
                    <span className="text-xs font-bold text-[#00A3E0]">04 — COGNITIVE FATIGUE</span>
                    <h5 className="font-bold text-black text-sm">Information Fatigue is Real</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Dr. Umar conveyed that patients often stop listening after 5 minutes of heavy medical prose.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-100 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-black">Outcome</span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Although this research phase did not include real patient interviews, the collaboration with a clinical mentor allowed me to simulate authentic emotional and behavioral responses while maintaining research ethics and safety. The resulting insights became the foundation for persona creation and journey mapping in the next stage.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: DATA SYNTHESIS */}
          {activeTab === 'synthesis' && (
            <div 
              role="tabpanel"
              id="panel-synthesis"
              aria-labelledby="tab-synthesis"
              tabIndex={0}
              className="space-y-6 bg-gray-50/60 p-6 lg:p-8 rounded-2xl border border-gray-100 animate-fade-in"
            >
              <div className="flex items-center justify-between border-b border-gray-200/80 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Pattern Mapping</span>
                  <h3 className="font-['Inter'] font-bold text-xl text-black">Data Synthesis & Findings</h3>
                </div>
                <span className="text-xs text-[#747474] font-medium bg-white px-3 py-1 rounded-full border border-gray-200">Week 6–7</span>
              </div>

              <p className="font-['Inter'] text-[#484848] text-base leading-relaxed">
                After the role-play research, I transcribed observations, quotes, and pain points onto digital sticky notes in FigJam, then clustered them into five core themes.
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-sm text-black uppercase tracking-wider">5 Synthesised Pattern Clusters:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="bg-white p-3.5 rounded-xl border border-gray-100 space-y-1">
                    <span className="text-[10px] font-bold text-[#00A3E0]">Cluster 1</span>
                    <p className="text-xs font-semibold text-gray-900">Overwhelm & Fatigue</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-100 space-y-1">
                    <span className="text-[10px] font-bold text-[#00A3E0]">Cluster 2</span>
                    <p className="text-xs font-semibold text-gray-900">"Is this normal?" Confusion</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-100 space-y-1">
                    <span className="text-[10px] font-bold text-[#00A3E0]">Cluster 3</span>
                    <p className="text-xs font-semibold text-gray-900">Trust & Credibility</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-100 space-y-1">
                    <span className="text-[10px] font-bold text-[#00A3E0]">Cluster 4</span>
                    <p className="text-xs font-semibold text-gray-900">Caregiver Workload</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-100 space-y-1">
                    <span className="text-[10px] font-bold text-[#00A3E0]">Cluster 5</span>
                    <p className="text-xs font-semibold text-gray-900">Tech Accessibility</p>
                  </div>
                </div>
              </div>

              <SynthesisCarousel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Frame80() {

  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame79 />
      <Frame />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">{`Research goals `}</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">I wanted to answer four core questions</p>
        <ol className="list-decimal list-outside ml-5 css-8097nc" start={1}>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[normal]">How do chemotherapy patients currently receive education and support?</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[normal]">What are the documented gaps or failures in existing chemo education tools?</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[normal]">What has already been tried with digital health, symptom trackers, and AI chatbots?</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[normal]">What clinical risks and safety boundaries must I respect as a designer?</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">What I did</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[792px] whitespace-pre-wrap">
        <p className="mb-0">I reviewed 11 peer-reviewed journals and oncology studies focusing on:</p>
        <ol className="list-decimal list-outside ml-5 css-8097nc" start={1}>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[normal]">Mobile health (mHealth) apps for cancer patients</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[normal]">Symptom management and patient-reported outcomes</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[normal]">Digital education tools and their impact on adherence</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[normal]">Early experiments with chatbots and AI in oncology</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">Secondary research</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full whitespace-pre-wrap">Literature review (Week 1 - 2)</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">I started with a literature review to ground my work in existing oncology and digital health research, instead of relying on assumptions.</p>
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[498px] left-[calc(50%+0.5px)] top-[calc(50%+0.5px)] w-[880px]" data-name="image 112">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage112} />
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-start leading-[0] not-italic relative w-[228.284px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Personalized content delivery matters</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Patients absorb information better when it’s tailored to their specific regimen and stage, not when it’s generic.</p>
      </div>
    </div>
  );
}

function StickyNote7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[329.11px] inline-grid items-[start] justify-items-[start] ml-0 mt-[6.91px] relative row-1 w-[311.482px]" data-name="Sticky Note">
      <div className="col-1 flex h-[62.419px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[247.546px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[309.965px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="bg-[#fcffc5] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[184.504px] items-center justify-center ml-[28.43px] mt-[43.76px] relative row-1 w-[240.758px]" style={{ "--transform-inner-width": "1066.25", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <Frame112 />
        </div>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <StickyNote7 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start leading-[0] not-italic relative w-[228.283px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Real-time feedback reduces unnecessary hospital visits</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Symptom trackers that give clear “this is okay” vs “call your doctor now” guidance can prevent avoidable ER trips.</p>
      </div>
    </div>
  );
}

function StickyNote8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[314.962px] inline-grid items-[start] justify-items-[start] ml-0 mt-[9.07px] relative row-1 w-[296.281px]" data-name="Sticky Note">
      <div className="col-1 flex h-[49.792px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[245.972px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[295.764px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <div className="bg-[#ffdeeb] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[193.075px] items-center justify-center ml-[33.96px] mt-[39.2px] relative row-1 w-[233.233px]" style={{ "--transform-inner-width": "1223.046875", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <Frame113 />
        </div>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[346px] mt-[11.05px] relative row-1">
      <StickyNote8 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic relative w-[228.283px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Chatbots must operate within clear boundaries</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">They work best as educational and supportive tools, not as diagnostic engines. Clinical supervision is essential.</p>
      </div>
    </div>
  );
}

function StickyNote9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[337.317px] inline-grid items-[start] justify-items-[start] ml-0 mt-[8.28px] relative row-1 w-[320.356px]" data-name="Sticky Note">
      <div className="col-1 flex h-[70.054px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[248.176px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[318.231px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <div className="bg-[#c5f6ff] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[200.182px] items-center justify-center ml-[29.06px] mt-[45.73px] relative row-1 w-[246.359px]" style={{ "--transform-inner-width": "1141.109375", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <Frame114 />
        </div>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[675.64px] mt-[11.05px] relative row-1">
      <StickyNote9 />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group13 />
      <Group14 />
      <Group15 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#484848] text-[20px] w-[min-content] whitespace-pre-wrap">Findings from literature</p>
      <Group12 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame81 />
      <Frame1 />
      <Frame87 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">{`Research goals `}</p>
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start={1}>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">What are existing apps already doing well that I can learn from?</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Where do they fall short in terms of emotional support, education clarity, and caregiver involvement?</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[normal]">How can ChemoBuddy be meaningfully different rather than just another symptom tracker?</span>
        </li>
      </ol>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] not-italic relative shrink-0 text-black">What I did</p>
      <div className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[0] relative shrink-0 text-[#484848] w-[792px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.6] mb-0">I selected 8 apps to analyze, including - MyChart, Cancer.Net, Belong, and several symptom-tracking or hospital portal apps.</p>
        <p className="leading-[1.6] mb-0">&nbsp;</p>
        <p className="leading-[1.6] mb-0">For each app, I evaluated:</p>
        <ol className="list-decimal list-outside ml-5 css-8097nc" start={1}>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.6]">{` Onboarding experience (how easy it is to get started)`}</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.6]">Information architecture (where do I find “What is my chemo?”, “What should I expect?”)</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.6]">Education content (length, tone, format – video, text, etc.)</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.6]">Symptom reporting flows</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.6]">Presence (or absence) of caregiver features</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.6]">Visual tone (clinical, friendly, overwhelming?)</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[1.6]">Accessibility considerations (font size, contrast, complexity of language)</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">Secondary research</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[24px] text-black w-full whitespace-pre-wrap">{`Competitive analysis - Existing Oncology & Health Apps (Week 3)`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">Next, I wanted to understand what real patients currently experience when using digital tools.</p>
      <Frame25 />
      <Frame26 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">I captured this feature wise, marking which features existed, how visible they were, and how well they supported users in stressful situations.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[512px] left-1/2 top-[calc(50%+0.5px)] w-[911px]" data-name="image 30">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage30} />
      </div>
    </div>
  );
}

function ArrowsLeftRightToLineRegularFull() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="arrows-left-right-to-line-regular-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="arrows-left-right-to-line-regular-full">
          <path d={svgPaths.p3bb5d080} fill="var(--fill-0, #00A3E0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <ArrowsLeftRightToLineRegularFull />
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px not-italic relative text-[#00a3e0] text-[24px] whitespace-pre-wrap">Key gap identified</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-[#f9f9f9] relative rounded-[24px] shrink-0 w-[997px]">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[88px] py-[60px] relative rounded-[inherit] w-full">
        <Frame105 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#484848] text-[20px] w-[767px] whitespace-pre-wrap">I captured this feature wise, marking which features existed, how visible they were, and how well they supported users in stressful situations.</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_138px_39px_0px_rgba(0,0,0,0),0px_88px_35px_0px_rgba(0,0,0,0.01),0px_22px_22px_0px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame76 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame92 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame90 />
      <Frame2 />
      <Frame91 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">{`Research goals `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">The intent was to explore how a patient and caregiver might experience information overload, emotional stress, and uncertainty during treatment, and how a digital companion could meaningfully assist without overcomplicating their journey.</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] not-italic relative shrink-0 text-[20px] text-black">Methodology</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">{` User research`}</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[24px] text-black w-full whitespace-pre-wrap">Role-Play Testing with Oncology Mentor (Week 4-5)</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">Because I did not have direct access to chemotherapy patients or caregivers, I conducted the user research phase under the ethical guidance of my oncology mentor, Dr. Umar. To ensure realism and clinical accuracy, I designed structured role-play sessions that mimicked authentic patient, caregiver interactions and decision-making moments during chemotherapy.</p>
      <Frame27 />
      <Frame32 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[515px] left-[calc(50%+0.5px)] rounded-[24px] top-1/2 w-[826px]" data-name="image 30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[99.64%] left-[0.13%] max-w-none top-[0.54%] w-[100.18%]" src={imgImage31} />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Survey simulation</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">I adapted my survey questions into an interview checklist and used them during the role-play sessions. This allowed me to collect qualitative insights without violating confidentiality or requiring real patient participation.</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start leading-[0] not-italic relative w-[229.086px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Need for clear guidance</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Patients prefer direct instructions, “Do this next”, rather than multiple options.</p>
      </div>
    </div>
  );
}

function StickyNote10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[329.11px] inline-grid items-[start] justify-items-[start] ml-0 mt-[6.91px] relative row-1 w-[311.482px]" data-name="Sticky Note">
      <div className="col-1 flex h-[62.419px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[247.546px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[309.965px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="bg-[#fcffc5] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[130.736px] items-center justify-center ml-[22.55px] mt-[73.48px] relative row-1 w-[237.294px]" style={{ "--transform-inner-width": "733.953125", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <Frame118 />
        </div>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <StickyNote10 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[29px] items-start leading-[0] not-italic relative w-[228.656px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Visual learning matters</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Video and infographics would help low-energy users retain critical information.</p>
      </div>
    </div>
  );
}

function StickyNote11() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[314.962px] inline-grid items-[start] justify-items-[start] ml-0 mt-[9.07px] relative row-1 w-[296.281px]" data-name="Sticky Note">
      <div className="col-1 flex h-[49.792px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[245.972px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[295.764px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <div className="bg-[#ffdeeb] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[117.113px] items-center justify-center ml-[23.61px] mt-[74.95px] relative row-1 w-[231.56px]" style={{ "--transform-inner-width": "732.921875", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <Frame119 />
        </div>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[346.01px] mt-[11.05px] relative row-1">
      <StickyNote11 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative w-[228.888px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Caregiver clarity</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Caregivers need their own space not full access, with simplified summaries like “today’s focus” or “what to watch for.”</p>
      </div>
    </div>
  );
}

function StickyNote12() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[337.317px] inline-grid items-[start] justify-items-[start] ml-0 mt-[8.29px] relative row-1 w-[320.356px]" data-name="Sticky Note">
      <div className="col-1 flex h-[70.054px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[248.176px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[318.231px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <div className="bg-[#c5f6ff] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[166.458px] items-center justify-center ml-[23.01px] mt-[78.54px] relative row-1 w-[243.197px]" style={{ "--transform-inner-width": "966.875", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <Frame120 />
        </div>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[675.64px] mt-[11.04px] relative row-1">
      <StickyNote12 />
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group17 />
      <Group18 />
      <Group19 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start leading-[0] not-italic relative w-[228.284px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Information fatigue is real</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Dr. Umar conveyed that “patients often stop listening after five minutes of heavy information.” This confirmed that the app needed bite-sized, progressive education rather than long reading sessions.</p>
      </div>
    </div>
  );
}

function StickyNote13() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[329.11px] inline-grid items-[start] justify-items-[start] ml-0 mt-[6.91px] relative row-1 w-[311.482px]" data-name="Sticky Note">
      <div className="col-1 flex h-[62.419px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[247.546px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "1253.65625" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[309.965px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "1103.65625" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="bg-[#dfffcc] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[213.413px] items-center justify-center ml-[23.01px] mt-[55.18px] relative row-1 w-[243.047px]" style={{ "--transform-inner-width": "1280", "--transform-inner-height": "1141.671875" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <Frame121 />
        </div>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <StickyNote13 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#484848] text-[20px] w-[min-content] whitespace-pre-wrap">Key Findings</p>
      <Group16 />
      <Group20 />
    </div>
  );
}

function BadgeCheckSolidFull() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="badge-check-solid-full 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="badge-check-solid-full 1">
          <path d={svgPaths.p2c16bb00} fill="var(--fill-0, #00A3E0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <BadgeCheckSolidFull />
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px not-italic relative text-[#00a3e0] text-[24px] whitespace-pre-wrap">Outcome</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#f9f9f9] relative rounded-[24px] shrink-0 w-[997px]">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[88px] py-[60px] relative rounded-[inherit] w-full">
        <Frame104 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#484848] text-[20px] w-[767px] whitespace-pre-wrap">Although this research phase did not include real patient interviews, the collaboration with a clinical mentor allowed me to simulate authentic emotional and behavioral responses while maintaining research ethics and safety. The resulting insights became the foundation for persona creation and journey mapping in the next stage.</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_138px_39px_0px_rgba(0,0,0,0),0px_88px_35px_0px_rgba(0,0,0,0.01),0px_22px_22px_0px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame77 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame97 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame94 />
      <Frame3 />
      <Frame33 />
      <Frame95 />
      <Frame96 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">{` Data Synthesis & Findings`}</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full">Affinity Mapping</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">
        <p className="mb-0">I transcribed key quotes, pain points, and observations onto digital sticky notes in FigJam. Then I grouped them into clusters such as</p>
        <p className="mb-0">{`	1. Overwhelm & fatigue`}</p>
        <p className="mb-0">{`	2. “Is this normal?” symptom confusion`}</p>
        <p className="mb-0">{`	3. Trust and credibility`}</p>
        <p className="mb-0">{`	4. Caregiver “invisible workload”`}</p>
        <p>{`	5. Tech comfort and accessibility`}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[548px] left-[calc(50%-1.5px)] rounded-[24px] top-[calc(50%+0.5px)] w-[830px]" data-name="image 31">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[99.81%] left-[-0.27%] max-w-none top-[0.56%] w-[100.79%]" src={imgImage32} />
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame99 />
      <Frame4 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">{` Data Synthesis & Findings`}</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full">Personas</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">From the patterns identified during affinity mapping and mentor-led role-play sessions, I developed two key personas representing the primary users of ChemoBuddy, patients at different stages of chemotherapy with varying emotional, physical, and digital needs.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[481px] left-[calc(50%+0.5px)] rounded-[24px] top-1/2 w-[910px]" data-name="image 30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[101.61%] left-[-0.1%] max-w-none top-[-0.33%] w-[100.6%]" src={imgImage33} />
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[481px] left-[calc(50%+5.5px)] rounded-[24px] top-[calc(50%-14px)] w-[910px]" data-name="image 31">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[101.61%] left-[-0.1%] max-w-none top-[-0.33%] w-[100.6%]" src={imgImage34} />
        </div>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame102 />
      <Frame5 />
      <Frame103 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">{`Ideation & Concept Development`}</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full">Translating research insights into actionable design directions</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] text-[20px] w-full">
        <p className="leading-[normal] mb-0">{`Based on the research findings, I began ideation by using “How Might We” statements to frame challenges creatively. `}</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <ol className="list-decimal list-outside ml-5 css-8097nc" start={1}>
          <li className="mb-0 ms-[30px]">
            <span className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal]">How might we simplify the way chemotherapy information is presented?</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal]">How might we help patients identify emergency symptoms instantly?</span>
          </li>
          <li className="ms-[30px]">
            <span className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal]">How might we give caregivers controlled access to patient updates?</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[543px] left-[calc(50%+0.5px)] rounded-[24px] top-1/2 w-[800.422px]" data-name="image 31">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[99.07%] left-[-0.71%] max-w-none top-0 w-[101.55%]" src={imgImage35} />
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame108 />
      <Frame6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">After feedback from mentors, I merged these into one unified platform, ChemoBuddy, a mobile-first digital tool offering personalized learning, symptom tracking, and communication for both patients and caregivers.</p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">Design process</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full">Building an empathetic, accessible experience through iterative design</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] text-[20px] w-full">
        <p className="leading-[normal] mb-0">I structured the experience around five key stages</p>
        <ol className="list-decimal list-outside ml-5 css-8097nc" start={1}>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[normal]">Onboarding - Patients connect to Mayo Clinic’s system using a unique patient code, syncing treatment details automatically.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[normal]">{`Dashboard -  A visual overview of progress, upcoming appointments, and medication reminders.`}</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[normal]">Chatbot - An empathetic conversational interface that provides information, answers questions, and suggests educational resources.</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[normal]">Symptom Tracking - A body map where users log pain, fatigue, or nausea and receive immediate guidance or alerts for emergencies.</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[normal]">{`Profile & Caregiver Access -  Patients can manage privacy settings, control what caregivers can view, and share chat histories and progress reports securely.`}</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[997px]">
      <Frame123 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">Low fidelity wireframes</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full">From post-its to pixels - shaping the early experience</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">I started with sketches that emphasized minimal interaction steps and clear readability. Older patients often have limited digital comfort, so I focused on simple navigation and large visual elements.</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="absolute h-[504px] left-[92px] rounded-[24px] top-[80px] w-[839px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute h-[113.32%] left-[-7.09%] max-w-none top-[-10.12%] w-[112.7%]" src={imgWireframeGif} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-full">
      <Frame126 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame125 />
      <ChemoWireframesVideoPlayer />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Goal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">Simplify first-time setup and create an immediate sense of trust and safety.</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Key Features</p>
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start={1}>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Secure Login via Clinic Code: Patients enter a unique code provided by their oncology clinic to connect their treatment data securely through the hospital’s API.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Data Sync with Clinic Portal: The app automatically imports chemotherapy schedules, prescribed medications, and clinician notes.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[normal]">Progressive Disclosure: The onboarding flow introduces one feature at a time, reducing information overload.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">High fidelity prototypes</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full whitespace-pre-wrap">Onboarding - A Gentle Start to a Complex Journey</p>
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[318px] items-center left-[calc(50%+76.5px)] shadow-[0px_194px_54px_0px_rgba(0,0,0,0),0px_124px_50px_0px_rgba(0,0,0,0.01),0px_70px_42px_0px_rgba(0,0,0,0.05),0px_31px_31px_0px_rgba(0,0,0,0.09),0px_8px_17px_0px_rgba(0,0,0,0.1)] top-[316px] w-[144px]">
      <div className="h-[292px] relative shrink-0 w-[144px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone23} />
      </div>
    </div>
  );
}

export function Frame8() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <div className="absolute h-[288px] left-[81px] shadow-[0px_195px_55px_0px_rgba(0,0,0,0),0px_125px_50px_0px_rgba(0,0,0,0.01),0px_70px_42px_0px_rgba(0,0,0,0.05),0px_31px_31px_0px_rgba(0,0,0,0.09),0px_8px_17px_0px_rgba(0,0,0,0.1)] top-[22px] w-[144px]" data-name="iMockup - iPhone 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone20} />
      </div>
      <div className="absolute h-[288px] left-[233px] shadow-[0px_196px_55px_0px_rgba(0,0,0,0),0px_126px_50px_0px_rgba(0,0,0,0.01),0px_71px_42px_0px_rgba(0,0,0,0.05),0px_31px_31px_0px_rgba(0,0,0,0.09),0px_8px_17px_0px_rgba(0,0,0,0.1)] top-[22px] w-[144px]" data-name="iMockup - iPhone 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone24} />
      </div>
      <div className="absolute h-[288px] left-[81px] shadow-[0px_199px_56px_0px_rgba(0,0,0,0),0px_127px_51px_0px_rgba(0,0,0,0.01),0px_72px_43px_0px_rgba(0,0,0,0.05),0px_32px_32px_0px_rgba(0,0,0,0.09),0px_8px_18px_0px_rgba(0,0,0,0.1)] top-[331px] w-[144px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone14} />
      </div>
      <Frame62 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="absolute h-[524px] left-[99px] rounded-[31px] top-[72px] w-[260px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
        <img alt="" className="absolute h-[100.13%] left-[-7.98%] max-w-none top-[-0.13%] w-[112.23%]" src={imgOnboardingGif} />
      </div>
    </div>
  );
}

export function Frame134() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <Frame135 />
    </div>
  );
}

export function Frame129() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame134 />
    </div>
  );
}

export function Frame9() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[997px]">
      <div className="absolute h-[362px] left-[44.5px] top-[162px] w-[178px]" data-name="iMockup - iPhone 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone25} />
      </div>
      <div className="absolute h-[355px] left-[227.5px] top-[166px] w-[176px]" data-name="iMockup - iPhone 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone26} />
      </div>
      <div className="absolute h-[362px] left-[408.5px] top-[162px] w-[179px]" data-name="iMockup - iPhone 16">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone27} />
      </div>
      <div className="absolute h-[355px] left-[591.5px] top-[166px] w-[176px]" data-name="iMockup - iPhone 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone28} />
      </div>
      <div className="absolute h-[362px] left-[773.5px] top-[162px] w-[178px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone29} />
      </div>
    </div>
  );
}

export function Frame136() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

export function Frame10() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[997px]">
      <div className="absolute h-[339px] left-[44px] top-[157px] w-[167px]" data-name="iMockup - iPhone 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone30} />
      </div>
      <div className="absolute h-[339px] left-[225px] top-[157px] w-[170px]" data-name="iMockup - iPhone 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone31} />
      </div>
      <div className="absolute h-[347px] left-[410px] top-[153px] w-[172px]" data-name="iMockup - iPhone 16">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone32} />
      </div>
      <div className="absolute h-[339px] left-[597px] top-[157px] w-[169px]" data-name="iMockup - iPhone 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone33} />
      </div>
      <div className="absolute h-[347px] left-[780px] top-[153px] w-[174px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone34} />
      </div>
    </div>
  );
}

export function Frame137() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Design Rationale</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">Since users may be emotionally fragile during diagnosis, the onboarding focuses on empathy, calm pacing, and trust.</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame128 />
      <Frame129 />
      <Frame136 />
      <Frame137 />
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Goal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">Provide a clear, concise view of treatment progress, appointments, and daily health actions.</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Key Features</p>
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start={1}>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Treatment Timeline - Displays completed and upcoming chemo cycles using a circular progress tracker.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Daily Check-ins - Cards for “How are you feeling today?” prompt quick symptom logging.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Medication Reminders - Smart notifications based on medication timing and side-effect patterns.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[normal]">Upcoming Appointments - Auto-synced from clinic portal with options to set personal reminders.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">High fidelity prototypes</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full whitespace-pre-wrap">{`Dashboard - Personalized Overview of Treatment & Daily Tasks`}</p>
      <Frame37 />
      <Frame38 />
    </div>
  );
}

export function Frame11() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[997px]">
      <div className="absolute h-[551px] left-[212.5px] shadow-[0px_261px_73px_0px_rgba(0,0,0,0),0px_167px_67px_0px_rgba(0,0,0,0.01),0px_94px_56px_0px_rgba(0,0,0,0.05),0px_42px_42px_0px_rgba(0,0,0,0.09),0px_10px_23px_0px_rgba(0,0,0,0.1)] top-[69px] w-[274px]" data-name="iMockup - iPhone 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone35} />
      </div>
      <div className="absolute h-[551px] left-[588.5px] shadow-[0px_306px_86px_0px_rgba(0,0,0,0),0px_196px_78px_0px_rgba(0,0,0,0.01),0px_110px_66px_0px_rgba(0,0,0,0.05),0px_49px_49px_0px_rgba(0,0,0,0.09),0px_12px_27px_0px_rgba(0,0,0,0.1)] top-[69px] w-[272px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone13} />
      </div>
      <p className="absolute font-['Caveat_Brush:Regular',sans-serif] leading-[normal] left-[270px] not-italic text-[#484848] text-[20px] top-[26px]">Unsynced Dashboard</p>
      <p className="absolute font-['Caveat_Brush:Regular',sans-serif] leading-[normal] left-[652px] not-italic text-[#484848] text-[20px] top-[26px]">Synced Dashboard</p>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Design Rationale</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">The dashboard serves as the “home base” for patients who may have limited energy. It combines clinical data with emotional support elements, using iconography and gentle color accents to guide attention.</p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame139 />
      <Frame140 />
      <Frame39 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Goal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">Deliver accessible education and emotional reassurance through a conversational interface.</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Key Features</p>
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start={1}>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Multimodal Responses - The chatbot answers with text, audio summaries, or short videos depending on the user’s preference and energy level.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Context-Aware Replies - Recognises treatment phase and symptom severity to tailor responses.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Red Flag Detection - Automatically identifies critical keywords like “chest pain,” “fever 104°F,” or “dizziness” and escalates with a message such as “This may require medical attention, would you like to contact your care team?”</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Emotional Adaptation - Uses sentiment detection to adjust tone, supportive and calm when users express worry, concise and factual for simple questions.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[normal]">Verified Responses - Sources all information from Mayo Clinic and NCCN oncology guidelines to maintain clinical credibility.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">High fidelity prototypes</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full whitespace-pre-wrap">Chatbot - Empathetic, Context-Aware Support</p>
      <Frame40 />
      <Frame41 />
    </div>
  );
}

export function Frame12() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <div className="absolute h-[347px] left-[39px] shadow-[0px_225px_63px_0px_rgba(0,0,0,0),0px_144px_57px_0px_rgba(0,0,0,0.01),0px_81px_49px_0px_rgba(0,0,0,0.05),0px_36px_36px_0px_rgba(0,0,0,0.09),0px_9px_20px_0px_rgba(0,0,0,0.1)] top-[-34px] w-[172px]" data-name="iMockup - iPhone 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone15} />
      </div>
      <div className="absolute h-[347px] left-[247px] shadow-[0px_219px_61px_0px_rgba(0,0,0,0),0px_140px_56px_0px_rgba(0,0,0,0.01),0px_79px_47px_0px_rgba(0,0,0,0.05),0px_35px_35px_0px_rgba(0,0,0,0.09),0px_9px_19px_0px_rgba(0,0,0,0.1)] top-[-34px] w-[171px]" data-name="iMockup - iPhone 16">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone36} />
      </div>
      <div className="absolute h-[347px] left-[38px] shadow-[0px_187px_52px_0px_rgba(0,0,0,0),0px_120px_48px_0px_rgba(0,0,0,0.01),0px_67px_40px_0px_rgba(0,0,0,0.05),0px_30px_30px_0px_rgba(0,0,0,0.09),0px_7px_16px_0px_rgba(0,0,0,0.1)] top-[337px] w-[173px]" data-name="iMockup - iPhone 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone37} />
      </div>
      <div className="absolute h-[348px] left-[247px] shadow-[0px_208px_58px_0px_rgba(0,0,0,0),0px_133px_53px_0px_rgba(0,0,0,0.01),0px_75px_45px_0px_rgba(0,0,0,0.05),0px_33px_33px_0px_rgba(0,0,0,0.09),0px_8px_18px_0px_rgba(0,0,0,0.1)] top-[337px] w-[172px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone16} />
      </div>
    </div>
  );
}

function Frame145() {
  return (
    <div className="absolute h-[506px] left-[81px] rounded-[38px] top-[80px] w-[252px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[38px]">
        <img alt="" className="absolute h-full left-[0.11%] max-w-none top-0 w-[99.77%]" src={imgChatbotGif} />
      </div>
    </div>
  );
}

export function Frame144() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <Frame145 />
    </div>
  );
}

export function Frame143() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame144 />
    </div>
  );
}

export function Frame13() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[997px]">
      <div className="absolute h-[432px] left-[48.5px] shadow-[0px_194px_54px_0px_rgba(0,0,0,0),0px_124px_50px_0px_rgba(0,0,0,0.01),0px_70px_42px_0px_rgba(0,0,0,0.05),0px_31px_31px_0px_rgba(0,0,0,0.09),0px_8px_17px_0px_rgba(0,0,0,0.1)] top-[117px] w-[213px]" data-name="iMockup - iPhone 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone38} />
      </div>
      <div className="absolute h-[432px] left-[276.5px] shadow-[0px_192px_54px_0px_rgba(0,0,0,0),0px_123px_49px_0px_rgba(0,0,0,0.01),0px_69px_42px_0px_rgba(0,0,0,0.05),0px_31px_31px_0px_rgba(0,0,0,0.09),0px_8px_17px_0px_rgba(0,0,0,0.1)] top-[117px] w-[213px]" data-name="iMockup - iPhone 18">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone39} />
      </div>
      <div className="absolute h-[432px] left-[504.5px] shadow-[0px_198px_55px_0px_rgba(0,0,0,0),0px_126px_51px_0px_rgba(0,0,0,0.01),0px_71px_43px_0px_rgba(0,0,0,0.05),0px_32px_32px_0px_rgba(0,0,0,0.09),0px_8px_17px_0px_rgba(0,0,0,0.1)] top-[117px] w-[213px]" data-name="iMockup - iPhone 19">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone40} />
      </div>
      <div className="-translate-x-1/2 absolute h-[432px] left-[calc(50%+340.5px)] shadow-[0px_188px_53px_0px_rgba(0,0,0,0),0px_120px_48px_0px_rgba(0,0,0,0.01),0px_68px_41px_0px_rgba(0,0,0,0.05),0px_30px_30px_0px_rgba(0,0,0,0.09),0px_8px_17px_0px_rgba(0,0,0,0.1)] top-[117px] w-[213px]" data-name="iMockup - iPhone 20">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone41} />
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

export function Frame14() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[997px]">
      <div className="absolute h-[535px] left-[73px] top-[153px] w-[265px]" data-name="iMockup - iPhone 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone42} />
      </div>
      <div className="absolute h-[534px] left-[367px] top-[153px] w-[265px]" data-name="iMockup - iPhone 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone43} />
      </div>
      <div className="absolute h-[535px] left-[661px] top-[153px] w-[264px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone44} />
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Design Rationale</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">During testing, users ( Mayo clinic mentor’s) valued reassurance as much as accuracy. The chatbot was designed with “compassion first” principles, using plain language, white space, and a steady color palette. When urgent conditions arise, the UI shifts subtly (soft red highlight) to differentiate emergency messages from regular conversation.</p>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame142 />
      <Frame143 />
      <Frame146 />
      <Frame147 />
      <Frame42 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Goal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">Help patients record symptoms quickly, identify trends, and distinguish normal vs. critical conditions.</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Key Features</p>
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start={1}>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Interactive Body Map - Patients tap on body zones (e.g., head, stomach, limbs) to log symptoms visually.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Severity Slider - Simple 1–5 scale with color-coded feedback (green to red) for intensity.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Pattern Recognition - AI engine detects recurring patterns, e.g., nausea peaks post-infusion, and provides suggestions or flags for review.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Photo Capture - Option to attach pictures for visual symptoms like rashes or swelling.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[normal]">Symptom History Graph - Displays trends over time, linking data to treatment dates for better medical tracking.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">High fidelity prototypes</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full whitespace-pre-wrap">Symptom Tracking - Simplifying Self-Monitoring Through Visual Design</p>
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <div className="absolute h-[339px] left-[54px] top-[-24px] w-[168px]" data-name="iMockup - iPhone 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone45} />
      </div>
      <div className="absolute h-[339px] left-[235px] top-[-24px] w-[168px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone46} />
      </div>
      <div className="absolute h-[338px] left-[54px] top-[337px] w-[168px]" data-name="iMockup - iPhone 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone47} />
      </div>
      <div className="absolute h-[338px] left-[235px] top-[337px] w-[168px]" data-name="iMockup - iPhone 16">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone48} />
      </div>
    </div>
  );
}

function Frame152() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[491px] left-[calc(50%+0.5px)] rounded-[35px] top-1/2 w-[244px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[35px]">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-[-0.01%] w-full" src={imgChatHistoryGif} />
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <Frame152 />
    </div>
  );
}

export function Frame150() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame151 />
    </div>
  );
}

export function Frame16() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[997px]">
      <div className="absolute h-[419px] left-[51.5px] top-[111px] w-[208px]" data-name="iMockup - iPhone 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone49} />
      </div>
      <div className="absolute h-[419px] left-[274.5px] top-[111px] w-[207px]" data-name="iMockup - iPhone 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone50} />
      </div>
      <div className="absolute h-[419px] left-[496.5px] top-[111px] w-[207px]" data-name="iMockup - iPhone 16">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone51} />
      </div>
      <div className="absolute h-[419px] left-[718.5px] top-[111px] w-[208px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone52} />
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

export function Frame17() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[997px]">
      <div className="absolute h-[524px] left-[85px] top-[64px] w-[260px]" data-name="iMockup - iPhone 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone53} />
      </div>
      <div className="absolute h-[524px] left-[369px] top-[64px] w-[260px]" data-name="iMockup - iPhone 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone54} />
      </div>
      <div className="absolute h-[524px] left-[653px] top-[64px] w-[260px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone55} />
      </div>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Design Rationale</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">
        <p className="mb-0">Many patients reported feeling uncertain about what’s “normal.” The tracking system uses visual metaphors and immediate feedback to reduce fear.</p>
        <p>A “yellow warning” message appears for moderate symptoms (“Monitor closely”), while “red warnings” trigger the chatbot’s emergency flow.</p>
      </div>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame149 />
      <Frame150 />
      <Frame153 />
      <Frame154 />
      <Frame45 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Goal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">Empower patients to decide who sees their data while ensuring caregivers remain informed.</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Key Features</p>
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start={1}>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Caregiver Dashboard - Allows patients to invite caregivers (e.g., family, spouse) via secure link or code.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Role-Based Permissions</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Primary caregiver - Can view appointments, daily summaries, and chat history.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Secondary caregiver - Can view limited summaries such as reminders or hydration alerts.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Toggle-Based Controls - Patients can enable or disable data sharing instantly (e.g., “Share symptom updates: ON/OFF”).</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[normal]">Privacy Alerts - Notifications remind users who currently has viewing access.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">High fidelity prototypes</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full whitespace-pre-wrap">{`Caregiver Access - Controlled Sharing for Safety & Support`}</p>
      <Frame46 />
      <Frame47 />
    </div>
  );
}

export function Frame18() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[997px]">
      <div className="absolute h-[545px] left-[239.5px] top-[53px] w-[269px]" data-name="iMockup - iPhone 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone21} />
      </div>
      <div className="absolute h-[545px] left-[533.5px] top-[53px] w-[270px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone22} />
      </div>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Design Rationale</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">Caregivers play a crucial role but must not compromise patient autonomy. The profile system ensures transparent, consent-based sharing, building trust while lightening the caregiver’s invisible workload.</p>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame156 />
      <Frame157 />
      <Frame48 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Testing setup</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">I conducted three usability sessions, one with oncology mentor Dr. Umar and two with role-playing participants (patient and caregiver). The think-aloud method was used to capture spontaneous feedback.</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Tasks Tested</p>
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start={1}>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Complete onboarding and verify data sync.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Ask chatbot about treatment side effects.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Log a symptom and confirm submission.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[normal]">Access educational resources for fatigue.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">User testing</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full whitespace-pre-wrap">Listening, learning, and improving - shaping care through feedback</p>
      <Frame49 />
      <Frame51 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[35px] items-start justify-center relative shrink-0 text-[#2b2b2b] text-[18px] w-full">
      <p className="relative shrink-0 w-full">That chat feels crowded</p>
      <p className="relative shrink-0 w-full">I’m not sure if my data is synced</p>
      <p className="relative shrink-0 w-full">If I report fever, I should be warned instantly</p>
      <p className="relative shrink-0 w-full">I prefer listening to reading</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[430px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[20px] text-black w-full">Feedback</p>
      <Frame63 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[35px] items-start relative shrink-0 text-[#2b2b2b] text-[18px] w-full">
      <p className="relative shrink-0 w-full">{`Text-heavy layout increases fatigue `}</p>
      <p className="relative shrink-0 w-full">Unclear system feedback</p>
      <p className="relative shrink-0 w-full">Safety expectation unmet</p>
      <p className="relative shrink-0 w-full">Accessibility preferences</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[241px] items-start relative shrink-0 w-[334px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[20px] text-black w-full">Insights</p>
      <Frame65 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute content-stretch flex gap-[64px] items-center leading-[normal] left-0 not-italic top-0 whitespace-pre-wrap">
      <Frame64 />
      <Frame66 />
    </div>
  );
}

function Frame68() {
  const rows = [
    {
      feedback: "That chat feels crowded",
      insight: "Text-heavy layout increases fatigue",
    },
    {
      feedback: "I’m not sure if my data is synced",
      insight: "Unclear system feedback",
    },
    {
      feedback: "If I report fever, I should be warned instantly",
      insight: "Safety expectation unmet",
    },
    {
      feedback: "I prefer listening to reading",
      insight: "Accessibility preferences",
    },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-2xs">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100/90 border-b border-gray-200 p-4 font-['Inter'] font-bold text-sm text-black">
        <div>Feedback</div>
        <div className="hidden md:block">Insights</div>
      </div>
      <div className="divide-y divide-gray-200/80">
        {rows.map((row, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 p-4 gap-2 md:gap-4 hover:bg-gray-50/80 transition-colors font-['Inter']">
            <div className="text-gray-800 text-sm font-medium italic">
              “{row.feedback}”
            </div>
            <div className="text-gray-700 text-sm font-semibold flex items-center gap-1.5">
              <span className="md:hidden text-xs font-bold text-gray-400 uppercase">Insight: </span>
              {row.insight}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Frame69() {
  return <div className="absolute backdrop-blur-[1.05px] bg-[rgba(255,255,255,0.2)] h-[173px] left-[113px] top-[93px] w-[231px]" />;
}

function Frame19() {
  return (
    <div className="bg-[rgba(214,186,186,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <div className="absolute h-[551px] left-[92px] top-[50px] w-[273px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone56} />
      </div>
      <Frame69 />
    </div>
  );
}

function Frame70() {
  return <div className="absolute backdrop-blur-[1.05px] bg-[rgba(255,255,255,0.2)] h-[173px] left-[113px] top-[93px] w-[231px]" />;
}

function Frame162() {
  return (
    <div className="bg-[rgba(189,214,186,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <div className="-translate-x-1/2 absolute h-[551px] left-[calc(50%+0.5px)] top-[50px] w-[274px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone42} />
      </div>
      <Frame70 />
    </div>
  );
}

export function Frame161() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame162 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Design Rationale</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">Enhanced the user interface by incorporating additional whitespace, which improves readability and visual appeal. Additionally, I have introduced alternating message colors to create a more dynamic and engaging experience for users.</p>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
      <Frame161 />
      <Frame53 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[rgba(214,186,186,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <div className="absolute h-[551px] left-[92px] top-[50px] w-[273px]" data-name="iMockup - iPhone 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone57} />
      </div>
    </div>
  );
}

function Frame165() {
  return (
    <div className="bg-[rgba(189,214,186,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <div className="-translate-x-1/2 absolute h-[551px] left-[calc(50%+0.5px)] shadow-[0px_306px_86px_0px_rgba(0,0,0,0),0px_196px_78px_0px_rgba(0,0,0,0.01),0px_110px_66px_0px_rgba(0,0,0,0.05),0px_49px_49px_0px_rgba(0,0,0,0.09),0px_12px_27px_0px_rgba(0,0,0,0.1)] top-[50px] w-[272px]" data-name="iMockup - iPhone 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone13} />
      </div>
    </div>
  );
}

export function Frame164() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame165 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Design Rationale</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">{`Introduced a new animated confirmation message that displays: "Synced 2 hours ago." This feature enhances the user experience by providing clear feedback on the synchronisation status.`}</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
      <Frame164 />
      <Frame54 />
    </div>
  );
}

function Frame168() {
  return <div className="absolute backdrop-blur-[1.05px] bg-[rgba(255,255,255,0.2)] h-[157px] left-[111px] top-[94px] w-[231px]" />;
}

function Frame21() {
  return (
    <div className="bg-[rgba(214,186,186,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <div className="absolute h-[551px] left-[92px] top-[50px] w-[273px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone58} />
      </div>
      <Frame168 />
    </div>
  );
}

function Frame170() {
  return <div className="-translate-x-1/2 absolute backdrop-blur-[1.05px] bg-[rgba(255,255,255,0.2)] h-[62px] left-1/2 top-[94px] w-[231px]" />;
}

function Frame169() {
  return (
    <div className="bg-[rgba(189,214,186,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <div className="-translate-x-1/2 absolute h-[551px] left-[calc(50%+0.5px)] top-[50px] w-[274px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone43} />
      </div>
      <Frame170 />
    </div>
  );
}

export function Frame167() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame169 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Design Rationale</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">Successfully integrated advanced NLP-based emergency detection systems, which now include user-friendly alert buttons designed for quick access in critical situations.</p>
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
      <Frame167 />
      <Frame55 />
    </div>
  );
}

function Frame173() {
  return <div className="absolute backdrop-blur-[1.05px] bg-[rgba(255,255,255,0.2)] h-[189px] left-[113px] top-[101px] w-[231px]" />;
}

function Frame22() {
  return (
    <div className="bg-[rgba(214,186,186,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <div className="-translate-x-1/2 absolute h-[551px] left-1/2 top-[50px] w-[273px]" data-name="iMockup - iPhone 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone59} />
      </div>
      <Frame173 />
    </div>
  );
}

function Frame175() {
  return <div className="-translate-x-1/2 absolute backdrop-blur-[1.05px] bg-[rgba(255,255,255,0.2)] h-[58px] left-[calc(50%+0.5px)] top-[92px] w-[231px]" />;
}

function Frame174() {
  return (
    <div className="bg-[rgba(189,214,186,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <div className="-translate-x-1/2 absolute h-[551px] left-[calc(50%+0.5px)] shadow-[0px_187px_52px_0px_rgba(0,0,0,0),0px_120px_48px_0px_rgba(0,0,0,0.01),0px_67px_40px_0px_rgba(0,0,0,0.05),0px_30px_30px_0px_rgba(0,0,0,0.09),0px_7px_16px_0px_rgba(0,0,0,0.1)] top-[50px] w-[275px]" data-name="iMockup - iPhone 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIMockupIPhone37} />
      </div>
      <Frame175 />
    </div>
  );
}

export function Frame172() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Frame174 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Design Rationale</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">Introduced audio summaries for every section, allowing you to listen to the key points and insights conveniently. This feature enhances experience by providing a quick and engaging way to absorb the information.</p>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
      <Frame172 />
      <Frame56 />
    </div>
  );
}

function UsabilityTestingTabs() {
  const [activeTab, setActiveTab] = useState<string>("iter-1");
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [

    {
      id: "iter-1",
      label: "V1: Chat Interface",
      shortName: "1. Chat Layout",
      badge: "Readability",
      feedback: "“That chat feels crowded”",
      insight: "Text-heavy layout increases cognitive fatigue",
      rationale: "Enhanced the user interface by incorporating additional whitespace, which improves readability and visual appeal. Introduced alternating message colors to create a more dynamic and engaging experience for users.",
      renderScreens: () => <Frame161 />,
    },
    {
      id: "iter-2",
      label: "V2: Data Sync Status",
      shortName: "2. Sync Status",
      badge: "Feedback",
      feedback: "“I’m not sure if my data is synced”",
      insight: "Unclear system feedback creates patient anxiety",
      rationale: "Introduced a new animated confirmation message that displays: 'Synced 2 hours ago.' This feature enhances the user experience by providing clear feedback on the synchronisation status.",
      renderScreens: () => <Frame164 />,
    },
    {
      id: "iter-3",
      label: "V3: Emergency Alert",
      shortName: "3. Red-Flag Alerts",
      badge: "Safety",
      feedback: "“If I report fever, I should be warned instantly”",
      insight: "Safety expectation unmet without immediate triaging",
      rationale: "Successfully integrated advanced NLP-based emergency detection systems, which now include user-friendly alert buttons designed for quick access in critical situations.",
      renderScreens: () => <Frame167 />,
    },
    {
      id: "iter-4",
      label: "V4: Audio Care",
      shortName: "4. Audio Narration",
      badge: "Accessibility",
      feedback: "“I prefer listening to reading”",
      insight: "Low-energy patient days require multimodal audio access",
      rationale: "Introduced audio summaries for every section, allowing users to listen to key points conveniently. This feature enhances experience by providing a quick and engaging way to absorb information during fatigue.",
      renderScreens: () => <Frame172 />,
    },
  ];

  const currentTabIdx = tabs.findIndex((t) => t.id === activeTab);
  const currentTab = tabs[currentTabIdx >= 0 ? currentTabIdx : 0];

  const handlePrevTab = () => {
    if (currentTabIdx > 0) {
      setActiveTab(tabs[currentTabIdx - 1].id);
    }
  };

  const handleNextTab = () => {
    if (currentTabIdx < tabs.length - 1) {
      setActiveTab(tabs[currentTabIdx + 1].id);
    }
  };

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsContainerRef.current) {
      const scrollAmount = direction === "left" ? -180 : 180;
      tabsContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div id="nav-testing" className="w-full flex flex-col gap-8 my-4">
      {/* Usability Testing Section Header */}
      <div className="content-stretch flex flex-col gap-4 items-start justify-center not-italic relative shrink-0 w-full">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#484848] text-[20px]">
            User testing
          </p>
        </div>
        <h2 className="font-['Inter:Bold',sans-serif] font-bold text-2xl sm:text-3xl text-black leading-snug">
          Listening, learning, and improving — shaping care through feedback
        </h2>
        <Frame49 />
        <Frame51 />
      </div>

      {/* Interactive Tabs Header Bar (Clean without arrows) */}
      <div className="flex items-center gap-2 p-1.5 bg-gray-100/90 backdrop-blur-md rounded-2xl border border-gray-200/80 overflow-x-auto scrollbar-none w-full">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-black text-white shadow-md"
                  : "text-gray-600 hover:text-black hover:bg-white/70"
              }`}
            >
              <span>{tab.label}</span>
              {isActive && (
                <motion.span
                  layoutId="activeUserTestingTabBadge"
                  className="px-2 py-0.5 text-[10px] uppercase font-extrabold rounded-full bg-amber-400 text-black ml-1"
                >
                  {tab.badge}
                </motion.span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display Container */}
      <div className="w-full min-h-[500px]">
        <AnimatePresence mode="wait">

            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full space-y-8"
            >
              {/* Feedback & Insight Callout Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1">
                    User Feedback
                  </span>
                  <p className="font-['Inter'] font-bold text-lg text-amber-950 italic">
                    {currentTab.feedback}
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-sky-50/70 border border-sky-200/80 flex flex-col justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-800 mb-1">
                    UX Design Insight
                  </span>
                  <p className="font-['Inter'] font-semibold text-base text-sky-950">
                    {currentTab.insight}
                  </p>
                </div>
              </div>

              {/* Before vs After Screen Mockups Showcase */}
              <div className="space-y-4">
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Before vs. After Iteration Mockups
                  </span>
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-rose-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" /> Initial Test
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Refined Solution
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-gray-50/60 rounded-2xl border border-gray-100 shadow-inner flex justify-center">
                  {currentTab.renderScreens && currentTab.renderScreens()}
                </div>
              </div>

              {/* Design Rationale Card */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-2">
                <h4 className="font-['Inter'] font-bold text-lg text-black flex items-center gap-2">
                  <Sparkles size={18} className="text-amber-500" />
                  Design Rationale & Impact
                </h4>
                <p className="font-['Inter'] text-gray-700 text-base leading-relaxed">
                  {currentTab.rationale}
                </p>
              </div>
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[997px]">
      <UsabilityTestingTabs />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black">Key findings</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap">From these simulated interactions and expert feedback, several patterns emerged</p>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">Learnings</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full whitespace-pre-wrap">What the process taught me about designing for trust and vulnerability</p>
      <Frame57 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic relative w-[230.999px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Empathy is measurable</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Small choices like whitespace and supportive tone influence emotional outcomes.</p>
      </div>
    </div>
  );
}

function StickyNote14() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[329.11px] inline-grid items-[start] justify-items-[start] ml-0 mt-[6.91px] relative row-1 w-[311.482px]" data-name="Sticky Note">
      <div className="col-1 flex h-[62.419px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[247.546px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[309.965px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="bg-[#fcffc5] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[139.859px] items-center justify-center ml-[23.01px] mt-[88.33px] relative row-1 w-[239.911px]" style={{ "--transform-inner-width": "758.015625", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <Frame179 />
        </div>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <StickyNote14 />
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start leading-[0] not-italic relative w-[230.135px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Progressive disclosure works</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Breaking information into smaller, contextual layers helps patients process complex data.</p>
      </div>
    </div>
  );
}

function StickyNote15() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[314.962px] inline-grid items-[start] justify-items-[start] ml-0 mt-[9.07px] relative row-1 w-[296.281px]" data-name="Sticky Note">
      <div className="col-1 flex h-[49.792px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[245.972px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[295.764px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <div className="bg-[#ffdeeb] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[141.144px] items-center justify-center ml-[25.1px] mt-[87.03px] relative row-1 w-[233.685px]" style={{ "--transform-inner-width": "851.6875", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.54deg]">
          <Frame180 />
        </div>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[346.1px] mt-[11.04px] relative row-1">
      <StickyNote15 />
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start leading-[0] not-italic relative w-[232.418px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Accessibility expands reach</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Inclusive design supports patients of different ages and energy levels.</p>
      </div>
    </div>
  );
}

function StickyNote16() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[337.317px] inline-grid items-[start] justify-items-[start] ml-0 mt-[8.28px] relative row-1 w-[320.356px]" data-name="Sticky Note">
      <div className="col-1 flex h-[70.054px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[248.176px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "366" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[318.231px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "216" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <div className="bg-[#c5f6ff] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[143.99px] items-center justify-center ml-[23.01px] mt-[81.17px] relative row-1 w-[244.16px]" style={{ "--transform-inner-width": "705.859375", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.35deg]">
          <Frame181 />
        </div>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[675.72px] mt-[11.05px] relative row-1">
      <StickyNote16 />
    </div>
  );
}

function Group21() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group22 />
      <Group23 />
      <Group24 />
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start leading-[0] not-italic relative w-[229.772px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#484848] text-[18.41px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Collaboration ensures credibility</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16.569px] text-black w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Continuous feedback from medical mentors validated the safety and practicality of each feature.</p>
      </div>
    </div>
  );
}

function StickyNote17() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[329.11px] inline-grid items-[start] justify-items-[start] ml-0 mt-[6.91px] relative row-1 w-[311.482px]" data-name="Sticky Note">
      <div className="col-1 flex h-[62.419px] items-center justify-center ml-[21.61px] mt-[264.1px] relative row-1 w-[247.546px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "1256.828125" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="h-[43.217px] relative w-[244.898px]" data-name="Shadow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Shadow" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[309.965px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "1106.828125" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <div className="bg-[#dfffcc] shadow-[0px_13.557px_13.557px_0px_rgba(0,0,0,0.25)] size-[288.115px]" data-name="Background" />
        </div>
      </div>
      <div className="col-1 flex h-[159.699px] items-center justify-center ml-[23.94px] mt-[74.67px] relative row-1 w-[240.267px]" style={{ "--transform-inner-width": "929.28125", "--transform-inner-height": "1125.828125" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.53deg]">
          <Frame182 />
        </div>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <StickyNote17 />
    </div>
  );
}

function KeyFindingsStickyNotes() {
  const [activeNote, setActiveNote] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const noteVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const findings = [
    {
      id: "empathy",
      title: "Empathy is measurable",
      description: "Small choices like whitespace and supportive tone directly influence patient emotional outcomes.",
      badge: "01",
      initialRotate: "-rotate-2",
      badgeColor: "bg-amber-200/80 text-amber-900 border-amber-300",
      bgColor: "bg-gradient-to-br from-[#FFFDE7] via-[#FFF9C4] to-[#FFF59D]",
      borderColor: "border-[#FBC02D]/40",
      accentDot: "bg-[#F57F17]",
      detailText: "💡 Validated through user testing where calm micro-copy reduced reported anxiety during symptom logging.",
    },
    {
      id: "disclosure",
      title: "Progressive disclosure works",
      description: "Breaking information into smaller, contextual layers helps patients process complex medical data.",
      badge: "02",
      initialRotate: "rotate-1",
      badgeColor: "bg-rose-200/80 text-rose-900 border-rose-300",
      bgColor: "bg-gradient-to-br from-[#FCE4EC] via-[#F8BBD0] to-[#F48FB1]/70",
      borderColor: "border-[#E91E63]/30",
      accentDot: "bg-[#C2185B]",
      detailText: "💡 Layered information architecture prevents cognitive overwhelm during initial chemotherapy onboarding.",
    },
    {
      id: "accessibility",
      title: "Accessibility expands reach",
      description: "Inclusive design supports patients of different ages, cognitive loads, and physical energy levels.",
      badge: "03",
      initialRotate: "rotate-2",
      badgeColor: "bg-sky-200/80 text-sky-900 border-sky-300",
      bgColor: "bg-gradient-to-br from-[#E0F7FA] via-[#B2EBF2] to-[#80DEEA]/70",
      borderColor: "border-[#00BCD4]/40",
      accentDot: "bg-[#0097A7]",
      detailText: "💡 High-contrast modes, large tap targets, and audio narration assist users experiencing chemo-fog or fatigue.",
    },
    {
      id: "collaboration",
      title: "Collaboration ensures credibility",
      description: "Continuous feedback from medical mentors validated the safety and clinical practicality of each feature.",
      badge: "04",
      initialRotate: "-rotate-1",
      badgeColor: "bg-emerald-200/80 text-emerald-900 border-emerald-300",
      bgColor: "bg-gradient-to-br from-[#F1F8E9] via-[#DCEDC8] to-[#C5E1A5]/70",
      borderColor: "border-[#8BC34A]/40",
      accentDot: "bg-[#33691E]",
      detailText: "💡 Regular reviews with Mayo Clinic mentors ensured clinical terminology remained accurate and reassuring.",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="w-full my-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 pb-2">
        {findings.map((item, index) => {
          const isActive = activeNote === index;
          return (
            <motion.div
              key={item.id}
              variants={noteVariants}
              whileHover={{ rotate: 0, y: -10, scale: 1.03 }}
              onClick={() => setActiveNote(isActive ? null : index)}
              className={`relative cursor-pointer transition-all duration-300 group ${item.initialRotate}`}
            >
              {/* Top Washi Tape Header */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 w-16 h-3.5 bg-white/70 backdrop-blur-md border border-white/80 shadow-2xs rounded-xs transform -rotate-1 group-hover:rotate-0 transition-transform flex items-center justify-between px-1.5">
                <div className={`w-1 h-1 rounded-full ${item.accentDot}`} />
                <div className={`w-1 h-1 rounded-full ${item.accentDot}`} />
              </div>

              {/* Main Sticky Note Card */}
              <div
                className={`relative flex flex-col justify-between p-6 rounded-2xl border shadow-md hover:shadow-2xl transition-all duration-300 ${item.bgColor} ${item.borderColor}`}
                style={{
                  minHeight: "260px",
                  boxShadow: isActive
                    ? "0 20px 30px -10px rgba(0,0,0,0.15), 0 10px 15px -5px rgba(0,0,0,0.1)"
                    : "0 10px 20px -8px rgba(0,0,0,0.1)",
                }}
              >
                {/* Paper fold accent at bottom right corner */}
                <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-br-2xl">
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-black/5 transform rotate-45 translate-x-6 translate-y-6 shadow-inner" />
                </div>

                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <Sparkles size={15} className="text-gray-400 group-hover:text-amber-600 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Inter'] font-bold text-lg text-gray-900 mb-3 group-hover:text-black transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Body text */}
                  <p className="font-['Inter'] text-xs sm:text-sm text-gray-800 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Interactive Detail Drawer */}
                <div className="mt-5 pt-3 border-t border-black/10 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-700">
                    <span className="font-['Caveat_Brush'] text-base">Key Insight</span>
                    <span className="text-[11px] underline text-gray-600 group-hover:text-black">
                      {isActive ? "Tap to hide" : "Tap to expand"}
                    </span>
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-gray-800 italic bg-white/70 p-2.5 rounded-lg border border-black/5"
                    >
                      {item.detailText}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#484848] text-[22px] w-full">Key Findings</p>
      <KeyFindingsStickyNotes />
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame177 />
      <Frame178 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#484848] text-[20px] w-full whitespace-pre-wrap">Designing ChemoBuddy taught me that UX for healthcare must go beyond usability, it must reassure, educate, and connect.</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black w-[172px]">Seamless Integration</p>
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px]" start={1}>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Build a plugin that connects directly with the Mayo Clinic patient portal, allowing patients to access Chemo Companion using existing credentials.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[normal]">Enable cross-device functionality, scan a QR code from the phone to open the synced dashboard on desktop or Android TV for larger viewing.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black w-[172px]">Cross-Platform Justification</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px]">While mobile is primary for convenience, older users benefit from larger displays for videos, reports, and communication with caregivers.</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 text-[20px] w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-black w-[172px]">AR/VR Medical Education (Long-Term Vision)</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] w-[793px]">Develop immersive educational modules where patients can visualize chemotherapy processes using AR or VR for better understanding and reduced anxiety.</p>
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">Future enhancements</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full">Next steps toward integration and accessibility</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">With the current prototype validated, I identified several future directions based on feedback from Dr. Umar and test participants.</p>
      <Frame58 />
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[997px]">
      <Frame184 />
    </div>
  );
}

function SectionRevealWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

function Frame132() {
  return (
    <div className="relative mx-auto content-stretch flex flex-col gap-[144px] items-start pt-[1200px] pb-12 w-[1022px]">
      <SectionRevealWrapper><Frame131 /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame84 /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame85 /></SectionRevealWrapper>
      <SectionRevealWrapper><ChemobuddyVideoPlayer /></SectionRevealWrapper>
      <SectionRevealWrapper><InteractiveResearchSection /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame106 /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame124 /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame127 /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame138 /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame141 /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame148 /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame155 /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame158 /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame176 /></SectionRevealWrapper>
      <SectionRevealWrapper><Frame183 /></SectionRevealWrapper>
    </div>
  );
}

export default function ChemobuddyMayoclinic() {
  return (
    <div className="bg-white relative w-full">
      {/* Desktop Layout - Preserved */}
      <div className="hidden lg:block relative min-h-0" data-name="Chemobuddy - Mayoclinic">

        <div className="absolute flex flex-col items-start left-[calc(50%-496.5px)] top-[158px] w-[993px]">
          <div className="flex flex-row justify-between items-start w-full mb-[16px]">
            <h1 className="font-['Inter'] font-bold text-[40px] leading-tight text-black m-0">
              ChemoBuddy
            </h1>
            <div className="mt-2">
              <CaseStudyNavArrows />
            </div>
          </div>
          <p className="font-['Inter'] font-normal text-[20px] leading-[1.4] text-[#484848] m-0 mb-[24px]">
            Developed in collaboration with Mayo Clinic to transform complex chemotherapy information into guided, easy-to-understand patient experiences.
          </p>
          <div className="flex items-center justify-center px-6 py-3 bg-[#FBF4D8] border-[1.5px] border-[#DCC368] rounded-full gap-2">
            <Trophy size={20} className="text-[#B59220]" fill="#FFC627" />
            <span className="font-['Inter'] font-bold text-[#B59220] text-[16px]">
              Awardee of Mayo Clinic Observership
            </span>
          </div>
        </div>
        <Component />
        <Frame132 />
      </div>

      {/* Mobile Layout - Responsive */}
      <div className="lg:hidden w-full flex flex-col items-center pb-32 bg-white">
        {/* Mobile Header */}
        <div className="w-full px-6 py-4 flex justify-between items-center bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-gray-100">
          <span className="font-['Caveat_Brush'] text-[28px] text-[#747474]">d.</span>
        </div>

        {/* 1. Overview */}
        <div className="w-full px-6 pt-8 pb-8 bg-gradient-to-b from-[rgba(186,214,212,0.39)] to-[rgba(151,167,165,0.2)]">
          <div className="flex flex-row justify-between items-start w-full mb-6">
            <h1 className="font-['Inter'] font-bold text-3xl leading-tight text-black">
              ChemoBuddy
            </h1>
            <div className="mt-1">
              <CaseStudyNavArrows />
            </div>
          </div>
          <p className="font-['Inter'] text-[#484848] text-lg leading-relaxed mb-6">
            Chemotherapy education is often overwhelming, confusing, and emotionally heavy for patients. ChemoBuddy transforms complex treatment information into guided, supportive learning so patients can feel informed, prepared, and more in control of their care.
          </p>

          <div className="bg-white/60 p-6 rounded-xl space-y-4 mb-8">
            <h3 className="font-bold text-black mb-2">Key Features:</h3>
            <OverviewCards />
          </div>

          <div className="relative w-full aspect-[4/5] mx-auto max-w-sm">
            <img src={imgIMockupIPhone15} alt="App Screen" className="absolute w-[70%] shadow-2xl rounded-[2.5rem] top-4 left-4 z-10 rotate-[-5deg]" />
            <img src={imgIMockupIPhone17} alt="App Screen" className="absolute w-[70%] shadow-2xl rounded-[2.5rem] top-12 right-4 z-20 rotate-[5deg]" />
          </div>
        </div>

        <div className="w-full px-6 space-y-16 mt-12 max-w-md mx-auto">

          {/* 2. Results and Impact */}
          <div className="mx-[0px] my-[64px]">
            <div className="text-center">
              <h3 className="font-['Inter'] font-bold text-2xl text-black mb-2">Results and Impact</h3>
              <p className="font-['Inter'] text-[#484848]">Measuring how design decisions improved clarity and confidence.</p>
            </div>

            <div className="grid gap-6">
              <div className="bg-[#fcffc5] p-6 rounded-lg shadow-sm rotate-1 text-center">
                <p className="font-['Inter'] font-bold text-4xl mb-2">95%</p>
                <p className="font-['Inter'] text-base">of participants completed all tasks successfully.</p>
              </div>
              <div className="bg-[#ffdeeb] p-6 rounded-lg shadow-sm -rotate-1 text-center">
                <p className="font-['Inter'] font-bold text-4xl mb-2">40%</p>
                <p className="font-['Inter'] text-base">self-reported reduction in anxiety while navigating.</p>
              </div>
              <div className="bg-[#dfffcc] p-6 rounded-lg shadow-sm rotate-1 text-center">
                <p className="font-['Inter'] font-bold text-4xl mb-2">85%</p>
                <p className="font-['Inter'] text-base">increase in engagement time (4.2 to 7.8 min).</p>
              </div>
            </div>
          </div>

          {/* 3. Context and Problem */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Context & Problem</h2>
              <p className="font-['Inter'] text-[#484848] text-base">
                Chemotherapy patients manage an enormous amount of medical and emotional stress. Many receive thick binders of generic information and must juggle symptoms, schedules, and medications while coping with uncertainty.
              </p>
            </div>

            <TransformationFlowSection />
          </div>

          {/* 4. Role & Contribution */}
          <div className="py-24 space-y-12"> {/* Added vertical padding to increase spacing above and below */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#484848]" />
                  <h2 className="font-['Inter'] font-bold text-lg text-[#484848]">Role & Contribution</h2>
                </div>
                <h3 className="font-['Inter'] font-bold text-2xl lg:text-3xl text-black leading-snug">Designing Clarity in a Complex Care Journey</h3>
                <p className="font-['Inter'] text-[#484848] text-base leading-relaxed">
                  UX and instructional designer for ChemoBuddy, translating complex chemotherapy information into structured, patient-friendly learning experiences. Conducted research, mapped learning flows, and designed supportive, accessible interfaces aligned with clinical guidance from Mayo Clinic.
                </p>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <img src={mayoRoleDoodle} alt="Role and Contribution doodle" className="max-w-full w-[450px] object-contain" />
              </div>
            </div>
            
            {/* Keeping the video player below the text/doodle row */}
            <div className="w-full">
              <ChemobuddyVideoPlayer />
            </div>
          </div>

          {/* 5. Interactive Research Section */}
          <InteractiveResearchSection />

          {/* 11. Ideation & Concept Development */}
          <div className="space-y-6 pt-12 border-t border-gray-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A3E0] block mb-1">Ideation & Concept Development</span>
              <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-3">Translating research insights into actionable design directions</h2>
            </div>
            <p className="font-['Inter'] text-[#484848] text-base leading-relaxed max-w-3xl">
              Based on the research findings, I began ideation by using "How Might We" statements to frame challenges creatively:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider">HMW 01</span>
                <h4 className="font-bold text-black text-base">Simplify Education</h4>
                <p className="text-sm text-gray-600 leading-relaxed">How might we simplify the way chemotherapy information is presented to avoid fatigue?</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider">HMW 02</span>
                <h4 className="font-bold text-black text-base">Emergency Symptoms</h4>
                <p className="text-sm text-gray-600 leading-relaxed">How might we help patients identify emergency symptoms instantly without anxiety?</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider">HMW 03</span>
                <h4 className="font-bold text-black text-base">Caregiver Access</h4>
                <p className="text-sm text-gray-600 leading-relaxed">How might we give caregivers controlled access to patient updates while preserving autonomy?</p>
              </div>
            </div>
            <p className="font-['Inter'] text-[#484848] text-base leading-relaxed max-w-3xl pt-2">
              After feedback from mentors, I merged these into one unified platform, <strong>ChemoBuddy</strong>—a mobile-first digital tool offering personalized learning, symptom tracking, and communication for both patients and caregivers.
            </p>
            <img src={imgImage35} alt="Ideation Sketches" className="w-full rounded-xl shadow-lg" />
          </div>


          {/* 13. Low-Fidelity Wireframes */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Low-Fidelity Wireframes</h3>
            <p className="font-['Inter'] text-[#484848] text-base">
              Started with sketches emphasizing minimal interactions and large visual elements for older patients with limited digital comfort.
            </p>
            <ChemoWireframesVideoPlayer />
          </div>

          {/* 14. High-Fidelity – Onboarding */}
          <div className="space-y-6 pt-8 border-t border-gray-200">
            <h3 className="font-['Inter'] font-bold text-xl text-black">1. Onboarding</h3>
            <p className="font-['Inter'] text-[#484848] text-base">
              <strong>Goal:</strong> Simplify first-time setup and create immediate trust. Patients enter a secure clinic code to auto-sync their data.
            </p>
            <div className="flex justify-center">
              <img src={imgOnboardingGif} alt="Onboarding Flow" className="w-[80%] rounded-3xl shadow-xl" />
            </div>
          </div>

          {/* 15. High-Fidelity – Dashboard */}
          <div className="space-y-6 pt-8 border-t border-gray-200">
            <h3 className="font-['Inter'] font-bold text-xl text-black">2. Dashboard</h3>
            <p className="font-['Inter'] text-[#484848] text-base">
              <strong>Goal:</strong> Provide a clear view of treatment progress. Features a circular tracker for chemo cycles and daily check-ins.
            </p>
            <div className="flex justify-center">
              <img src={imgIMockupIPhone13} alt="Dashboard" className="w-[80%] rounded-3xl shadow-xl" />
            </div>
          </div>

          {/* 16. High-Fidelity – Chatbot */}
          <div className="space-y-6 pt-8 border-t border-gray-200">
            <h3 className="font-['Inter'] font-bold text-xl text-black">3. Chatbot</h3>
            <p className="font-['Inter'] text-[#484848] text-base">
              <strong>Goal:</strong> Deliver empathetic support. It detects "red flag" keywords like fever and escalates them while answering routine questions calmly.
            </p>
            <div className="flex justify-center">
              <img src={imgChatbotGif} alt="Chatbot" className="w-[80%] rounded-3xl shadow-xl" />
            </div>
          </div>

          {/* 17. High-Fidelity – Symptom Tracking */}
          <div className="space-y-6 pt-8 border-t border-gray-200">
            <h3 className="font-['Inter'] font-bold text-xl text-black">4. Symptom Tracking</h3>
            <p className="font-['Inter'] text-[#484848] text-base">
              <strong>Goal:</strong> Help patients record symptoms quickly. Uses an interactive body map and color-coded severity sliders.
            </p>
            <div className="flex justify-center">
              <img src={imgIMockupIPhone47} alt="Symptom Tracking" className="w-[80%] rounded-3xl shadow-xl" />
            </div>
          </div>

          {/* 18. High-Fidelity – Caregiver Access */}
          <div className="space-y-6 pt-8 border-t border-gray-200">
            <h3 className="font-['Inter'] font-bold text-xl text-black">5. Caregiver Access</h3>
            <p className="font-['Inter'] text-[#484848] text-base">
              <strong>Goal:</strong> Empower patients to decide who sees their data. Allows inviting family members with specific permission levels.
            </p>
            <div className="flex justify-center">
              <img src={imgIMockupIPhone21} alt="Caregiver Access" className="w-[80%] rounded-3xl shadow-xl" />
            </div>
          </div>

          {/* 19. User Testing */}
          <div className="space-y-6 pt-8 border-t border-gray-200">
            <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">User Testing</h2>
            <p className="font-['Inter'] text-[#484848] text-base">
              Conducted usability sessions using the think-aloud method.
            </p>

            <div className="grid gap-4">
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                <p className="font-bold text-sm mb-1">Insight:</p>
                <p className="text-sm text-[#484848]">"Text-heavy layout increases fatigue."</p>
                <p className="text-xs text-[#00A3E0] mt-2 font-bold">→ Added audio summaries.</p>
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                <p className="font-bold text-sm mb-1">Insight:</p>
                <p className="text-sm text-[#484848]">"Unclear if data is synced."</p>
                <p className="text-xs text-[#00A3E0] mt-2 font-bold">→ Added "Synced 2h ago" indicator.</p>
              </div>
            </div>
          </div>

          {/* 20. Learnings */}
          <div className="space-y-4">
            <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Learnings</h2>
            <p className="font-['Inter'] text-[#484848] text-base">
              Designing ChemoBuddy taught me that UX for healthcare must go beyond usability - it must reassure, educate, and connect.
            </p>
            <div className="bg-[#e0f7fa] p-6 rounded-xl">
              <p className="font-bold text-[#006064] mb-2">Key Takeaway</p>
              <p>Empathy is measurable. Small choices like whitespace and supportive tone directly influence emotional outcomes.</p>
            </div>
          </div>

          {/* 21. Future Enhancements */}
          <div className="space-y-4 pb-8">
            <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Future Enhancements</h2>
            <ul className="list-disc pl-5 space-y-3 text-[#484848]">
              <li><strong>Seamless Integration:</strong> Plugin for direct connection with Mayo Clinic patient portal.</li>
              <li><strong>Cross-Device:</strong> QR code handoff to desktop/TV for easier viewing by older patients.</li>
              <li><strong>AR/VR Education:</strong> Immersive modules to visualize treatment processes.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}