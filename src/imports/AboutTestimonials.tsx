import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import svgPaths from "@/imports/svg-rtxie9wte4";
import imgImage66 from "figma:asset/99350ebc35c41973494fc9e5494eb01875c68afb.png";
import imgImage71 from "figma:asset/0765ebab688de14bbaba4b46c5e636020e49383c.png";
import imgImage72 from "figma:asset/9536ed981b7082bd3b2b6df43ad931d3ef5e0e82.png";
import imgImage51 from "figma:asset/6e4de7965720e764d62d472550ce59788110d82a.png";
import imgImage67 from "figma:asset/5db7355b144fbed0eb79e2e119c4b523de74c1fe.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-[222px] top-[27px] w-[977px]">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[50px] not-italic relative shrink-0 text-[48px] text-black">What It's Like to Work With Me</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#d7d7d7] h-[215px] overflow-clip relative rounded-[24px] w-[180px]">
      <div className="absolute flex items-center justify-center left-[-22.4px] size-[214.794px] top-[0.59px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.21deg]">
          <div className="relative size-[214px]" data-name="image 66">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[99.8%] left-[0.13%] max-w-none top-[0.1%] w-[99.87%]" src={imgImage66} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-[714px]">
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[24px] text-black w-full">Jeroel Padilla</p>
      <p className="css-4hzbpn font-['Caveat_Brush:Regular',sans-serif] relative shrink-0 text-[#747474] text-[20px] w-full">Lead UX Designer, Design Systems</p>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#747474] text-[24px] w-full font-[Inter]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );
}

function TestimonialCard1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="flex h-[230.411px] items-center justify-center relative shrink-0 w-[198.723px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "152" } as React.CSSProperties}>
        <div className="flex-none rotate-[-5.19deg]">
          <Frame1 />
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#d7d7d7] h-[215px] overflow-clip relative rounded-[24px] w-[180px]">
      <div className="absolute left-[-19.16px] size-[215px] top-0" data-name="image 71">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage71} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-[714px]">
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[24px] text-black w-full">Rajeshwari Jaykumar</p>
      <p className="css-4hzbpn font-['Caveat_Brush:Regular',sans-serif] relative shrink-0 text-[#747474] text-[20px] w-full">UX Design Assistant</p>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#747474] text-[24px] w-full font-[Inter]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );
}

function TestimonialCard2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="flex h-[240.773px] items-center justify-center relative shrink-0 w-[211.751px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "152" } as React.CSSProperties}>
        <div className="flex-none rotate-[9.1deg]">
          <Frame2 />
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#d7d7d7] h-[215px] overflow-clip relative rounded-[24px] w-[180px]">
      <div className="absolute left-[-18px] size-[215px] top-[0.29px]" data-name="image 72">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage72} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-[714px]">
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[24px] text-black w-full">Anirudh Palaskar</p>
      <p className="css-4hzbpn font-['Caveat_Brush:Regular',sans-serif] relative shrink-0 text-[#747474] text-[20px] w-full">UX Research Assistant</p>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#747474] text-[24px] w-full font-[Inter]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );
}

