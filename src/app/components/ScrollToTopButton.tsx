import { useState, useEffect } from 'react';

// SVG Path from svg-3xrjdnbfzi.ts
const arrowPath = "M10 22L-1.78814e-07 12L10 2L11.775 3.775L3.55 12L11.775 20.225L10 22Z";

function ArrowBackIos() {
  return (
    <div className="relative size-[24px]" data-name="arrow_back_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_back_ios">
          <mask height="24" id="mask0_175_255" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_175_255)">
            <path d={arrowPath} fill="var(--fill-0, white)" id="arrow_back_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[9999] transition-all duration-300 focus:outline-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <div className="w-[56px] h-[56px] shadow-lg rounded-[100px]">
        <div className="bg-black overflow-clip relative rounded-[100px] size-full" data-name="Doodle fram for chat">
          <div className="absolute flex items-center justify-center left-[11px] size-[24px] top-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <ArrowBackIos />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
