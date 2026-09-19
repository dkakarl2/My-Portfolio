import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScribbleUnderlineProps {
    children: ReactNode;
    color: string;
    delay?: number;
}

export function ScribbleUnderline({ children, color, delay = 0.5 }: ScribbleUnderlineProps) {
    return (
        <span className="relative inline-block whitespace-nowrap">
            {children}
            {/* Scribble Underline - animated */}
            <span className="absolute left-0 right-0 bottom-[-4px] h-[6px] pointer-events-none">
                <svg
                    viewBox="0 0 100 10"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        d="M2 5 Q 25 8 50 4 T 98 6"
                        fill="none"
                        stroke={color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay, ease: "easeOut" }}
                    />
                </svg>
            </span>
        </span>
    );
}
