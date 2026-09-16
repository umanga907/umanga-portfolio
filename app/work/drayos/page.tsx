import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DispatchBoard } from "./dispatch-board";
import { Dispatch2020 } from "./dispatch-2020";
import { ComponentSheet } from "./component-sheet";
import { Footer } from "../../components/footer";

export const metadata: Metadata = {
  title: "Six years of DRAYOS — Umanga Deep Shrestha",
  description:
    "A case study: owning the frontend and design system of a US drayage TMS used by 500+ carriers, from a broken 2019 codebase to a platform of hundreds of screens. Built from Kathmandu, ten hours from the team.",
  openGraph: {
    title: "Six years of DRAYOS — a design engineering case study",
    description:
      "Design system from scratch, the dispatcher rebuilt, every grid virtualized, and the system encoded into Cursor rules.",
    url: "https://umangashrestha.com.np/work/drayos",
  },
};

function H2({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="mb-4 scroll-mt-24 text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] md:text-3xl">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-secondary)] md:text-base">{children}</p>;
}

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 font-mono text-xs text-[var(--color-text-muted)]">{children}</p>;
}

function Fact({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      <div className="text-2xl font-semibold text-[var(--color-text-primary)]">{n}</div>
      <div className="mt-1 text-xs text-[var(--color-text-muted)]">{label}</div>
    </div>
  );
}

