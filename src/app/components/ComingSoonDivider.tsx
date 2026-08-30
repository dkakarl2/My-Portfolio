import { useState } from "react";
import imgImage16909 from "figma:asset/33a2ac31f2cd76bd788e5b15fbe0ec733176a791.png";
import svgPathsNew from "@/imports/svg-kgam4hsd0c";
import { AisleHoverCard } from "@/app/components/AisleHoverCard";
import { motion } from "motion/react";

export function ComingSoonDivider() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 items-center py-12 gap-8 lg:gap-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Aisle Card Image */}
        <div className="relative flex justify-center lg:block lg:col-start-1 lg:ml-[86px]">
          <motion.div 
            className="relative w-[320px] h-[280px] sm:w-[488px] sm:h-[462px] lg:w-[488px] lg:h-[462px]"
            animate={{ 
              rotate: isHovered ? 1 : 0,
              scale: isHovered ? 1.02 : 1
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute top-0 left-0 w-[488px] h-[462px] scale-[0.65] sm:scale-100 origin-top-left flex items-center justify-center">
              {/* Default state */}
              <div className={`transition-opacity duration-500 ${isHovered ? "lg:opacity-0 lg:pointer-events-none" : "opacity-100"}`}>
                <div className="relative w-[422px] h-[334px] rounded-[12px] overflow-hidden drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                  {/* Background image */}
                  <img
                    alt="Aisle project preview"
                    className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
                    src={imgImage16909}
                  />

                  {/* Vector folder panel overlay covering old tab text */}
                  <div className="absolute h-[213.868px] left-0 top-[119.92px] w-[421.554px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 421.554 213.868">
                      <path d={svgPathsNew.p225efff0} fill="white" />
                    </svg>
                  </div>

                  {/* Text content inside white panel */}
                  <div className="absolute content-stretch flex flex-col font-['Manrope'] font-medium justify-between h-[160px] items-start leading-[normal] left-[26.54px] not-italic top-[146.58px] w-[180px]">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[20px] w-full">
                      <p className="relative shrink-0 text-black w-full leading-snug break-words">
                        AI Agent<br />Experience
                      </p>
                      <p className="relative shrink-0 text-[#797979] w-full">2026</p>
                    </div>
                    <p className="min-w-full relative shrink-0 text-[24px] text-black w-auto whitespace-nowrap">Aisle</p>
                  </div>
                </div>
              </div>

              {/* Hover state - full enlarged image collage with EduFund-style SVG drop shadow */}
              <motion.div 
                className={`absolute inset-0 hidden lg:block`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <AisleHoverCard />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Aisle description */}
        <motion.div 
          className="space-y-4 w-full lg:w-fit px-4 lg:px-0 lg:col-start-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-['Manrope'] font-semibold text-lg lg:text-xl leading-normal text-black max-w-full lg:max-w-[431px]">
            Aisle: An AI agent manager that orchestrates automated workflows with clarity, context, and intelligent feedback.
          </h3>

          <motion.div 
            className="flex flex-wrap items-center gap-2 mt-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { label: "AI Agents" },
              { label: "Workflow Automation" },
              { label: "Multi-Agent UX" },
            ].map((pill, i) => (
              <motion.span
                key={i}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] lg:text-[12px] font-semibold tracking-wide uppercase border border-gray-200 bg-gray-50 text-gray-600 whitespace-nowrap"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.45 + i * 0.07 }}
              >
                <span>{pill.label}</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}