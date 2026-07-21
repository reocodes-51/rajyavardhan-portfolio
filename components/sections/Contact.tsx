"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Download,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "rajyavardhan.1551@gmail.com",
    link: "mailto:rajyavardhan.1551@gmail.com",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "@reocodes-51",
    link: "https://github.com/reocodes-51",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "Rajyavardhan Singh Rathore",
    link: "https://linkedin.com/in/rajyavardhan-singh-rathore",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jabalpur, Madhya Pradesh, India",
    link: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let's Build Something Amazing Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Whether you have an opportunity, a collaboration idea,
            or simply want to connect, I'd be happy to hear from you.
          </p>

          <div className="mx-auto mt-8 h-px w-44 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        </motion.div>

        {/* Content */}

       <div className="mt-20">

                      {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl space-y-6 text-center"
          >
            <h3 className="text-3xl font-bold text-white">
              Get In Touch
            </h3>

            <p className="leading-8 text-zinc-400">
              I'm always open to discussing internship opportunities,
              software engineering roles, AI projects, hackathons,
              and exciting collaborations. Feel free to reach out—
              I'd love to connect!
            </p>

            <div className="mx-auto w-full max-w-3xl space-y-6">

              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 rounded-2xl border border-white/10 bg-[#17181C] px-6 py-5  transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
                    >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10">
                        <Icon size={26} className="text-blue-400" />
                    </div>

                    <div className="flex flex-col items-start justify-center">
                    <p className="text-sm font-medium text-zinc-400">
                        {item.title}
                    </p>

                    <p className="mt-1 text-lg font-semibold text-white break-all">
                        {item.value}
                    </p>
                    </div>
                    </a>
                                    );
                                })}

            </div>

            <a
              href="/resume/resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              <Download size={20} />
              Download Resume
            </a>

          </motion.div>

          {/* Right Side */}

          

        </div>

      </div>

    </section>
  );
}