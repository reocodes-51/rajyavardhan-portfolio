"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Aurora from "@/components/ui/Aurora";
import Spotlight from "@/components/ui/Spotlight";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#101112]">
    <Aurora />
    <Spotlight />

      {/* Background Blur */}
      {/* <div className="absolute right-[-220px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute left-[-180px] bottom-[-150px] h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px]" /> */}

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,#11213f_0%,#101112_60%,#090909_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-8 py-32 lg:flex-row">

        {/* LEFT */}

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <p className="mb-6 text-lg font-medium text-blue-400">
  Hi, I'm
</p>

<h1 className="bg-gradient-to-r from-white via-zinc-100 to-cyan-100 bg-clip-text text-6xl font-black leading-none tracking-tight text-transparent lg:text-8xl">
  Rajyavardhan{" "}
 <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
    Singh
  </span> {" "}
  Rathore
</h1>
          {/* Typing Animation */}

          <div className="mt-10 text-3xl font-bold lg:text-4xl">

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Competitive Programmer",
                2000,
                "Open Source Learner",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
            />

          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Electronics and Communication Engineering student at
            IIITDM Jabalpur passionate about building scalable web
            applications, AI-powered products, and solving challenging
            algorithmic problems.
          </p>

          <div className="mt-4 flex items-center gap-2 text-zinc-400">
            <span>📍</span>
            <span>Jabalpur, India</span>
            </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <Button
              className="
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-7
                py-6
                text-white
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-blue-500/40
              "
            >
              <a
                href="#projects"
                
                >
                View Projects →
                </a>
            </Button>

            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="
                  rounded-xl
                  border-zinc-700
                  px-7
                  py-6
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:bg-zinc-900
                "
              >
                Download Resume
              </Button>
            </a>

          </div>

          {/* Social Links */}

          <div className="mt-12 flex items-center gap-7">

            <Link
              href="https://github.com/reocodes-51"
              target="_blank"
            >
              <FaGithub className="text-3xl text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/rajyavardhan-singh-rathore"
              target="_blank"
            >
              <FaLinkedin className="text-3xl text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white" />
            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}


<motion.div
  className="mt-20 lg:mt-0"
  initial={{ opacity: 0, x: 70 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.2,
    ease: "easeOut",
  }}
>
  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    >
<div className="relative flex h-[430px] w-[430px] items-center justify-center">

  {/* Glow */}
  <motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.5, 0.9, 0.5],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute h-full w-full rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-emerald-400/20 blur-[120px]"
/>

  {/* Rotating Ring */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute h-[410px] w-[410px] rounded-full border border-cyan-400/30"
  />

  {/* Outer Circle */}
  <div className="absolute h-[380px] w-[380px] rounded-full border border-white/15" />

  {/* Profile Image */}
  <motion.div
  whileHover={{
    scale: 1.03,
  }}
  transition={{
    duration: 0.4,
  }}
  className="relative h-[380px] w-[380px] overflow-hidden rounded-full border border-zinc-700 bg-[#17181C]">
    <Image
      src="/images/profile.png"
      alt="Rajyavardhan Singh Rathore"
      fill
      priority
      className="object-cover"
    />
  </motion.div>

  {/* Availability Badge
  <div className="absolute bottom-6 right-0 flex items-center gap-2 rounded-full border border-zinc-700 bg-[#17181C] px-4 py-2 shadow-lg">
    <span className="h-3 w-3 rounded-full bg-green-500" />
    <span className="text-sm text-zinc-300">
      Available for Opportunities
    </span>
  </div> */}

</div>
  </motion.div>
</motion.div>

</div>

{/* Scroll Indicator */}

<motion.div
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    y: [0, 10, 0],
  }}
  transition={{
    delay: 1.5,
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <div className="flex h-12 w-7 justify-center rounded-full border border-zinc-700">
    <motion.div
  animate={{
    y: [0, 16, 0],
  }}
  transition={{
    duration: 1.6,
    repeat: Infinity,
  }}
  className="mt-2 h-2 w-2 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500"
/>
  </div>
</motion.div>

</section>
  );
}