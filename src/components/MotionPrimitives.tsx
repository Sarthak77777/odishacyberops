"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 18, filter: "blur(10px)" }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function CyberCard({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const content = (
    <motion.div
      className={`glass-card premium-card rounded-[28px] ${className}`}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );

  if (!href) return content;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60">
      {content}
    </a>
  );
}

export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-70" />
      <div className="absolute inset-0 scanline opacity-40" />
      <motion.div
        className="absolute -left-24 top-20 h-28 w-[55vw] -rotate-12 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent blur-2xl"
        animate={{ x: ["-8%", "12%", "-8%"], opacity: [0.35, 0.72, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-18%] top-44 h-32 w-[62vw] rotate-12 bg-gradient-to-r from-transparent via-fuchsia-300/10 to-transparent blur-2xl"
        animate={{ x: ["8%", "-10%", "8%"], opacity: [0.28, 0.62, 0.28] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 left-[18%] h-24 w-[48vw] -rotate-6 bg-gradient-to-r from-transparent via-emerald-300/8 to-transparent blur-2xl"
        animate={{ x: ["-6%", "10%", "-6%"], opacity: [0.24, 0.52, 0.24] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
    </div>
  );
}

export function StatusPill({ children, tone = "cyan" }: { children: ReactNode; tone?: "cyan" | "red" | "emerald" | "fuchsia" }) {
  const tones = {
    cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-200",
    red: "border-red-300/25 bg-red-400/10 text-red-200",
    emerald: "border-emerald-300/25 bg-emerald-300/10 text-emerald-200",
    fuchsia: "border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-200",
  };

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] ${tones[tone]}`}>
      <span className="live-dot h-2 w-2 rounded-full bg-current" />
      {children}
    </span>
  );
}
