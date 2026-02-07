import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// ---------------------------------------------------------------------------
// Section definitions – universal across all case study pages
// ---------------------------------------------------------------------------
interface SectionDef {
  id: string;
  label: string;
  texts: string[];
}

const UNIVERSAL_SECTIONS: SectionDef[] = [
  {
    id: 'nav-overview',
    label: 'Overview',
    texts: ['Overview'],
  },
  {
    id: 'nav-results',
    label: 'Result and Impact',
    texts: [
      'Results and impact',
      'Results & Impact',
      'Result and Impact',
      'Results and Impact',
    ],
  },
  {
    id: 'nav-context',
    label: 'Context and Problem',
    texts: [
      'Context & Problem',
      'Context and Problem',
      'The Problem',
      'Problem & Opportunity',
      'Hackathon Context',
      'The Opportunity',
      'The opportunity',
    ],
  },
  {
    id: 'nav-research',
    label: 'Research',
    texts: [
      'Research',
      'User Research',
      'Research & System Audit',
      'Research & Audit',
      'Research & Insights',
    ],
  },
  {
    id: 'nav-ideation',
    label: 'Ideation',
    texts: [
      'Ideation',
      'Ideation & Concept Development',
      'The Idea',
      'Concept',
    ],
  },
  {
    id: 'nav-design',
    label: 'Design Process',
    texts: [
      'Design process',
      'Design Process',
      'High fidelity prototypes',
      'High Fidelity Prototypes',
      'Low fidelity wireframes',
      'Low-Fidelity Wireframes',
      'Designing the Flow',
    ],
  },
  {
    id: 'nav-testing',
    label: 'User Testing',
    texts: [
      'Listening, learning, and improving',
      'Listening, learning, and improving - shaping care through feedback',
      'User testing',
      'User Testing',
      'Testing & Iteration',
      'Testing & Iterating',
    ],
  },
  {
    id: 'nav-reflection',
    label: 'Final Reflection',
    texts: [
      'Final Reflection',
      'Learnings',
      'Key Learnings',
      'Reflection',
      'Role & Contribution',
      'Reflection & Learnings',
    ],
  },
];

