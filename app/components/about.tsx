import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionLabel label="About" id="about-heading" />
      <SectionTitle>Designing in code for 11 years</SectionTitle>

      <div className="max-w-3xl space-y-6 text-base leading-relaxed md:text-lg">
        <p>
          For{" "}
          <span className="text-[var(--color-text-primary)]">6+ years</span> I
          directed UI/UX for a logistics SaaS platform used by{" "}
          <span className="text-[var(--color-text-primary)]">
            500+ trucking companies across the U.S.
          </span>
          , where I built the React component library and SCSS design system
          from scratch and shipped{" "}
          <span className="text-[var(--color-text-primary)]">
            hundreds of operational screens
          </span>{" "}
          as one of its earliest and longest-tenured engineers.
        </p>

        <p>
          I specialize in{" "}
          <span className="text-[var(--color-text-primary)]">
            React, TypeScript, SCSS/SASS architecture, and CSS Custom
            Properties
          </span>
          . I&apos;ve shipped dark mode across an entire platform, removed legacy
          dependencies like jQuery and react-bootstrap, hardened frontend
          security with DOMPurify and dependency CVE remediation — and before
          leaving, I encoded the entire design system into Cursor rules the
          team shipped on-spec UI with.
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
