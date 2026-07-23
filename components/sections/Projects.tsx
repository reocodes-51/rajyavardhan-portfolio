"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

type Project = {
  title: string;
  featured: boolean;
  image: string;
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
    image: "/projects/neurolearn.png",

    description:
      "An AI-powered platform for early dyslexia screening and personalized learning recommendations for school children. The system combines speech processing, computer vision and machine learning to assist teachers in identifying learning disabilities at an early stage.",

    tech: [
      "React",
      "FastAPI",
      "Python",
      "MongoDB",
      "OpenCV",
      "Whisper",
    ],

    features: [
      "Reading Assessment",
      "Writing Assessment",
      "Teacher Dashboard",
      "Student Dashboard",
      "AI Risk Prediction",
      "Personalized Learning",
    ],

    github:
      "https://github.com/reocodes-51/Neurolearn-Ai",

    demo: "#",
  },

  {
    title: "Smart Truck Loading Optimization System",

    featured: false,

    image: "/projects/truck.png",

    description:
      "AI-assisted logistics platform that optimizes truck loading using intelligent placement algorithms, weight balancing and volume utilization to maximize transportation efficiency.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI",
    ],

    features: [],

    github:
      "https://github.com/reocodes-51/Smart-Truck-Loading-Optimization-System",

    demo: "#",
  },

  {
    title: "JARVIS AI",

    featured: false,

    image: "/projects/jarvis.png",

    description:
      "Voice-enabled AI assistant capable of real-time conversations, speech recognition, task execution and intelligent responses powered by modern Large Language Models.",

    tech: [
      "Python",
      "LiveKit",
      "Google AI",
      "Speech",
    ],

    features: [],

    github:
      "https://github.com/reocodes-51/jarvis",

    demo: "#",
  },
];

function TechPill({
  text,
}: {
  text: string;
}) {
  return (
    <span
      className="
      rounded-full
      border border-white/10
      bg-white/5
      px-3
      py-1
      text-sm
      text-zinc-300
      backdrop-blur-md
      transition-all
      duration-300
      hover:border-cyan-400/40
      hover:bg-cyan-400/10
      hover:text-white
    "
    >
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
      rel="noopener noreferrer"
      className="
        group
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-5
        py-3
        text-sm
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:bg-cyan-500/10
        hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
      "
    >
      {icon}
      {children}
    </a>
  );
}

export default function Projects() {
  const featured = projects.find(
    (project) => project.featured
  )!;

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#101112] px-6 py-28"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">


                {/* ========================= */}
        {/* Section Heading */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-400">
            Featured Projects
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Things I've Been
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Building
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A collection of projects focused on Artificial Intelligence,
            Full Stack Development, Backend Systems and scalable software
            engineering.
          </p>

          <div className="mx-auto mt-8 h-[2px] w-48 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* ========================= */}
        {/* Featured Project */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            y: -8,
            transition: { duration: 0.3 },
          }}
          className="
            group
            relative
            mt-20
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:border-cyan-400/40
            hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]
          "
        >
          {/* Glow */}

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="grid lg:grid-cols-2">

            {/* Left Side */}

            <div className="relative z-10 p-5 lg:p-14">

              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
                ⭐ Featured Project
              </span>

              <h3 className="mt-6 text-4xl font-bold text-white">
                {featured.title}
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                {featured.description}
              </p>

              {/* Tech */}

              <div className="mt-8 flex flex-wrap gap-3">
                {featured.tech.map((tech) => (
                  <TechPill
                    key={tech}
                    text={tech}
                  />
                ))}
              </div>

              {/* Features */}

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

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">

                <ActionButton
                  href={featured.github}
                  icon={<FaGithub />}
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

            {/* Right Side */}

            <div className="relative p-8 lg:p-10">

              <div
                className="
                  relative
                  h-[350px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-cyan-400/20
                  bg-[#17181C]
                "
              >

                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#101112]/90 via-transparent to-transparent" />

              </div>

            </div>

          </div>

        </motion.div>

                {/* ========================= */}
        {/* Other Projects */}
        {/* ========================= */}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          {projects.slice(1).map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_25px_80px_rgba(34,211,238,0.18)]
              "
            >

              {/* Project Image */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#101112] via-[#101112]/20 to-transparent" />

                {/* Floating Badge */}

                <div className="absolute left-5 top-5 rounded-full border border-cyan-400/20 bg-black/40 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
                  Project
                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-6 flex flex-wrap gap-3">

                  {project.tech.map((item) => (

                    <TechPill
                      key={item}
                      text={item}
                    />

                  ))}

                </div>

                {/* Divider */}

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

                {/* Buttons */}

                <div className="flex flex-wrap gap-4">

                  <ActionButton
                    href={project.github}
                    icon={<FaGithub />}
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

                {/* ====================================== */}
        {/* Bottom CTA */}
        {/* ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
            "
          >
            {/* Background Glow */}

            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative z-10 px-8 py-16 md:px-16">

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >

                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-500/10
                    px-5
                    py-2
                    text-sm
                    font-medium
                    text-cyan-400
                  "
                >
                  🚀 Always Learning
                </span>

                <h3 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                  More Exciting Projects
                  <br />
                  Coming Soon
                </h3>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                  I continuously build AI applications, scalable backend
                  systems, full-stack products and participate in hackathons.
                  Every project is an opportunity to learn, innovate and
                  create impactful software solutions.
                </p>

                {/* Divider */}

                <div className="mx-auto mt-10 h-px w-56 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                {/* Skills */}

                <div className="mt-10 flex flex-wrap justify-center gap-4">

                  {[
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Backend Development",
                    "Full Stack",
                    "System Design",
                    "Cloud Deployment",
                    "Open Source",
                    "Hackathons",
                  ].map((item) => (

                    <motion.span
                      key={item}
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                      }}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-5
                        py-2
                        text-sm
                        text-zinc-300
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-cyan-400/40
                        hover:bg-cyan-500/10
                        hover:text-white
                      "
                    >
                      {item}
                    </motion.span>

                  ))}

                </div>

              </motion.div>

            </div>

          </div>
        </motion.div>

              </div>
    </section>
  );
}