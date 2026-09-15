"use client";

/* Draws a recreation at its real screen width and scales it to the column,
 * the way a screenshot would be. The boards are dense 13px UIs designed for a
 * 1280–1710px window; rendered at the article width they would cram. */

import { useEffect, useRef, useState } from "react";

export function Frame({ width, height, label, children }: { width: number; height: number; label: string; children: React.ReactNode }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);
  const [h, setH] = useState<number | null>(null);

  useEffect(() => {
    const o = outer.current, i = inner.current;
    if (!o || !i) return;
    const update = () => {
      const s = o.clientWidth / width;
      setScale(s);
      setH(i.offsetHeight * s);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={outer}
      role="img"
      aria-label={label}
      className="relative w-full overflow-hidden rounded-xl border border-[var(--color-border)] shadow-2xl"
      style={h ? { height: h } : { aspectRatio: `${width} / ${height}` }}
    >
      <div
        ref={inner}
        className="absolute left-0 top-0 origin-top-left"
        style={{ width, transform: scale ? `scale(${scale})` : undefined, visibility: scale ? "visible" : "hidden" }}
      >
        {children}
      </div>
    </div>
  );
}
