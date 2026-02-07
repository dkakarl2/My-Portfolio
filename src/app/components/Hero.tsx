import svgPaths from "@/imports/svg-g3o4r0xxkh";
import svgPathsRecruiter from "@/imports/svg-84xquja2n6";
import svgPathsDesigners from "@/imports/svg-i6hjrkdulj";
import svgPathsEngineers from "@/imports/svg-fijr3vxu39";
import imgImage49 from "figma:asset/6e4de7965720e764d62d472550ce59788110d82a.png";
import imgImage47 from "figma:asset/5a289eeecaadd3236ae5bc773c168b62d25e0654.png";
import imgImage48Hover from "figma:asset/64e38f4a89033dda3d8718d3f85d0d54da6e10b7.png";
import imgRectangle14249 from "figma:asset/eedfe714d0cf5d8f385501febadac14123fb1435.png";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Group72 from "@/imports/Group72";
import Group45 from "@/imports/Group45";

export function Hero() {
  const [activeTab, setActiveTab] = useState<string>("anyone");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isImageHovered, setIsImageHovered] = useState<boolean>(false);

  return (
    <section className="pt-32 lg:pt-56 pb-20 lg:pb-60 px-8 lg:px-0 lg:pl-[204px] max-w-[1224px] mx-auto overflow-hidden lg:overflow-visible">
      <div className="relative flex flex-col lg:block">
        {/* Category tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-4 lg:gap-6 mb-8 lg:mb-12"
        >
          <button 
            onClick={() => setActiveTab("anyone")}
            className={`font-['Inter'] font-bold text-sm transition-colors ${
              activeTab === "anyone" ? "text-black" : "text-[#bfbfbf] hover:text-black"
            }`}
          >
            For anyone
          </button>
          <button 
            onClick={() => setActiveTab("recruiters")}
            className={`font-['Inter'] font-bold text-sm transition-colors ${
              activeTab === "recruiters" ? "text-black" : "text-[#bfbfbf] hover:text-black"
            }`}
          >
            For recruiters
          </button>
          <button 
            onClick={() => setActiveTab("designers")}
            className={`font-['Inter'] font-bold text-sm transition-colors ${
              activeTab === "designers" ? "text-black" : "text-[#bfbfbf] hover:text-black"
            }`}
          >
            For product designers
          </button>
          <button 
            onClick={() => setActiveTab("engineers")}
            className={`font-['Inter'] font-bold text-sm transition-colors ${
              activeTab === "engineers" ? "text-black" : "text-[#bfbfbf] hover:text-black"
            }`}
          >
            For engineers
          </button>
        </motion.div>

        {/* Content container */}
        <div className="flex flex-col gap-[18px] mb-16">
          {/* Hello intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-1"
          >
            <p className="font-['Caveat_Brush'] text-xl lg:text-2xl text-[#747474]">
              Hello, I'm Deepika
            </p>
            <div className="w-[20px] h-[23px] lg:w-[23px] lg:h-[26px] relative">
              <img 
                src={imgImage49} 
                alt="" 
                className="absolute left-[-38.58%] top-[-24.59%] w-[173.27%] h-[150.81%] max-w-none object-contain"
              />
            </div>
          </motion.div>

          {/* Main headline with AnimatePresence for smooth transitions */}
          <div className="relative min-h-[160px] lg:min-h-[200px]">
            <AnimatePresence mode="wait">
              {activeTab === "anyone" && (
                <motion.div 
                  key="anyone"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0 }}
                  className="relative lg:absolute"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h1 className="font-['Inter'] font-bold lg:text-[48px] leading-tight lg:leading-[50px] text-black text-[28px]">
                    I{" "}
                    <motion.span 
                      className="inline-block"
                      initial={{ color: "#000000" }}
                      animate={{ color: isHovered ? "#4AB7C4" : "#E74973" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.5, 
                        ease: "easeInOut"
                      }}
                    >
                      design digital products
                    </motion.span>{" "}
                    the way<br className="hidden lg:block" />
                    architects design spaces - with<br className="hidden lg:block" />
                    intention, usability, and flow.
                  </h1>
                </motion.div>
              )}

              {activeTab === "recruiters" && (
                <motion.div 
                  key="recruiters"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0 }}
                  className="relative lg:absolute"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h1 className="font-['Inter'] font-bold lg:text-[48px] leading-tight lg:leading-[50px] text-black text-[27px]">
                    A Systems-minded UX designer and<br className="hidden lg:block" />
                    researcher, collaborative team player<br className="hidden lg:block" />
                    seeking{" "}
                    <motion.span 
                      className="inline-block"
                      initial={{ color: "#000000" }}
                      animate={{ color: isHovered ? "#4AB7C4" : "#E74973" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.5, 
                        ease: "easeInOut"
                      }}
                    >
                      internship opportunities
                    </motion.span>.
                  </h1>
                </motion.div>
              )}

              {activeTab === "designers" && (
                <motion.div 
                  key="designers"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0 }}
                  className="relative lg:absolute"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h1 className="font-['Inter'] font-bold lg:text-[48px] leading-tight lg:leading-[50px] text-black text-[28px]">
                    A Product designer focused on<br className="hidden lg:block" />
                    interaction logic, scalable usability,<br className="hidden lg:block" />
                    and consistent{" "}
                    <motion.span 
                      className="inline-block"
                      initial={{ color: "#000000" }}
                      animate={{ color: isHovered ? "#4AB7C4" : "#E74973" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.5, 
                        ease: "easeInOut"
                      }}
                    >
                      experience systems
                    </motion.span>.
                  </h1>
                </motion.div>
              )}

              {activeTab === "engineers" && (
                <motion.div 
                  key="engineers"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0 }}
                  className="relative lg:absolute"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h1 className="font-['Inter'] font-bold lg:text-[48px] leading-tight lg:leading-[50px] text-black text-[28px]">
                    I design with{" "}
                    <motion.span 
                      className="inline-block"
                      initial={{ color: "#000000" }}
                      animate={{ color: isHovered ? "#4AB7C4" : "#E74973" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.5, 
                        ease: "easeInOut"
                      }}
                    >
                      feasibility
                    </motion.span>{" "}
                    in mind,<br className="hidden lg:block" />
                    clear flows, edge cases, and<br className="hidden lg:block" />
                    implementation-ready systems.
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Doodle illustration - positioned absolutely on desktop, relative on mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-8 lg:mt-0 lg:absolute lg:left-[-102px] lg:top-[240px] w-48 h-40 lg:w-[261.29px] lg:h-[234.04px] cursor-pointer mx-auto lg:mx-0 hidden lg:block"
          style={{ transform: 'rotate(12.33deg)' }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <img 
            src={isImageHovered ? imgImage48Hover : imgImage47} 
            alt="Doodle character" 
            className="w-full h-full object-contain transition-opacity duration-300"
          />
        </motion.div>

        {/* Hover to say hi text - positioned near doodle */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden lg:block absolute left-[-180px] top-[490px] w-[87px] h-[66px]"
        >
          <Group72 />
        </motion.div>

        {/* Current role - positioned parallel to doodle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 lg:mt-0 lg:absolute lg:left-[612px] lg:top-[300px] w-[248px] h-[66px] mx-auto lg:mx-0"
        >
          <Group45 />
        </motion.div>
      </div>
    </section>
  );
}