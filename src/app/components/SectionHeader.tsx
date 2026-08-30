import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// Animated draw-in line
function DrawLine({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="h-[2px] bg-black mt-4"
      initial={{ scaleX: 0, transformOrigin: "left" }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

export function SectionHeader({
  title,
  subtitle,
  number,
}: {
  title: string;
  subtitle?: string;
  number?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const numberX = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const numberOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={ref} className="mb-16 lg:mb-24">
      <div className="flex items-end gap-6 lg:gap-10">
        {/* Optional numbering — slides in from left */}
        {number && (
          <motion.span
            className="font-['Manrope'] font-bold text-[14px] text-[#bbb] tracking-[0.15em] uppercase hidden lg:block"
            style={{ x: numberX, opacity: numberOpacity }}
          >
            {number}
          </motion.span>
        )}

        <div className="flex-1">
          {/* Main title */}
          <motion.h2
            className="font-['Manrope'] font-bold text-[clamp(24px,3.5vw,40px)] text-black tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              className="font-['Manrope'] text-[14px] lg:text-[15px] text-[#777] mt-2.5 max-w-xl leading-relaxed font-normal"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
