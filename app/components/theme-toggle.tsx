"use client";

import { Moon, Sun } from "lucide-react";

/* Both icons render; CSS in globals.css hides the one that doesn't apply, so
 * the server markup matches whatever theme the head script already chose. */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
    >
      <Sun className="theme-icon-sun h-[18px] w-[18px]" />
      <Moon className="theme-icon-moon h-[18px] w-[18px]" />
    </button>
  );
}
