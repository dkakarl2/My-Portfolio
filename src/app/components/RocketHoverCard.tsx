import svgPaths from "@/imports/svg-59cbqrbxlf";
import svgPathsNew from "@/imports/svg-kgam4hsd0c";
import imgPersonGlasses from "figma:asset/db4fc0e5dc254f5a9df2aea11d4166833d910631.png";
import imgImage23 from "figma:asset/fa0fa915ca52b7cc2b903914318e7d7aeda70798.png";
import imgImage22 from "figma:asset/9eeca02bc786feb3f52bfb28300731165d09f8ea.png";
import imgImage12 from "figma:asset/4f82695b46f6d2e8fc2518899c01206d5876a2e4.png";

export function RocketDefaultCard() {
  return (
    <div className="relative w-full max-w-[422px] mx-auto h-[334px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center justify-center">
      <div className="relative w-[422px] h-[334px] rounded-[12px] overflow-hidden">
        {/* Left rotated image */}
        <div className="absolute flex h-[220.677px] items-center justify-center left-[45.74px] top-0 w-[176.658px]">
          <div className="flex-none rotate-[-9.77deg]">
            <div className="h-[198.95px] relative rounded-[12.376px] w-[144.986px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12.376px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage23} />
              </div>
            </div>
          </div>
        </div>

        {/* Right rotated image */}
        <div className="absolute flex h-[219.772px] items-center justify-center left-[174.88px] top-[7.71px] w-[171.33px]">
          <div className="flex-none rotate-[6.37deg]">
            <div className="h-[204.447px] relative rounded-[9.89px] w-[149.584px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.89px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage22} />
              </div>
            </div>
          </div>
        </div>

        {/* Main center background image */}
        <div className="absolute h-[187px] left-[9.89px] rounded-[21.016px] top-[37px] w-[402.834px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21.016px]">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage12} />
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
          <h4 className="text-[22px] font-extrabold text-black tracking-tight leading-tight">Rocket Design System</h4>
        </div>

        {/* About / Metadata at the bottom */}
        <div className="absolute flex flex-col font-['Manrope'] items-start text-left left-[32px] bottom-[32px] w-[350px] pointer-events-none z-10">
          <span className="text-[12px] font-bold tracking-wider uppercase text-gray-500">Design System</span>
          <span className="text-[13px] font-medium text-gray-400 mt-0.5">Present • EdPlus at ASU</span>
        </div>
      </div>
    </div>
  );
}

export function RocketHoverCard() {
  return (
    <div className="relative w-full h-[442px] rotate-[4.15deg]">
      {/* Yellow banner "A degree with impact" at top */}
      <div className="absolute h-[150.05px] left-[52.82px] top-[9.72px] w-[370.394px]" data-name="image 24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.89%] left-0 max-w-none top-0 w-full" src={imgPersonGlasses} />
        </div>
      </div>
      
      {/* Left rotated image */}
      <div className="absolute flex h-[261.446px] items-center justify-center left-0 top-[11.23px] w-[231.098px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-12.67deg]">
          <div className="h-[226.154px] relative w-[186.03px]" data-name="image 23">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[124.05%] left-0 max-w-none top-0 w-full" src={imgImage23} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Right rotated image */}
      <div className="absolute flex h-[264.837px] items-center justify-center left-[277.53px] top-0 w-[228.787px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[13.43deg]">
          <div className="h-[229.186px] relative rounded-[20px] w-[180.497px]" data-name="image 22">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
              <img alt="" className="absolute h-[172.4%] left-0 max-w-none top-[-0.3%] w-[102.04%]" src={imgImage22} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main center background image */}
      <div className="absolute h-[182.417px] left-[43.81px] rounded-[16px] top-[100.53px] w-[420.644px]" data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute h-[129.14%] left-0 max-w-none top-0 w-full" src={imgImage12} />
        </div>
      </div>
      
      {/* White rounded panel overlay with shadow */}
      <div className="absolute h-[213.868px] left-[45.2px] top-[228.21px] w-[421.554px]">
        <div className="absolute inset-[-2.84%_-2.03%_-7.48%_-3.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 443.634 235.947">
            <g filter="url(#filter0_d_1_508)" id="Vector 64">
              <path d={svgPaths.p21176300} fill="white" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="235.947" id="filter0_d_1_508" width="443.634" x="-2.38419e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-2.48082" dy="4.96164" />
                <feGaussianBlur stdDeviation="5.51983" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_508" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_508" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Text content inside white panel */}
      <div className="absolute content-stretch flex flex-col font-['Inter'] font-medium gap-[73px] h-[160px] items-start leading-[normal] left-[66.2px] not-italic top-[262.16px] w-[190px]">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[20px] w-[152.056px]">
          <p className="relative shrink-0 text-black w-full">Design systems</p>
          <p className="relative shrink-0 text-[#797979] w-full">2025 - Present</p>
        </div>
        <p className="min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">EdPlus at ASU</p>
      </div>
    </div>
  );
}
