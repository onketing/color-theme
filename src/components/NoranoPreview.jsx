import { SPOOLS } from "../data/norano.js";
import { isDark } from "../data/themes.js";

/**
 * 노라노패션학원 전용 미리보기.
 *
 * 초이스용 `HomepagePreview`(법무 목업)를 쓰지 않는 이유는 업종과 시각 언어가 다르기
 * 때문이다 — 노라노는 기술 도면(치수선·모눈 제도지·큰 숫자)이고 실 색이 과정 분류를
 * 인코딩한다.
 *
 * ⚠️ **2026-09-08 전면 개편. 색이 안 보여서 다시 짰다.**
 *    첫 판은 실제 사이트 규칙에 충실해 초록을 3px 선과 작은 점에만 썼다. 그 결과
 *    테마를 바꿔도 화면이 거의 안 변했고, 색감을 고르는 화면으로서 쓸모가 없었다
 *    (사용자 지적). 그래서 **한 화면에 큰 색면이 다섯 번 나오도록** 다시 배치했다:
 *
 *      1) 히어로 바탕 = `accentSoft` (옅은 색면, 화면에서 가장 넓다)
 *      2) 히어로 패널 = `fill`       (도식이 그 위에 올라간다)
 *      3) 숫자 밴드   = `accent`     (중간 색면, 가로 전체)
 *      4) 색 계단     = `ramp` 5단   (작품 타일 자리 — 명도 단계가 통째로 보인다)
 *      5) 상담 밴드   = `fill`       (전면 채움)
 *      추가로 로고 마크 · 헤더 CTA · 과정표 헤더행도 `fill` 로 채운다.
 *
 * ⚠️ **`fill` 과 `primaryDark` 는 다른 역할이다. 합치면 안 된다.**
 *      `fill`        — 큰 색면. 그 위 글씨는 `onFill`.
 *      `primaryDark` — **종이 위에 얹는 초록 글씨.** AA 를 책임지는 쪽.
 *    밝은 종이·어두운 화면에서는 둘이 같은 값이지만, **연한 초록 7종에서는 다르다** —
 *    `fill` 이 파스텔이고 `onFill` 이 어두우며, `primaryDark` 는 여전히 진한 초록이다.
 *    한쪽으로 합치면 연한 테마에서 글씨가 사라지거나 AA 가 깨진다.
 *
 * ⚠️ 밝은 `primary`(=thread) 위에 흰 글씨를 얹지 않는다(커팅 매트 기준 3.13:1).
 *    `primary` 는 선·마커·막대 전용이다 — 노라노 `globals.css` 의 규칙 그대로다.
 *
 * @param {{ colors: Record<string, string>, preview: object }} props
 */
