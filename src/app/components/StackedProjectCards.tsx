import { motion, useScroll, useTransform, useMotionTemplate, MotionValue } from "motion/react";
import { ProjectCard } from "@/app/components/ProjectCard";
import { useRef } from "react";

interface PillData {
  label: string;
  value?: string;
}

interface ProjectItem {
  title: string;
  description: string;
  pills: PillData[];
  company: string;
  timeline: string;
  duration: string;
  images: any;
  folderColor: string;
  staticImage?: string;
  defaultComponent?: React.ReactNode;
  hoverComponent?: React.ReactNode;
  caseStudyLink?: string;
}

interface StackedProjectCardsProps {
  projects: ProjectItem[];
}

function SingleStackedCard({
  project,
  index,
  total,
  scrollYProgress
}: {
  project: ProjectItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  // We divide the 1.0 scroll progress into `total - 1` segments.
  const startEnter = index === 0 ? 0 : (index - 1) / (total - 1);
  const endEnter = index / (total - 1);

  // Entrance animation: fly up from below the viewport.
  const yVal = useTransform(scrollYProgress, [startEnter, endEnter], ["150vh", "0vh"]);
  const y = index === 0 ? "0vh" : yVal;

  // We want the scale/blur/brightness to start only when the NEXT card is half way up.
  const segmentLength = 1 / (total - 1);
  const startTransform = endEnter + segmentLength / 2;
  // Cap at 0.999 to prevent useTransform errors for the last card (input array must be strictly increasing)
  const safeStartTransform = Math.min(startTransform, 0.999);

  // Scale down smoothly as subsequent cards stack on top.
  const scaleTarget = 1 - 0.05 * (total - 1 - index);
  const scale = useTransform(scrollYProgress, [safeStartTransform, 1], [1, scaleTarget]);

  // Keep opacity at 1 so the cards don't wash out into the white background
  const opacity = 1;

  // Increase blur significantly and drop brightness as it gets pushed back to create real 3D depth
  const blurTarget = 3.5 * (total - 1 - index);
  const blurValue = useTransform(scrollYProgress, [safeStartTransform, 1], [0, blurTarget]);
  
  const brightnessTarget = 1 - 0.1 * (total - 1 - index);
  const brightnessValue = useTransform(scrollYProgress, [safeStartTransform, 1], [1, brightnessTarget]);
  
  const filter = useMotionTemplate`blur(${blurValue}px) brightness(${brightnessValue})`;

  // Cascade the cards downwards so the top header of each previous card remains visible.
  const stackOffset = index * 36;

  return (
    <motion.div
      style={{ y, scale, opacity, filter, zIndex: index }}
      className="absolute w-full flex justify-center origin-top px-4"
    >
      <div 
        className="w-full flex justify-center items-center"
        style={{ marginTop: `${stackOffset}px` }}
      >
        <ProjectCard
          title={project.title}
          description={project.description}
          pills={project.pills}
          company={project.company}
          timeline={project.timeline}
          duration={project.duration}
          images={project.images}
          folderColor={project.folderColor}
          reverse={false}
          staticImage={project.staticImage}
          defaultComponent={project.defaultComponent}
          hoverComponent={project.hoverComponent}
          caseStudyLink={project.caseStudyLink}
        />
      </div>
    </motion.div>
  );
}

export function StackedProjectCards({ projects }: StackedProjectCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numCards = projects.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      style={{ height: `${numCards * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {projects.map((project, index) => (
            <SingleStackedCard
              key={project.title}
              project={project}
              index={index}
              total={numCards}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
