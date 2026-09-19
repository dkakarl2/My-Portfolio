import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BingoClient, BingoState } from '@/app/services/BingoClient';
import bingoCatImage from '@/assets/Bingo.png';

// Pure CSS Bubbles generated outside React render cycle
const STATIC_BUBBLES = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  width: Math.random() * 4 + 2 + 'px',
  left: Math.random() * 100 + '%',
  bottom: Math.random() * -20 + '%',
  animationDelay: Math.random() * 5 + 's',
  animationDuration: Math.random() * 4 + 4 + 's',
}));

export function BingoOrb({ showIntro = false }: { showIntro?: boolean }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState<BingoState>('idle');
  const [isActive, setIsActive] = useState(false);
  const clientRef = useRef<BingoClient | null>(null);

  // Sync Bingo's Y-position with the Navigation Dock
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [isHero, setIsHero] = useState(location.pathname === '/' && window.scrollY < 600);
  
  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHero(location.pathname === '/' && currentScrollY < 500);
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

  const isCaseStudyPage = location.pathname.includes("-case-study") || location.pathname === "/chemobuddy";
  // The nav dock is ~bottom-6. If it's visible, we bump Bingo up to bottom-28.
  const bingoBottomClass = isCaseStudyPage || !isNavVisible ? 'bottom-6' : 'bottom-[100px]';

  useEffect(() => {
    const handleStart = () => {
      if (!isActive) startSession();
    };
    window.addEventListener('START_BINGO', handleStart);
    return () => window.removeEventListener('START_BINGO', handleStart);
  }, [isActive]);

  async function startSession() {
    try {
      setIsActive(true);
      setState('connecting');
      
      // Fetch short-lived token from Vercel backend
      const res = await fetch('/api/live-token');
      const data = await res.json();
      
      if (!res.ok || !data.token) {
        throw new Error(data.error || "Failed to fetch secure token");
      }

      clientRef.current = new BingoClient({
        apiKey: data.token,
        voice: 'Puck',
        onStateChange: setState,
        onToolCall: (name, args) => handleToolCall(name, args),
        onTranscript: (text, role) => console.log(role, text) // silent UI
      });
      await clientRef.current.start();
    } catch (err) {
      console.error(err);
      setIsActive(false);
      setState('idle');
    }
  };

  function endSession() {
    clientRef.current?.stop();
    clientRef.current = null;
    setIsActive(false);
    setState('idle');
  };

  const handleToolCall = useCallback((name: string, args: any) => {
    if (name === 'navigate' && args.path) {
      navigate(args.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (name === 'scroll_to' && args.sectionId) {
      const safeId = args.sectionId.toLowerCase().trim();
      const el = document.getElementById(safeId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (name === 'go_back') {
      navigate(-1);
    } else if (name === 'scroll') {
      const y = args.direction === 'up' ? -window.innerHeight * 0.8 : window.innerHeight * 0.8;
      window.scrollBy({ top: y, behavior: 'smooth' });
    } else if (name === 'highlight' && args.elementId) {
      const el = document.getElementById(args.elementId.toLowerCase().trim());
      if (el) {
        el.style.transition = 'box-shadow 0.3s ease';
        el.style.boxShadow = '0 0 0 4px #F472B6';
        setTimeout(() => { el.style.boxShadow = 'none'; }, 2000);
      }
    }
  }, [navigate]);

  return (
    <>
      <style>{`
        /* Focus Mode Halo */
        .chakku-halo {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          background: radial-gradient(circle, transparent 60%, rgba(150, 150, 150, 0.2) 140%);
          box-shadow: inset 0 0 100px rgba(150, 150, 150, 0.2);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .chakku-halo.active {
          opacity: 1;
        }

        /* Ambient Bubbles */
        @keyframes float-up {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          20% { opacity: 0.8; transform: translateY(-20vh) scale(1); }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        .chakku-bubble {
          position: absolute;
          border-radius: 50%;
          background: white;
          pointer-events: none;
          animation: float-up linear infinite;
        }

        /* Equalizer Bars */
        @keyframes eq-bounce {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .eq-bar {
          width: 4px;
          background: #222222;
          border-radius: 2px;
          animation: eq-bounce 1s ease-in-out infinite;
        }
      `}</style>

      {/* Focus Mode Overlay */}
      {isActive && (
        <div className="chakku-halo active">
          {STATIC_BUBBLES.map(b => (
            <div 
              key={b.id} 
              className="chakku-bubble"
              style={{
                width: b.width, height: b.width, left: b.left, bottom: b.bottom,
                animationDelay: b.animationDelay, animationDuration: b.animationDuration
              }}
            />
          ))}
        </div>
      )}

      {/* Chakku Glassy Widget */}
      {!showIntro && (!isHero || isActive) && (
        <div className={`fixed ${bingoBottomClass} left-1/2 -translate-x-1/2 z-[200] transition-all duration-300`}>
          {!isActive ? (
            <button 
              onClick={startSession}
              className="w-[68px] h-[68px] rounded-[24px] overflow-hidden shadow-xl shadow-black/5 hover:scale-105 transition-transform bg-[#f0f0f2]/85 backdrop-blur-2xl border border-[#e2e2e4] flex items-center justify-center p-1.5"
            >
              <motion.img 
                src={bingoCatImage} 
                alt="Start Bingo"
                className="w-full h-full object-cover rounded-full"
                animate={{ rotate: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </button>
          ) : (
            <div className="flex items-center gap-4 bg-[#f0f0f2]/85 backdrop-blur-2xl border border-[#e2e2e4] rounded-[24px] px-6 py-3 shadow-xl shadow-black/5">
              {/* Status Indicator */}
              <div className="flex items-center gap-3 min-w-[120px]">
                {state === 'idle' && <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />}
                {state === 'connecting' && <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse" />}
                {state === 'listening' && <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />}
                {state === 'thinking' && <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />}
                
                {state === 'speaking' ? (
                  <div className="flex items-end gap-[3px] h-4">
                    <div className="eq-bar h-full" style={{ animationDelay: '0.0s' }} />
                    <div className="eq-bar h-full" style={{ animationDelay: '0.2s' }} />
                    <div className="eq-bar h-full" style={{ animationDelay: '0.4s' }} />
                    <div className="eq-bar h-full" style={{ animationDelay: '0.1s' }} />
                  </div>
                ) : (
                  <span className="text-black/80 font-bold text-sm tracking-wide uppercase font-['Inter']">
                    {state}
                  </span>
                )}
              </div>

              <div className="w-px h-6 bg-black/10" />

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={endSession}
                  className="text-red-500 hover:text-red-600 hover:bg-red-500/10 px-4 py-1.5 rounded-[12px] text-sm font-bold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
