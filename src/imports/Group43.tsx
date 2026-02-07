import svgPaths from "./svg-z3uce1m0f9";
import imgImage9 from "figma:asset/7c952b9e250d5658aecbab616dc9e7bf5799e506.png";
import imgImage2 from "figma:asset/64184af0c9ebee18abab8494831f8cc713d0485b.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[20px] w-[152.056px]">
      <p className="css-4hzbpn relative shrink-0 text-black w-full">Internship</p>
      <p className="css-4hzbpn relative shrink-0 text-[#797979] w-full">{`2024 `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[73px] h-[160px] items-start leading-[normal] left-[21px] not-italic top-[246.2px] w-[190px]">
      <Frame />
      <p className="css-4hzbpn min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">EduFund</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[282.014px] items-center justify-center left-[15.71px] top-[12.77px] w-[205.953px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-9.29deg]">
          <div className="h-[258.541px] relative rounded-[16px] w-[166.395px]" data-name="image 9">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img alt="" className="absolute h-[136.22%] left-[-34.28%] max-w-none top-[-14.08%] w-[282.69%]" src={imgImage9} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[289.24px] items-center justify-center left-[209.54px] top-0 w-[221.105px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[19.15deg]">
          <div className="h-[255.745px] relative rounded-[16px] w-[145.248px]" data-name="image 10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img alt="" className="absolute h-[121.32%] left-[-149.52%] max-w-none top-[-12.54%] w-[285.31%]" src={imgImage9} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[250.555px] items-center justify-center left-[90.99px] top-[53.09px] w-[266.493px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.31deg]">
          <div className="h-[249.117px] relative rounded-[17px] w-[265.142px]" data-name="image 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[17px]">
              <img alt="" className="absolute h-full left-[-43.96%] max-w-none top-0 w-[187.91%]" src={imgImage2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[213.868px] left-0 top-[212.25px] w-[421.554px]">
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