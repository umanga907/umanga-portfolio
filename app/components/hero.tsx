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

// Entry animation is pure CSS (globals.css: .hero-line / .hero-title) so the
// hero paints before hydration. The h1 is the LCP element — it animates
// position only and is visible from the first frame.
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
        <p
          className="hero-line mb-4 font-mono text-sm text-[var(--color-accent)]"
          style={{ "--hero-i": 0 } as React.CSSProperties}
        >
          Hello, I&apos;m
        </p>

        <h1 className="hero-title mb-4 text-5xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-6xl md:text-7xl">
          Umanga Deep Shrestha
        </h1>

        <p
          className="hero-line mb-2 text-2xl font-semibold text-[var(--color-text-secondary)] sm:text-3xl"
          style={{ "--hero-i": 2 } as React.CSSProperties}
        >
          Design Engineer
        </p>

        <p
          className="hero-line mb-3 text-lg text-[var(--color-text-muted)] md:text-xl"
          style={{ "--hero-i": 3 } as React.CSSProperties}
        >
          I design in code &mdash; from rough sketch to shipped screen.
        </p>

        <p
          className="hero-line mb-10 font-mono text-sm text-[var(--color-text-muted)]"
          style={{ "--hero-i": 4 } as React.CSSProperties}
        >
          React &middot; TypeScript &middot; Design Systems &middot; SCSS
          &middot; 11 years
        </p>

        <div
          className="hero-line flex flex-wrap gap-4"
          style={{ "--hero-i": 5 } as React.CSSProperties}
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
        </div>
      </div>
    </section>
  );
}
