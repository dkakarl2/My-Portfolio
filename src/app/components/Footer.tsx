import svgPaths from "@/imports/svg-e9hus4ihbx";
import imgImage54 from "figma:asset/ba81c99bc9fa2a7a974274dd5278fe652f58f7ca.png";

export function Footer() {
  return (
    <footer id="contact" className="bg-white p-[0px] lg:px-0 mt-16">
      <div className="max-w-[1224px] mx-auto relative min-h-[350px]">
        {/* Desktop Layout */}
        <div className="hidden lg:block relative size-full min-h-[350px]">
          {/* LinkedIn and Email Buttons */}
          <div className="absolute bottom-[112px] content-stretch flex gap-[37px] items-center left-[124px]">
            {/* LinkedIn Button */}
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="h-[45px] relative w-[141px]">
                <div className="absolute contents left-[16px] top-[3px]">
                  <div className="absolute h-[40px] left-[16px] top-[3px] w-[109px]">
                    <div className="absolute inset-[-25%_-9.18%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.008 59.9997">
                        <path 
                          d={svgPaths.p7365b70} 
                          stroke="black" 
                          strokeLinecap="round" 
                          strokeWidth="20"
                          fill="black"
                          className="group-hover:fill-[#00A3E0] group-hover:stroke-[#00A3E0] transition-colors"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="absolute font-['Inter'] font-semibold leading-normal left-[34px] not-italic text-[18px] text-white top-[10px] m-0">
                    LinkedIn
                  </p>
                </div>
              </div>
            </a>

            {/* Email Button */}
            <a 
              href="mailto:deepika@example.com" 
              className="relative group"
            >
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-start justify-items-start leading-[0] relative shrink-0">
                <div className="col-start-1 row-start-1 h-[40px] relative w-[86px]">
                  <div className="absolute inset-[-25%_-11.63%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.002 59.9999">
                      <path 
                        d={svgPaths.p1e3e2500} 
                        stroke="black" 
                        strokeLinecap="round" 
                        strokeWidth="20"
                        fill="black"
                        className="group-hover:fill-[#00A3E0] group-hover:stroke-[#00A3E0] transition-colors"
                      />
                    </svg>
                  </div>
                </div>
                <p className="col-start-1 row-start-1 font-['Inter'] font-semibold leading-normal ml-[21px] mt-[7.5px] not-italic relative text-[18px] text-white m-0">
                  Email
                </p>
              </div>
            </a>
          </div>

          {/* Doodle Character Image */}
          <div className="absolute bottom-0 h-[200px] left-[556px] w-[163px]" data-name="doodle image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img 
                alt="Doodle character" 
                className="absolute h-[128.63%] left-[-56.81%] max-w-none top-[-28.63%] w-[236.49%]" 
                src={imgImage54} 
              />
            </div>
          </div>

          {/* Open to conversations message */}
          <div className="absolute bottom-[165px] font-['Inter'] font-semibold leading-normal left-[943px] not-italic text-[20px] text-black translate-y-full whitespace-nowrap">
            <p className="mb-0 text-[16px]">{`Open to conversations, projects `}</p>
            <p className="m-0 text-[16px]">and internship roles!</p>
          </div>

          {/* Credits */}
          <p className="absolute bottom-[81px] font-['Inter'] font-semibold leading-normal left-[943px] not-italic text-[#747474] text-[16px] translate-y-full w-[357px] whitespace-pre-wrap m-0">{`Designed & developed with love and care by Deepika :) `}</p>

          {/* Copyright */}
          <p className="absolute bottom-[62px] font-['Inter'] font-semibold leading-normal left-[124px] not-italic text-[#747474] text-[14px] translate-y-full w-[330px] whitespace-pre-wrap m-0">© 2026 Deepika. ALL RIGHTS RESERVED.</p>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center space-y-8 px-6 pb-12">
          {/* Text Content - Centered */}
          <div className="text-center space-y-2">
            <p className="font-['Inter'] font-semibold leading-normal text-[16px] text-black m-0">
              Open to conversations, projects<br />
              and internship roles!
            </p>

            <p className="font-['Inter'] font-semibold leading-normal text-[#747474] text-[16px] m-0">
              Designed & developed with love and care by Deepika :)
            </p>

            <p className="font-['Inter'] font-semibold leading-normal text-[#747474] text-[16px] m-0 mt-4">
              © 2026 Deepika. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}