/* The design system as rules: a prompt on the left, the screen it produces on
 * the right. The prompt is representative, not a transcript; the screen is
 * drawn in the DRAYOS vocabulary with placeholder data. */

import { Plus, Search, Filter, Pencil, Trash2, ChevronDown } from "lucide-react";
import { Frame } from "./frame";

const PROMPT = `@rules/drayos-ui.mdc

Build the Chassis list page from this response:

GET /api/chassis
[{ "chassisNo": "TSXZ251717",
   "type": "20' Standard",
   "owner": "Own",
   "status": "Available",
   "yard": "Northstar Yard",
   "lastInspection": "2026-08-30" }]

Standard list page: search, filter, add;
status as chip; row actions; empty state.`;

const RULES = [
  "list pages use <PageHeader> + <DataGrid>, never a raw <table>",
  "status fields render as <StatusChip tone=…>",
  "controls are 32px; primary action top-right, green",
  "dates through formatDate(); never raw ISO strings",
  "empty state: <EmptyState icon title action>",
];

const ROWS = [
  ["TSXZ251717", "20' Standard", "Own", "Available", "Northstar Yard", "Aug 30, 2026"],
  ["58475", "40' Standard", "Pool", "In use", "—", "Aug 12, 2026"],
  ["58479", "40' Tri-axle", "Own", "Available", "Harbor Yard", "Jul 28, 2026"],
  ["TSXZ251802", "20' Standard", "Pool", "Out of service", "Northstar Yard", "Jun 02, 2026"],
];
const TONE: Record<string, string> = { Available: "bg-[#DDF3E6] text-[#1E8E5A]", "In use": "bg-[#E3EBFF] text-[#3B6FE8]", "Out of service": "bg-[#FDE3E3] text-[#C93A3F]" };

export function CursorRules() {
  return (
    <div className="grid gap-4 lg:grid-cols-[2fr_3fr]">
      <div className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-2 font-mono text-[11px] text-[var(--color-text-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" /> Cursor · prompt
        </div>
        <pre className="flex-1 overflow-x-auto whitespace-pre-wrap px-4 py-3 font-mono text-[11.5px] leading-[1.55] text-[var(--color-text-secondary)]">{PROMPT}</pre>
        <div className="border-t border-[var(--color-border)] px-4 py-3">
          <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">from the rules file</div>
          <ul className="space-y-1 text-[11.5px] leading-5 text-[var(--color-text-secondary)]">
            {RULES.map((r) => <li key={r} className="flex gap-2"><span className="text-[var(--color-accent)]">›</span><span className="font-mono">{r}</span></li>)}
          </ul>
        </div>
      </div>

      <Frame width={900} height={300} label="Recreation of a screen generated from the DRAYOS Cursor rules">
        <div className="bg-[#F5F6FA] p-5 pb-6 font-sans text-[13px] text-[#172B4D]">
          <div className="flex items-center">
            <div>
              <div className="text-[11px] text-[#6B7A90]">Equipment</div>
              <div className="text-[18px] font-semibold">Chassis</div>
            </div>
            <span className="ml-auto inline-flex h-8 items-center gap-1.5 rounded bg-[#2DBE7A] px-3 text-[12.5px] font-medium text-white"><Plus className="h-3.5 w-3.5" strokeWidth={2.5} /> Add Chassis</span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="flex h-8 w-64 items-center gap-2 rounded border border-[#DDE3EC] bg-white px-2.5 text-[#6B7A90]"><Search className="h-3.5 w-3.5" />Search chassis…</span>
            <span className="flex h-8 w-36 items-center rounded border border-[#DDE3EC] bg-white px-2.5"><span className="flex-1 text-[#6B7A90]">All statuses</span><ChevronDown className="h-3.5 w-3.5 text-[#6B7A90]" /></span>
            <span className="ml-auto inline-flex h-8 items-center gap-1.5 rounded border border-[#DDE3EC] bg-white px-3 text-[12.5px]"><Filter className="h-3.5 w-3.5" /> Filter</span>
          </div>
          <div className="mt-3 overflow-hidden rounded-md border border-[#DDE3EC] bg-white">
            <table className="w-full border-collapse text-left text-[12.5px]">
              <thead><tr className="h-9 border-b border-[#DDE3EC] text-[11.5px] font-medium text-[#6B7A90]">{["Chassis #", "Type", "Owner", "Status", "Yard", "Last inspection", ""].map((h) => <th key={h} className="px-3">{h}</th>)}</tr></thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r[0]} className="h-11 border-b border-[#EEF1F5]">
                    <td className="px-3 font-medium text-[#3B6FE8]">{r[0]}</td>
                    <td className="px-3">{r[1]}</td>
                    <td className="px-3">{r[2]}</td>
                    <td className="px-3"><span className={`rounded-sm px-1.5 text-[11px] font-medium leading-[18px] ${TONE[r[3]]}`}>{r[3]}</span></td>
                    <td className="px-3">{r[4]}</td>
                    <td className="px-3 tabular-nums">{r[5]}</td>
                    <td className="px-3"><span className="flex justify-end gap-1 text-[#6B7A90]"><Pencil className="h-3.5 w-3.5" /><Trash2 className="h-3.5 w-3.5" /></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-between px-3 py-2 text-[11.5px] text-[#6B7A90]"><span>4 of 412 chassis</span><span>Page 1 of 42</span></div>
          </div>
        </div>
      </Frame>
    </div>
  );
}
