import Group73 from "@/imports/Group73";
import { Trophy } from "lucide-react";
import svgPathsNew from "@/imports/svg-kgam4hsd0c";
import imgImage3 from "figma:asset/9b1d984b5a3331721ca8520d91e1dae8087d3753.png";
import imgImage5 from "figma:asset/913c7bdd0782127c6add2bf191da6da72c1d498a.png";
import imgImage2 from "figma:asset/e2a3f144890df13d498134c35c69a488c3384e95.png";

export function MayoDefaultCard() {
  return (
    <div className="relative w-full max-w-[422px] mx-auto h-[334px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center justify-center">
      <div className="relative w-[422px] h-[334px]">
        {/* Left rotated image */}
        <div className="absolute flex h-[220.677px] items-center justify-center left-[45.74px] top-0 w-[176.658px]">
          <div className="flex-none rotate-[-9.77deg]">
            <div className="h-[198.95px] relative rounded-[12.376px] w-[144.986px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12.376px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage3} />
              </div>
            </div>
          </div>
        </div>

        {/* Right rotated image */}
        <div className="absolute flex h-[219.772px] items-center justify-center left-[174.88px] top-[7.71px] w-[171.33px]">
          <div className="flex-none rotate-[6.37deg]">
            <div className="h-[204.447px] relative rounded-[9.89px] w-[149.584px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.89px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage5} />
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
          <h4 className="text-[22px] font-extrabold text-black tracking-tight leading-tight">Mayo Clinic</h4>
        </div>

        {/* About / Metadata at the bottom */}
        <div className="absolute flex flex-col font-['Manrope'] items-start text-left left-[32px] bottom-[32px] w-[350px] pointer-events-none z-10">
          <span className="text-[12px] font-bold tracking-wider uppercase text-gray-500">Healthcare UX</span>
          <span className="text-[13px] font-medium text-gray-400 mt-0.5">10 Weeks Sprint</span>
        </div>
      </div>
    </div>
  );
}

export function MayoHoverCard() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-[488px] h-[462px] relative">
        <Group73 />
      </div>
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center justify-center px-4 py-1.5 bg-[#FBF4D8] border-[1px] border-[#DCC368] rounded-full gap-2 shadow-sm whitespace-nowrap z-10">
        <Trophy size={14} className="text-[#B59220]" fill="#FFC627" />
        <span className="font-['Manrope'] font-bold text-[#B59220] text-[12px]">
          Awardee of Mayo Clinic Observership
        </span>
      </div>
    </div>
  );
}
