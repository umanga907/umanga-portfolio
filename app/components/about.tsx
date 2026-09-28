import Image from "next/image";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";

const roles = [
  { period: "2026 - now", role: "Design Engineer", company: "Freelance" },
  { period: "2019 - 2026", role: "Director of UI/UX", company: "PortPro (DRAYOS)" },
  { period: "2018 - 2019", role: "Frontend Developer", company: "Upwork, US and EU clients" },
  { period: "2018", role: "Frontend Developer & UI Engineer", company: "Braindigit" },
  { period: "2017", role: "Frontend Developer", company: "Jyaasa Technologies" },
  { period: "2015 - 2016", role: "Web Developer", company: "Pagoda Labs, Swiss Magic" },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionLabel label="About" id="about-heading" />
      <SectionTitle>11 years on the web, six on one product</SectionTitle>

      <div className="grid gap-12 md:grid-cols-[1fr_360px]">
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-[17px]">
          <p>
            I joined PortPro in December 2019, one of its earliest hires, and owned the UX and frontend of DRAYOS until March
            2026. I worked from Kathmandu with a team ten hours away. I rebuilt its broken CSS into a design system with dark
            mode, redesigned the screens dispatchers live in, and virtualized every data grid so thousands of rows scroll
            without lag.
          </p>
          <p>
            Near the end I wrote the whole design system into Cursor rules, so developers with no UI background could ship
            on-spec screens. In my last year I also worked on the product&apos;s AI features: agent chats, streaming replies
            and approval steps.
          </p>
          <p>
            I work AI-first with Claude Code and Cursor every day. They make me faster, but I still decide what gets built,
            and I review everything before it ships.
          </p>
        </div>

        <div>
          <Image
            src="/umanga.jpg"
            alt="Umanga Deep Shrestha"
            width={560}
            height={560}
            sizes="176px"
            className="mb-8 h-44 w-44 rounded-2xl border border-[var(--color-border)] object-cover"
          />
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Experience</h3>
          <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {roles.map((r) => (
              <li key={r.company} className="grid grid-cols-[96px_1fr] gap-4 py-3 text-sm">
                <span className="font-mono text-xs leading-5 text-[var(--color-text-muted)]">{r.period}</span>
                <span>
                  <span className="block text-[var(--color-text-primary)]">{r.role}</span>
                  <span className="text-[var(--color-text-muted)]">{r.company}</span>
                </span>
              </li>
            ))}
          </ul>
          <a
            href="https://www.linkedin.com/in/umangadeepshrestha/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-[var(--color-text-secondary)] underline-offset-4 hover:text-[var(--color-text-primary)] hover:underline"
          >
            Full history on LinkedIn
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
