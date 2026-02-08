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

          <div className="flex items-center gap-4">
            <div className="w-5 h-6 lg:w-6 lg:h-7 relative flex-shrink-0">
              {/* Animated blue star with shine */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full animate-star-shine"
              >
                <path
                  d="M12 2L14.09 8.26L21 9.27L16 13.97L17.18 21L12 17.77L6.82 21L8 13.97L3 9.27L9.91 8.26L12 2Z"
                  fill="url(#blueStarGradientAisle)"
                  stroke="url(#blueStarStrokeAisle)"
                  strokeWidth="0.5"
                />
                <defs>
                  <linearGradient id="blueStarGradientAisle" x1="12" y1="2" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#60A5FA" />
                    <stop offset="0.5" stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#2563EB" />
                  </linearGradient>
                  <linearGradient id="blueStarStrokeAisle" x1="12" y1="2" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#93C5FD" />
                    <stop offset="1" stopColor="#60A5FA" />
                  </linearGradient>
                </defs>
              </svg>
              <style>{`
                @keyframes starShine {
                  0%, 100% {
                    transform: scale(1);
                    opacity: 1;
                  }
                  50% {
                    transform: scale(1.15);
                    opacity: 0.85;
                  }
                }
                .animate-star-shine {
                  animation: starShine 2s ease-in-out infinite;
                }
              `}</style>
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