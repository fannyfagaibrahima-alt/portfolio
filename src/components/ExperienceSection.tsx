"use client";

import { motion } from "framer-motion";
import { defaultExperiences, defaultCertifications } from "@/lib/data";

const typeIcons: Record<string, string> = {
  work: "💼",
  ctf: "🏴",
  bugbounty: "🐛",
  education: "🎓",
};

const typeColors: Record<string, string> = {
  work: "border-cyber-blue",
  ctf: "border-cyber-red",
  bugbounty: "border-cyber-yellow",
  education: "border-cyber-purple",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="section-title text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Experience & Journey
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-green via-cyber-blue to-cyber-purple" />

              {defaultExperiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2 top-1 w-5 h-5 rounded-full border-2 ${typeColors[exp.type]} bg-cyber-black flex items-center justify-center text-xs`}>
                    {typeIcons[exp.type]}
                  </div>

                  <div className="bg-cyber-dark/60 border border-gray-800 rounded-lg p-5 hover:border-cyber-green/20 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-bold">{exp.title}</h3>
                      <span className="text-xs text-gray-500 bg-cyber-black px-2 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-cyber-green text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyber-yellow">📜</span> Certifications
            </h3>
            <div className="space-y-3">
              {defaultCertifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-cyber-dark/60 border border-gray-800 rounded-lg p-4 hover:border-cyber-yellow/30 transition-colors"
                >
                  <h4 className="text-white text-sm font-bold">{cert.name}</h4>
                  <p className="text-gray-500 text-xs mt-1">{cert.issuer} • {cert.date}</p>
                  {cert.verify_link && (
                    <a href={cert.verify_link} className="text-cyber-blue text-xs mt-2 inline-block hover:underline">
                      Verify →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
