/* The dispatcher as it was in 2020, rebuilt the same way: layout only,
 * placeholder data. Kept deliberately plain — the point of showing it is the
 * distance between the two screens, not this one's detail. */

import {
  Menu, Search, MapPin, Package, CalendarCheck, Headphones, FileText, Shield, LayoutGrid, BarChart3, User, Settings,
  Clock, ThumbsUp, Zap, Truck, Hand, Bell, CalendarDays, CheckSquare, Filter, ArrowUpDown, ChevronLeft, ChevronRight,
} from "lucide-react";

const NAV = [
  ["Tracking", MapPin], ["Tendered loads", Package], ["Dispatcher", CalendarCheck], ["Customer service", Headphones],
  ["Billing", FileText], ["Safety", Shield], ["Other", LayoutGrid], ["Reports", BarChart3], ["Account", User], ["Settings", Settings],
] as const;
const TILE_ICONS = [Clock, ThumbsUp, Zap, Truck, Hand, Bell, CalendarDays, CheckSquare];

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
        <Menu className="h-4 w-4 text-slate-400" />
        <span className="text-base font-extrabold tracking-wide text-slate-800">PORT<span className="text-[#1E90FF]">PRO</span></span>
        <span className="ml-auto hidden items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-slate-400 sm:inline-flex"><Search className="h-3.5 w-3.5" /> Search load</span>
        <span className="h-6 w-6 rounded-full bg-slate-200" />
      </div>
      <div className="flex">
        <div className="hidden w-44 shrink-0 space-y-1 border-r border-slate-200 bg-white p-3 text-slate-600 md:block">
          {NAV.map(([t, Icon]) => (
            <div key={t} className={`flex items-center gap-2 rounded px-2 py-1.5 ${t === "Dispatcher" ? "bg-sky-100 text-sky-700" : ""}`}><Icon className="h-3.5 w-3.5 text-slate-400" /> {t}</div>
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
            {TILES.map(([n, l], i) => (
              <div key={l} className="relative rounded-md border border-slate-200 bg-white p-3">
                {(() => { const Icon = TILE_ICONS[i]; return <Icon className="absolute right-3 top-3 h-4 w-4 text-sky-500" strokeWidth={1.5} />; })()}
                <div className="text-xl font-semibold text-slate-800">{n}</div>
                <div className="text-[11px] uppercase tracking-wide text-slate-400">{l}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 rounded bg-[#1E90FF] px-3 py-1.5 text-white"><Filter className="h-3.5 w-3.5" /> Filter</span>
            <span className="rounded bg-emerald-500 px-3 py-1.5 text-white">Start load</span>
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
              <span key={d} className="rounded border border-slate-200 bg-white px-2 py-1.5 text-sky-600">{d}</span>
            ))}
            <span className="ml-auto flex gap-1">
              {["First", "‹", "1", "2", "3", "›", "Last"].map((p) => (
                <span key={p} className={`inline-flex items-center rounded border px-2 py-1 ${p === "1" ? "border-[#1E90FF] bg-[#1E90FF] text-white" : "border-slate-200 bg-white text-sky-600"}`}>
                  {p === "‹" ? <ChevronLeft className="h-3.5 w-3.5" /> : p === "›" ? <ChevronRight className="h-3.5 w-3.5" /> : p}
                </span>
              ))}
            </span>
          </div>
          <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <table className="w-full min-w-[720px] border-separate border-spacing-y-1.5 text-left">
              <thead>
                <tr className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  {["Load status", "Load #", "Move", "Customer", "Container", "Size", "Type", "Port"].map((h) => (
                    <th key={h} className="px-3 py-1"><span className="inline-flex items-center gap-1">{h} <ArrowUpDown className="h-3 w-3 text-slate-400" /></span></th>
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
