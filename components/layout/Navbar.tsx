"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header
  className="
    fixed inset-x-0 top-0 z-50
    border-b border-white/10
    bg-[#101112]/60
    backdrop-blur-2xl
    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
    transition-all duration-300
  "
>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white transition duration-300 hover:text-zinc-300"
        >
          Reocodes-51
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            .
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[15px] font-medium text-zinc-400 transition-all duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-5 md:flex">

          <Link
            href="https://github.com/reocodes-51"
            target="_blank"
          >
            <FaGithub className="text-xl text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-white" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/rajyavardhan-singh-rathore"
            target="_blank"
          >
            <FaLinkedin className="text-xl text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-white" />
          </Link>

          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-6
                text-white
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-blue-500/40
              "
            >
              Resume
            </Button>
          </a>

        </div>

        {/* Mobile Menu */}
        <button className="text-zinc-300 transition hover:text-white md:hidden">
          <Menu className="h-6 w-6" />
        </button>

      </div>
    </header>
  );
}