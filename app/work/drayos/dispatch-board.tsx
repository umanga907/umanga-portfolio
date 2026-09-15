/* The 2026 dispatcher, rebuilt for this page.
 *
 * Not a screenshot. The real screen belongs to PortPro, so this is the same
 * layout drawn again in this site's own stack, with placeholder data. Every
 * name, number and load id here is made up; the structure is the point —
 * five lifecycle cards that summarise and filter, over a dense board where the
 * cells carry their own controls. Drawn at 1710px (the real window) and scaled
 * to the column by <Frame>. */

import {
  Sparkles, Route, Map, Monitor, Users, GraduationCap, DollarSign, Globe, Truck, UserCog, Activity, LogOut,
  Search, Plus, MessageSquare, Bell, Mail, Moon, Settings, ChevronDown, ChevronLeft, ChevronRight,
  Filter, Columns2, Maximize2, Calendar,
} from "lucide-react";
import { Frame } from "./frame";

const CARDS = [
  { n: 0, label: "Containers Arriving On Vessel/Rail", sub: [["On Hold", 0], ["Released", 0]] },
  { n: 45, label: "Containers Need To Be Picked Up", sub: [["LFD", 2], ["Pickup Apt", 44]] },
  { n: 27, label: "Containers Need To Be Delivered/Loaded", sub: [["At Terminal", 27], ["In Yard", 0]] },
  { n: 101, label: "Containers Need To Be Returned", sub: [["Ready", 56], ["Not Ready", 45]] },
  { n: 220, label: "Containers Dropped", sub: [["In Yard", 131], ["At Customer", 89]] },
] as const;

type Tone = "pending" | "empty" | "loaded" | "enroute";
type Row = { id: string; customer: string; distance: string; status: string; tone: Tone; where?: string; pickup?: string; driver?: string };

const ROWS: Row[] = [
  { id: "LD2K_M108463", customer: "Harbor Freight", distance: "0.00", status: "Pending", tone: "pending" },
  { id: "LD2K_M108462", customer: "Harbor Freight", distance: "367.90", status: "Pending", tone: "pending", pickup: "09/17 10:15 PM" },
  { id: "LD2K_M108461", customer: "Harbor Freight", distance: "367.90", status: "Pending", tone: "pending", pickup: "09/17 10:15 PM" },
  { id: "LD2K_M108460", customer: "Harbor Freight", distance: "367.90", status: "Pending", tone: "pending", pickup: "09/17 10:15 PM" },
  { id: "LD2K_M108459", customer: "Northstar Test Org", distance: "367.90", status: "Dropped - Empty", tone: "empty", where: "Sample Company TEST", driver: "Abcd Dcev" },
  { id: "LD2K_M108458", customer: "Northstar Test Org", distance: "367.90", status: "Dropped - Loaded", tone: "loaded", where: "Harbor Freight", driver: "Abcd Dcev" },
  { id: "LD2K_M108457", customer: "Harbor Freight", distance: "367.90", status: "Enroute To Deliver Load", tone: "enroute", where: "Harbor Freight", pickup: "09/16 04:00 PM", driver: "Akanshaa G" },
  { id: "LD2K_M108456", customer: "Harbor Freight", distance: "367.90", status: "Enroute To Deliver Load", tone: "enroute", where: "Harbor Freight", pickup: "09/15 12:00 PM", driver: "Brian Millma" },
  { id: "LD2K_M108455", customer: "Harbor Freight", distance: "2678.65", status: "Enroute To Deliver Load", tone: "enroute", where: "Som Consignee", driver: "Akanshaa G" },
];

const CHIP: Record<Tone, string> = {
  pending: "bg-[#FFF4D6] text-[#D98A00]",
  empty: "bg-[#22B8E6] text-white",
  loaded: "bg-[#1F2B4D] text-white",
  enroute: "bg-[#E6ECF5] text-[#2B3A55]",
};
const BAR: Record<Tone, string> = { pending: "", empty: "border-l-[3px] border-[#2DBE7A] pl-2.5", loaded: "border-l-[3px] border-[#F5A623] pl-2.5", enroute: "pl-2.5" };

const COLS: [string, number][] = [
  ["#", 56], ["Load #", 175], ["Customer", 141], ["Vessel Name", 128], ["Distance", 103], ["Warning", 68], ["Emails", 81],
  ["Load Status", 177], ["Return Apt To", 141], ["Pick Up Apt To", 141], ["Delivery Apt To", 139], ["Discharge Date", 140], ["Driver", 120],
];

const RAIL = [Sparkles, Route, Map, Monitor, Users, GraduationCap, DollarSign, Globe, Truck, UserCog, Activity, LogOut];
const BLUE = "#3B6FE8";

