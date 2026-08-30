import { useState, useEffect, useRef, useCallback } from "react";

function AnimatedCounter({ target, suffix = '%', color, duration = 1800 }: { target: number; suffix?: string; color: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);

    const easeOutCubic = useCallback((t: number) => 1 - Math.pow(1 - t, 3), []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const startTime = performance.now();

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easedProgress = easeOutCubic(progress);
                        const currentValue = Math.round(easedProgress * target);
                        setCount(currentValue);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration, hasAnimated, easeOutCubic]);

    return (
        <p
            ref={ref}
            className="font-['Manrope'] font-bold leading-[normal] not-italic text-[56px] transition-colors duration-300"
            style={{ color }}
        >
            {count}{suffix}
        </p>
    );
}

interface ImpactCardProps {
    value?: number | string;
    // Keep target for backward compatibility if needed, but prefer value
    target?: number;
    suffix?: string;
    description: string;
    themeColor: string;
    maxWidth?: string;
    reverseLayout?: boolean;
}

export function ImpactCard({ value, target, suffix = "", description, themeColor, maxWidth, reverseLayout = false }: ImpactCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Normalize value
    const finalValue = value !== undefined ? value : target;
    // Default suffix to % if not provided and value is number, to match previous behavior?
    // Actually previous default was "%".
    // If value is string, suffix might not be needed or should be appended.
    const finalSuffix = suffix === "" && typeof finalValue === 'number' ? "%" : suffix;

    const ValueComponent = typeof finalValue === 'number'
        ? <AnimatedCounter target={finalValue} suffix={finalSuffix} color={isHovered ? '#ffffff' : '#000000'} />
        : <p className="font-['Manrope'] font-bold leading-[normal] not-italic text-[56px] transition-colors duration-300" style={{ color: isHovered ? '#ffffff' : '#000000', margin: 0 }}>{finalValue}{finalSuffix}</p>;

    const DescriptionComponent = (
        <p
            className="font-['Manrope'] font-medium leading-[normal] not-italic text-[20px] whitespace-pre-wrap transition-colors duration-300"
            style={{
                color: isHovered ? '#ffffff' : '#5d5d5d',
                maxWidth: maxWidth || '100%'
            }}
        >
            {description}
        </p>
    );

    return (
        <div
            data-hide-cursor="true"
            className="bg-white rounded-[24px] flex-1 min-h-[218px] relative overflow-hidden transition-all duration-300 ease-out cursor-default hover:-translate-y-1 hover:scale-[1.02]"
            style={{
                border: '1px solid #ece2e2',
                backgroundColor: isHovered ? '#000000' : '#ffffff',
                boxShadow: isHovered ? `0 8px 30px ${themeColor}26` : 'none'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`flex flex-col gap-[39px] items-start p-[36px] h-full justify-between`}>
                {reverseLayout ? (
                    <>
                        {DescriptionComponent}
                        {ValueComponent}
                    </>
                ) : (
                    <>
                        {ValueComponent}
                        {DescriptionComponent}
                    </>
                )}
            </div>
        </div>
    );
}
