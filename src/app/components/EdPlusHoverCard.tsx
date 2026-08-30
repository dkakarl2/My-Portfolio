import svgPaths from "@/imports/svg-o1gxncw5fz";
import imgFrame29 from "figma:asset/fcf3f4d0801335f92321813ca960aeeda2fdc041.png";
import imgImage11 from "figma:asset/d349b829820164c6ffd8680038fb41c9c830b08e.png";
import imgFrame22 from "figma:asset/2096313866740ff08589de188acef2c08565190b.png";
import imgFrame1000006081 from "figma:asset/eafd58cd408b75d2c671a24115c9d94c6665d7c4.png";

export function EdPlusHoverCard() {
  return (
    <div className="relative w-full max-w-[526px] h-[442px] mx-auto rotate-[-4.15deg]">
      {/* Certificate image - rotated slightly */}
      <div className="absolute flex h-[216.672px] items-center justify-center left-[50.2px] top-[12.55px] w-[385.167px]">
        <div className="flex-none rotate-[0.42deg]">
          <div className="h-[213.856px] pointer-events-none relative rounded-[16px] w-[383.604px]">
            <div className="absolute inset-0 overflow-hidden rounded-[16px]">
              <img
                alt=""
                className="absolute h-[102.34%] left-[0.18%] max-w-none top-[0.31%] w-full"
                src={imgFrame29}
              />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.14)] border-solid inset-0 rounded-[16px]" />
          </div>
        </div>
      </div>

      {/* Left image - rotated left */}
      <div className="absolute flex h-[253.504px] items-center justify-center left-0 top-[12.28px] w-[243.896px]">
        <div className="flex-none rotate-[-13.28deg]">
          <div className="bg-white border-[0.808px] border-[rgba(0,0,0,0.14)] border-solid h-[213.2px] overflow-clip relative rounded-[12.921px] w-[200.278px]">
            <div className="absolute h-[153.447px] left-[-12.92px] top-[29.07px] w-[341.586px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-[86.88%] left-[7.94%] max-w-none top-[7.07%] w-[49.52%]"
                  src={imgImage11}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right image - rotated right */}
      <div className="absolute flex h-[363.042px] items-center justify-center left-[240.68px] top-0 w-[285.254px]">
        <div className="flex-none rotate-[16.12deg]">
          <div className="h-[318.703px] pointer-events-none relative rounded-[21.467px] w-[204.807px]">
            <div className="absolute inset-0 overflow-hidden rounded-[21.467px]">
              <img
                alt=""
                className="absolute h-[100.77%] left-[-7.46%] max-w-none top-[-0.27%] w-[204.03%]"
                src={imgFrame22}
              />
            </div>
            <div aria-hidden="true" className="absolute border-[1.342px] border-[rgba(0,0,0,0.14)] border-solid inset-0 rounded-[21.467px]" />
          </div>
        </div>
      </div>

      {/* Main background image */}
      <div className="absolute h-[287.492px] left-[46.25px] rounded-[8px] top-[70.11px] w-[420.043px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img
            alt=""
            className="absolute h-[100.54%] left-[-0.14%] max-w-none top-[-0.21%] w-[99.95%]"
            src={imgFrame1000006081}
          />
        </div>
      </div>

      {/* White rounded panel overlay with shadow */}
      <div className="absolute h-[213.868px] left-[44.65px] top-[228.24px] w-[421.554px]">
        <div className="absolute inset-[-2.84%_-2.03%_-7.48%_-3.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 443.634 235.947">
            <g filter="url(#filter0_d_edplus_hover)" id="Vector 64">
              <path d={svgPaths.p21176300} fill="white" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="235.947"
                id="filter0_d_edplus_hover"
                width="443.634"
                x="-2.38419e-07"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-2.48082" dy="4.96164" />
                <feGaussianBlur stdDeviation="5.51983" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_edplus_hover" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_edplus_hover" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Text content inside white panel */}
      <div className="absolute content-stretch flex flex-col font-['Manrope'] font-medium gap-[73px] h-[160px] items-start leading-[normal] left-[65.65px] not-italic top-[263.18px] w-auto">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[20px] w-[152.056px]">
          <p className="relative shrink-0 text-black w-full">Hackathon</p>
          <p className="relative shrink-0 text-[#797979] w-full">24 hours</p>
        </div>
        <p className="min-w-full relative shrink-0 text-[24px] text-black w-auto whitespace-nowrap">EdPlus Hackathon</p>
      </div>
    </div>
  );
}