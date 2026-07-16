import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";

const links = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/umangadeepshrestha/",
    handle: "umangadeepshrestha",
  },
  {
    icon: ExternalLink,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~umanga907",
    handle: "Upwork Profile",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/umanga907",
    handle: "umanga907",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:umanga.907@gmail.com",
    handle: "umanga.907@gmail.com",
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionLabel label="Contact" id="contact-heading" />
      <SectionTitle>Let&apos;s work together</SectionTitle>

      <p className="mb-10 max-w-2xl text-base text-[var(--color-text-muted)] md:text-lg">
        I&apos;m available for freelance projects, consulting, and full-time
        opportunities. If you need a design engineer who cares about craft,
        let&apos;s talk.
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-[var(--color-text-muted)]"
            >
              <Icon className="h-5 w-5 shrink-0 text-[var(--color-text-muted)]" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  {link.label}
                </p>
                <p className="truncate text-xs text-[var(--color-text-muted)]">
                  {link.handle}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <a
        href="mailto:umanga.907@gmail.com"
        className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
      >
        <Mail className="h-4 w-4" />
        Send me an email
      </a>
    </SectionWrapper>
  );
}
