"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

type Project = {
  title: string;
  featured: boolean;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  features: string[];
};

const projects: Project[] = [
  {
    title: "NeuroLearn AI",
    featured: true,
    description:
      "An AI-powered platform for early dyslexia screening and personalized learning recommendations for school children. The system combines computer vision, speech processing, and machine learning to assist teachers in identifying learning difficulties at an early stage.",

    tech: [
      "React",
      "FastAPI",
      "MongoDB",
      "OpenCV",
      "Whisper",
      "Python",
    ],

    features: [
      "Reading Assessment",
      "Writing Assessment",
      "AI Risk Prediction",
      "Teacher Dashboard",
      "Student Dashboard",
      "Personalized Learning",
    ],

    github: "https://github.com/reocodes-51/Neurolearn-Ai",
    demo: "#",
  },

  {
    title: "Smart Truck Loading Optimization System",
    featured: false,

    description:
      "AI-assisted logistics platform that optimizes truck loading using volume utilization, weight balancing, and intelligent placement algorithms to maximize transportation efficiency.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI",
    ],
    features: [],
    github: "https://github.com/reocodes-51/Smart-Truck-Loading-Optimization-System",
    demo: "#",
  },

  {
    title: "JARVIS AI",

    featured: false,

    description:
      "Voice-enabled AI assistant capable of real-time conversations, task execution, speech recognition, and intelligent responses powered by modern LLMs.",

    tech: [
      "Python",
      "LiveKit",
      "Google AI",
      "Speech",
    ],
    features: [],
    github: "https://github.com/reocodes-51/jarvis",
    demo: "#",
  },
];

function TechPill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-[#101112] px-3 py-1 text-sm text-zinc-300">
      {text}
    </span>
  );
}

function ActionButton({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#101112] px-5 py-3 text-sm text-white transition-all duration-300 hover:border-blue-500/40 hover:bg-[#1c1d22]"
    >
      {icon}
      {children}
    </a>
  );
}

export default function Projects() {
  const featured = projects[0];

  return (
    <section
      id="projects"
      className="bg-[#101112] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-medium text-blue-500">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Featured Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A selection of projects demonstrating my experience in
            Artificial Intelligence, Full Stack Development,
            Backend Engineering, and Scalable Software Systems.
          </p>

          <div className="mx-auto mt-8 h-px w-44 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        </motion.div>

        {/* Featured Project */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-[#17181C]"
        >
          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-10">

              <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                Featured Project
              </span>

              <h3 className="mt-6 text-4xl font-bold text-white">
                {featured.title}
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                {featured.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {featured.tech.map((item) => (
                  <TechPill key={item} text={item} />
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {featured.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <ArrowUpRight
                      size={18}
                      className="text-cyan-400"
                    />

                    {feature}

                  </div>

                ))}

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

            <ActionButton
            href={featured.github}
            icon={<FaGithub className="h-[18px] w-[18px]" />}
            >
            GitHub
            </ActionButton>

            {featured.demo !== "#" && (
            <ActionButton
                href={featured.demo}
                icon={<ExternalLink size={18} />}
            >
                Live Demo
            </ActionButton>
            )}


              </div>

            </div>

            {/* Right */}

            <div className="flex items-center justify-center bg-gradient-to-br from-[#1A1C21] to-[#101112] p-10">

              <div className="flex h-[360px] w-full items-center justify-center rounded-2xl border border-dashed border-cyan-400/30 bg-[#101112]">

                <div className="text-center">

                  <p className="text-6xl">🧠</p>

                  <p className="mt-5 text-zinc-400">
                    Project Preview
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    Replace with project screenshot
                  </p>

                </div>

              </div>

            </div>

          </div>
        </motion.div>

                {/* Other Projects */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {projects.slice(1).map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#17181C] transition-all duration-300 hover:border-blue-500/30"
            >

              {/* Image Placeholder */}

              <div className="flex h-60 items-center justify-center bg-gradient-to-br from-[#1A1C21] to-[#101112]">

                <div className="flex h-[180px] w-[90%] items-center justify-center rounded-2xl border border-dashed border-cyan-400/30 bg-[#101112]">

                  <div className="text-center">

                    <p className="text-5xl">
                      {project.title.includes("Truck") ? "🚛" : "🤖"}
                    </p>

                    <p className="mt-4 text-zinc-400">
                      Project Preview
                    </p>

                  </div>

                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-5 leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((item) => (

                    <TechPill
                      key={item}
                      text={item}
                    />

                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-8 flex gap-4">

                  <ActionButton
                    href={project.github}
                    icon={<FaGithub className="h-[18px] w-[18px]" />}
                    >
                    GitHub
                    </ActionButton>

                    {project.demo !== "#" && (
                    <ActionButton
                        href={project.demo}
                        icon={<ExternalLink size={18} />}
                    >
                        Live Demo
                    </ActionButton>
                    )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

                {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#17181C] p-10">

            {/* Background Glow */}

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10 text-center">

              <p className="text-blue-500 font-medium">
                More Projects Coming Soon
              </p>

              <h3 className="mt-4 text-4xl font-bold text-white">
                Always Building Something New
              </h3>

              <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
                I'm continuously exploring Artificial Intelligence,
                Backend Engineering, System Design, and Full Stack
                Development through hackathons, personal projects,
                and open-source contributions. Every project helps me
                improve my ability to build scalable and impactful
                software solutions.
              </p>

              <div className="mx-auto mt-8 h-px w-56 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <span className="rounded-full border border-white/10 bg-[#101112] px-5 py-2 text-sm text-zinc-300 transition hover:border-blue-500/30">
                  AI Applications
                </span>

                <span className="rounded-full border border-white/10 bg-[#101112] px-5 py-2 text-sm text-zinc-300 transition hover:border-blue-500/30">
                  Full Stack Development
                </span>

                <span className="rounded-full border border-white/10 bg-[#101112] px-5 py-2 text-sm text-zinc-300 transition hover:border-blue-500/30">
                  Machine Learning
                </span>

                <span className="rounded-full border border-white/10 bg-[#101112] px-5 py-2 text-sm text-zinc-300 transition hover:border-blue-500/30">
                  System Design
                </span>

                <span className="rounded-full border border-white/10 bg-[#101112] px-5 py-2 text-sm text-zinc-300 transition hover:border-blue-500/30">
                  Cloud Deployment
                </span>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}