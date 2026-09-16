/* The dispatcher as it was in January 2020, rebuilt from a reference
 * screenshot: layout, colours and density kept; every name, id and number is
 * placeholder. Drawn at 1280px and scaled to the column by <Frame>. */

import {
  Search, Mail, ChevronDown, ChevronRight, MapPin, Monitor, Headphones, FileText, ShieldCheck, LayoutGrid, BarChart3,
  User, Settings, LogOut, Clock, ThumbsUp, Zap, Truck, Pointer, Bell, CalendarDays, CalendarCheck, Filter, Sheet,
  ClipboardList, CalendarRange, ChevronLeft,
} from "lucide-react";
import { Frame } from "./frame";

const NAV = [
  ["TRACKING", MapPin, true], ["DISPATCHER", Monitor, true], ["CUSTOMER SERVICE", Headphones, true], ["BILLING", FileText, true],
  ["SAFETY", ShieldCheck, true], ["OTHER", LayoutGrid, true], ["REPORTS", BarChart3, true], ["ACCOUNT", User, false],
  ["Settings", Settings, false], ["LOG OUT", LogOut, false],
] as const;

const TILES = [
  ["277", "PENDING", Clock], ["90", "AVAILABLE", ThumbsUp], ["3", "READY", Zap], ["46", "DISPATCHED", Truck],
  ["38", "DROPPED", Pointer], ["99", "LFD", Bell], ["65", "RETURN DAY", CalendarDays], ["1", "COMPLETED", CalendarCheck],
] as const;

type Row = { n: number; status: string; sub: string; ready?: boolean; load: string; lfd: string; cut: string; apt?: string; customer: string; container: string; chassis: string; size: string };

const ROWS: Row[] = [
  { n: 13, status: "DROPPED", sub: "HARBOR YARD - Loaded", load: "M018901", lfd: "11/24", cut: "11/27", customer: "THE HEMISPHERE", container: "MRKU7527698", chassis: "5817", size: "40" },
  { n: 14, status: "DROPPED", sub: "WAYNE TILE IMPORT - Loaded", load: "M018900", lfd: "11/24", cut: "11/27", apt: "11/27 18:45", customer: "INTERGLOBO NORT", container: "SEGU1937854", chassis: "TSXZ251717", size: "20" },
  { n: 15, status: "DROPPED", sub: "NORTHSTAR TRUCKING - Loaded", ready: true, load: "M018889", lfd: "11/26", cut: "11/27", apt: "11/27 18:45", customer: "Noatum Logistic", container: "ECMU9813950", chassis: "58475", size: "40" },
  { n: 16, status: "DROPPED", sub: "NORTHSTAR TRUCKING - Loaded", ready: true, load: "M018888", lfd: "11/24", cut: "11/27", apt: "11/27 18:45", customer: "Noatum Logistic", container: "CMAU6957330", chassis: "58475", size: "40" },
  { n: 17, status: "DROPPED", sub: "HARBOR YARD - Loaded", load: "M018886", lfd: "11/24", cut: "11/27", apt: "11/27 18:45", customer: "Noatum Logistic", container: "APHU7015890", chassis: "58479", size: "40" },
  { n: 18, status: "DROPPED", sub: "HARBOR YARD - Loaded", load: "M018814", lfd: "11/22", cut: "11/27", customer: "EAST COAST DRIE", container: "TEMU2764474", chassis: "58458", size: "40" },
  { n: 19, status: "DROPPED", sub: "HARBOR YARD - Loaded", ready: true, load: "M018797", lfd: "11/23", cut: "11/27", apt: "11/22 22:45", customer: "MENROSE USA (B", container: "YMMU4012769", chassis: "58479", size: "40" },
  { n: 20, status: "DROPPED", sub: "HARBOR YARD - Loaded", load: "M018714", lfd: "11/22", cut: "11/27", apt: "11/19 21:45", customer: "FASHION DISTRIB", container: "OOLU2905269", chassis: "58826", size: "40" },
  { n: 21, status: "DROPPED", sub: "WAYNE TILE IMPORT - Loaded", load: "M018702", lfd: "11/21", cut: "11/26", apt: "11/19 21:45", customer: "INTERGLOBO NORT", container: "TCLU5527180", chassis: "58831", size: "40" },
];

