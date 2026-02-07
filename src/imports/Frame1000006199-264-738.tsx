import svgPaths from "./svg-be8uikjheg";
import imgDoodleImage from "figma:asset/ba81c99bc9fa2a7a974274dd5278fe652f58f7ca.png";

function Group() {
  return (
    <div className="absolute contents left-[16px] top-[3px]">
      <div className="absolute h-[40px] left-[16px] top-[3px] w-[109px]">
        <div className="absolute inset-[-25%_-9.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.008 59.9997">
            <path d={svgPaths.p7365b70} id="Vector 92" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="20" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[34px] not-italic text-[18px] text-white top-[10px]">LinkedIn</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[45px] relative shrink-0 w-[141px]">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[40px] ml-0 mt-0 relative row-1 w-[86px]">
        <div className="absolute inset-[-25%_-11.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.002 59.9999">
            <path d={svgPaths.p1e3e2500} id="Vector 92" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="20" />
          </svg>
        </div>
      </div>
      <p className="col-1 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] ml-[21px] mt-[7.5px] not-italic relative row-1 text-[18px] text-white">Email</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-[112px] content-stretch flex gap-[37px] items-center left-[124px]">
      <Frame />
      <Group1 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="relative size-full">
      <Frame1 />
      <div className="absolute bottom-0 h-[285px] left-[556px] w-[232.401px]" data-name="doodle image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[128.63%] left-[-56.81%] max-w-none top-[-28.63%] w-[236.49%]" src={imgDoodleImage} />
        </div>
      </div>
      <div className="absolute bottom-[165px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[943px] not-italic text-[20px] text-black translate-y-full whitespace-nowrap">
        <p className="mb-0">{`Open to conversations, projects `}</p>
        <p>and internship roles!</p>
      </div>
      <p className="absolute bottom-[81px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[943px] not-italic text-[#747474] text-[20px] translate-y-full w-[357px] whitespace-pre-wrap">{`Designed & developed with love and care by Deepika :) `}</p>
      <p className="absolute bottom-[62px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[124px] not-italic text-[#747474] text-[16px] translate-y-full w-[330px] whitespace-pre-wrap">© 2026 Deepika. ALL RIGHTS RESERVED.</p>
    </div>
  );
}