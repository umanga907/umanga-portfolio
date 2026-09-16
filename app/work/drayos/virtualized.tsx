/* What virtualizing a grid means, drawn: the list is long, the DOM is short. */

export function Virtualized() {
  const rows = Array.from({ length: 14 }, (_, i) => i);
  const win = [4, 5, 6, 7, 8, 9];
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[
        { title: "Before: render everything", note: "12,000 loads → 12,000 rows in the DOM. Every scroll, filter or edit re-lays out all of them.", live: rows, dim: [] as number[] },
        { title: "After: render the viewport", note: "12,000 loads → ~30 rows in the DOM, swapped as you scroll. Memoized cells re-render only when their data changes.", live: win, dim: rows.filter((r) => !win.includes(r)) },
      ].map((p) => (
        <div key={p.title} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
          <div className="mb-1 text-sm font-medium text-[var(--color-text-primary)]">{p.title}</div>
          <div className="mb-4 text-xs leading-5 text-[var(--color-text-secondary)]">{p.note}</div>
          <div className="relative rounded-md border border-[var(--color-border)] p-2">
            {/* viewport marker */}
            <div className="pointer-events-none absolute inset-x-1 rounded border border-dashed border-[var(--color-accent)]/60" style={{ top: `calc(0.5rem + ${4 * 22}px)`, height: 6 * 22 - 4 }} />
            <span className="absolute -top-2.5 right-3 rounded bg-[var(--color-background)] px-1.5 font-mono text-[10px] text-[var(--color-accent)]">viewport</span>
            <div className="space-y-1">
              {rows.map((r) => {
                const on = p.live.includes(r);
                return (
                  <div key={r} className={`flex h-[18px] items-center gap-2 rounded px-2 text-[10px] ${on ? "bg-[var(--color-border)]/60 text-[var(--color-text-secondary)]" : "text-[var(--color-text-muted)]/40"}`}>
                    <span className="w-4 tabular-nums">{r + 1}</span>
                    <span className={`h-1.5 w-20 rounded ${on ? "bg-[var(--color-text-muted)]" : "border border-dashed border-[var(--color-border)]"}`} />
                    <span className={`h-1.5 w-12 rounded ${on ? "bg-[var(--color-text-muted)]/70" : "border border-dashed border-[var(--color-border)]"}`} />
                    <span className="ml-auto font-mono">{on ? "<tr>" : "—"}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2 font-mono text-xs">
            <span className="text-[var(--color-text-muted)]">DOM rows</span>
            <span className={`text-lg font-semibold ${p.dim.length ? "text-[var(--color-accent)]" : "text-[var(--color-text-primary)]"}`}>{p.dim.length ? "~30" : "12,000"}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
