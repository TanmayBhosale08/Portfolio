"use client";

import Section, { FadeIn } from "../ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type Category = "ALL" | "BRANDING" | "EDITORIAL" | "UI/UX";

type Project = {
  title: string;
  category: Category;
  tags: string[];
  coverImage: string;
  images: string[];
  colSpan: string;
  aspect: string;
  description?: string;
};

const projects: Project[] = [
  {
    title: "BRAND IDENTITY SYSTEM",
    category: "BRANDING",
    tags: ["Logo", "Typography", "Color System"],
    description: "A comprehensive brand identity system built from the ground up — logo, color palette, type hierarchy, and usage guidelines.",
    coverImage: "/BIS.png",
    images: [
      "/brand 1.png", "/brand 2.png", "/brand 3.png",
      "/brand 4.png", "/brand 5.png", "/brand 6.png",
    ],
    colSpan: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    title: "EDITORIAL MAGAZINE LAYOUT",
    category: "EDITORIAL",
    tags: ["InDesign", "Print", "Pagination"],
    description: "Full editorial layout for a print magazine — spread design, typographic hierarchy, and precise pagination.",
    coverImage: "/EMI.png",
    images: [
      "/editorial1.png", "/editorial2.png", "/editorial3.png",
      "/editorial4.png", "/editorial5.png", "/editorial6.png",
      "/editorial7.png", "/editorial8.png", "/editorial9.png",
    ],
    colSpan: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    title: "UI/UX APP DESIGN",
    category: "UI/UX",
    tags: ["Figma", "Prototype", "Wireframe"],
    description: "End-to-end mobile app design — user flows, wireframes, high-fidelity screens, and interactive Figma prototypes.",
    coverImage: "/UAD.png",
    images: [
      "/UI 1.png", "/UI 2.png", "/UI 3.png", "/UI 4.png",
    ],
    colSpan: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    title: "SOCIAL MEDIA CAMPAIGN",
    category: "BRANDING",
    tags: ["Photoshop", "Illustrator", "Digital"],
    description: "A cohesive social media campaign spanning feed posts, stories, and reels — built for engagement and brand consistency.",
    coverImage: "/SMC.png",
    images: [
      "/sm 1.png", "/sm 2.png", "/sm 3.png",
      "/sm 4.png", "/sm 5.png", "/sm 6.png",
    ],
    colSpan: "col-span-1",
    aspect: "aspect-[16/7]",
  },
];

const FILTERS: Category[] = ["ALL", "BRANDING", "EDITORIAL", "UI/UX"];

