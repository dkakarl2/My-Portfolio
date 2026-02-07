import svgPaths from "./svg-ttvm6t2i0g";
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
    <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[73px] h-[160px] items-start leading-[normal] left-[21px] not-italic top-[157px] w-[190px]">
      <Frame />
      <p className="css-4hzbpn min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">EdPlus at ASU</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[160.099px] items-center justify-center left-[44px] top-0 w-[166.443px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-9.72deg]">
          <div className="h-[137.543px] relative w-[145.309px]" data-name="image 23">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[159.32%] left-0 max-w-none top-0 w-full" src={imgImage23} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[183.716px] items-center justify-center left-[190.58px] top-0 w-[162.12px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[9.07deg]">
          <div className="h-[164.02px] relative rounded-[20px] w-[138px]" data-name="image 22">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
              <img alt="" className="absolute h-[180.49%] left-0 max-w-none top-[-0.31%] w-full" src={imgImage22} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[186px] left-[10px] rounded-[16px] top-[59px] w-[411px]" data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute h-[124.19%] left-[-0.18%] max-w-none top-0 w-[100.36%]" src={imgImage12} />
        </div>
      </div>
      <div className="absolute h-[213.868px] left-0 top-[122.06px] w-[421.554px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 421.554 213.868">
          <path d={svgPaths.p225efff0} fill="var(--fill-0, white)" id="Vector 64" />
        </svg>
      </div>
      <Frame1 />
    </div>
  );
}