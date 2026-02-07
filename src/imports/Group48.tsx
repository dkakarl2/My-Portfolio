import svgPaths from "./svg-vlbm884lyu";
import { useState, useEffect, useRef } from "react";

export default function Group() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [eyePositions, setEyePositions] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svgRect = svgRef.current.getBoundingClientRect();
    
    // Eye centers in viewBox coordinates (54.4448 x 40)
    // Left eye center (Ellipse 7): approximately at (13.333, 20)
    // Right eye center (Ellipse 8): approximately at (41.111, 20)
    const leftEyeCenter = { x: 13.333, y: 20 };
    const rightEyeCenter = { x: 41.111, y: 20 };

    // Convert viewBox coordinates to screen coordinates
    const scaleX = svgRect.width / 54.4448;
    const scaleY = svgRect.height / 40;

    const leftEyeScreen = {
      x: svgRect.left + leftEyeCenter.x * scaleX,
      y: svgRect.top + leftEyeCenter.y * scaleY
    };

    const rightEyeScreen = {
      x: svgRect.left + rightEyeCenter.x * scaleX,
      y: svgRect.top + rightEyeCenter.y * scaleY
    };

    // Calculate angles and distances for each eye
    const calculateEyePosition = (eyeScreen: { x: number, y: number }, maxDistance: number = 2) => {
      const dx = mousePos.x - eyeScreen.x;
      const dy = mousePos.y - eyeScreen.y;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(Math.sqrt(dx * dx + dy * dy) / 100, maxDistance);
      
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance
      };
    };

    setEyePositions({
      left: calculateEyePosition(leftEyeScreen),
      right: calculateEyePosition(rightEyeScreen)
    });
  }, [mousePos]);

  return (
    <div className="relative size-full">
      <svg ref={svgRef} className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.4448 40">
        <g clipPath="url(#clip0_23_1527)" id="Group 48">
          <g id="Group 46">
            <path d={svgPaths.p3d828ef0} id="Ellipse 7" stroke="var(--stroke-0, #FF7F32)" strokeWidth="2" />
            <path d={svgPaths.p2f69f00} id="Ellipse 8" stroke="var(--stroke-0, #FF7F32)" strokeWidth="2" />
            {/* Left eye inner circles - follow cursor */}
            <path 
              d={svgPaths.p1770b300} 
              id="Vector 93" 
              stroke="var(--stroke-0, #FF7F32)" 
              strokeLinecap="round" 
              strokeWidth="2"
              style={{
                transform: `translate(${eyePositions.left.x}px, ${eyePositions.left.y}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            />
            {/* Right eye inner circles - follow cursor */}
            <path 
              d={svgPaths.p27c7b120} 
              id="Vector 94" 
              stroke="var(--stroke-0, #FF7F32)" 
              strokeLinecap="round" 
              strokeWidth="2"
              style={{
                transform: `translate(${eyePositions.right.x}px, ${eyePositions.right.y}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            />
            {/* Right eye additional paths - follow cursor */}
            <path 
              d={svgPaths.p2639c4c0} 
              id="Vector 95" 
              stroke="var(--stroke-0, #FF7F32)" 
              strokeLinecap="round" 
              strokeWidth="2"
              style={{
                transform: `translate(${eyePositions.right.x}px, ${eyePositions.right.y}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            />
            {/* Left eye additional paths - follow cursor */}
            <path 
              d={svgPaths.p21d5b380} 
              id="Vector 96" 
              stroke="var(--stroke-0, #FF7F32)" 
              strokeLinecap="round" 
              strokeWidth="2"
              style={{
                transform: `translate(${eyePositions.left.x}px, ${eyePositions.left.y}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            />
            {/* Left eye pupil - follows cursor */}
            <path 
              d={svgPaths.p356e9e00} 
              id="Vector 97" 
              stroke="var(--stroke-0, white)" 
              strokeLinecap="round" 
              strokeWidth="2"
              style={{
                transform: `translate(${eyePositions.left.x}px, ${eyePositions.left.y}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            />
            {/* Right eye pupil - follows cursor */}
            <path 
              d={svgPaths.pde5a3c0} 
              id="Vector 98" 
              stroke="var(--stroke-0, white)" 
              strokeLinecap="round" 
              strokeWidth="2"
              style={{
                transform: `translate(${eyePositions.right.x}px, ${eyePositions.right.y}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            />
          </g>
          <path d={svgPaths.p20340200} id="Vector 99" stroke="var(--stroke-0, #FF7F32)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.pac3da80} id="Vector 100" stroke="var(--stroke-0, #FF7F32)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p2da0ef40} id="Vector 101" stroke="var(--stroke-0, #FF7F32)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p13c08200} id="Vector 102" stroke="var(--stroke-0, #FF7F32)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1f8ad600} id="Vector 103" stroke="var(--stroke-0, #FF7F32)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p2d96f1c0} id="Vector 104" stroke="var(--stroke-0, #FF7F32)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p12f84080} id="Vector 105" stroke="var(--stroke-0, #FF7F32)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_23_1527">
            <rect fill="white" height="40" width="54.4448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}