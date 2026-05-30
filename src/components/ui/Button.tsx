"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-anton tracking-wider uppercase transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary:
      "bg-gold text-black-pure hover:bg-white hover:text-black-pure shadow-[0_0_15px_rgba(245,196,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]",
    outline:
      "border border-gold text-gold hover:bg-gold hover:text-black-pure",
    ghost: "text-white hover:text-gold",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-lg",
    lg: "px-12 py-5 text-xl",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-300 ease-out group-hover:w-full z-0" />
      )}
    </motion.button>
  );
}
