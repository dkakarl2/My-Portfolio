import { motion } from "motion/react";
import { ScribbleHighlight } from "@/app/components/ScribbleHighlight";
import { Download, Mail, Briefcase, Calendar, MapPin, Clock } from "lucide-react";
import imgImage47 from "figma:asset/5a289eeecaadd3236ae5bc773c168b62d25e0654.png";
import imgImage48Hover from "figma:asset/64e38f4a89033dda3d8718d3f85d0d54da6e10b7.png";
import imgImage49 from "figma:asset/6e4de7965720e764d62d472550ce59788110d82a.png";
import { useState } from "react";

const stats = [
  {
    icon: Calendar,
    label: "Availability",
    value: "Immediately",
    color: "#E74973",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tempe, AZ",
    color: "#FFC627",
  },
  {
    icon: Clock,
    label: "Graduation",
    value: "Dec 2026",
    color: "#4AB7C4",
  },
];

const skills = [
  "UX Design",
  "Design Systems",
  "User Research",
  "Interaction Design",
  "Prototyping",
  "AI-First UX",
  "Figma",
  "Accessibility",
];

export function RecruiterHero() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section className="min-h-screen flex flex-col pt-36 lg:pt-44 pb-10 px-8 lg:px-0 lg:pl-[204px] max-w-[1224px] mx-auto overflow-hidden lg:overflow-visible">
      <div className="relative flex flex-col lg:block">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D1F7EA] border border-[#34D399]">
            <motion.div
              className="w-2 h-2 rounded-full bg-[#059669]"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="font-['Inter'] font-semibold text-[13px] text-[#059669]">
              Open to full-time opportunities
            </span>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-1 mb-4"
        >
          <p className="font-['Caveat_Brush'] text-xl lg:text-2xl text-[#747474]">
            Hello, I'm Deepika
          </p>
          <motion.div
            className="w-[20px] h-[23px] lg:w-[23px] lg:h-[26px] relative"
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={imgImage49}
              alt=""
              className="absolute left-[-38.58%] top-[-24.59%] w-[173.27%] h-[150.81%] max-w-none object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Value-led headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="font-['Inter'] font-bold lg:text-[48px] leading-tight lg:leading-[54px] text-black text-[28px]">
            UX Designer with experience in<br className="hidden lg:block" />
            healthcare, fintech, and<br className="hidden lg:block" />
            design systems.
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Inter'] text-[16px] lg:text-[18px] text-[#666] leading-relaxed max-w-[560px] mb-8"
        >
          MS in User Experience from Arizona State University. Skilled in systems thinking,
          user research, and shipping accessible products at scale.
        </motion.p>

        {/* Skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2 mb-10 max-w-[560px]"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="px-3 py-1.5 rounded-full bg-[#f5f5f5] border border-[#e8e8e8] font-['Inter'] text-[12px] font-medium text-[#555] hover:bg-[#eee] transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 + i * 0.04, duration: 0.3 }}
              whileHover={{ scale: 1.05, borderColor: "#4AB7C4" }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-3 mb-16"
        >
          <a
            href="https://drive.google.com/file/d/1-AMMFEqh1kL1o4waWsPSVXKjS_sT7zqS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-['Inter'] font-semibold text-[14px]"
              whileHover={{ scale: 1.04, backgroundColor: "#222" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Download size={16} strokeWidth={2.2} />
              Download Resume
            </motion.div>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=dkakarl2@asu.edu" target="_blank" rel="noopener noreferrer">
            <motion.div
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-black text-black font-['Inter'] font-semibold text-[14px]"
              whileHover={{ scale: 1.04, backgroundColor: "#f5f5f5" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Mail size={16} strokeWidth={2.2} />
              Get in Touch
            </motion.div>
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-[500px]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative flex flex-col gap-1.5 p-4 rounded-2xl bg-[#fafafa] border border-[#eee] group"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
              whileHover={{
                y: -3,
                borderColor: stat.color,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
            >
              <div className="flex items-center gap-2">
                <stat.icon
                  size={14}
                  strokeWidth={2.2}
                  style={{ color: stat.color }}
                />
                <span className="font-['Inter'] text-[11px] font-medium text-[#999] uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
              <span className="font-['Inter'] text-[16px] font-bold text-black">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Doodle illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 12.33 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
            rotate: [12.33, 14, 12.33, 10, 12.33],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative mt-8 lg:mt-0 lg:absolute lg:right-[80px] lg:top-[120px] w-48 h-40 lg:w-[220px] lg:h-[200px] cursor-pointer mx-auto lg:mx-0 hidden lg:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? imgImage48Hover : imgImage47}
            alt="Doodle character"
            className="w-full h-full object-contain transition-opacity duration-200"
          />
        </motion.div>
      </div>
    </section>
  );
}
