import { motion } from "motion/react";

function Frame() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 max-w-[1320px] w-full top-[87px]">
      <div className="relative left-[222px]">
        <p className="css-ew64yg font-['Manrope',sans-serif] font-bold leading-[50px] not-italic text-[48px] text-black">What I Bring</p>
      </div>
    </div>
  );
}

const skills = [
  "RESEARCH",
  "INTERACTION DESIGN",
  "USER FLOWS",
  "SYSTEMS THINKING",
  "DESIGN SYSTEMS",
  "VIBE CODING",
  "WIREFRAMING",
  "PROTOTYPING",
  "USABILITY TESTING",
  "HUMAN-CENTERED DESIGN",
  "ACCESSIBILITY",
];

const skillColors = [
  "#00A3E0",      // RESEARCH - blue
  "#FF7F32",      // INTERACTION DESIGN - orange
  "#4AB7C4",      // USER FLOWS - teal
  "#FFC627",      // SYSTEMS THINKING - yellow
  "#E73973",      // DESIGN SYSTEMS - pink
  "#8C1D40",      // VIBE CODING - maroon
  "#78BE20",      // WIREFRAMING - green
  "#00A3E0",      // PROTOTYPING - blue
  "#FF7F32",      // USABILITY TESTING - orange
  "#4AB7C4",      // HUMAN-CENTERED DESIGN - teal
  "#78BE20",      // ACCESSIBILITY - green
];

// Distribute skills across 4 rows
const row1Skills = ["RESEARCH", "INTERACTION DESIGN", "USER FLOWS"];
const row2Skills = ["SYSTEMS THINKING", "DESIGN SYSTEMS", "VIBE CODING"];
const row3Skills = ["WIREFRAMING", "PROTOTYPING", "USABILITY TESTING"];
const row4Skills = ["HUMAN-CENTERED DESIGN", "ACCESSIBILITY"];

export default function AboutWhatIBring() {
  return (
    <div className="bg-white relative w-full h-[400px] lg:h-[663px] overflow-hidden" data-name="About - What I Bring">
      <div className="absolute left-1/2 -translate-x-1/2 max-w-[1320px] w-full top-[40px] lg:top-[87px] text-center lg:text-left">
        <div className="relative lg:left-[222px]">
          <p className="css-ew64yg font-['Manrope',sans-serif] font-bold leading-[50px] not-italic text-3xl lg:text-[48px] text-black">What I Bring</p>
        </div>
      </div>
      
      {/* Scrolling Skills Container */}
      <div className="absolute top-[120px] lg:top-[223px] left-0 w-full h-[280px] lg:h-[338px] overflow-hidden flex flex-col justify-center">
        {/* First scrolling row */}
        <div className="relative w-full h-[50px] lg:h-[86px] overflow-hidden mb-4 lg:mb-0">
          <motion.div
            className="flex gap-4 lg:gap-8 whitespace-nowrap absolute"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, index) => (
              <motion.span
                key={index}
                className="css-ew64yg font-['Manrope',sans-serif] font-bold leading-tight lg:leading-[50px] not-italic text-2xl lg:text-[64px] text-black cursor-pointer"
                whileHover={{
                  color: skillColors[skills.indexOf(skill)],
                }}
                transition={{ duration: 0.3 }}
              >
                {index > 0 && ". "}
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Second scrolling row */}
        <div className="relative w-full h-[50px] lg:h-[86px] overflow-hidden mb-4 lg:mb-0">
          <motion.div
            className="flex gap-4 lg:gap-8 whitespace-nowrap absolute"
            animate={{
              x: [-2000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, index) => (
              <motion.span
                key={index}
                className="css-ew64yg font-['Manrope',sans-serif] font-bold leading-tight lg:leading-[50px] not-italic text-2xl lg:text-[64px] text-black cursor-pointer"
                whileHover={{
                  color: skillColors[skills.indexOf(skill)],
                }}
                transition={{ duration: 0.3 }}
              >
                {index > 0 && ". "}
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Third scrolling row */}
        <div className="relative w-full h-[50px] lg:h-[86px] overflow-hidden mb-4 lg:mb-0">
          <motion.div
            className="flex gap-4 lg:gap-8 whitespace-nowrap absolute"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...row3Skills, ...row3Skills, ...row3Skills].map((skill, index) => (
              <motion.span
                key={index}
                className="css-ew64yg font-['Manrope',sans-serif] font-bold leading-tight lg:leading-[50px] not-italic text-2xl lg:text-[64px] text-black cursor-pointer"
                whileHover={{
                  color: skillColors[skills.indexOf(skill)],
                }}
                transition={{ duration: 0.3 }}
              >
                {index > 0 && ". "}
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Fourth scrolling row */}
        <div className="relative w-full h-[50px] lg:h-[86px] overflow-hidden">
          <motion.div
            className="flex gap-4 lg:gap-8 whitespace-nowrap absolute"
            animate={{
              x: [-2000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...row4Skills, ...row4Skills, ...row4Skills].map((skill, index) => (
              <motion.span
                key={index}
                className="css-ew64yg font-['Manrope',sans-serif] font-bold leading-tight lg:leading-[50px] not-italic text-2xl lg:text-[64px] text-black cursor-pointer"
                whileHover={{
                  color: skillColors[skills.indexOf(skill)],
                }}
                transition={{ duration: 0.3 }}
              >
                {index > 0 && ". "}
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}