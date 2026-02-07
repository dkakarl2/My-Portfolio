import imgImage49 from "figma:asset/6e4de7965720e764d62d472550ce59788110d82a.png";
import imgImage16909 from "figma:asset/33a2ac31f2cd76bd788e5b15fbe0ec733176a791.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[24px] text-black w-[431px] whitespace-pre-wrap">I designed Aisle, an AI agents manager, to help users move through workflows with clarity, context, and intelligence.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="h-[26px] relative shrink-0 w-[23px]" data-name="image 49">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage49} />
        </div>
      </div>
      <p className="font-['Caveat_Brush:Regular',sans-serif] font-['Futura_PT:Book',sans-serif] leading-[0] not-italic relative shrink-0 text-[#8a8a8a] text-[0px] text-[24px]">
        <span className="leading-[normal]">{`Role -  `}</span>
        <span className="leading-[normal]">UX and Interaction Designer</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[424px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex gap-[88px] items-center relative size-full">
      <div className="h-[340px] relative shrink-0 w-[422px]" data-name="image 16909">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16909} />
      </div>
      <Frame2 />
    </div>
  );
}