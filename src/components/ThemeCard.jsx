/**
 * 전체 비교 그리드에서 쓰는 컴팩트 테마 카드. 클릭하면 해당 테마를 선택합니다.
 * @param {{ theme: object, active: boolean, onSelect: () => void }} props
 */
export default function ThemeCard({ theme, active, onSelect }) {
  const c = theme.colors;
  const dots = [
    { role: "primary", hex: c.primary },
    { role: "primaryDark", hex: c.primaryDark },
    { role: "accent", hex: c.accent },
    { role: "accentSoft", hex: c.accentSoft },
    { role: "surface", hex: c.surface },
    { role: "ink", hex: c.ink },
  ];

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex flex-col gap-3 rounded-2xl border bg-white p-4 text-left transition-all duration-150 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${
        active ? "border-neutral-800 shadow-lg ring-1 ring-neutral-800" : "border-neutral-200"
      }`}
    >
      <div className="flex h-14 overflow-hidden rounded-xl">
        {dots.map((d) => (
          <span key={d.role} className="flex-1" style={{ backgroundColor: d.hex }} />
        ))}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-[15px] font-extrabold text-neutral-900">{theme.name}</h3>
          {theme.isReference && (
            <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-bold text-white">
              원본
            </span>
          )}
        </div>
        <p className="mt-0.5 text-[12px] text-neutral-500">{theme.tagline}</p>
      </div>
    </button>
  );
}
