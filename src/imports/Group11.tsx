import svgPaths from "./svg-05fhq95hj8";
import imgImage3 from "figma:asset/9b1d984b5a3331721ca8520d91e1dae8087d3753.png";
import imgImage5 from "figma:asset/913c7bdd0782127c6add2bf191da6da72c1d498a.png";
import imgImage2 from "figma:asset/e2a3f144890df13d498134c35c69a488c3384e95.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[20px] w-[152.056px]">
      <p className="css-4hzbpn relative shrink-0 text-black w-full">Fall 2025</p>
      <p className="css-4hzbpn relative shrink-0 text-[#797979] w-full">10 Weeks</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[73px] h-[160px] items-start leading-[normal] left-[26.54px] not-italic top-[146.58px] w-[190px]">
      <Frame />
      <p className="css-4hzbpn min-w-full relative shrink-0 text-[24px] text-black w-[min-content]">Mayo Clinic</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[334px] items-center justify-center left-[45.74px] top-0 w-[196.181px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-9.77deg]">
          <div className="h-[313.943px] relative rounded-[12.376px] w-[144.986px]" data-name="image 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12.376px] size-full" src={imgImage3} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[319.488px] items-center justify-center left-[174.88px] top-[7.71px] w-[182.455px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.37deg]">
          <div className="h-[304.782px] relative rounded-[9.89px] w-[149.584px]" data-name="image 5">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.89px]">
              <img alt="" className="absolute h-[169.88%] left-0 max-w-none top-[-0.17%] w-full" src={imgImage5} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[211.488px] left-[9.89px] rounded-[21.016px] top-[37.09px] w-[402.834px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[21.016px] size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[213.868px] left-0 top-[119.92px] w-[421.554px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 421.554 213.868">
          <path d={svgPaths.p225efff0} fill="var(--fill-0, white)" id="Vector 64" />
        </svg>
      </div>
      <Frame1 />
    </div>
  );
}