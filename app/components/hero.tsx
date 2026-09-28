// Entry animation is pure CSS (globals.css: .hero-line / .hero-title) so the
// hero paints before hydration. The h1 is the LCP element; it animates
// position only and is visible from the first frame.
export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-8 pt-36 md:pb-12 md:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-[0.12] blur-[128px]"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-5xl px-6">
        <p
          className="hero-line mb-6 font-mono text-sm text-[var(--color-text-muted)]"
          style={{ "--hero-i": 0 } as React.CSSProperties}
        >
          Umanga Deep Shrestha · Design Engineer · Kathmandu
        </p>

        <h1 className="hero-title mb-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--color-text-primary)] sm:text-5xl md:text-6xl">
          I design and build interfaces for people who work in them all day.
        </h1>

        <p
          className="hero-line mb-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]"
          style={{ "--hero-i": 2 } as React.CSSProperties}
        >
          Six years owning the UX and frontend of a US trucking platform used by 500+ companies. I design in code, from
          rough sketch to shipped screen.
        </p>

        <div
          className="hero-line flex flex-wrap items-center gap-x-6 gap-y-4"
          style={{ "--hero-i": 3 } as React.CSSProperties}
        >
          <a
            href="#work"
            className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            See the work
          </a>
          <a
            href="mailto:umanga.907@gmail.com"
            className="text-sm font-medium text-[var(--color-text-secondary)] underline-offset-4 transition-colors hover:text-[var(--color-text-primary)] hover:underline"
          >
            umanga.907@gmail.com
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Open to remote roles
          </span>
        </div>
      </div>
    </section>
  );
}
