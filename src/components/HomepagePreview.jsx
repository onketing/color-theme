/**
 * 선택된 테마 색상 + 업체별 콘텐츠로 칠해지는 홈페이지 미리보기 목업.
 * 클라이언트가 색감이 실제 화면에서 어떻게 보이는지 확인할 수 있도록 합니다.
 * @param {{ colors: Record<string, string>, preview: object }} props
 */
export default function HomepagePreview({ colors, preview: p }) {
  const c = colors;

  return (
    <div
      className="overflow-hidden rounded-2xl border shadow-xl"
      style={{ backgroundColor: c.background, borderColor: c.border, color: c.body }}
    >
      {/* 브라우저 크롬 */}
      <div
        className="flex items-center gap-2 border-b px-4 py-2.5"
        style={{ backgroundColor: c.surface, borderColor: c.border }}
      >
        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
        <span
          className="ml-3 truncate rounded-md px-3 py-1 font-mono text-[11px]"
          style={{ backgroundColor: c.background, color: c.muted, border: `1px solid ${c.border}` }}
        >
          {p.domain}
        </span>
      </div>

      {/* 네비게이션 */}
      <header
        className="flex items-center justify-between px-5 py-3.5 sm:px-7"
        style={{ backgroundColor: c.background, borderBottom: `1px solid ${c.border}` }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="grid h-8 w-8 place-items-center rounded-lg text-sm font-black"
            style={{ backgroundColor: c.primary, color: c.onPrimary }}
          >
            {p.brandInitial}
          </span>
          <span className="text-[15px] font-extrabold tracking-tight" style={{ color: c.ink }}>
            {p.brandName}
          </span>
        </div>
        <nav className="hidden items-center gap-5 md:flex">
          {p.menu.map((m, i) => (
            <span
              key={m}
              className="text-[13px] font-medium"
              style={{ color: i === 0 ? c.primary : c.muted }}
            >
              {m}
            </span>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-full px-4 py-2 text-[13px] font-bold shadow-sm"
          style={{ backgroundColor: c.primary, color: c.onPrimary }}
        >
          {p.navCta}
        </button>
      </header>

      {/* 히어로 */}
      <section
        className="relative overflow-hidden px-5 py-12 sm:px-7 sm:py-16"
        style={{ backgroundColor: c.surface }}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25"
          style={{ backgroundColor: c.primaryLight }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 right-24 h-40 w-40 rounded-full opacity-25"
          style={{ backgroundColor: c.accentSoft }}
        />
        <div className="relative max-w-xl">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold"
            style={{ backgroundColor: c.accentSoft, color: c.primaryDark }}
          >
            {p.badge}
          </span>
          <h1
            className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-[2.6rem]"
            style={{ color: c.ink }}
          >
            {p.headline[0]}
            <br />
            <span style={{ color: c.primary }}>{p.headlineBrand}</span>
            {p.headline[1]}
          </h1>
          <p className="mt-4 text-[14px] leading-relaxed" style={{ color: c.muted }}>
            {p.sub}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-xl px-5 py-3 text-[14px] font-bold shadow-md"
              style={{ backgroundColor: c.primary, color: c.onPrimary }}
            >
              {p.ctaPrimary}
            </button>
            <button
              type="button"
              className="rounded-xl border px-5 py-3 text-[14px] font-bold"
              style={{ borderColor: c.primary, color: c.primary, backgroundColor: "transparent" }}
            >
              {p.ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      {/* 통계 */}
      <section
        className="grid grid-cols-3 divide-x px-5 py-7 sm:px-7"
        style={{
          backgroundColor: c.primary,
          color: c.onPrimary,
          borderColor: "rgba(255,255,255,.15)",
        }}
      >
        {p.stats.map((s) => (
          <div key={s.label} className="px-2 text-center">
            <div className="text-xl font-black sm:text-2xl">{s.value}</div>
            <div className="mt-1 text-[11px] opacity-80">{s.label}</div>
          </div>
        ))}
      </section>

      {/* 업무 분야 카드 */}
      <section className="px-5 py-11 sm:px-7" style={{ backgroundColor: c.background }}>
        <div className="text-center">
          <span
            className="text-[12px] font-bold uppercase tracking-widest"
            style={{ color: c.primary }}
          >
            {p.sectionLabel}
          </span>
          <h2 className="mt-2 text-2xl font-extrabold" style={{ color: c.ink }}>
            {p.sectionTitle}
          </h2>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {p.services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border p-5 transition-shadow hover:shadow-md"
              style={{ backgroundColor: c.surface, borderColor: c.border }}
            >
              <div
                className="grid h-11 w-11 place-items-center rounded-xl text-xl"
                style={{ backgroundColor: c.accentSoft }}
              >
                {s.icon}
              </div>
              <h3 className="mt-3.5 text-[15px] font-bold" style={{ color: c.ink }}>
                {s.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: c.muted }}>
                {s.desc}
              </p>
              <span
                className="mt-3 inline-block text-[12px] font-bold"
                style={{ color: c.primary }}
              >
                자세히 보기 →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA 배너 */}
      <section className="px-5 pb-11 sm:px-7">
        <div
          className="flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-7 sm:flex-row"
          style={{ backgroundColor: c.primaryDark, color: c.onPrimary }}
        >
          <div>
            <h3 className="text-lg font-extrabold">{p.ctaTitle}</h3>
            <p className="mt-1 text-[13px] opacity-80">{p.ctaSub}</p>
          </div>
          <button
            type="button"
            className="whitespace-nowrap rounded-xl px-6 py-3 text-[14px] font-bold shadow"
            style={{ backgroundColor: c.onPrimary, color: c.primaryDark }}
          >
            {p.phone}
          </button>
        </div>
      </section>

      {/* 푸터 */}
      <footer
        className="px-5 py-5 text-[11px] sm:px-7"
        style={{ backgroundColor: c.surfaceAlt, color: c.muted }}
      >
        {p.footer}
      </footer>
    </div>
  );
}