export function DispatchBoard() {
  return (
    <Frame width={1710} height={892} label="Recreation of the DRAYOS dispatcher, 2026">
      <div className="flex h-[892px] bg-[#F5F6FA] font-sans text-[13px] text-[#2B3A55]">
        {/* rail */}
        <div className="flex w-[70px] shrink-0 flex-col items-center bg-[#3B6FE8] pt-[14px] text-white/85">
          <span className="flex h-10 w-[58px] items-center justify-center rounded bg-white"><span className="h-3 w-7 rounded-sm bg-[#1F2D5C]" /></span>
          <div className="mt-[95px] flex flex-col items-center gap-[7px]">
            {RAIL.map((Icon, i) => (
              <span key={i} className={`flex h-[38px] w-[38px] items-center justify-center rounded-md ${i === 3 ? "bg-white/25 text-white" : ""}`}><Icon className="h-5 w-5" strokeWidth={1.7} /></span>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          {/* top bar */}
          <div className="flex h-[60px] shrink-0 items-center gap-[18px] border-b border-slate-200/70 bg-white px-[35px]">
            <Search className="h-[18px] w-[18px] text-slate-500" strokeWidth={2} />
            <span className="flex-1 text-[13px] text-slate-400">Search Everything...</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2DBE7A] text-white"><Plus className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
            <MessageSquare className="ml-3 h-[18px] w-[18px] text-slate-500" />
            <span className="relative ml-3"><Bell className="h-[18px] w-[18px] text-slate-500" /><span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#E5484D]" /></span>
            <span className="relative ml-3"><Mail className="h-[18px] w-[18px] text-slate-500" /><span className="absolute -bottom-2 -right-3 rounded-full bg-[#E5484D] px-1 text-[9px] font-semibold leading-[14px] text-white">99+</span></span>
            <Moon className="ml-5 h-[18px] w-[18px] text-slate-500" />
            <Settings className="ml-3 h-[18px] w-[18px] text-slate-500" />
            <span className="ml-4 flex items-center gap-2.5"><span className="h-7 w-7 rounded-full bg-slate-300" /><span>Hi, <b className="font-semibold text-slate-800">Sam</b></span><ChevronDown className="h-3.5 w-3.5 text-slate-500" /></span>
          </div>

          {/* tabs */}
          <div className="flex h-[50px] shrink-0 items-center bg-white px-[35px] shadow-[0_1px_3px_rgba(0,0,0,.06)]">
            <div className="flex h-full items-center gap-[26px] text-[13px] text-[#2B3A55]">
              {[["Dispatcher"], ["Moves"], ["Driver Itinerary"], ["Planner"], ["Dual Transactions"], ["Street Turns", "23", "bg-[#2DBE7A]"], ["Problem Containers", "914", "bg-[#F5A623]"], ["Trips"]].map(([t, n, c], i) => (
                <span key={t} className={`relative flex h-full items-center gap-1.5 ${i === 0 ? "font-medium text-slate-900" : ""}`}>
                  {t}
                  {n && <span className={`rounded-full px-1.5 text-[11px] font-medium leading-[17px] text-white ${c}`}>{n}</span>}
                  {i === 0 && <span className="absolute inset-x-[-12px] bottom-0 h-[3px] rounded-t bg-[#3B6FE8]" />}
                </span>
              ))}
            </div>
            <span className="ml-auto flex h-[33px] items-center gap-2 rounded border border-slate-300 bg-white px-3.5 text-[13px]"><Globe className="h-4 w-4" strokeWidth={1.8} /> Drivers</span>
            <span className="ml-2.5 flex h-[33px] items-center gap-1.5 rounded bg-[#2DBE7A] px-3.5 text-[13px] font-medium text-white"><Plus className="h-4 w-4" strokeWidth={2.5} /> Add New Load</span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col px-[30px] pt-[20px]">
            {/* day picker */}
            <div className="flex items-center gap-2">
              <span className="flex h-[35px] w-[35px] items-center justify-center rounded border border-slate-200 bg-white"><ChevronLeft className="h-4 w-4" /></span>
              <div className="flex items-start gap-3 px-2">
                <div>
                  <div className="text-[10.5px] text-slate-500">Select The Day You Want To Work On</div>
                  <div className="text-[16px] font-semibold leading-5 text-slate-900">All Days</div>
                </div>
                <ChevronDown className="mt-1 h-3.5 w-3.5 text-slate-500" />
              </div>
              <span className="flex h-[35px] w-[35px] items-center justify-center rounded border border-slate-200 bg-white"><ChevronRight className="h-4 w-4" /></span>
              <span className="ml-1.5 flex h-[35px] w-[35px] items-center justify-center rounded border border-slate-200 bg-white"><Calendar className="h-4 w-4" /></span>
            </div>

            {/* lifecycle cards */}
            <div className="mt-[17px] grid grid-cols-6 gap-[17px]">
              {CARDS.map((c) => (
                <div key={c.label} className="h-[121px] rounded-md border border-slate-200/80 bg-white px-3 pt-3">
                  <div className="flex items-start gap-2">
                    <span className="text-[16px] font-semibold leading-5 text-slate-900">{c.n}</span>
                    <span className="flex-1 text-[13px] leading-[17px]">{c.label}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-slate-700" />
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 gap-3">
                    {c.sub.map(([k, v]) => (
                      <div key={k} className="h-[50px] rounded border border-slate-200 px-2.5 pt-1.5">
                        <div className="text-[12px] leading-4 text-slate-500">{k}</div>
                        <div className="text-[15px] font-medium leading-6 text-slate-900">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="grid h-[121px] grid-rows-2 gap-[6px] rounded-md border border-slate-200/80 bg-white p-2.5">
                <div className="flex items-center gap-4 rounded border border-slate-200 px-3"><span className="text-[16px] font-semibold text-slate-900">1456</span><span>Dispatched Loads</span></div>
                <div className="flex items-center gap-4 rounded border border-slate-200 px-3"><span className="text-[16px] font-semibold text-slate-900">4</span><span>Finished Today</span></div>
              </div>
            </div>

            {/* board toolbar */}
            <div className="mt-[14px] flex h-[35px] items-center gap-4">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded bg-[#2DBE7A] text-white"><Plus className="h-4 w-4" strokeWidth={2.5} /></span>
              <span className="ml-2 flex items-center gap-3 text-slate-400"><Search className="h-4 w-4" /> Search the Board...</span>
              <label className="ml-6 flex items-center gap-2"><span className="h-4 w-4 rounded-sm border border-slate-400 bg-white" />Available <span className="rounded-full bg-[#E6ECF5] px-2 text-[12px] font-medium leading-5">418</span></label>
              <label className="ml-2 flex items-center gap-2"><span className="h-4 w-4 rounded-sm border border-slate-400 bg-white" />Pending <span className="rounded-full bg-[#E6ECF5] px-2 text-[12px] font-medium leading-5">4806</span></label>
              <span className="ml-2 flex h-[32px] w-[290px] items-center rounded border border-slate-300 bg-white"><span className="flex-1 px-3 text-slate-500">Select Tags</span><span className="flex h-full w-8 items-center justify-center border-l border-slate-300"><ChevronDown className="h-3.5 w-3.5" /></span></span>
              <span className="ml-auto flex h-[32px] items-center gap-2 rounded border border-slate-300 bg-white px-3.5"><Filter className="h-3.5 w-3.5" strokeWidth={2} /> Filter</span>
              <span className="flex h-[32px] w-[32px] items-center justify-center rounded border border-slate-300 bg-white"><Columns2 className="h-4 w-4" /></span>
              <span className="flex h-[32px] w-[32px] items-center justify-center rounded border border-slate-300 bg-white"><Maximize2 className="h-4 w-4" /></span>
            </div>

            {/* the grid */}
            <div className="relative mt-[8px] min-h-0 flex-1 overflow-hidden rounded-t border border-slate-200 bg-white">
              <table className="table-fixed border-collapse text-left" style={{ width: COLS.reduce((a, [, w]) => a + w, 0) }}>
                <colgroup>{COLS.map(([h, w]) => <col key={h} style={{ width: w }} />)}</colgroup>
                <thead>
                  <tr className="h-[30px] text-[12px] text-slate-600">
                    {COLS.map(([h]) => <th key={h} className="border-b border-slate-200 px-3 font-medium">{h === "#" ? <span className="flex items-center gap-2">#<span className="h-4 w-4 rounded-sm border border-slate-400" /></span> : h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r, i) => (
                    <tr key={r.id} className={`h-[56px] border-b border-slate-200 ${r.tone === "pending" ? "bg-[#FBF2F0]" : ""}`}>
                      <td className="border-r border-slate-200 px-3"><span className="flex items-center gap-2 text-slate-600">{i + 1}<span className="h-4 w-4 rounded-sm border border-slate-400 bg-white" /></span></td>
                      <td className="border-r border-slate-200 px-3 text-[#3B6FE8]">{r.id}</td>
                      <td className="border-r border-slate-200 px-3">{r.customer}</td>
                      <td className="border-r border-slate-200 px-3" />
                      <td className="border-r border-slate-200 px-3 tabular-nums">{r.distance}</td>
                      <td className="border-r border-slate-200 px-3" />
                      <td className="border-r border-slate-200 px-3"><Mail className="mx-auto h-4 w-4 text-slate-300" /></td>
                      <td className="border-r border-slate-200 px-3">
                        <div className={`flex flex-col gap-0.5 ${BAR[r.tone]}`}>
                          <span className={`w-fit rounded-sm px-1.5 text-[11px] font-medium leading-[18px] ${CHIP[r.tone]}`}>{r.status}</span>
                          {r.where && <span className="text-[13px]">{r.where}</span>}
                        </div>
                      </td>
                      <td className="border-r border-slate-200 px-3" />
                      <td className="border-r border-slate-200 px-3 tabular-nums">{r.pickup ?? ""}</td>
                      <td className="border-r border-slate-200 px-3" />
                      <td className="border-r border-slate-200 px-3" />
                      <td className="px-3">{r.driver ?? ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* scrollbar hint, as on the real board */}
              <span className="absolute bottom-0 left-0 h-[6px] w-[330px] rounded-full bg-slate-400/60" />
              <span className="absolute right-0 top-[30px] h-[260px] w-[6px] rounded-full bg-slate-400/60" />
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}
