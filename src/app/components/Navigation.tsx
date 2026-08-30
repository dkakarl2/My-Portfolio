import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

// 1. Minimal B&W Gradient Vector Icons matching user images
function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="homeIconGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#999999" />
          <stop offset="45%" stopColor="#444444" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.75L2.5 10.5C2.15 10.8 2 11.2 2 11.65V20.25C2 21.2 2.8 22 3.75 22H20.25C21.2 22 22 21.2 22 20.25V11.65C22 11.2 21.85 10.8 21.5 10.5L12 2.75Z"
        fill="url(#homeIconGrad)"
      />
      <circle cx="12" cy="16.5" r="1.75" fill="#FFFFFF" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="personIconGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#999999" />
          <stop offset="45%" stopColor="#444444" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="7.5" r="4.25" fill="url(#personIconGrad)" />
      <path
        d="M3.75 21C3.75 16.7 7.45 13.5 12 13.5C16.55 13.5 20.25 16.7 20.25 21V21.5H3.75V21Z"
        fill="url(#personIconGrad)"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="docIconGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#999999" />
          <stop offset="45%" stopColor="#444444" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
      </defs>
      <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="url(#docIconGrad)" />
      <path d="M14 2V6C14 7.1 14.9 8 16 8H20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13H16M8 17H13" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="paletteIconGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#999999" />
          <stop offset="45%" stopColor="#444444" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.18-.61-1.62C13.51 17.46 13.25 16.89 13.25 16.25c0-1.24 1.01-2.25 2.25-2.25H18c2.76 0 5-2.24 5-5C23 4.5 18.04 2 12 2z"
        fill="url(#paletteIconGrad)"
      />
      <circle cx="6.5" cy="11.5" r="1.5" fill="#FFFFFF" />
      <circle cx="9.5" cy="7.5" r="1.5" fill="#FFFFFF" />
      <circle cx="14.5" cy="7.5" r="1.5" fill="#FFFFFF" />
      <circle cx="17.5" cy="11.5" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

interface NavDockItem {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function DockItem({ item }: { item: NavDockItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute -top-11 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="bg-[#222222] text-white px-3 py-1.2 rounded-xl text-[12px] font-medium shadow-xl border border-white/10 tracking-wide whitespace-nowrap">
              {item.label}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Squircle White Card Icon Button */}
      <motion.button
        onClick={item.onClick}
        whileHover={{ scale: 1.12, y: -2 }}
        whileTap={{ scale: 0.92 }}
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-[16px] flex items-center justify-center transition-all duration-200 cursor-pointer ${
          item.isActive || isHovered
            ? "bg-white shadow-md shadow-black/8 border border-white"
            : "bg-white/95 hover:bg-white border border-[#ececec] shadow-xs"
        }`}
        aria-label={item.label}
      >
        {item.icon}
      </motion.button>
    </div>
  );
}

export function Navigation({ hideTopHeader = false }: { hideTopHeader?: boolean }) {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isCaseStudyPage = location.pathname.includes("-case-study");

  // Scroll direction detection: disappear when scrolling down, appear when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 40;

      if (currentScrollY < scrollThreshold) {
        setIsNavVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current + 10) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1-AMMFEqh1kL1o4waWsPSVXKjS_sT7zqS/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handlePlaygroundClick = () => {
    navigate("/playground");
  };

  const dockItems: NavDockItem[] = [
    {
      label: "Home",
      icon: <HomeIcon />,
      isActive: isHomePage && !location.hash,
      onClick: handleHomeClick,
    },
    {
      label: "About Me",
      icon: <PersonIcon />,
      isActive: isAboutPage,
      onClick: handleAboutClick,
    },
    {
      label: "Resume",
      icon: <DocumentIcon />,
      isActive: false,
      onClick: handleResumeClick,
    },
    {
      label: "Playground",
      icon: <PaletteIcon />,
      isActive: location.pathname === "/playground",
      onClick: handlePlaygroundClick,
    },
  ];

  // If on a case study page, hide top header & bottom dock, render ONLY a top-left Back button to home page
  if (isCaseStudyPage) {
    return (
      <div className="fixed top-6 left-6 lg:top-8 lg:left-12 z-50 pointer-events-auto">
        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-11 h-11 rounded-[14px] bg-[#f0f0f2]/90 backdrop-blur-xl text-black hover:bg-black hover:text-white transition-all duration-200 shadow-md border border-[#e2e2e4] flex items-center justify-center cursor-pointer"
          aria-label="Back to Home"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
      </div>
    );
  }

  return (
    <>
      {/* Top Header - Stays statically at the top of the page (scrolls away with page content) */}
      {!hideTopHeader && (
        <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-24">
            <div className="flex items-center justify-between h-20">
              {/* Left End: d. Logo */}
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/"
                  className="font-['Caveat_Brush'] text-4xl text-[#747474] hover:text-black transition-colors"
                >
                  d.
                </Link>
              </motion.div>

              {/* Right End: Contact Button */}
              <motion.a
                href="https://mail.google.com/mail/?view=cm&to=dkakarl2@asu.edu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full bg-black text-white font-['Inter'] text-[14px] font-bold hover:bg-[#222222] transition-colors shadow-sm inline-block"
              >
                Let's Connect!
              </motion.a>
            </div>
          </div>
        </header>
      )}

      {/* Floating Bottom Dock Navigation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isNavVisible ? 0 : 100, opacity: isNavVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
      >
        <div className="flex items-center gap-2 p-2 bg-[#f0f0f2]/85 backdrop-blur-2xl border border-[#e2e2e4] rounded-[24px] shadow-xl shadow-black/5">
          {dockItems.map((item) => (
            <DockItem key={item.label} item={item} />
          ))}
        </div>
      </motion.div>
    </>
  );
}