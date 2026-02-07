import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { ProjectCard } from "@/app/components/ProjectCard";
import { RocketHoverCard } from "@/app/components/RocketHoverCard";
import { EdPlusHoverCard } from "@/app/components/EdPlusHoverCard";
import { EduFundHoverCard } from "@/app/components/EduFundHoverCard";
import { ComingSoonDivider } from "@/app/components/ComingSoonDivider";
import { Playground } from "@/app/components/Playground";
import { Footer } from "@/app/components/Footer";

// Import project images
import imgImage3 from "figma:asset/9b1d984b5a3331721ca8520d91e1dae8087d3753.png";
import imgImage5 from "figma:asset/913c7bdd0782127c6add2bf191da6da72c1d498a.png";
import imgImage2 from "figma:asset/e2a3f144890df13d498134c35c69a488c3384e95.png";
import imgImage12 from "figma:asset/4f82695b46f6d2e8fc2518899c01206d5876a2e4.png";
import imgImage11 from "figma:asset/d349b829820164c6ffd8680038fb41c9c830b08e.png";
import imgFrame22 from "figma:asset/2096313866740ff08589de188acef2c08565190b.png";
import imgFrame1000006081 from "figma:asset/eafd58cd408b75d2c671a24115c9d94c6665d7c4.png";
import imgMayoClinicLogo from "figma:asset/6e4de7965720e764d62d472550ce59788110d82a.png";
import imgMayoClinicBg from "figma:asset/afe2fe1f42e31e77411b7caa6e9c409cb41fe7bd.png";
import imgMayoHover from "figma:asset/7cec038dc695b271cf7a02627140ad70f778973a.png";
import imgEduFund9 from "figma:asset/7c952b9e250d5658aecbab616dc9e7bf5799e506.png";
import imgEduFund2 from "figma:asset/64184af0c9ebee18abab8494831f8cc713d0485b.png";

// Rocket Design System Images
import imgRDS1 from "figma:asset/fa0fa915ca52b7cc2b903914318e7d7aeda70798.png";
import imgRDS2 from "figma:asset/9eeca02bc786feb3f52bfb28300731165d09f8ea.png";
import imgRDS3 from "figma:asset/944ac635c2d45a20c649055ea33346334c892754.png";

export function HomePage() {
  // Project data
  const projects = [
    {
      title: "ChemoBuddy - Mayo Clinic",
      description: "I designed ChemoBuddy with Mayo Clinic to turn overwhelming chemotherapy journeys into guided, understandable experiences.",
      role: "UX and Interaction Designer",
      company: "Mayo Clinic",
      timeline: "Fall 2025",
      duration: "10 Weeks",
      images: {
        main: imgMayoClinicLogo,
        mainStyle: { left: "28px", top: "43px", width: "286px", height: "150px" },
        mainClassName: "absolute rounded-bl-[19px] rounded-tl-[19px] rounded-tr-[19px] object-cover",
        background: {
          src: imgImage2,
          style: { left: "9.89px", top: "37.09px", width: "402.834px", height: "211.488px" },
          className: "absolute rounded-[21.016px] object-cover",
        },
        rotated1: {
          src: imgImage3,
          rotation: -9.77,
          style: { left: "45.74px", top: "0", width: "196.181px", height: "334px" },
          imageStyle: { width: "144.986px", height: "313.943px", borderRadius: "12.376px" },
        },
        rotated2: {
          src: imgImage5,
          rotation: 6.37,
          style: { left: "174.88px", top: "7.71px", width: "182.455px", height: "319.488px" },
          imageStyle: { width: "149.584px", height: "304.782px", borderRadius: "9.89px" },
        },
      },
      folderColor: "#4AB7C4",
      hoverImage: imgMayoHover,
      caseStudyLink: "/mayo-clinic-case-study",
    },
    {
      title: "Rocket Design System",
      description: "I designed and scaled the Rocket Design System at ASU to turn digital experiences into consistent, accessible, and reusable interfaces.",
      role: "UX and Design system designer",
      company: "EdPlus at ASU",
      timeline: "Design systems",
      duration: "2025 - Present",
      images: [imgRDS1, imgRDS2, imgRDS3],
      folderColor: "#E74973",
      hoverComponent: <RocketHoverCard />,
      caseStudyLink: "/rocket-design-system-case-study",
    },
    {
      title: "EdPlus Hackathon",
      description: "I designed a rapid prototype at the EdPlus Hackathon to turn complex learning challenges into clear, testable solution concepts within a fast-paced, collaborative environment.",
      role: "UX and Interaction Designer",
      company: "EdPlus Hackathon",
      timeline: "Hackathon",
      duration: "24 hours",
      images: [imgImage11, imgFrame22, imgFrame1000006081],
      folderColor: "#E74973",
      hoverComponent: <EdPlusHoverCard />,
      caseStudyLink: "/ed-plus-hackathon-case-study",
    },
    {
      title: "EduFund",
      description: "I designed digital financial experiences at EduFund to turn complex student finance processes into simple, guided, and trustworthy user journeys.",
      role: "Research and UX Designer",
      company: "EduFund",
      timeline: "Internship",
      duration: "2024",
      images: [imgEduFund9, imgEduFund9, imgEduFund2],
      folderColor: "#FFC627",
      hoverComponent: <EduFundHoverCard />,
      caseStudyLink: "/edufund-case-study",
    },
  ];

  // Placeholder playground items
  const playgroundItems = Array(16).fill(null).map((_, i) => {
    const heights = ['h-64', 'h-80', 'h-72', 'h-96'];
    return {
      image: "",
      title: `Playground ${i + 1}`,
      height: heights[i % heights.length]
    };
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />

        {/* Selected Works Section */}
        <section id="work" className="py-20 px-8 lg:px-0 max-w-[1224px] mx-auto">
          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
            <div className="hidden lg:block lg:col-span-1"></div>
            <h2 className="font-['Inter'] font-bold text-4xl text-black lg:col-span-3">
              Selected works
            </h2>
            <p className="font-['Inter'] font-normal text-[20px] text-[#747474] leading-[normal] lg:col-span-8">
              Design work powered by curiosity, systems thinking, <br />
              and the occasional "why is this like this?"
            </p>
          </div>

          {/* Project cards */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                reverse={index === 1 || index === 3}
              />
            ))}
          </div>
        </section>

        <ComingSoonDivider />

        <Playground items={playgroundItems} />
      </main>

      <Footer />
    </div>
  );
}
