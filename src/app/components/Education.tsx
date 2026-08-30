import imgASU from "../../assets/ASU.jpeg";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section className="bg-white py-12 lg:py-24 -mx-8 lg:mx-0">
      <div className="max-w-[1320px] mx-auto px-8 lg:px-0">
        
        {/* Section Title */}
        <div className="mb-10 lg:pl-[222px]">
          <span className="block font-['Inter'] text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-2">
            Academic Background
          </span>
          <h2 className="font-['Inter'] font-bold text-3xl lg:text-[40px] text-black">
            Education
          </h2>
        </div>

        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-stretch max-w-[1000px] bg-[#FAF9F6] border border-gray-100/80 rounded-[32px] p-6 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300 lg:ml-[222px]">
          
          {/* Content - Left */}
          <div className="flex flex-col justify-between gap-8 order-2 lg:order-1">
            <div className="space-y-5">
              
              {/* University Header & Degree */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#8C1D40]/10 text-[#8C1D40] border border-[#8C1D40]/20">
                    <GraduationCap size={11} />
                    Master of Science
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#FFC627]/15 text-[#8C1D40] border border-[#FFC627]/40">
                    <BookOpen size={11} />
                    User Experience (UX)
                  </span>
                </div>
                <h3 className="font-['Inter'] font-bold text-2xl lg:text-[28px] text-gray-900 pt-1">
                  Arizona State University
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 font-medium pt-0.5">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-gray-400" />
                    Expected Dec 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-gray-400" />
                    Tempe, AZ
                  </span>
                </div>
              </div>

              {/* Description Paragraph */}
              <p className="font-['Inter'] font-normal text-[15px] text-gray-600 leading-relaxed max-w-xl">
                I am currently pursuing my Master’s degree with a focus on systems thinking, accessibility, and interactive prototyping. In parallel, I serve as a <strong className="text-gray-900 font-semibold">UX Design Assistant with EdPlus</strong>, collaborating across cross-functional teams to build and research scalable digital learning platforms.
              </p>
            </div>

            {/* Courses & Focus Areas */}
            <div className="space-y-2.5">
              <span className="block font-['Inter'] text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                Core Focus Areas
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Interaction Design",
                  "Usability Testing",
                  "Design Systems",
                  "Information Architecture",
                  "Research Methods",
                  "Accessibility (A11y)"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-white border border-gray-200/80 font-['Inter'] text-[11px] font-medium text-gray-600 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Image/Visual - Right */}
          <div className="relative group order-1 lg:order-2 flex items-center justify-center min-h-[220px] lg:min-h-auto">
            {/* Image Container with Custom Border Frames */}
            <div className="relative w-full h-full min-h-[220px] overflow-hidden rounded-[24px] shadow-sm transform lg:rotate-[1.5deg] transition-all duration-300 group-hover:rotate-0 border-4 border-white bg-gray-50 z-10">
              <img
                src={imgASU}
                alt="Arizona State University campus"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* ASU Themed Maroon Decorative Backing */}
            <div className="absolute inset-0 bg-[#8C1D40] rounded-[24px] translate-x-2.5 translate-y-2.5 lg:rotate-[-2deg] opacity-[0.06] z-0"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
