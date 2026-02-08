import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

// Define all case studies in order
const caseStudies = [
    { path: '/mayo-clinic-case-study', title: 'ChemoBuddy', shortTitle: 'Mayo Clinic' },
    { path: '/edufund-case-study', title: 'EduFund', shortTitle: 'EduFund' },
    { path: '/rocket-design-system-case-study', title: 'Rocket Design System', shortTitle: 'Rocket' },
    { path: '/ed-plus-hackathon-case-study', title: 'EdPlus Hackathon', shortTitle: 'EdPlus' },
];

export function CaseStudyNavArrows() {
    const location = useLocation();

    // Find current case study index
    const currentIndex = caseStudies.findIndex(cs => cs.path === location.pathname);

    // If not on a case study page, don't render
    if (currentIndex === -1) return null;

    const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
    const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 md:gap-3"
        >
            {/* Previous Arrow */}
            <Link
                to={prevStudy?.path || '#'}
                className={`group flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border transition-all duration-200 ${prevStudy
                        ? 'border-gray-200 hover:border-black hover:bg-black text-gray-600 hover:text-white cursor-pointer shadow-sm hover:shadow-md'
                        : 'border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none opacity-50'
                    }`}
                aria-disabled={!prevStudy}
                title={prevStudy ? `Previous: ${prevStudy.title}` : 'No previous case study'}
            >
                <ChevronLeft className="w-5 h-5" />
            </Link>

            {/* Case study counter */}
            <span className="text-xs text-gray-400 font-medium px-1 md:px-2 whitespace-nowrap">
                {currentIndex + 1} / {caseStudies.length}
            </span>

            {/* Next Arrow */}
            <Link
                to={nextStudy?.path || '#'}
                className={`group flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border transition-all duration-200 ${nextStudy
                        ? 'border-gray-200 hover:border-black hover:bg-black text-gray-600 hover:text-white cursor-pointer shadow-sm hover:shadow-md'
                        : 'border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none opacity-50'
                    }`}
                aria-disabled={!nextStudy}
                title={nextStudy ? `Next: ${nextStudy.title}` : 'No next case study'}
            >
                <ChevronRight className="w-5 h-5" />
            </Link>
        </motion.div>
    );
}
