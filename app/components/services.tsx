import { Code2, Layout, Layers, Wrench } from "lucide-react";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";

const services = [
  {
    icon: Layout,
    title: "Figma to Code",
    description:
      "I convert your Figma/XD designs into clean, responsive, production-ready React or HTML/CSS. Pixel-perfect, every time.",
  },
  {
    icon: Code2,
    title: "React Development",
    description:
      "Complex dashboards, data-heavy UIs, SaaS frontends. I build the kind of interfaces that enterprise products need.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Component libraries, utility class systems, theming, documentation. I build the foundation your frontend team works on.",
  },
  {
    icon: Wrench,
    title: "Frontend Fixes",
    description:
      "CSS bugs, responsive issues, performance problems, legacy code cleanup. Fast turnaround.",
  },
];

export function Services() {
  return (
    <SectionWrapper id="services">
      <SectionLabel label="Services" id="services-heading" />
      <SectionTitle>What I can do for you</SectionTitle>

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-text-muted)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-muted)]">
                <Icon className="h-5 w-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--color-text-primary)]">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
