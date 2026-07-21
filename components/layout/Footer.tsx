"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/reocodes-51",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rajyavardhan-singh-rathore",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mr_pinsu_rk",
    icon: FaInstagram,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0C0D0F]">
      <div className="mx-auto max-w-7xl px-6 py-5">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >

          {/* Left */}

          <div>
            <h2 className="text-xl font-bold text-white">
              Rajyavardhan Singh Rathore
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Software Engineer • AI Enthusiast • Full Stack Developer
            </p>
          </div>

          {/* Right */}

          <div className="flex items-center gap-3">

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#17181C] text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Icon size={19} />
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <ArrowUp size={18} />
            </button>

          </div>

        </motion.div>

      </div>
    </footer>
  );
}