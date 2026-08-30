import svgPaths from "@/imports/svg-g3o4r0xxkh";
import svgPathsWhite from "@/imports/svg-ocqaqtaqae";
import svgPathsNew from "@/imports/svg-kgam4hsd0c";
import imgImage49 from "figma:asset/6e4de7965720e764d62d472550ce59788110d82a.png";
import imgMayoClinic from "figma:asset/fa0fa915ca52b7cc2b903914318e7d7aeda70798.png";
import imgImage6 from "figma:asset/bcc7cc50715b9dc29a1ddec75f64cb2803e0e1f2.png";
import imgImage3 from "figma:asset/9b1d984b5a3331721ca8520d91e1dae8087d3753.png";
import imgImage5 from "figma:asset/913c7bdd0782127c6add2bf191da6da72c1d498a.png";
import imgImage2 from "figma:asset/e2a3f144890df13d498134c35c69a488c3384e95.png";
import imgMayoHover from "figma:asset/7cec038dc695b271cf7a02627140ad70f778973a.png";
import Group33 from "@/imports/Group33";
import Group26 from "@/imports/Group26";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface PillData {
  label: string;
  value?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  pills: PillData[];
  company: string;
  timeline: string;
  duration: string;
  images: string[] | {
    main?: string;
    mainStyle?: React.CSSProperties;
    mainClassName?: string;
    background?: {
      src: string;
      style: React.CSSProperties;
      className: string;
    };
    rotated1?: {
      src: string;
      rotation: number;
      style: React.CSSProperties;
      imageStyle: React.CSSProperties;
    };
    rotated2?: {
      src: string;
      rotation: number;
      style: React.CSSProperties;
      imageStyle: React.CSSProperties;
    };
  };
  folderColor: string;
  reverse?: boolean;
  staticImage?: string;
  defaultComponent?: React.ReactNode;
  hoverImage?: string;
  hoverComponent?: React.ReactNode;
  caseStudyLink?: string;
}

export function ProjectCard({
  title,
  description,
  pills,
  company,
  timeline,
  duration,
  images,
  folderColor,
  reverse = false,
  staticImage,
  defaultComponent,
  hoverImage,
  hoverComponent,
  caseStudyLink
}: ProjectCardProps) {
  const isHovered = false;

  // Check if images is an array or detailed object
  const isArrayFormat = Array.isArray(images);

  const cardContent = (
    <div
      className={`flex flex-col items-center justify-center py-4 gap-4 text-center mx-auto w-full ${caseStudyLink ? 'cursor-pointer' : ''}`}
    >
      {/* Folder with images */}
      <div className="relative p-0 flex justify-center items-center my-2">
        {/* Layered collage card - Scaled for centered single column */}
        <div 
          className="relative w-[320px] h-[250px] sm:w-[460px] sm:h-[360px] lg:w-[520px] lg:h-[400px] flex justify-center items-center"
        >
          {/* Inner container matching exact 422px artwork width, scaled symmetrically from center */}
          <div className="relative w-[422px] h-[334px] scale-[0.72] sm:scale-[1.05] lg:scale-[1.2] origin-center flex justify-center items-center">
            {/* Doodle decorations - Stars (top left) */}
            <motion.div 
              className={`absolute -left-8 -top-4 w-[45px] h-[58px] pointer-events-none hidden lg:block`}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
            >
              <Group33 />
            </motion.div>

            {/* Doodle decorations - Stars (top right) */}
            <motion.div 
              className={`absolute -right-4 top-8 w-[45px] h-[58px] pointer-events-none hidden lg:block`}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Group33 />
            </motion.div>

            {/* Default state (visible when not hovered) */}
            {/* On mobile, we always show this state and ignore hover effects */}
            <div className={`transition-opacity duration-500 ${isHovered && (hoverImage || hoverComponent) ? 'lg:opacity-0 lg:pointer-events-none' : 'opacity-100'}`}>
              {defaultComponent ? (
                defaultComponent
              ) : staticImage ? (
                <div className="relative w-full max-w-[422px] mx-auto h-[334px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center justify-center">
                  <img
                    src={staticImage}
                    alt={title}
                    className="w-full h-full object-contain pointer-events-none select-none"
                  />
                </div>
              ) : (
                <div className="relative w-full max-w-[422px] mx-auto h-[334px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex justify-center">
                  {/* Left rotated image */}
                  <motion.div 
                    className="absolute flex h-[220.677px] items-center justify-center left-[53px] top-0 w-[176.658px]"
                    animate={{ x: isHovered ? -5 : 0, y: isHovered ? -5 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex-none rotate-[-9.77deg]">
                      <div className="h-[198.95px] relative rounded-[12.376px] w-[144.986px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12.376px]">
                          <img
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            src={isArrayFormat ? images[0] : images.rotated1?.src}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right rotated image */}
                  <motion.div 
                    className="absolute flex h-[219.772px] items-center justify-center left-[196px] top-[7.71px] w-[171.33px]"
                    animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex-none rotate-[6.37deg]">
                      <div className="h-[204.447px] relative rounded-[9.89px] w-[149.584px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.89px]">
                          <img
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            src={isArrayFormat ? images[1] : images.rotated2?.src}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Main center background image */}
                  <div className="absolute h-[187px] left-[9.25px] rounded-[21.016px] top-[37px] w-[403px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21.016px]">
                      <img
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        src={isArrayFormat ? images[2] : images.background?.src}
                      />
                    </div>
                  </div>

                  {/* White rounded panel overlay */}
                  <div className="absolute h-[213.868px] left-0 top-[119.92px] w-[421.554px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 421.554 213.868">
                      <path d={svgPathsNew.p225efff0} fill="white" />
                    </svg>
                  </div>

                  {/* Visually Balanced Text Content inside white panel */}
                  <div className="absolute flex flex-col font-['Manrope'] items-start text-left left-[32px] top-[154px] w-[350px] pointer-events-none z-10">
                    <h4 className="text-[22px] font-extrabold text-black tracking-tight leading-tight">{company}</h4>
                  </div>

                  {/* About / Metadata at the bottom */}
                  <div className="absolute flex flex-col font-['Manrope'] items-start text-left left-[32px] bottom-[32px] w-[350px] pointer-events-none z-10">
                    <span className="text-[12px] font-bold tracking-wider uppercase text-gray-500">{timeline}</span>
                    <span className="text-[13px] font-medium text-gray-400 mt-0.5">{duration}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Hover state (visible when hovered) - hidden on touch devices */}
            <motion.div 
              className={`absolute inset-0 hidden lg:block`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered && (hoverImage || hoverComponent) ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {hoverImage && <img
                  src={hoverImage}
                  alt="Project details"
                  className="w-full h-auto object-contain"
                />}
                {hoverComponent && hoverComponent}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Centered Category/Metric Chips */}
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-2 mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {pills.map((pill, i) => (
          <motion.span
            key={i}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] lg:text-[12px] font-semibold tracking-wide uppercase border border-gray-200 bg-gray-50 text-gray-600 whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }}
          >
            <span>{pill.label}</span>
            {pill.value && (
              <>
                <span className="text-emerald-500 text-[13px] leading-none">↑</span>
                <span className="text-emerald-600 font-bold">{pill.value}</span>
              </>
            )}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );

  if (caseStudyLink) {
    return (
      <Link to={caseStudyLink} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}