export default function NoranoPreview({ colors: c, preview: p }) {
  // 어두운 테마에서는 실 색을 밝은 변형으로 바꾼다. 원래 값은 어두운 바탕에서 1.5:1 이다
  const onDark = isDark(c.background);
  /**
   * 큰 색면(`fill`)이 연한 색인가. 연한 초록 7종이 여기 해당한다 —
   * 그 위에 얹는 선·점을 밝은 `primary` 로 두면 사라져서 진한 쪽으로 바꾼다.
   */
  const onPale = !isDark(c.fill);
  const spool = (s) => (onDark ? s.hexDark : s.hex);
  const spoolOf = (key) => {
    const s = SPOOLS.find((x) => x.key === key);
    return s ? spool(s) : c.primary;
  };

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

      {/* ── 헤더 — 로고 마크와 CTA 가 둘 다 채움면이다 ── */}
      <header
        className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
        style={{ backgroundColor: c.background, borderBottom: `1px solid ${c.border}` }}
      >
        <div className="flex items-center gap-2.5">
          <SpoolMark c={c} />
          <div className="leading-tight">
            <div className="text-[15px] font-extrabold" style={{ color: c.ink }}>
              {p.brand.name}
            </div>
            <div className="text-[8.5px] tracking-[0.18em]" style={{ color: c.muted }}>
              {p.brand.nameEn}
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          {p.topbar.menu.map((m, i) => (
            <span
              key={m}
              className="text-[12.5px] font-bold"
              style={{ color: i === 0 ? c.primaryDark : c.ink }}
            >
              {m}
            </span>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-md px-3.5 py-2 text-[12.5px] font-bold"
          style={{ backgroundColor: c.fill, color: c.onFill }}
        >
          {p.topbar.cta}
        </button>
      </header>

      {/* ── 1) 히어로 — 바탕은 옅은 색면, 오른쪽은 진한 색면 ── */}
      <section
        className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-14"
        style={{ backgroundColor: c.accentSoft }}
      >
        <Grid c={c} />
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_42%]">
          <div>
            <h1
              className="text-[2.1rem] font-black leading-[1.06] tracking-[-0.03em] sm:text-[3rem]"
              style={{ color: c.ink }}
            >
              {p.hero.headline[0]}
              <br />
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: c.primary,
                  textDecorationThickness: "6px",
                  textUnderlineOffset: "9px",
                }}
              >
                {p.hero.headline[1]}
              </span>
            </h1>
            <p className="mt-6 text-[13px]" style={{ color: c.body }}>
              {p.hero.transit}
            </p>
          </div>

          {/* 2) 진한 색면 — 도식이 반전으로 올라간다 */}
          <div
            className="relative hidden aspect-[4/3] overflow-hidden rounded-xl lg:block"
            style={{ backgroundColor: c.fill }}
          >
            <SewingMachine c={c} onPale={onPale} />
          </div>
        </div>
      </section>

      {/* ── 3) 숫자 밴드 — 중간 색면을 가로로 꽉 채운다 ── */}
      <section
        className="grid grid-cols-2 gap-y-6 px-5 py-7 sm:px-8 md:grid-cols-4"
        style={{ backgroundColor: c.accent, color: c.onAccent }}
      >
        {p.hero.facts.map((f) => (
          <div key={f.label} className="px-2">
            <span className="flex items-baseline gap-1">
              <span className="text-[28px] font-black leading-none tabular-nums">{f.value}</span>
              <span className="text-[13px] font-bold">{f.unit}</span>
            </span>
            <span className="mt-1.5 block text-[11.5px] font-bold opacity-80">{f.label}</span>
          </div>
        ))}
      </section>

      {/* ── 고민 표 ── */}
      <section className="px-5 py-14 sm:px-8" style={{ backgroundColor: c.background }}>
        <h2 className="text-[22px] font-extrabold sm:text-[26px]" style={{ color: c.ink }}>
          {p.worries.title}
        </h2>
        <div className="mt-8">
          <div
            className="hidden grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] pb-2.5 md:grid"
            style={{ borderBottom: `2px solid ${c.ink}` }}
          >
            <span
              className="text-right text-[11px] font-bold tracking-widest"
              style={{ color: c.muted }}
            >
              걸리는 것
            </span>
            <span />
            <span className="text-[11px] font-bold tracking-widest" style={{ color: c.muted }}>
              답
            </span>
          </div>
          {p.worries.rows.map((row) => (
            <div
              key={row.q}
              className="grid gap-2 py-4 md:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] md:items-baseline md:gap-0"
              style={{ borderBottom: `1px solid ${c.border}` }}
            >
              <span className="text-[13.5px] md:text-right" style={{ color: c.body }}>
                “{row.q}”
              </span>
              {/* 지시 화살표 — 도면 표기법 */}
              <span className="hidden justify-self-center md:block" style={{ color: c.primary }}>
                <Arrow />
              </span>
              <span className="text-[14px] font-bold" style={{ color: c.primaryDark }}>
                {row.a}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 과정 부품표 — 헤더행이 채움면이다 ── */}
      <section className="px-5 py-14 sm:px-8" style={{ backgroundColor: c.surface }}>
        <SectionLabel c={c} label={p.courses.label} title={p.courses.title} />

        {/* 묶음 라벨 — 점 하나로만 색을 쓴다. 면으로 칠하면 무지개가 된다 */}
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {SPOOLS.map((s) => (
            <span
              key={s.key}
              className="flex items-center gap-1.5 text-[11.5px] font-bold"
              style={{ color: c.body }}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: spool(s) }} />
              {s.label}
            </span>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-lg" style={{ backgroundColor: c.background }}>
          <div
            className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 px-3.5 py-2.5 text-[11px] font-bold tracking-widest sm:grid-cols-[minmax(0,1fr)_11rem_6rem]"
            style={{ backgroundColor: c.fill, color: c.onFill }}
          >
            <span>과정</span>
            <span className="hidden sm:block">기간</span>
            <span className="text-right">수강료</span>
          </div>
          {p.courses.rows.map((row) => (
            <div
              key={row.title}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3.5 py-3.5 sm:grid-cols-[minmax(0,1fr)_11rem_6rem]"
              style={{ borderBottom: `1px solid ${c.border}` }}
            >
              <span
                className="flex items-center gap-2.5 text-[13.5px] font-bold"
                style={{ color: c.ink }}
              >
                {/* 실 색 선 — 묶음을 나타내는 유일한 표식 */}
                <span
                  className="h-[3px] w-6 shrink-0 rounded-full"
                  style={{ backgroundColor: spoolOf(row.group) }}
                />
                {row.title}
              </span>
              <span className="hidden text-[12px] sm:block" style={{ color: c.muted }}>
                {row.duration}
              </span>
              <span
                className="text-right text-[13px] font-bold tabular-nums"
                style={{ color: c.ink }}
              >
                {row.fee}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11.5px]" style={{ color: c.muted }}>
          {p.courses.note}
        </p>
      </section>

      {/* ── 4) 색 계단 — 작품 타일 자리. 화면에서 색이 가장 크게 보이는 곳 ── */}
      <section className="px-5 py-14 sm:px-8" style={{ backgroundColor: c.background }}>
        <SectionLabel c={c} label={p.gallery.label} title={p.gallery.title} />
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {c.ramp.map((step, i) => (
            <figure key={step} className="min-w-0">
              <div
                className="aspect-[4/5] rounded-lg"
                style={{ backgroundColor: step }}
                aria-hidden="true"
              />
              <figcaption
                className="mt-2 truncate text-[11.5px] font-bold"
                style={{ color: c.ink }}
              >
                {p.gallery.captions[i]}
              </figcaption>
              <span className="font-mono text-[10px] uppercase" style={{ color: c.muted }}>
                {step}
              </span>
            </figure>
          ))}
        </div>
        <p className="mt-5 text-[11.5px]" style={{ color: c.muted }}>
          {p.gallery.note}
        </p>
      </section>

      {/* ── 강사 경력 막대 ── */}
      <section className="px-5 py-14 sm:px-8" style={{ backgroundColor: c.surface }}>
        <SectionLabel c={c} label={p.teachers.label} title={p.teachers.title} />
        <div className="mt-8 space-y-4">
          {p.teachers.rows.map((t) => (
            <div
              key={t.name}
              className="grid grid-cols-[9.5rem_minmax(0,1fr)_3rem] items-center gap-3"
            >
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="truncate text-[13.5px] font-bold" style={{ color: c.ink }}>
                  {t.name}
                </span>
                <span className="truncate text-[10.5px]" style={{ color: c.muted }}>
                  {t.role}
                </span>
              </span>
              {/* 경력 막대 — 면이 아니라 굵은 선. 액센트가 데이터를 인코딩한다 */}
              <span className="h-2.5 w-full rounded-full" style={{ backgroundColor: c.surfaceAlt }}>
                <span
                  className="block h-full rounded-full"
                  style={{
                    width: `${(t.years / p.teachers.maxYears) * 100}%`,
                    backgroundColor: c.primary,
                  }}
                />
              </span>
              <span
                className="text-right text-[12.5px] font-bold tabular-nums"
                style={{ color: c.primaryDark }}
              >
                {t.years}년
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5) 상담 밴드 — 전면 채움 ── */}
      <section
        className="px-5 py-16 text-center sm:px-8"
        style={{ backgroundColor: c.fill, color: c.onFill }}
      >
        <h2 className="text-[22px] font-extrabold sm:text-[27px]">{p.apply.title}</h2>
        <p className="mt-3 text-[13.5px] opacity-85">{p.apply.sub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="rounded-lg px-5 py-3 text-[14px] font-bold"
            style={{ backgroundColor: c.onFill, color: c.fill }}
          >
            {p.apply.ctaPrimary}
          </button>
          <button
            type="button"
            className="rounded-lg border px-5 py-3 text-[14px] font-bold"
            style={{ borderColor: c.onFill, color: c.onFill }}
          >
            {p.apply.ctaSecondary}
          </button>
        </div>
      </section>

      {/* ── 푸터 — 등록번호가 유일한 검증 신호라 반드시 보인다 ── */}
      <footer
        className="px-5 py-10 sm:px-8"
        style={{ backgroundColor: c.surfaceAlt, borderTop: `3px solid ${c.primary}` }}
      >
        <div className="flex items-center gap-2.5">
          <SpoolMark c={c} />
          <span className="text-[14px] font-extrabold" style={{ color: c.ink }}>
            {p.brand.name}
          </span>
        </div>
        <ul className="mt-4 space-y-1 text-[11.5px]" style={{ color: c.muted }}>
          {p.footer.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-5 text-[11px]" style={{ color: c.muted }}>
          {p.footer.copyright}
        </p>
      </footer>
    </div>
  );
}

/** 섹션 번호 라벨 + 제목 */
function SectionLabel({ c, label, title }) {
  return (
    <>
      <span
        className="font-mono text-[11px] font-bold tracking-[0.2em]"
        style={{ color: c.primaryDark }}
      >
        {label}
      </span>
      <h2 className="mt-2 text-[22px] font-extrabold sm:text-[26px]" style={{ color: c.ink }}>
        {title}
      </h2>
    </>
  );
}

/** 로고 마크 — 채움면이라 테마가 바뀌면 바로 눈에 띈다 */
function SpoolMark({ c }) {
  return (
    <span
      className="grid h-9 w-9 shrink-0 place-items-center rounded-md"
      style={{ backgroundColor: c.fill, color: c.onFill }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 4h12M6 20h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 4v16M15 4v16" stroke="currentColor" strokeWidth="1.4" opacity="0.75" />
        <path
          d="M9 8h6M9 12h6M9 16h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** 모눈 제도지 — 히어로 위쪽에만 깔린다 */
function Grid({ c }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-52"
      style={{
        backgroundImage: `linear-gradient(${c.primaryLight} 1px, transparent 1px), linear-gradient(90deg, ${c.primaryLight} 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        opacity: 0.28,
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)",
      }}
    />
  );
}

/**
 * 히어로 도식 — 실제 사이트는 돌아가는 3D 재봉틀이다.
 * `fill` 색면 위에 **반전**(`onFill` 선)으로 올라간다.
 */
function SewingMachine({ c, onPale }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 180"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* 커팅 매트 — 색 계단 중간 단을 쓴다. 진한 면 위에서 유일하게 구분되는 색이다 */}
      <rect x="18" y="136" width="224" height="24" rx="3" fill={c.ramp[2]} />
      <path
        d="M18 148h224M70 136v24M122 136v24M174 136v24M226 136v24"
        stroke={c.fill}
        strokeWidth="0.8"
        opacity="0.45"
      />

      {/* 기계 — 베드 · 기둥 · 암 · 헤드 */}
      <g stroke={c.onFill} strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <rect x="30" y="118" width="196" height="18" rx="3" />
        <path d="M172 118V66" />
        <path d="M226 118V52c0-6-4-10-10-10H62c-6 0-10 4-10 10v46" />
        <path d="M52 98h34" />
        <path d="M86 98V52" />
      </g>

      <circle cx="198" cy="72" r="14" stroke={c.onFill} strokeWidth="2" fill="none" />
      <circle cx="198" cy="72" r="4.5" fill={onPale ? c.primaryDark : c.primary} />

      <path d="M68 98v14" stroke={c.onFill} strokeWidth="3" strokeLinecap="round" />
      <path
        d="M68 112v6"
        stroke={onPale ? c.primaryDark : c.primary}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* 박음질선 — 바늘에서 나와 화면 밖으로 */}
      <path
        d="M68 127H0"
        stroke={onPale ? c.primaryDark : c.primary}
        strokeWidth="2"
        strokeDasharray="7 5"
        strokeLinecap="round"
      />

      {/* 치수선 */}
      <path d="M30 32h196" stroke={c.onFill} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <path d="M30 28v8M226 28v8" stroke={c.onFill} strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

/** 지시 화살표 — 도면 표기법 */
function Arrow() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
      <path
        d="M1 6h16m0 0l-4.5-4.5M17 6l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
