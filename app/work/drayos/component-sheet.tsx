/* A sample of the DRAYOS design system, redrawn for this page in light and
 * dark. Not the real components — the same vocabulary rebuilt in this site's
 * stack from the tokens the product used: one blue, one green, one amber, one
 * red, one 13px grid. The row colours in the grid sample (hazmat, hot,
 * overweight) are the real values; everything else is placeholder. */

import {
  Plus, Filter, Trash2, ChevronDown, Search, Calendar, Clock, Check, X, Info, AlertTriangle, Truck, Anchor, Warehouse,
  Container, MapPin, Paperclip, Send, MoreHorizontal, Pencil, Printer, Download, Bell,
} from "lucide-react";
import type { CSSProperties } from "react";
import { Frame } from "./frame";

const THEMES = {
  light: { "--bg": "#F5F6FA", "--sf": "#FFFFFF", "--sf2": "#F3F5F9", "--bd": "#DDE3EC", "--tx": "#172B4D", "--mu": "#6B7A90", "--pr": "#3B6FE8", "--ok": "#2DBE7A", "--wa": "#F5A623", "--dg": "#E5484D", "--in": "#22B8E6", "--chip": "#E6ECF5" },
  dark: { "--bg": "#171B24", "--sf": "#1F2430", "--sf2": "#262C3A", "--bd": "#343B4A", "--tx": "#E6EAF2", "--mu": "#8A94A8", "--pr": "#5B8DEF", "--ok": "#37CD8A", "--wa": "#F6B24B", "--dg": "#F26A6E", "--in": "#3AC8F0", "--chip": "#2D3546" },
} as const;

const STATUS: [string, string, string][] = [
  ["Pending", "var(--wa)", "#FFF4D6"], ["Available", "var(--ok)", "#DDF3E6"], ["Dispatched", "var(--pr)", "#E3EBFF"],
  ["Dropped · Empty", "#FFFFFF", "var(--in)"], ["Dropped · Loaded", "#FFFFFF", "#1F2B4D"], ["Enroute to deliver", "var(--tx)", "var(--chip)"],
  ["Completed", "var(--ok)", "#DDF3E6"], ["Cancelled", "var(--dg)", "#FDE3E3"],
];

