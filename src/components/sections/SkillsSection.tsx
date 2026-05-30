"use client";

import Section, { FadeIn } from "../ui/Section";
import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "Graphic Design", level: 95, category: "Core Expertise" },
  { name: "UI/UX Design", level: 92, category: "Figma & Prototyping" },
  { name: "Presentation Design", level: 90, category: "Slides & Decks" },
  { name: "Video Editing", level: 75, category: "Adobe Premiere Pro" },
];

const toolsData = [
  { name: "Adobe InDesign", pct: 99, category: "Editorial" },
  { name: "Figma", pct: 94, category: "UI/UX" },
  { name: "Adobe Photoshop", pct: 93, category: "Photo Edit" },
  { name: "Adobe Illustrator", pct: 86, category: "Vector" },
  { name: "Adobe Premiere Pro", pct: 80, category: "Video" },
  { name: "Canva", pct: 86, category: "Quick Design" },
];

// Radial arc SVG component
function RadialProgress({ pct, size = 56 }: { pct: number; size?: number }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#111" strokeWidth={4} />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="#F5C400" strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ - (circ * pct) / 100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function SkillsSection() {
  const [hoveredTool, setHoveredTool] = useState<{ name: string; pct: number } | null>(null);

  return (
    <Section id="skills" className="bg-black-sec border-y border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Skills + Tools ── */}
        <div>
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-anton text-white mb-4">
              THE <span className="text-gold">ARSENAL</span>
            </h2>
            <p className="text-gray-400 font-montserrat text-lg mb-10 leading-relaxed">
              Mastery over industry-standard tools allows for uncompromised creative execution across every medium.
            </p>
          </FadeIn>

          {/* Skill bars with category labels */}
          <div className="space-y-6 mb-12">
            {skills.map((skill, index) => (
              <FadeIn key={skill.name} delay={0.1 + index * 0.1}>
                <div className="flex justify-between items-end text-sm font-montserrat mb-2">
                  <div>
                    <span className="text-white uppercase tracking-wider">{skill.name}</span>
                    <span className="text-gray-600 text-[10px] uppercase tracking-widest ml-3">{skill.category}</span>
                  </div>
                  <span className="text-gold font-bold">{skill.level}%</span>
                </div>
                <div className="h-[2px] w-full bg-black-panel relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_10px_rgba(245,196,0,0.6)]"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Tool tags */}
          <FadeIn delay={0.7}>
            <h4 className="text-white font-anton text-xl mb-4">SOFTWARE & TOOLS</h4>
            <div className="flex flex-wrap gap-3">
              {toolsData.map((tool) => (
                <button
                  key={tool.name}
                  onMouseEnter={() => setHoveredTool(tool)}
                  onMouseLeave={() => setHoveredTool(null)}
                  className="px-4 py-2 border border-white/10 bg-black-main text-gray-400 font-montserrat text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer text-left"
                >
                  <span className="block">{tool.name}</span>
                  <span className="block text-[9px] text-gray-600 mt-0.5 tracking-wider">{tool.category}</span>
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ── Right: Interactive ring visualizer ── */}
        <div className="relative h-full min-h-[420px] hidden lg:flex items-center justify-center">
          <FadeIn delay={0.4}>
            <div className="relative w-96 h-96">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-gold/20 rounded-full"
              />

              {/* Dynamic SVG progress arc */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none drop-shadow-[0_0_12px_rgba(245,196,0,0.5)]"
                viewBox="0 0 384 384"
              >
                <motion.circle
                  cx="192" cy="192" r="191"
                  fill="none" stroke="#F5C400" strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: hoveredTool ? hoveredTool.pct / 100 : 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </svg>

              {/* Inner dashed ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-white/10 rounded-full border-dashed"
              />

              {/* Center circle */}
              <div className="absolute inset-16 border-2 border-gold/40 rounded-full flex flex-col items-center justify-center bg-black-main shadow-[0_0_50px_rgba(245,196,0,0.08)] overflow-hidden">
                <img
                  src="/logo.png"
                  alt="TB Logo"
                  className="w-24 h-24 object-contain transition-transform duration-500"
                  style={{
                    transform: hoveredTool ? "translateY(-12px)" : "translateY(0)",
                    mixBlendMode: "screen",
                  }}
                />

                <div className="absolute bottom-6 flex flex-col items-center">
                  {hoveredTool ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center"
                    >
                      <div className="text-gold font-anton text-2xl leading-none">{hoveredTool.pct}%</div>
                      <div className="text-[9px] text-gray-500 font-montserrat uppercase tracking-widest mt-1">
                        {hoveredTool.name}
                      </div>
                    </motion.div>
                  ) : (
                    <span className="text-[9px] text-gray-600 font-montserrat uppercase tracking-widest">Hover a tool</span>
                  )}
                </div>
              </div>

              {/* Floating accent dots */}
              <motion.div
                animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 w-3 h-3 bg-gold -translate-x-1/2 -translate-y-1/2"
              />
              <motion.div
                animate={{ x: [0, 18, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 right-0 w-3 h-3 bg-white -translate-y-1/2 translate-x-1/2"
              />
              <motion.div
                animate={{ y: [0, 14, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-1/2 w-2 h-2 border border-gold -translate-x-1/2 translate-y-1/2"
              />
            </div>
          </FadeIn>
        </div>

      </div>
    </Section>
  );
}
