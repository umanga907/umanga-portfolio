import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";
import { DispatchBoard } from "../work/drayos/dispatch-board";

type Project = {
  title: string;
  kind: "Case study" | "Live site" | "Concept";
  link: string;
  description: string;
  tags: string[];
};

const featured: Project = {
  title: "Six years of DRAYOS",
  kind: "Case study",
  link: "/work/drayos",
  description:
    "Owned the frontend of a drayage TMS used by over 500 trucking companies, from a broken pile of CSS in 2019 to a component system with dark mode, virtualized grids and the design system encoded into Cursor rules. The case study rebuilds the dispatch board then and now, and lists the rest: an embedded email client, an AI workbench, the jQuery removal and security hardening.",
  tags: ["React", "SCSS", "Design System", "Cursor Rules"],
};

const projects: Project[] = [
  {
    title: "Interactive API docs concept",
    kind: "Concept",
    link: "https://searchapi-interactive-docs-beta.vercel.app/",
    description:
      "An API's documentation page rebuilt so it holds one live request: build it while you read, run it in place, explore the response as a tree with copyable paths. Generated from the OpenAPI spec, light and dark from one token set, every text pairing measured at AA. Stimulus and Tailwind.",
    tags: ["Stimulus", "Tailwind", "OpenAPI", "Accessibility"],
  },
  {
    title: "Tailwind style guide",
    kind: "Live site",
    link: "https://umanga907.github.io/tailwind-style-guide-sample/",
    description:
      "A design system documented the way engineers use one: tokens defined once in the Tailwind config, every component in every state including error, disabled and loading, copyable markup under each.",
    tags: ["Tailwind", "Design System", "Documentation"],
  },
  {
    title: "Saurav Decor",
    kind: "Live site",
    link: "https://sauravdecor.com",
    description:
      "Full-stack business site designed and built end-to-end in TypeScript: Next.js, Prisma, admin dashboard, transactional email. From brand to database, one person.",
    tags: ["TypeScript", "Next.js", "Prisma", "Design in Code"],
  },
  {
    title: "Esther Perez, fine-art gallery",
    kind: "Live site",
    link: "https://estherperez.com",
    description:
      "Custom editorial gallery site for a fine-art photographer: typography-first layout, bespoke framing plugin, art direction to production by one person. Zero templates.",
    tags: ["Web Design", "Typography", "Editorial", "WordPress"],
  },
  {
    title: "Arcadian Sky, literary press concept",
    kind: "Concept",
    link: "https://arcadian-sky-concept.vercel.app",
    description:
      "Homepage concept for a literary brand: starfield, engraved-tree hero, serif typography. Calm built structurally, not decoratively.",
    tags: ["Concept", "Art Direction", "Typography", "Motion"],
  },
];

const isInternal = (link: string) => link.startsWith("/");
const host = (link: string) => new URL(link).host.replace(/^www\./, "");

/* The whole card is the link: the title's anchor stretches over the card with
 * an ::after overlay, so the heading stays the accessible name and there is
 * one tab stop per project. */
function CardLink({ project, className = "" }: { project: Project; className?: string }) {
  const cls = `after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none ${className}`;
  return isInternal(project.link) ? (
    <Link href={project.link} className={cls}>
      {project.title}
    </Link>
  ) : (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={cls}>
      {project.title}
      <span className="sr-only"> (opens {host(project.link)} in a new tab)</span>
    </a>
  );
}

function Cta({ link, kind }: { link: string; kind: Project["kind"] }) {
  return isInternal(link) ? (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]">
      Read the case study
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors group-hover:text-[var(--color-text-primary)]">
      {kind === "Concept" ? "Open the demo" : "Visit the site"}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </span>
  );
}

function Kind({ kind }: { kind: Project["kind"] }) {
  return (
    <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">
      {kind}
    </p>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-text-muted)]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

const card =
  "group relative flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-text-muted)] focus-within:ring-2 focus-within:ring-[var(--color-accent)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-background)]";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionLabel label="Projects" id="projects-heading" />
      <SectionTitle>What I&apos;ve built</SectionTitle>

      <article className={`${card} mb-6 overflow-hidden`}>
        <div
          aria-hidden
          className="pointer-events-none relative overflow-hidden pb-6 sm:pb-0 border-b border-[var(--color-border)] bg-[var(--color-background)] px-6 pt-6 sm:h-[300px] md:h-[380px] md:px-10 md:pt-10"
        >
          <div className="transition-transform duration-500 ease-out group-hover:-translate-y-2">
            <DispatchBoard />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-10 sm:h-24 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8">
          <div>
            <Kind kind={featured.kind} />
            <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
              <CardLink project={featured} />
            </h3>
            <p className="mb-5 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)] md:text-[15px]">
              {featured.description}
            </p>
            <Tags tags={featured.tags} />
          </div>
          <Cta link={featured.link} kind={featured.kind} />
        </div>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className={`${card} p-6 md:odd:last:col-span-2`}>
            <Kind kind={project.kind} />
            <h3 className="mb-3 text-lg font-semibold text-[var(--color-text-primary)]">
              <CardLink project={project} />
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {project.description}
            </p>
            <div className="mb-6">
              <Tags tags={project.tags} />
            </div>
            <div className="mt-auto">
              <Cta link={project.link} kind={project.kind} />
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
