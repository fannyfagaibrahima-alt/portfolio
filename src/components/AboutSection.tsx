"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "CTF Challenges", value: "100+", icon: "🏴" },
  { label: "Vulnerabilities Found", value: "50+", icon: "🐛" },
  { label: "Security Tools", value: "20+", icon: "🔧" },
  { label: "Certifications", value: "3+", icon: "📜" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="section-title text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ASCII Art / Avatar */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-2 border-cyber-green/30 flex items-center justify-center bg-cyber-dark/50 animate-pulse-glow">
                <pre className="text-cyber-green text-xs leading-tight">
{`    ╔══════════╗
    ║  ◉    ◉  ║
    ║    ▽▽    ║
    ║  ╰────╯  ║
    ╚══════════╝
     ╔════════╗
     ║ HACKER ║
     ╚════════╝`}
                </pre>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyber-green rounded-full animate-ping" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyber-blue rounded-full animate-ping animation-delay-1000" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-cyber-dark/50 border border-cyber-green/20 rounded-lg p-6 border-glow-green">
              <p className="text-gray-300 leading-relaxed mb-4">
                <span className="text-cyber-green font-bold">{">"}</span> Passionate cybersecurity student with a strong foundation in
                offensive and defensive security. I thrive on solving complex security
                challenges, participating in CTF competitions, and continuously expanding
                my knowledge of the threat landscape.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <span className="text-cyber-green font-bold">{">"}</span> My approach combines technical expertise with creative
                problem-solving. I believe in ethical hacking and responsible disclosure
                to make the digital world safer for everyone.
              </p>
              <p className="text-gray-400 text-sm terminal-prompt">
                Always learning, always hacking (ethically) 🔐
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-cyber-dark/50 border border-cyber-green/10 rounded-lg p-3 text-center hover:border-cyber-green/30 transition-colors"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-cyber-green font-bold text-lg">{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
