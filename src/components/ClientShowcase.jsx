import { useCallback, useEffect, useState } from "react";
import HomepagePreview from "./HomepagePreview.jsx";
import PaletteStrip from "./PaletteStrip.jsx";
import ThemeCard from "./ThemeCard.jsx";

/**
 * 한 의뢰업체의 컬러 테마 쇼케이스.
 * 좌측(데스크톱) 또는 상단 sticky 칩바(모바일)에서 테마를 선택하면
 * 우측 미리보기가 해당 색감으로 부드럽게 칠해집니다.
 * @param {{ client: object }} props
 */
export default function ClientShowcase({ client }) {
  const { themes } = client;
  const [activeId, setActiveId] = useState(themes[0].id);
  const activeIndex = Math.max(
    0,
    themes.findIndex((t) => t.id === activeId),
  );
  const active = themes[activeIndex] ?? themes[0];
  const c = active.colors;

  /** dir(-1/+1) 만큼 테마를 순환 전환 */
  const cycle = useCallback(
    (dir) =>
      setActiveId((cur) => {
        const i = themes.findIndex((t) => t.id === cur);
        return themes[(i + dir + themes.length) % themes.length].id;
      }),
    [themes],
  );

  // 키보드 ← → 로도 전환
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") cycle(-1);
      else if (e.key === "ArrowRight") cycle(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cycle]);

  return (
    <div className="min-h-screen">
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-neutral-900 text-sm font-black text-white">
              O
            </span>
            <div className="text-[15px] font-extrabold tracking-tight text-neutral-900">
              온케팅 <span className="font-medium text-neutral-400">| 컬러 테마 제안</span>
            </div>
          </div>
          {client.referenceSite && (
            <a
              href={client.referenceSite}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-neutral-300 px-3.5 py-1.5 text-[12px] font-semibold text-neutral-600 transition-colors hover:bg-neutral-100"
            >
              참고 사이트: {client.referenceLabel ?? "보기"} ↗
            </a>
          )}
        </div>
      </header>

      {/* ── 모바일 전용: 컴팩트 인트로 + sticky 가로 칩 선택바 ── */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-[1500px] px-4 pb-3 pt-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1 text-[11.5px] font-bold text-white">
            🎨 {client.concept}
          </span>
          <h1 className="mt-2.5 text-xl font-black tracking-tight text-neutral-900">
            {client.name}
          </h1>
        </div>
        <div className="sticky top-[60px] z-20 border-y border-neutral-200 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-[1500px] overflow-x-auto px-4 py-2.5">
            <div className="flex w-max gap-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveId(t.id)}
                  className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition-colors ${
                    t.id === activeId
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-300 bg-white text-neutral-600"
                  }`}
                >
                  <span
                    className="h-3 w-3 rounded-full ring-1 ring-black/10"
                    style={{ backgroundColor: t.colors.primary }}
                  />
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 본문: 좌측 테마 선택 패널(데스크톱) · 우측 미리보기 */}
      <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-4 py-6 sm:px-5 lg:flex-row lg:items-start">
        {/* ── 좌측 선택 패널 (데스크톱 전용, sticky) ── */}
        <aside className="hidden lg:sticky lg:top-[64px] lg:block lg:max-h-[calc(100vh-80px)] lg:w-[360px] lg:shrink-0 lg:overflow-y-auto lg:pr-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3.5 py-1.5 text-[12px] font-bold text-white">
            🎨 {client.concept}
          </span>
          <h1 className="mt-4 text-2xl font-black leading-tight tracking-tight text-neutral-900">
            {client.name}
          </h1>
          <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">{client.intro}</p>

          <h2 className="mb-3 mt-6 text-[12px] font-bold uppercase tracking-widest text-neutral-400">
            테마 선택 · {themes.length}종
          </h2>
          <div className="space-y-2.5">
            {themes.map((t) => (
              <ThemeCard
                key={t.id}
                theme={t}
                active={t.id === activeId}
                onSelect={() => setActiveId(t.id)}
              />
            ))}
          </div>

          <h2 className="mb-3 mt-7 text-[12px] font-bold uppercase tracking-widest text-neutral-400">
            컬러 팔레트 · 클릭하여 복사
          </h2>
          <PaletteStrip colors={c} />
        </aside>

        {/* ── 우측 미리보기 ── */}
        <main className="min-w-0 flex-1">
          {/* 선택 테마 정보 + 이전/다음 전환 */}
          <div className="mb-4 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <h2 className="text-xl font-black tracking-tight text-neutral-900 sm:text-2xl">
                  {active.name}
                </h2>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                    active.isReference
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {active.source}
                </span>
                <span className="font-mono text-[12px] uppercase tracking-wider text-neutral-400">
                  {active.nameEn}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={() => cycle(-1)}
                  aria-label="이전 테마"
                  className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 text-neutral-600 transition-colors hover:bg-neutral-100"
                >
                  <Chevron dir="left" />
                </button>
                <span className="w-12 text-center text-[12px] font-bold tabular-nums text-neutral-500">
                  {activeIndex + 1} / {themes.length}
                </span>
                <button
                  type="button"
                  onClick={() => cycle(1)}
                  aria-label="다음 테마"
                  className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 text-neutral-600 transition-colors hover:bg-neutral-100"
                >
                  <Chevron dir="right" />
                </button>
              </div>
            </div>
            <p className="mt-3 line-clamp-2 min-h-[2.75rem] text-[13.5px] leading-relaxed text-neutral-600">
              {active.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {active.mood.map((m) => (
                <span
                  key={m}
                  className="rounded-md px-2.5 py-1 text-[12px] font-semibold"
                  style={{ backgroundColor: c.accentSoft, color: c.primaryDark }}
                >
                  #{m}
                </span>
              ))}
            </div>
          </div>

          {/* 전체 화면 미리보기 */}
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-[13px] font-bold uppercase tracking-widest text-neutral-400">
              실제 적용 화면 · 전체 페이지
            </h3>
            <span className="hidden text-[12px] text-neutral-400 sm:inline">
              ← → 키 또는 ◀ ▶ 로 테마 전환
            </span>
          </div>
          <HomepagePreview colors={c} preview={client.preview} />
        </main>
      </div>

      {/* 푸터 */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-2 px-5 py-7 text-[12px] text-neutral-400 sm:flex-row">
          <span>© 2026 온케팅 (ONKETING) · 컬러 테마 제안</span>
          <span>{client.name} 홈페이지 제작 프로젝트</span>
        </div>
      </footer>
    </div>
  );
}

/** 이전/다음 전환용 셰브런 아이콘 */
function Chevron({ dir }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}
