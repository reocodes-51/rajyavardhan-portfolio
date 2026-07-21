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

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

                      {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
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

            <div className="space-y-5">

              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#17181C] p-5 transition-all duration-300 hover:border-blue-500/40 hover:translate-x-2"
                  >
                    <div className="rounded-xl bg-blue-500/10 p-3">
                      <Icon
                        size={22}
                        className="text-blue-400"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-500">
                        {item.title}
                      </p>

                      <p className="font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}

            </div>

            <a
              href="/resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              <Download size={20} />
              Download Resume
            </a>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-[#17181C] p-8"
          >

            <form className="space-y-6">

              <div>

                <label className="mb-2 block text-sm text-zinc-400">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-[#101112] px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm text-zinc-400">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-[#101112] px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm text-zinc-400">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-white/10 bg-[#101112] px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />

                              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}