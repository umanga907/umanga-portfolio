import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";

const projects = [
  {
    title: "Six years of DRAYOS",
    link: "/work/drayos",
    description:
      "Owned the frontend of a drayage TMS used by over 500 trucking companies, from a broken pile of CSS in 2019 to a component system with dark mode, virtualized grids and the design system encoded into Cursor rules. The case study rebuilds the dispatch board then and now, and lists the rest: an embedded email client, an AI workbench, the jQuery removal and security hardening.",
    tags: ["React", "SCSS", "Design System", "Cursor Rules"],
  },
  {
    title: "Interactive API docs concept",
    link: "https://searchapi-interactive-docs-beta.vercel.app/",
    description:
      "An API's documentation page rebuilt so it holds one live request: build it while you read, run it in place, explore the response as a tree with copyable paths. Generated from the OpenAPI spec, light and dark from one token set, every text pairing measured at AA. Stimulus and Tailwind.",
    tags: ["Stimulus", "Tailwind", "OpenAPI", "Accessibility"],
  },
  {
    title: "Tailwind style guide",
    link: "https://umanga907.github.io/tailwind-style-guide-sample/",
    description:
      "A design system documented the way engineers use one: tokens defined once in the Tailwind config, every component in every state including error, disabled and loading, copyable markup under each.",
    tags: ["Tailwind", "Design System", "Documentation"],
  },
  {
    title: "Saurav Decor",
    link: "https://sauravdecor.com",
    description:
      "Full-stack business site designed and built end-to-end in TypeScript: Next.js, Prisma, admin dashboard, transactional email. From brand to database, one person.",
    tags: ["TypeScript", "Next.js", "Prisma", "Design in Code"],
  },
  {
    title: "Esther Perez, fine-art gallery",
    link: "https://estherperez.com",
    description:
      "Custom editorial gallery site for a fine-art photographer: typography-first layout, bespoke framing plugin, art direction to production by one person. Zero templates.",
    tags: ["Web Design", "Typography", "Editorial", "WordPress"],
  },
  {
    title: "Arcadian Sky, literary press concept",
    link: "https://arcadian-sky-concept.vercel.app",
    description:
      "Homepage concept for a literary brand: starfield, engraved-tree hero, serif typography. Calm built structurally, not decoratively.",
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
              {project.link?.startsWith("/") ? (
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-accent)]"
                >
                  {project.title}
                  <ArrowRight className="h-4 w-4 text-[var(--color-text-muted)]" />
                </Link>
              ) : project.link ? (
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
