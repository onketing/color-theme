import { useState } from "react";
import HomepagePreview from "./HomepagePreview.jsx";
import PaletteStrip from "./PaletteStrip.jsx";
import ThemeCard from "./ThemeCard.jsx";

/**
 * 한 의뢰업체의 컬러 테마 쇼케이스. 공유 링크(/<slug>)로 접근하면 이 업체 색감만 보입니다.
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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
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

      {/* 히어로 인트로 */}
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:pt-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3.5 py-1.5 text-[12px] font-bold text-white">
          🎨 {client.concept}
        </span>
        <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-neutral-900 sm:text-5xl">
          {client.name}
          <br />
          <span className="text-neutral-400">홈페이지 컬러 테마 제안</span>
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-neutral-600 sm:text-base">
          {client.intro}
        </p>
      </section>

      {/* 테마 선택 탭 */}
      <section className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap gap-2">
          {themes.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveId(t.id)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition-all ${
                t.id === activeId
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400"
              }`}
            >
              <span
                className="h-3.5 w-3.5 rounded-full ring-1 ring-black/10"
                style={{ backgroundColor: t.colors.primary }}
              />
              {t.name}
            </button>
          ))}
        </div>
      </section>

      {/* 선택된 테마 정보 + 팔레트 */}
      <section className="mx-auto mt-8 max-w-6xl px-5">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2.5">
            <h2 className="text-2xl font-black tracking-tight text-neutral-900">{active.name}</h2>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                active.isReference ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600"
              }`}
            >
              {active.source}
            </span>
            <span className="font-mono text-[12px] uppercase tracking-wider text-neutral-400">
              {active.nameEn}
            </span>
          </div>
          <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-neutral-600">
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

          <h3 className="mb-3 mt-7 text-[13px] font-bold uppercase tracking-widest text-neutral-400">
            컬러 팔레트 · 클릭하여 복사
          </h3>
          <PaletteStrip colors={c} />
        </div>
      </section>

      {/* 전체 화면 미리보기 (풀폭) */}
      <section className="mx-auto mt-10 max-w-6xl px-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[13px] font-bold uppercase tracking-widest text-neutral-400">
            실제 적용 화면 미리보기 · 전체 페이지
          </h3>
          <span className="text-[12px] text-neutral-400">↓ 스크롤하여 전체 확인</span>
        </div>
        <HomepagePreview colors={c} preview={client.preview} />
      </section>

      {/* 전체 비교 그리드 */}
      <section className="mx-auto mt-20 max-w-6xl px-5 pb-24">
        <div className="border-t border-neutral-200 pt-12">
          <h2 className="text-2xl font-black tracking-tight text-neutral-900">
            {themes.length}가지 테마 한눈에 비교
          </h2>
          <p className="mt-2 text-[14px] text-neutral-500">
            카드를 클릭하면 위쪽 미리보기에 바로 적용됩니다.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((t) => (
              <ThemeCard
                key={t.id}
                theme={t}
                active={t.id === activeId}
                onSelect={() => {
                  setActiveId(t.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-7 text-[12px] text-neutral-400 sm:flex-row">
          <span>© 2026 온케팅 (ONKETING) · 컬러 테마 제안</span>
          <span>{client.name} 홈페이지 제작 프로젝트</span>
        </div>
      </footer>
    </div>
  );
}
