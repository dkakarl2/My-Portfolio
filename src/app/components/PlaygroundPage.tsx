import React from "react";
import { Navigation } from "@/app/components/Navigation";
import { Playground } from "@/app/components/Playground";
import { motion } from "framer-motion";
import slideVideo from "@/assets/Playground doodle.mp4";

export function PlaygroundPage() {
  return (
    <div className="h-screen bg-white font-['Inter'] relative overflow-hidden flex flex-col">
      <Navigation />
      
      {/* The fully interactive background grid canvas */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gray-50/20">
         <Playground />
      </div>

      {/* Foreground Hero Content (pointer-events-none so touches and mouse pass directly to background grid) */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 md:px-12 pointer-events-none select-none">
        <div className="text-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="flex flex-row items-center justify-center gap-4 mb-3">
              <video
                src={slideVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-[80px] object-contain rounded-xl"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-black tracking-widest">Playground</h1>
            </div>
            <p className="text-[#555] text-base md:text-lg font-medium tracking-[0.1em] max-w-xl mx-auto leading-relaxed">
              A space for experiments, explorations, and ideas outside of my usual work.
            </p>
          </motion.div>
        </div>
      </main>

    </div>
  );
}
