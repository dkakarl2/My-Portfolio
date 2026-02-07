import image_b666cafd2dcbbabf097ae8f0dc06bfaface97220 from 'figma:asset/b666cafd2dcbbabf097ae8f0dc06bfaface97220.png';
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import svgPaths from "@/imports/svg-r7vcy0ei27";
import imgImage57 from "figma:asset/e0480fe29e7283f1e238172b11b16ed405e74c7b.png";
import imgScreenshot20260125At113416Am1 from "figma:asset/e87f2ddee9943f35db7bea368acb9dfcf1c8138e.png";
import imgScreenshot20260125At113228Am1 from "figma:asset/aed1618d966e53476d7dd59623788a481f522bc1.png";
import imgImage58 from "figma:asset/0dfcfcf4dbbb4836070cb890a0e34ef4acc5c113.png";
import { motion } from "motion/react";
import AboutMyJourneySoFar from "@/imports/AboutMyJourneySoFar-47-70";
import AboutWhatIBring from "@/imports/AboutWhatIBring-52-361";
import AboutTestimonials from "@/imports/AboutTestimonials";
import { TimeOffClock } from "@/app/components/TimeOffClock";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="overflow-x-hidden">
        <Navigation />

        <main className="py-20 px-8 lg:px-0">
          {/* Hero Section - Centered within max-width */}
          <div className="max-w-[1320px] mx-auto overflow-hidden">
            <div className="relative min-h-[auto] lg:min-h-[860px] flex flex-col lg:block gap-12 lg:gap-0">

              {/* Main Headline - Mobile: Top, Desktop: Absolute */}
              <div className="relative lg:absolute lg:left-[204px] lg:left-[20px] lg:top-[330px] order-1 lg:order-none">
                <p className="font-['Inter'] font-bold text-3xl lg:text-[48px] leading-tight lg:leading-[50px] text-black max-w-full lg:max-w-[743px]">
                  Because form follows function, I design systems that hold the experience together.
                </p>
              </div>

              {/* Architecture Mindset Text - Mobile: Bottom, Desktop: Absolute */}
              <div className="relative lg:absolute lg:left-[834px] lg:top-[583px] max-w-full lg:max-w-[437px] order-3 lg:order-none">
                <p className="font-['Caveat_Brush'] text-xl lg:text-[24px] leading-[1.2]">
                  <span className="text-[#747474]">An architecture mindset means I think </span>
                  <span className="text-[#191919] bg-[#FFC627]">
                    about foundations, edge cases, and how things hold up over time.
                  </span>
                </p>
              </div>

              {/* Variables Label and Image - Mobile: Stacked, Desktop: Absolute */}
              <motion.div
                className="relative lg:absolute lg:left-[120px] lg:top-[60px] order-2 lg:order-none mx-auto lg:mx-0"
                initial={{ x: -600, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
              >
                <div className="relative">
                  <img
                    alt="Design system variables screenshot"
                    className="w-[280px] lg:w-[301px] h-[216px] lg:h-[233px] object-cover border-2 border-[#FF7F32]"
                    src={imgScreenshot20260125At113228Am1}
                  />
                  {/* Corner dots */}
                  <div className="absolute left-[-9px] top-[-6px] w-[8px] h-[8px] bg-[#FF7F32]" />
                  <div className="absolute right-[-9px] top-[-6px] w-[8px] h-[8px] bg-[#FF7F32]" />
                  <div className="absolute left-[-9px] bottom-[-6px] w-[8px] h-[8px] bg-[#FF7F32]" />
                  <div className="absolute right-[-9px] bottom-[-6px] w-[8px] h-[8px] bg-[#FF7F32]" />

                  {/* Variables label - Hidden on mobile or adjusted */}
                  <div className="hidden lg:flex absolute top-[111px] left-[351px] items-center gap-2">
                    <motion.div
                      className="relative flex items-center justify-center"
                      style={{ transform: 'rotate(-93.2deg)' }}
                    >
                      <svg className="w-[14.548px] h-[12.735px]" fill="none" viewBox="0 0 13.9782 15.9022">
                        <path d={svgPaths.p1c22d000} stroke="#FF7F32" strokeLinecap="round" strokeWidth="2" />
                        <path d={svgPaths.p5e6580} stroke="#FF7F32" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </motion.div>
                    <motion.div className="relative">
                      <svg className="w-[103px] h-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 103 32">
                        <path d="M16 16H87" stroke="#FF7F32" strokeLinecap="round" strokeWidth="32" />
                      </svg>
                      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Caveat_Brush'] text-[20px] text-white leading-normal">
                        Variables
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Component Label and Image */}
              <motion.div
                className="hidden lg:block absolute left-[111px] top-[696px]"
                initial={{ x: -600, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8, delay: 1.8, ease: "easeOut" }}
              >
                <div className="relative">
                  <img
                    alt="Design system component screenshot"
                    className="w-[449px] h-[92px] object-cover border-2 border-[#78BE20]"
                    src={imgImage57}
                  />
                  {/* Corner dots */}
                  <div className="absolute left-[-9px] top-[-6px] w-[8px] h-[8px] bg-[#78BE20]" />
                  <div className="absolute right-[-9px] top-[-6px] w-[8px] h-[8px] bg-[#78BE20]" />
                  <div className="absolute left-[-9px] bottom-[-6px] w-[8px] h-[8px] bg-[#78BE20]" />
                  <div className="absolute right-[-9px] bottom-[-6px] w-[8px] h-[8px] bg-[#78BE20]" />

                  {/* Component label */}
                  <div className="absolute top-[105px] left-[246px]">
                    <div className="relative">
                      {/* Arrow */}
                      <div className="absolute left-[-20px] top-[-10px]">
                        <svg className="w-[14px] h-[16px]" fill="none" viewBox="0 0 13.9782 15.9022">
                          <g>
                            <path d={svgPaths.p1c22d000} stroke="#78BE20" strokeLinecap="round" strokeWidth="2" />
                            <path d={svgPaths.p5e6580} stroke="#78BE20" strokeLinecap="round" strokeWidth="2" />
                          </g>
                        </svg>
                      </div>

                      {/* Button */}
                      <div className="relative">
                        <svg className="w-[114px] h-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 114 32">
                          <path d="M16 16H98" stroke="#78BE20" strokeLinecap="round" strokeWidth="32" />
                        </svg>
                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Caveat_Brush'] text-[20px] text-white leading-normal">
                          Component
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Spacing Label and Image - Hidden on mobile to reduce clutter */}
              <motion.div
                className="hidden lg:block absolute left-[1095px] top-[169px]"
                initial={{ x: 600, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8, delay: 2.8, ease: "easeOut" }}
              >
                <div className="relative">
                  <img
                    alt="Design system spacing screenshot"
                    className="w-[200px] h-[269px] object-cover border-2 border-[#00A3E0]"
                    src={imgScreenshot20260125At113416Am1}
                  />
                  {/* Corner dots */}
                  <div className="absolute left-[-9px] top-[-6px] w-[8px] h-[8px] bg-[#00A3E0]" />
                  <div className="absolute right-[-9px] top-[-6px] w-[8px] h-[8px] bg-[#00A3E0]" />
                  <div className="absolute left-[-9px] bottom-[-6px] w-[8px] h-[8px] bg-[#00A3E0]" />
                  <div className="absolute right-[-9px] bottom-[-6px] w-[8px] h-[8px] bg-[#00A3E0]" />

                  {/* Spacing label */}
                  <div className="absolute top-[80px] left-[-110px] flex items-center gap-2">
                    {/* Button */}
                    <div className="relative">
                      <svg className="w-[92px] h-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 92 32">
                        <path d="M16 16H76" stroke="#00A3E0" strokeLinecap="round" strokeWidth="32" />
                      </svg>
                      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Caveat_Brush'] text-[20px] text-white leading-normal">
                        Spacing
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="relative" style={{ transform: 'rotate(149.14deg)' }}>
                      <svg className="w-[14px] h-[16px]" fill="none" viewBox="0 0 13.9782 15.9022">
                        <g>
                          <path d={svgPaths.p1c22d000} stroke="#00A3E0" strokeLinecap="round" strokeWidth="2" />
                          <path d={svgPaths.p5e6580} stroke="#00A3E0" strokeLinecap="round" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Doodle Character - Hidden on mobile */}
              <div className="hidden lg:block absolute left-[170px] top-[480px]" style={{ transform: 'rotate(-10.22deg)' }}>
                <img
                  alt="Doodle character"
                  className="w-[116px] h-[103px] object-contain"
                  src={image_b666cafd2dcbbabf097ae8f0dc06bfaface97220}
                />
              </div>

            </div>
          </div>

          {/* My Journey So Far Section */}
          <div className="max-w-[1320px] mx-auto mt-20 lg:mt-32">
            <div className="relative min-h-[500px] lg:h-[1050px] lg:ml-[-70px] lg:overflow-hidden">
              <AboutMyJourneySoFar />
            </div>
          </div>

          {/* What I Bring Section */}
          <div className="mt-20 lg:mt-32 -mx-8 lg:mx-0 overflow-hidden">
            <div className="relative min-h-[500px] lg:h-[700px]">
              <AboutWhatIBring />
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="max-w-[1320px] mx-auto mt-20 lg:mt-32">
            <div className="relative min-h-[500px] lg:h-[900px] overflow-visible">
              <AboutTestimonials />
            </div>
          </div>

          {/* Time Off Clock Section */}
          <div className="mt-20 lg:mt-32 -mx-8 lg:mx-0 overflow-hidden">
            <div className="relative min-h-[550px] lg:h-[800px]">
              <TimeOffClock />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
