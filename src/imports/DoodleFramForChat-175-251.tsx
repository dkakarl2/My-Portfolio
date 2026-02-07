import svgPaths from "./svg-t0azb8dyce";

function ArrowBackIos() {
  return (
    <div className="relative size-[24px]" data-name="arrow_back_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_back_ios">
          <mask height="24" id="mask0_175_255" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_175_255)">
            <path d={svgPaths.p2aab4540} fill="var(--fill-0, white)" id="arrow_back_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function DoodleFramForChat() {
  return (
    <div className="bg-black overflow-clip relative rounded-[100px] size-full" data-name="Doodle fram for chat">
      <div className="absolute flex items-center justify-center left-[11px] size-[24px] top-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <ArrowBackIos />
        </div>
      </div>
    </div>
  );
}