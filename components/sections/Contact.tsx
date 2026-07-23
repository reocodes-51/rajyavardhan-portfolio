"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Download,
  Sparkles,
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
      className="relative overflow-hidden bg-[#101112] px-6 py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >

          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-1xl font-bold text-white md:text-4xl">
            Let's Build Something
            <span className="text-cyan-400"> Amazing Together</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            Whether you have an internship opportunity, collaboration idea,
            freelance project, or simply want to connect, I'd love to hear
            from you.
          </p>

          <div className="mx-auto mt-10 h-px w-56 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        </motion.div>

        {/* Contact Content */}

        <div className="mt-20">

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto max-w-3xl"
          >

                        <div className="space-y-6 text-center">

              <h3 className="text-3xl font-bold text-white">
                Get In Touch
              </h3>

              <p className="leading-8 text-zinc-400">
                I'm always open to discussing internship opportunities,
                software engineering roles, AI projects, hackathons,
                open-source contributions, and exciting collaborations.
                Feel free to reach out — I'd love to connect!
              </p>

               </div>


              <div className="mx-auto mt-10 w-full max-w-3xl space-y-5">

                {contactInfo.map((item, index) => {

                  const Icon = item.icon;

                  return (

                    <motion.a
                      key={item.title}
                      href={item.link}
                      target={
                        item.link.startsWith("http")
                          ? "_blank"
                          : "_self"
                      }
                      rel="noopener noreferrer"
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.45,
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.01,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        flex
                        items-center
                        gap-6
                        rounded-3xl
                        border
                        border-white/10
                        bg-[#17181C]/80
                        backdrop-blur-2xl
                        px-6
                        py-5
                        transition-all
                        duration-500
                        hover:border-cyan-400/40
                        hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]
                      "
                    >

                      {/* Card Glow */}

                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                      <div className="relative z-10 flex items-center gap-6 w-full">

                        <motion.div
                          whileHover={{
                            rotate: 10,
                            scale: 1.1,
                          }}
                          className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-cyan-500/10
                          "
                        >

                          <Icon
                            size={26}
                            className="text-cyan-400"
                          />

                        </motion.div>

                        <div className="flex-1 text-left">

                          <p className="text-sm font-medium text-zinc-500">
                            {item.title}
                          </p>

                          <p className="mt-1 break-all text-lg font-semibold text-white">
                            {item.value}
                          </p>

                        </div>

                        <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />

                      </div>

                    </motion.a>

                  );

                })}

              </div>

       


          </motion.div>

                  </div>

      </div>

      {/* Bottom Glow */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-500/10 via-cyan-500/5 to-transparent" />

    </section>
  );
}