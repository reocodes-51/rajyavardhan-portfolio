"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-24 md:flex-row md:items-center md:justify-between">
        
        {/* Left Side */}
        <div className="max-w-2xl">
          <p className="mb-4 text-lg text-blue-500">
            Hi, I'm
          </p>

          <h1 className="text-5xl font-extrabold md:text-7xl">
            Rajyavardhan
            <span className="text-blue-500"> Singh Rathore</span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-muted-foreground">
            Software Developer • AI Enthusiast • Problem Solver
          </h2>

          <p className="mt-6 leading-8 text-muted-foreground">
            I am an Electronics and Communication Engineering student at
            IIITDM Jabalpur passionate about Full Stack Development,
            Artificial Intelligence, and Competitive Programming.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>
              View Projects
            </Button>

            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                Download Resume
              </Button>
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-2xl">
            <Link
              href="https://github.com/reocodes-51"
              target="_blank"
            >
              <FaGithub className="transition hover:text-blue-500" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/rajyavardhan-singh-rathore"
              target="_blank"
            >
              <FaLinkedin className="transition hover:text-blue-500" />
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-16 flex justify-center md:mt-0">
          <div className="flex h-80 w-80 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-xl font-semibold">
            Profile Image
          </div>
        </div>
      </div>
    </section>
  );
}