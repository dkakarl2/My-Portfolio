import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // CRITICAL: Only animate elements INSIDE [data-case-study-content].
    // Never query the entire document — that would break fixed-position UI
    // elements like ScrollToTop, AIAssistant, etc.
    const container = document.querySelector('[data-case-study-content]');
    if (!container) return;

    const textSelectors = 'p, h1, h2, h3, h4, h5, h6, li, span, div[class*="text-"], img';
    const elements = container.querySelectorAll(textSelectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      },
    );

    elements.forEach((element, index) => {
      const hasText = (element.textContent?.trim().length ?? 0) > 0;
      const isImage = element.tagName === 'IMG';

      if (hasText || isImage) {
        element.classList.add('fade-in-initial');
        const delay = Math.min(index * 0.02, 0.3);
        (element as HTMLElement).style.transitionDelay = `${delay}s`;
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
