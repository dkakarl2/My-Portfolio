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

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
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
  hoverImage?: string;
  hoverComponent?: React.ReactNode;
  caseStudyLink?: string;
}

export function ProjectCard({
  title,
  description,
  role,
  company,
  timeline,
  duration,
  images,
  folderColor,
  reverse = false,
  hoverImage,
  hoverComponent,
  caseStudyLink
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Check if images is an array or detailed object
  const isArrayFormat = Array.isArray(images);

  const cardContent = (
    <div className={`grid grid-cols-1 lg:grid-cols-2 items-center py-6 gap-6 lg:gap-0 ${caseStudyLink ? 'cursor-pointer' : ''}`}>
      {/* Folder with images */}
      <div className={`relative p-0 ${reverse ? 'lg:col-start-2' : 'lg:col-start-1'} flex justify-center items-center`}>
        {/* Layered collage card - Scaled for mobile */}
        <div className="relative w-[320px] h-[300px] sm:w-[488px] sm:h-[462px] lg:w-[488px] lg:h-[462px] transition-transform origin-center lg:origin-top-left">
          {/* Inner container with original fixed dimensions, scaled via transform on parent or using style scale */}
          <div
            className="absolute top-0 left-0 w-[488px] h-[462px] scale-[0.65] sm:scale-100 origin-top-left"
            onMouseEnter={() => (hoverImage || hoverComponent) && setIsHovered(true)}
            onMouseLeave={() => (hoverImage || hoverComponent) && setIsHovered(false)}
          >
            {/* Doodle decorations - Stars (top left) */}
            <div className={`absolute -left-8 -top-4 w-[45px] h-[58px] transition-opacity duration-500 pointer-events-none hidden lg:block ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <Group33 />
            </div>

            {/* Doodle decorations - Stars (top right) */}
            <div className={`absolute -right-4 top-8 w-[45px] h-[58px] transition-opacity duration-500 pointer-events-none hidden lg:block ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <Group33 />
            </div>

            {/* Default state (visible when not hovered) */}
            {/* On mobile, we always show this state and ignore hover effects */}
            <div className={`transition-opacity duration-500 ${isHovered && (hoverImage || hoverComponent) ? 'lg:opacity-0 lg:pointer-events-none' : 'opacity-100'}`}>
              <div className="relative w-full max-w-[422px] mx-auto h-[334px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                {/* Left rotated image */}
                <div className="absolute flex h-[220.677px] items-center justify-center left-[45.74px] top-0 w-[176.658px]">
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
                </div>

                {/* Right rotated image */}
                <div className="absolute flex h-[219.772px] items-center justify-center left-[186px] top-[7.71px] w-[171.33px]">
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
                </div>

                {/* Main center background image */}
                <div className="absolute h-[187px] left-[10px] rounded-[21.016px] top-[37px] w-[403px]">
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

                {/* Text content inside white panel */}
                <div className="absolute content-stretch flex flex-col font-['Inter'] font-medium gap-[73px] h-[160px] items-start leading-[normal] left-[26.54px] not-italic top-[146.58px] w-auto">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[20px] w-[152.056px]">
                    <p className="relative shrink-0 text-black w-full">{timeline}</p>
                    <p className="relative shrink-0 text-[#797979] w-full">{duration}</p>
                  </div>
                  <p className="min-w-full relative shrink-0 text-[24px] text-black w-auto whitespace-nowrap">{company}</p>
                </div>
              </div>
            </div>

            {/* Hover state (visible when hovered) - hidden on touch devices */}
            <div className={`absolute inset-0 transition-opacity duration-500 hidden lg:block ${isHovered && (hoverImage || hoverComponent) ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="relative w-full h-full flex items-center justify-center">
                {hoverImage && <img
                  src={hoverImage}
                  alt="Mayo Clinic project details"
                  className="w-full h-auto object-contain"
                />}
                {hoverComponent && hoverComponent}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project description */}
      <div
        className={`space-y-4 w-full lg:w-fit px-4 lg:px-0 mx-auto ${reverse ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-2'}`}
        onMouseEnter={() => (hoverImage || hoverComponent) && setIsHovered(true)}
        onMouseLeave={() => (hoverImage || hoverComponent) && setIsHovered(false)}
      >
        <h3 className="font-['Inter'] font-semibold text-lg lg:text-xl leading-normal text-black max-w-full lg:max-w-[430px]">
          {description}
        </h3>

        <div className="flex items-start gap-4">
          <div className="w-5 h-6 lg:w-6 lg:h-7 relative flex-shrink-0">
            <img
              src={imgImage49}
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          <p className="font-['Inter'] text-sm lg:text-base text-[#8a8a8a] font-[Caveat_Brush]">
            <span className="font-['Caveat_Brush']">Role - </span>
            {role}
          </p>
        </div>
      </div>
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