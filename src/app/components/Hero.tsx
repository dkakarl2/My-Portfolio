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
import { ScribbleHighlight } from "@/app/components/ScribbleHighlight";

export function Hero() {
  const [activeTab, setActiveTab] = useState<string>("anyone");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const tabs = [
    { id: "anyone", label: "For anyone" },
    { id: "designers", label: "For product designers" },
    { id: "engineers", label: "For engineers" }
  ];

  return (
    <section className="h-screen min-h-[650px] flex flex-col justify-center pt-20 pb-20 px-8 lg:px-0 lg:pl-[204px] max-w-[1224px] mx-auto overflow-hidden lg:overflow-visible relative">
      <div className="relative flex flex-col lg:block">
        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-3 lg:gap-4 mb-8 lg:mb-12"
        >
          {tabs.map((tab, i) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-4 py-2 font-['Inter'] font-bold text-sm rounded-full border transition-colors"
              style={{
                borderColor: activeTab === tab.id ? '#000' : '#e0e0e0',
                color: activeTab === tab.id ? '#000' : '#999',
              }}
              whileHover={{ scale: 1.05, borderColor: '#000' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + i * 0.06,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="relative z-10">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-black rounded-full -z-0"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              {activeTab === tab.id && (
                <span className="relative z-10 text-white" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                  {tab.label}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Content container */}
        <div className="flex flex-col gap-[18px] mb-16">
          {/* Hello intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-1"
          >
            <p className="font-['Caveat_Brush'] text-xl lg:text-2xl text-[#747474]">
              Hello, I'm Deepika
            </p>
            <motion.div 
              className="w-[20px] h-[23px] lg:w-[23px] lg:h-[26px] relative"
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <img
                src={imgImage49}
                alt=""
                className="absolute left-[-38.58%] top-[-24.59%] w-[173.27%] h-[150.81%] max-w-none object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Main headline with AnimatePresence for smooth transitions */}
          <div className="relative min-h-[160px] lg:min-h-[200px]">
            <AnimatePresence mode="wait">
              {activeTab === "anyone" && (
                <motion.div
                  key="anyone"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative lg:absolute"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h1 className="font-['Inter'] font-bold lg:text-[48px] leading-tight lg:leading-[50px] text-black text-[28px]">
                    I{" "}
                    <div className="inline-block relative z-10 mx-2 lg:mx-3 align-bottom lg:align-baseline">
                      <ScribbleHighlight active={true} color={isHovered ? "#4AB7C4" : "#E74973"}>
                        design
                      </ScribbleHighlight>
                    </div>{" "}
                    digital products the way<br className="hidden lg:block" />
                    architects design spaces - with<br className="hidden lg:block" />
                    intention, usability, and flow.
                  </h1>
                </motion.div>
              )}



              {activeTab === "designers" && (
                <motion.div
                  key="designers"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative lg:absolute"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h1 className="font-['Inter'] font-bold lg:text-[48px] leading-tight lg:leading-[50px] text-black text-[28px]">
                    A Product designer focused on<br className="hidden lg:block" />
                    interaction logic, scalable usability,<br className="hidden lg:block" />
                    and consistent{" "}
                    <div className="inline-block relative z-10 mx-2 lg:mx-3 align-bottom lg:align-baseline">
                      <ScribbleHighlight active={true} color={isHovered ? "#4AB7C4" : "#E74973"}>
                        experience
                      </ScribbleHighlight>
                    </div>{" "}
                    systems.
                  </h1>
                </motion.div>
              )}

              {activeTab === "engineers" && (
                <motion.div
                  key="engineers"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative lg:absolute"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h1 className="font-['Inter'] font-bold lg:text-[48px] leading-tight lg:leading-[50px] text-black text-[28px]">
                    I design with{" "}
                    <div className="inline-block relative z-10 mx-2 lg:mx-3 align-bottom lg:align-baseline">
                      <ScribbleHighlight active={true} color={isHovered ? "#4AB7C4" : "#E74973"}>
                        feasibility
                      </ScribbleHighlight>
                    </div>{" "}
                    in mind,<br className="hidden lg:block" />
                    clear flows, edge cases, and<br className="hidden lg:block" />
                    implementation-ready systems.
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Doodle illustration - original image with hover and float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 12.33 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -12, 0],
            rotate: [12.33, 14, 12.33, 10, 12.33]
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative mt-8 lg:mt-0 lg:absolute lg:left-[-102px] lg:top-[300px] w-48 h-40 lg:w-[261.29px] lg:h-[234.04px] cursor-pointer mx-auto lg:mx-0 hidden lg:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? imgImage48Hover : imgImage47}
            alt="Doodle character"
            className="w-full h-full object-contain transition-opacity duration-200"
          />
        </motion.div>

        {/* Current role - positioned parallel to doodle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 lg:mt-0 lg:absolute lg:left-[612px] lg:top-[320px] w-[360px] h-[66px] mx-auto lg:mx-0"
        >
          <Group45 />
        </motion.div>
      </div>
    </section>
  );
}