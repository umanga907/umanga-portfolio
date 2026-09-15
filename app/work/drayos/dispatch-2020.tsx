/* The dispatcher as it was in 2020, rebuilt the same way: layout only,
 * placeholder data. Kept deliberately plain — the point of showing it is the
 * distance between the two screens, not this one's detail. */

const TILES: [string, string][] = [
  ["417", "Pending"], ["84", "Available"], ["25", "Ready"], ["83", "Dispatched"],
  ["39", "Dropped"], ["0", "LFD"], ["0", "Return day"], ["0", "Completed"],
];

const ROWS = [
  ["Pending", "LD-56202", "Import", "Harbor Freight Co", "", "40'", "Reefer", "GCT · CES"],
  ["Pending", "LD-56201", "Import", "Harbor Freight Co", "", "", "", "Appleview"],
  ["Pending", "LD-56200", "Import", "GCT · CES", "", "", "", "GCT · CES"],
  ["Pending", "LD-56198", "Import", "Northstar Logistics", "CRSU6014245", "40'", "Reefer", "APM"],
  ["Pending", "LD-56199", "Import", "Northstar Logistics", "CGMU9345520", "40'", "HC", "Maher"],
  ["Pending", "LD-56197", "Import", "Northstar Logistics", "TEMU9296115", "40'", "HC", "APM"],
];

export function Dispatch2020() {
  return (
    <div
      aria-label="Recreation of the DRAYOS dispatcher, 2020"
      className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[#F3F5F9] text-[13px] text-slate-700 shadow-2xl"
    >
      <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3">
        <span className="text-slate-400">≡</span>
        <span className="text-base font-extrabold tracking-wide text-slate-800">PORT<span className="text-[#1E90FF]">PRO</span></span>
        <span className="ml-auto hidden rounded-full border border-slate-200 px-3 py-1 text-slate-400 sm:inline">⌕ Search load</span>
        <span className="h-6 w-6 rounded-full bg-slate-200" />
      </div>
      <div className="flex">
        <div className="hidden w-44 shrink-0 space-y-1 border-r border-slate-200 bg-white p-3 text-slate-600 md:block">
          {["Tracking", "Tendered loads", "Dispatcher", "Customer service", "Billing", "Safety", "Other", "Reports", "Account", "Settings"].map((t) => (
            <div key={t} className={`rounded px-2 py-1.5 ${t === "Dispatcher" ? "bg-sky-100 text-sky-700" : ""}`}>{t}</div>
          ))}
        </div>
        <div className="min-w-0 flex-1 space-y-3 p-3">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-800">DISPATCHER</span>
            <span className="flex gap-2">
              <span className="rounded bg-[#1E90FF] px-3 py-1.5 text-white">Double moves</span>
              <span className="rounded bg-emerald-500 px-3 py-1.5 text-white">Add new load</span>
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
            {TILES.map(([n, l]) => (
              <div key={l} className="rounded-md border border-slate-200 bg-white p-3">
                <div className="text-xl font-semibold text-slate-800">{n}</div>
                <div className="text-[11px] uppercase tracking-wide text-slate-400">{l}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="rounded bg-[#1E90FF] px-3 py-1.5 text-white">Filter</span>
            <span className="rounded bg-emerald-500 px-3 py-1.5 text-white">Start load</span>
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
              <span key={d} className="rounded border border-slate-200 bg-white px-2 py-1.5 text-sky-600">{d}</span>
            ))}
            <span className="ml-auto flex gap-1">
              {["First", "‹", "1", "2", "3", "›", "Last"].map((p) => (
                <span key={p} className={`rounded border px-2 py-1 ${p === "1" ? "border-[#1E90FF] bg-[#1E90FF] text-white" : "border-slate-200 bg-white text-sky-600"}`}>{p}</span>
              ))}
            </span>
          </div>
          <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <table className="w-full min-w-[720px] border-separate border-spacing-y-1.5 text-left">
              <thead>
                <tr className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  {["Load status", "Load #", "Move", "Customer", "Container", "Size", "Type", "Port"].map((h) => (
                    <th key={h} className="px-3 py-1">{h} ⇅</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r[1]} className="bg-white">
                    {r.map((c, i) => (
                      <td key={i} className="px-3 py-3 first:rounded-l-md last:rounded-r-md">
                        {i === 4 ? <span className="inline-block w-28 rounded border border-slate-300 px-2 py-1 text-slate-600">{c}</span> : c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
