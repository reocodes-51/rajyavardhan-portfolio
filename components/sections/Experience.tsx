"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  role: string;
  duration: string;
  logo: string;
  description: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    title: "Future Founder Internship",
    company: "OKCredit",
    role: "Developer",
    duration: "May 2026 – July 2026",
    logo: "/logos/okCredit.png",

    description:
      "Worked on StockPilot, an AI-powered Smart Warehouse Management platform, building scalable full-stack applications and AI-driven inventory management solutions.",

    points: [
      "Developed StockPilot using MERN Stack with JWT Authentication and Role-Based Access Control.",
      "Integrated Groq AI APIs for intelligent warehouse assistance.",
      "Implemented QR-based inventory tracking and warehouse mapping.",
      "Deployed production-ready applications using Vercel and Render.",
    ],
  },

  {
    title: "Electronics & Robotics Society",
    company: "PDPM IIITDM Jabalpur",
    role: "Co-Coordinator",
    duration: " Feb 2026 – Present",
    logo: "/logos/ers.png",

    description:
      "Leading technical initiatives, robotics workshops and student events while promoting innovation and collaborative learning.",

    points: [
      "Organized technical workshops and robotics competitions.",
      "Designed promotional creatives and managed club outreach.",
      "Mentored juniors in Electronics and Programming.",
      "Coordinated technical events and collaborative projects.",
    ],
  },

  {
    title: "Can You Hack It",
    company: "BitByte TPC",
    role: "Team Lead",
    duration: "September 2025",
    logo: "/logos/tpc.png",

    description:
      "Led the development of ConvoCheck, an AI-powered NLP application for summarization and toxicity detection.",

    points: [
      "Led a multidisciplinary software development team.",
      "Implemented Gemini-powered AI chat summarization.",
      "Developed real-time toxicity detection using NLP.",
      "Managed planning, execution and final hackathon presentation.",
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
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      className="
        group
        relative
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
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 p-8">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

          {/* Logo */}

          <motion.div
            whileHover={{
              rotate: 5,
              scale: 1.08,
            }}
            transition={{ duration: 0.3 }}
            className="
              flex
              h-24
              w-24
              shrink-0
              items-center
              justify-center
              rounded-3xl
              border
              border-cyan-400/20
              bg-gradient-to-br
              from-white/10
              to-white/5
              backdrop-blur-xl
              shadow-lg
              shadow-cyan-500/5
              transition-all
              duration-300
              group-hover:border-cyan-400/40
              group-hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
            "
          >
            <Image
              src={item.logo}
              alt={item.company}
              width={60}
              height={60}
              className="object-contain"
            />
          </motion.div>

          {/* Content */}

          <div className="flex-1">

            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

              <div>

                <h3 className="text-3xl font-bold tracking-tight text-white transition-all duration-300 group-hover:text-cyan-300">
                  {item.title}
                </h3>

                <p className="mt-2 text-lg font-semibold text-cyan-400">
                  {item.company}
                </p>

                <p className="mt-1 text-zinc-400">
                  {item.role}
                </p>

              </div>

              {/* Duration Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  self-start
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-cyan-300
                "
              >
                <Calendar size={16} />

                {item.duration}

              </div>

            </div>

            {/* Divider */}

            <div className="my-7 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

            {/* Description */}

            <p className="leading-8 text-zinc-400">
              {item.description}
            </p>

            {/* Key Highlights */}

            <div className="mt-8 space-y-4">

                            {item.points.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                  }}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    group/item
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/5
                    bg-white/[0.02]
                    p-4
                    transition-all
                    duration-300
                    hover:border-cyan-400/20
                    hover:bg-cyan-500/[0.04]
                  "
                >
                  {/* Check Icon */}

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
                      border
                      border-cyan-400/20
                      bg-cyan-500/10
                      text-cyan-400
                      transition-all
                      duration-300
                      group-hover/item:scale-110
                      group-hover/item:bg-cyan-500/20
                    "
                  >
                    ✓
                  </div>

                  <p className="leading-7 text-zinc-300 transition-colors duration-300 group-hover/item:text-white">
                    {point}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Glow */}

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    </motion.div>

  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#101112] px-6 py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[190px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
            Professional Journey
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            My journey through internships, leadership roles, hackathons and
            technical communities where I built impactful software, collaborated
            with talented teams and continuously expanded my engineering skills.
          </p>

          <div className="mx-auto mt-10 h-px w-56 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-12 top-0 hidden h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500/70 to-transparent lg:block" />

          <div className="space-y-12">

            {experiences.map((item, index) => (

              <div
                key={item.title}
                className="relative"
              >

                {/* Timeline Dot */}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.15,
                  }}
                  className="
                    absolute
                    left-[38px]
                    top-10
                    hidden
                    h-7
                    w-7
                    rounded-full
                    border-4
                    border-[#101112]
                    bg-cyan-400
                    shadow-[0_0_30px_rgba(34,211,238,0.7)]
                    lg:block
                  "
                />

                {/* Timeline Card */}

                <div className="lg:ml-28">

                  <TimelineCard
                    item={item}
                    index={index}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}