import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectNavigationProps {
  prevLink?: string | null;
  nextLink?: string | null;
  className?: string;
}

export function ProjectNavigation({ prevLink, nextLink, className = '' }: ProjectNavigationProps) {
  return (
    <div className={`flex gap-4 z-50 ${className}`}>
      <NavButton to={prevLink} direction="prev" />
      <NavButton to={nextLink} direction="next" />
    </div>
  );
}

function NavButton({ to, direction }: { to?: string | null; direction: 'prev' | 'next' }) {
  const isDisabled = !to;
  const Icon = direction === 'prev' ? ArrowLeft : ArrowRight;
  
  const buttonContent = (
    <div className={`
      w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center 
      shadow-md transition-all duration-200 
      ${isDisabled ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80 active:scale-95 cursor-pointer'}
    `}>
      <Icon className="text-white w-5 h-5" />
    </div>
  );

  if (isDisabled) {
    return buttonContent;
  }

  return (
    <Link to={to} aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} Project`}>
      {buttonContent}
    </Link>
  );
}
