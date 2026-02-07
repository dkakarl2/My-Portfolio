import imgFrame1000006081 from "figma:asset/e3d50b5cce2131ac1f6f3d1314461f9619e0b0a2.png";

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute h-[515px] left-[90px] rounded-[24px] top-[calc(50%+1px)] w-[788px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
        <img alt="" className="absolute h-[100.03%] left-[0.01%] max-w-none top-[-0.03%] w-[99.97%]" src={imgFrame1000006081} />
      </div>
    </div>
  );
}

export default function CourseRecommendation() {
  return (
    <div className="bg-gradient-to-b from-[rgba(140,29,64,0.42)] overflow-clip relative rounded-[24px] size-full to-[rgba(50,10,23,0.7)]" data-name="course recommendation">
      <Frame />
    </div>
  );
}