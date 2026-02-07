import { useState, useEffect, useRef, useCallback } from 'react';
import { Map, HeartPulse, ShieldCheck } from 'lucide-react';
import imgHeroReplace from 'figma:asset/f620a291096457bf1aa42dee938f437a6005b47b.png';
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
  return (
    <img
      className="absolute left-0 top-[400px] w-full object-cover"
      src={imgHeroReplace}
      alt="Hero Section"
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
        <div className="grid grid-cols-3 gap-6 my-8 w-full">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md transition-all group">
            <div className="text-black group-hover:scale-110 transition-transform">
              <Map size={32} strokeWidth={1.5} />
            </div>
            <span className="font-medium text-gray-800 leading-snug">3 simplified learning paths</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md transition-all group">
            <div className="text-black group-hover:scale-110 transition-transform">
              <HeartPulse size={32} strokeWidth={1.5} />
            </div>
            <span className="font-medium text-gray-800 leading-snug">Personalized symptom & question support</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md transition-all group">
            <div className="text-black group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <span className="font-medium text-gray-800 leading-snug">Built with Mayo Clinic clinical guidance</span>
          </div>
        </div>
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

function Frame130() {
  return (
    <div className="content-stretch flex flex-col gap-[139px] items-start relative shrink-0 w-full">
      <Frame52 />
      <Group7 />
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
          <div
            className="bg-white rounded-[24px] flex-1 min-h-[218px] relative overflow-hidden transition-all duration-300 ease-out cursor-default hover:shadow-[0_8px_30px_rgba(231,73,115,0.15)] hover:-translate-y-1 hover:scale-[1.02]"
            style={{ border: '1px solid #ece2e2' }}
          >
            <div className="flex flex-col gap-[39px] items-start p-[36px]">
              <AnimatedCounter target={95} color="#000000" />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#5d5d5d] text-[20px] whitespace-pre-wrap max-w-[320px]">of participants completed all tasks successfully</p>
            </div>
          </div>

          {/* Card: 40% */}
          <div
            className="bg-white rounded-[24px] flex-1 min-h-[218px] relative overflow-hidden transition-all duration-300 ease-out cursor-default hover:shadow-[0_8px_30px_rgba(120,190,32,0.15)] hover:-translate-y-1 hover:scale-[1.02]"
            style={{ border: '1px solid #ece2e2' }}
          >
            <div className="flex flex-col gap-[39px] items-start p-[36px]">
              <AnimatedCounter target={40} color="#000000" />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#5d5d5d] text-[20px] whitespace-pre-wrap max-w-[372px]">increase in engagement time (4.2 to 7.8 minutes average session).</p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-[24px] items-stretch w-full">
          {/* Card: 30% */}
          <div
            className="bg-white rounded-[24px] flex-1 min-h-[218px] relative overflow-hidden transition-all duration-300 ease-out cursor-default hover:shadow-[0_8px_30px_rgba(255,127,50,0.15)] hover:-translate-y-1 hover:scale-[1.02]"
            style={{ border: '1px solid #ece2e2' }}
          >
            <div className="flex flex-col gap-[39px] items-start p-[36px]">
              <AnimatedCounter target={30} color="#000000" />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#5d5d5d] text-[20px] whitespace-pre-wrap max-w-[337px]">improvement in symptom reporting accuracy.</p>
            </div>
          </div>

          {/* Card: 85% */}
          <div
            className="bg-white rounded-[24px] flex-1 min-h-[218px] relative overflow-hidden transition-all duration-300 ease-out cursor-default hover:shadow-[0_8px_30px_rgba(0,163,224,0.15)] hover:-translate-y-1 hover:scale-[1.02]"
            style={{ border: '1px solid #ece2e2' }}
          >
            <div className="flex flex-col gap-[39px] items-start p-[36px]">
              <AnimatedCounter target={85} color="#000000" />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#5d5d5d] text-[20px] whitespace-pre-wrap max-w-[357px]">increase in engagement time (4.2 to 7.8 minutes average session).</p>
            </div>
          </div>
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

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group9 />
      <Group10 />
      <Group11 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#484848] text-[20px] w-[min-content] whitespace-pre-wrap">Core Opportunities</p>
      <Group8 />
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
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#484848] shadow-[0_0_8px_#484848] shrink-0" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">{`Role & Contribution`}</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[24px] text-black w-full">Designing Clarity in a Complex Care Journey</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#484848] text-[20px] w-full">{` UX and instructional designer for ChemoBuddy, translating complex chemotherapy information into structured, patient-friendly learning experiences. Conducted research, mapped learning flows, and designed supportive, accessible interfaces aligned with clinical guidance from Mayo Clinic.`}</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[994px]">
      <Frame75 />
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
      <p className="absolute font-['Caveat_Brush',cursive] leading-[normal] left-[51px] not-italic text-[#484848] text-[24px] top-[242px] w-[293px] whitespace-pre-wrap">
        Secondary Research
        <br aria-hidden="true" />
        Week (1-3)
      </p>
      <p className="absolute font-['Caveat_Brush',cursive] leading-[normal] left-[544px] not-italic text-[#484848] text-[24px] top-[242px] w-[147px] whitespace-pre-wrap">
        Data Synthesis
        <br aria-hidden="true" />
        Week ( 6-7)
      </p>
      <div className="absolute font-['Caveat_Brush',cursive] leading-[normal] left-[310px] not-italic text-[#484848] text-[24px] top-[362px] w-[134px] whitespace-pre-wrap">
        <p className="mb-0">User Research</p>
        <p>Week (4-5)</p>
      </div>
      <div className="absolute font-['Caveat_Brush',cursive] leading-[normal] left-[786px] not-italic text-[#484848] text-[24px] top-[362px] w-[134px] whitespace-pre-wrap">
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
        <ol className="list-decimal list-outside ml-5 css-8097nc" start="1">
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
        <ol className="list-decimal list-outside ml-5 css-8097nc" start="1">
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
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start="1">
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
        <ol className="list-decimal list-outside ml-5 css-8097nc" start="1">
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
        <ol className="list-decimal list-outside ml-5 css-8097nc" start="1">
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
        <ol className="list-decimal list-outside ml-5 css-8097nc" start="1">
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
      <Frame7 />
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
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start="1">
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

function Frame8() {
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

function Frame134() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <Frame135 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame134 />
    </div>
  );
}

function Frame9() {
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

function Frame136() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame10() {
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

function Frame137() {
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
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start="1">
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

function Frame11() {
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
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start="1">
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

function Frame12() {
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

function Frame144() {
  return (
    <div className="bg-[rgba(186,214,212,0.4)] h-[651px] overflow-clip relative rounded-[24px] shrink-0 w-[457px]">
      <Frame145 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame144 />
    </div>
  );
}

function Frame13() {
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

function Frame14() {
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
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start="1">
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

function Frame150() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame151 />
    </div>
  );
}

function Frame16() {
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

function Frame17() {
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
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start="1">
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

function Frame18() {
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
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px] whitespace-pre-wrap" start="1">
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
  return (
    <div className="h-[248px] relative shrink-0 w-full">
      <Frame67 />
      <div className="absolute h-0 left-0 top-[88px] w-[997px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 997 1">
            <line id="Line 7" stroke="var(--stroke-0, black)" strokeOpacity="0.25" x2="997" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[39px] w-[997px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 997 1">
            <line id="Line 7" stroke="var(--stroke-0, black)" strokeOpacity="0.25" x2="997" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[146px] w-[997px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 997 1">
            <line id="Line 7" stroke="var(--stroke-0, black)" strokeOpacity="0.25" x2="997" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[204px] w-[997px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 997 1">
            <line id="Line 7" stroke="var(--stroke-0, black)" strokeOpacity="0.25" x2="997" y1="0.5" y2="0.5" />
          </svg>
        </div>
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

function Frame161() {
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

function Frame164() {
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

function Frame167() {
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

function Frame172() {
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

function Frame158() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[997px]">
      <Frame159 />
      <Frame68 />
      <Frame160 />
      <Frame163 />
      <Frame166 />
      <Frame171 />
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

function Frame178() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#484848] text-[20px] w-[min-content] whitespace-pre-wrap">Key Findings</p>
      <Group21 />
      <Group25 />
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
      <ol className="list-decimal list-outside ml-5 block css-8097nc font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] w-[793px]" start="1">
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

function Frame132() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[144px] items-start left-[calc(50%+13px)] top-[1140px] w-[1022px]">
      <Frame131 />
      <Frame84 />
      <Frame85 />
      <Frame80 />
      <Frame86 />
      <Frame88 />
      <Frame93 />
      <Frame98 />
      <Frame101 />
      <Frame106 />
      <Frame122 />
      <Frame124 />
      <Frame127 />
      <Frame138 />
      <Frame141 />
      <Frame148 />
      <Frame155 />
      <Frame158 />
      <Frame176 />
      <Frame183 />
    </div>
  );
}

export default function ChemobuddyMayoclinic() {
  return (
    <div className="bg-white relative w-full">
      {/* Desktop Layout - Preserved */}
      <div className="hidden lg:block relative min-h-[8500px]" data-name="Chemobuddy - Mayoclinic">
        <div className="absolute flex flex-col items-start left-[calc(50%-496.5px)] top-[158px] w-[993px]">
          <h1 className="font-['Inter'] font-bold text-[40px] leading-tight text-black m-0 mb-[16px]">
            ChemoBuddy
          </h1>
          <p className="font-['Inter'] font-normal text-[20px] leading-[1.4] text-[#484848] m-0 mb-[24px]">
            Developed in collaboration with Mayo Clinic to transform complex chemotherapy information into guided, easy-to-understand patient experiences.
          </p>
          <div className="flex items-center justify-center px-6 py-3 bg-[#FBF4D8] border-[1.5px] border-[#DCC368] rounded-full">
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
          <h1 className="font-['Inter'] font-bold text-3xl leading-tight text-black mb-6">
            ChemoBuddy
          </h1>
          <p className="font-['Inter'] text-[#484848] text-lg leading-relaxed mb-6">
            Chemotherapy education is often overwhelming, confusing, and emotionally heavy for patients. ChemoBuddy transforms complex treatment information into guided, supportive learning so patients can feel informed, prepared, and more in control of their care.
          </p>

          <div className="bg-white/60 p-6 rounded-xl space-y-4 mb-8">
            <h3 className="font-bold text-black">Key Features:</h3>
            <div className="space-y-4 mt-6">
              <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm">
                <div className="text-black shrink-0">
                  <Map size={20} strokeWidth={1.5} />
                </div>
                <span className="font-medium text-gray-800 text-sm">3 simplified learning paths</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm">
                <div className="text-black shrink-0">
                  <HeartPulse size={20} strokeWidth={1.5} />
                </div>
                <span className="font-medium text-gray-800 text-sm">Personalized symptom & question support</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm">
                <div className="text-black shrink-0">
                  <ShieldCheck size={20} strokeWidth={1.5} />
                </div>
                <span className="font-medium text-gray-800 text-sm">Built with Mayo Clinic clinical guidance</span>
              </div>
            </div>
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

            <div className="space-y-3 text-center bg-gray-50 p-6 rounded-2xl">
              <span className="font-['Caveat_Brush'] text-[#bd4800] text-2xl block">The Problem</span>
              <img src={image_1bf5f60255a20498a2f475250c718f058eaf3940} alt="Confused Patient" className="w-full h-40 object-contain" />
              <p className="font-['Inter'] italic text-[#484848] text-sm">Complex medical information leaves patients feeling confused.</p>
            </div>

            <div className="flex justify-center text-[#747474]">↓</div>

            <div className="space-y-3 text-center bg-gray-50 p-6 rounded-2xl">
              <span className="font-['Caveat_Brush'] text-[#78be20] text-2xl block">The Solution</span>
              <img src={imgImage107} alt="Solution Interface" className="w-full h-40 object-contain" />
              <p className="font-['Inter'] italic text-[#484848] text-sm">ChemoBuddy provides clear, compassionate guidance.</p>
            </div>

            <div className="flex justify-center text-[#747474]">↓</div>

            <div className="space-y-3 text-center bg-gray-50 p-6 rounded-2xl">
              <span className="font-['Caveat_Brush'] text-[#00A3E0] text-2xl block">The Impact</span>
              <img src={imgImage108} alt="Reassured Patient" className="w-full h-40 object-contain" />
              <p className="font-['Inter'] italic text-[#484848] text-sm">Patients feel informed, reassured, and ready.</p>
            </div>
          </div>

          {/* 4. Role & Contribution */}
          <div className="space-y-4">
            <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Role & Contribution</h2>
            <h3 className="font-bold text-lg">Designing Clarity in a Complex Care Journey</h3>
            <p className="font-['Inter'] text-[#484848] text-base leading-relaxed">
              I served as the UX and instructional designer, translating complex chemotherapy information into structured, patient-friendly learning experiences. I conducted research, mapped learning flows, and designed supportive, accessible interfaces aligned with clinical guidance from Mayo Clinic.
            </p>
          </div>

          {/* 5. Research */}
          <div className="space-y-4">
            <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Research</h2>
            <h3 className="font-bold text-lg">Understanding Needs</h3>
            <p className="font-['Inter'] text-[#484848] text-base leading-relaxed">
              A 10-week exploration to understand how chemotherapy patients learn, cope, and communicate. I followed a structured 4-phase research approach, combining clinical insights, patient emotions, and caregiver perspectives.
            </p>
          </div>

          {/* 6. Secondary Research – Literature Review */}
          <div className="space-y-4 bg-[#f9f9f9] p-6 rounded-2xl">
            <h3 className="font-['Inter'] font-bold text-xl text-black">Literature Review</h3>
            <p className="text-sm text-[#747474] font-medium uppercase tracking-wide">Week 1–2</p>
            <p className="font-['Inter'] text-[#484848] text-base">
              I explored 11 peer-reviewed oncology journals to identify usability gaps in current patient education methods.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <p className="font-bold text-sm mb-2">Key Output:</p>
              <p className="text-sm text-[#484848]">Defined 4 key problem clusters and created a feature benchmarking matrix.</p>
            </div>
          </div>

          {/* 7. Secondary Research – Competitive Analysis */}
          <div className="space-y-4 bg-[#f9f9f9] p-6 rounded-2xl">
            <h3 className="font-['Inter'] font-bold text-xl text-black">Competitive Analysis</h3>
            <p className="text-sm text-[#747474] font-medium uppercase tracking-wide">Week 3</p>
            <p className="font-['Inter'] text-[#484848] text-base">
              Evaluated 8 healthcare apps (including MyChart, Cancer.Net) to see what existing tools were doing well and where they fell short in emotional support.
            </p>
            <img src={imgImage30} alt="Competitive Analysis Matrix" className="w-full rounded-lg shadow-sm" />
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center bg-[#e0f7fa] rounded-full text-[#00A3E0]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" /></svg>
              </div>
              <p className="text-sm font-bold text-[#00a3e0]">Key Gap Identified: Lack of emotional context in current tools.</p>
            </div>
          </div>

          {/* 8. User Research – Role-Play Testing */}
          <div className="space-y-4 bg-[#f9f9f9] p-6 rounded-2xl">
            <h3 className="font-['Inter'] font-bold text-xl text-black">Role-Play Testing</h3>
            <p className="text-sm text-[#747474] font-medium uppercase tracking-wide">Week 4–5</p>
            <p className="font-['Inter'] text-[#484848] text-base">
              To ensure ethical research without burdening patients, I conducted role-play sessions with my oncology mentor, Dr. Umar. We simulated authentic patient-caregiver interactions to uncover emotional pain points.
            </p>
          </div>

          {/* 9. Data Synthesis – Affinity Mapping */}
          <div className="space-y-4">
            <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Findings</h2>
            <h3 className="font-bold text-lg">Affinity Mapping</h3>
            <p className="font-['Inter'] text-[#484848] text-base">
              Transcribed interviews and clustered findings into themes: trust, information overload, accessibility, and caregiver support.
            </p>
            <img src={imgImage32} alt="Affinity Map" className="w-full rounded-xl shadow-lg" />
          </div>

          {/* 10. Data Synthesis – Personas */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Personas</h3>
            <p className="font-['Inter'] text-[#484848] text-base">
              Developed two key personas representing patients at different stages of treatment with varying digital needs.
            </p>
            <div className="space-y-4">
              <img src={imgImage33} alt="Persona 1" className="w-full rounded-xl shadow-md" />
              <img src={imgImage34} alt="Persona 2" className="w-full rounded-xl shadow-md" />
            </div>
          </div>

          {/* 11. Ideation & Concept Development */}
          <div className="space-y-4">
            <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Ideation</h2>
            <p className="font-['Inter'] text-[#484848] text-base">
              Used "How Might We" statements to translate insights into design directions. Merged ideas into a unified platform: ChemoBuddy.
            </p>
            <img src={imgImage35} alt="Ideation Sketches" className="w-full rounded-xl shadow-lg" />
          </div>

          {/* 12. Design Process */}
          <div className="space-y-4">
            <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Design Process</h2>
            <p className="font-['Inter'] text-[#484848] text-base">
              I structured the experience around five key stages to build an empathetic journey:
            </p>
            <ul className="list-decimal pl-5 space-y-3 text-[#484848]">
              <li><strong>Onboarding:</strong> Secure, trust-building entry.</li>
              <li><strong>Dashboard:</strong> Visual overview of progress.</li>
              <li><strong>Chatbot:</strong> Empathetic support interface.</li>
              <li><strong>Symptom Tracking:</strong> Easy body-map logging.</li>
              <li><strong>Caregiver Access:</strong> Controlled data sharing.</li>
            </ul>
          </div>

          {/* 13. Low-Fidelity Wireframes */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Low-Fidelity Wireframes</h3>
            <p className="font-['Inter'] text-[#484848] text-base">
              Started with sketches emphasizing minimal interactions and large visual elements for older patients with limited digital comfort.
            </p>
            <img src={imgWireframeGif} alt="Wireframes" className="w-full rounded-xl shadow-lg" />
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
              Designing ChemoBuddy taught me that UX for healthcare must go beyond usability—it must reassure, educate, and connect.
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