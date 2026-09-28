import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";

const WHATSAPP_URL =
  "https://wa.me/9779860959356?text=" +
  encodeURIComponent("Hi Umanga, I found you through your website.");

const links = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/umangadeepshrestha/" },
  { icon: Github, label: "GitHub", href: "https://github.com/umanga907" },
  { icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_URL },
];

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionLabel label="Contact" id="contact-heading" />
      <SectionTitle>Get in touch</SectionTitle>

      <p className="mb-8 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
        I&apos;m open to full-time and contract roles, remote from Kathmandu (GMT+5:45). I also take on freelance projects.
      </p>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href="mailto:umanga.907@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
        >
          <Mail className="h-4 w-4" />
          umanga.907@gmail.com
        </a>
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
