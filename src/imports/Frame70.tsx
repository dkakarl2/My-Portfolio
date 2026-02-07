function Frame1() {
  return (
    <div className="absolute h-[480px] left-[77px] rounded-[24px] top-[80px] w-[850px]">
      <div className="absolute inset-0 overflow-hidden rounded-[24px]">
        <video autoPlay className="absolute h-[99.98%] left-0 max-w-none top-[0.49%] w-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/80f367afbe46c41b83fe245da4d033e0822010e5" />
        </video>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-gradient-to-b from-[rgba(140,29,64,0.42)] overflow-clip relative rounded-[24px] size-full to-[rgba(50,10,23,0.7)]">
      <Frame1 />
    </div>
  );
}