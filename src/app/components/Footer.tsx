import { memo } from "react";
import { InteractivePhysics } from "./InteractivePhysics";

export const Footer = memo(function Footer() {

  return (
    <footer id="contact" className="relative w-full bg-[#fcfcfc] overflow-hidden flex flex-col">
      
      {/* Main Content Area */}
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 pt-32 relative z-10 flex flex-col justify-start min-h-[680px]">
        
        <div className="relative z-10 pointer-events-none w-full md:w-[65%]">
          {/* Hero Text */}
          <h2 className="font-['Inter'] font-bold text-[clamp(36px,5vw,64px)] leading-[1.05] text-[#111] tracking-tight pointer-events-auto">
            Let's build
            <br />
            <span className="whitespace-nowrap">
              something{" "}
              <span className="text-[#d1d5db]">
                meaningful
              </span>
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm md:text-base text-[#111] max-w-xl pointer-events-auto font-medium leading-relaxed">
            Open to conversations, projects, and full time roles. <br/>
            I'd love to hear about what you're working on.
          </p>

          {/* Links */}
          <div className="mt-12 flex items-center gap-10 text-sm font-bold text-[#111] pointer-events-auto">
            <a href="https://www.linkedin.com/in/deepika111/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E74973] transition-colors">LinkedIn</a>
            <a href="https://mail.google.com/mail/?view=cm&to=dkakarl2@asu.edu" target="_blank" rel="noopener noreferrer" className="hover:text-[#E74973] transition-colors">Email</a>
            <a href="https://drive.google.com/file/d/1qxfm__-wXaeMcaJPTZ4RL98D4-clejkM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-[#E74973] transition-colors">Resume</a>
          </div>
        </div>

        <InteractivePhysics />
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-gray-300 relative z-20">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-[13px] text-[#333] font-medium">
          <p className="mb-2 md:mb-0">Designed & developed with love and care by Deepika :)</p>
          <p>© 2026 Deepika. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
});