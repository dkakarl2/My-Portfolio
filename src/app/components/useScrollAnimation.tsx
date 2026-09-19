import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    // Respect prefers-reduced-motion user preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const container = document.querySelector('[data-case-study-content]');
    if (!container) return;

    // Target individual visual elements: headings, paragraphs, images, videos, and specific mockup containers
    const targetSelectors = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'img', 'video',
      '[data-name*="Mockup"]', '[data-name*="mockup"]',
      '[data-name*="Card"]', '[data-name*="card"]'
    ].join(', ');
    
    const allElements = Array.from(container.querySelectorAll(targetSelectors));

    // Filter out unwanted elements
    const validElements = allElements.filter(el => {
      // Exclude nav and footer
      if (
        el.closest('nav') ||
        el.closest('footer') ||
        el.closest('[data-scroll-to-top]') ||
        el.tagName === 'NAV' ||
        el.tagName === 'FOOTER'
      ) {
        return false;
      }

      // If this is an <img> but it's inside a mockup/card container that we are already animating,
      // skip the img so we don't double-animate.
      if (el.tagName === 'IMG') {
        const parentMockup = el.closest('[data-name*="Mockup"], [data-name*="mockup"], [data-name*="Card"], [data-name*="card"]');
        if (parentMockup && parentMockup !== el) {
          return false;
        }
      }

      return true;
    });

    if (validElements.length === 0) return;

    // Apply the base class immediately to prevent FOUC (flash of unstyled content)
    validElements.forEach(el => {
      el.classList.add('apple-reveal');
    });

    // Wait a brief moment to ensure layout is calculated, then group geometrically
    const rafId = requestAnimationFrame(() => {
      const rects = validElements.map(el => ({
        el,
        rect: el.getBoundingClientRect(),
      }));

      // Sort elements top-to-bottom, and left-to-right for elements in the same horizontal band
      rects.sort((a, b) => {
        // If elements are within 250px vertically, consider them in the same row
        if (Math.abs(a.rect.top - b.rect.top) < 250) {
          return a.rect.left - b.rect.left; // Left to right
        }
        return a.rect.top - b.rect.top; // Top to bottom
      });

      let currentClusterTop = -10000;
      let staggerIndex = 0;

      rects.forEach(({ el, rect }) => {
        // If this element is more than 250px away from the current row, start a new row
        if (Math.abs(rect.top - currentClusterTop) > 250) {
          currentClusterTop = rect.top;
          staggerIndex = 0;
        }
        
        el.style.setProperty('--reveal-delay', `${Math.min(staggerIndex, 6)}`);
        staggerIndex++;
      });

      // Observer to trigger animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('apple-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      validElements.forEach(el => observer.observe(el));
      
      // Cleanup observer on unmount
      (container as any)._revealObserver = observer;
    });

    return () => {
      cancelAnimationFrame(rafId);
      if ((container as any)._revealObserver) {
        (container as any)._revealObserver.disconnect();
      }
    };
  }, []);
}
