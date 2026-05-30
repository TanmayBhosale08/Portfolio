"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 min-h-[100dvh] flex items-center overflow-hidden", className)}>
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}

export function FadeIn({ children, delay = 0, className }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
