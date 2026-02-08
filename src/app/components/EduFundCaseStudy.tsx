import EduFundFixedDepositDesktop from "@/imports/EduFundFixedDeposit-197-2063";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
// EduFundNextProjects removed
import { CaseStudyNavArrows } from "@/app/components/CaseStudyNavArrows";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/app/components/useScrollAnimation";

// Import images for mobile view
import imgImage16903 from "figma:asset/7262f2bd5895888e15d48308002c4e7aa7b6e516.png";
import imgImage115 from "figma:asset/adf2f7f090fc9d8b0bc367bedff3d83b1ce9b693.png";
import imgImage116 from "figma:asset/707c97d14934918ad3a4eea553555f8ad34e3acf.png";
import imgImage107 from "figma:asset/db0c048f566a005b6ae99b7d8e878dbb5a7d4c8e.png";
import imgImage118 from "figma:asset/eaea68abe48c23fd706c5cdb1cabcb6ff745c34c.png";
import imgImage112 from "figma:asset/3b2e80b07f0215383ecb98f7f79de8fa4da29e13.png";
import imgScreenshot20240829At55055Pm from "figma:asset/b8ca8c0bd56491a5c4d1bc048f276b4f05b8200a.png";
import imgScreenshot20240829At55111Pm from "figma:asset/2c941b231c771d73f20d3e6b859f3bae3d1daf78.png";
import imgScreenshot20240829At55124Pm from "figma:asset/6a0d1e66a887ed33b9cf8fc011145bf4b109bde6.png";

// High Fidelity Mockups
import imgIMockupGooglePixel8Pro3 from "figma:asset/a1ce7ba68ce917f9955420131d6f66e82cfc8f5c.png";
import imgIMockupGooglePixel8Pro4 from "figma:asset/bc65a6913a706b08d78742bc6c8e4535b8584d6a.png";
import imgIMockupGooglePixel8Pro5 from "figma:asset/9e910df2d3657b10b4b0e59ca34770c8be0d880c.png";
import imgIMockupGooglePixel8Pro6 from "figma:asset/facacfe78846fc65779f777aa0dc0a0913523a19.png";
import imgIMockupGooglePixel8Pro7 from "figma:asset/2ddd63e91621100e411e62a491a0e625e7e788e0.png";
import imgIMockupGooglePixel8Pro8 from "figma:asset/9fd1d2de193b3fcc013885824b3cc98c69619f5b.png";
import imgIMockupGooglePixel8Pro9 from "figma:asset/4732532903618a269ede4798e110a3eda055f963.png";
import imgIMockupGooglePixel8Pro10 from "figma:asset/008e2ef1476ff80867a0f0ea4f23a52a9d5e674b.png";
import imgIMockupGooglePixel8Pro11 from "figma:asset/7e461e3e7fff652175b199347c90cc4793581a7a.png";
import imgIMockupGooglePixel8Pro12 from "figma:asset/b4efc85f775df099ece588b00e031b220a705dec.png";
import imgIMockupGooglePixel8Pro13 from "figma:asset/c649690ab47c484613030a956c25c000acbe6fbd.png";
import imgIMockupGooglePixel8Pro14 from "figma:asset/69777ad64178a68a5481d4b782f908f8b12d60c4.png";
import imgIMockupGooglePixel8Pro15 from "figma:asset/a743ce6f9970def9db35778ce1995ba36762bdf1.png";

