"use client";

import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
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
    items: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "Java", icon:  SiOpenjdk },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Backend",
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

function TechCard({
  title,
  items,
}: {
  title: string;
  items: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/10 bg-[#17181C] p-8 transition-all duration-300 hover:border-blue-500/30"
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="mt-8 grid grid-cols-3 gap-6 sm:grid-cols-4">
        {items.map((tech) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center gap-3"
            >
              <Icon className="text-5xl text-zinc-400 transition-all duration-300 hover:text-white" />

              <span className="text-sm text-zinc-400">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Technology() {
  return (
    <section
      id="technology"
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
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A collection of modern technologies, frameworks, and tools
            I use to design, build, deploy, and scale applications.
          </p>

          <div className="mx-auto mt-8 h-px w-44 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        </motion.div>

        {/* Technology Cards */}

        <div className="mt-20 space-y-8">

          <TechCard
            title={techStack[0].title}
            items={techStack[0].items}
          />

          <TechCard
            title={techStack[1].title}
            items={techStack[1].items}
          />

          <TechCard
            title={techStack[2].title}
            items={techStack[2].items}
          />

                  <TechCard
            title={techStack[3].title}
            items={techStack[3].items}
          />

          <TechCard
            title={techStack[4].title}
            items={techStack[4].items}
          />

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 text-center"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#17181C] p-10">

            <h3 className="text-3xl font-bold text-white">
              Always Exploring New Technologies
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
              Technology evolves rapidly, and so do I. I enjoy learning new
              frameworks, experimenting with AI, improving backend systems,
              and building scalable applications that solve real-world
              problems.
            </p>

            <div className="mx-auto mt-8 h-px w-52 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <span className="rounded-full border border-white/10 bg-[#101112] px-5 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-blue-500/30 hover:text-white">
                Full Stack Development
              </span>

              <span className="rounded-full border border-white/10 bg-[#101112] px-5 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-blue-500/30 hover:text-white">
                Artificial Intelligence
              </span>

              <span className="rounded-full border border-white/10 bg-[#101112] px-5 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-blue-500/30 hover:text-white">
                Machine Learning
              </span>

              <span className="rounded-full border border-white/10 bg-[#101112] px-5 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-blue-500/30 hover:text-white">
                Backend Engineering
              </span>

              <span className="rounded-full border border-white/10 bg-[#101112] px-5 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-blue-500/30 hover:text-white">
                Cloud Deployment
              </span>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}