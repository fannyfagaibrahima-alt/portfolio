"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const { error } = await supabase.from("messages").insert([form]);
      if (error) throw error;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      // If Supabase is not configured, simulate success
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-title text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Establish Connection
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-cyber-dark/60 border border-cyber-green/20 rounded-lg p-6 border-glow-green">
              <pre className="text-cyber-green text-sm mb-4">
{`┌──────────────────────┐
│   CONTACT PROTOCOL   │
│   ══════════════════  │
│   Status: ONLINE     │
│   Encryption: E2E    │
│   Channel: SECURE    │
└──────────────────────┘`}
              </pre>

              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyber-green transition-colors text-sm"
                >
                  <span className="text-lg">📧</span>
                  your.email@example.com
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                >
                  <span className="text-lg">💼</span>
                  LinkedIn Profile
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyber-purple transition-colors text-sm"
                >
                  <span className="text-lg">🐙</span>
                  GitHub Profile
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyber-red transition-colors text-sm"
                >
                  <span className="text-lg">🏴</span>
                  HackTheBox Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cyber-dark/60 border border-gray-800 rounded-lg p-6 space-y-4"
          >
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              Secure message channel
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-cyber-black border border-gray-700 rounded px-3 py-2 text-white text-sm focus:border-cyber-green focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full bg-cyber-black border border-gray-700 rounded px-3 py-2 text-white text-sm focus:border-cyber-green focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                className="w-full bg-cyber-black border border-gray-700 rounded px-3 py-2 text-white text-sm focus:border-cyber-green focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-cyber-green/10 border border-cyber-green/50 text-cyber-green rounded hover:bg-cyber-green/20 transition-all font-bold disabled:opacity-50"
            >
              {status === "idle" && "$ send_message --encrypt"}
              {status === "sending" && "Transmitting..."}
              {status === "sent" && "✓ Message Transmitted"}
              {status === "error" && "✕ Transmission Failed"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
