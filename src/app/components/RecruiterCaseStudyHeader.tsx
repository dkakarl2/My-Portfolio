import { motion } from "motion/react";
import { Briefcase, Building2, Calendar, Clock, Award, ArrowRight } from "lucide-react";

interface RecruiterCaseStudyHeaderProps {
  title: string;
  role: string;
  company: string;
  timeline: string;
  duration: string;
  outcome: string;
  skills: string[];
  tools: string[];
  impact?: string[];
  accentColor?: string;
  liveLink?: string;
}

export function RecruiterCaseStudyHeader({
  title,
  role,
  company,
  timeline,
  duration,
  outcome,
  skills,
  tools,
  impact,
  accentColor = "#4AB7C4",
  liveLink,
}: RecruiterCaseStudyHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-[#fafafa] border-b border-[#eee]"
    >
      <div className="max-w-[1224px] mx-auto px-8 lg:px-12 py-8 lg:py-10">
        {/* Top row — Title + Role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <h2 className="font-['Inter'] font-bold text-[24px] lg:text-[32px] text-black leading-tight mb-2">
            {title}
          </h2>
          <p className="font-['Inter'] text-[15px] lg:text-[16px] text-[#666] leading-relaxed max-w-2xl">
            {outcome}
          </p>
        </motion.div>

        {/* Meta grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6"
        >
          {[
            { icon: Briefcase, label: "Role", value: role },
            { icon: Building2, label: "Company", value: company },
            { icon: Calendar, label: "Timeline", value: timeline },
            { icon: Clock, label: "Duration", value: duration },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#eee]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.06, duration: 0.4 }}
            >
              <item.icon
                size={15}
                strokeWidth={2}
                className="mt-0.5 flex-shrink-0"
                style={{ color: accentColor }}
              />
              <div>
                <span className="block font-['Inter'] text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-0.5">
                  {item.label}
                </span>
                <span className="block font-['Inter'] text-[13px] font-semibold text-black leading-snug">
                  {item.value}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact metrics / Live Link row */}
        {((impact && impact.length > 0) || liveLink) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            {impact && impact.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border bg-white"
                style={{
                  backgroundColor: `${accentColor}08`,
                  borderColor: `${accentColor}30`,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.06 }}
              >
                <Award size={12} style={{ color: accentColor }} />
                <span
                  className="font-['Inter'] text-[12px] font-semibold"
                  style={{ color: accentColor }}
                >
                  {item}
                </span>
              </motion.div>
            ))}

            {liveLink && (
              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border font-['Inter'] text-[12px] font-semibold shadow-xs transition duration-200"
                style={{
                  backgroundColor: `${accentColor}10`,
                  borderColor: `${accentColor}40`,
                  color: accentColor,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, backgroundColor: `${accentColor}18` }}
              >
                <ArrowRight size={12} style={{ color: accentColor }} className="animate-pulse" />
                <span>View Prototype — {liveLink.replace(/^https?:\/\//, '')}</span>
              </motion.a>
            )}
          </motion.div>
        )}

        {/* Skills + Tools */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col lg:flex-row gap-4 lg:gap-8"
        >
          {/* Skills */}
          <div className="flex-1">
            <span className="block font-['Inter'] text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-2">
              Skills Applied
            </span>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-2.5 py-1 rounded-md bg-white border border-[#e0e0e0] font-['Inter'] text-[11px] font-medium text-[#444]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 + i * 0.03 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="flex-1">
            <span className="block font-['Inter'] text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-2">
              Tools Used
            </span>
            <div className="flex flex-wrap gap-1.5">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  className="px-2.5 py-1 rounded-md bg-white border border-[#e0e0e0] font-['Inter'] text-[11px] font-medium text-[#444]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.03 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
