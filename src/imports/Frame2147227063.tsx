import imgImage49 from "figma:asset/6e4de7965720e764d62d472550ce59788110d82a.png";
import imgImage16911 from "figma:asset/67aee641ecd76d0b0f2898ddf43c5f01345d07a9.png";

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
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[601px] top-[129px] w-[424px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-9px] top-[32px]">
      <div className="absolute flex h-[50.733px] items-center justify-center left-[450px] top-[32px] w-[47.998px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[23.22deg]">
          <div className="h-[40.195px] opacity-50 relative w-[34.985px]" data-name="image 52">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage49} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[20.902px] items-center justify-center left-[460.34px] top-[72.59px] w-[19.775px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[23.22deg]">
          <div className="h-[16.56px] opacity-50 relative w-[14.414px]" data-name="image 53">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage49} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[29.323px] items-center justify-center left-[-9px] top-[100px] w-[28.997px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-40.37deg]">
          <div className="h-[22.12px] opacity-50 relative w-[19.253px]" data-name="image 52">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage49} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="relative size-full">
      <Frame2 />
      <div className="absolute h-[512px] left-0 top-0 w-[489px]" data-name="image 16911">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16911} />
      </div>
      <Group />
    </div>
  );
}