
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface RevealOnScrollProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
}

export function RevealOnScroll({
    children,
    width = "fit-content",
    className = "",
    delay = 0
}: RevealOnScrollProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 75 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
                transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