const categoryAccentColor: Record<string, string> = {
  BRANDING: "from-[#F5C400]/20 via-transparent to-transparent",
  EDITORIAL: "from-white/10 via-transparent to-transparent",
  "UI/UX": "from-[#F5C400]/15 via-transparent to-transparent",
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("ALL");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = projects.filter(
    (p) => activeFilter === "ALL" || p.category === activeFilter
  );

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeProject]);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null || !activeProject) return;
    if (e.key === "ArrowRight") setLightboxIndex((i) => i === null ? null : Math.min(i + 1, activeProject.images.length - 1));
    if (e.key === "ArrowLeft") setLightboxIndex((i) => i === null ? null : Math.max(i - 1, 0));
    if (e.key === "Escape") setLightboxIndex(null);
  }, [lightboxIndex, activeProject]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Preload all images for a project so the gallery opens instantly
  const preloadImages = useCallback((project: Project) => {
    project.images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Preload all projects on mount so images are cached before user clicks
  useEffect(() => {
    projects.forEach(preloadImages);
  }, [preloadImages]);

  return (
    <>
      <Section id="projects" className="bg-black-main border-t border-white/5">
        {/* ── Section Header ── */}
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-gold font-montserrat tracking-[0.2em] uppercase text-sm mb-4 block">Selected Works</span>
              <h2 className="text-5xl md:text-7xl font-anton text-white">
                FEATURED{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                  PROJECTS
                </span>
              </h2>
            </div>
          </div>
        </FadeIn>

        {/* ── Filter Tabs ── */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 font-montserrat text-xs uppercase tracking-widest transition-all duration-300 border ${activeFilter === f
                  ? "bg-gold text-black border-gold"
                  : "border-white/10 text-gray-400 hover:border-gold/50 hover:text-white"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* ── Project Grid ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group cursor-pointer"
                onClick={() => setActiveProject(project)}
                onMouseEnter={() => preloadImages(project)}
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden border border-white/8 group-hover:border-gold/50 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(245,196,0,0.18)] bg-[#080808]"
                >
                  {/* Cover Image — object-contain so the full image is always visible */}
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Scrim gradient — only at bottom, never hides the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

                  {/* Top category accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryAccentColor[project.category] ?? ""} z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  {/* Hover gold frame */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-colors duration-500 z-20 pointer-events-none" />

                  {/* Info overlay — bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-30 pointer-events-none">
                    <span className="text-gold font-montserrat text-[10px] tracking-[0.25em] uppercase mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-anton text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-montserrat uppercase tracking-widest text-gray-400 border border-white/10 px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* View Gallery CTA */}
                    <span className="text-[10px] font-montserrat font-semibold uppercase tracking-wider text-gold flex items-center gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                      View Gallery
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>

                  {/* Image count badge */}
                  <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={10} className="text-gold" />
                    <span className="text-[9px] font-montserrat text-gray-300 uppercase tracking-widest">
                      {project.images.length} images
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* ── Gallery Modal ── */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 md:px-10 py-5 border-b border-white/8 shrink-0">
              <div>
                <p className="text-[10px] font-montserrat uppercase tracking-[0.25em] text-gold mb-0.5">
                  {activeProject.category}
                </p>
                <h3 className="text-xl md:text-2xl font-anton text-white tracking-wider">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close gallery"
                className="text-white hover:text-gold transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 border border-white/10 hover:border-gold/30"
              >
                <X size={20} />
              </button>
            </div>

            {/* Description */}
            {activeProject.description && (
              <div className="px-6 md:px-10 py-4 border-b border-white/5 shrink-0">
                <p className="text-sm font-montserrat text-gray-400 leading-relaxed max-w-2xl">
                  {activeProject.description}
                </p>
              </div>
            )}

            {/* Gallery grid — editorial magazine layout */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-[1400px] mx-auto">
                {activeProject.images.map((imgPath, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setLightboxIndex(idx)}
                    className="relative aspect-[3/4] overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(245,196,0,0.2)] group bg-black/30 cursor-zoom-in"
                  >
                    <img
                      src={imgPath}
                      alt={`${activeProject.title} — image ${idx + 1}`}
                      className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn size={20} className="text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute bottom-2 right-2 text-[9px] font-montserrat text-white/50 bg-black/50 px-1.5 py-0.5 rounded-sm">
                      {idx + 1}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Lightbox (full-screen single image) ── */}
      <AnimatePresence>
        {lightboxIndex !== null && activeProject && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 backdrop-blur-2xl"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
              className="absolute top-5 right-5 text-white hover:text-gold transition-colors p-2 bg-white/5 rounded-full border border-white/10 hover:border-gold/40 z-10"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i ?? 0) - 1); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors p-3 bg-white/5 rounded-full border border-white/10 hover:border-gold/40 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Next */}
            {lightboxIndex < activeProject.images.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i ?? 0) + 1); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors p-3 bg-white/5 rounded-full border border-white/10 hover:border-gold/40 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              src={activeProject.images[lightboxIndex]}
              alt={`${activeProject.title} — image ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[88vh] object-contain drop-shadow-[0_0_60px_rgba(245,196,0,0.12)] rounded-sm cursor-zoom-out"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {activeProject.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`transition-all duration-300 rounded-full ${i === lightboxIndex ? "w-4 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
