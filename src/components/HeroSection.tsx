"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block bg-cyber-dark border border-cyber-green/30 rounded-lg overflow-hidden w-full max-w-2xl">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-cyber-green/10 border-b border-cyber-green/20">
              <div className="w-3 h-3 rounded-full bg-cyber-red" />
              <div className="w-3 h-3 rounded-full bg-cyber-yellow" />
              <div className="w-3 h-3 rounded-full bg-cyber-green" />
              <span className="text-xs text-gray-500 ml-2">root@portfolio:~</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 text-left font-mono text-sm">
              <p className="text-gray-500">
                <span className="text-cyber-green">$</span> whoami
              </p>
              <motion.h1
                className="text-3xl md:text-5xl font-bold text-cyber-green glow-green my-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                CyberSec Pro
              </motion.h1>
              <p className="text-gray-500">
                <span className="text-cyber-green">$</span> cat role.txt
              </p>
              <div className="text-lg md:text-xl text-cyber-blue mt-1 mb-3">
                <TypeAnimation
                  sequence={[
                    "Penetration Tester",
                    2000,
                    "Security Analyst",
                    2000,
                    "Bug Bounty Hunter",
                    2000,
                    "CTF Player",
                    2000,
                    "Ethical Hacker",
                    2000,
                  ]}
                  repeat={Infinity}
                  speed={50}
                />
              </div>
              <p className="text-gray-500">
                <span className="text-cyber-green">$</span> cat mission.txt
              </p>
              <p className="text-gray-400 mt-1">
                Securing the digital world, one vulnerability at a time.
                <span className="cursor-blink" />
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-cyber-green/10 border border-cyber-green/50 text-cyber-green rounded hover:bg-cyber-green/20 transition-all duration-300 animate-pulse-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-cyber-blue/10 border border-cyber-blue/50 text-cyber-blue rounded hover:bg-cyber-blue/20 transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="#skills"
            className="px-6 py-3 bg-cyber-purple/10 border border-cyber-purple/50 text-cyber-purple rounded hover:bg-cyber-purple/20 transition-all duration-300"
          >
            My Skills
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyber-green/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyber-green/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
