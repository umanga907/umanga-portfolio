/* AI Command, rebuilt for this site.
 *
 * Not a screenshot. The real screen belongs to PortPro, so this is the same
 * layout drawn again with placeholder data: every person, number and load id
 * is made up. Channels, AI agents and people share one workspace; agents relay
 * driver replies into channels and file tasks that link back to the load.
 * Drawn at 1600px and scaled to the column by <Frame>. */

import {
  Search, Plus, MessageSquare, Bell, Mail, Moon, Settings, ChevronDown, Pin, ListChecks, Clock, RotateCcw,
  FileText, FileCheck, Hash, Languages, SlidersHorizontal, Paperclip, Smile, Users, SendHorizontal, X, Check,
} from "lucide-react";
import { Frame } from "./frame";

const AGENTS = [
  { icon: Clock, name: "ETA Updates", n: "10" },
  { icon: RotateCcw, name: "Empty Return Agent" },
  { icon: FileText, name: "Delivery Order", n: "95" },
  { icon: FileCheck, name: "Document Validation", n: "99+" },
];

const CHANNELS: [string, string?][] = [
  ["GPS Alerts", "1"], ["Needs Review", "2"], ["Temperature Alerts"], ["Exceptions"], ["Charges"], ["Fleet Managers"], ["Charge Approvals"],
];

type Msg = { who: string; ai?: boolean; time: string; lines: [string, string?][] };
const MESSAGES: { day: string; msgs: Msg[] }[] = [
  {
    day: "AUG 21",
    msgs: [
      { who: "Ava", ai: true, time: "8:19 AM", lines: [["Reply from Driver 12", "· +1 555 0142"], ["Container picked up, heading to the yard."]] },
      { who: "Ava", ai: true, time: "8:27 AM", lines: [["Reply from Driver 12", "· +1 555 0142"], ["Okay, will return the empty after lunch."]] },
    ],
  },
  {
    day: "SEP 7",
    msgs: [
      { who: "Sam Carter", time: "11:25 AM", lines: [["Can we move LD2K_M108463 to tomorrow?"]] },
      { who: "Priya N.", time: "2:27 PM", lines: [["Done, appointment updated."]] },
    ],
  },
];

const TASKS = [
  { title: "No Missing Documents", date: "Aug 3", body: "All driver-sourced documents are present. Driver communication skipped.", id: "LD2K_M108228" },
  { title: "Missing Proof of Delivery", date: "Jul 28", body: "POD not found for this load. Driver asked by SMS to upload a photo.", id: "LD2K_M108179" },
  { title: "No Missing Documents", date: "Jul 28", body: "All documents are complete for this load. No further action is required.", id: "LD2K_M108178" },
  { title: "Weight Mismatch", date: "Jul 23", body: "Scale ticket weight differs from the load by 1,240 lbs. Needs review.", id: "LD2K_M108164" },
];

const PURPLE = "#7C5CFC";
const BLUE = "#3B6FE8";

function Count({ n }: { n: string }) {
  return <span className="ml-auto rounded-full px-1.5 text-[11px] font-semibold leading-[18px] text-white" style={{ background: BLUE }}>{n}</span>;
}

