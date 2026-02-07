import svgPaths from "./svg-bopmc66aa6";
import imgImage11 from "figma:asset/d349b829820164c6ffd8680038fb41c9c830b08e.png";
import imgFrame22 from "figma:asset/2096313866740ff08589de188acef2c08565190b.png";
import imgFrame1000006081 from "figma:asset/eafd58cd408b75d2c671a24115c9d94c6665d7c4.png";

function Frame3() {
  return (
    <div className="bg-white border-[0.508px] border-[rgba(0,0,0,0.14)] border-solid h-[134.129px] overflow-clip relative rounded-[8.129px] w-[126px]">
      <div className="absolute h-[96.537px] left-[-8.13px] top-[18.29px] w-[214.9px]" data-name="image 11">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[86.88%] left-[7.94%] max-w-none top-[7.07%] w-[49.52%]" src={imgImage11} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[237.54px] pointer-events-none relative rounded-[16px] w-[152.649px]">
      <div className="absolute inset-0 overflow-hidden rounded-[16px]">
        <img alt="" className="absolute h-[100.77%] left-[-7.46%] max-w-none top-[-0.27%] w-[204.03%]" src={imgFrame22} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.14)] border-solid inset-0 rounded-[16px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[203px] left-[10px] rounded-[8px] top-[47px] w-[412px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[139.67%] left-[-0.14%] max-w-none top-[-0.29%] w-[99.95%]" src={imgFrame1000006081} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[20px] w-[152.056px]">
      <p className="css-4hzbpn relative shrink-0 text-black w-full">Hackathon</p>
      <p className="css-4hzbpn relative shrink-0 text-[#797979] w-full">24 hours</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[73px] h-[160px] items-start leading-[normal] left-[21px] not-italic top-[157px] w-[211px]">
      <Frame />
      <p className="css-4hzbpn min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">EdPlus Hackathon</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[155.508px] items-center justify-center left-[55px] top-px w-[149.06px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-10.88deg]">
          <Frame3 />
        </div>
      </div>
      <div className="absolute flex h-[257.563px] items-center justify-center left-[169px] top-0 w-[186.21px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[8.53deg]">
          <Frame2 />
        </div>
      </div>
      <Frame4 />
      <div className="absolute h-[213.868px] left-0 top-[122.06px] w-[421.554px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 421.554 213.868">
          <path d={svgPaths.p225efff0} fill="var(--fill-0, white)" id="Vector 64" />
        </svg>
      </div>
      <Frame1 />
    </div>
  );
}