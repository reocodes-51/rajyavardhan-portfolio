"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Spotlight() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

 const x = useSpring(mouseX, {
  stiffness: 120,
  damping: 30,
});

const y = useSpring(mouseY, {
  stiffness: 120,
  damping: 30,
});

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 110);
      mouseY.set(e.clientY - 110);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
     className="pointer-events-none fixed left-0 top-0 z-0 h-[220px] w-[220px] rounded-full bg-blue-500/12 blur-[90px]"
    />
  );
}