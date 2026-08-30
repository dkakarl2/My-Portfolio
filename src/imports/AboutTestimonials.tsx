import { motion } from "motion/react";
import React from "react";
import imgImage66 from "figma:asset/99350ebc35c41973494fc9e5494eb01875c68afb.png";
import imgImage71 from "figma:asset/0765ebab688de14bbaba4b46c5e636020e49383c.png";
import imgImage72 from "figma:asset/9536ed981b7082bd3b2b6df43ad931d3ef5e0e82.png";

function AnimatedScribble({ color = "#E74973", delay = 0 }: { color?: string; delay?: number }) {
  return (
    <svg
      viewBox="0 0 280 12"
      className="absolute -bottom-2 left-0 w-[110%] -translate-x-[5%] h-4 overflow-visible"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 8C40 2 80 10 120 6C160 2 200 10 240 4C260 2 275 6 278 8"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

function TestimonialCard({
  imageSrc,
  name,
  role,
  company,
  text,
  rotate,
  offsetY
}: {
  imageSrc: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rotate: number;
  offsetY: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center justify-between gap-6 bg-[#FDFBF7] text-center px-8 py-10 rounded-[40px] w-full lg:w-[400px] shadow-xl shrink-0 border border-black/5"
      style={{ rotate: rotate, y: offsetY }}
      whileHover={{ scale: 1.02, rotate: 0, y: offsetY - 10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Avatar */}
      <div className="w-[72px] h-[72px] rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      
      {/* Testimonial Text */}
      <p className="font-['Manrope'] text-[15.5px] text-[#2D2D2D] leading-[1.6] font-medium flex-grow">
        "{text}"
      </p>

      {/* Name and Role */}
      <div className="flex flex-col items-center mt-3 text-center">
        <p className="font-['Manrope'] font-bold text-[15px] text-[#111827]">
          {name}
        </p>
        <p className="font-['Manrope'] font-medium text-[13px] text-[#6B7280] mt-1 leading-snug">
          {role} <br className="hidden lg:block"/> <span className="text-[#9CA3AF]">{company}</span>
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutTestimonials() {
  const testimonials = [
    {
      name: "Jeroel Padilla",
      role: "Design Operations Manager, Design Systems",
      company: "EdPlus at ASU",
      imageSrc: imgImage66,
      text: "Deepika is a systematic, thoughtful, and highly reliable UX designer. She adapts quickly to feedback, approaches challenges with genuine curiosity, and takes real ownership of her craft. A truly valuable team contributor.",
      rotate: -2,
      offsetY: 20
    },
    {
      name: "Rajeshwari Jaykumar",
      role: "UX Design Assistant",
      company: "EdPlus at ASU",
      imageSrc: imgImage71,
      text: "Deepika is someone you can always count on! She brings intention to her work and calm to the team, making collaboration feel effortless. Working alongside her is both reassuring and inspiring.",
      rotate: 1,
      offsetY: -20
    },
    {
      name: "Anirudh Palaskar",
      role: "UX Researcher, Systems & AI Enablement",
      company: "EdPlus at ASU",
      imageSrc: imgImage72,
      text: "Deepika genuinely cares about the user and the quality of her work. She takes time to really understand problems before jumping into solutions. Always open to feedback and willing to go the extra mile.",
      rotate: -1,
      offsetY: 10
    }
  ];

  return (
    <div className="bg-[#0a0a0a] relative w-full lg:min-h-[1000px] py-24 rounded-[32px] lg:rounded-none overflow-hidden flex flex-col items-center justify-center" data-name="About - Testimonials">
      
      {/* Subtle ambient gradients */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,183,196,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,73,115,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1320px] mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Title */}
        <motion.div 
          className="text-center mb-16 lg:mb-24 px-4 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative inline-block">
            <h2 className="font-['Manrope'] font-bold text-[clamp(36px,5vw,56px)] leading-[1.15] text-white tracking-tight relative z-10">
              What It's Like to<br />
              <span className="relative inline-block mt-2 lg:mt-0">
                Work With Me
                <AnimatedScribble color="#FFC627" delay={0.3} />
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Cards Row/Stack */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-6 w-full px-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-full lg:w-auto justify-center"
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}