function TestimonialCard3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="flex h-[243.757px] items-center justify-center relative shrink-0 w-[215.59px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "152" } as React.CSSProperties}>
        <div className="flex-none rotate-[-10.32deg]">
          <Frame5 />
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[204.2px] top-[164px] w-[953.591px]">
      <TestimonialCard1 />
      <TestimonialCard2 />
      <TestimonialCard3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[34.895px] relative w-[50.77px]">
      <div className="absolute inset-[-5.73%_-0.29%_-5.73%_-3.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.9144 38.8952">
          <g id="Group 66" opacity="0.5">
            <path d={svgPaths.p32050c00} id="Vector 87" stroke="var(--stroke-0, #8C1D40)" strokeLinecap="round" strokeWidth="4" />
            <path d={svgPaths.p3d3b4880} id="Vector 88" stroke="var(--stroke-0, #8C1D40)" strokeLinecap="round" strokeWidth="4" />
            <path d={svgPaths.p351f8680} id="Vector 89" stroke="var(--stroke-0, #8C1D40)" strokeLinecap="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[34.895px] relative w-[50.77px]">
      <div className="absolute inset-[-5.73%_-0.28%_-5.73%_-3.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.9144 38.8952">
          <g id="Group 68" opacity="0.5">
            <path d={svgPaths.p24c5be80} id="Vector 87" stroke="var(--stroke-0, #8C1D40)" strokeLinecap="round" strokeWidth="4" />
            <path d={svgPaths.p14446940} id="Vector 88" stroke="var(--stroke-0, #8C1D40)" strokeLinecap="round" strokeWidth="4" />
            <path d={svgPaths.p351f8680} id="Vector 89" stroke="var(--stroke-0, #8C1D40)" strokeLinecap="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[34.895px] relative w-[50.77px]">
      <div className="absolute inset-[-5.73%_-0.29%_-5.73%_-3.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.9144 38.8952">
          <g id="Group 67" opacity="0.5">
            <path d={svgPaths.pc78d600} id="Vector 87" stroke="var(--stroke-0, #8C1D40)" strokeLinecap="round" strokeWidth="4" />
            <path d={svgPaths.p3d3b4880} id="Vector 88" stroke="var(--stroke-0, #8C1D40)" strokeLinecap="round" strokeWidth="4" />
            <path d={svgPaths.p351f8680} id="Vector 89" stroke="var(--stroke-0, #8C1D40)" strokeLinecap="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[70px] top-[203.71px]">
      <div className="absolute flex h-[82.072px] items-center justify-center left-[73.84px] top-[208.82px] w-[77.936px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-24.54deg]">
          <div className="h-[64.563px] opacity-50 relative w-[56.196px]" data-name="image 51">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage51} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[27.208px] items-center justify-center left-[112.19px] top-[203.71px] w-[25.837px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-24.54deg]">
          <div className="h-[21.404px] opacity-50 relative w-[18.63px]" data-name="image 52">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage51} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[27.208px] items-center justify-center left-[70px] top-[258.68px] w-[25.837px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-24.54deg]">
          <div className="h-[21.404px] opacity-50 relative w-[18.63px]" data-name="image 53">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage51} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents h-[69.428px] left-[1257.42px] top-[195.28px] w-[68.347px]">
      <div className="absolute flex h-[41.958px] items-center justify-center left-[1272.98px] top-[210.91px] w-[37.605px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.71deg]">
          <div className="h-[38.325px] opacity-50 relative w-[33.358px]" data-name="image 51">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage51} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[13.91px] items-center justify-center left-[1301.81px] top-[212.2px] w-[12.467px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.71deg]">
          <div className="h-[12.705px] opacity-50 relative w-[11.059px]" data-name="image 52">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage51} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[13.91px] items-center justify-center left-[1263.48px] top-[227.11px] w-[12.467px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.71deg]">
          <div className="h-[12.705px] opacity-50 relative w-[11.059px]" data-name="image 53">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage51} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents h-[158.106px] left-[1199.71px] top-[699.62px] w-[157.162px]">
      <div className="absolute flex h-[102.016px] items-center justify-center left-[1230.98px] top-[731.9px] w-[94.204px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[15.12deg]">
          <div className="h-[85.555px] opacity-50 relative w-[74.467px]" data-name="image 51">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage51} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[33.82px] items-center justify-center left-[1302.55px] top-[743.19px] w-[31.23px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[15.12deg]">
          <div className="h-[28.363px] opacity-50 relative w-[24.687px]" data-name="image 52">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage51} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[33.82px] items-center justify-center left-[1213.01px] top-[763.59px] w-[31.23px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[15.12deg]">
          <div className="h-[28.363px] opacity-50 relative w-[24.687px]" data-name="image 53">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage51} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutTestimonials() {
  return (
    <div className="bg-white relative w-full lg:h-[900px]" data-name="About - Testimonials">
      {/* Desktop Layout - Absolute Positioning */}
      <div className="hidden lg:block relative w-full h-full">
        <Frame />
        <Frame10 />
        
        {/* Decorative elements - Desktop only */}
        <div className="absolute flex h-[187.006px] items-center justify-center left-[1151px] top-[340.71px] w-[187.138px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[18.95deg]">
            <div className="h-[147.136px] opacity-30 relative w-[147.349px]" data-name="image 67">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[130.82%] left-[-16.76%] max-w-none top-[-11.29%] w-[147.98%]" src={imgImage67} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[90.944px] items-center justify-center left-[49px] top-[640.71px] w-[91.008px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[161.05deg] scale-y-[-100%]">
            <div className="h-[71.554px] opacity-30 relative w-[71.658px]" data-name="image 68">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[130.82%] left-[-16.76%] max-w-none top-[-11.29%] w-[147.98%]" src={imgImage67} />
              </div>
            </div>
          </div>
        </div>
        <Group />
        <Group4 />
        <Group5 />
      </div>

      {/* Mobile Layout - Vertical Stack */}
      <div className="lg:hidden w-full px-6 py-12 flex flex-col gap-12">
        <h2 className="font-['Inter:Bold',sans-serif] font-bold text-3xl text-black text-center mb-4">
          What It's Like to Work With Me
        </h2>
        
        <div className="flex flex-col gap-16">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-[180px] h-[215px] bg-[#d7d7d7] rounded-[24px] relative overflow-hidden rotate-[-5.19deg] shadow-lg">
              <img src={imgImage66} alt="Jeroel Padilla" className="absolute w-full h-full object-cover scale-110" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-['Inter:Bold',sans-serif] font-bold text-2xl text-black">Jeroel Padilla</h3>
              <p className="font-['Caveat_Brush:Regular',sans-serif] text-xl text-[#747474]">Lead UX Designer, Design Systems</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-lg text-[#747474] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-[180px] h-[215px] bg-[#d7d7d7] rounded-[24px] relative overflow-hidden rotate-[9.1deg] shadow-lg">
              <img src={imgImage71} alt="Rajeshwari Jaykumar" className="absolute w-full h-full object-cover" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-['Inter:Bold',sans-serif] font-bold text-2xl text-black">Rajeshwari Jaykumar</h3>
              <p className="font-['Caveat_Brush:Regular',sans-serif] text-xl text-[#747474]">UX Design Assistant</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-lg text-[#747474] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-[180px] h-[215px] bg-[#d7d7d7] rounded-[24px] relative overflow-hidden rotate-[-10.32deg] shadow-lg">
              <img src={imgImage72} alt="Anirudh Palaskar" className="absolute w-full h-full object-cover" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="font-['Inter:Bold',sans-serif] font-bold text-2xl text-black">Anirudh Palaskar</h3>
              <p className="font-['Caveat_Brush:Regular',sans-serif] text-xl text-[#747474]">UX Research Assistant</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-lg text-[#747474] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}