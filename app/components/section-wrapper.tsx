"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`py-24 md:py-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        className="mx-auto max-w-5xl px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionLabelProps {
  label: string;
  id?: string;
}

export function SectionLabel({ label, id }: SectionLabelProps) {
  return (
    <p
      id={id}
      className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]"
    >
      {label}
    </p>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-12 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl">
      {children}
    </h2>
  );
}
