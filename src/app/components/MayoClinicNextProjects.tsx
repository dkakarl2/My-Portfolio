import React from 'react';
import { Link } from 'react-router-dom';
import imgRdsProject from "figma:asset/a0e9b7dc466e7af6191032a91d79d86dfffd719c.png";
import imgHackathonFolder from "figma:asset/69dd0260d6ba7e5dd48d8fd44c89d3ff9c3f8e3f.png";

export function MayoClinicNextProjects() {
  return (
    <div className="w-full max-w-[994px] mx-auto px-6 lg:px-0 py-16">
      <h2 className="font-['Inter'] font-bold text-[24px] text-black mb-12">Next project</h2>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-[150px] items-start">
        {/* Project 1: Rocket Design System */}
        <Link to="/rocket-design-system-case-study" className="group relative block w-full max-w-[420px] transition-all duration-300 hover:scale-[1.02] hover:drop-shadow-lg">
           <img 
             src={imgRdsProject} 
             alt="Rocket Design System (RDS) - Design systems, 2025-Present, EdPlus at ASU" 
             className="w-full h-auto object-contain"
           />
        </Link>

        {/* Project 2: EdPlus Hackathon */}
        <Link to="/ed-plus-hackathon-case-study" className="group relative block w-full max-w-[420px] transition-all duration-300 hover:scale-[1.02] hover:drop-shadow-lg">
           <img 
             src={imgHackathonFolder} 
             alt="EdPlus Hackathon - Hackathon, 24 hours" 
             className="w-full h-auto object-contain"
           />
        </Link>
      </div>
    </div>
  );
}
