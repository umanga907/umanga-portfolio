"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionLabel, SectionTitle } from "./section-wrapper";

const timeline = [
  {
    company: "PortPro",
    role: "Director of UI/UX",
    period: "Dec 2019 — Mar 2026",
    description:
      "Built the entire React component library, SCSS design system, and developer tooling from scratch. Primary frontend engineer across 130+ product screens spanning the entire platform. 4,256 commits over 6+ years.",
  },
  {
    company: "Freelance (Upwork)",
    role: "Frontend Developer",
    period: "2017 — 2022",
    description:
      "23 projects, $10K+ earned, 808 hours, near-perfect ratings. Figma to pixel-perfect code, responsive SaaS UIs, landing pages.",
  },
  {
    company: "Braindigit",
    role: "Frontend Developer",
    period: "2018",
    description:
      "Built 20+ responsive websites. Developed eLearning platform frontend.",
  },
  {
    company: "Jyaasa",
    role: "Frontend Developer",
    period: "2017 — 2018",
    description:
      "Custom modular frontend code, Ruby on Rails frontend integration, SASS.",
  },
  {
    company: "Pagoda Labs + Swiss Magic",
    role: "Web Developer",
    period: "2015 — 2016",
    description: "WordPress development, PHP, ecommerce (OpenCart).",
  },
];

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="experience" className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-5xl px-6"
      >
        <SectionLabel label="Experience" id="experience-heading" />
        <SectionTitle>Where I&apos;ve worked</SectionTitle>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]"
          />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -16 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -16 }
                }
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                className="relative pl-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-[6px] h-[15px] w-[15px] rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-background)]"
                />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                      {item.company}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {item.role}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-[var(--color-text-muted)]">
                    {item.period}
                  </p>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
