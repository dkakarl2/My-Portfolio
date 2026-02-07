import svgPaths from "./svg-59cbqrbxlf";
import imgImage24 from "figma:asset/db4fc0e5dc254f5a9df2aea11d4166833d910631.png";
import imgImage23 from "figma:asset/fa0fa915ca52b7cc2b903914318e7d7aeda70798.png";
import imgImage22 from "figma:asset/9eeca02bc786feb3f52bfb28300731165d09f8ea.png";
import imgImage12 from "figma:asset/4f82695b46f6d2e8fc2518899c01206d5876a2e4.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[20px] w-[152.056px]">
      <p className="css-4hzbpn relative shrink-0 text-black w-full">Design systems</p>
      <p className="css-4hzbpn relative shrink-0 text-[#797979] w-full">2025 - Present</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[73px] h-[160px] items-start leading-[normal] left-[66.2px] not-italic top-[262.16px] w-[190px]">
      <Frame />
      <p className="css-4hzbpn min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">EdPlus at ASU</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[150.05px] left-[52.82px] top-[9.72px] w-[370.394px]" data-name="image 24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[144.89%] left-0 max-w-none top-0 w-full" src={imgImage24} />
        </div>
      </div>
      <div className="absolute flex h-[261.446px] items-center justify-center left-0 top-[11.23px] w-[231.098px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-12.67deg]">
          <div className="h-[226.154px] relative w-[186.03px]" data-name="image 23">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[124.05%] left-0 max-w-none top-0 w-full" src={imgImage23} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[264.837px] items-center justify-center left-[277.53px] top-0 w-[228.787px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[13.43deg]">
          <div className="h-[229.186px] relative rounded-[20px] w-[180.497px]" data-name="image 22">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
              <img alt="" className="absolute h-[172.4%] left-0 max-w-none top-[-0.3%] w-[102.04%]" src={imgImage22} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[182.417px] left-[43.81px] rounded-[16px] top-[100.53px] w-[420.644px]" data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute h-[129.14%] left-0 max-w-none top-0 w-full" src={imgImage12} />
        </div>
      </div>
      <div className="absolute h-[213.868px] left-[45.2px] top-[228.21px] w-[421.554px]">
        <div className="absolute inset-[-2.84%_-2.03%_-7.48%_-3.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 443.634 235.947">
            <g filter="url(#filter0_d_1_508)" id="Vector 64">
              <path d={svgPaths.p21176300} fill="var(--fill-0, white)" />
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
      <Frame1 />
    </div>
  );
}