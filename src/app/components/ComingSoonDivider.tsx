import { useState } from "react";
import imgImage49 from "figma:asset/6e4de7965720e764d62d472550ce59788110d82a.png";
import imgImage16909 from "figma:asset/33a2ac31f2cd76bd788e5b15fbe0ec733176a791.png";
import imgImage16911 from "figma:asset/67aee641ecd76d0b0f2898ddf43c5f01345d07a9.png";

export function ComingSoonDivider() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-6 px-8 lg:px-0 max-w-[1224px] mx-auto">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center py-6 gap-8 lg:gap-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Aisle Card Image */}
        <div className="relative flex justify-center lg:block lg:col-start-1 lg:ml-[86px]">
          <div className="relative w-[320px] h-[280px] sm:w-[488px] sm:h-[462px] lg:w-[488px] lg:h-[462px]">
            <div className="absolute top-0 left-0 w-[488px] h-[462px] scale-[0.65] sm:scale-100 origin-top-left flex items-center justify-center">
              {/* Default state */}
              <div className={`transition-opacity duration-500 ${isHovered ? "lg:opacity-0 lg:pointer-events-none" : "opacity-100"}`}>
                <div className="relative w-[422px] h-[340px] rounded-[12px] overflow-hidden">
                  <img
                    alt="Aisle project preview"
                    className="absolute inset-0 w-full h-full object-cover blur-[2px]"
                    src={imgImage16909}
                  />
                  {/* Coming Soon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black text-white font-['Inter'] font-semibold text-[14px] px-5 py-2.5 rounded-full tracking-wide">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover state - just the image */}
              <div className={`absolute inset-0 transition-opacity duration-500 hidden lg:block ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <img
                  alt="Aisle project expanded"
                  className="w-full h-full object-contain blur-[2px]"
                  src={imgImage16911}
                />
                {/* Coming Soon overlay for hover state */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-black text-white font-['Inter'] font-semibold text-[14px] px-5 py-2.5 rounded-full tracking-wide">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aisle description */}
        <div className="space-y-4 w-full lg:w-fit px-4 lg:px-0 lg:col-start-2">
          <h3 className="font-['Inter'] font-semibold text-lg lg:text-xl leading-normal text-black max-w-full lg:max-w-[431px]">
            I designed Aisle, an AI agents manager, to help users move through
            workflows with clarity, context, and intelligence.
          </h3>

          <div className="flex items-start gap-4">
            <div className="w-[23px] h-[26px] relative flex-shrink-0">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]"
                  src={imgImage49}
                />
              </div>
            </div>
            <p className="font-['Caveat_Brush'] text-[#8a8a8a] text-[24px] leading-normal m-0">
              <span className="leading-normal text-[14px]">{`Role -  `}</span>
              <span className="font-['Futura_PT'] leading-normal font-[Caveat_Brush] text-[14px]">
                UX and Interaction Designer
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}