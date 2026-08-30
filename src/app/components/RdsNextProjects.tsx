import image_ff6826aa1338d71a143843b316f4867681f088dd from 'figma:asset/ff6826aa1338d71a143843b316f4867681f088dd.png';
import React from 'react';
import { Link } from 'react-router-dom';
import imgEduFundProject from "figma:asset/a0d957f752dc64d40e547447c5da5382077a78c1.png";

export function RdsNextProjects() {
  return (
    <div className="w-full max-w-[994px] mx-auto px-6 lg:px-0 py-16">
      <h2 className="font-['Inter'] font-bold text-[24px] text-black mb-12">Next project</h2>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-[150px] items-start">
        {/* Project 1: Mayo Clinic */}
        <Link to="/mayo-clinic-case-study" className="group relative block w-full max-w-[420px] transition-all duration-300 hover:scale-[1.02] hover:drop-shadow-lg">
           <img 
             src={image_ff6826aa1338d71a143843b316f4867681f088dd} 
             alt="Mayo Clinic - Healthcare UX, 10 Weeks" 
             className="w-full h-auto object-contain"
           />
        </Link>

        {/* Project 2: EduFund */}
        <Link to="/edufund-case-study" className="group relative block w-full max-w-[420px] transition-all duration-300 hover:scale-[1.02] hover:drop-shadow-lg">
           <img 
             src={imgEduFundProject} 
             alt="EduFund - Fintech Product Design, 2024" 
             className="w-full h-auto object-contain"
           />
        </Link>
      </div>
    </div>
  );
}
