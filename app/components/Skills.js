"use client";

import { motion } from "framer-motion";
import {
  FaChartLine,
  FaFilter,
  FaSearch,
  FaCalculator,
  FaBrain,
  FaProjectDiagram,
  FaCogs,
  FaChartBar,
  FaChartPie,
  FaEye,
  FaCode,
  FaBug,
  FaPlug,
  FaDatabase,
  FaStream,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaStar,
} from "react-icons/fa";

export default function Skills() {
  const coreSkills = [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "Power BI",
  ];

  const skillCategories = [
    {
      category: "Data & Analysis",
      color: "text-green-400",
      glow: "hover:shadow-green-400/30",
      skills: [
        { name: "Data Analysis", icon: <FaChartLine size={26} /> },
        { name: "Data Cleaning", icon: <FaFilter size={26} /> },
        { name: "EDA", icon: <FaSearch size={26} /> },
        { name: "Statistical Analysis", icon: <FaCalculator size={26} /> },
        { name: "Feature Engineering", icon: <FaFilter size={26} /> },
      ],
    },
    {
      category: "Machine Learning",
      color: "text-purple-400",
      glow: "hover:shadow-purple-400/30",
      skills: [
        { name: "Supervised Learning", icon: <FaBrain size={26} /> },
        { name: "Unsupervised Learning", icon: <FaProjectDiagram size={26} /> },
        { name: "Model Optimization", icon: <FaCogs size={26} /> },
        { name: "Predictive Modeling", icon: <FaBrain size={26} /> },
      ],
    },
    {
      category: "Visualization",
      color: "text-blue-400",
      glow: "hover:shadow-blue-400/30",
      skills: [
        { name: "Data Visualization", icon: <FaChartBar size={26} /> },
        { name: "Dashboard Design", icon: <FaChartPie size={26} /> },
        { name: "Data Storytelling", icon: <FaEye size={26} /> },
        { name: "KPI Tracking", icon: <FaChartLine size={26} /> },
      ],
    },
    {
      category: "Development",
      color: "text-yellow-400",
      glow: "hover:shadow-yellow-400/30",
      skills: [
        { name: "Clean Code", icon: <FaCode size={26} /> },
        { name: "Debugging", icon: <FaBug size={26} /> },
        { name: "API Integration", icon: <FaPlug size={26} /> },
        { name: "End-to-End Projects", icon: <FaCode size={26} /> },
      ],
    },
    {
      category: "Data Engineering",
      color: "text-cyan-400",
      glow: "hover:shadow-cyan-400/30",
      skills: [
        { name: "Data Transformation", icon: <FaDatabase size={26} /> },
        { name: "ETL Concepts", icon: <FaStream size={26} /> },
        { name: "Structured Data Handling", icon: <FaDatabase size={26} /> },
        { name: "Data Pipelines", icon: <FaStream size={26} /> },
      ],
    },
    {
      category: "Professional Skills",
      color: "text-pink-400",
      glow: "hover:shadow-pink-400/30",
      skills: [
        { name: "Problem Solving", icon: <FaLightbulb size={26} /> },
        { name: "Analytical Thinking", icon: <FaBrain size={26} /> },
        { name: "Communication", icon: <FaComments size={26} /> },
        { name: "Team Collaboration", icon: <FaUsers size={26} /> },
        { name: "Leadership", icon: <FaUsers size={26} /> },
      ],
    },
  ];

  return (
    <section className="relative text-white py-24 px-6 overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 blur-2xl"></div>

      <div className="relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20 glow-text"
        >
          Skills
        </motion.h2>

        {/* 🔥 CORE SKILLS */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h3 className="text-xl text-purple-400 mb-6 flex justify-center items-center gap-2">
            <FaStar /> Core Expertise
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {coreSkills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, rotate: 2 }}
                className="px-8 py-4 rounded-2xl text-lg bg-white/5 border border-purple-500/30 shadow-xl shadow-purple-500/30 backdrop-blur-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= CATEGORY BLOCKS ================= */}
        <div className="max-w-6xl mx-auto space-y-14">
          {skillCategories.map((category, i) => (
            <div key={i} className="glass p-6 rounded-2xl border border-white/10">

              {/* Category Title */}
              <h3 className={`text-2xl font-bold mb-6 ${category.color}`}>
                {category.category}
              </h3>

              {/* Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.08, rotate: 1 }}
                    className={`bg-white/5 p-5 rounded-xl flex flex-col items-center gap-3 text-center backdrop-blur-md border border-white/10
                    transition duration-300 hover:shadow-xl ${category.glow}`}
                  >
                    {/* Icon */}
                    <div className={`${category.color} text-2xl`}>
                      {skill.icon}
                    </div>

                    {/* Text */}
                    <p className="text-gray-200 text-sm">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}