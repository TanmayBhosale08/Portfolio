"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "12+", label: "Tools Mastered" },
];

const marqueeItems = [
  "GRAPHIC DESIGN",
  "EDITORIAL LAYOUT",
  "UI/UX DESIGN",
  "VIDEO EDITING",
  "BRANDING",
  "ILLUSTRATION",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-black-main pt-20">

      {/* ── Animated geometric background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #F5C400 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#050505_80%)]" />

        {/* Floating gold squares */}
        {[
          { size: 80, top: "12%", left: "8%", delay: 0, duration: 7 },
          { size: 40, top: "70%", left: "5%", delay: 1.5, duration: 9 },
          { size: 60, top: "20%", right: "10%", delay: 0.5, duration: 8 },
          { size: 20, top: "55%", right: "6%", delay: 2, duration: 6 },
          { size: 100, top: "75%", right: "15%", delay: 1, duration: 10 },
        ].map((sq, i) => (
          <motion.div
            key={i}
            className="absolute border border-gold/20"
            style={{
              width: sq.size,
              height: sq.size,
              top: sq.top,
              left: (sq as any).left,
              right: (sq as any).right,
            }}
            animate={{ y: [0, -16, 0], rotate: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: sq.duration, delay: sq.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Diagonal accent lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${i * 15}%`} y1="0%"
              x2={`${i * 15 + 30}%`} y2="100%"
              stroke="#F5C400" strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center pb-32">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-gold font-montserrat tracking-[0.3em] uppercase text-sm font-bold">
            Graphic Designer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-anton text-white mb-6 leading-[0.9] tracking-tight"
        >
          EMBRACE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600 drop-shadow-[0_0_20px_rgba(245,196,0,0.4)]">
            THE JOURNEY
          </span>
        </motion.h1>

        {/* ── Marquee Ticker ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.9 }}
          className="w-full max-w-2xl overflow-hidden border-y border-white/10 py-3 mb-8"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap w-max"
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="text-xs font-montserrat uppercase tracking-[0.25em] text-gray-500 flex items-center gap-12">
                {item}
                <span className="text-gold text-[8px]">✦</span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0, ease: "easeOut" }}
          className="text-gray-400 max-w-xl mx-auto mb-10 font-montserrat text-lg leading-relaxed"
        >
          Specializing in transforming ideas into visually compelling designs across digital media, print, and branding.
        </motion.p>

        {/* ── Dual CTA ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Work
          </Button>
          <a
            href="/Open Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-10 py-4 border border-white/20 text-white font-anton uppercase tracking-wider text-lg hover:border-gold hover:text-gold transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.3, ease: "easeOut" }}
          className="flex gap-12 mt-12 md:mt-16 border-t border-white/5 pt-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-anton text-gold">{stat.value}</div>
              <div className="text-xs font-montserrat uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
