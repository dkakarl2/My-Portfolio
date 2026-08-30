import svgPaths from "@/imports/svg-dci3l10n81";
import svgPathsNew from "@/imports/svg-kgam4hsd0c";
import imgImage16911 from "figma:asset/67aee641ecd76d0b0f2898ddf43c5f01345d07a9.png";
import imgImage16909 from "figma:asset/33a2ac31f2cd76bd788e5b15fbe0ec733176a791.png";

export function AisleDefaultCard() {
  return (
    <div className="relative w-full max-w-[422px] mx-auto h-[334px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center justify-center">
      <div className="relative w-[422px] h-[334px] rounded-[12px] overflow-hidden">
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

        {/* Visually Balanced Text Content inside white panel */}
        <div className="absolute flex flex-col font-['Manrope'] items-start text-left left-[32px] top-[154px] w-[350px] pointer-events-none z-10">
          <h4 className="text-[22px] font-extrabold text-black tracking-tight leading-tight">Aisle</h4>
        </div>

        {/* About / Metadata at the bottom */}
        <div className="absolute flex flex-col font-['Manrope'] items-start text-left left-[32px] bottom-[32px] w-[350px] pointer-events-none z-10">
          <span className="text-[12px] font-bold tracking-wider uppercase text-gray-500">AI Agent Experience</span>
          <span className="text-[13px] font-medium text-gray-400 mt-0.5">2026 SaaS Product</span>
        </div>
      </div>
    </div>
  );
}

export function AisleHoverCard() {
  return (
    <div className="relative w-full max-w-[526px] h-[462px] mx-auto flex items-center justify-center">
      <div className="relative w-[488px] h-[462px]">
        {/* Floating pill badge "Multi-Agent UX" */}
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-[#F3F4F6] border-[1.5px] border-black rounded-full px-5 py-1.5 flex items-center justify-center shadow-sm z-20 pointer-events-none whitespace-nowrap">
          <span className="font-['Manrope'] font-bold text-black text-[13px] tracking-wide">
            Multi-Agent UX
          </span>
        </div>

        {/* Top expanded artwork collage (phones, tablet, black card) - cropped top 42px to eliminate legacy PNG pill */}
        <div className="absolute top-[36px] left-0 w-full h-[196px] overflow-hidden">
          <img
            alt="Aisle project expanded"
            className="w-full h-[462px] object-cover -mt-[42px]"
            src={imgImage16911}
          />
        </div>

        {/* Vector white rounded panel overlay with drop shadow matching EduFund hover */}
        <div className="absolute h-[213.868px] left-[33px] top-[215px] w-[421.554px]">
          <div className="absolute inset-[-2.84%_-2.03%_-7.48%_-3.21%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 445.06 236.67">
              <g filter="url(#filter0_d_aisle_hover)" id="Vector 64">
                <path d={svgPaths.p3d5f4300} fill="white" />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="236.67"
                  id="filter0_d_aisle_hover"
                  width="445.06"
                  x="-2.38419e-07"
                  y="0"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="-2.48082" dy="4.96164" />
                  <feGaussianBlur stdDeviation="5.51983" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_aisle_hover" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_aisle_hover" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* Text content inside white panel */}
        <div className="absolute content-stretch flex flex-col font-['Manrope'] font-medium justify-between h-[160px] items-start leading-[normal] left-[59.54px] not-italic top-[241.58px] w-[180px]">
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
  );
}
