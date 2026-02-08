import { motion } from 'motion/react';
import { useState } from 'react';

interface FramedImageProps {
    src: string;
    alt: string;
    width: string;
    height: string;
    borderColor: string;
    className?: string;
}

export function FramedImage({ src, alt, width, height, borderColor, className = '' }: FramedImageProps) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate tilt (max 8 degrees)
        const tiltX = ((y - centerY) / centerY) * -8;
        const tiltY = ((x - centerX) / centerX) * 8;

        setTilt({ x: tiltX, y: tiltY });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <motion.div
            className={`relative cursor-pointer ${className}`}
            style={{ width, height }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
                scale: tilt.x !== 0 || tilt.y !== 0 ? 1.02 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {/* Image */}
            <img
                alt={alt}
                className="w-full h-full object-cover"
                style={{ border: `2px solid ${borderColor}` }}
                src={src}
            />

            {/* Corner squares */}
            <div
                className="absolute left-[-9px] top-[-6px] w-[8px] h-[8px]"
                style={{ backgroundColor: borderColor }}
            />
            <div
                className="absolute right-[-9px] top-[-6px] w-[8px] h-[8px]"
                style={{ backgroundColor: borderColor }}
            />
            <div
                className="absolute left-[-9px] bottom-[-6px] w-[8px] h-[8px]"
                style={{ backgroundColor: borderColor }}
            />
            <div
                className="absolute right-[-9px] bottom-[-6px] w-[8px] h-[8px]"
                style={{ backgroundColor: borderColor }}
            />
        </motion.div>
    );
}
