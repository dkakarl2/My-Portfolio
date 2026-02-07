import svgPaths from "./svg-9dzo6c09sf";

function Group() {
  return (
    <div className="h-[13.901px] relative w-[11.978px]">
      <div className="absolute inset-[-7.19%_-8.35%_-7.2%_-8.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9782 15.9022">
          <g id="Group 56">
            <path d={svgPaths.p1c22d000} id="Vector 108" stroke="var(--stroke-0, #00A3E0)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p5e6580} id="Vector 111" stroke="var(--stroke-0, #00A3E0)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-0 left-0 top-[13px] w-[60px]" data-name="Vector">
        <div className="absolute inset-[-16px_-26.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 32">
            <path d="M16 16H76" id="Vector" stroke="var(--stroke-0, #00A3E0)" strokeLinecap="round" strokeWidth="32" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Caveat_Brush:Regular',sans-serif] leading-[normal] left-[0.29px] not-italic text-[20px] text-white top-0">Spacing</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[18.077px] items-center justify-center left-[77.57px] top-[41.33px] w-[17.413px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[149.14deg]">
          <Group />
        </div>
      </div>
      <Group1 />
    </div>
  );
}