import imgAuraFolder from "@/assets/Aura folder.png";
import imgAuraFolderHover from "@/assets/Aura folder hover.png";
import svgPathsNew from "@/imports/svg-kgam4hsd0c";
import imgAura1 from "@/assets/Aura/Aura/Logo.png";
import imgAura2 from "@/assets/Aura/Aura/Icons.png";
import imgAura3 from "@/assets/Aura/Aura/my day -6.png";

export function AuraDefaultCard() {
  return (
    <div className="relative w-full max-w-[422px] mx-auto h-[334px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center justify-center">
      <div className="relative w-[422px] h-[334px]">
        {/* Left rotated image */}
        <div className="absolute flex h-[220.677px] items-center justify-center left-[45.74px] top-0 w-[176.658px]">
          <div className="flex-none rotate-[-9.77deg]">
            <div className="h-[198.95px] relative rounded-[12.376px] w-[144.986px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12.376px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover object-top" src={imgAura1} />
              </div>
            </div>
          </div>
        </div>

        {/* Right rotated image */}
        <div className="absolute flex h-[219.772px] items-center justify-center left-[174.88px] top-[7.71px] w-[171.33px]">
          <div className="flex-none rotate-[6.37deg]">
            <div className="h-[204.447px] relative rounded-[9.89px] w-[149.584px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.89px]">
                <img alt="" className="absolute inset-0 w-full h-full object-cover object-top" src={imgAura2} />
              </div>
            </div>
          </div>
        </div>

        {/* Main center background image */}
        <div className="absolute h-[187px] left-[9.89px] rounded-[21.016px] top-[37px] w-[402.834px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21.016px]">
            <img alt="" className="absolute inset-0 w-full h-full object-cover object-top" src={imgAura3} />
          </div>
        </div>

        {/* White rounded panel overlay - this draws the perfect folder tab and covers all baked-in text from the PNG */}
        <div className="absolute h-[213.868px] left-0 top-[119.92px] w-[421.554px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 421.554 213.868">
            <path d={svgPathsNew.p225efff0} fill="white" />
          </svg>
        </div>

        {/* Visually Balanced Text Content inside white panel - exactly matching Mayo Clinic specifications */}
        <div className="absolute flex flex-col font-['Manrope'] items-start text-left left-[32px] top-[154px] w-[350px] pointer-events-none z-10">
          <h4 className="text-[22px] font-extrabold text-black tracking-tight leading-tight">AURA</h4>
        </div>

        {/* About / Metadata at the bottom */}
        <div className="absolute flex flex-col font-['Manrope'] items-start text-left left-[32px] bottom-[32px] w-[350px] pointer-events-none z-10">
          <span className="text-[12px] font-bold tracking-wider uppercase text-gray-500">AI Workplace Experience</span>
          <span className="text-[13px] font-medium text-gray-400 mt-0.5">72-Hr Sprint • Figbuild</span>
        </div>
      </div>
    </div>
  );
}

export function AuraHoverCard() {
  return (
    <div className="relative w-full max-w-[540px] h-[510px] mx-auto flex items-center justify-center scale-[1.26] origin-bottom sm:origin-center translate-y-4">
      <img
        src={imgAuraFolderHover}
        alt="AURA project expanded view"
        className="w-full h-full object-contain pointer-events-none select-none"
      />
    </div>
  );
}
