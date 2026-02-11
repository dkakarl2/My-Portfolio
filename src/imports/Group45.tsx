import imgRectangle14249 from "figma:asset/eedfe714d0cf5d8f385501febadac14123fb1435.png";

function NewAsuEdplusColor() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)] w-[97px]" data-name="New ASU Edplus color">
      <div className="absolute inset-[9.38%_9.28%]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle14249} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute css-g0mm18 font-['Caveat_Brush',cursive] leading-[normal] left-0 not-italic text-[#747474] text-[24px] top-[5.77px]">
        <p className="css-ew64yg mb-0">{`I'm currently at `}</p>
        <p className="css-ew64yg">as UX Design Assistant Intern</p>
      </div>
      <div className="absolute flex h-[39.537px] items-center justify-center left-[148.89px] top-0 w-[99.218px] animate-shake" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.52deg]">
          <NewAsuEdplusColor />
        </div>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-2deg);
          }
          75% {
            transform: rotate(2deg);
          }
        }
        .animate-shake {
          animation: shake 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}