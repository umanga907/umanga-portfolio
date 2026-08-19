import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";

const WHATSAPP_URL =
  "https://wa.me/9779860959356?text=" +
  encodeURIComponent("Hi Umanga, I found you through your website.");

const links = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: WHATSAPP_URL,
    handle: "Fastest way to reach me",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:umanga.907@gmail.com",
    handle: "umanga.907@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/umangadeepshrestha/",
    handle: "umangadeepshrestha",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/umanga907",
    handle: "umanga907",
  },
  {
    icon: ExternalLink,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~umanga907",
    handle: "Upwork Profile",
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

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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

      <div className="flex flex-wrap gap-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
        >
          <MessageCircle className="h-4 w-4" />
          Message me on WhatsApp
        </a>
        <a
          href="mailto:umanga.907@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-8 py-3.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
        >
          <Mail className="h-4 w-4" />
          Send me an email
        </a>
      </div>
    </SectionWrapper>
  );
}
