import imgImage16905 from "figma:asset/dadece8ee564d49c772d707497d3448ebdc08329.png";
import imgImage16906 from "figma:asset/69dd0260d6ba7e5dd48d8fd44c89d3ff9c3f8e3f.png";

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black w-[715px] whitespace-pre-wrap">Next project</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[241px] items-center relative shrink-0 w-full">
      <div className="h-[334px] relative shrink-0 w-[422px]" data-name="image 16905">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16905} />
      </div>
      <div className="h-[336px] relative shrink-0 w-[422px]" data-name="image 16906">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16906} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[1082px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame />
    </div>
  );
}