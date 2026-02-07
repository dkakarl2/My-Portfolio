import imgImage49 from "figma:asset/6e4de7965720e764d62d472550ce59788110d82a.png";

function Frame1() {
  return (
    <div className="content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[24px] items-center leading-[normal] not-italic relative shrink-0 text-[14px]">
      <p className="css-ew64yg relative shrink-0 text-black">For anyone</p>
      <p className="css-ew64yg relative shrink-0 text-[#bfbfbf]">For recruiters</p>
      <p className="css-ew64yg relative shrink-0 text-[#bfbfbf]">For product designers</p>
      <p className="css-ew64yg relative shrink-0 text-[#bfbfbf]">For engineers</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Caveat_Brush:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747474] text-[24px]">Hello, I’m Deepika</p>
      <div className="h-[26px] relative shrink-0 w-[23px]" data-name="image 49">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.81%] left-[-38.58%] max-w-none top-[-24.59%] w-[173.27%]" src={imgImage49} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[48px] text-black w-[min-content]">
        <span className="leading-[50px]">{`I `}</span>
        <span className="leading-[50px] text-white">design</span>
        <span className="leading-[50px]">{` digital products the way architects design spaces - with intention, usability, and flow.`}</span>
      </p>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[46px] items-start relative size-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}