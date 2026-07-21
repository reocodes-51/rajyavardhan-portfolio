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
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Rajyavardhan
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://github.com/reocodes-51"
            target="_blank"
          >
            <FaGithub className="h-5 w-5 hover:text-blue-400 transition" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/rajyavardhan-singh-rathore"
            target="_blank"
          >
            <FaLinkedin className="h-5 w-5 hover:text-blue-400 transition" />
            </Link>

          <Button>
            Resume
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}