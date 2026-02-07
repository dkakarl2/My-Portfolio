import svgPaths from "./svg-81ctzd9dg5";

function Group() {
  return (
    <div className="absolute h-[13.901px] left-0 top-0 w-[11.978px]">
      <div className="absolute inset-[-7.2%_-8.35%_-7.19%_-8.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9782 15.9022">
          <g id="Group 51">
            <path d={svgPaths.p1c22d000} id="Vector 108" stroke="var(--stroke-0, #78BE20)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p5e6580} id="Vector 111" stroke="var(--stroke-0, #78BE20)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[30.26px] top-[15.86px]">
      <div className="absolute h-0 left-[30.26px] top-[28.86px] w-[82px]" data-name="Vector">
        <div className="absolute inset-[-16px_-19.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 32">
            <path d="M16 16H98" id="Vector" stroke="var(--stroke-0, #78BE20)" strokeLinecap="round" strokeWidth="32" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Caveat_Brush:Regular',sans-serif] leading-[normal] left-[30.26px] not-italic text-[20px] text-white top-[15.86px]">Component</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group />
      <Group1 />
    </div>
  );
}