import svgPaths from "@/imports/svg-g3o4r0xxkh";
import svgPathsContact from "@/imports/svg-f0bmstxzgi";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      // Already on homepage, just scroll to section
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to homepage with hash
      navigate(`/${sectionId}`);
    }
    
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#D0D0D0]/30">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
        <div className="flex items-center h-20 relative">
          {/* Logo */}
          <Link to="/" className="font-['Caveat_Brush'] text-4xl text-[#747474] hover:text-black transition-colors">
            d.
          </Link>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
            <a 
              href="/#work" 
              onClick={(e) => handleSectionClick(e, '#work')}
              className="font-['Caveat_Brush'] text-xl text-[#747474] hover:text-black transition-colors font-[Inter] text-[14px] font-bold"
            >
              Works
            </a>
            <a 
              href="/#playground" 
              onClick={(e) => handleSectionClick(e, '#playground')}
              className="font-['Caveat_Brush'] text-xl text-[#747474] hover:text-black transition-colors font-[Inter] text-[14px] font-bold"
            >
              Playground
            </a>
            <Link to="/about" className="font-['Caveat_Brush'] text-xl text-[#747474] hover:text-black transition-colors font-[Inter] text-[14px] font-bold">
              About
            </Link>
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-14 ml-auto">
            <a href="#resume" className="font-['Caveat_Brush'] text-xl text-[#747474] hover:text-black transition-colors font-[Inter] text-[14px] font-bold">
              Resume
            </a>
            <Link to="/contact" className="relative inline-block w-[134px] h-[45px] group">
              <div className="absolute h-[40px] left-[16px] top-[3px] w-[109px]">
                <div className="absolute inset-[-25%_-9.18%]">
                  <svg className="block size-full transition-transform duration-300 group-hover:scale-105" fill="none" preserveAspectRatio="none" viewBox="0 0 129.008 59.9997">
                    <path d={svgPathsContact.p7365b70} stroke="black" strokeLinecap="round" strokeWidth="20" className="transition-colors duration-300 group-hover:stroke-[#747474]" />
                  </svg>
                </div>
              </div>
              <p className="absolute font-['Inter'] font-bold leading-[normal] left-[38px] not-italic text-[16px] text-white top-[13px] pointer-events-none">Contact</p>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-black ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <a 
              href="/#work" 
              className="block font-['Caveat_Brush'] text-xl text-[#747474] hover:text-black transition-colors"
              onClick={(e) => handleSectionClick(e, '#work')}
            >
              Works
            </a>
            <a 
              href="/#playground" 
              className="block font-['Caveat_Brush'] text-xl text-[#747474] hover:text-black transition-colors"
              onClick={(e) => handleSectionClick(e, '#playground')}
            >
              Playground
            </a>
            <Link 
              to="/about" 
              className="block font-['Caveat_Brush'] text-xl text-[#747474] hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a 
              href="#resume" 
              className="block font-['Caveat_Brush'] text-xl text-[#747474] hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
            <Link 
              to="/contact" 
              className="block font-['Caveat_Brush'] text-xl text-[#747474] hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}