export function EduFundCaseStudy() {
  // Apply scroll animations to all text elements
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" data-case-study-content>
      {/* Navigation */}
      <Navigation />

      {/* Desktop Top Project Navigation */}

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Desktop Layout - Using the Figma Import */}
        <div className="hidden lg:block relative min-h-[17500px] w-full mx-auto overflow-hidden">
          <EduFundFixedDepositDesktop />
          <div className="absolute top-0 left-0 w-full mt-[16500px] z-10">
            <div className="flex justify-end pr-12 py-12">
              <CaseStudyNavArrows />
            </div>
            <Footer />
          </div>
        </div>

        {/* Mobile Layout - Built from scratch */}
        <div className="lg:hidden w-full flex flex-col items-center pb-32 bg-white px-6">

          {/* Mobile Top Project Navigation - Integrated with Title */}

          {/* 1. Hero & Title */}
          <div className="w-full pt-8 pb-12">
            <div className="flex justify-between items-start gap-4 mb-6">
              <h1 className="font-['Inter'] font-bold text-2xl leading-tight text-black flex-1">
                Digital financial experience at EduFund to turn complex student finance processes into simple, guided, and trustworthy user journeys.
              </h1>
              <div className="mt-1 shrink-0">
                <CaseStudyNavArrows />
              </div>
            </div>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg mb-8">
              <img src={imgImage16903} alt="EduFund Hero" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-full space-y-16 max-w-md mx-auto">
            {/* 2. Overview */}
            <div className="space-y-6">
              <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Overview</h2>
              <p className="font-['Inter'] text-[#484848] text-base leading-relaxed">
                At EduFund, the mission is to make educational financial planning simple and trustworthy. While mutual fund investments were already available, many parents were looking for safer, fixed-return options.
              </p>
              <p className="font-['Inter'] text-[#484848] text-base leading-relaxed">
                To meet this need, we introduced Fixed Deposits (FDs) in partnership with Shriram Finance, bringing a secure investment option directly into the EduFund app.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#FFC627]">
                <p className="font-['Inter'] text-[#484848] text-sm">
                  <strong>My Role:</strong> I designed the end-to-end Fixed Deposit experience at EduFund, combining competitive research, simplified onboarding, and trust-focused design to create a guided, mobile-first FD journey.
                </p>
              </div>
            </div>

            {/* 3. The Opportunity */}
            <div className="space-y-6">
              <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">The Opportunity</h2>
              <p className="font-['Inter'] text-[#484848] text-base">
                EduFund users were planning long-term educational goals but not all were comfortable with market-linked investments. Parents wanted:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#484848]">
                <li>Stable, low-risk returns</li>
                <li>Transparent maturity and payout details</li>
                <li>A process that felt secure and easy to follow</li>
              </ul>
            </div>

            {/* 4. Context & Problem */}
            <div className="space-y-8">
              <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Context & Problem</h2>
              <p className="font-['Inter'] font-bold text-lg text-black">
                Why is something meant to feel secure often the most confusing step?
              </p>
              <p className="font-['Inter'] text-[#484848] text-base">
                Traditional Fixed Deposit journeys were often complex, jargon-heavy, and difficult to navigate on mobile. Long KYC processes and unclear return breakdowns created friction.
              </p>

              <div className="space-y-6">
                <div className="text-center bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                  <img src={imgImage115} alt="Complexity" className="w-full h-32 object-contain mb-2" />
                  <p className="font-['Inter'] italic text-sm text-[#484848]">Intimidating long KYC processes.</p>
                </div>
                <div className="text-center bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                  <img src={imgImage116} alt="Solution" className="w-full h-32 object-contain mb-2" />
                  <p className="font-['Inter'] italic text-sm text-[#484848]">Need for step-by-step guidance.</p>
                </div>
                <div className="text-center bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                  <img src={imgImage107} alt="Trust" className="w-full h-32 object-contain mb-2" />
                  <p className="font-['Inter'] italic text-sm text-[#484848]">Building confidence and trust.</p>
                </div>
              </div>
            </div>

            {/* 5. Research */}
            <div className="space-y-6">
              <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Research</h2>
              <p className="font-['Inter'] text-[#484848] text-base">
                I conducted deep research to understand both user needs and the financial product landscape, studying journeys from Mahindra Finance, Bajaj Finance, and Stable Money.
              </p>
              <div className="relative w-full rounded-xl overflow-hidden shadow-md">
                <img src={imgImage112} alt="Competitive Analysis" className="w-full h-auto" />
              </div>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="bg-[#fff8e1] p-4 rounded-xl">
                  <p className="font-bold text-[#bd4800] mb-1">Problem: Overwhelmed</p>
                  <p className="text-sm text-[#484848]">Users felt lost in complex onboarding.</p>
                </div>
                <div className="bg-[#e8f5e9] p-4 rounded-xl">
                  <p className="font-bold text-[#78be20] mb-1">Goal: Confident</p>
                  <p className="text-sm text-[#484848]">Users need to feel secure and guided.</p>
                </div>
              </div>
            </div>

            {/* 6. Role & Contribution */}
            <div className="space-y-6">
              <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Role & Contribution</h2>
              <p className="font-['Inter'] text-[#484848] text-base">
                I led the end-to-end design, collaborating with product managers and Shriram’s tech team. I ensured brand harmony and conducted usability testing.
              </p>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg mt-4">
                <img src={imgImage118} alt="Design Process" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* 7. Designing the Flow */}
            <div className="space-y-6">
              <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">Designing the Flow</h2>
              <p className="font-['Inter'] text-[#484848] text-base">
                We reviewed wireframes in weekly sprints to validate direction and iterate quickly.
              </p>
              <div className="space-y-4">
                <img src={imgScreenshot20240829At55055Pm} alt="Wireframe 1" className="w-full rounded-xl shadow-md border border-gray-100" />
                <div className="grid grid-cols-2 gap-4">
                  <img src={imgScreenshot20240829At55111Pm} alt="Wireframe 2" className="w-full rounded-xl shadow-md border border-gray-100" />
                  <img src={imgScreenshot20240829At55124Pm} alt="Wireframe 3" className="w-full rounded-xl shadow-md border border-gray-100" />
                </div>
              </div>
            </div>

            {/* 8. High Fidelity Prototypes */}
            <div className="space-y-8">
              <h2 className="font-['Inter'] font-bold text-2xl text-black border-b pb-2">High Fidelity Prototypes</h2>
              <p className="font-['Inter'] text-[#484848] text-base">
                Building Trust Through Design: Clean, consistent, and compliant.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {/* Screens 3-6 */}
                <img src={imgIMockupGooglePixel8Pro5} className="w-full rounded-xl shadow-md" alt="Screen" />
                <img src={imgIMockupGooglePixel8Pro4} className="w-full rounded-xl shadow-md" alt="Screen" />
                <img src={imgIMockupGooglePixel8Pro6} className="w-full rounded-xl shadow-md" alt="Screen" />
                <img src={imgIMockupGooglePixel8Pro3} className="w-full rounded-xl shadow-md" alt="Screen" />

                {/* Screens 7-10 */}
                <img src={imgIMockupGooglePixel8Pro7} className="w-full rounded-xl shadow-md" alt="Screen" />
                <img src={imgIMockupGooglePixel8Pro9} className="w-full rounded-xl shadow-md" alt="Screen" />
                <img src={imgIMockupGooglePixel8Pro10} className="w-full rounded-xl shadow-md" alt="Screen" />
                <img src={imgIMockupGooglePixel8Pro8} className="w-full rounded-xl shadow-md" alt="Screen" />

                {/* Screens 11-14 */}
                <img src={imgIMockupGooglePixel8Pro13} className="w-full rounded-xl shadow-md" alt="Screen" />
                <img src={imgIMockupGooglePixel8Pro14} className="w-full rounded-xl shadow-md" alt="Screen" />
                <img src={imgIMockupGooglePixel8Pro12} className="w-full rounded-xl shadow-md" alt="Screen" />
                <img src={imgIMockupGooglePixel8Pro11} className="w-full rounded-xl shadow-md" alt="Screen" />
              </div>

              <div className="w-full mt-4">
                <p className="font-['Inter'] font-medium text-black mb-2">Portfolio View</p>
                <img src={imgIMockupGooglePixel8Pro15} className="w-full rounded-xl shadow-md" alt="Portfolio Screen" />
              </div>
            </div>

            {/* 9. Results & Impact */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="font-['Inter'] font-bold text-2xl text-black mb-2">Results & Impact</h3>
                <p className="font-['Inter'] text-[#484848]">The FD integration successfully launched, offering a secure option for parents.</p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center">
                  <p className="font-['Inter'] font-medium text-[#5d5d5d] mb-2">Engagement increased by</p>
                  <p className="font-['Inter'] font-bold text-5xl text-black">30%</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center">
                  <p className="font-['Inter'] font-medium text-[#5d5d5d] mb-2">Drop-off reduced by</p>
                  <p className="font-['Inter'] font-bold text-5xl text-black">15%</p>
                </div>
              </div>
            </div>

            {/* 10. Final Reflection */}
            <div className="bg-[#f9f9f9] p-8 rounded-2xl mb-8">
              <h3 className="font-['Inter'] font-bold text-xl text-black mb-4">Final Reflection</h3>
              <p className="font-['Inter'] text-[#484848] text-base leading-relaxed">
                This project wasn’t just about adding a new feature — it was about helping parents make confident financial decisions. By combining thoughtful UX, clear communication, and strong collaboration with financial partners, we created an experience that felt safe, simple, and empowering.
              </p>
            </div>

            {/* 11. Next Projects */}
            {/* Next Projects Replaced by Arrows */}
            <div className="flex justify-end pr-6 py-12">
              <CaseStudyNavArrows />
            </div>

            {/* Mobile Footer Links */}
            <div className="pt-8 border-t border-gray-100 w-full text-center">

              <p className="font-['Caveat_Brush'] text-[16px] text-black mb-4 leading-[1.2] font-[Inter] font-bold">
                Open to conversation, projects<br />
                and internship roles!
              </p>
              <p className="font-['Caveat_Brush'] text-[#747474] text-[16px] font-[Inter] font-bold">
                Designed & developed with love by Deepika :)
              </p>
            </div>

          </div>
        </div>

      </motion.main>
    </div>
  );
}