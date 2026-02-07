import imgFrame1000006081 from "figma:asset/5cca94ffeaed800f10b01dce48f8bed383789ead.png";
import imgClassSearchGif from "figma:asset/d5ce308f2c00e47522e4f252546d5ffe7c5070c7.png";

function Frame() {
  return (
    <div className="absolute h-[480px] left-[77px] rounded-[24px] top-[80px] w-[850px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="ASU Class Search Interface" className="absolute h-[99.98%] left-0 max-w-none top-[0.49%] w-full" src={imgClassSearchGif} />
      </div>
    </div>
  );
}

export default function Gif() {
  return (
    <div className="bg-gradient-to-b from-[rgba(140,29,64,0.42)] overflow-clip relative rounded-[24px] size-full to-[rgba(50,10,23,0.7)]" data-name="gif">
      <Frame />
    </div>
  );
}