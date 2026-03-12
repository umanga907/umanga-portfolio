"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "./section-wrapper";

const stats = [
  { value: 9, suffix: "+", label: "Years Experience" },
  { value: 8000, suffix: "+", label: "GitHub Contributions" },
  { value: 81, suffix: "+", label: "Reusable Components" },
  { value: 130, suffix: "+", label: "Product Screens" },
  { value: 23, suffix: "", label: "Freelance Projects" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="stats" className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-5xl px-6"
      >
        <SectionLabel label="Impact" />

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-mono text-4xl font-bold text-[var(--color-text-primary)] md:text-5xl">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
