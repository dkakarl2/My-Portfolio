import svgPaths from "./svg-asz6uzm2oi";
import imgImage9 from "figma:asset/7c952b9e250d5658aecbab616dc9e7bf5799e506.png";
import imgImage2 from "figma:asset/64184af0c9ebee18abab8494831f8cc713d0485b.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[20px] w-[152.056px]">
      <p className="css-4hzbpn relative shrink-0 text-black w-full">Internship</p>
      <p className="css-4hzbpn relative shrink-0 text-[#797979] w-full">2024</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[73px] h-[160px] items-start leading-[normal] left-[21px] not-italic top-[115px] w-[190px]">
      <Frame />
      <p className="css-4hzbpn min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">EduFund</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[238.883px] items-center justify-center left-[48px] top-0 w-[182.728px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-13.44deg]">
          <div className="h-[212.868px] relative rounded-[16px] w-[137px]" data-name="image 9">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img alt="" className="absolute h-[136.22%] left-[-34.28%] max-w-none top-[-14.08%] w-[282.69%]" src={imgImage9} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[260.05px] items-center justify-center left-[179px] top-[2px] w-[188.662px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[15deg]">
          <div className="h-[233.664px] relative rounded-[16px] w-[132.707px]" data-name="image 10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img alt="" className="absolute h-[121.32%] left-[-149.52%] max-w-none top-[-12.54%] w-[285.31%]" src={imgImage9} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[171px] left-[135px] rounded-[17px] top-[26px] w-[182px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[17px]">
          <img alt="" className="absolute h-full left-[-43.96%] max-w-none top-0 w-[187.91%]" src={imgImage2} />
        </div>
      </div>
      <div className="absolute h-[213.868px] left-0 top-[80.06px] w-[421.554px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 421.554 213.868">
          <path d={svgPaths.p225efff0} fill="var(--fill-0, white)" id="Vector 64" />
        </svg>
      </div>
      <Frame1 />
    </div>
  );
}