const BLUE = "#3B82F6";

export function Dispatch2020() {
  return (
    <Frame width={1280} height={720} label="Recreation of the DRAYOS dispatcher, January 2020">
      <div className="flex h-[720px] flex-col bg-[#F3F5F9] font-sans text-[13px] text-slate-700">
        {/* top bar */}
        <div className="flex h-14 shrink-0 items-center gap-4 border-b border-slate-200 bg-white px-5">
          <span className="text-[22px] font-black tracking-tight text-[#1F2D5C]">PORT<span className="text-[#3B82F6]">PRO</span></span>
          <span className="ml-auto flex h-8 w-64 items-center rounded border border-slate-300 bg-white">
            <span className="flex-1 px-3 text-slate-400">Search by Load</span>
            <span className="flex h-full w-9 items-center justify-center border-l border-slate-300 text-slate-500"><Search className="h-4 w-4" /></span>
          </span>
          <Mail className="h-5 w-5 text-slate-500" />
          <span className="flex items-center gap-2"><span className="h-8 w-8 rounded-full bg-slate-300" /><span className="text-slate-800">Sam Dispatcher</span><ChevronDown className="h-3.5 w-3.5 text-slate-500" /></span>
        </div>

        <div className="flex min-h-0 flex-1">
          {/* sidebar */}
          <div className="w-[230px] shrink-0 border-r border-slate-200 bg-white">
            <div className="flex items-center gap-2.5 border-b border-slate-100 px-5 py-3.5 text-slate-700"><span className="h-7 w-7 rounded-full bg-slate-300" />Sam Dispatcher</div>
            {NAV.map(([t, Icon, chev]) => {
              const active = t === "DISPATCHER";
              return (
                <div key={t} className={`flex h-[46px] items-center gap-3 px-5 text-[11.5px] font-semibold tracking-wide ${active ? "bg-[#3B82F6] text-white" : "text-slate-700"}`}>
                  <Icon className={`h-4 w-4 ${active ? "text-white" : "text-slate-500"}`} strokeWidth={1.8} />
                  <span className={t === "Settings" ? "font-normal" : ""}>{t}</span>
                  {chev && <ChevronRight className={`ml-auto h-3.5 w-3.5 ${active ? "text-white/80" : "text-slate-400"}`} />}
                </div>
              );
            })}
          </div>

          {/* content */}
          <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
            <div className="flex items-center">
              <span className="text-[11px] font-bold tracking-wider text-slate-500">DISPATCHER</span>
              <span className="ml-auto text-[12px] text-slate-500">Home <span className="mx-1">/</span> <span className="text-[#3B82F6]">Dispatcher</span></span>
              <span className="ml-4 rounded bg-[#2DBE7A] px-3.5 py-1.5 text-[12px] font-medium text-white">Add New Load</span>
            </div>

            {/* tiles */}
            <div className="grid grid-cols-8 gap-2.5">
              {TILES.map(([n, l, Icon]) => {
                const active = l === "DROPPED";
                return (
                  <div key={l} className={`relative rounded border bg-white px-3 py-2.5 ${active ? "border-slate-300 shadow-[0_2px_10px_rgba(0,0,0,.12)]" : "border-slate-200"}`}>
                    <div className="text-[24px] font-bold leading-7 text-slate-800">{n}</div>
                    <div className="mt-0.5 text-[9.5px] font-semibold tracking-wider text-slate-400">{l}</div>
                    <Icon className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-400" strokeWidth={1.4} />
                  </div>
                );
              })}
            </div>

            {/* filter row */}
            <div className="flex items-center gap-1.5">
              <span className="inline-flex h-8 items-center gap-1.5 rounded border border-[#3B82F6] bg-[#E8F0FE] px-3 text-[12px] font-medium text-[#3B82F6]"><Filter className="h-3.5 w-3.5" /> Filter</span>
              <span className="inline-flex h-8 items-center rounded bg-[#2DBE7A] px-3 text-[12px] font-medium text-white">Start Load</span>
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#5B8DEF] text-white"><Sheet className="h-4 w-4" /></span>
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#F5A623] text-white"><ClipboardList className="h-4 w-4" /></span>
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#F7B84B] text-white"><CalendarRange className="h-4 w-4" /></span>
              <span className="ml-3 flex gap-1">
                {["Fr", "Sa", "Su", "Mo", "Tu", "Th"].map((d) => (
                  <span key={d} className="inline-flex h-8 w-8 items-center justify-center rounded border border-[#CFE0FF] bg-[#EEF4FF] text-[12px] font-medium text-[#3B82F6]">{d}</span>
                ))}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-red-200 bg-red-50 text-[12px] font-semibold text-red-500">X</span>
              </span>
              <span className="ml-auto flex items-center gap-1 text-[12px]">
                <span className="inline-flex h-8 items-center rounded border border-slate-300 bg-white px-2.5 text-[#3B82F6]">First</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-slate-300 bg-white text-[#3B82F6]"><ChevronLeft className="h-3.5 w-3.5" /></span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#3B82F6] font-medium text-white">1</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-slate-300 bg-white text-[#3B82F6]"><ChevronRight className="h-3.5 w-3.5" /></span>
                <span className="inline-flex h-8 items-center rounded border border-slate-300 bg-white px-2.5 text-[#3B82F6]">Last</span>
              </span>
              <span className="ml-2 flex h-8 w-44 items-center rounded border border-slate-300 bg-white">
                <span className="flex-1 px-3 text-[12px] text-slate-400">Search Load</span>
                <Search className="mr-2.5 h-4 w-4 text-slate-400" />
              </span>
            </div>

            {/* table — the header has scrolled off, as in the reference */}
            <div className="min-h-0 flex-1 overflow-hidden rounded border border-slate-200 bg-white">
              <table className="w-full border-collapse text-left text-[12px]">
                <tbody>
                  {ROWS.map((r) => (
                    <tr key={r.n} className={`h-[54px] border-b border-slate-100 ${r.ready ? "bg-[#DDF3CB]" : ""}`}>
                      <td className="w-10 pl-3 text-slate-500">{r.n}</td>
                      <td className="w-8"><span className="block h-3.5 w-3.5 rounded-sm border border-slate-400 bg-white" /></td>
                      <td className="w-[210px] pr-2">
                        <div className="font-semibold text-slate-800">{r.status}{r.ready && <span className="ml-1 font-normal text-[#2DBE7A]">[Ready for Pickup]</span>}</div>
                        <div className="text-[11px] text-slate-500">{r.sub}</div>
                      </td>
                      <td className="w-[90px] font-medium text-slate-800">{r.load}</td>
                      <td className="w-[80px] text-slate-600">IMPORT</td>
                      <td className="w-[60px]"><span className="rounded bg-[#E5484D] px-1.5 py-0.5 text-[11px] font-semibold text-white">{r.lfd}</span></td>
                      <td className="w-[60px]"><span className="rounded bg-[#E5484D] px-1.5 py-0.5 text-[11px] font-semibold text-white">{r.cut}</span></td>
                      <td className="w-[110px] text-slate-600">{r.apt ?? ""}</td>
                      <td className="w-[140px] whitespace-nowrap text-slate-700">{r.customer}</td>
                      <td className="w-[130px]"><span className="inline-block w-[112px] rounded border border-slate-300 px-2 py-1 text-slate-700">{r.container}</span></td>
                      <td className="w-[110px]"><span className="inline-block w-[92px] rounded border border-slate-300 px-2 py-1 text-slate-700">{r.chassis}</span></td>
                      <td className="text-slate-600">{r.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}
