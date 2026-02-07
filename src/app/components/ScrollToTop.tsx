import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/$/, '') || '/';

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // ---- Scroll detection ----
  useEffect(() => {
    const getScrollY = () => {
      return Math.max(
        window.scrollY ?? 0,
        window.pageYOffset ?? 0,
        document.documentElement?.scrollTop ?? 0,
        document.body?.scrollTop ?? 0,
      );
    };

    const onScroll = () => {
      setIsVisible(getScrollY() > 100);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Poll as fallback
    const pollId = setInterval(() => {
      const shouldBeVisible = getScrollY() > 100;
      setIsVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));
    }, 500);

    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(pollId);
    };
  }, []);

  // ---- Scroll to top ----
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      data-scroll-to-top="true"
      ref={containerRef}
      className="fixed right-6 bottom-6 md:right-[45px] md:bottom-[45px] z-[99999] flex flex-col items-end"
      style={{
        position: 'fixed',
        zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <button
        onClick={scrollToTop}
        className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-none outline-none -translate-y-[50px] md:translate-y-0"
        aria-label="Scroll to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z" fill="#FFFFFF" />
        </svg>
      </button>
    </div>
  );
}