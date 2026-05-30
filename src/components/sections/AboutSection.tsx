"use client";

import Section, { FadeIn } from "../ui/Section";
import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years" },
  { value: "50+", label: "Projects" },
  { value: "12+", label: "Tools" },
];

export default function AboutSection() {
  return (
    <Section id="about" className="bg-black-sec border-t border-white/5 overflow-hidden">

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #F5C400 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* ── Left column — Profile photo ── */}
        <div className="relative">
          <FadeIn>
            <div className="max-w-md mx-auto">
              <div className="relative aspect-[3/4] w-full mb-6">
                <div className="absolute inset-0 bg-gold translate-x-4 translate-y-4" />
                <div className="absolute inset-0 border border-white/10 bg-black-main z-10 overflow-hidden">
                  <img
                    src="./profile pic.png"
                    alt="Tanmay Bhosale Portrait"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-main via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Name + title */}
              <div className="text-right pr-4 mb-6">
                <h3 className="text-2xl md:text-3xl font-anton text-white tracking-wider">TANMAY BHOSALE</h3>
                <p className="text-gold font-montserrat text-xs uppercase tracking-[0.25em] mt-1">Creative Designer</p>
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-3 divide-x divide-white/10 border border-white/10 bg-black-main">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col items-center py-4 px-2">
                    <span className="text-2xl font-anton text-gold">{s.value}</span>
                    <span className="text-[10px] font-montserrat uppercase tracking-widest text-gray-500 mt-0.5">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Right column — Content ── */}
        <div>
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-anton text-white mb-6">
              VISUAL <span className="text-gold">SOLUTIONS</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-gray-400 font-montserrat text-lg mb-6 leading-relaxed">
              I specialize in transforming ideas into visually compelling designs. My expertise spans digital media, print, branding, and editorial layout.
            </p>
            <p className="text-gray-400 font-montserrat text-lg mb-10 leading-relaxed">
              With a keen eye for detail and a deep understanding of design principles, I am dedicated to creating innovative and impactful visual solutions that effectively communicate the intended message.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="grid grid-cols-1 gap-8">
              <div className="border-l-2 border-gold pl-4 group hover:pl-6 transition-all duration-300">
                <h4 className="text-white font-anton text-xl mb-1">
                  AFFINITY X <span className="text-gold text-sm ml-2 font-montserrat tracking-widest">2024 — PRESENT</span>
                </h4>
                <p className="text-sm text-gray-400 font-montserrat mb-2 uppercase tracking-wider">Graphic Designer & Editorial</p>
                <p className="text-sm text-gray-500 font-montserrat">
                  Conceptualized and designed print pages and magazines for US clients, delivering editorial and pagination products to the highest professional standards.
                </p>
              </div>
              <div className="border-l-2 border-gold pl-4 group hover:pl-6 transition-all duration-300">
                <h4 className="text-white font-anton text-xl mb-1">
                  FREELANCE DESIGNER <span className="text-gold text-sm ml-2 font-montserrat tracking-widest">2023 — 2024</span>
                </h4>
                <p className="text-sm text-gray-400 font-montserrat mb-2 uppercase tracking-wider">Freelance Graphic Designing</p>
                <p className="text-sm text-gray-500 font-montserrat">
                  Created visually compelling designs for logos, T-shirts, banners, and posters tailored to each client's vision and brand identity.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </Section>
  );
}
