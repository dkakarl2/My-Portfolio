import React from 'react';
import { Link } from 'react-router-dom';
import imgImage16908 from "figma:asset/f4d1f6c618a8a221e0ed1f5657270097590a1670.png";
import imgImage16905 from "figma:asset/a0e9b7dc466e7af6191032a91d79d86dfffd719c.png";

export function EduFundNextProjects() {
  return (
    <div className="w-full max-w-[994px] mx-auto px-6 lg:px-0 pt-32 pb-16">
      <h2 className="font-['Inter'] font-bold text-[24px] text-black mb-12">Next project</h2>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-[150px] items-start">
        {/* Project 1: Mayo Clinic */}
        <Link to="/mayo-clinic-case-study" className="group relative block w-full max-w-[420px] transition-all duration-300 hover:scale-[1.02] hover:drop-shadow-lg">
           <img 
             src={imgImage16908} 
             alt="Mayo Clinic - Healthcare UX, 10 Weeks" 
             className="w-full h-auto object-contain"
           />
        </Link>

        {/* Project 2: Rocket Design System (EdPlus at ASU) */}
        <Link to="/rocket-design-system-case-study" className="group relative block w-full max-w-[420px] transition-all duration-300 hover:scale-[1.02] hover:drop-shadow-lg">
           <img 
             src={imgImage16905} 
             alt="Rocket Design System (RDS) - Design systems, 2025-Present, EdPlus at ASU" 
             className="w-full h-auto object-contain"
           />
        </Link>
      </div>
    </div>
  );
}