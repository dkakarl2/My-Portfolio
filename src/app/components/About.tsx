import imgRectangle14249 from "figma:asset/eedfe714d0cf5d8f385501febadac14123fb1435.png";

export function About() {
  return (
    <section id="about" className="py-20 px-8 lg:px-24 max-w-[1440px] mx-auto">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="font-['Manrope'] font-bold text-4xl text-black">
          About Me
        </h2>
        
        <div className="space-y-6 text-left">
          <p className="font-['Manrope'] text-xl text-[#747474] leading-relaxed">
            I'm currently working as a UX Design Assistant at{" "}
            <span className="inline-flex items-center gap-2 align-middle">
              <span className="relative inline-block bg-white rounded-lg shadow-sm px-3 py-1">
                <img 
                  src={imgRectangle14249} 
                  alt="ASU EdPlus" 
                  className="h-4 w-auto inline-block"
                />
              </span>
            </span>
            {" "}EdPlus at ASU, where I focus on creating accessible, user-centered design systems and digital experiences.
          </p>
          
          <p className="font-['Manrope'] text-xl text-[#747474] leading-relaxed">
            My approach to design is rooted in curiosity, systems thinking, and a deep belief that good design should simplify complexity - not add to it. I'm passionate about creating digital products that feel intuitive, purposeful, and human.
          </p>
        </div>
      </div>
    </section>
  );
}
