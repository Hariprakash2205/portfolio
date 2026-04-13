"use client";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import { motion } from "framer-motion";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 🔥 HERO SECTION */}
      <main className="relative min-h-screen text-white flex items-center px-6 md:px-16 overflow-hidden">

        {/* 🌌 Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 blur-2xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-purple-400 mb-3 uppercase tracking-widest text-sm"
            >
              Data Analyst • AI Developer
            </motion.p>

            {/* 🔥 GRADIENT NAME */}
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Hari Prakash
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed mb-6 max-w-xl"
            >
              Data Analyst & AI Developer specializing in building intelligent systems,
              data-driven solutions, and impactful dashboards. Passionate about
              solving real-world problems using AI and analytics.
            </motion.p>

            {/* 🔥 UPDATED STRONG TECH TAGS */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "End-to-End ML Pipelines",
                "AI-Powered Systems",
                "Decision Intelligence",
                "Data-Driven Products"
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm rounded-full bg-white/5 border border-purple-500/30 text-gray-300 hover:border-cyan-400 hover:text-white hover:scale-105 transition duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 flex-wrap"
            >
              <a href="#projects">
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition">
                  View Projects
                </button>
              </a>

              <a href="/resume.pdf" download>
                <button className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition">
                  Download Resume
                </button>
              </a>
            </motion.div>

          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="hidden md:block"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 shadow-xl shadow-purple-500/20">

              <h3 className="text-xl font-semibold mb-6 text-purple-400">
                🚀 What I Build
              </h3>

              <ul className="text-gray-300 space-y-4">
                <li>✔ End-to-End ML Pipelines</li>
                <li>✔ AI-Powered Applications</li>
                <li>✔ Data Analytics & BI Systems</li>
                <li>✔ Intelligent Decision Systems</li>
              </ul>

              {/* 🔥 MINI STATS */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/5 p-3 rounded-lg">
                  <p className="text-purple-400 text-lg font-bold">5+</p>
                  <p className="text-xs text-gray-400">Projects</p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <p className="text-cyan-400 text-lg font-bold">AI</p>
                  <p className="text-xs text-gray-400">Focus</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </main>

      {/* 🔥 SECTIONS */}
      <About />
      <Skills />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}