export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} Umanga Deep Shrestha
        </p>
        <p className="text-sm text-[var(--color-text-muted)]">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
