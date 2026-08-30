import image_b666cafd2dcbbabf097ae8f0dc06bfaface97220 from 'figma:asset/b666cafd2dcbbabf097ae8f0dc06bfaface97220.png';
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { VideoHero } from "@/app/components/VideoHero";
import { FramedImage } from "@/app/components/FramedImage";
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
import { BookShelf } from "@/app/components/BookShelf";
import { Education } from "@/app/components/Education";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";
import aboutHeroDoodle from "@/assets/About section hero doodle.png";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="overflow-x-hidden">
        <Navigation hideTopHeader={false} />
        
        {/* Video Hero Section - Hidden for now */}
        {/* <div className="pb-4">
          <VideoHero />
        </div> */}

        {/* Light Interactive Hero Section */}
        <div 
          className="w-full bg-[#FAFAFA] text-gray-900 relative z-10 pt-32 lg:pt-48 pb-20 lg:pb-32 rounded-b-[40px] lg:rounded-b-[60px] shadow-sm overflow-hidden border-b border-gray-100"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

          <div className="max-w-[1320px] mx-auto px-8 lg:px-0 relative">
            
            {/* Top Right Hero Doodle */}
            <motion.div
              className="absolute top-[-40px] right-[-20px] lg:top-[-80px] lg:right-[-60px] z-0 pointer-events-none hidden md:block origin-bottom"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={aboutHeroDoodle} alt="Hero doodle" className="w-[300px] lg:w-[500px] object-contain drop-shadow-xl opacity-95" />
              </motion.div>
            </motion.div>

            <div className="flex flex-col relative z-10">
              {/* Left Text Content */}
              <div className="max-w-3xl">
                 {/* Title */}
                 <motion.h1 
                   className="font-['Manrope'] font-bold text-[40px] lg:text-[72px] leading-[1.1] tracking-tight mb-8 text-gray-900"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                 >
                     Bringing order to <br className="hidden lg:block"/>
                     <motion.span 
                       className="relative inline-block cursor-pointer group"
                       whileHover={{ scale: 1.05, rotate: -2 }}
                       transition={{ type: "spring", stiffness: 400, damping: 10 }}
                     >
                       <span className="font-['Manrope'] italic font-normal text-[#F59E0B] relative z-10">complex</span>
                       <svg className="absolute w-[110%] h-[20px] bottom-[-2px] left-[-5%] z-0 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
                         <motion.path d="M5 15 C 30 5, 70 20, 95 5" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" 
                           initial={{ pathLength: 0 }}
                           animate={{ pathLength: 1 }}
                           transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                         />
                         <motion.path d="M5 15 C 30 5, 70 20, 95 5" stroke="#FCD34D" strokeWidth="4" strokeLinecap="round" 
                           className="opacity-0 group-hover:opacity-100"
                           initial={{ pathLength: 1, pathOffset: 1 }}
                           whileHover={{ pathOffset: 0 }}
                           transition={{ duration: 0.4 }}
                         />
                       </svg>
                     </motion.span> systems.
                   </motion.h1>

                   {/* Subtitle */}
                   <motion.p 
                     className="font-['Manrope'] text-lg lg:text-[20px] text-gray-600 max-w-lg leading-relaxed mb-10"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                   >
                     I'm a UX designer who specializes in systems thinking, AI-first interactions, and transforming ambiguity into seamless user journeys.
                   </motion.p>
                </div>
              </div>

              {/* Bottom Expertise Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 lg:mt-16 relative z-10">
                 {/* Card 1 */}
                 <motion.div 
                   className="bg-white border border-gray-200/60 shadow-sm rounded-[32px] p-8 origin-center cursor-pointer"
                   initial={{ opacity: 0, y: 40, rotate: -3 }}
                   animate={{ opacity: 1, y: 0, rotate: -3 }}
                   whileHover={{ 
                     rotate: 0, 
                     scale: 1.03, 
                     y: -8, 
                     backgroundColor: "#F9FAFB",
                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
                     transition: { type: "spring", stiffness: 400, damping: 25 }
                   }}
                   transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                 >
                    <div className="w-12 h-12 mb-6">
                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                         <rect x="10" y="3" width="4" height="4" rx="1"/>
                         <rect x="3" y="17" width="4" height="4" rx="1"/>
                         <rect x="10" y="17" width="4" height="4" rx="1"/>
                         <rect x="17" y="17" width="4" height="4" rx="1"/>
                         <path d="M12 7v4"/>
                         <path d="M5 17v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/>
                       </svg>
                    </div>
                    <h3 className="font-['Manrope'] font-bold text-2xl text-gray-900 mb-4">Design Systems</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      Building scalable, accessible component libraries that empower teams to build consistent products faster and more efficiently.
                    </p>
                 </motion.div>

                 {/* Card 2 */}
                 <motion.div 
                   className="bg-white border border-gray-200/60 shadow-sm rounded-[32px] p-8 origin-center cursor-pointer"
                   initial={{ opacity: 0, y: 40, rotate: 2 }}
                   animate={{ opacity: 1, y: 0, rotate: 2 }}
                   whileHover={{ 
                     rotate: 0, 
                     scale: 1.03, 
                     y: -8, 
                     backgroundColor: "#F9FAFB",
                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
                     transition: { type: "spring", stiffness: 400, damping: 25 }
                   }}
                   transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                 >
                    <div className="w-12 h-12 mb-6">
                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E74973" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/>
                       </svg>
                    </div>
                    <h3 className="font-['Manrope'] font-bold text-2xl text-gray-900 mb-4">AI-First UX</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      Designing intuitive interfaces for complex machine learning models, bringing clarity and control to generative AI experiences.
                    </p>
                 </motion.div>

                 {/* Card 3 */}
                 <motion.div 
                   className="bg-white border border-gray-200/60 shadow-sm rounded-[32px] p-8 origin-center cursor-pointer"
                   initial={{ opacity: 0, y: 40, rotate: -2 }}
                   animate={{ opacity: 1, y: 0, rotate: -2 }}
                   whileHover={{ 
                     rotate: 0, 
                     scale: 1.03, 
                     y: -8, 
                     backgroundColor: "#F9FAFB",
                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
                     transition: { type: "spring", stiffness: 400, damping: 25 }
                   }}
                   transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                 >
                    <div className="w-12 h-12 mb-6">
                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4AB7C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                         <path d="M13 13l6 6"/>
                       </svg>
                    </div>
                    <h3 className="font-['Manrope'] font-bold text-2xl text-gray-900 mb-4">Interaction Design</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      Crafting meaningful micro-interactions and smooth prototypes that breathe life and delight into digital experiences.
                    </p>
                 </motion.div>
              </div>
            </div>
          </div>

        <main className="py-10 lg:py-20 px-8 lg:px-0">
          {/* My Journey So Far Section */}
          <RevealOnScroll className="max-w-[1320px] mx-auto mt-20 lg:mt-32" width="100%">
            <div className="relative min-h-[500px] lg:h-[1050px] lg:ml-[-70px]">
              <AboutMyJourneySoFar />
            </div>
          </RevealOnScroll>



          {/* Education Section */}
          <RevealOnScroll className="max-w-[1320px] mx-auto mt-10 lg:mt-20" width="100%">
            <Education />
          </RevealOnScroll>

          {/* What I Bring Section */}
          <RevealOnScroll className="mt-20 lg:mt-32 -mx-8 lg:mx-0 overflow-hidden" width="100%">
            <div className="relative min-h-[500px] lg:h-[700px]">
              <AboutWhatIBring />
            </div>
          </RevealOnScroll>

          {/* Testimonials Section */}
          <RevealOnScroll className="mt-20 lg:mt-32 w-full" width="100%">
            <div className="relative min-h-[500px] lg:h-[1350px] overflow-visible w-full">
              <AboutTestimonials />
            </div>
          </RevealOnScroll>

          {/* Bookshelf Section */}
          <RevealOnScroll className="mt-10 lg:-mt-20 -mx-8 lg:mx-0" width="100%">
            <BookShelf />
          </RevealOnScroll>

          {/* Time Off Clock Section */}
          <RevealOnScroll className="mt-20 lg:mt-32 -mx-8 lg:mx-0 overflow-hidden" width="100%">
            <div className="relative min-h-[550px] lg:h-[850px]">
              <TimeOffClock />
            </div>
          </RevealOnScroll>
        </main>

        <Footer />
      </div>
    </div>
  );
}

