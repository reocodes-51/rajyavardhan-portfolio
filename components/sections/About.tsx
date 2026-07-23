"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Trophy,
  Star,
  GraduationCap,
  Cpu,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Projects Built",
    subtitle: "Full Stack & AI",
    icon: Code2,
  },
  {
    value: "400+",
    label: "Problems Solved",
    subtitle: "LeetCode • CF • CC",
    icon: Trophy,
  },
  {
    value: "3★",
    label: "CodeChef",
    subtitle: "Competitive Programming",
    icon: Star,
  },
  {
    value: "Pupil",
    label: "Codeforces",
    subtitle: "Max Rating",
    icon: Trophy,
  },
];

const quickFacts = [
  {
    icon: Briefcase,
    title: "Future Founder Internship",
    subtitle: "OKCredit",
  },
  {
    icon: Code2,
    title: "Full Stack & AI Developer",
    subtitle: "MERN • Next.js • AI",
  },
  {
    icon: Users,
    title: "Co-Coordinator",
    subtitle: "Electronics & Robotics Society",
  },
  {
    icon: Users,
    title: "PR & Social Media Lead",
    subtitle: "Aero Fabrication Club",
  },
  // {
  //   icon: Trophy,
  //   title: "400+ Problems Solved",
  //   subtitle: "LeetCode • Codeforces • CodeChef",
  // },
  {
    icon: Star,
    title: "3★ (CodeChef) & Pupil (CodeForces)",
    subtitle: "Competitive Programming",
  },
];

const highlights = [
  "Passionate about AI-powered products and scalable backend systems.",
  "Built production-ready full-stack applications using MERN.",
  "Hackathon enthusiast with leadership experience.",
  // "Strong foundation in Data Structures & Algorithms.",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#101112] px-6 py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
            Turning Ideas Into
            <span className="text-cyan-400"> Scalable Software</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            Passionate about Full Stack Development, Artificial Intelligence,
            Backend Engineering and Competitive Programming with a focus on
            building impactful software that solves real-world problems.
          </p>

          <div className="mx-auto mt-10 h-px w-56 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        </motion.div>

        {/* Main Grid */}

        <div className="mt-20 grid gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">

              <h3 className="text-3xl font-bold text-white">
                Who I Am
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                I'm{" "}
                <span className="font-semibold text-white">
                  Rajyavardhan Singh Rathore
                </span>
                , an Electronics & Communication Engineering undergraduate at{" "}
                <span className="font-semibold text-white">
                  PDPM IIITDM Jabalpur
                </span>
                , passionate about Full Stack Development, Artificial
                Intelligence, Backend Engineering and Competitive Programming.
              </p>

              <p className="mt-6 leading-8 text-zinc-400">
                I enjoy transforming ideas into scalable products,
                participating in hackathons, leading technical communities,
                mentoring peers and continuously improving my software
                engineering skills through real-world projects.
              </p>
              </div>

              {/* Education Card */}

              <div className="mt-10 rounded-3xl border border-white/10 bg-[#101112]/70 p-7 backdrop-blur-xl">

                            <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-cyan-500/10 p-3">
                  <GraduationCap
                    size={24}
                    className="text-cyan-400"
                  />
                </div>

                <div>

                  <h4 className="text-xl font-semibold text-white">
                    Education
                  </h4>

                  <p className="text-sm text-zinc-500">
                    Academic Journey
                  </p>

                </div>

              </div>

              <div className="mt-7">

                <h5 className="text-lg font-semibold text-white">
                  PDPM IIITDM Jabalpur
                </h5>

                <p className="mt-2 text-zinc-300">
                  Bachelor of Technology
                </p>

                <p className="text-cyan-400">
                  Electronics & Communication Engineering
                </p>

                <div className="mt-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  Aug 2024 – Jun 2028
                </div>

              </div>

              {/* Coursework */}

              <div className="mt-8">

                <h5 className="font-semibold text-white">
                  Relevant Coursework
                </h5>

                <div className="mt-5 flex flex-wrap gap-3">

                  {[
                    "Data Structures",
                    "Algorithms",
                    "Operating Systems",
                    "DBMS",
                    "Computer Networks",
                    "Machine Learning",
                    "Object Oriented Programming",
                    "Software Engineering",
                  ].map((course) => (

                    <motion.span
                      key={course}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-4
                        py-2
                        text-sm
                        text-zinc-300
                        transition-all
                        duration-300
                        hover:border-cyan-400/30
                        hover:bg-cyan-500/10
                        hover:text-white
                      "
                    >
                      {course}
                    </motion.span>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >

                        {/* Achievement Cards */}

  

            {/* Quick Facts */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">

              <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-cyan-500/10 p-3">

                  <Cpu
                    size={22}
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white">
                    Quick Facts
                  </h3>

                  <p className="text-sm text-zinc-500">
                    Snapshot of my profile
                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-4">

                {quickFacts.map((fact, index) => {

                  const Icon = fact.icon;

                  return (

                    <motion.div
                      key={fact.title}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.06,
                      }}
                      whileHover={{
                        x: 6,
                      }}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-white/5
                        bg-white/[0.02]
                        p-4
                        transition-all
                        duration-300
                        hover:border-cyan-400/25
                        hover:bg-cyan-500/[0.05]
                      "
                    >

                      <div className="rounded-xl bg-cyan-500/10 p-3">

                        <Icon
                          size={20}
                          className="text-cyan-400"
                        />

                      </div>

                      <div>

                        <h4 className="font-semibold text-white">
                          {fact.title}
                        </h4>

                        <p className="text-sm text-zinc-500">
                          {fact.subtitle}
                        </p>

                      </div>

                    </motion.div>

                  );

                })}

              </div>

            </div>

                        {/* Highlights */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">

              <h3 className="text-2xl font-bold text-white">
                Highlights
              </h3>

              <p className="mt-2 text-zinc-500">
                What drives me as a developer
              </p>

              <div className="mt-8 space-y-4">

                {highlights.map((item, index) => (

                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: 6,
                    }}
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-2xl
                      border
                      border-white/5
                      bg-white/[0.02]
                      p-5
                      transition-all
                      duration-300
                      hover:border-cyan-400/30
                      hover:bg-cyan-500/[0.05]
                    "
                  >

                    <div
                      className="
                        mt-1
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-cyan-500/10
                        text-cyan-400
                      "
                    >
                      ✓
                    </div>

                    <p className="leading-7 text-zinc-300">
                      {item}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Glow */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-500/10 via-cyan-500/5 to-transparent" />

    </section>
  );
}