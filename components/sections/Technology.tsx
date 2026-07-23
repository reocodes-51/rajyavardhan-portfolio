"use client";

import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import {
  Sparkles,
  Layers3,
  Cpu,
  Wrench,
  Globe,
} from "lucide-react";

import {
  SiCplusplus,
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiVercel,
  SiRender,
} from "react-icons/si";

const techStack = [
  {
    title: "Languages",
    icon: Globe,
    description: "Programming languages I use daily.",
    items: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: SiOpenjdk },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "Frontend",
    icon: Layers3,
    description: "Modern UI frameworks and libraries.",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Backend",
    icon: Cpu,
    description: "Server-side technologies and databases.",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Flask", icon: SiFlask },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: Sparkles,
    description: "Libraries powering intelligent applications.",
    items: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Scikit Learn", icon: SiScikitlearn },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    description: "Deployment and productivity tools.",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: FaAws },
      { name: "Postman", icon: SiPostman },
      { name: "Linux", icon: SiLinux },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },
];

type TechCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  items: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
};

function TechCard({
  title,
  description,
  icon: SectionIcon,
  items,
}: TechCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-[#17181C]/80
        p-5
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-cyan-400/30
        hover:shadow-[0_25px_80px_rgba(34,211,238,0.15)]
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Shine */}

      <div className="absolute -left-40 top-0 h-full w-32 rotate-12 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-700 group-hover:left-[120%]" />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-cyan-500/10 p-3">

                <SectionIcon
                  size={24}
                  className="text-cyan-400"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">
                  {title}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  {description}
                </p>

              </div>

            </div>

          </div>

          <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />

        </div>

        <div className="mt-7 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* Technologies */}

        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">

          {items.map((tech, index) => {

            const Icon = tech.icon;

            return (

              <motion.div
                key={tech.name}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.35,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.08,
                }}
                className="
                  group/item
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/[0.05]
                "
              >
                {/* Card Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition duration-300 group-hover/item:opacity-100" />

                <div className="relative z-10 flex flex-col items-center">

                  <Icon
                    className="
                      text-4xl
                      text-zinc-400
                      transition-all
                      duration-300
                      group-hover/item:scale-110
                      group-hover/item:text-cyan-400
                    "
                  />

                  <span className="mt-4 text-center text-sm font-medium text-zinc-300 transition-all duration-300 group-hover/item:text-white">
                    {tech.name}
                  </span>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </motion.div>
  );
}

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#101112] px-6 py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-52 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Skill's
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
            Technologies I
            <span className="text-cyan-400"> Work With</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            I build modern full-stack applications using scalable technologies,
            AI frameworks, cloud platforms, and developer tools that enable
            high-performance and production-ready software.
          </p>

          <div className="mx-auto mt-10 h-px w-56 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        </motion.div>

        {/* Technology Categories */}

        <div className="mt-20 space-y-8">

          {techStack.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
            >

              <TechCard
                title={category.title}
                description={category.description}
                icon={category.icon}
                items={category.items}
              />

            </motion.div>

          ))}

        </div>

                {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#17181C]/80 p-10 backdrop-blur-2xl">

            {/* Background Glow */}

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

            <div className="relative z-10 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                <Sparkles
                  size={30}
                  className="text-cyan-400"
                />

              </div>

              <h3 className="mt-6 text-3xl font-bold text-white md:text-4xl">
                Always Exploring New Technologies
              </h3>

              <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
                Technology evolves every day, and I enjoy continuously learning,
                experimenting, and building with modern frameworks, AI tools,
                scalable backend architectures, and cloud platforms to create
                impactful products.
              </p>

              <div className="mx-auto mt-10 h-px w-64 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                {[
                  "Full Stack Development",
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Backend Engineering",
                  "Cloud Deployment",
                  "Competitive Programming",
                  "System Design",
                  "Open Source",
                ].map((skill, index) => (

                  <motion.span
                    key={skill}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-[#101112]
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      text-zinc-300
                      transition-all
                      duration-300
                      hover:border-cyan-400/40
                      hover:bg-cyan-500/10
                      hover:text-white
                    "
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Bottom Glow */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-500/10 via-cyan-500/5 to-transparent" />

    </section>
  );
}