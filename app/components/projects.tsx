import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";
import { DispatchBoard } from "../work/drayos/dispatch-board";
import { AICommand } from "../work/drayos/ai-command";

type Project = {
  title: string;
  kind: "Case study" | "Live site" | "Concept";
  link: string;
  description: string;
  tags?: string[];
  image?: string;
};

const drayos: Project = {
  title: "Six years of DRAYOS",
  kind: "Case study",
  link: "/work/drayos",
  description:
    "I owned the UX and frontend of a drayage TMS that over 500 trucking companies run their day on. From a broken pile of CSS in 2019 to a design system with dark mode, a redesigned dispatch board, every grid virtualized, and the whole system written into Cursor rules.",
  tags: ["React", "SCSS", "Design System", "Data-dense UI"],
};

const agents: Project = {
  title: "AI agents inside DRAYOS",
  kind: "Case study",
  link: "/work/drayos#also",
  description:
    "AI Command puts people, channels and AI agents in one workspace. Agents relay driver replies from SMS and file tasks that link back to the load. I designed its UI and UX. On the AI Hub chat I worked on the UI in code: agent chats with streaming replies, approval steps before an agent acts, and a stop button for long runs.",
  tags: ["AI UX", "Agents", "Streaming UI", "React"],
};

const more: Project[] = [
  {
    title: "Interactive API docs concept",
    kind: "Concept",
    link: "https://searchapi-interactive-docs-beta.vercel.app/",
    image: "/work/apidocs.jpg",
    description:
      "An API docs page rebuilt around one live request: build it while you read, run it in place, explore the response as a tree. Generated from the OpenAPI spec, every text pairing measured at AA.",
    tags: ["Stimulus", "Tailwind", "OpenAPI", "Accessibility"],
  },
  {
    title: "Tailwind style guide",
    kind: "Live site",
    link: "https://umanga907.github.io/tailwind-style-guide-sample/",
    image: "/work/tailwind.jpg",
    description:
      "A design system documented the way engineers use one: tokens defined once in the config, every component in every state, copyable markup under each.",
    tags: ["Tailwind", "Design System", "Documentation"],
  },
];

const clients: Project[] = [
  {
    title: "Saurav Decor",
    kind: "Live site",
    link: "https://sauravdecor.com",
    image: "/work/saurav.jpg",
    description: "Business site and admin dashboard, designed and built end to end in TypeScript and Next.js.",
  },
  {
    title: "Esther Perez",
    kind: "Live site",
    link: "https://estherperez.com",
    image: "/work/esther.jpg",
    description: "Editorial gallery for a fine-art painter, typography first, with a custom framing plugin.",
  },
  {
    title: "Arcadian Sky",
    kind: "Concept",
    link: "https://arcadian-sky-concept.vercel.app",
    image: "/work/arcadian.jpg",
    description: "Homepage concept for a literary press: starfield, engraved tree, serif type.",
  },
];

const isInternal = (link: string) => link.startsWith("/");
const host = (link: string) => new URL(link).host.replace(/^www\./, "");

/* The whole card is the link: the title's anchor stretches over the card with
 * an ::after overlay, so the heading stays the accessible name and there is
 * one tab stop per project. */
function CardLink({ project }: { project: Project }) {
  const cls = "after:absolute after:inset-0 after:z-10 after:rounded-xl focus-visible:outline-none";
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

function Cta({ project }: { project: Project }) {
  return isInternal(project.link) ? (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]">
      Read the case study
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors group-hover:text-[var(--color-text-primary)]">
      {project.kind === "Concept" ? "Open the demo" : "Visit the site"}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </span>
  );
}

function Kind({ kind }: { kind: Project["kind"] }) {
  return (
    <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">
      {kind}
    </p>
  );
}

function Tags({ tags }: { tags?: string[] }) {
  if (!tags) return null;
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
  "group relative flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-text-muted)] focus-within:ring-2 focus-within:ring-[var(--color-accent)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-background)]";

/* A recreated product screen, cropped and faded at the bottom like a window
 * peeking out of the card. Decorative here; the case study carries the
 * described version. */
function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-inset)] px-6 pb-6 pt-6 sm:h-[300px] sm:pb-0 md:h-[380px] md:px-10 md:pt-10"
    >
      <div className="transition-transform duration-500 ease-out group-hover:-translate-y-2">
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[var(--color-inset)] to-transparent sm:h-24" />
    </div>
  );
}

function Featured({ project, preview }: { project: Project; preview: React.ReactNode }) {
  return (
    <article className={card}>
      <Preview>{preview}</Preview>
      <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8">
        <div>
          <Kind kind={project.kind} />
          <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
            <CardLink project={project} />
          </h3>
          <p className="mb-5 max-w-2xl text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-[15px]">
            {project.description}
          </p>
          <Tags tags={project.tags} />
        </div>
        <Cta project={project} />
      </div>
    </article>
  );
}

function Thumb({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-inset)]">
      <Image
        src={src}
        alt={`${title}, home page`}
        fill
        sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}

export function Projects() {
  return (
    <SectionWrapper id="work">
      <SectionLabel label="Selected work" id="work-heading" />
      <SectionTitle>What I&apos;ve built</SectionTitle>

      <div className="space-y-6">
        <Featured project={drayos} preview={<DispatchBoard />} />
        <Featured project={agents} preview={<AICommand />} />

        <div className="grid gap-6 md:grid-cols-2">
          {more.map((project) => (
            <article key={project.title} className={card}>
              {project.image && <Thumb src={project.image} title={project.title} />}
              <div className="flex flex-1 flex-col p-6">
                <Kind kind={project.kind} />
                <h3 className="mb-2 text-lg font-semibold text-[var(--color-text-primary)]">
                  <CardLink project={project} />
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {project.description}
                </p>
                <div className="mb-6">
                  <Tags tags={project.tags} />
                </div>
                <div className="mt-auto">
                  <Cta project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <h3 className="mb-6 mt-16 font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
        Client work and concepts
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((project) => (
          <article key={project.title} className={card}>
            {project.image && <Thumb src={project.image} title={project.title} />}
            <div className="flex flex-1 flex-col p-5">
              <Kind kind={project.kind} />
              <h4 className="mb-2 font-semibold text-[var(--color-text-primary)]">
                <CardLink project={project} />
              </h4>
              <p className="mb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {project.description}
              </p>
              <div className="mt-auto">
                <Cta project={project} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
