/* The 2026 dispatcher, rebuilt for this page.
 *
 * Not a screenshot. The real screen belongs to PortPro, so this is the same
 * layout drawn again in this site's own stack, with placeholder data. Every
 * name, number and load id here is made up; the structure is the point —
 * six lifecycle cards that summarise and filter, over a dense board where the
 * cells carry their own controls. */

const CARDS = [
  { n: 0, label: "Containers arriving on vessel / rail", sub: [["On hold", 0], ["Released", 0]] },
  { n: 45, label: "Containers need to be picked up", sub: [["LFD", 2], ["Pickup apt", 44]] },
  { n: 27, label: "Containers need to be delivered / loaded", sub: [["At terminal", 27], ["In yard", 0]] },
  { n: 101, label: "Containers need to be returned", sub: [["Ready", 56], ["Not ready", 45]] },
  { n: 220, label: "Containers dropped", sub: [["In yard", 131], ["At customer", 89]] },
] as const;

type Status = { text: string; tone: "pending" | "empty" | "loaded" | "enroute"; where?: string };

const ROWS: { id: string; customer: string; distance: string; status: Status; pickup?: string; driver?: string }[] = [
  { id: "LD-204831", customer: "Harbor Freight Co", distance: "0.00", status: { text: "Pending", tone: "pending" } },
  { id: "LD-204830", customer: "Harbor Freight Co", distance: "367.90", status: { text: "Pending", tone: "pending" }, pickup: "09/17 10:15 PM" },
  { id: "LD-204829", customer: "Harbor Freight Co", distance: "367.90", status: { text: "Pending", tone: "pending" }, pickup: "09/17 10:15 PM" },
  { id: "LD-204828", customer: "Northstar Logistics", distance: "367.90", status: { text: "Dropped · Empty", tone: "empty", where: "Sample Yard West" }, driver: "A. Dcev" },
  { id: "LD-204827", customer: "Northstar Logistics", distance: "367.90", status: { text: "Dropped · Loaded", tone: "loaded", where: "Harbor Freight Co" }, driver: "A. Dcev" },
  { id: "LD-204826", customer: "Harbor Freight Co", distance: "367.90", status: { text: "Enroute to deliver load", tone: "enroute", where: "Harbor Freight Co" }, pickup: "09/16 04:00 PM", driver: "K. Gurung" },
  { id: "LD-204825", customer: "Harbor Freight Co", distance: "367.90", status: { text: "Enroute to deliver load", tone: "enroute", where: "Harbor Freight Co" }, pickup: "09/15 12:00 PM", driver: "B. Millman" },
  { id: "LD-204824", customer: "Harbor Freight Co", distance: "2678.65", status: { text: "Enroute to deliver load", tone: "enroute", where: "Som Consignee" }, driver: "K. Gurung" },
];

const TONE = {
  pending: "bg-amber-50 text-amber-700 ring-amber-200",
  empty: "bg-sky-500 text-white",
  loaded: "bg-slate-800 text-white",
  enroute: "bg-slate-100 text-slate-700 ring-slate-200",
} as const;

import {
  Sparkles, Route, Map, Monitor, Users, GraduationCap, DollarSign, Globe, Truck, UserCog, Activity, LogOut,
  Search, Plus, MessageSquare, Bell, Mail, Moon, Settings, ChevronDown, ChevronLeft, ChevronRight,
  Filter, Columns2, Maximize2, Calendar,
} from "lucide-react";

const RAIL = [Sparkles, Route, Map, Monitor, Users, GraduationCap, DollarSign, Globe, Truck, UserCog, Activity, LogOut];
const ICON = "h-[18px] w-[18px]";