function Label({ children }: { children: React.ReactNode }) {
  return <div className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--mu)]">{children}</div>;
}
function Box({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-md border border-[var(--bd)] bg-[var(--sf)] p-4 ${className}`}>{children}</div>;
}
const btn = "inline-flex h-8 items-center gap-1.5 rounded px-3 text-[12.5px] font-medium";

export function ComponentSheet({ theme }: { theme: keyof typeof THEMES }) {
  const dark = theme === "dark";
  return (
    <Frame width={1200} height={560} label={`Recreation of the DRAYOS design system, ${theme} theme`}>
      <div style={THEMES[theme] as CSSProperties} className="grid grid-cols-12 gap-3 bg-[var(--bg)] p-4 font-sans text-[13px] text-[var(--tx)]">

        {/* buttons */}
        <Box className="col-span-4">
          <Label>Buttons · one height, four intents</Label>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`${btn} bg-[var(--pr)] text-white`}><Plus className="h-3.5 w-3.5" strokeWidth={2.5} /> Add New Load</span>
            <span className={`${btn} bg-[var(--ok)] text-white`}>Start Load</span>
            <span className={`${btn} border border-[var(--bd)] bg-[var(--sf)]`}><Filter className="h-3.5 w-3.5" /> Filter</span>
            <span className={`${btn} text-[var(--pr)]`}>Cancel</span>
            <span className={`${btn} bg-[var(--dg)] text-white`}><Trash2 className="h-3.5 w-3.5" /> Delete</span>
            <span className={`${btn} cursor-not-allowed border border-[var(--bd)] bg-[var(--sf2)] text-[var(--mu)]`}>Disabled</span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            {[Pencil, Printer, Download, MoreHorizontal].map((I, i) => <span key={i} className="flex h-8 w-8 items-center justify-center rounded border border-[var(--bd)] bg-[var(--sf)] text-[var(--mu)]"><I className="h-4 w-4" /></span>)}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ok)] text-white"><Plus className="h-4 w-4" strokeWidth={2.5} /></span>
            <span className="relative ml-2 flex h-8 w-8 items-center justify-center rounded border border-[var(--bd)] bg-[var(--sf)] text-[var(--mu)]"><Bell className="h-4 w-4" /><span className="absolute -right-1.5 -top-1.5 rounded-full bg-[var(--dg)] px-1 text-[9px] font-semibold leading-[14px] text-white">12</span></span>
          </div>
        </Box>

        {/* form controls */}
        <Box className="col-span-5">
          <Label>Form controls · 32px, labels above, errors below</Label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="mb-1 text-[11px] text-[var(--mu)]">Load #</div>
              <div className="flex h-8 items-center rounded border border-[var(--bd)] bg-[var(--sf)] px-2.5">POP2_M104571</div>
            </div>
            <div>
              <div className="mb-1 text-[11px] text-[var(--mu)]">Customer</div>
              <div className="flex h-8 items-center rounded border border-[var(--bd)] bg-[var(--sf)] px-2.5"><span className="flex-1">Harbor Freight</span><ChevronDown className="h-3.5 w-3.5 text-[var(--mu)]" /></div>
            </div>
            <div>
              <div className="mb-1 text-[11px] text-[var(--mu)]">Container #</div>
              <div className="flex h-8 items-center rounded border border-[var(--dg)] bg-[var(--sf)] px-2.5 text-[var(--mu)]">MRKU75276</div>
              <div className="mt-1 text-[10.5px] text-[var(--dg)]">Must be 4 letters + 7 digits</div>
            </div>
            <div>
              <div className="mb-1 text-[11px] text-[var(--mu)]">Pickup appointment</div>
              <div className="flex h-8 items-center whitespace-nowrap rounded border border-[var(--pr)] bg-[var(--sf)] px-2 text-[12px] ring-2 ring-[var(--pr)]/20"><Calendar className="mr-1.5 h-3.5 w-3.5 shrink-0 text-[var(--mu)]" />09/17/26<Clock className="ml-auto mr-1 h-3.5 w-3.5 shrink-0 text-[var(--mu)]" />10:15 PM</div>
            </div>
            <div>
              <div className="mb-1 text-[11px] text-[var(--mu)]">Search</div>
              <div className="flex h-8 items-center whitespace-nowrap rounded border border-[var(--bd)] bg-[var(--sf)] px-2.5 text-[12px] text-[var(--mu)]"><Search className="mr-2 h-3.5 w-3.5 shrink-0" />Search board…</div>
            </div>
            <div className="flex flex-col justify-end gap-1.5 pb-0.5 text-[12px]">
              <span className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded-sm bg-[var(--pr)] text-white"><Check className="h-3 w-3" strokeWidth={3} /></span>Available</span>
              <span className="flex items-center gap-2"><span className="h-4 w-4 rounded-sm border border-[var(--mu)]" />Pending</span>
              <span className="flex items-center gap-2"><span className="relative h-4 w-7 rounded-full bg-[var(--ok)]"><span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white" /></span>Dark mode</span>
            </div>
          </div>
        </Box>

        {/* status chips */}
        <Box className="col-span-3">
          <Label>Load status · the lifecycle vocabulary</Label>
          <div className="flex flex-wrap gap-1.5">
            {STATUS.map(([t, fg, bg]) => <span key={t} className="rounded-sm px-1.5 text-[11px] font-medium leading-[18px]" style={{ color: fg, background: dark && bg.startsWith("#") && !["#1F2B4D"].includes(bg) ? "var(--chip)" : bg }}>{t}</span>)}
          </div>
          <div className="mt-4 flex items-center gap-2 text-[12px]">
            <span className="rounded-full bg-[var(--chip)] px-2 font-medium leading-5">418</span>
            <span className="rounded-full bg-[var(--ok)] px-2 font-medium leading-5 text-white">23</span>
            <span className="rounded-full bg-[var(--wa)] px-2 font-medium leading-5 text-white">914</span>
            <span className="rounded bg-[var(--dg)] px-1.5 text-[11px] font-semibold leading-[18px] text-white">LFD 11/24</span>
          </div>
        </Box>

        {/* route timeline */}
        <Box className="col-span-5">
          <Label>Route timeline · a load's moves, in order</Label>
          <div className="flex items-start">
            {[["Pull", Anchor, "APM Terminal", "done"], ["Deliver", Truck, "Harbor Freight", "done"], ["Drop", Warehouse, "Northstar Yard", "now"], ["Return", Container, "GCT Bayonne", "todo"]].map(([t, I, w, st], i, a) => {
              const Icon = I as typeof Truck;
              const c = st === "done" ? "var(--ok)" : st === "now" ? "var(--pr)" : "var(--bd)";
              return (
                <div key={t as string} className="flex flex-1 items-start">
                  <div className="flex flex-col items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 text-white" style={{ borderColor: c, background: st === "todo" ? "var(--sf)" : c, color: st === "todo" ? "var(--mu)" : "#fff" }}><Icon className="h-4 w-4" /></span>
                    <div className="mt-1.5 text-[12px] font-medium">{t as string}</div>
                    <div className="text-[11px] text-[var(--mu)]">{w as string}</div>
                    {st === "now" && <div className="mt-0.5 text-[10.5px] font-medium text-[var(--pr)]">Enroute</div>}
                  </div>
                  {i < a.length - 1 && <span className="mt-4 h-0.5 flex-1" style={{ background: st === "done" ? "var(--ok)" : "var(--bd)" }} />}
                </div>
              );
            })}
          </div>
        </Box>

        {/* grid cells */}
        <Box className="col-span-4 !p-0">
          <div className="p-4 pb-2"><Label>Grid rows · state as colour, cells carry controls</Label></div>
          <table className="w-full border-collapse text-[12.5px]">
            <tbody>
              {[["Hazmat", "#f9f9b2", "POP2_M104571"], ["Hot load", "#f9d6b2", "POP2_M104570"], ["Overweight", "rgb(207,244,238)", "POP2_M104569"], ["Selected", "var(--chip)", "POP2_M104568"]].map(([k, bg, id]) => (
                <tr key={k} className="border-t border-[var(--bd)]" style={{ background: dark ? undefined : bg, color: dark ? undefined : "#172B4D" }}>
                  <td className="w-[110px] px-3 py-2 text-[var(--pr)]" style={dark ? { borderLeft: `3px solid ${bg}` } : undefined}>{id}</td>
                  <td className="px-2 py-2"><span className="flex h-6 items-center rounded border border-[var(--bd)] bg-[var(--sf)] px-2 text-[var(--tx)]"><span className="flex-1">Sam D.</span><ChevronDown className="h-3 w-3 text-[var(--mu)]" /></span></td>
                  <td className="w-[90px] px-2 py-2 text-[11px] text-[var(--mu)]">{k}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>

        {/* modal + tooltip + toast */}
        <Box className="col-span-3 relative overflow-hidden">
          <Label>Overlays · modal, tooltip, toast</Label>
          <div className="rounded-md border border-[var(--bd)] bg-[var(--sf)] shadow-[0_8px_30px_rgba(0,0,0,.18)]">
            <div className="flex items-center border-b border-[var(--bd)] px-3 py-2 text-[12.5px] font-semibold">Remove driver from load <X className="ml-auto h-3.5 w-3.5 text-[var(--mu)]" /></div>
            <div className="px-3 py-2.5 text-[12px] text-[var(--mu)]">The load returns to Available. Nothing is billed.</div>
            <div className="flex justify-end gap-2 px-3 pb-3"><span className="inline-flex h-7 items-center rounded px-2.5 text-[12px] text-[var(--pr)]">Cancel</span><span className="inline-flex h-7 items-center rounded bg-[var(--dg)] px-2.5 text-[12px] font-medium text-white">Remove</span></div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[12px]">
            <span className="relative"><span className="rounded bg-[#172B4D] px-2 py-1 text-[11px] text-white">Last free day</span></span>
            <span className="ml-auto flex items-center gap-1.5 rounded border-l-[3px] border-[var(--ok)] bg-[var(--sf2)] px-2 py-1 text-[11.5px]"><Check className="h-3.5 w-3.5 text-[var(--ok)]" /> Load saved</span>
          </div>
        </Box>

        {/* chat + alert */}
        <Box className="col-span-5">
          <Label>Chat &amp; alerts</Label>
          <div className="space-y-1.5 text-[12px]">
            <div className="max-w-[85%] rounded-md rounded-tl-none bg-[var(--sf2)] px-2.5 py-1.5">Container released at APM, heading out now.</div>
            <div className="ml-auto max-w-[85%] rounded-md rounded-tr-none bg-[var(--pr)] px-2.5 py-1.5 text-white">Copy. Deliver to Harbor Freight, door 4.</div>
            <div className="flex h-8 items-center gap-2 rounded border border-[var(--bd)] bg-[var(--sf)] px-2 text-[var(--mu)]"><Paperclip className="h-3.5 w-3.5" /><span className="flex-1">Message driver…</span><Send className="h-3.5 w-3.5 text-[var(--pr)]" /></div>
          </div>
          <div className="mt-3 flex items-start gap-2 rounded border border-[var(--wa)]/50 bg-[var(--wa)]/10 px-2.5 py-1.5 text-[11.5px]"><AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--wa)]" />LFD is tomorrow. Per-diem starts after.</div>
        </Box>

        {/* tabs + loader + tokens */}
        <Box className="col-span-7">
          <Label>Tabs, loader, tokens</Label>
          <div className="flex gap-5 border-b border-[var(--bd)] text-[12.5px]">
            {["Load Info", "Documents", "Billing", "Tracking"].map((t, i) => <span key={t} className={`relative pb-2 ${i === 1 ? "font-medium text-[var(--tx)]" : "text-[var(--mu)]"}`}>{t}{i === 1 && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--pr)]" />}</span>)}
          </div>
          <div className="mt-3 flex items-center gap-4">
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--bd)] border-t-[var(--pr)]" />
            <div className="flex-1 space-y-1.5"><span className="block h-2.5 w-3/4 rounded bg-[var(--sf2)]" /><span className="block h-2.5 w-1/2 rounded bg-[var(--sf2)]" /></div>
            <div className="flex gap-1">{["--pr", "--ok", "--wa", "--dg", "--in"].map((v) => <span key={v} className="h-6 w-6 rounded" style={{ background: `var(${v})` }} title={v} />)}</div>
          </div>
          <div className="mt-2.5 flex items-center gap-2 text-[10.5px] text-[var(--mu)]"><Info className="h-3 w-3" />Every token has a light and a dark value; components never hard-code a colour.</div>
        </Box>
      </div>
    </Frame>
  );
}
