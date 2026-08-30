import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// Define all case studies in order
const caseStudies = [
    { path: '/mayo-clinic-case-study', title: 'ChemoBuddy', shortTitle: 'Mayo Clinic' },
    { path: '/aura-case-study', title: 'AURA', shortTitle: 'AURA' },
    { path: '/aisle-case-study', title: 'AIsle', shortTitle: 'AIsle' },
    { path: '/edufund-case-study', title: 'EduFund', shortTitle: 'EduFund' },
    { path: '/rocket-design-system-case-study', title: 'Rocket Design System', shortTitle: 'Rocket' },
];

export function CaseStudyNavArrows() {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);

    // Find current case study index
    const currentIndex = caseStudies.findIndex(cs => cs.path === location.pathname);

    // On case study pages, keep arrows visible alongside top-left Back button
    useEffect(() => {
        setIsVisible(true);
    }, [location.pathname]);

    // If not on a case study page, don't render
    if (currentIndex === -1) return null;

    const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
    const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="fixed top-6 right-6 lg:top-8 lg:right-12 z-50 flex items-center gap-2 bg-[#f0f0f2]/90 backdrop-blur-xl p-1 px-3 rounded-[14px] shadow-md border border-[#e2e2e4] h-11"
                >
                    {/* Previous Arrow */}
                    <Link
                        to={prevStudy?.path || '#'}
                        className={`group flex items-center justify-center w-7 h-7 rounded-[8px] transition-all duration-200 ${prevStudy
                            ? 'text-black hover:bg-black hover:text-white cursor-pointer'
                            : 'text-gray-300 cursor-not-allowed pointer-events-none opacity-40'
                            }`}
                        aria-disabled={!prevStudy}
                        title={prevStudy ? `Previous: ${prevStudy.title}` : 'No previous case study'}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Link>

                    {/* Case study counter */}
                    <span className="font-['Inter'] text-[13px] font-bold text-black px-1 whitespace-nowrap select-none">
                        {currentIndex + 1} / {caseStudies.length}
                    </span>

                    {/* Next Arrow */}
                    <Link
                        to={nextStudy?.path || '#'}
                        className={`group flex items-center justify-center w-7 h-7 rounded-[8px] transition-all duration-200 ${nextStudy
                            ? 'text-black hover:bg-black hover:text-white cursor-pointer'
                            : 'text-gray-300 cursor-not-allowed pointer-events-none opacity-40'
                            }`}
                        aria-disabled={!nextStudy}
                        title={nextStudy ? `Next: ${nextStudy.title}` : 'No next case study'}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
