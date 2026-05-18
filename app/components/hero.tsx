"use client";

import { motion } from "motion/react";

const codeSnippet = `const DesignSystem = () => {
  const theme = useTheme();
  const components = useRegistry();
  
  return (
    <ThemeProvider mode={theme}>
      <ComponentLibrary
        components={components}
        tokens={theme.tokens}
        darkMode
      />
    </ThemeProvider>
  );
};`;

const stagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/4 select-none opacity-[0.04] lg:block"
      >
        <pre className="font-mono text-sm leading-relaxed text-[var(--color-text-primary)]">
          {codeSnippet}
        </pre>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[128px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-4 font-mono text-sm text-[var(--color-accent)]"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-4 text-5xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-6xl md:text-7xl"
        >
          Umanga Deep Shrestha
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-2 text-2xl font-semibold text-[var(--color-text-secondary)] sm:text-3xl"
        >
          Senior Frontend Engineer
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-3 text-lg text-[var(--color-text-muted)] md:text-xl"
        >
          I build frontend systems that scale.
        </motion.p>

        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-10 font-mono text-sm text-[var(--color-text-muted)]"
        >
          React &middot; Design Systems &middot; SCSS Architecture &middot; 9+
          years
        </motion.p>

        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
