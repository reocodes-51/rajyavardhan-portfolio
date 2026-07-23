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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0C0D0F]">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-blue-500/5 blur-[140px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-5">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="bg-gradient-to-r from-white via-zinc-100 to-cyan-300 bg-clip-text text-xl font-bold text-transparent">
              Rajyavardhan Singh Rathore
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Software Engineer • AI Enthusiast • Full Stack Developer
            </p>
          </motion.div>

          {/* Right */}

          <div className="flex items-center gap-3">

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#17181C] text-zinc-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                >
                  <Icon size={19} />
                </motion.a>
              );
            })}

            <motion.button
              onClick={scrollToTop}
              aria-label="Back to top"
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              <ArrowUp size={18} />
            </motion.button>

          </div>

        </motion.div>

      </div>

      {/* Top Glow Line */}

      <div className="absolute left-1/2 top-0 h-px w-80 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

    </footer>
  );
}