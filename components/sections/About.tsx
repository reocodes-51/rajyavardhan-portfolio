"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "350+", label: "Problems Solved" },
  { value: "3★", label: "CodeChef" },
  { value: "Pupil", label: "Codeforces" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#101112] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-medium text-blue-500">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Turning Ideas Into
            <span className="text-blue-500"> Scalable Software</span>
          </h2>

          <div className="mx-auto mt-6 h-px w-44 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        </motion.div>

        {/* Content */}

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl border border-white/10 bg-[#17181C] p-8">

              <h3 className="text-2xl font-semibold text-white">
                Who I Am
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                I'm <span className="text-white">Rajyavardhan Singh Rathore</span>,
                an Electronics and Communication Engineering undergraduate
                at <span className="text-white">PDPM IIITDM Jabalpur</span>.
                I have a strong interest in software engineering,
                backend development, artificial intelligence, and
                competitive programming.
              </p>

              <p className="mt-6 leading-8 text-zinc-400">
                I enjoy designing scalable full-stack applications,
                AI-powered software, and backend systems that solve
                real-world problems. Beyond academics, I actively
                participate in hackathons, technical communities,
                leadership roles, and continuously improve my
                problem-solving skills through competitive programming.
              </p>

              {/* Education */}

              <div className="mt-10 rounded-2xl border border-white/10 bg-[#101112] p-6">

                <h4 className="text-lg font-semibold text-white">
                  Education
                </h4>

                <p className="mt-5 font-medium text-zinc-200">
                  PDPM IIITDM Jabalpur
                </p>

                <p className="mt-1 text-zinc-400">
                  Bachelor of Technology
                </p>

                <p className="text-zinc-400">
                  Electronics & Communication Engineering
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Aug 2024 – Jun 2028
                </p>

                <div className="mt-6">

                  <h5 className="font-medium text-white">
                    Relevant Coursework
                  </h5>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-zinc-400">

                    <span>• Data Structures</span>
                    <span>• DBMS</span>

                    <span>• Machine Learning</span>
                    <span>• Operating Systems</span>

                    <span>• Computer Networks</span>
                    <span>• Object-Oriented Programming</span>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            {/* Stats */}

            <div className="grid grid-cols-2 gap-5">

              {stats.map((item) => (

                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-[#17181C] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
                >

                  <h3 className="text-4xl font-bold text-blue-500">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

            {/* Highlights */}

            <div className="rounded-3xl border border-white/10 bg-[#17181C] p-8">

              <h3 className="text-xl font-semibold text-white">
                Highlights
              </h3>

              <div className="mt-6 space-y-5 text-zinc-400">

                <div className="flex gap-3">
                  <span className="text-cyan-400">▹</span>
                  <p>
                    Co-Coordinator at the Electronics and Robotics Society,
                    mentoring members and contributing to AI, robotics,
                    and software projects.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-400">▹</span>
                  <p>
                    Team Lead of ConvoCheck, an AI-powered NLP application
                    developed during the Can You Hack It hackathon.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-400">▹</span>
                  <p>
                    Passionate about building AI-powered products,
                    scalable backend systems, and modern web applications.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-400">▹</span>
                  <p>
                    Active competitive programmer with consistent practice
                    across LeetCode, Codeforces, CodeChef, and Code360.
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}