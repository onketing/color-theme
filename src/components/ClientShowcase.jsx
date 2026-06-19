import { useState } from "react";
import HomepagePreview from "./HomepagePreview.jsx";
import PaletteStrip from "./PaletteStrip.jsx";
import ThemeCard from "./ThemeCard.jsx";

/**
 * 한 의뢰업체의 컬러 테마 쇼케이스.
 * 좌측 패널에서 테마를 선택하면 우측 미리보기가 해당 색감으로 즉시 칠해집니다.
 * @param {{ client: object }} props
 */
export default function ClientShowcase({ client }) {
  const { themes } = client;
  const [activeId, setActiveId] = useState(themes[0].id);
  const active = themes.find((t) => t.id === activeId) ?? themes[0];
  const c = active.colors;

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

      {/* 본문: 좌측 테마 선택 패널 · 우측 미리보기 */}
      <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-4 py-6 sm:px-5 lg:flex-row lg:items-start">
        {/* ── 좌측 선택 패널 (sticky) ── */}
        <aside className="lg:sticky lg:top-[73px] lg:max-h-[calc(100vh-89px)] lg:w-[360px] lg:shrink-0 lg:overflow-y-auto lg:pr-1">
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
          {/* 선택 테마 정보 */}
          <div className="mb-4 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
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
            <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-neutral-600">
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
            <span className="text-[12px] text-neutral-400">↓ 스크롤하여 전체 확인</span>
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
