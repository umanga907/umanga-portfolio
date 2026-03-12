import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionLabel label="About" id="about-heading" />
      <SectionTitle>Building production frontend for 9+ years</SectionTitle>

      <div className="max-w-3xl space-y-6 text-base leading-relaxed md:text-lg">
        <p>
          I spent{" "}
          <span className="text-[var(--color-text-primary)]">6+ years</span> as
          the primary frontend engineer for a logistics SaaS platform serving{" "}
          <span className="text-[var(--color-text-primary)]">
            100+ carriers across the U.S.
          </span>
          , where I built the entire React component library, SCSS design system,
          and developer tooling from scratch across{" "}
          <span className="text-[var(--color-text-primary)]">
            130+ product screens
          </span>
          .
        </p>

        <p>
          I specialize in{" "}
          <span className="text-[var(--color-text-primary)]">
            React.js, TypeScript, SCSS/SASS architecture, and CSS Custom
            Properties
          </span>
          . I&apos;ve shipped dark mode across an entire platform, removed legacy
          dependencies like jQuery and react-bootstrap, resolved frontend security
          vulnerabilities (SSTI, NoSQL Injection, Prototype Pollution), and
          integrated AI-assisted development workflows using Cursor and MCP
          servers into team processes.
        </p>

        <p>
          I turn complex product requirements into{" "}
          <span className="text-[var(--color-text-primary)]">
            clean, maintainable, pixel-perfect UI
          </span>
          .
        </p>
      </div>
    </SectionWrapper>
  );
}
