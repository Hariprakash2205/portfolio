"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative text-white py-20 px-6 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 blur-2xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold glow-text"
        >
          Contact
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          I&apos;m open to opportunities in Data Science, AI, and Analytics.  
          Feel free to reach out for collaborations or roles.
        </motion.p>

        {/* 🔥 Contact Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="mailto:hprakashkathirvel@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm text-white border border-purple-500/40 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition"
          >
            <FaEnvelope /> Email
          </a>

          <a
            href="https://www.linkedin.com/in/hari-prakash-k-55b3b0282/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm text-white border border-purple-500/40 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/Hariprakash2205"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm text-white border border-purple-500/40 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition"
          >
            <FaGithub /> GitHub
          </a>

        </div>

        {/* 🔥 Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-8 py-3 rounded-lg text-white border border-purple-500/40 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition"
        >
          Download Resume
        </a>

      </div>
    </section>
  );
}