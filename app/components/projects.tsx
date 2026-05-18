import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";

const projects = [
  {
    title: "Full-Stack Frontend Platform",
    description:
      "Primary frontend engineer for an entire logistics TMS. Built and maintained 130+ screens: dispatcher board, load management, billing, driver planner, tracking, reports, settings, email, carrier management, appointments, and more. 4,256 commits over 6+ years.",
    tags: ["React", "SCSS", "Platform Engineering", "Complex UI"],
  },
  {
    title: "Design System & Component Library",
    description:
      "81+ reusable components from scratch: modals, data grids, custom selects, loaders, tooltips, chat UI, form components, icon library, dark mode toggle, route timeline indicators.",
    tags: ["React", "SCSS", "CSS Custom Properties", "Component Architecture"],
  },
  {
    title: "Platform-Wide Dark Mode",
    description:
      "Dark mode across 130+ screens using CSS Custom Properties with theme switching, third-party component theming, and cross-component consistency.",
    tags: ["CSS Custom Properties", "SCSS", "Theming", "React"],
  },
  {
    title: "AI Hub & AI Workbench",
    description:
      "Built from scratch: AI Chat, AI Workbench, AI Agents, AI Control Tower with Document Validation, dashboard builder with drag-and-drop, SOP confirmation workflows.",
    tags: ["React", "Complex UI", "Chat Interface", "Drag & Drop"],
  },
  {
    title: "Embedded Email System",
    description:
      "Full email client UI: grid/card views, composer with rich text editor, tags/labels, mailbox settings, context menus, collapsible recipients.",
    tags: ["React", "Jodit", "Complex State", "UI Architecture"],
  },
  {
    title: "jQuery Removal & Security",
    description:
      "Removed jQuery across 7 phases (29+ files). Resolved SSTI, NoSQL Injection, Prototype Pollution, CVE-2025-7783.",
    tags: ["Refactoring", "Security", "Migration", "Code Quality"],
  },
];

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionLabel label="Projects" id="projects-heading" />
      <SectionTitle>What I&apos;ve built</SectionTitle>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-text-muted)]"
          >
            <h3 className="mb-3 text-lg font-semibold text-[var(--color-text-primary)]">
              {project.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
