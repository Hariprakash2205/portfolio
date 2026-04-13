"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "SmartRx : AI Prescription Analyzer and Digitization",
      desc: "End-to-end healthcare solution using OCR and NLP to extract medicines and dosage from handwritten prescriptions, with validation logic to improve patient safety.",
      tech: [
        "Python",
        "OCR",
        "NLP",
        "OpenCV",
        "Tesseract",
        "NLTK",
        "spaCy",
        "Pandas",
        "NumPy",
        "AI Pipeline",
        "Flask / Streamlit",
        "GitHub",
      ],
      github:
        "https://github.com/Hariprakash2205/SmartRx-AI-Prescription-Analyzer-and-Digitization.git",
    },
    {
      title: "Housing Price Prediction",
      desc: "Built a machine learning pipeline using regression models to predict real estate prices based on user inputs and market data.",
      tech: ["Python", "Machine Learning", "Regression", "Data Analysis"],
      github:
        "https://github.com/Hariprakash2205/Housing-Price-Prediction-.git",
    },
    {
      title: "SmartStock : Stock Inventory and Management System",
      desc: "Full-stack inventory management system to track stock levels, manage requests, and improve operational efficiency with real-time insights.",
      tech: [
        "Vue.js",
        "Vite",
        "Tailwind CSS",
        "Vue Router",
        "Axios",
        "Django",
        "Django REST",
        "SQLite",
        "REST API",
        "Postman",
        "GitHub",
      ],
      github:
        "https://github.com/Hariprakash2205/SmartStock-Stock-Inventory-and-Management-System.git",
    },
    {
      title: "Stock Market Analysis",
      desc: "Time-series analysis using ARIMA and XGBoost models to predict market trends and support financial decision-making.",
      tech: ["R", "ARIMA", "XGBoost", "Time Series"],
      github:
        "https://github.com/Hariprakash2205/Stock-Market-Analysis-.git",
    },
  ];

  return (
    <section id="projects" className="relative text-white py-20 px-6 overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20 blur-2xl"></div>

      <div className="relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-cyan-400 glow-text"
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card glass p-6 flex flex-col transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
            >

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="glass px-3 py-1 rounded-full text-xs text-gray-300 hover:text-white hover:border-cyan-400 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm text-white border border-cyan-400/40 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30 transition"
              >
                <FaGithub /> View Code
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}