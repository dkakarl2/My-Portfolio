import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    // Respect prefers-reduced-motion user preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const container = document.querySelector('[data-case-study-content]');
    if (!container) return;

    // Target case-study text elements for subtle scroll reveal
    const targetSelectors = [
      '.bg-\\[\\#fafafa\\] h2',
      '.bg-\\[\\#fafafa\\] p',
      'h2.border-b',
      'h4',
      'p.text-base',
      'p.text-sm',
      'div.text-2xl.font-bold',
      'span.text-2xl',
      'span.text-xs.uppercase',
      'span.text-xs.tracking-wider',
      '.text-\\[40px\\]',
      '.font-\\[\\\'Inter\\:Bold\\\'\\,sans-serif\\].text-\\[24px\\]',
      '.font-\\[\\\'SF_Pro_Display\\:Bold\\\'\\,sans-serif\\].text-\\[24px\\]'
    ].join(', ');

    const elements = Array.from(container.querySelectorAll(targetSelectors)) as HTMLElement[];

    // Exclude navigation, footer, fixed UI overlays, buttons, and images
    const validElements = elements.filter(el => {
      if (
        el.closest('nav') ||
        el.closest('footer') ||
        el.closest('[data-scroll-to-top]') ||
        el.closest('button') ||
        el.tagName === 'IMG'
      ) {
        return false;
      }
      return true;
    });

    if (validElements.length === 0) return;

    // Group elements by immediate parent container to set subtle sequential stagger delays (0ms, 90ms, 180ms...)
    const parentMap = new Map<HTMLElement, number>();

    validElements.forEach(el => {
      const parent = el.parentElement || container;
      const count = parentMap.get(parent as HTMLElement) || 0;
      el.style.setProperty('--reveal-delay', `${Math.min(count, 4)}`); // Cap stagger delay to max 4 items (360ms)
      parentMap.set(parent as HTMLElement, count + 1);
      el.classList.add('cs-reveal');
    });

    // IntersectionObserver to trigger reveal once when ~15% of element enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cs-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const rafId = requestAnimationFrame(() => {
      validElements.forEach(el => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);
}
