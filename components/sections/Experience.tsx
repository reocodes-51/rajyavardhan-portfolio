"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Calendar } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  role: string;
  duration: string;
  icon: any;
  description: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    title: "Future Founder Internship",
    company: "OkCredit",
    role: "Developer",
    duration: "May 2026 – July 2026",
    icon: Briefcase,

    description:
      "Worked on StockPilot, an AI-powered Smart Warehouse Management platform, building scalable full-stack applications and AI-driven inventory management solutions.",

    points: [
      "Developed StockPilot, a full-stack MERN warehouse management platform with JWT authentication, role-based access control, QR-based inventory tracking, warehouse mapping, and REST APIs.",
      "Integrated the Groq API to build an AI-powered warehouse assistant capable of intelligent inventory search and operational insights.",
      "Built real-time inventory monitoring dashboards and optimized MongoDB queries to improve application performance.",
      "Deployed the frontend on Vercel and backend on Render while ensuring secure and scalable architecture.",
    ],
  },

  {
    title: "Electronics & Robotics Society",
    company: "PDPM IIITDM Jabalpur",
    role: "Co-Coordinator",
    duration: "2025 – Present",
    icon: Users,

    description:
      "Leading technical initiatives and coordinating workshops, robotics activities, and student events within the Electronics & Robotics Society.",

    points: [
      "Coordinated technical workshops and robotics events for students.",
      "Collaborated with club members to organize technical competitions and learning sessions.",
      "Mentored junior students in electronics, programming, and project development.",
      "Managed club activities while promoting innovation through collaborative projects.",
    ],
  },

  {
    title: "Can You Hack It",
    company: "Bitbyte.tpc",
    role: "Team Lead",
    duration: "September 2025",
    icon: Briefcase,

    description:
      "Led the development of ConvoCheck, an AI-powered NLP application for chat summarization and toxicity detection.",

    points: [
      "Led a multidisciplinary team to develop ConvoCheck using Python, Flask, NLP, and Gemini APIs.",
      "Implemented real-time toxicity detection and AI-powered chat summarization.",
      "Automated moderation workflows to improve processing efficiency and reduce manual effort.",
      "Managed project planning, task allocation, and final hackathon presentation.",
    ],
  },
];

function TimelineCard({
  item,
  index,
}: {
  item: Experience;
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="relative rounded-3xl border border-white/10 bg-[#17181C] p-8 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="flex items-start gap-5">

        <div className="rounded-2xl bg-blue-500/10 p-4">
          <Icon size={28} className="text-blue-400" />
        </div>

        <div className="flex-1">

          <h3 className="text-2xl font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-1 text-lg text-blue-400">
            {item.company}
          </p>

          <p className="text-zinc-400">
            {item.role}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
            <Calendar size={16} />
            {item.duration}
          </div>

          <p className="mt-6 leading-8 text-zinc-400">
            {item.description}
          </p>

          <div className="mt-6 space-y-3">

                      {item.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3"
              >
                <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                <p className="text-zinc-300 leading-7">
                  {point}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#101112] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-medium text-blue-500">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            From building production-ready applications to leading technical teams,
            these experiences reflect my passion for software engineering, artificial
            intelligence, and solving real-world challenges.
          </p>

          <div className="mx-auto mt-8 h-px w-44 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        </motion.div>

        <div className="relative mt-20"></div>

                  {/* Vertical Timeline */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/40 via-cyan-400/30 to-transparent lg:block" />

          <div className="space-y-12">

            {experiences.map((item, index) => (
              <div
                key={item.title}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[17px] top-8 hidden h-5 w-5 rounded-full border-4 border-[#101112] bg-blue-500 lg:block" />

                {/* Card */}
                <div className="lg:ml-16">
                  <TimelineCard
                    item={item}
                    index={index}
                  />
                </div>
              </div>
            ))}

          </div>

      </div>
    </section>
  );
}