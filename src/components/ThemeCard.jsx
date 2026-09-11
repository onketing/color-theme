/**
 * 전체 비교 그리드에서 쓰는 컴팩트 테마 카드. 클릭하면 해당 테마를 선택합니다.
 * @param {{ theme: object, active: boolean, onSelect: () => void }} props
 */
export default function ThemeCard({ theme, active, onSelect }) {
  const c = theme.colors;
  // `fill`(큰 색면)이 있으면 그걸 보여준다 — 연한 초록 묶음은 fill 이 곧 그 테마의 인상이다.
  // `surface` 는 거의 흰색이라 카드에서 정보가 없어 뺐다.
  const dots = [
    { role: "primary", hex: c.primary },
    { role: "fill", hex: c.fill ?? c.surface },
    { role: "primaryDark", hex: c.primaryDark },
    { role: "accent", hex: c.accent },
    { role: "accentSoft", hex: c.accentSoft },
    { role: "ink", hex: c.ink },
  ];

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full flex-col gap-3 rounded-2xl border bg-white p-4 text-left transition-all duration-150 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${
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
          {theme.isChosen && (
            <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">
              ✓ 확정
            </span>
          )}
          {theme.isReference && (
            <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-bold text-white">
              원본
            </span>
          )}
          {theme.isNew && (
            <span className="rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white">
              NEW
            </span>
          )}
          {theme.isPaperShift && (
            <span className="rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white">
              종이색도 변경
            </span>
          )}
        </div>
        <p className="mt-0.5 text-[12px] text-neutral-500">{theme.tagline}</p>
        {/* 학원이 사전조사표 6번에서 고른 두 낱말 중 이 테마가 답하는 것 */}
        {theme.fit?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {theme.fit.map((f) => (
              <span
                key={f}
                className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10.5px] font-bold text-emerald-800"
              >
                {f === "단정" ? "깔끔·단정" : "밝고 활기"}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}
