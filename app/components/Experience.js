"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Data Analyst",
      company: "Aosta India Pvt Ltd",
      desc: "Built interactive dashboards using healthcare datasets and developed an AI chatbot using Python, BERT, and OCR for disease prediction.",
      link: "https://www.linkedin.com/posts/hari-prakash-k-55b3b0282_internshipexperience-dataanalyst-medicalchatbot-activity-7338545712747450369-FTiZ",
    },
    {
      role: "Digital Campaign Analyst",
      company: "PEN India Pvt Ltd",
      desc: "Executed data-driven marketing campaigns improving engagement by 35% and automated performance tracking using Excel VBA.",
      link: "https://www.linkedin.com/posts/hari-prakash-k-55b3b0282_internshipexperience-campaignanalytics-learningbydoing-activity-7317909004716777476-Q7rR",
    },
    {
      role: "Power BI Intern",
      company: "Amypo Pvt Ltd",
      desc: "Developed advanced dashboards and visualizations for business insights and reporting.",
      link: "https://www.linkedin.com/posts/hari-prakash-k-55b3b0282_digitaltransformation-businessintelligence-activity-7310671372001701891-yzx9",
    },
  ];

  return (
    <section className="relative text-white py-20 px-6 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 blur-2xl"></div>

      <div className="relative z-10">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16 glow-text">
          Experience
        </h2>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">

          {/* Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-purple-500/30"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12"
              >

                {/* Dot */}
                <div className="absolute left-2 top-2 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/40"></div>

                {/* Card */}
                <div className="card glass neon-border-hover p-6 flex flex-col gap-3">

                  {/* Role */}
                  <h3 className="text-xl font-semibold text-purple-400">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <p className="text-gray-300">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.desc}
                  </p>

                  {/* 🔥 Certification Button */}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white border border-purple-500/40 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition w-fit"
                  >
                    Certification <FaExternalLinkAlt size={12} />
                  </a>

                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}