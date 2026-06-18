import { useState } from "react";
import { isDark } from "../data/themes.js";

/**
 * 단일 색상 칩. 클릭하면 HEX 값이 클립보드에 복사됩니다.
 * @param {{ hex: string, label: string, role: string }} props
 */
export default function Swatch({ hex, label, role }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // 클립보드 접근 불가 환경 (무시)
    }
  };

  const textColor = isDark(hex) ? "#ffffff" : "#1f2937";

  return (
    <button
      type="button"
      onClick={copy}
      title={`${label} · ${hex} (클릭하여 복사)`}
      className="group flex flex-col overflow-hidden rounded-xl border border-black/5 text-left shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400"
    >
      <span
        className="flex h-16 items-end justify-end p-2"
        style={{ backgroundColor: hex, color: textColor }}
      >
        <span className="text-[11px] font-medium opacity-0 transition-opacity group-hover:opacity-100">
          {copied ? "복사됨!" : "복사"}
        </span>
      </span>
      <span className="flex flex-col gap-0.5 bg-white px-2.5 py-2">
        <span className="text-[12px] font-semibold text-neutral-800">{label}</span>
        <span className="font-mono text-[11px] uppercase tracking-tight text-neutral-500">
          {hex}
        </span>
        <span className="text-[10px] uppercase tracking-wide text-neutral-400">{role}</span>
      </span>
    </button>
  );
}
