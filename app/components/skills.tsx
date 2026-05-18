import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
} from "./section-wrapper";

const skillGroups = [
  {
    category: "Core",
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    category: "Styling",
    skills: [
      "SCSS / SASS",
      "CSS Custom Properties",
      "CSS Architecture",
      "Design Systems",
    ],
  },
  {
    category: "UI Libraries",
    skills: ["React Data Grid", "React Select", "Formik", "Yup"],
  },
  {
    category: "Tools",
    skills: ["Git", "Vite", "Cursor IDE", "MCP Servers", "Figma"],
  },
  {
    category: "Practices",
    skills: [
      "Responsive Design",
      "Cross-browser",
      "Accessibility",
      "Frontend Security",
      "Dark Mode Theming",
      "AI-Assisted Development",
    ],
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionLabel label="Tech Stack" id="skills-heading" />
      <SectionTitle>What I work with</SectionTitle>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="mb-3 text-sm font-medium text-[var(--color-text-primary)]">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 font-mono text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-text-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