export default function DrayosCaseStudy() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-3 text-sm">
          <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]">
            <ArrowLeft className="h-4 w-4" /> Umanga Shrestha
          </Link>
          <span className="text-[var(--color-text-muted)]">/</span>
          <span className="text-[var(--color-text-primary)]">Work</span>
          <span className="text-[var(--color-text-muted)]">/</span>
          <span className="text-[var(--color-text-secondary)]">DRAYOS</span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:pt-24">
        {/* ── Intro ─────────────────────────────────────────────── */}
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">Case study · 2019 – 2026</p>
        <h1 className="mb-6 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] md:text-5xl">
          Six years of DRAYOS
        </h1>
        <P>
          DRAYOS is a transportation management system for US drayage — the trucks that move containers between ports, rail yards
          and warehouses. Over 500 carriers run their daily operations on it: dispatch, billing, tracking, driver planning, hundreds of
          screens. I joined PortPro in December 2019, one of its earliest hires, and owned the frontend until March 2026, working
          from Kathmandu, ten hours from the rest of the team.
        </P>
        <P>
          This page is what that looked like. The screens are rebuilt for this site with placeholder data — the product belongs to
          PortPro — but the layouts, the decisions and the numbers are the real ones.
        </P>

        <div className="my-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Fact n="500+" label="carriers running on it" />
          <Fact n="80+" label="components in the design system" />
          <Fact n="6 yrs" label="owning the frontend, async" />
          <Fact n="2,000+" label="commits, top-5 contributor" />
        </div>

        {/* ── 1. The start ──────────────────────────────────────── */}
        <section className="mt-20">
          <H2 id="start">What I walked into</H2>
          <P>
            It started late on a Tuesday night — 2 December 2019, 10:30 PM in Kathmandu. A friend opened a group chat with me
            and the CEO of a small logistics startup in the US, and wrote three words: <em>meet our CEO</em>.
          </P>
          <P>
            He was direct. Their frontend developer had disappeared in the middle of a sprint. A new design was supposed to go
            live that day. Three new customers were being onboarded that week. The product was a web dashboard for trucking
            companies — tables and cards, mostly — and it did not work on smaller screens. Could I make the whole thing
            responsive? I said yes. I was four years into frontend and UI work, freelancing part-time on Upwork. My
            sister&apos;s wedding was that Thursday.
          </P>
          <P>
            An hour later I had cloned the repo, and he was asking whether I could give him something to deploy by the next
            morning. <em>Maybe get some less sleep.</em> The code was what he was afraid of: CSS overwritten in so many places
            that nothing could be debugged, a SCSS compiler that did not run, and a dispatcher table so wide that the only honest
            answer was a horizontal scroll — too much data. I did the cards first: alignment, spacing, font sizes, responsive.
            He reviewed over screen-share at one in the morning, my time.
          </P>
          <P>
            My first changes went live on 4 December, about thirty-eight hours after that first message. The plan I wrote on
            night one — convert the CSS to SCSS, get the compiler working, then clean the code properly — took until July 2020
            to finish, because customers came first. Six years later I was still on that dashboard.
          </P>
        </section>

        {/* ── 2. Dispatch ───────────────────────────────────────── */}
        <section className="mt-20">
          <H2 id="dispatch">Dispatch, the screen people live in</H2>
          <P>
            Dispatchers spend their whole day on one screen, moving containers through a lifecycle: arriving, to be picked up, to
            be delivered, to be returned, dropped. The original board showed counts in a row of tiles and a paginated table
            underneath. Every question — what needs a driver right now, what is stuck at the terminal — meant scrolling and filtering by hand.
          </P>
          <div className="my-8">
            <Dispatch2020 />
            <Caption>2020. Rebuilt for this page from a reference screenshot; placeholder data.</Caption>
          </div>
          <P>
            The redesign made the lifecycle the interface. Six cards along the top summarise each stage and act as filters — click
            <em> Containers need to be returned</em> and the board below becomes that list. The grid got denser so a dispatcher sees
            more at once, cells carry their own controls (inline editing, dropdowns, popups), a load can be created directly in the
            grid, and the whole board goes full-screen. Getting that much interactive UI into one view without overlap and collision
            problems was most of the work.
          </P>
          <div className="my-8">
            <DispatchBoard />
            <Caption>2026. Rebuilt for this page; placeholder data. The real board is virtualized and scrolls thousands of rows.</Caption>
          </div>
        </section>

        {/* ── 3. The design system ──────────────────────────────── */}
        <section className="mt-20">
          <H2 id="system">The design system</H2>
          <P>
            The SCSS foundation went in on 14 July 2020 — the plan from the first night, seven months late because customers came
            first — and from that day every style change went through it. Built from there in SCSS and React and maintained for
            six years: 80+ shared components — modals, data grids, custom
            selects, form controls, tooltips, loaders, a chat UI, an icon set, route timeline indicators — with theming on CSS custom
            properties and a platform-wide dark mode. It replaced a copy-the-last-page workflow where developers reused stale
            markup and the UI drifted a little further with every new screen.
          </P>
          <div className="my-8 space-y-6">
            <div>
              <ComponentSheet theme="light" />
              <Caption>A sample of the system, redrawn for this page. Light theme.</Caption>
            </div>
            <div>
              <ComponentSheet theme="dark" />
              <Caption>The same components on the dark tokens. The hazmat / hot / overweight row colours are the real values; in dark they move to the row edge so the text stays readable.</Caption>
            </div>
          </div>
        </section>

        {/* ── 4. Performance ────────────────────────────────────── */}
        <section className="mt-20">
          <H2 id="performance">Every grid, virtualized</H2>
          <P>
            The datasets behind these boards run to millions of rows. Rendering them the ordinary way made the heaviest screens
            lag exactly when dispatchers needed them most. I virtualized every data grid in the product, not just dispatch, and
            added memoization across the heaviest operational screens, so thousands of rows render and scroll without lag.
          </P>
        </section>

        {/* ── 5. Cursor rules ───────────────────────────────────── */}
        <section className="mt-20">
          <H2 id="cursor">The design system, as rules</H2>
          <P>
            By 2025 I was the bottleneck: every frontend implementation came to me for review, then I re-tested the pages. So I
            encoded the design system into Cursor rules — which components to use, the spacing and layout defaults, how a screen
            is scaffolded from the backend&apos;s API JSON — so a developer with no UI background could generate on-standard UI from
            a single prompt. A small Electron app did the local setup (GitHub auth, keys, clone) so product managers could open the
            codebase in Cursor and make UI changes without pulling in an engineer.
          </P>
          {/* TODO: a prompt beside the screen it produced. */}
        </section>

        {/* ── Close ─────────────────────────────────────────────── */}
        <section className="mt-20 border-t border-[var(--color-border)] pt-10">
          <P>
            Six years, one product, ten hours from the team. Async by default, with live overlap when it mattered; the doc and the
            working screen did the job a meeting would have.
          </P>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/#contact" className="rounded-lg bg-[var(--color-accent)] px-4 py-2 font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]">Get in touch</Link>
            <a href="https://searchapi-interactive-docs-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]">
              Latest work: interactive API docs →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
