import { Navigation } from "@/app/components/Navigation";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/app/components/useScrollAnimation";
import { CaseStudyNavArrows } from "@/app/components/CaseStudyNavArrows";
import { Footer } from "@/app/components/Footer";
import { ExternalLink } from "lucide-react";
import FigmaAuraCaseStudy from "@/imports/AuraCaseStudy/index";
import { useMode } from "@/app/contexts/ModeContext";
import { useState, useEffect, useRef } from "react";
import { RecruiterCaseStudyHeader } from "@/app/components/RecruiterCaseStudyHeader";
import videoAuraCover from "@/assets/Aura cover.mov";
import videoAuraEmotions from "@/assets/Aura emotions.mp4";
import videoAuraVideo from "@/assets/Aura video.mp4";

// Import Aura assets
import imgLogo from "@/assets/Aura/Aura/Logo.png";
import imgOnboarding from "@/assets/Onboarding screens - 2.png";
import imgHomeRadar from "@/assets/home-radar - 2.png";
import imgPresenceCards1 from "@/assets/Prescene cards 1 -3.png";
import imgPresenceCards2 from "@/assets/Prescene cards 2 - 4.png";
import imgMessaging from "@/assets/Messaging and walking screens - 5.png";
import imgMyDay from "@/assets/my day -6.png";
import imgMyPresence from "@/assets/my presence - 7.png";
import imgIcons from "@/assets/Aura/Aura/Icons.png";

const accentColor = "#534AB7";
const accentLight = "#EEEDFE";
const coralBg = "#FDF2EC";
const coralAccent = "#993C1D";

// --- Emotional state data ---
const emotionalStates = [
  { name: "Open", color: "#F0997B" },
  { name: "In Flow", color: "#AFA9EC" },
  { name: "Stressed", color: "#F4C0D1" },
  { name: "Draining", color: "#FAC775" },
  { name: "Recharging", color: "#9FE1CB" },
  { name: "Invisible", color: "#B4B2A9" },
  { name: "Transitioning", color: "#B5D4F4" },
];

// --- Gallery screens ---
const galleryScreens = [
  { img: imgOnboarding, video: videoAuraVideo, name: "Onboarding Screens" },
  { img: imgHomeRadar, name: "Home & Radar" },
  { img: imgPresenceCards1, name: "Presence Cards" },
  { img: imgPresenceCards2, name: "Presence Cards 2" },
  { img: imgMessaging, name: "Messaging & Walking" },
  { img: imgMyDay, name: "My Day" },
  { img: imgMyPresence, name: "My Presence" },
];

