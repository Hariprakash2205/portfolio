"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative text-white py-20 px-6 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 blur-2xl"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 glow-text relative z-10"
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* 🔥 PROFILE IMAGE (GLASS + NEON + TILT) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 p-4 rounded-2xl glass neon-border neon-border-hover"
        >
          <Image
            src="/Profile.jpeg"
            alt="Hari Prakash"
            width={180}
            height={180}
            priority
            className="rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/30 object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-lg leading-relaxed mb-8"
        >
          I am a Data Analyst and AI Developer focused on solving real-world problems through data-driven intelligence. 
          My expertise lies in developing machine learning models, engineering insightful data solutions, and building 
          interactive dashboards that drive strategic decision-making.

          <br /><br />

          I combine analytical thinking, strong technical skills, and a problem-solving mindset to transform raw data 
          into meaningful insights and scalable systems that create real impact.
        </motion.p>

        {/* TAGS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            "Data-Driven Thinking",
            "AI Solutions",
            "Business Intelligence",
            "Decision Intelligence",
            "Automation",
            "Insight Generation",
            "Model Deployment",
            "Real-World Applications",
            "End-to-End ML Solutions",
          ].map((tag, index) => (
            <span
              key={index}
              className="glass px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:scale-105 neon-border-hover transition duration-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>

      </div>

    </section>
  );
}