/** Routes where the navigator should appear */
const CASE_STUDY_ROUTES = [
  '/mayo-clinic-case-study',
  '/rocket-design-system-case-study',
  '/ed-plus-hackathon-case-study',
  '/edufund-case-study',
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Normalize text for matching: lowercase, collapse whitespace, strip non-breaking spaces */
function normalizeText(text: string): string {
  return text
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/**
 * Search for section heading elements ONLY inside [data-case-study-content].
 * This prevents matching the navigator's own labels.
 */
function findSectionElement(texts: string[]): HTMLElement | null {
  // Scope search to case study content container only
  const container = document.querySelector('[data-case-study-content]');
  if (!container) return null;

  const candidates = container.querySelectorAll(
    'h1, h2, h3, h4, h5, h6, p, span'
  );

  // Pass 1: Exact match on visible elements
  for (const text of texts) {
    const target = normalizeText(text);
    for (const el of candidates) {
      const htmlEl = el as HTMLElement;
      // Get the element's own text (not deeply nested content)
      const elText = getShallowText(htmlEl);
      if (
        elText.length > 0 &&
        elText.length < 200 &&
        elText === target &&
        isReallyVisible(htmlEl)
      ) {
        return htmlEl;
      }
    }
  }

  // Pass 2: Partial/includes match
  for (const text of texts) {
    const target = normalizeText(text);
    for (const el of candidates) {
      const htmlEl = el as HTMLElement;
      const elText = getShallowText(htmlEl);
      if (
        elText.length > 0 &&
        elText.length < 200 &&
        elText.includes(target) &&
        isReallyVisible(htmlEl)
      ) {
        return htmlEl;
      }
    }
  }

  return null;
}

/** Get the text of an element, preferring direct text nodes */
function getShallowText(el: HTMLElement): string {
  let direct = '';
  for (const node of el.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      direct += node.textContent ?? '';
    }
  }
  direct = normalizeText(direct);
  if (direct.length > 0) return direct;
  // Fallback: full textContent
  return normalizeText(el.textContent ?? '');
}

/** Check if an element is actually visible on screen */
function isReallyVisible(el: HTMLElement): boolean {
  // Quick check: zero dimensions means hidden
  const rect = el.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return false;

  // Walk up the tree looking for display:none
  let current: HTMLElement | null = el;
  while (current) {
    const style = window.getComputedStyle(current);
    if (style.display === 'none' || style.visibility === 'hidden') return false;
    current = current.parentElement;
  }
  return true;
}

function smoothScrollTo(targetY: number) {
  const start = window.scrollY ?? document.documentElement.scrollTop ?? 0;
  const distance = targetY - start;
  if (Math.abs(distance) < 2) return;

  const duration = Math.min(1000, Math.max(300, Math.abs(distance) * 0.25));
  const startTime = performance.now();
  const htmlEl = document.documentElement;
  const prevBehavior = htmlEl.style.scrollBehavior;
  htmlEl.style.scrollBehavior = 'auto';

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const pos = Math.round(start + distance * easeInOutCubic(progress));
    window.scrollTo(0, pos);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      htmlEl.style.scrollBehavior = prevBehavior;
    }
  };
  requestAnimationFrame(step);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function CaseStudyNavigator() {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/$/, '') || '/';
  const isCaseStudy = CASE_STUDY_ROUTES.includes(normalizedPath);

  // Filter sections based on the current route
  const displayedSections = UNIVERSAL_SECTIONS.filter((sec) => {
    if (normalizedPath === '/rocket-design-system-case-study') {
      return !['nav-ideation', 'nav-design', 'nav-testing'].includes(sec.id);
    }
    return true;
  });

  const [activeSection, setActiveSection] = useState('Overview');
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const elemCacheRef = useRef<Map<string, HTMLElement>>(new Map());
  const navRef = useRef<HTMLElement>(null);

  // ---- Find and cache section heading elements ----
  const injectAnchors = useCallback(() => {
    if (!isCaseStudy) return;
    const cache = new Map<string, HTMLElement>();
    for (const sec of displayedSections) {
      // Check if previously found element is still valid
      const existing = elemCacheRef.current.get(sec.id);
      if (existing && document.body.contains(existing) && isReallyVisible(existing)) {
        cache.set(sec.id, existing);
        continue;
      }
      const el = findSectionElement(sec.texts);
      if (el) {
        el.setAttribute('data-nav-section', sec.id);
        cache.set(sec.id, el);
      }
    }
    elemCacheRef.current = cache;
  }, [isCaseStudy, displayedSections]);

  // ---- Anchor injection on mount + periodically ----
  useEffect(() => {
    if (!isCaseStudy) return;
    elemCacheRef.current = new Map();

    // Retry at increasing intervals to catch lazy-loaded content
    const timers = [100, 500, 1000, 2000, 3500, 5000, 8000].map((d) =>
      setTimeout(injectAnchors, d)
    );

    // Also re-inject when DOM changes
    const observer = new MutationObserver(() => {
      if (elemCacheRef.current.size < displayedSections.length) {
        injectAnchors();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      timers.forEach(clearTimeout);
      observer.disconnect();
    };
  }, [normalizedPath, isCaseStudy, injectAnchors, displayedSections]);

  // ---- Track scroll position & active section (scroll spy) ----
  useEffect(() => {
    if (!isCaseStudy) return;

    const onScroll = () => {
      const scrollY = window.scrollY ?? document.documentElement.scrollTop ?? 0;
      setScrolledPastHero(scrollY > 300);

      // Determine which section is currently in view
      if (elemCacheRef.current.size === 0) {
        // Try to find sections if cache is empty
        injectAnchors();
        return;
      }

      const viewTarget = window.innerHeight * 0.35;
      let bestLabel = '';
      let bestDist = Infinity;

      for (const sec of displayedSections) {
        const el = elemCacheRef.current.get(sec.id);
        if (!el || !document.body.contains(el)) continue;

        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) continue;

        // dist > 0 means element has scrolled above viewTarget (passed it)
        // dist < 0 means element is below viewTarget (hasn't reached it yet)
        const dist = viewTarget - rect.top;

        // Accept sections that have been scrolled to (dist >= 0) or are close (within 100px below)
        if (dist >= -100 && dist < bestDist) {
          bestDist = dist;
          bestLabel = sec.label;
        }
      }

      if (bestLabel) {
        setActiveSection(bestLabel);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run immediately
    requestAnimationFrame(onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isCaseStudy, injectAnchors, displayedSections]);

  // ---- Scroll to section on click ----
  const handleSectionClick = (sec: SectionDef) => {
    // Re-inject to make sure we have fresh references
    injectAnchors();

    let el = elemCacheRef.current.get(sec.id);
    if (!el || !document.body.contains(el)) {
      const found = findSectionElement(sec.texts);
      if (found) {
        el = found;
        elemCacheRef.current.set(sec.id, found);
      }
    }

    if (el) {
      const rect = el.getBoundingClientRect();
      const targetY = rect.top + window.scrollY - 160; // 80px header + 50px nav bar + 30px padding
      smoothScrollTo(Math.max(0, targetY));
      setActiveSection(sec.label);
    }
  };

  // Don't render on non-case-study pages
  if (!isCaseStudy) return null;

  const shouldShow = scrolledPastHero;

  // =========================================================================
  // DESKTOP HORIZONTAL BAR – below header, full-width, pure inline styles
  // =========================================================================
  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 80,
        left: 0,
        right: 0,
        zIndex: 9998,
        opacity: shouldShow ? 1 : 0,
        transform: shouldShow ? 'translateY(0)' : 'translateY(-8px)',
        pointerEvents: shouldShow ? 'auto' : 'none',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}
      aria-label="Case study sections"
      data-case-study-nav
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          borderBottom: '1px solid rgba(208, 208, 208, 0.3)',
          boxShadow: 'none',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            overflowX: 'auto',
          }}
        >
          {displayedSections.map((sec) => {
            const isActive = activeSection === sec.label;
            return (
              <button
                key={sec.id}
                onClick={() => handleSectionClick(sec)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 12px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  outline: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
              >
                {/* Dot indicator */}
                <span
                  style={{
                    display: 'inline-block',
                    width: isActive ? 7 : 5,
                    height: isActive ? 7 : 5,
                    minWidth: isActive ? 7 : 5,
                    minHeight: isActive ? 7 : 5,
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#000' : '#b0b0b0',
                    flexShrink: 0,
                    transition:
                      'all 0.25s ease',
                  }}
                />
                {/* Label */}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    lineHeight: 1,
                    color: isActive ? '#000' : '#888',
                    fontWeight: isActive ? 700 : 400,
                    transition: 'color 0.25s ease, font-weight 0.25s ease',
                  }}
                >
                  {sec.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}