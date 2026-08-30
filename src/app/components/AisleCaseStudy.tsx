import { Navigation } from "@/app/components/Navigation";
import { Wrench, Search, AlertTriangle } from "lucide-react";
import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/app/components/useScrollAnimation";
import { CaseStudyNavArrows } from "@/app/components/CaseStudyNavArrows";
import { Footer } from "@/app/components/Footer";
import aisleVideo from "@/assets/Aisle video.mp4";
import aisleHeroImage from "@/assets/Aisle hero.png";
import aisleDashboardImage from "@/assets/Aisle dashboard.png";
import aisleSearchImage from "@/assets/Aisle Search.png";
import aisleRecoveryImage from "@/assets/Aisle Recovery.png";
import aisleAuditTrailImage from "@/assets/Aisle Audit trail.png";

// Placeholder component
function Placeholder({ title, aspectRatio = "aspect-video" }: { title: string, aspectRatio?: string }) {
  return (
    <div className={`w-full ${aspectRatio} bg-gray-100 rounded-2xl flex flex-col items-center justify-center border border-gray-200/60 p-4 text-center`}>
      <span className="text-gray-400 font-bold tracking-wide uppercase text-sm">{title}</span>
    </div>
  );
}

function TypewriterText({ text, className }: { text: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div ref={ref} className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.05, delay: index * 0.015 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

function AnimatedCounter({ from, to, suffix = "", prefix = "", className }: { from: number; to: number; suffix?: string; prefix?: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(v) {
          setValue(Math.round(v));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to]);

  return <div ref={ref} className={className}>{prefix}{value}{suffix}</div>;
}

export function AisleCaseStudy() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden animate-fade-in" data-case-study-content>
      <Navigation />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full"
      >
        <div className="pb-16 space-y-16 lg:space-y-24 font-['Manrope',sans-serif]">
          {/* HERO */}
          <div className="w-full pt-16">
            <div className="max-w-[994px] mx-auto px-6 pt-24 lg:pt-32 pb-4">
              <h1 className="text-[36px] md:text-[44px] font-bold text-[#111111] tracking-tight mb-4 font-['Inter',sans-serif]">
                AIsle - AI Agent File Manager
              </h1>
              <p className="text-[15px] md:text-[18px] text-[#555555] leading-[1.6] max-w-4xl mb-8 font-['Inter',sans-serif]">
                Designing the missing layer for multi-agent AI workflows, a unified project layer above individual AI platforms that organises, connects, and makes searchable everything those tools produce.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-500 text-[11px] font-bold tracking-wider uppercase font-['Inter',sans-serif]">
                  AI & AGENTS
                </span>
                <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-500 text-[11px] font-bold tracking-wider uppercase font-['Inter',sans-serif]">
                  WORKFLOW UX
                </span>
                <span className="px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-500 text-[11px] font-bold tracking-wider uppercase font-['Inter',sans-serif]">
                  SAAS PRODUCT
                </span>
              </div>
            </div>
            <div className="max-w-[1440px] mx-auto mt-10">
              <img src={aisleHeroImage} alt="AIsle Hero Visual" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="max-w-[994px] mx-auto px-6 space-y-24">
            
            {/* OVERVIEW */}
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-8 pt-8">
              <h2 className="text-[22px] font-bold text-black font-['Inter',sans-serif]">Overview</h2>
              <p className="text-[15px] md:text-[16px] text-[#555555] leading-[1.6] max-w-4xl font-['Inter',sans-serif]">
                Designing the missing layer for multi-agent AI workflows, a unified project layer above individual AI platforms that organizes, connects, and makes searchable everything those tools produce.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 mt-8 border-t border-gray-100/60">
                <div className="space-y-2">
                  <h3 className="font-bold text-[#333333] text-[15px] font-['Inter',sans-serif]">Role</h3>
                  <p className="text-[15px] text-[#555555] font-['Inter',sans-serif]">UX Designer</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-[#333333] text-[15px] font-['Inter',sans-serif]">Team</h3>
                  <p className="text-[15px] text-[#555555] font-['Inter',sans-serif]">Deepika, Saha</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-[#333333] text-[15px] font-['Inter',sans-serif]">Tools</h3>
                  <p className="text-[15px] text-[#555555] font-['Inter',sans-serif]">Figma, Figma Make, Claude</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-[#333333] text-[15px] font-['Inter',sans-serif]">Platforms</h3>
                  <p className="text-[15px] text-[#555555] font-['Inter',sans-serif]">Web application</p>
                </div>
              </div>
            </motion.section>

            {/* 01 - PROBLEM */}
            <motion.section id="nav-problem" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-8">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                01 <span className="text-gray-300">-</span> PROBLEM
              </div>
              
              <div className="text-xl font-bold text-black">The problem</div>
              
              <div className="border-l-[4px] border-[#2dd4bf] pl-6 py-1">
                <TypewriterText 
                  text="&quot;We've built incredibly powerful AI tools, and absolutely no infrastructure for the thinking that happens inside them.&quot;"
                  className="text-[22px] md:text-[24px] font-bold text-black leading-snug max-w-[994px]"
                />
              </div>

              <div className="text-[17px] text-gray-600 leading-relaxed max-w-[994px]">
                In 2025, the average knowledge worker uses 4- 6 AI platforms daily - ChatGPT, Claude, Perplexity, Gemini. Each conversation holds valuable insights and decisions. Yet those conversations remain trapped in platform-specific silos, creating what we named the Cognitive Offloading Trap: users distribute their thinking across tools but lack the infrastructure to manage that distributed cognition.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="bg-[#f9fafb] p-8 rounded-3xl space-y-4">
                  <div className="text-5xl font-bold text-black flex">
                    <AnimatedCounter from={0} to={4} />
                    <span>-</span>
                    <AnimatedCounter from={0} to={6} />
                  </div>
                  <div className="text-[15px] text-gray-600 leading-relaxed">AI platforms per knowledge worker daily</div>
                </div>
                <div className="bg-[#f9fafb] p-8 rounded-3xl space-y-4">
                  <AnimatedCounter from={0} to={60} suffix="%" className="text-5xl font-bold text-black" />
                  <div className="text-[15px] text-gray-600 leading-relaxed">of users re-prompt rather than search for past insights</div>
                </div>
                <div className="bg-[#f9fafb] p-8 rounded-3xl space-y-4">
                  <AnimatedCounter from={0} to={0} className="text-5xl font-bold text-black" />
                  <div className="text-[15px] text-gray-600 leading-relaxed">existing tools offer cross-agent semantic search + audit trail</div>
                </div>
              </div>
            </motion.section>

            {/* 02 - ROLE */}
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-8">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                02 <span className="text-gray-300">-</span> ROLE
              </div>
              
              <div className="text-xl font-bold text-black">My contributions</div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                <div className="bg-[#f9fafb] p-8 rounded-3xl space-y-3">
                  <div className="text-[17px] font-bold text-black">Semantic search</div>
                  <div className="text-[15px] text-gray-600 leading-relaxed">Crazy 8s ideation, wireframes, and high-fidelity design for the Search Hub, loading states, relevance results, and empty states</div>
                </div>
                <div className="bg-[#f9fafb] p-8 rounded-3xl space-y-3">
                  <div className="text-[17px] font-bold text-black">Dashboard</div>
                  <div className="text-[15px] text-gray-600 leading-relaxed">Co-designed project card layout, platform badge system, and progress indicators</div>
                </div>
                <div className="bg-[#f9fafb] p-8 rounded-3xl space-y-3">
                  <div className="text-[17px] font-bold text-black">Lo-fi testing</div>
                  <div className="text-[15px] text-gray-600 leading-relaxed">Facilitated Wizard of Oz evaluations; synthesized filter discoverability and chronology issues</div>
                </div>
                <div className="bg-[#f9fafb] p-8 rounded-3xl space-y-3">
                  <div className="text-[17px] font-bold text-black">Research</div>
                  <div className="text-[15px] text-gray-600 leading-relaxed">Structured interviews, affinity diagram synthesis, POV and HMW framing</div>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              <video 
                src={aisleVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto object-cover"
              />
            </motion.section>

            {/* WHAT WE BUILT */}
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-16 pt-12 pb-24">
              <h2 className="text-2xl md:text-3xl font-bold text-black">What we built</h2>
              
              <div className="space-y-32">
                
                {/* 1. Cross-agent dashboard */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/3 space-y-4 bg-[#f9fafb] p-8 rounded-3xl"
                  >
                    <div className="text-[20px] font-bold text-black leading-tight">Cross-agent<br/>dashboard</div>
                    <div className="text-[16px] text-gray-500 leading-relaxed">
                      View all conversations across ChatGPT, Claude, and Perplexity in a unified project view. Eliminates platform switching.
                    </div>
                  </motion.div>
                  <div className="w-full md:w-2/3">
                    <div className="w-full rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-gray-50">
                      <img src={aisleDashboardImage} alt="Cross-agent dashboard" className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                {/* 2. Semantic search */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/3 space-y-4 bg-[#f9fafb] p-8 rounded-3xl"
                  >
                    <div className="text-[20px] font-bold text-black leading-tight">Semantic search</div>
                    <div className="text-[16px] text-gray-500 leading-relaxed">
                      Natural-language search across all agents with ranked snippets. Find that decision from six weeks ago in seconds.
                    </div>
                  </motion.div>
                  <div className="w-full md:w-2/3">
                    <div className="w-full rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-gray-50">
                      <img src={aisleSearchImage} alt="Semantic search" className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                {/* 3. AI audit trail */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/3 space-y-4 bg-[#f9fafb] p-8 rounded-3xl"
                  >
                    <div className="text-[20px] font-bold text-black leading-tight">AI audit trail</div>
                    <div className="text-[16px] text-gray-500 leading-relaxed">
                      Citation-ready reports showing which AI contributed what, with timestamps. Supports academic integrity and stakeholder trust.
                    </div>
                  </motion.div>
                  <div className="w-full md:w-2/3">
                    <div className="w-full rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-gray-50">
                      <img src={aisleAuditTrailImage} alt="AI audit trail" className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                {/* 4. Context recovery */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/3 space-y-4 bg-[#f9fafb] p-8 rounded-3xl"
                  >
                    <div className="text-[20px] font-bold text-black leading-tight">Context recovery</div>
                    <div className="text-[16px] text-gray-500 leading-relaxed">
                      Resume any project with all related conversations, highlights, and searches restored. Continue exactly where you left off.
                    </div>
                  </motion.div>
                  <div className="w-full md:w-2/3">
                    <div className="w-full rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-gray-50">
                      <img src={aisleRecoveryImage} alt="Context recovery" className="w-full h-auto" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.section>

            {/* 03 - RESEARCH */}
            <motion.section id="nav-research" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-8">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                03 <span className="text-gray-300">-</span> RESEARCH
              </div>
              
              <div className="text-xl font-bold text-black">Understanding fragmentation</div>

              <div className="text-[17px] text-gray-600 leading-relaxed max-w-[994px] pb-4">
                We grounded our design in established research on cognitive load and knowledge work, then validated it through three user interviews and a structured questionnaire.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#f9fafb] p-8 rounded-3xl space-y-6">
                  <div className="space-y-1">
                    <div className="text-[17px] font-bold text-black">Marcus Chen, 30</div>
                    <div className="text-[15px] text-gray-500">UX researcher &middot; SaaS startup</div>
                  </div>
                  <div className="border-l-[4px] border-black pl-4 py-1">
                    <div className="text-[15px] text-gray-600 leading-relaxed">
                      "I know the answers exist somewhere in my AI chats. I just can't remember where."
                    </div>
                  </div>
                </div>

                <div className="bg-[#f9fafb] p-8 rounded-3xl space-y-6">
                  <div className="space-y-1">
                    <div className="text-[17px] font-bold text-black">Alex Geller, 29</div>
                    <div className="text-[15px] text-gray-500">Solo founder &middot; B2B productivity</div>
                  </div>
                  <div className="border-l-[4px] border-black pl-4 py-1">
                    <div className="text-[15px] text-gray-600 leading-relaxed">
                      Spends Sunday nights manually compiling AI work. Overwhelmed, out of control as his project grows.
                    </div>
                  </div>
                </div>

                <div className="bg-[#f9fafb] p-8 rounded-3xl space-y-6">
                  <div className="space-y-1">
                    <div className="text-[17px] font-bold text-black">Priya Sharma, 26</div>
                    <div className="text-[15px] text-gray-500">UX researcher &middot; SaaS startup</div>
                  </div>
                  <div className="border-l-[4px] border-black pl-4 py-1">
                    <div className="text-[15px] text-gray-600 leading-relaxed">
                      Can't trace which AI contributed which hypothesis.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-16 space-y-6">
                <h3 className="text-[17px] font-bold text-black mb-4">What we found</h3>
                
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-[#f9fafb] p-8 rounded-3xl space-y-3"
                  >
                    <Wrench className="w-6 h-6 text-black mb-2" strokeWidth={2.5} />
                    <div className="text-[16px] font-bold text-black">Everyone used manual workarounds.</div>
                    <div className="text-[15px] text-gray-500">Screenshots, copy-paste to docs, browser bookmarks, "prompt journals", none of them sustainable at scale.</div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="bg-[#f9fafb] p-8 rounded-3xl space-y-3"
                  >
                    <Search className="w-6 h-6 text-black mb-2" strokeWidth={2.5} />
                    <div className="text-[16px] font-bold text-black">Re-prompting beat searching, every time</div>
                    <div className="text-[15px] text-gray-500">P1 re-prompted 60% of the time, "It's faster to ask again than find it."</div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    className="bg-[#f9fafb] p-8 rounded-3xl space-y-3"
                  >
                    <AlertTriangle className="w-6 h-6 text-black mb-2" strokeWidth={2.5} />
                    <div className="text-[16px] font-bold text-black">Accountability anxiety was universal.</div>
                    <div className="text-[15px] text-gray-500">P2 told executives "according to our research" while hoping no one asked which AI generated the analysis.</div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* 04 - SYNTHESIS */}
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-8 pt-8">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                04 <span className="text-gray-300">-</span> SYNTHESIS
              </div>
              
              <div className="space-y-6">
                <h3 className="text-[17px] font-bold text-black">Three synthesis themes</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2.5 bg-[#f0fdf4] text-black font-medium text-[15px] rounded-full">Workflow fragmentation</span>
                  <span className="px-5 py-2.5 bg-[#f0fdf4] text-black font-medium text-[15px] rounded-full">Poor retrieval</span>
                  <span className="px-5 py-2.5 bg-[#f0fdf4] text-black font-medium text-[15px] rounded-full">Accountability gap</span>
                </div>
              </div>

              <div className="pt-8 space-y-6">
                <h3 className="text-[17px] font-bold text-black">How Might We questions</h3>
                
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-[#f0fdf4] p-8 rounded-3xl space-y-2"
                  >
                    <div className="text-[16px] font-bold text-black">Cognitive load</div>
                    <div className="text-[15px] text-gray-500">How might we reduce the load caused by switching between multiple AI platforms during a single project?</div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="bg-[#f0fdf4] p-8 rounded-3xl space-y-2"
                  >
                    <div className="text-[16px] font-bold text-black">Retrieval</div>
                    <div className="text-[15px] text-gray-500">How might we help users retrieve past AI-generated insights faster than re-prompting?</div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    className="bg-[#f0fdf4] p-8 rounded-3xl space-y-2"
                  >
                    <div className="text-[16px] font-bold text-black">Accountability</div>
                    <div className="text-[15px] text-gray-500">How might we enable users to clearly trace and explain which AI contributed to specific decisions?</div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* 05 - PROCESS */}
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-12 pt-16 pb-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  05 <span className="text-gray-300">-</span> PROCESS
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-[20px] md:text-[22px] font-bold text-black">From ideas to interface</h3>
                  <div className="text-[17px] text-gray-600 leading-relaxed max-w-[994px]">
                    Each team member ran Crazy 8s for one feature, then dot-voted on layouts and developed detailed wireframes. Four epics, each mapped to a primary persona.
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                
                {/* Step 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative flex items-start gap-6 md:gap-8"
                >
                  <div className="absolute top-10 bottom-[-40px] left-[15.5px] w-px bg-gray-200" />
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#0ea5e9] shrink-0 text-white flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">1</div>
                  <div className="space-y-2">
                    <h4 className="text-[18px] font-bold text-black">Crazy 8s Ideation</h4>
                    <p className="text-[15px] text-gray-500 leading-relaxed max-w-4xl">I owned Semantic Search. Eight rapid sketches in eight minutes, search hub entry, loading states, results with relevance scores, source context panel, empty states with recovery suggestions.</p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  className="relative flex items-start gap-6 md:gap-8"
                >
                  <div className="absolute top-10 bottom-[-40px] left-[15.5px] w-px bg-gray-200" />
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#0ea5e9] shrink-0 text-white flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">2</div>
                  <div className="space-y-2">
                    <h4 className="text-[18px] font-bold text-black">Storyboards - Design North Star</h4>
                    <p className="text-[15px] text-gray-500 leading-relaxed max-w-4xl">Four persona-driven scenarios showing each feature under realistic pressure. Marcus finds a critical insight in 45 seconds before a stakeholder meeting. Alex retrieves a six-week-old database rationale in under two minutes for an investor call.</p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  className="relative flex items-start gap-6 md:gap-8"
                >
                  <div className="absolute top-10 bottom-[-40px] left-[15.5px] w-px bg-gray-200" />
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#0ea5e9] shrink-0 text-white flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">3</div>
                  <div className="space-y-2">
                    <h4 className="text-[18px] font-bold text-black">Lo-fi Wireframes + Wizard of Oz Testing</h4>
                    <p className="text-[15px] text-gray-500 leading-relaxed max-w-4xl">Paper prototype for Search (five swappable screens). Figma grayscale wireframes for Dashboard, testing whether users understood project-centric vs. platform-centric organization.</p>
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                  className="relative flex items-start gap-6 md:gap-8"
                >
                  {/* No line for the last item */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#0ea5e9] shrink-0 text-white flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">4</div>
                  <div className="space-y-4 w-full">
                    <h4 className="text-[18px] font-bold text-black pt-1">Design System + High-Fidelity</h4>
                    <div className="bg-[#f8fafc] border border-gray-100 p-6 rounded-xl w-full max-w-4xl">
                      <p className="text-[15px] text-gray-500 leading-relaxed">Neutral-first palette, platform colors as metadata (soft tints), Outfit for headlines, IBM Plex Mono for AI outputs. I implemented Dashboard, Search Hub, and Project Timeline screens.</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.section>
          </div>


          <div className="max-w-[994px] mx-auto px-6">
            {/* 06 - PRODUCT EXPERIENCE */}
            <motion.section id="nav-design" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-16">
              <div className="pb-8 border-b border-gray-100">
                <h2 className="text-xs font-bold text-black tracking-widest uppercase flex items-center gap-2">
                  06 <span className="text-gray-300">/</span> PRODUCT EXPERIENCE
                </h2>
              </div>

              {/* 06.1 - ORGANIZE */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-[20px] md:text-[22px] font-bold text-black">Put the project first.</h3>
                  <p className="text-[16px] text-gray-600 leading-relaxed max-w-2xl">
                    Instead of organizing work around individual AI platforms, AIsle groups conversations around the project they contribute to.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                  <div className="space-y-3">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-black">Problem</h4>
                    <p className="text-[15px] text-gray-600 leading-relaxed">AI conversations lived inside separate platforms while users mentally organized their work around projects.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-black">Design Decision</h4>
                    <p className="text-[15px] text-gray-600 leading-relaxed">Make the project the container. Make the AI agent metadata.</p>
                  </div>
                </div>

                <div className="w-full rounded-2xl border border-gray-200/60 overflow-hidden bg-gray-50">
                  <img src={aisleDashboardImage} alt="AIsle Dashboard" className="w-full h-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">01 / Project first</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">Projects become the primary organizing object.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">02 / Agents as metadata</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">ChatGPT, Claude, Perplexity and other agents remain labels, not containers.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">03 / Continuity</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">Project state keeps work connected across sessions.</p>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Design Logic</span>
                  <span className="text-[14px] font-bold text-black">One project. Multiple contributing agents. One continuous workspace.</span>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 my-16"></div>

              {/* 06.2 - RETRIEVE */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-[20px] md:text-[22px] font-bold text-black">Search across the work, not the tool.</h3>
                  <p className="text-[16px] text-gray-600 leading-relaxed max-w-2xl">
                    AIsle lets users search across connected AI conversation histories instead of remembering which platform contained the information.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                  <div className="space-y-3">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-black">Problem</h4>
                    <p className="text-[15px] text-gray-600 leading-relaxed">Previous reasoning was buried across separate conversations and platforms.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-black">Design Decision</h4>
                    <p className="text-[15px] text-gray-600 leading-relaxed">Search across conversations. Preserve where every result came from.</p>
                  </div>
                </div>

                <div className="w-full rounded-2xl border border-gray-200/60 overflow-hidden bg-gray-50">
                  <img src={aisleSearchImage} alt="AIsle Search" className="w-full h-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">01 / Ask</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">Search by intent rather than location.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">02 / Search across agents</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">One query across connected histories.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">03 / Return to source</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">Every result retains its originating conversation and agent.</p>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Design Logic</span>
                  <span className="text-[14px] font-bold text-black">One query. Multiple conversation histories. Every result connected to its source.</span>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 my-16"></div>

              {/* 06.3 - RESUME */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-[20px] md:text-[22px] font-bold text-black">Returning to work shouldn't mean rebuilding the context.</h3>
                  <p className="text-[16px] text-gray-600 leading-relaxed max-w-2xl">
                    AIsle restores the project state around previous conversations, decisions, and notes so users can continue from where the work stopped.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                  <div className="space-y-3">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-black">Problem</h4>
                    <p className="text-[15px] text-gray-600 leading-relaxed">After time away from a project, users had to reconstruct what happened, which conversations mattered, and where the work had stopped.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-black">Design Decision</h4>
                    <p className="text-[15px] text-gray-600 leading-relaxed">Restore the working context, not just the conversation history.</p>
                  </div>
                </div>

                <div className="w-full rounded-2xl border border-gray-200/60 overflow-hidden bg-gray-50">
                  <img src={aisleRecoveryImage} alt="AIsle Context Recovery" className="w-full h-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">01 / Project state</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">Know where the work stopped.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">02 / Active convos</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">Bring relevant conversations forward.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">03 / Decision chain</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">Reconnect the sequence of previous work.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">04 / Working memory</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">Notes and recent activity support re-entry.</p>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Design Logic</span>
                  <span className="text-[14px] font-bold text-black">One project state. Relevant work brought forward. A clear point to continue from.</span>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 my-16"></div>

              {/* 06.4 - TRACE */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-[20px] md:text-[22px] font-bold text-black">Make AI contribution visible.</h3>
                  <p className="text-[16px] text-gray-600 leading-relaxed max-w-2xl">
                    AIsle keeps AI contributions connected to project outputs so users can inspect which agents contributed to the work and trace those contributions back through the project.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                  <div className="space-y-3">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-black">Problem</h4>
                    <p className="text-[15px] text-gray-600 leading-relaxed">As outputs moved through multiple AI conversations, the final work remained visible while the source of individual contributions became harder to trace.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[12px] font-bold uppercase tracking-widest text-black">Design Decision</h4>
                    <p className="text-[15px] text-gray-600 leading-relaxed">Keep contribution history attached to the work.</p>
                  </div>
                </div>

                <div className="w-full rounded-2xl border border-gray-200/60 overflow-hidden bg-gray-50">
                  <img src={aisleAuditTrailImage} alt="AIsle Audit Trail" className="w-full h-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">01 / Contribution distribution</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">See which connected AI agents contributed to the project.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">02 / Audit record</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">Reconnect outputs with their contribution history.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px]">03 / Report</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">Carry provenance beyond the interface.</p>
                    <div className="flex gap-2 pt-1">
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-[11px] font-bold border border-gray-200 uppercase tracking-widest">PDF</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-[11px] font-bold border border-gray-200 uppercase tracking-widest">APA</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-[11px] font-bold border border-gray-200 uppercase tracking-widest">CSV</span>
                    </div>
                    <span className="text-[11px] font-medium text-gray-400 block mt-2">Prototype export concepts</span>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Design Logic</span>
                  <span className="text-[14px] font-bold text-black">Contribution history stays attached. Audit trails are clear. Provenance is exportable.</span>
                </div>
              </div>

            </motion.section>

            {/* 07 - OUTCOME */}
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-10 bg-[#FAFAFA] p-10 md:p-16 rounded-[2.5rem] border border-gray-100 !mt-32 md:!mt-48">
              <h2 className="hidden">07 Outcome</h2> {/* For nav intersection if needed, though we don't strict-rely on it */}
              
              <h3 className="text-3xl md:text-[40px] font-bold text-black leading-tight tracking-tight">What the prototype established</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 pt-8">
                <div className="space-y-6">
                  <h4 className="font-bold text-black text-xl flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span> Validated signals
                  </h4>
                  <ul className="space-y-5 text-[15px] md:text-base text-[#555555] leading-[1.6]">
                    <li className="flex gap-3"><span className="text-gray-300">•</span> Comprehension of the project-centric organization model</li>
                    <li className="flex gap-3"><span className="text-gray-300">•</span> Perceived value of cross-agent search</li>
                    <li className="flex gap-3"><span className="text-gray-300">•</span> Perceived value of Context Recovery</li>
                    <li className="flex gap-3"><span className="text-gray-300">•</span> Importance of traceability and accountability in AI-assisted workflows</li>
                    <li className="flex gap-3"><span className="text-gray-300">•</span> Need for clearer system feedback and platform recognition</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="font-bold text-black text-xl flex items-center gap-2">
                    <span className="text-black font-bold">?</span> What still needs validation
                  </h4>
                  <ul className="space-y-5 text-[15px] md:text-base text-[#555555] leading-[1.6]">
                    <li className="flex gap-3"><span className="text-gray-300">•</span> Retrieval performance over large datasets</li>
                    <li className="flex gap-3"><span className="text-gray-300">•</span> Impact on re-prompting behavior</li>
                    <li className="flex gap-3"><span className="text-gray-300">•</span> Changes in cognitive load during task switching</li>
                    <li className="flex gap-3"><span className="text-gray-300">•</span> User trust in AI contribution reports</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200/60">
                <p className="text-[15px] text-gray-500 text-center">
                  A larger 24-participant mixed-methods study has been proposed to evaluate these future research hypotheses.
                </p>
              </div>
            </motion.section>

            {/* 08 - REFLECTION & 09 - FUTURE */}
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pt-12 pb-12">
              <div className="space-y-10">
                <h2 className="text-[22px] md:text-2xl font-bold text-black flex items-center gap-3">
                  <span className="text-black">08</span>
                  Reflection
                </h2>
                
                <div className="border-t border-gray-200/60 pt-8 space-y-10">
                  <h3 className="text-2xl md:text-[28px] font-bold text-black leading-snug tracking-tight">The interface wasn't the hardest part. Designing the layer between tools was.</h3>

                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h4 className="font-bold text-black text-[17px]">01 / Enhance, don't replace.</h4>
                      <p className="text-[15px] text-[#555555] leading-[1.6]">
                        The meta-layer approach preserves familiar AI workflows. Rather than asking users to migrate to a new ecosystem, the design enhances the tools they already trust.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-black text-[17px]">02 / Functional clarity over aesthetic restraint.</h4>
                      <p className="text-[15px] text-[#555555] leading-[1.6]">
                        A minimal visual treatment only works when users can quickly distinguish agents, states, and actions. Aggressive minimalism can obscure necessary system feedback.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-black text-[17px]">03 / Novel interactions need explicit feedback.</h4>
                      <p className="text-[15px] text-[#555555] leading-[1.6]">
                        Actions like restoring project context do not yet have universally understood interaction conventions. Explicit system-status feedback is therefore critical.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <h2 className="text-[22px] md:text-2xl font-bold text-black flex items-center gap-3">
                  <span className="text-black">09</span>
                  Future Direction
                </h2>
                
                <div className="border-t border-gray-200/60 pt-8 space-y-8">
                  <h3 className="text-2xl md:text-[28px] font-bold text-black leading-snug tracking-tight">Where AIsle could go next</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl space-y-2">
                      <h4 className="font-bold text-black text-[15px]">Platform/API availability</h4>
                      <p className="text-[14px] text-[#555555] leading-[1.5]">Expand synchronization as APIs and integrations allow.</p>
                    </div>
                    <div className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl space-y-2">
                      <h4 className="font-bold text-black text-[15px]">Automatic linking</h4>
                      <p className="text-[14px] text-[#555555] leading-[1.5]">Reduce manual project association.</p>
                    </div>
                    <div className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl space-y-2">
                      <h4 className="font-bold text-black text-[15px]">Broader integrations</h4>
                      <p className="text-[14px] text-[#555555] leading-[1.5]">Connect project artifacts beyond AI conversations.</p>
                    </div>
                    <div className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl space-y-2">
                      <h4 className="font-bold text-black text-[15px]">Collaboration</h4>
                      <p className="text-[14px] text-[#555555] leading-[1.5]">Explore shared project context across teams.</p>
                    </div>
                    <div className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-2xl space-y-2 sm:col-span-2">
                      <h4 className="font-bold text-black text-[15px]">Scale</h4>
                      <p className="text-[14px] text-[#555555] leading-[1.5]">Evaluate retrieval, provenance, and context recovery across much larger datasets.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.main>

      {/* Footer Section */}
      <div className="mt-16 relative z-10 bg-white border-t border-gray-100">
        <div className="flex justify-end pr-6 lg:pr-12 py-12">
          <CaseStudyNavArrows />
        </div>
        <Footer />
      </div>
    </div>
  );
}
