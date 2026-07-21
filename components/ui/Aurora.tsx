"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Blue Glow */}

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/25 blur-[140px]"
      />

      {/* Cyan Glow */}

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 90, -40, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-180px] top-[120px] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[170px]"
      />

      {/* Emerald Glow */}

      <motion.div
        animate={{
          x: [0, 100, -120, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] left-1/3 h-[420px] w-[420px] rounded-full bg-emerald-400/18 blur-[150px]"
      />

    </div>
  );
}