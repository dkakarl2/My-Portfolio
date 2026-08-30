import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useMode } from '@/app/contexts/ModeContext';

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
    texts: ['Overview', 'Introduction', 'Summary'],
  },
  {
    id: 'nav-problem',
    label: 'Problem',
    texts: [
      'Problem',
      'The Problem',
      'Context & Problem',
      'Context and Problem',
      'Problem & Opportunity',
      'The Opportunity',
      'Challenge',
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
      'Key Insights',
      'Outcomes',
    ],
  },
  {
    id: 'nav-design',
    label: 'Design',
    texts: [
      'Design',
      'Design Process',
      'Design process',
      'The Design',
      'Ideation',
      'High Fidelity Prototypes',
      'Wireframes',
    ],
  },
  {
    id: 'nav-testing',
    label: 'Testing',
    texts: [
      'Testing',
      'User Testing',
      'User testing',
      'Testing & Iteration',
      'Listening, learning, and improving',
      'Validation',
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
      'Reflection & Learnings',
      'Results and Impact',
      'Results & Impact',
    ],
  },
];

const RECRUITER_SECTIONS: SectionDef[] = [
  {
    id: 'nav-role',
    label: 'Role',
    texts: ['Role', 'My Role'],
  },
  {
    id: 'nav-process',
    label: 'Process',
    texts: ['Process', 'Design Process', 'The Process'],
  },
  {
    id: 'nav-research-outcomes',
    label: 'Research Outcomes',
    texts: ['Research Outcomes', 'Research & Outcomes', 'Research'],
  },
  {
    id: 'nav-design',
    label: 'Design',
    texts: ['Design', 'Designing the Solution', 'The Design', 'High Fidelity Prototypes', 'High-Fidelity Prototypes'],
  },
  {
    id: 'nav-testing',
    label: 'Testing',
    texts: ['Testing', 'User Testing', 'Testing & Iteration'],
  },
  {
    id: 'nav-key-learnings',
    label: 'Key Learnings',
    texts: ['Key Learnings', 'Learnings', 'Final Reflection', 'Reflection'],
  },
];


/** Routes where the navigator should appear */
const CASE_STUDY_ROUTES = [
  '/mayo-clinic-case-study',
  '/aura-case-study',
  '/aisle-case-study',
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
function findSectionElement(texts: string[], secId: string): HTMLElement | null {
  const explicitEl = document.getElementById(secId);
  if (explicitEl) return explicitEl;

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
        elText.length < 100 &&
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
        elText.length < 100 &&
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

  // Filter out specific tabs depending on the case study
  let displayedSections = UNIVERSAL_SECTIONS;
  if (normalizedPath === '/aura-case-study' || normalizedPath === '/aisle-case-study') {
    displayedSections = displayedSections.filter(sec => sec.id !== 'nav-testing');
  } else if (normalizedPath === '/rocket-design-system-case-study') {
    displayedSections = displayedSections.filter(sec => sec.id !== 'nav-design' && sec.id !== 'nav-testing');
  }

  const [activeSection, setActiveSection] = useState('Overview');

  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isMainNavVisible, setIsMainNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const elemCacheRef = useRef<Map<string, HTMLElement>>(new Map());
  const navRef = useRef<HTMLElement>(null);

  // Track main navigation visibility (sync with Navigation.tsx logic)
  useEffect(() => {
    if (!isCaseStudy) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50;

      if (currentScrollY < scrollThreshold) {
        setIsMainNavVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current + 10) {
        setIsMainNavVisible(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsMainNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCaseStudy]);

  // ---- Find and cache section heading elements ----
  const injectAnchors = useCallback(() => {
    if (!isCaseStudy) return;
    const cache = new Map<string, HTMLElement>();
    for (const sec of displayedSections) {
      // 1. Always prefer explicit ID if it exists in the DOM
      const explicitEl = document.getElementById(sec.id);
      if (explicitEl && isReallyVisible(explicitEl)) {
        explicitEl.setAttribute('data-nav-section', sec.id);
        cache.set(sec.id, explicitEl);
        continue;
      }
      
      // 2. Check if previously found text-matched element is still valid
      const existing = elemCacheRef.current.get(sec.id);
      if (existing && document.body.contains(existing) && isReallyVisible(existing)) {
        cache.set(sec.id, existing);
        continue;
      }
      
      // 3. Fallback to text search
      const el = findSectionElement(sec.texts, sec.id);
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
      
      const firstSectionEl = document.querySelector('[data-nav-section]');
      if (firstSectionEl) {
        const rect = firstSectionEl.getBoundingClientRect();
        // Show navigator when scrolled down AND the first section is near the top of the viewport
        setScrolledPastHero(scrollY > 100 && rect.top < 250);
      } else {
        setScrolledPastHero(scrollY > 400);
      }

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
      className={`fixed top-6 lg:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        shouldShow ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      aria-label="Case study sections"
      data-case-study-nav
    >
      <div className="h-11 flex items-center gap-1 sm:gap-1.5 p-1 bg-[#f0f0f2]/90 backdrop-blur-xl border border-[#e2e2e4] rounded-[14px] shadow-md max-w-[85vw] overflow-x-auto no-scrollbar">
        {displayedSections.map((sec) => {
          const isActive = activeSection === sec.label;
          return (
            <button
              key={sec.id}
              onClick={() => handleSectionClick(sec)}
              className={`px-3.5 py-1.5 rounded-[10px] text-[13px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-black text-white font-semibold shadow-xs"
                  : "text-[#555555] hover:text-black hover:bg-black/5"
              }`}
            >
              {sec.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}