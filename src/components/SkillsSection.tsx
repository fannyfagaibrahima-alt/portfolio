"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { defaultSkills, categoryColors, categoryLabels } from "@/lib/data";
import { Skill, SkillCategory } from "@/types";
import { supabase } from "@/lib/supabase";

const categories: SkillCategory[] = [
  "offensive", "defensive", "networking", "tools", "programming", "cloud", "forensics", "compliance",
];

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>(defaultSkills);
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");
  const [isAdding, setIsAdding] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: "", category: "offensive" as SkillCategory, level: 50 });

  // Try to fetch skills from Supabase on mount
  useEffect(() => {
    async function fetchSkills() {
      try {
        const { data, error } = await supabase
          .from("skills")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error && data && data.length > 0) {
          setSkills(data);
        }
      } catch {
        // Supabase not configured — use default data
      }
    }
    fetchSkills();
  }, []);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const handleAddSkill = async () => {
    const skill: Skill = {
      id: Date.now().toString(),
      name: newSkill.name,
      category: newSkill.category,
      level: newSkill.level,
      created_at: new Date().toISOString(),
    };

    // Try to save to Supabase
    try {
      const { error } = await supabase.from("skills").insert([skill]);
      if (error) throw error;
    } catch {
      // Supabase not configured — save locally only
    }

    setSkills((prev) => [skill, ...prev]);
    setNewSkill({ name: "", category: "offensive", level: 50 });
    setIsAdding(false);
  };

  return (
    <section id="skills" className="py-20 px-4 relative hex-pattern">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            className="section-title text-white !mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Skills & Arsenal
          </motion.h2>
          <motion.button
            onClick={() => setIsAdding(!isAdding)}
            className="px-4 py-2 bg-cyber-green/10 border border-cyber-green/50 text-cyber-green rounded text-sm hover:bg-cyber-green/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAdding ? "✕ Cancel" : "+ Add Skill"}
          </motion.button>
        </div>

        {/* Add Skill Form */}
        {isAdding && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 bg-cyber-dark/80 border border-cyber-green/20 rounded-lg p-6"
          >
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Skill Name</label>
                <input
                  type="text"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  placeholder="e.g. Reverse Engineering"
                  className="w-full bg-cyber-black border border-cyber-green/30 rounded px-3 py-2 text-cyber-green text-sm focus:border-cyber-green focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Category</label>
                <select
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value as SkillCategory })}
                  className="w-full bg-cyber-black border border-cyber-green/30 rounded px-3 py-2 text-cyber-green text-sm focus:border-cyber-green focus:outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{categoryLabels[cat]}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">
                  Proficiency: {newSkill.level}%
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={newSkill.level}
                  onChange={(e) => setNewSkill({ ...newSkill, level: parseInt(e.target.value) })}
                  className="w-full accent-cyber-green mt-2"
                />
              </div>
            </div>
            <button
              onClick={handleAddSkill}
              disabled={!newSkill.name}
              className="mt-4 px-6 py-2 bg-cyber-green/20 border border-cyber-green text-cyber-green rounded hover:bg-cyber-green/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              $ add_skill --save
            </button>
          </motion.div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1 rounded text-xs border transition-all ${
              activeCategory === "all"
                ? "bg-cyber-green/20 border-cyber-green text-cyber-green"
                : "border-gray-700 text-gray-500 hover:border-gray-500"
            }`}
          >
            All ({skills.length})
          </button>
          {categories.map((cat) => {
            const count = skills.filter((s) => s.category === cat).length;
            if (count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded text-xs border transition-all ${
                  activeCategory === cat
                    ? `${categoryColors[cat]} border-current`
                    : "border-gray-700 text-gray-500 hover:border-gray-500"
                }`}
              >
                {categoryLabels[cat]} ({count})
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-cyber-dark/60 border border-gray-800 rounded-lg p-4 hover:border-cyber-green/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {skill.icon && <span className="text-lg">{skill.icon}</span>}
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded border ${categoryColors[skill.category]}`}>
                  {skill.category}
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full rounded-full skill-bar"
                  style={{
                    background: `linear-gradient(90deg, #00ff41, #00d4ff)`,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-600">0%</span>
                <span className="text-xs text-cyber-green">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