export function DispatchBoard() {
  return (
    <div
      aria-label="Recreation of the DRAYOS dispatcher, 2026"
      className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white text-[13px] text-slate-700 shadow-2xl"
    >
      <div className="flex">
        {/* rail */}
        <div className="hidden w-12 shrink-0 flex-col items-center gap-5 bg-[#3B6FE8] py-4 text-white/80 sm:flex">
          <span className="mb-2 h-7 w-7 rounded bg-white/90" />
          {RAIL.map((Icon, i) => (
            <span key={i} className={`flex h-8 w-8 items-center justify-center rounded-md ${i === 3 ? "bg-white/25 text-white" : ""}`}><Icon className={ICON} strokeWidth={1.75} /></span>
          ))}
        </div>

        <div className="min-w-0 flex-1 bg-[#F6F7FB]">
          {/* top bar */}
          <div className="flex items-center gap-4 border-b border-slate-200 bg-white px-4 py-2.5">
            <Search className="h-4 w-4 text-slate-400" />
            <span className="flex-1 text-slate-400">Search everything…</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white"><Plus className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            <span className="hidden items-center gap-3 text-slate-400 sm:flex">
              <MessageSquare className="h-4 w-4" />
              <span className="relative"><Bell className="h-4 w-4" /><span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-red-500" /></span>
              <span className="relative"><Mail className="h-4 w-4" /><span className="absolute -right-2 -top-1.5 rounded bg-red-500 px-1 text-[9px] font-medium leading-3 text-white">99+</span></span>
              <Moon className="ml-1 h-4 w-4" />
              <Settings className="h-4 w-4" />
            </span>
            <span className="hidden items-center gap-2 sm:flex">
              <span className="h-6 w-6 rounded-full bg-slate-200" />
              <span className="flex items-center gap-1 text-slate-600">Hi, <b>Dispatcher</b> <ChevronDown className="h-3.5 w-3.5 text-slate-400" /></span>
            </span>
          </div>

          {/* tabs */}
          <div className="flex items-center gap-3 border-b border-slate-200 bg-white pr-3">
            <div className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 text-slate-500">
              {["Dispatcher", "Moves", "Driver itinerary", "Planner", "Dual transactions", "Street turns", "Problem containers", "Trips"].map((t, i) => (
                <span key={t} className={`whitespace-nowrap py-3 ${i === 0 ? "-mb-px border-b-2 border-[#3B6FE8] font-medium text-slate-900" : ""}`}>
                  {t}
                  {t === "Street turns" && <span className="ml-1.5 rounded-full bg-emerald-500 px-1.5 text-[11px] text-white">23</span>}
                  {t === "Problem containers" && <span className="ml-1.5 rounded-full bg-orange-400 px-1.5 text-[11px] text-white">914</span>}
                </span>
              ))}
            </div>
            <span className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md bg-emerald-500 px-3 py-1.5 font-medium text-white sm:inline-flex"><Plus className="h-4 w-4" strokeWidth={2.5} /> Add new load</span>
          </div>

          <div className="space-y-3 p-3">
            {/* day picker */}
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white"><ChevronLeft className="h-4 w-4" /></span>
              <div className="rounded-md px-1">
                <div className="flex items-center gap-1 text-[11px] text-slate-400">Select the day you want to work on <ChevronDown className="h-3 w-3" /></div>
                <div className="text-base font-semibold text-slate-900">All days</div>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white"><ChevronRight className="h-4 w-4" /></span>
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white"><Calendar className="h-4 w-4" /></span>
            </div>

            {/* lifecycle cards */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-6">
              {CARDS.map((c) => (
                <div key={c.label} className="rounded-lg border border-slate-200 bg-white p-2.5">
                  <div className="flex items-start gap-2">
                    <span className="text-lg font-semibold leading-6 text-slate-900">{c.n}</span>
                    <span className="flex-1 text-[12px] leading-4 text-slate-600">{c.label}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-1.5">
                    {c.sub.map(([k, v]) => (
                      <div key={k} className="rounded-md border border-slate-200 px-2 py-1.5">
                        <div className="text-[11px] text-slate-400">{k}</div>
                        <div className="font-semibold text-slate-800">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="grid gap-2">
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
                  <span className="text-lg font-semibold text-slate-900">1456</span>
                  <span className="text-slate-600">Dispatched loads</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
                  <span className="text-lg font-semibold text-slate-900">4</span>
                  <span className="text-slate-600">Finished today</span>
                </div>
              </div>
            </div>

            {/* board toolbar */}
            <div className="flex items-center gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-t-lg border border-b-0 border-slate-200 bg-white px-3 py-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500 text-white"><Plus className="h-4 w-4" strokeWidth={2.5} /></span>
              <span className="flex items-center gap-2 text-slate-400"><Search className="h-4 w-4" /> Search the board…</span>
              <label className="flex items-center gap-1.5 whitespace-nowrap"><span className="h-3.5 w-3.5 rounded border border-slate-300" />Available <span className="rounded-full bg-slate-100 px-1.5 text-[11px]">418</span></label>
              <label className="flex items-center gap-1.5 whitespace-nowrap"><span className="h-3.5 w-3.5 rounded border border-slate-300" />Pending <span className="rounded-full bg-slate-100 px-1.5 text-[11px]">4806</span></label>
              <span className="hidden items-center gap-6 rounded-md border border-slate-200 px-3 py-1 text-slate-400 md:inline-flex">Select tags <ChevronDown className="h-3.5 w-3.5" /></span>
              <span className="ml-auto hidden items-center gap-1.5 whitespace-nowrap rounded-md border border-slate-200 px-3 py-1 sm:inline-flex"><Filter className="h-3.5 w-3.5" /> Filter</span>
              <span className="hidden rounded-md border border-slate-200 p-1.5 sm:inline-flex"><Columns2 className="h-4 w-4" /></span>
              <span className="hidden rounded-md border border-slate-200 p-1.5 sm:inline-flex"><Maximize2 className="h-4 w-4" /></span>
            </div>

            {/* the grid */}
            <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-b-lg border border-slate-200 bg-white">
              <table className="w-full min-w-[880px] border-collapse text-left">
                <thead>
                  <tr className="text-[12px] text-slate-500">
                    {["#", "Load #", "Customer", "Vessel", "Distance", "Load status", "Pick up apt", "Driver"].map((h) => (
                      <th key={h} className="border-b border-slate-200 px-3 py-2 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r, i) => (
                    <tr key={r.id} className={`border-b border-slate-100 ${r.status.tone === "pending" ? "bg-rose-50/60" : ""}`}>
                      <td className="px-3 py-3 text-slate-400">{i + 1}</td>
                      <td className="px-3 py-3 font-medium text-[#3B6FE8]">{r.id}</td>
                      <td className="px-3 py-3">{r.customer}</td>
                      <td className="px-3 py-3 text-slate-300">—</td>
                      <td className="px-3 py-3 tabular-nums">{r.distance}</td>
                      <td className="px-3 py-2">
                        <div className={`inline-flex flex-col gap-0.5 ${r.status.where ? "border-l-2 border-emerald-500 pl-2" : ""}`}>
                          <span className={`inline-block w-fit rounded px-1.5 py-0.5 text-[11px] font-medium ring-1 ring-inset ring-transparent ${TONE[r.status.tone]}`}>{r.status.text}</span>
                          {r.status.where && <span className="text-slate-600">{r.status.where}</span>}
                        </div>
                      </td>
                      <td className="px-3 py-3 tabular-nums text-slate-600">{r.pickup ?? ""}</td>
                      <td className="px-3 py-3">{r.driver ?? ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
