import svgPaths from "@/imports/svg-z3uce1m0f9";
import svgPathsNew from "@/imports/svg-kgam4hsd0c";
import imgImage9 from "figma:asset/7c952b9e250d5658aecbab616dc9e7bf5799e506.png";
import imgImage2 from "figma:asset/64184af0c9ebee18abab8494831f8cc713d0485b.png";

export function EduFundDefaultCard() {
  return (
    <div className="relative w-full max-w-[422px] mx-auto h-[334px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center justify-center">
      <div className="relative w-[422px] h-[334px] rounded-[12px] overflow-hidden">
        {/* Left rotated image */}
        <div className="absolute flex h-[220.677px] items-center justify-center left-[45.74px] top-0 w-[176.658px]">
          <div className="flex-none rotate-[-9.77deg]">
            <div className="h-[198.95px] relative rounded-[12.376px] w-[144.986px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12.376px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage9} />
              </div>
            </div>
          </div>
        </div>

        {/* Right rotated image */}
        <div className="absolute flex h-[219.772px] items-center justify-center left-[174.88px] top-[7.71px] w-[171.33px]">
          <div className="flex-none rotate-[6.37deg]">
            <div className="h-[204.447px] relative rounded-[9.89px] w-[149.584px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.89px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage9} />
              </div>
            </div>
          </div>
        </div>

        {/* Main center background image */}
        <div className="absolute h-[187px] left-[9.89px] rounded-[21.016px] top-[37px] w-[402.834px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21.016px]">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage2} />
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
          <h4 className="text-[22px] font-extrabold text-black tracking-tight leading-tight">EduFund</h4>
        </div>

        {/* About / Metadata at the bottom */}
        <div className="absolute flex flex-col font-['Manrope'] items-start text-left left-[32px] bottom-[32px] w-[350px] pointer-events-none z-10">
          <span className="text-[12px] font-bold tracking-wider uppercase text-gray-500">Fintech Product Design</span>
          <span className="text-[13px] font-medium text-gray-400 mt-0.5">3 Months Sprint</span>
        </div>
      </div>
    </div>
  );
}

export function EduFundHoverCard() {
  // Configure your 3 images here:
  const images = {
    leftRotated: imgImage9,    // Left image rotated -9.29°
    rightRotated: imgImage9,   // Right image rotated 4.15°
    centerRotated: imgImage2   // Center image rotated -0.31°
  };

  return (
    <div className="relative w-full h-[426px] rotate-[4.15deg]">
      {/* Left rotated image */}
      <div className="absolute flex h-[282.014px] items-center justify-center left-[15.71px] top-[12.77px] w-[205.953px]">
        <div className="flex-none rotate-[-9.29deg]">
          <div className="h-[258.541px] relative rounded-[16px] w-[166.395px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img 
                alt="" 
                className="absolute h-[136.22%] left-[-34.28%] max-w-none top-[-14.08%] w-[282.69%]" 
                src={images.leftRotated} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right rotated image */}
      <div className="absolute flex h-[289.24px] items-center justify-center left-[209.54px] top-0 w-[221.105px]">
        <div className="flex-none rotate-[4.15deg]">
          <div className="h-[255.745px] relative rounded-[16px] w-[145.248px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img 
                alt="" 
                className="absolute h-[121.32%] left-[-149.52%] max-w-none top-[-12.54%] w-[285.31%]" 
                src={images.rightRotated} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Center rotated image */}
      <div className="absolute flex h-[250.555px] items-center justify-center left-[90.99px] top-[53.09px] w-[266.493px]">
        <div className="flex-none rotate-[-0.31deg]">
          <div className="h-[249.117px] relative rounded-[17px] w-[265.142px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[17px]">
              <img 
                alt="" 
                className="absolute h-full left-[-43.96%] max-w-none top-0 w-[187.91%]" 
                src={images.centerRotated} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* White rounded panel overlay with shadow */}
      <div className="absolute h-[213.868px] left-0 top-[212.25px] w-[421.554px]">
        <div className="absolute inset-[-2.84%_-2.03%_-7.48%_-3.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 443.634 235.947">
            <g filter="url(#filter0_d_edufund)" id="Vector 64">
              <path d={svgPaths.p21176300} fill="white" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="235.947" id="filter0_d_edufund" width="443.634" x="-2.38419e-07" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-2.48082" dy="4.96164" />
                <feGaussianBlur stdDeviation="5.51983" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_edufund" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_edufund" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Text content inside white panel */}
      <div className="absolute content-stretch flex flex-col font-['Manrope'] font-medium justify-between h-[160px] items-start leading-[normal] left-[21px] not-italic top-[246.2px] w-[190px]">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[20px] w-full">
          <p className="relative shrink-0 text-black w-full leading-snug break-words">Fintech<br />Product Design</p>
          <p className="relative shrink-0 text-[#797979] w-full">2024</p>
        </div>
        <p className="min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">EduFund</p>
      </div>
    </div>
  );
}