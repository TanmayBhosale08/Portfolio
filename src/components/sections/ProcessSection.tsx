"use client";

import Section, { FadeIn } from "../ui/Section";
import { motion } from "framer-motion";
import { Compass, Palette, Film, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    phase: "DISCOVER",
    title: "Creative Ideation",
    icon: Compass,
    description: "I begin by understanding your brand vision, core objectives, and target audience. Through detailed brainstorming, conceptual moodboards, and reference research, I establish a cohesive creative strategy.",
    deliverables: ["Moodboards & References", "Creative Briefs", "Visual Direction"]
  },
  {
    number: "02",
    phase: "DESIGN",
    title: "Visual Craftsmanship",
    icon: Palette,
    description: "Transforming concepts into high-end graphic assets, editorial layouts, and premium branding. I focus on harmonious color theories, precise typographic hierarchy, and custom Figma UI/UX designs.",
    deliverables: ["Branding & Logo Systems", "Editorial & Magazine Layouts", "UI/UX Figma Prototypes"]
  },
  {
    number: "03",
    phase: "MOTION",
    title: "Dynamic Storytelling",
    icon: Film,
    description: "Bringing static layouts to life through professional video editing and modern motion graphics. I compile captivating video sequences and visual effects to create highly engaging brand narratives.",
    deliverables: ["Video Editing (Premiere Pro)", "Motion Graphics Assets", "Interactive Screen Transitions"]
  },
  {
    number: "04",
    phase: "DELIVER",
    title: "Final Production",
    icon: CheckCircle2,
    description: "Polishing every detail to absolute perfection. I prep all visual designs for print-ready publications, high-fidelity digital display specs, or final export render formats, ensuring flawless delivery.",
    deliverables: ["Print-Ready InDesign Files", "High-Resolution Assets", "Final Render Deliverables"]
  }
];

export default function ProcessSection() {
  return (
    <Section id="process" className="bg-black-main border-t border-white/5">
      <FadeIn className="text-center mb-20">
        <span className="text-gold font-montserrat tracking-[0.2em] uppercase text-sm mb-4 block">How I Work</span>
        <h2 className="text-5xl md:text-7xl font-anton text-white">
          MY CREATIVE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">PROCESS</span>
        </h2>
      </FadeIn>

      <div className="relative">
        {/* Desktop Horizontal Connection Line */}
        <div className="absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-0 hidden lg:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <FadeIn key={step.number} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="p-8 border border-white/5 bg-black-sec/50 backdrop-blur-sm relative group hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(245,196,0,0.05)] transition-all duration-500 h-full flex flex-col"
                >
                  {/* Step Timeline Node */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-black-main border border-white/10 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-500">
                      <IconComponent className="text-gold w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="text-5xl font-anton text-white/5 group-hover:text-gold/10 transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-grow relative z-10">
                    <span className="text-gold font-montserrat text-xs tracking-[0.25em] uppercase mb-2 block">
                      {step.phase}
                    </span>
                    <h3 className="text-white font-anton text-2xl tracking-wider mb-4 group-hover:text-gold/90 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 font-montserrat text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Deliverables / Footer */}
                  <div className="mt-auto pt-6 border-t border-white/5 relative z-10">
                    <span className="text-[10px] font-montserrat uppercase tracking-widest text-gray-500 block mb-3">Key Focus Areas</span>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((item) => (
                        <li key={item} className="text-xs font-montserrat text-gray-400 flex items-center gap-2">
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Premium Gold Accent Glow Line at top of hover card */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/80 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