export function AICommand() {
  return (
    <Frame width={1600} height={880} label="Recreation of AI Command in DRAYOS: channels, AI agents and a task panel">
      <div className="flex h-[880px] flex-col bg-[#F5F6FA] font-sans text-[13px] text-[#2B3A55]">
        {/* top bar */}
        <div className="flex h-[56px] shrink-0 items-center gap-[18px] border-b border-slate-200/70 bg-white px-[28px]">
          <Search className="h-[18px] w-[18px] text-slate-500" strokeWidth={2} />
          <span className="flex-1 text-slate-400">Search Everything...</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2DBE7A] text-white"><Plus className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
          <MessageSquare className="ml-2 h-[18px] w-[18px] text-slate-500" />
          <span className="relative ml-2"><Bell className="h-[18px] w-[18px] text-slate-500" /><span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#E5484D]" /></span>
          <Mail className="ml-2 h-[18px] w-[18px] text-slate-500" />
          <Moon className="ml-3 h-[18px] w-[18px] text-slate-500" />
          <Settings className="ml-2 h-[18px] w-[18px] text-slate-500" />
          <span className="ml-3 flex items-center gap-2.5"><span className="h-7 w-7 rounded-full bg-slate-300" /><span>Hi, <b className="font-semibold text-slate-800">Sam</b></span><ChevronDown className="h-3.5 w-3.5 text-slate-500" /></span>
        </div>

        {/* tabs */}
        <div className="flex h-[46px] shrink-0 items-center gap-[28px] bg-white px-[28px] shadow-[0_1px_3px_rgba(0,0,0,.06)]">
          <span className="relative flex h-full items-center font-medium text-slate-900">Command<span className="absolute inset-x-[-10px] bottom-0 h-[3px] rounded-t" style={{ background: BLUE }} /></span>
          <span>AI Agent Hub</span>
        </div>

        <div className="flex min-h-0 flex-1 gap-3 p-3">
          {/* sidebar */}
          <div className="flex w-[250px] shrink-0 flex-col gap-1 overflow-hidden px-2 pt-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 flex-1 items-center gap-2 rounded-md border border-slate-200 bg-white px-2.5 text-slate-400"><Search className="h-3.5 w-3.5" /> Search...</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white"><Plus className="h-4 w-4" /></span>
            </div>
            <p className="mt-1 flex items-center gap-1 px-1 text-[12px] font-medium text-slate-500"><ChevronDown className="h-3 w-3" /> Pinned</p>
            <div className="flex h-8 items-center gap-2.5 px-2"><ListChecks className="h-4 w-4" /> My Tasks <Count n="99+" /></div>
            <div className="flex h-8 items-center gap-2.5 rounded-md bg-[#E8EEFD] px-2 font-medium text-slate-900"><Hash className="h-4 w-4" /> General <Pin className="ml-auto h-3.5 w-3.5 text-slate-400" /></div>
            <div className="flex h-8 items-center gap-2.5 px-2"><Hash className="h-4 w-4" /> Billing <Pin className="ml-auto h-3.5 w-3.5 text-slate-400" /></div>

            <p className="mt-3 flex items-center gap-1 px-1 text-[12px] font-medium text-slate-500"><ChevronDown className="h-3 w-3" /> AI Control Tower (4)</p>
            {AGENTS.map(({ icon: Icon, name, n }) => (
              <div key={name} className="flex h-8 items-center gap-2.5 px-2"><Icon className="h-4 w-4" style={{ color: PURPLE }} /> {name} {n && <Count n={n} />}</div>
            ))}

            <p className="mt-3 flex items-center gap-1 px-1 text-[12px] font-medium text-slate-500"><ChevronDown className="h-3 w-3" /> Channels</p>
            {CHANNELS.map(([name, n]) => (
              <div key={name} className="flex h-8 items-center gap-2.5 px-2"><Hash className="h-4 w-4 text-slate-400" /> {name} {n && <Count n={n} />}</div>
            ))}
          </div>

          {/* channel */}
          <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="flex h-[56px] shrink-0 items-center gap-3 border-b border-slate-200 px-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E8EEFD]" style={{ color: BLUE }}><Hash className="h-4 w-4" /></span>
              <span className="text-[16px] font-semibold text-slate-900">General</span>
              <span className="text-slate-500">10 members</span>
              <span className="ml-auto flex h-8 w-[240px] items-center gap-2 rounded-md bg-slate-100 px-3 text-slate-400"><Search className="h-3.5 w-3.5" /> Search for messages</span>
              <Languages className="h-[18px] w-[18px] text-slate-500" />
              <SlidersHorizontal className="h-[18px] w-[18px] text-slate-500" />
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E8EEFD]" style={{ color: BLUE }}><ListChecks className="h-4 w-4" /></span>
            </div>

            <div className="flex-1 overflow-hidden px-5 py-3">
              {MESSAGES.map(({ day, msgs }) => (
                <div key={day}>
                  <div className="my-3 flex items-center gap-3 text-[11px] font-medium text-slate-400"><span className="h-px flex-1 bg-slate-200" />{day}<span className="h-px flex-1 bg-slate-200" /></div>
                  {msgs.map((m, i) => (
                    <div key={i} className="mb-4 flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-white" style={{ background: m.ai ? PURPLE : "#94A3B8" }}>{m.who.slice(0, 1)}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold" style={{ color: m.ai ? PURPLE : "#0F172A" }}>{m.who}</span>
                          {m.ai && <span className="rounded px-1 text-[10px] font-semibold" style={{ background: "#EEEAFE", color: PURPLE }}>AI</span>}
                          <span className="text-[12px] text-slate-400">{m.time}</span>
                        </div>
                        {m.lines.map(([a, b], j) => (
                          <p key={j} className={j === 0 && m.ai ? "font-semibold text-slate-800" : "text-slate-700"}>
                            {a} {b && <span className="font-normal text-slate-500">{b}</span>}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="m-4 mt-0 shrink-0 rounded-lg border border-slate-200 p-3">
              <p className="text-slate-400">Message to #General</p>
              <div className="mt-4 flex items-center gap-4 text-slate-500">
                <Paperclip className="h-4 w-4" /><Smile className="h-4 w-4" /><Users className="h-4 w-4" />
                <span className="ml-auto text-[12px] text-slate-400">Shift + Return to create a line</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-md text-white" style={{ background: BLUE }}><SendHorizontal className="h-4 w-4" /></span>
              </div>
            </div>
          </div>

          {/* tasks */}
          <div className="flex w-[340px] shrink-0 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-start">
              <div>
                <p className="text-[16px] font-semibold text-slate-900">Channel tasks</p>
                <p className="text-[12px] text-slate-500">#General · 50 linked</p>
              </div>
              <X className="ml-auto h-4 w-4 text-slate-400" />
            </div>
            <div className="mt-3 grid grid-cols-3 rounded-md bg-slate-100 p-1 text-center">
              <span className="py-1.5">Verify</span>
              <span className="flex items-center justify-center gap-1.5 rounded bg-white py-1.5 font-semibold text-slate-900 shadow-sm">Action <span className="rounded-full px-1.5 text-[10px] leading-[16px] text-white" style={{ background: BLUE }}>102</span></span>
              <span className="py-1.5">Patches</span>
            </div>
            <span className="mt-3 flex h-8 items-center gap-2 rounded-md border border-slate-200 px-2.5 text-slate-400"><Search className="h-3.5 w-3.5" /> Search...</span>
            <div className="mt-3 flex flex-col gap-2.5">
              {TASKS.map((t) => (
                <div key={t.id} className="rounded-lg border border-slate-200 p-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[#FFF4D6] px-1.5 text-[11px] font-medium leading-[18px] text-[#D98A00]">Action</span>
                    <span className="truncate font-semibold text-slate-900">{t.title}</span>
                    <span className="ml-auto shrink-0 text-[11px] text-slate-400">{t.date}</span>
                  </div>
                  <p className="mt-1.5 text-[12px] leading-[17px] text-slate-600">{t.body}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="rounded bg-slate-100 px-1.5 font-mono text-[11px] leading-[20px] text-slate-600">{t.id}</span>
                    <Check className="ml-auto h-4 w-4 text-[#2DBE7A]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}
