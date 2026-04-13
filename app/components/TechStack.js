"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaTools,
  FaRocket,
} from "react-icons/fa";

export default function TechStack() {
  return (
    <section className="relative text-white py-28 px-6 overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30 blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-24 text-purple-400 glow-text"
        >
          ⚙️ Tech Arsenal
        </motion.h2>

        {/* ================= CORE STACK ================= */}
        <div className="mb-24 text-center">
          <h3 className="text-2xl font-bold text-purple-400 mb-8">
            🚀 Core Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Python",
              "Machine Learning",
              "Data Analysis",
              "Power BI",
              "Scikit-learn",
              "XGBoost",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15 }}
                className="px-8 py-4 rounded-2xl text-lg bg-white/5 border border-purple-500/30 shadow-xl shadow-purple-500/30"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= DOMAINS ================= */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
            <FaBrain /> AI & Data Domains
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "Machine Learning",
              "NLP",
              "Computer Vision",
              "Time Series Forecasting",
              "Predictive Modeling",
              "A/B Testing",
              "Decision Intelligence",
              "Data Modeling",
            ].map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 rounded-full bg-white/5 border border-blue-400/30 text-sm"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ================= ENGINEERING ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">

          <motion.div whileHover={{ scale: 1.05 }} className="glass p-8 rounded-xl border border-purple-500/20">
            <h4 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
              <FaBrain /> ML Engineering
            </h4>
            <p className="text-gray-300 text-sm">
              Model Training • Feature Engineering • Model Evaluation • Hyperparameter Tuning • Pipelines
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="glass p-8 rounded-xl border border-yellow-400/20">
            <h4 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
              <FaCode /> Backend & APIs
            </h4>
            <p className="text-gray-300 text-sm">
              Django • Flask • FastAPI • REST APIs • API Integration
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="glass p-8 rounded-xl border border-cyan-400/20">
            <h4 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
              <FaDatabase /> Data Systems
            </h4>
            <p className="text-gray-300 text-sm">
              SQL • Pandas • NumPy • Data Pipelines • Data Cleaning
            </p>
          </motion.div>

        </div>

        {/* ================= WORKFLOW ================= */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
            <FaTools /> Workflow & Deployment
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "Model Deployment",
              "End-to-End ML Pipelines",
              "API Integration",
              "Dashboard Integration",
              "Streamlit Apps",
              "Vercel Deployment",
              "Git & GitHub",
              "Postman",
            ].map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 rounded-full bg-white/5 border border-green-400/30 text-sm"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ================= 🔥 ADVANCED ARCHITECTURE ================= */}
        <div className="mb-24 text-center">

          <h3 className="text-2xl font-bold text-pink-400 mb-12 flex justify-center items-center gap-2">
            <FaRocket /> System Architecture
          </h3>

          <div className="flex flex-col items-center gap-6">

            {/* MAIN FLOW */}
            <div className="flex flex-wrap justify-center items-center gap-4">

              {["Data", "Cleaning", "Feature Eng"].map((step, i) => (
                <div key={i} className="flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="px-5 py-3 rounded-xl bg-white/5 border border-pink-400/30 text-sm"
                  >
                    {step}
                  </motion.div>
                  <span className="mx-3 text-pink-400">→</span>
                </div>
              ))}

              {/* CORE MODEL */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 rounded-xl bg-pink-500/10 border border-pink-400 text-sm font-semibold"
              >
                Core ML Model
              </motion.div>

            </div>

            {/* BRANCHES */}
            <div className="flex gap-10 justify-center">

              <motion.div className="px-4 py-2 bg-white/5 border border-blue-400/30 rounded-lg text-sm">
                NLP Pipeline
              </motion.div>

              <motion.div className="px-4 py-2 bg-white/5 border border-cyan-400/30 rounded-lg text-sm">
                Computer Vision
              </motion.div>

            </div>

            {/* FINAL FLOW */}
            <div className="flex flex-wrap justify-center items-center gap-4">

              {["API", "Dashboard", "Decision"].map((step, i) => (
                <div key={i} className="flex items-center">
                  <span className="mx-3 text-pink-400">→</span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="px-5 py-3 rounded-xl bg-white/5 border border-pink-400/30 text-sm"
                  >
                    {step}
                  </motion.div>
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}