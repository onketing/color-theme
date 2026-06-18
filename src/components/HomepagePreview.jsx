import Icon from "./Icon.jsx";

/**
 * 선택된 테마 색상 + 업체 콘텐츠로 칠해지는 "전체 홈페이지" 미리보기 목업.
 * 클라이언트가 색감이 실제 페이지 전체에서 어떻게 보이는지 한눈에 확인할 수 있도록 합니다.
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
          {p.brand.domain}
        </span>
      </div>

      {/* ── 상단 바 ── */}
      <header
        className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
        style={{ backgroundColor: c.background, borderBottom: `1px solid ${c.border}` }}
      >
        <BrandMark c={c} brand={p.brand} />
        <nav className="hidden items-center gap-5 lg:flex">
          {p.topbar.menu.map((m, i) => (
            <span
              key={m}
              className="text-[12.5px] font-semibold"
              style={{ color: i === 0 ? c.primary : c.body }}
            >
              {m}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-md px-3.5 py-2 text-[12.5px] font-bold"
            style={{ backgroundColor: c.primary, color: c.onPrimary }}
          >
            {p.topbar.cta}
          </button>
          <div className="hidden items-center gap-1.5 sm:flex" style={{ color: c.primary }}>
            <Icon name="phone" className="h-4 w-4" />
            <div className="leading-none">
              <div className="text-[14px] font-extrabold">{p.topbar.phone}</div>
              <div className="mt-0.5 text-[10px]" style={{ color: c.muted }}>
                {p.topbar.hours}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── 히어로 ── */}
      <section
        className="grid items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2"
        style={{ backgroundColor: c.surface }}
      >
        <div>
          <span className="text-[12px] font-bold tracking-wide" style={{ color: c.primary }}>
            {p.hero.label}
          </span>
          <h1
            className="mt-3 text-3xl font-black leading-[1.25] sm:text-[2.7rem]"
            style={{ color: c.ink }}
          >
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: c.primaryLight,
                textDecorationThickness: "5px",
                textUnderlineOffset: "8px",
              }}
            >
              {p.hero.headline[0]}
            </span>
            <br />
            {p.hero.headline[1]}
          </h1>
          <p className="mt-5 text-[14px] leading-relaxed" style={{ color: c.muted }}>
            {p.hero.sub}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-[14px] font-bold shadow-md"
              style={{ backgroundColor: c.primary, color: c.onPrimary }}
            >
              {p.hero.ctaPrimary}
              <Icon name="arrow" className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-[14px] font-bold"
              style={{ borderColor: c.primary, color: c.primary, backgroundColor: c.background }}
            >
              {p.hero.ctaSecondary}
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 히어로 비주얼 (정의의 저울) */}
        <div
          className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block"
          style={{
            background: `linear-gradient(135deg, ${c.accentSoft} 0%, ${c.surfaceAlt} 100%)`,
            border: `1px solid ${c.border}`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-40"
            style={{ backgroundColor: c.background }}
          />
          <div className="absolute inset-0 grid place-items-center" style={{ color: c.primary }}>
            <ScaleOfJustice />
          </div>
        </div>
      </section>

      {/* ── 통계 바 ── */}
      <section
        className="grid grid-cols-2 gap-y-6 px-5 py-7 sm:px-8 md:grid-cols-5 md:divide-x"
        style={{
          backgroundColor: c.background,
          borderTop: `1px solid ${c.border}`,
          borderBottom: `1px solid ${c.border}`,
          borderColor: c.border,
        }}
      >
        {p.stats.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-3 px-4"
            style={{ borderColor: c.border }}
          >
            <Icon name={s.icon} className="h-7 w-7 shrink-0" style={{ color: c.primary }} />
            <div className="leading-tight">
              <div className="text-[17px] font-black" style={{ color: c.ink }}>
                {s.value}
              </div>
              <div className="mt-0.5 text-[11px]" style={{ color: c.muted }}>
                {s.label}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── 주요 업무 분야 ── */}
      <section className="px-5 py-14 sm:px-8" style={{ backgroundColor: c.background }}>
        <SectionHeading c={c} label={p.servicesLabel} title={p.servicesTitle} />
        <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {p.services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center rounded-xl border p-4 text-center transition-shadow hover:shadow-md"
              style={{ backgroundColor: c.surface, borderColor: c.border }}
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-full"
                style={{ backgroundColor: c.accentSoft, color: c.primary }}
              >
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-3 text-[13.5px] font-bold leading-tight" style={{ color: c.ink }}>
                {s.title}
              </h3>
              {s.code && (
                <div className="mt-0.5 text-[12px] font-bold" style={{ color: c.primary }}>
                  {s.code}
                </div>
              )}
              <p className="mt-2 text-[11.5px] leading-snug" style={{ color: c.muted }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-[13px] font-bold"
            style={{ borderColor: c.primary, color: c.primary, backgroundColor: c.background }}
          >
            {p.servicesMore}
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* ── 강점 ── */}
      <section
        className="grid items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2"
        style={{ backgroundColor: c.surface }}
      >
        <div
          className="relative hidden aspect-[5/4] overflow-hidden rounded-2xl lg:block"
          style={{
            background: `linear-gradient(135deg, ${c.surfaceAlt} 0%, ${c.accentSoft} 100%)`,
            border: `1px solid ${c.border}`,
          }}
        >
          <div className="absolute inset-0 grid place-items-center" style={{ color: c.primary }}>
            <Icon name="user" className="h-24 w-24 opacity-40" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold" style={{ color: c.ink }}>
            {p.strengthsTitle}
          </h2>
          <div className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {p.strengths.map((s) => (
              <div key={s.title} className="flex gap-3">
                <Icon
                  name={s.icon}
                  className="mt-0.5 h-6 w-6 shrink-0"
                  style={{ color: c.primary }}
                />
                <div>
                  <h3 className="text-[14px] font-bold" style={{ color: c.ink }}>
                    {s.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-snug" style={{ color: c.muted }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 상담 안내 ── */}
      <section
        className="grid gap-4 px-5 py-12 sm:grid-cols-3 sm:px-8"
        style={{ backgroundColor: c.background }}
      >
        {p.contact.map((m) => (
          <div
            key={m.title}
            className="rounded-xl border p-6 text-center"
            style={{ backgroundColor: c.surface, borderColor: c.border }}
          >
            <span
              className="mx-auto grid h-12 w-12 place-items-center rounded-full"
              style={{ backgroundColor: c.accentSoft, color: c.primary }}
            >
              <Icon name={m.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-3 text-[15px] font-bold" style={{ color: c.ink }}>
              {m.title}
            </h3>
            <p className="mt-1 text-[12px]" style={{ color: c.muted }}>
              {m.desc}
            </p>
            {m.highlight && (
              <div className="mt-2 text-xl font-black" style={{ color: c.primary }}>
                {m.highlight}
              </div>
            )}
            {m.sub && (
              <div className="text-[11px]" style={{ color: c.muted }}>
                {m.sub}
              </div>
            )}
            {m.action && (
              <button
                type="button"
                className="mt-3 inline-flex items-center gap-1.5 rounded-md border px-3.5 py-2 text-[12px] font-bold"
                style={{ borderColor: c.primary, color: c.primary }}
              >
                {m.action}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        ))}
      </section>

      {/* ── 푸터 ── */}
      <footer
        className="px-5 pt-12 sm:px-8"
        style={{ backgroundColor: c.surfaceAlt, color: c.muted }}
      >
        <div className="grid gap-8 pb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandMark c={c} brand={p.brand} />
            <p className="mt-4 text-[12px] leading-relaxed">{p.footer.slogan}</p>
          </div>
          {p.footer.cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-bold" style={{ color: c.ink }}>
                {col.title}
              </h4>
              <ul className="mt-3 space-y-1.5 text-[12px]">
                {col.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {col.action && (
                <button
                  type="button"
                  className="mt-3 rounded-md border px-3 py-1.5 text-[11px] font-semibold"
                  style={{ borderColor: c.border, color: c.body }}
                >
                  {col.action}
                </button>
              )}
            </div>
          ))}
        </div>
        <div
          className="flex flex-col gap-2 border-t py-5 text-[11px] sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: c.border }}
        >
          <span>{p.footer.biz}</span>
          <span>{p.footer.copyright}</span>
        </div>
      </footer>
    </div>
  );
}

/** 로고 + 업체명 마크 */
function BrandMark({ c, brand }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="grid h-9 w-9 place-items-center rounded-md"
        style={{ border: `1.5px solid ${c.primary}`, color: c.primary }}
      >
        <ScaleOfJustice small />
      </span>
      <div className="leading-tight">
        <div className="text-[15px] font-extrabold" style={{ color: c.ink }}>
          {brand.name}
        </div>
        <div className="text-[9px] tracking-[0.15em]" style={{ color: c.muted }}>
          {brand.nameEn}
        </div>
      </div>
    </div>
  );
}

/** 섹션 라벨 + 제목 (가운데 정렬) */
function SectionHeading({ c, label, title }) {
  return (
    <div className="text-center">
      <span className="text-[12px] font-bold tracking-[0.2em]" style={{ color: c.primary }}>
        {label}
      </span>
      <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl" style={{ color: c.ink }}>
        {title}
      </h2>
      <span
        className="mx-auto mt-3 block h-1 w-10 rounded-full"
        style={{ backgroundColor: c.primary }}
      />
    </div>
  );
}

/** 정의의 저울 (행정사/법무 상징) — currentColor 사용 */
function ScaleOfJustice({ small = false }) {
  const size = small ? 18 : 96;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={small ? 2.2 : 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M24 7v32" />
      <path d="M14 41h20" />
      <circle cx="24" cy="6" r="1.6" />
      <path d="M9 12h30" />
      <path d="M24 9.5h0" />
      {/* 왼쪽 접시 */}
      <path d="M9 12l-5 10h10z" />
      <path d="M4 22a5 3 0 0010 0" />
      <path d="M9 12v0" />
      {/* 오른쪽 접시 */}
      <path d="M39 12l-5 10h10z" />
      <path d="M34 22a5 3 0 0010 0" />
      {/* 줄 */}
      <path d="M9 12L24 9.5 39 12" />
    </svg>
  );
}
