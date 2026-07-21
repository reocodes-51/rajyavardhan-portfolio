"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute right-[-220px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute left-[-180px] bottom-[-150px] h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-8 py-32 lg:flex-row">

        {/* LEFT */}

        <div className="max-w-2xl">

          <p className="mb-5 text-lg font-medium text-blue-500">
            Hi, I'm
          </p>

          <h1 className="text-6xl font-black leading-none tracking-tight lg:text-8xl">
            Rajyavardhan
          </h1>

          <h1 className="mt-2 text-6xl font-black leading-none tracking-tight lg:text-8xl">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Singh
            </span>{" "}
            Rathore
          </h1>

          <p className="mt-10 text-2xl font-semibold text-zinc-300">
            Building impactful software with AI,
            Full Stack Development and
            Competitive Programming.
          </p>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Electronics and Communication Engineering student at
            IIITDM Jabalpur passionate about building scalable web
            applications, AI-powered products, and solving challenging
            algorithmic problems.
          </p>

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
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-blue-500/30
              "
            >
              View Projects →
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
                hover:border-blue-500
                hover:bg-zinc-900
                "
              >
                Download Resume
              </Button>
            </a>

          </div>

          {/* Socials */}

          <div className="mt-12 flex items-center gap-6">

            <Link
              href="https://github.com/reocodes-51"
              target="_blank"
            >
              <FaGithub className="text-3xl text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:text-white" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/rajyavardhan-singh-rathore"
              target="_blank"
            >
              <FaLinkedin className="text-3xl text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:text-white" />
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="mt-20 lg:mt-0">

          <div className="relative flex h-[430px] w-[430px] items-center justify-center">

            {/* Glow */}

            <div className="absolute h-full w-full rounded-full bg-blue-600/15 blur-[110px]" />

            {/* Outer Circle */}

            <div className="absolute h-[390px] w-[390px] rounded-full border border-zinc-700 bg-[#17181C]" />

            {/* Inner Circle */}

            <div className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full border border-zinc-700 bg-[#17181C] text-xl font-medium text-zinc-500">

              Profile Image

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}