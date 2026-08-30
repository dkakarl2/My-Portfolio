function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#484848] text-[20px]">Results and impact</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame8 />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content] whitespace-pre-wrap">Measuring how design decisions improved clarity, confidence, and care</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[39px] items-start leading-[normal] left-[36px] not-italic top-[32px] w-[320px] whitespace-pre-wrap">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#e74973] text-[56px] w-full">95%</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#5d5d5d] text-[20px] w-full">of participants completed all tasks successfully</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white h-[218px] relative rounded-[24px] shrink-0 w-[469px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ece2e2] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[39px] items-start leading-[normal] left-[40px] not-italic top-[32px] w-[372px] whitespace-pre-wrap">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#78be20] text-[56px] w-full">40%</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#5d5d5d] text-[20px] w-full">self-reported reduction in anxiety while navigating the prototype.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white h-[218px] relative rounded-[24px] shrink-0 w-[501px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ece2e2] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame />
      <Frame3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[39px] items-start leading-[normal] left-[39px] not-italic top-[32px] w-[337px] whitespace-pre-wrap">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#ff7f32] text-[56px] w-full">30%</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#5d5d5d] text-[20px] w-full">improvement in symptom reporting accuracy.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[218px] relative rounded-[24px] shrink-0 w-[469px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ece2e2] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[39px] items-start leading-[normal] left-[40px] not-italic top-[32px] w-[357px] whitespace-pre-wrap">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#00a3e0] text-[56px] w-full">{`85% `}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#5d5d5d] text-[20px] w-full">increase in engagement time (4.2 to 7.8 minutes average session).</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[218px] relative rounded-[24px] shrink-0 w-[501px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ece2e2] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[51px] items-start relative size-full">
      <Frame5 />
      <Frame4 />
      <Frame6 />
    </div>
  );
}