export function AuraCaseStudy() {
  useScrollAnimation();

  const [explorerHeight, setExplorerHeight] = useState(10500);
  const explorerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (explorerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          // Add some padding to the bottom
          setExplorerHeight(entry.target.clientHeight + 100);
        }
      });
      resizeObserver.observe(explorerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const emotionsVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (emotionsVideoRef.current) {
      emotionsVideoRef.current.defaultMuted = true;
      emotionsVideoRef.current.muted = true;
      emotionsVideoRef.current.play().catch(() => {});
    }
  }, []);

  // Reusable responsive layout for Recruiter mode and mobile Explorer view
  const renderResponsiveLayout = () => (
    <div className="pb-16 space-y-16 font-['Manrope',sans-serif]">
      {/* Intro Hero Video - Matching Explorer Section Height (632px) and Full Width */}
      <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[632px] overflow-hidden bg-black/5">
        <video
          ref={videoRef}
          src={videoAuraCover}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover pointer-events-none select-none"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-24">
        {/* 1. Role Section */}
        <section className="space-y-6">
        <h2 className="text-2xl font-bold text-black border-b pb-3 border-gray-100 flex items-center gap-3">
          <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: accentColor }}></span>
          Role
        </h2>
        <div className="bg-gray-50/60 border border-gray-100 p-6 rounded-2xl space-y-4">
          <p className="text-gray-700 leading-relaxed text-base">
            As the <strong>UX Designer & Design System Lead</strong>, I owned end-to-end framing, layout systems, token configurations, UI designs, and mockups.
          </p>
          <p className="text-gray-700 leading-relaxed text-base">
            I collaborated with Thiruvenkata S. during a intense 72-hour design sprint using <strong>Figma Make</strong> to accelerate initial UI permutations, converting moodboards into automated Figma variables for typography and token colors.
          </p>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-black border-b pb-3 border-gray-100 flex items-center gap-3">
          <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: accentColor }}></span>
          The Problem
        </h2>
        <blockquote className="text-[18px] font-medium leading-[1.45] p-5 border-l-4 border-[#AFA9EC] bg-gray-50/40 rounded-r-xl font-serif text-gray-800 min-h-[70px]">
          <TypingQuote />
        </blockquote>
        <p className="text-gray-700 leading-relaxed text-base">
          Knowledge workers navigate <strong>10 to 50 interpersonal micro-interactions daily</strong>. With hybrid work and acoustic headphone shields, we have lost vocal tone, body language, co-presence, and calendar context.
        </p>

        {/* Signals grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {[
            { name: "Vocal Tone Lost", desc: "Headphones create an acoustic shield. You can't hear whether someone sounds tense, flat, or energized." },
            { name: "Body Language Lost", desc: "Screens reduce a person to a name and a cursor. micro-expressions and posture vanish entirely." },
            { name: "Ambient Presence Lost", desc: "Hybrid work removed co-presence. There's no vibe to read when everyone is a Slack icon." },
            { name: "Calendar Context Lost", desc: "Calendars show busy or free - never how someone feels or their capacity to absorb interruptions." }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 p-5 rounded-2xl">
              <h4 className="font-bold text-black text-sm mb-1">{item.name}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Process Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-black border-b pb-3 border-gray-100 flex items-center gap-3">
          <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: accentColor }}></span>
          Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { phase: "Phase 1", name: "Define (0-16h)", desc: "Problem framing, research mapping, FigJam ideation on ambient presence." },
            { phase: "Phase 2", name: "Generate (16-40h)", desc: "UI iterations in Figma Make, mapping biometric rules to orb states." },
            { phase: "Phase 3", name: "Build (40-60h)", desc: "Consolidated design tokens, structured 3 core user stories." },
            { phase: "Phase 4", name: "Polish (60-72h)", desc: "Interactive prototypes, Figma page publishing, presentation pitch." }
          ].map((step, idx) => (
            <div key={idx} className="border border-gray-100 p-5 rounded-2xl bg-white space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{step.phase}</span>
              <h4 className="font-bold text-black text-sm">{step.name}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Design Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-black border-b pb-3 border-gray-100 flex items-center gap-3">
          <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: accentColor }}></span>
          Design
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          The core of AURA is its <strong>7 emotional presence states</strong>. Instead of active text statuses, employees broadcast their presence color tokens.
        </p>

        {/* The Seven Emotional States Video */}
        <div className="relative w-full overflow-hidden my-4 border-none outline-none shadow-none bg-transparent">
          <video
            ref={emotionsVideoRef}
            src={videoAuraEmotions}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ mixBlendMode: "multiply", outline: "none", border: "none", boxShadow: "none" }}
            className="w-full h-auto object-cover pointer-events-none select-none border-none outline-none shadow-none block"
          />
        </div>

        {/* Orb grid */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {emotionalStates.map((s) => (
            <div key={s.name} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-gray-800 bg-white">
              <span className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: s.color }} />
              {s.name}
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="pt-6 space-y-6">
          <h4 className="font-bold text-black text-sm">Interactive Screen Gallery</h4>
          <div className="grid grid-cols-1 gap-8">
            {galleryScreens.map((screen, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50/50 hover:shadow-md transition-all duration-300"
              >
                {screen.video ? (
                  <video
                    src={screen.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-auto object-cover border-b border-gray-100 pointer-events-none select-none"
                  />
                ) : (
                  <img
                    src={screen.img}
                    alt={screen.name}
                    className="w-full h-auto object-cover border-b border-gray-100"
                  />
                )}
                <div className="px-6 py-4 bg-white">
                  <span className="text-sm text-gray-700 font-medium">{screen.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Branding & Assets (Icon System & Logo) */}
        <div className="pt-8 space-y-4">
          <h4 className="font-bold text-black text-sm">Branding & System Assets</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Icon System */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="p-8 flex items-center justify-center bg-gray-50/30 flex-grow">
                <img
                  src={imgIcons}
                  alt="Aura Icon System"
                  className="max-h-[300px] w-auto object-contain"
                />
              </div>
              <div className="px-6 py-4 bg-white border-t border-gray-100">
                <span className="text-sm text-gray-700 font-medium">Icon System</span>
              </div>
            </div>

            {/* Logo Design */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="p-8 flex items-center justify-center bg-gray-50/30 flex-grow">
                <img
                  src={imgLogo}
                  alt="Aura Logo Design"
                  className="max-h-[300px] w-auto object-contain"
                />
              </div>
              <div className="px-6 py-4 bg-white border-t border-gray-100">
                <span className="text-sm text-gray-700 font-medium">Logo Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testing Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-black border-b pb-3 border-gray-100 flex items-center gap-3">
          <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: accentColor }}></span>
          Testing
        </h2>
        <div className="bg-gray-50/60 border border-gray-100 p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 text-center">
              <span className="block text-2xl font-extrabold text-black">72h</span>
              <span className="text-[10px] uppercase font-bold text-gray-400">Time Limit</span>
            </div>
            <div>
              <h4 className="font-bold text-black">Usability Verification & Concept Validation</h4>
              <p className="text-sm text-gray-600">
                Validated 3 key contextual use cases (Difficult Conversations, Onboarding Relief, Burnout Firewall) to check if AURA successfully reduces social anxiety.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm border-t border-gray-200/60 pt-4 font-bold">
            Key Use Cases Tested:
          </p>
          <div className="pt-2">
            <RecruiterUseCasesCarousel />
          </div>
        </div>
      </section>

      {/* 6. Key Learnings Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-black border-b pb-3 border-gray-100 flex items-center gap-3">
          <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: accentColor }}></span>
          Key Learnings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-100 p-6 rounded-2xl bg-white space-y-2">
            <h4 className="font-bold text-black">Opt-In Consent is Essential</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Biometric status broadcasting can easily feel like workplace monitoring. The design requires absolute consent controls to remain protective rather than invasive.
            </p>
          </div>
          <div className="border border-gray-100 p-6 rounded-2xl bg-white space-y-2">
            <h4 className="font-bold text-black">Aesthetics Lead the Experience</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Gradients, layout transitions, and fluid animations help lower cortisol and create a more friendly digital neighborhood in hybrid work spaces.
            </p>
          </div>
        </div>

      </section>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white overflow-x-hidden animate-fade-in" data-case-study-content>
      <Navigation />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full"
      >
        {/* Explorer Mode Layout */}
        <>
          {/* Desktop Figma Design Export */}
          <div 
            className="hidden lg:block relative w-full bg-white overflow-hidden" 
            style={{ minHeight: explorerHeight }}
            data-name="Aura-Figma-Explorer"
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-[1440px]" ref={explorerRef}>
              <FigmaAuraCaseStudy />
            </div>
          </div>

          {/* Mobile / Tablet Responsive Fallback */}
          <div className="lg:hidden w-full bg-white">
            {renderResponsiveLayout()}
          </div>
        </>
      </motion.main>

      {/* Footer Section */}
      <div className="mt-16 relative z-10 bg-white">
        <div className="flex justify-end pr-6 lg:pr-12 py-12">
          <CaseStudyNavArrows />
        </div>
        <Footer />
      </div>
    </div>
  );
}

function RecruiterUseCasesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Difficult Conversations",
      tag: "Use Case 01",
      desc: "Prompts users when both parties are in an 'Open' state to ensure healthy timing.",
      impact: "AURA changed the timing, not the outcome. Right moment, right conversation."
    },
    {
      title: "Onboarding Relief",
      tag: "Use Case 02",
      desc: "Helps new hires gauge coworker availability without physical co-presence signals.",
      impact: "Removing uncertainty removes anxiety. Knowing who is open = less social paralysis."
    },
    {
      title: "Burnout Firewall",
      tag: "Use Case 03",
      desc: "Private insights layer warns user of high stress levels, prompting them to recharge.",
      impact: "The body knows first. Private insight layer signals burnout before it surfaces socially."
    }
  ];

  return (
    <div className="space-y-4">
      {/* Tab Selectors */}
      <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                currentSlide === idx
                  ? "bg-black text-white shadow-xs font-bold"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-black hover:text-white cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
            className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-black hover:text-white cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      {/* Active Slide Card */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-2 shadow-xs transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">{slides[currentSlide].tag}</span>
          <span className="text-xs text-gray-400 font-medium">{currentSlide + 1} / {slides.length}</span>
        </div>
        <h4 className="font-bold text-base text-black">{slides[currentSlide].title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{slides[currentSlide].desc}</p>
        <p className="text-xs italic text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100/80 mt-2">
          "{slides[currentSlide].impact}"
        </p>
      </div>
    </div>
  );
}

function TypingQuote({
  text = `"Every approach is a guess. You can't see how they're feeling. They can't signal you to wait. So you interrupt, and the moment breaks."`,
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping && !isDone) {
          setIsTyping(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isTyping, isDone]);

  useEffect(() => {
    if (!isTyping || isDone) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsDone(true);
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [isTyping, isDone, text]);

  return (
    <p ref={containerRef} className={className}>
      {displayedText}
      {!isDone && (
        <span className="inline-block w-[3px] h-[1em] bg-[#AFA9EC] ml-1 translate-y-[2px] animate-pulse" />
      )}
    </p>
  );
}
