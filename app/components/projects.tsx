import { ExternalLink } from "lucide-react";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";

const projects = [
  {
    title: "Logistics TMS Frontend Platform",
    description:
      "Directed UI/UX of a drayage TMS used by 500+ trucking companies across the U.S. Built and maintained hundreds of operational screens: dispatcher board, load management, billing, driver planner, tracking, reports, email, and more. Top-5 contributor with 2,000+ commits over 6+ years.",
    tags: ["React", "SCSS", "Platform Engineering", "Complex UI"],
  },
  {
    title: "Design System & Component Library",
    description:
      "80+ reusable components from scratch: modals, data grids, custom selects, loaders, tooltips, chat UI, form components, icon library, dark mode toggle, route timeline indicators.",
    tags: ["React", "SCSS", "CSS Custom Properties", "Component Architecture"],
  },
  {
    title: "Design System → Cursor Rules",
    description:
      "Encoded the entire design language into Cursor rules that generated on-spec UI — adopted across the team. Paired with an Electron app giving product managers one-click local setup, so they could ship UI changes directly from Cursor instead of Figma round-trips.",
    tags: ["AI-Assisted", "Cursor", "Design Ops", "Electron"],
  },
  {
    title: "Platform-Wide Dark Mode",
    description:
      "Dark mode across the entire platform using CSS Custom Properties with theme switching, third-party component theming, and cross-component consistency.",
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
    title: "jQuery Removal & Security Hardening",
    description:
      "Removed jQuery across 7 phases (29+ files). Enforced XSS-safe rendering with DOMPurify across rich-text surfaces; dependency CVE remediation (CVE-2025-7783, CVE-2023-45133) coordinated with backend and devops.",
    tags: ["Refactoring", "Security", "Migration", "Code Quality"],
  },
  {
    title: "Saurav Decor",
    link: "https://sauravdecor.com",
    description:
      "Full-stack business site designed and built end-to-end in TypeScript: Next.js, Prisma, admin dashboard, transactional email. From brand to database, one person.",
    tags: ["TypeScript", "Next.js", "Prisma", "Design in Code"],
  },
  {
    title: "Esther Perez — Fine-Art Gallery",
    link: "https://estherperez.com",
    description:
      "Custom editorial gallery site for a fine-art photographer: typography-first layout, bespoke framing plugin, art direction to production by one person. Zero templates.",
    tags: ["Web Design", "Typography", "Editorial", "WordPress"],
  },
  {
    title: "Arcadian Sky — Literary Press Concept",
    link: "https://arcadian-sky-concept.vercel.app",
    description:
      "Homepage concept for a literary brand: starfield, engraved-tree hero, serif typography — calm built structurally, not decoratively.",
    tags: ["Concept", "Art Direction", "Typography", "Motion"],
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
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-accent)]"
                >
                  {project.title}
                  <ExternalLink className="h-4 w-4 text-[var(--color-text-muted)]" />
                </a>
              ) : (
                project.title
              )}
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
