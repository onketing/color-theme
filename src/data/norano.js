// 노라노패션학원 — 초록 계열 색감 제안 (/norano)
//
// ※ 초이스(브라운 톤 비교)와 다른 점:
//    1) 이 프로젝트는 **이미 초록이 브랜드색으로 확정**돼 있다(학원 지정 2026-09-07).
//       그래서 "초록이냐 아니냐"가 아니라 **어떤 초록이냐**만 고른다.
//    2) 미리보기가 법무 목업이 아니라 **실제 노라노 사이트 구조**다
//       (히어로 큰 숫자 · 고민 표 · 과정 부품표 · 강사 경력 막대).
//
// ※ ⚠️ **2026-09-08 개정.** 첫 판은 열 종이었고 초록을 3px 선·작은 점에만 썼다.
//    실제 사이트 규칙에는 충실했지만 **테마를 바꿔도 화면이 거의 안 변했다**
//    (사용자 지적). 색감을 고르는 화면인데 색이 안 보이면 쓸모가 없다. 그래서
//      - 종을 10 → **27** 로 늘리고 축을 넷으로 갈랐다
//        (밝은 종이 / 연한 초록 / 고급 초록 / 종이색 변경)
//      - 미리보기를 **큰 색면 위주**로 다시 짰다(색면 히어로 · 숫자 밴드 · 색 계단 ·
//        표 헤더 채움 · 전면 CTA 밴드). `NoranoPreview.jsx` 머리말 참고
//    큰 면을 칠하는 색은 **언제나 `primaryDark`/`accent`** 다 — 밝은 `primary` 위에
//    흰 글씨는 AA 에 못 미친다(커팅 매트 기준 3.13:1). 그 규칙은 깨지 않았다.
//
// ※ 색값은 **계산한 값**이다 — oklch 로 설계하고 sRGB 로 변환한 뒤 WCAG 상대휘도로
//   대비를 쟀다. 스물일곱 종 전부 아래 14개 항목이 AA(4.5:1) 이상이다:
//     제목/종이1·2·3 · 제목/옅은면 · 본문/종이1·3 · 본문/옅은면 · 보조/종이3 ·
//     글씨초록/종이1·2·3 · 글씨초록/옅은면 · 글씨면 위 글씨 · 매트면 위 글씨
//   (norano-fashion `DESIGN.md` §2.3 과 같은 방식. 눈대중 값은 쓰지 않는다)
//
// ※ 역할 매핑 — 이 쇼케이스의 키 이름 ↔ 노라노 `globals.css` 토큰
//     primary      → --color-thread       선·마커 전용. **글씨를 얹지 않는다**
//     primaryDark  → --color-thread-ink   글씨·버튼면·큰 색면. AA 를 책임지는 쪽
//     primaryLight → 밑줄·옅은 선
//     accent       → --color-mat          중간 색면(흰 글씨가 올라간다)
//     accentSoft   → --color-thread-soft  옅은 강조면 — 섹션 하나를 통째로 깐다
//     ramp         → 5단 색 계단. 작품 타일에 쓴다(토큰 아님, 이 화면 전용)
//     background / surface / surfaceAlt → --color-paper / paper-2 / paper-3
//     ink / body / muted / border       → --color-ink / body / muted / rule
//
// ⚠️ **어두운 화면 3종에서는 `onPrimary` 가 흰색이 아니다.** 밝은 초록이 버튼면이
//    되므로 그 위 글씨는 어두운 색이다. 컴포넌트는 `primaryDark`+`onPrimary` 를
//    항상 짝으로만 쓴다 — 한쪽만 갖다 쓰면 어두운 테마에서 글씨가 사라진다.

/** 좌측 목록의 구분선 순서. `themes[].group` 값과 정확히 일치해야 한다 */
export const GROUP_ORDER = [
  { key: "밝은 종이", note: "종이·글씨색 고정 · 초록만 다름" },
  { key: "연한 초록", note: "큰 색면이 연한 색 · 글씨는 어둡게" },
  { key: "고급 초록", note: "저채도 한 줄기 · 명도 6단 사다리" },
  { key: "종이색 변경", note: "초록과 종이색을 함께 옮김" },
];

/**
 * 과정 묶음 실 색상 — `globals.css` 의 `--color-spool-*` 실측값.
 *
 * ⚠️ 실 색이 **브랜드 초록과 겹치는지**가 테마 선택의 판단 근거가 된다 — 파인 틸이
 *    'short'(청록)와 35°밖에 안 떨어지는 것이 그 예다.
 */
export const SPOOLS = [
  { key: "making", label: "옷 만들기", hex: "#2b3fa8", hue: 265 },
  { key: "repair", label: "수선·리폼", hex: "#6d389e", hue: 305 },
  { key: "license", label: "자격증", hex: "#96215e", hue: 350 },
  { key: "pro", label: "실무·창업", hex: "#b85416", hue: 47 },
  { key: "short", label: "특강·체험", hex: "#0f6e92", hue: 220 },
];

/**
 * 미리보기에 들어가는 콘텐츠 — 전부 `norano-fashion/src/lib/site-data.ts` 실측값이다.
 * 여기서 숫자를 새로 만들지 않는다(근거 없는 수치는 학원 광고에서 법적 문제가 된다).
 */
const preview = {
  brand: {
    name: "노라노패션학원",
    nameEn: "NORANO FASHION ACADEMY",
    // 새 도메인 미확정 — 현재 살아 있는 주소를 그대로 쓴다
    domain: "norano.imweb.me",
  },
  topbar: {
    menu: ["학원 소개", "교육 과정", "수강생", "소식"],
    cta: "상담 신청",
    phone: "02-744-1300",
    hours: "평일 09:00~18:00",
  },
  hero: {
    headline: ["40년 동안", "멈추지 않았습니다."],
    facts: [
      { value: "1986", unit: "년", label: "개원" },
      { value: "10,000", unit: "명+", label: "누적 수강생" },
      { value: "210", unit: "년", label: "강사 경력 합계" },
      { value: "16", unit: "권", label: "출판 교재" },
    ],
    transit: "신설동역 11번 출구 200m · 동묘앞역 2번 출구 350m",
  },
  worries: {
    title: "배워보고 싶은데 걸리는 게 있으셨죠?",
    rows: [
      { q: "손재주가 없는데 될까요?", a: "감이 아니라 순서로 만듭니다" },
      { q: "미싱을 한 번도 안 잡아봤어요.", a: "손바느질과 미싱 사용법부터 시작합니다" },
      {
        q: "수강료가 안 나와 있어서 물어보기가 부담스러워요.",
        a: "22개 과정 전부의 기간과 수강료를 적어 뒀습니다",
      },
      { q: "직장을 다니면서 배울 수 있나요?", a: "야간반·토요반·일요반이 있고 수시로 접수합니다" },
    ],
  },
  courses: {
    label: "01 / 과정",
    title: "22개 과정, 기간과 수강료를 전부 적었습니다",
    rows: [
      {
        group: "making",
        title: "옷만들기 (패턴+봉제)",
        duration: "초·중·고급 각 3개월 · 주4일",
        fee: "390,000원",
      },
      {
        group: "repair",
        title: "수선·리폼",
        duration: "본과 6개월 · 속성 3개월",
        fee: "430,000원",
      },
      { group: "license", title: "여성복기능사", duration: "6개월 · 주4일", fee: "390,000원" },
      { group: "pro", title: "실무패턴 & 재단", duration: "총 6개월 · 주2일", fee: "500,000원" },
      {
        group: "short",
        title: "도식화 · 작업지시서 특강",
        duration: "4주 · 주1회 총 4회",
        fee: "260,000원",
      },
      { group: "short", title: "원데이 클래스", duration: "하루", fee: "30,000원" },
    ],
    note: "서울시 평생교육이용권(연 35만원) · 국비 교육(내일배움카드) 사용 가능 · 수시 접수",
  },
  gallery: {
    label: "04 / 작품",
    title: "수강생 작품이 들어갈 자리입니다",
    /**
     * ⚠️ 가짜 사진을 넣지 않는다. 이 타일은 **그 테마의 명도 5단계**(`colors.ramp`)이고,
     *    실제 사이트에서는 이 자리가 작품 사진이 된다. 색이 화면에서 가장 크게
     *    보이는 곳이라 테마 비교에 제일 쓸모가 있다.
     */
    note: "타일은 이 색의 명도 5단계입니다. 실제 화면에서는 이 자리에 작품 사진이 들어갑니다.",
    captions: ["옷만들기", "패턴", "한복", "수선·리폼", "여성복기능사"],
  },
  teachers: {
    label: "06 / 강사진",
    title: "강사 7명, 경력을 합치면 210년입니다",
    rows: [
      { name: "이종호", role: "양장·양복기능사", years: 50 },
      { name: "허순옥", role: "이다채수선실 대표", years: 48 },
      { name: "이주삼", role: "실기시험 위원", years: 40 },
      { name: "김재균", role: "Oneness Pattern", years: 34 },
      { name: "이정화", role: "직업훈련교사", years: 26 },
      { name: "김순덕", role: "소피아공방 대표", years: 6 },
      { name: "이정원", role: "아이앤유앤아이", years: 6 },
    ],
    /** 막대 길이의 기준 — 손으로 고른 값이 아니라 위 표의 최대값이다 */
    maxYears: 50,
  },
  apply: {
    title: "수시 접수입니다. 오늘 물어보셔도 됩니다.",
    sub: "전화 상담이 가장 빠릅니다. 첫 상담 주차 1시간 무료.",
    ctaPrimary: "전화 상담 02-744-1300",
    ctaSecondary: "상담 신청서 쓰기",
  },
  footer: {
    lines: [
      "서울 종로구 종로 393-1 (숭인동) 4층",
      "학원 등록번호 제05197100402호 · 사업자등록번호 101-90-46732",
      "대표 이주삼 · 이정화 | norano744@naver.com",
    ],
    copyright: "© 2026 노라노패션학원",
  },
};

/**
 * 열 종. 앞의 여덟은 종이를 고정하고 초록만 바꾼 것,
 * 뒤의 둘은 종이색까지 함께 옮긴 안이다.
 */
/**
 * 스물일곱 종. **네 묶음, 묶음마다 바꾸는 축이 다르다.**
 *
 *   밝은 종이 (10) — 종이·글씨색을 노라노 현재 값으로 고정하고 **초록만** 바꾼다.
 *                    노랑 끝(116°)에서 파랑 끝(190°)까지 색상환을 훑는다.
 *   연한 초록 (7)  — **큰 색면 자체가 연한 색**인 묶음. 여기서만 `fill` 이 밝고
 *                    그 위 글씨가 어둡다.
 *   고급 초록 (6)  — **사다리다.** 아래 ★ 참고.
 *   종이색 변경 (4) — 초록과 **종이색을 함께** 옮긴다. 화면 전체의 온도가 바뀐다.
 *
 * ★ 고급 초록은 초이스(로어스 브라운 명도 사다리)와 같은 방식이다 —
 *   **hue(160°)와 낮은 채도를 묶어 두고 명도만 한 단계씩 내린다.** 인접 단끼리의
 *   대비비가 1.14~1.17 로 고르게 잡혀 있어 여섯 단이 눈에 균등하게 읽힌다.
 *   ⚠️ 어두운 쪽은 같은 명도 차가 대비로 덜 벌어져, 아래로 갈수록 간격을 **조금씩
 *      넓혔다**. 등간격으로 내리면 마지막 두 단이 서로 구분되지 않는다(실측).
 *
 *   「고급」을 카테고리(럭셔리 웹)가 아니라 **주제**에서 뽑았다 — 옷에서 고급이
 *   어디서 나오는가. 여섯 단의 이름은 실제로 그 밝기의 초록이 나오는 옷 재료이고,
 *   이름 순서가 곧 밝기 순서다: 모직 → 트위드 → 코트 → 안감 → 벨벳 → 먹.
 *   hue 를 160°(청록 쪽)로 비껴 둔 것도 근거가 있다. 모직·안감의 초록은 황변을
 *   피하려고 청록 쪽으로 염색하고, 순색 초록 원단은 싸구려로 보인다.
 *   ⚠️ **크림 배경 + 포레스트그린 + 세리프**로 가지 않았다. 그게 "고급"의 디폴트지만
 *      루트 `CLAUDE.md` 금지 항목이고, 주제와 무관하게 나오는 관성이다.
 *
 * ⚠️ **2026-09-08 「어두운 화면」 3종을 걷어냈다(사용자 지시).** 되살리려면
 *    `darkPaper()` 계열 종이 세트와 `onFill` 의 어두운 분기, 실 색의 `hexDark` 를
 *    함께 복원해야 한다 — 지금은 그 셋 다 없다.
 *
 * ★ `fit` — 학원이 사전조사표 6번에서 고른 두 낱말 중 이 테마가 답하는 것.
 *   ("깔끔하고 단정한" · "밝고 활기찬", 2026-09-08 확인). 둘 다 있는 테마가
 *   지정에 가장 가깝다. **연한 초록 묶음에 둘 다 만족하는 안이 몰려 있고**,
 *   반대로 **고급 초록은 여섯 단 전부 "단정"에만 답한다** — 고급은 채도를 죽여서
 *   만드는 것이라 "활기"와 방향이 반대다. 고르실 때 알고 계셔야 하는 상충이다.
 *
 * ⚠️ `group` 은 좌측 목록의 구분선 라벨이다. 값을 바꾸면 `GROUP_ORDER` 도 같이 고친다.
 */
const themes = [
  {
    id: "cutting-mat",
    name: "커팅 매트",
    nameEn: "Cutting Mat",
    group: "밝은 종이",
    source: "이전 색 · 09-07~09-10",
    isReference: true,
    fit: ["단정", "활기"],
    tagline: "지금 사이트에 들어가 있는 초록 · #10A760",
    description:
      "2026-09-11 이전까지 사이트에 들어가 있던 초록입니다. 로터리 커팅 매트에서 뽑았습니다. 재단하는 작업대는 어디서나 이 색이라, 재봉을 하는 사람은 0.5초에 알아봅니다. 장식이 아니라 이 학원이 매일 쓰는 물건의 색이라는 점이 다른 후보와 갈리는 지점입니다. ",
    mood: ["기준", "작업대", "선명함"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#10a760",
      primaryDark: "#007142",
      primaryLight: "#6cc28c",
      accent: "#237356",
      accentSoft: "#e8f8ee",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#007142",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#c2e9ce", "#88c99e", "#48a870", "#278250", "#125c35"],
    },
  },

  {
    id: "yellow-green",
    name: "옐로우 그린",
    nameEn: "Yellow Green",
    group: "밝은 종이",
    source: "노랑 쪽 끝",
    fit: ["활기"],
    tagline: "스펙트럼의 노랑 끝 · 새싹 쪽",
    description:
      "초록을 노랑 쪽 끝까지 민 색입니다. 새싹·연둣빛으로 읽혀 시작하는 느낌이 강하고, '처음 배우는 사람'을 앞세우는 화면과 붙습니다. 반대로 40년이라는 시간과는 가장 안 어울립니다.",
    mood: ["시작", "새싹", "가벼움"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#a0b000",
      primaryDark: "#5c6300",
      primaryLight: "#becd6a",
      accent: "#626b1e",
      accentSoft: "#f4f6df",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#5c6300",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#dbe3b8", "#b4bf77", "#8f9c2c", "#6c7703", "#4b5300"],
    },
  },

  {
    id: "lime",
    name: "라임",
    nameEn: "Lime",
    group: "밝은 종이",
    source: "노랑 쪽 · 채도 최대",
    fit: ["활기"],
    tagline: "가장 쨍한 쪽",
    description:
      "노랑 쪽에 채도를 최대로 올린 초록입니다. 스물네 종 중 화면이 가장 시끄럽고 젊습니다. '밝고 활기찬'에 가장 직접적으로 답하지만 '깔끔하고 단정한'과는 정면으로 부딪칩니다.",
    mood: ["활기", "주목", "젊음"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#7fc52e",
      primaryDark: "#437105",
      primaryLight: "#a5da78",
      accent: "#51782b",
      accentSoft: "#eef9e1",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#437105",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#cee8ba", "#9dc67b", "#6ea536", "#4e7f14", "#345900"],
    },
  },

  {
    id: "grass",
    name: "그래스 그린",
    nameEn: "Grass Green",
    group: "밝은 종이",
    source: "학원 확정 · 적용 완료",
    /** 2026-09-11 학원이 스물일곱 종 중에서 고른 색. 사이트에 이미 들어가 있다 */
    isChosen: true,
    fit: ["활기"],
    tagline: "학원이 고르신 색 · #58B84F",
    description:
      "노랑과 청록 사이 한가운데의 초록입니다. 설명이 필요 없는 '그냥 초록'이라 누구나 초록으로 인식하고, 라임보다 차분하면서 커팅 매트보다 밝습니다. 특정 물건에 묶이지 않는 것 — 올리브처럼 흙을, 청록처럼 물을 끌고 오지 않는 것 — 이 학원 이름 아래 놓이는 색으로는 장점입니다. 2026-09-11 학원이 이 색을 고르셨고, 노라노패션학원 사이트에 적용을 마쳤습니다.",
    mood: ["보편", "선명", "친숙"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#58b84f",
      primaryDark: "#2d7226",
      primaryLight: "#8cd384",
      accent: "#3f7739",
      accentSoft: "#eaf9e6",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#2d7226",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#c8e9c4", "#93c88d", "#5da756", "#3e8038", "#265b22"],
    },
  },

  {
    id: "olive",
    name: "올리브",
    nameEn: "Olive",
    group: "밝은 종이",
    source: "노랑 쪽 · 채도↓",
    fit: ["단정"],
    tagline: "유일하게 따뜻한 쪽 · 원단 느낌",
    description:
      "노랑 기를 넣고 채도를 내려 흙빛이 도는 초록입니다. 밝은 종이 열 종 중 유일하게 따뜻한 쪽이라 천·리넨을 연상시키고, 다른 후보들보다 옷감에 가깝습니다. 커팅 매트라는 근거에서는 가장 멀어집니다.",
    mood: ["따뜻함", "천", "빈티지"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#77954d",
      primaryDark: "#4d6027",
      primaryLight: "#9cb57e",
      accent: "#556838",
      accentSoft: "#f0f5e5",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#4d6027",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#d7e3c9", "#acbf96", "#839c63", "#617745", "#43542c"],
    },
  },

  {
    id: "deep-forest",
    name: "딥 포레스트",
    nameEn: "Deep Forest",
    group: "밝은 종이",
    source: "채도↓ 명도↓",
    fit: ["단정"],
    tagline: "채도를 내려 차분하게",
    description:
      "기준의 색상은 유지한 채 밝기와 채도를 함께 내렸습니다. 40년 된 학원의 무게가 잘 실리고, 큰 색면에 흰 글씨를 얹어도 여유가 큽니다(8.7:1). '밝고 활기찬'에서는 멉니다.",
    mood: ["차분함", "연륜", "신뢰"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#418d59",
      primaryDark: "#1c5430",
      primaryLight: "#76ae84",
      accent: "#295c3d",
      accentSoft: "#ebf6ed",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#1c5430",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#cce6d2", "#99c4a4", "#67a277", "#487c57", "#2e583b"],
    },
  },

  {
    id: "bottle",
    name: "보틀 그린",
    nameEn: "Bottle Green",
    group: "밝은 종이",
    source: "가장 깊은 초록",
    fit: ["단정"],
    tagline: "밝은 종이 + 가장 어두운 초록 · 대비 극단",
    description:
      "밝은 종이 위에 가장 어두운 초록을 얹었습니다. 대비가 9.4:1 까지 벌어져 색면과 종이의 경계가 칼같이 서고, 클래식한 양장점의 인상이 납니다. 색이 '밝다·어둡다'로만 읽히길 원하실 때 가장 강한 안입니다.",
    mood: ["고급", "클래식", "대비"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#157c4f",
      primaryDark: "#005031",
      primaryLight: "#60a37d",
      accent: "#18573b",
      accentSoft: "#e7f5ec",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#005031",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#c9e7d4", "#94c5a7", "#5ea47c", "#3f7e5b", "#27593e"],
    },
  },

  {
    id: "sage",
    name: "세이지",
    nameEn: "Sage",
    group: "밝은 종이",
    source: "채도만 크게 뺌",
    fit: ["단정"],
    tagline: "중간 밝기의 회녹",
    description:
      "색상은 기준과 같고 채도만 크게 뺐습니다. 초록이라기보다 회녹으로 읽혀 화면이 매우 단정해집니다. '깔끔하고 단정한'에 잘 맞고 '밝고 활기찬'에는 안 맞습니다. 과정표의 실 색 다섯을 가장 방해하지 않는 안이기도 합니다.",
    mood: ["단정", "조용함", "절제"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#789d84",
      primaryDark: "#476350",
      primaryLight: "#a3beab",
      accent: "#516a59",
      accentSoft: "#edf6f0",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#476350",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#d4e2d8", "#a8beaf", "#7d9b86", "#5c7664", "#3f5345"],
    },
  },

  {
    id: "emerald",
    name: "에메랄드",
    nameEn: "Emerald",
    group: "밝은 종이",
    source: "파랑 쪽 · 선명",
    fit: ["단정", "활기"],
    tagline: "청록 기가 도는 선명한 초록",
    description:
      "기준을 파랑 쪽으로 옮긴 초록입니다. 같은 밝기에서 더 차갑고 정밀해 보여 치수선·도식화 같은 제도 언어와 잘 붙습니다. 선명하면서도 시끄럽지 않아 두 낱말을 함께 만족하는 몇 안 되는 진한 색입니다.",
    mood: ["정밀", "청량", "단정"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#00b487",
      primaryDark: "#00765c",
      primaryLight: "#6bcba9",
      accent: "#287963",
      accentSoft: "#e4f9f2",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#00765c",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#beead7", "#80c9ad", "#34a984", "#088263", "#005c44"],
    },
  },

  {
    id: "pine-teal",
    name: "파인 틸",
    nameEn: "Pine Teal",
    group: "밝은 종이",
    source: "파랑 쪽 끝까지",
    caution:
      "과정표 '특강·체험' 실 색(청록 #0F6E92)과 35°밖에 안 떨어져 묶음 구분이 흐려집니다. 고르시면 그 실 색을 다른 자리로 옮겨야 합니다.",
    fit: ["단정"],
    tagline: "초록과 청록의 경계",
    description:
      "초록을 파랑 쪽 끝까지 민 안입니다. 가장 차갑고 기술적으로 읽혀 도면·설계 인상이 강합니다. 다만 과정 묶음을 구분하는 실 색 다섯 중 '특강·체험'의 청록과 색상 거리가 35°밖에 안 돼, 이 안을 고르면 그 실 색을 옮기는 작업이 따라옵니다.",
    mood: ["기술", "차가움", "정밀"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#1b9388",
      primaryDark: "#00615d",
      primaryLight: "#6bb4ab",
      accent: "#166863",
      accentSoft: "#e5f7f5",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#00615d",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#c5e6e1", "#8dc4bc", "#52a299", "#337d74", "#1d5851"],
    },
  },

  {
    id: "pale-olive",
    name: "연한 올리브",
    nameEn: "Pale Olive",
    group: "연한 초록",
    source: "노랑 쪽",
    fit: ["단정", "활기"],
    tagline: "연한 초록 중 가장 따뜻한 쪽",
    description:
      "연한 초록 일곱 종의 노랑 끝입니다. 색면이 옅은 카키에 가까워 종이·마 같은 소재를 떠올리게 하고, 밝지만 들뜨지 않습니다. 진한 올리브와 달리 무겁지 않은 것이 차이입니다.",
    mood: ["따뜻함", "소재", "포근함"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#b8c77c",
      primaryDark: "#545c1e",
      primaryLight: "#d9e5b1",
      accent: "#cad79b",
      accentSoft: "#f4f7e2",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#d8e3b2",
      onFill: "#0f1319",
      onAccent: "#0f1319",
      ramp: ["#eff2e4", "#e1e6ce", "#d3dab9", "#c3cda3", "#b3be8a"],
    },
  },

  {
    id: "pistachio",
    name: "피스타치오",
    nameEn: "Pistachio",
    group: "연한 초록",
    source: "노랑 쪽 · 선명",
    fit: ["단정", "활기"],
    tagline: "연둣빛 파스텔 · 가장 밝고 부드럽다",
    description:
      "연한 초록 중 노랑 기가 가장 선명한 색입니다. 큰 색면이 파스텔 연두라 화면이 즉시 밝아지면서도 라임 같은 자극은 없습니다. 두 낱말을 동시에 만족하는 대표적인 안입니다.",
    mood: ["파스텔", "산뜻", "부드러움"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#a4ce6c",
      primaryDark: "#4b6317",
      primaryLight: "#ceecab",
      accent: "#bbdd92",
      accentSoft: "#eff9e2",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#cce8ab",
      onFill: "#0f1319",
      onAccent: "#0f1319",
      ramp: ["#ebf4e1", "#dae9ca", "#cadeb3", "#b9d29b", "#a6c381"],
    },
  },

  {
    id: "apple-mint",
    name: "애플민트",
    nameEn: "Apple Mint",
    group: "연한 초록",
    source: "중간 · 채도 최대",
    fit: ["단정", "활기"],
    tagline: "연한 초록 중 가장 초록다운 쪽",
    description:
      "연한 초록 중 채도가 가장 높아 '연하다'와 '초록이다'가 둘 다 분명합니다. 파스텔로 흐려지지 않으면서 색면이 밝아, 브랜드색이 초록이라는 사실이 옅은 톤에서도 남습니다.",
    mood: ["선명", "산뜻", "활기"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#6dd17f",
      primaryDark: "#196b34",
      primaryLight: "#acf0b5",
      accent: "#94e29f",
      accentSoft: "#e5fbe7",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#acecb4",
      onFill: "#0f1319",
      onAccent: "#0f1319",
      ramp: ["#e4f6e5", "#ceecd1", "#b8e3bd", "#a1d7a8", "#87ca91"],
    },
  },

  {
    id: "light-sage",
    name: "라이트 세이지",
    nameEn: "Light Sage",
    group: "연한 초록",
    source: "채도 최소",
    fit: ["단정"],
    tagline: "가장 조용한 연한 초록 · 거의 무채",
    description:
      "연한 초록 중 채도를 가장 크게 뺐습니다. 색면이 회색에 아주 가까워 초록이라기보다 '밝은 회녹'으로 읽히고, 스물네 종 중 화면이 가장 조용합니다. 사진·작품이 올라갔을 때 그 색을 가장 안 건드립니다.",
    mood: ["절제", "조용함", "무채"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#a9c7b0",
      primaryDark: "#48624e",
      primaryLight: "#d2e6d6",
      accent: "#bfd6c4",
      accentSoft: "#eff7f0",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#cfe2d3",
      onFill: "#0f1319",
      onAccent: "#0f1319",
      ramp: ["#ecf2ed", "#dce6de", "#cddacf", "#bbcdbf", "#a9beae"],
    },
  },

  {
    id: "mint",
    name: "민트",
    nameEn: "Mint",
    group: "연한 초록",
    source: "파랑 쪽",
    fit: ["단정", "활기"],
    tagline: "청록 기가 도는 연한 초록",
    description:
      "연한 초록을 파랑 쪽으로 옮긴 색입니다. 노랑 쪽 파스텔이 '따뜻하고 부드럽다'면 이쪽은 '시원하고 깨끗하다'로 읽혀, 위생·정돈된 작업실 인상이 납니다.",
    mood: ["청량", "깨끗함", "시원함"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#5dd0a9",
      primaryDark: "#006c52",
      primaryLight: "#a8eed2",
      accent: "#8ce0c0",
      accentSoft: "#e2faf1",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#a8ead0",
      onFill: "#0f1319",
      onAccent: "#0f1319",
      ramp: ["#e2f5ed", "#cbecde", "#b4e2cf", "#9bd6bf", "#7fc9ad"],
    },
  },

  {
    id: "celadon",
    name: "청자",
    nameEn: "Celadon",
    group: "연한 초록",
    source: "파랑 쪽 · 채도↓",
    fit: ["단정"],
    tagline: "회청록 · 도자기 유약 톤",
    description:
      "청자 유약의 회청록입니다. 연한 초록 중 가장 절제된 쪽이고, 한국적인 색이라는 점에서 한복 과정이 있는 이 학원과 근거가 닿습니다. 다만 초록으로 인식되기까지 시간이 조금 걸립니다.",
    mood: ["한국적", "절제", "은은함"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#89caba",
      primaryDark: "#29655b",
      primaryLight: "#bbe7dc",
      accent: "#a6d8cc",
      accentSoft: "#e7f8f3",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#bae3d9",
      onFill: "#0f1319",
      onAccent: "#0f1319",
      ramp: ["#e7f3f0", "#d4e8e3", "#c1ddd6", "#acd0c7", "#96c2b7"],
    },
  },

  {
    id: "aqua",
    name: "아쿠아",
    nameEn: "Aqua",
    group: "연한 초록",
    source: "파랑 끝",
    fit: ["단정", "활기"],
    tagline: "물색에 가장 가까운 쪽",
    description:
      "연한 초록 일곱 종의 파랑 끝입니다. 초록보다 물색으로 읽혀 화면이 가장 시원하고 가볍습니다. 밝고 단정한 두 낱말에는 잘 답하지만, '초록으로 해달라'는 지정에서는 가장 멀어집니다.",
    mood: ["시원함", "가벼움", "청량"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#5ecbcb",
      primaryDark: "#006567",
      primaryLight: "#aaeaea",
      accent: "#90dcdb",
      accentSoft: "#e3f8f8",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#abe6e5",
      onFill: "#0f1319",
      onAccent: "#0f1319",
      ramp: ["#e2f5f4", "#cbeae9", "#b4e0df", "#9bd4d3", "#7fc6c5"],
    },
  },

  {
    id: "lux-1-sage-wool",
    name: "세이지 모직",
    nameEn: "Sage Wool",
    group: "고급 초록",
    source: "1단계 · 사다리 맨 위",
    fit: ["단정"],
    tagline: "회색이 섞인 밝은 모직 · 채도는 기준의 3분의 1",
    description:
      "고급 여섯 단의 맨 위입니다. 밝은 모직에서 온 초록이고, 채도가 커팅 매트의 3분의 1이라 '초록'보다 '초록기가 도는 회색'으로 읽힙니다. 여기서 아래로 여섯 단, 같은 색이 한 단계씩 깊어집니다. 글씨 대비 6.5:1.",
    mood: ["절제", "가벼움", "회녹"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#729682",
      primaryDark: "#3c6550",
      primaryLight: "#a6c2b2",
      accent: "#4b6e5b",
      accentSoft: "#edf6f0",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#3c6550",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#a1c9b2", "#89af99", "#719681", "#597e6a", "#436753"],
    },
  },
  {
    id: "lux-2-herringbone",
    name: "헤링본",
    nameEn: "Herringbone",
    group: "고급 초록",
    source: "2단계 · 한 단계 아래",
    fit: ["단정"],
    tagline: "트위드 헤링본의 초록",
    description:
      "한 단계 내렸습니다. 헤링본 트위드를 확대하면 초록 실과 회색 실이 반씩 섞여 있는데, 그 혼방이 만드는 색입니다. 좋은 원단의 초록에 늘 회색이 섞여 있는 이유이자, 순색 초록이 싸구려로 보이는 이유이기도 합니다. 글씨 대비 7.4:1.",
    mood: ["원단", "혼방", "차분"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#5c836e",
      primaryDark: "#305d46",
      primaryLight: "#90af9d",
      accent: "#3f6551",
      accentSoft: "#ebf6ef",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#305d46",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#8ab59d", "#729c85", "#5a846d", "#446c56", "#2d5541"],
    },
  },
  {
    id: "lux-3-loden",
    name: "로덴",
    nameEn: "Loden",
    group: "고급 초록",
    source: "3단계 · 사다리 한가운데",
    fit: ["단정"],
    tagline: "로덴 코트의 초록 · 여섯 단의 중간",
    description:
      "오스트리아 로덴 코트의 색입니다. 여섯 단의 한가운데라 밝지도 어둡지도 않고, 고급 묶음에서 하나만 고르신다면 가장 무난한 자리입니다. 글씨 대비 8.7:1 이라 과정표와 수강료가 편하게 읽힙니다.",
    mood: ["코트", "중립", "안정"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#46715a",
      primaryDark: "#22533b",
      primaryLight: "#799c88",
      accent: "#325c46",
      accentSoft: "#e9f5ee",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#22533b",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#73a288", "#5b8970", "#44715a", "#2e5a44", "#17442f"],
    },
  },
  {
    id: "lux-4-lining",
    name: "보틀 안감",
    nameEn: "Bottle Lining",
    group: "고급 초록",
    source: "4단계",
    fit: ["단정"],
    tagline: "재킷 안감의 초록 · 값은 겉이 아니라 안에서 난다",
    description:
      "브리티시 테일러링의 안감 색입니다. 재킷의 값은 겉감이 아니라 안감에서 드러난다는 말이 있고, 그 안감이 대개 이 초록입니다. 이 학원에 남성복 양복 과정(본과 10개월)이 있다는 점에서 근거가 가장 가까운 단계입니다. 글씨 대비 10.2:1.",
    mood: ["안감", "재단", "정장"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#305f47",
      primaryDark: "#104930",
      primaryLight: "#638974",
      accent: "#23523b",
      accentSoft: "#e7f5ed",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#104930",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#5c8f74", "#45775d", "#2e6047", "#164932", "#00341e"],
    },
  },
  {
    id: "lux-5-velvet",
    name: "벨벳",
    nameEn: "Velvet",
    group: "고급 초록",
    source: "5단계",
    fit: ["단정"],
    tagline: "깊은 색에서만 성립하는 옷감",
    description:
      "벨벳은 파일 직물이라 빛을 먹습니다. 그래서 밝은 벨벳은 없고, 벨벳의 초록은 언제나 이 정도로 깊습니다. 큰 색면이 화면에서 가장 무거워지는 단계이고, 작품 사진이 그 위에 놓이면 사진만 떠오릅니다. 글씨 대비 11.9:1.",
    mood: ["깊이", "무게", "광택"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#194e35",
      primaryDark: "#003f25",
      primaryLight: "#4d7660",
      accent: "#11472f",
      accentSoft: "#e6f5ec",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#003f25",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#467c60", "#2e654a", "#154e35", "#003921", "#00240e"],
    },
  },
  {
    id: "lux-6-cheonghyeon",
    name: "청현",
    nameEn: "Cheonghyeon",
    group: "고급 초록",
    source: "6단계 · 사다리 맨 아래",
    fit: ["단정"],
    tagline: "먹빛이 도는 초록 · 여섯 단 중 가장 깊다",
    description:
      "전통 오방간색의 청현입니다. 검정이 아니라 초록기가 도는 먹으로, 여섯 단 중 가장 깊습니다. 한복 과정이 있는 학원이라는 점에서 이름의 근거가 있고, 재봉틀 주물의 색이기도 합니다. 글씨 대비 13.9:1 로 스물일곱 종 중 가장 강합니다.",
    mood: ["먹빛", "전통", "극단"],
    colors: {
      background: "#fcfdfd",
      surface: "#f5f6f7",
      surfaceAlt: "#edeef0",
      primary: "#003d24",
      primaryDark: "#003319",
      primaryLight: "#38644d",
      accent: "#003b23",
      accentSoft: "#e4f5eb",
      ink: "#0f1319",
      body: "#585b61",
      muted: "#686a70",
      border: "#dddfe1",
      fill: "#003319",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#2e6a4d", "#145337", "#003d23", "#002810", "#002008"],
    },
  },
  {
    id: "ivory-bottle",
    name: "상아 종이 · 보틀",
    nameEn: "Ivory · Bottle",
    group: "종이색 변경",
    source: "종이를 상아색으로",
    fit: ["단정"],
    tagline: "흰 종이 대신 상아색 + 깊은 초록",
    description:
      "배경을 흰색에서 상아색으로 옮기고 깊은 초록을 얹었습니다. 화면 전체가 부드러워지고 오래된 재봉 교재의 종이 느낌이 납니다. 다만 제도지·도면의 '흰 바탕에 검은 선'이라는 전제가 약해집니다.",
    mood: ["따뜻함", "교재", "부드러움"],
    colors: {
      background: "#fdfbf4",
      surface: "#f7f4e8",
      surfaceAlt: "#f0ebdc",
      primary: "#218456",
      primaryDark: "#055433",
      primaryLight: "#66a983",
      accent: "#205b3d",
      accentSoft: "#eef3e0",
      ink: "#17130e",
      body: "#5e5a55",
      muted: "#6c6863",
      border: "#e0dcd2",
      fill: "#055433",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#c9e7d4", "#94c5a7", "#5ea47c", "#3f7e5b", "#27593e"],
    },
  },

  {
    id: "mint-paper",
    name: "박하 종이",
    nameEn: "Mint Paper",
    group: "종이색 변경",
    source: "종이에 초록기",
    fit: ["단정", "활기"],
    tagline: "종이에 아주 옅은 초록기 · 초록은 기준 그대로",
    description:
      "초록은 기준(커팅 매트) 그대로 두고 종이에만 아주 옅은 초록기를 넣었습니다. 브랜드색이 액센트에만 머물지 않고 화면 전체에 스며들어 초록이 훨씬 강하게 기억됩니다. 반대로 섹션 교차면의 구분이 약해집니다.",
    mood: ["일관성", "은은함", "브랜드"],
    colors: {
      background: "#f8fdfa",
      surface: "#eef6f1",
      surfaceAlt: "#e3eee8",
      primary: "#00a76f",
      primaryDark: "#007148",
      primaryLight: "#66c398",
      accent: "#247559",
      accentSoft: "#e4f8ed",
      ink: "#0b1515",
      body: "#555d5d",
      muted: "#636b6b",
      border: "#d8dfdb",
      fill: "#007148",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#c0ead3", "#83c9a6", "#3ca97b", "#18825a", "#005c3d"],
    },
  },

  {
    id: "concrete",
    name: "콘크리트 · 딥그린",
    nameEn: "Concrete",
    group: "종이색 변경",
    source: "종이를 웜 그레이로",
    fit: ["단정"],
    tagline: "회색 종이 + 짙은 초록 · 작업장 톤",
    description:
      "종이를 따뜻한 회색으로 내렸습니다. 흰 종이의 사무적인 인상이 사라지고 작업장·공방의 바닥 같은 톤이 됩니다. 초록이 회색 위에 놓이면 흰 종이 위보다 채도가 높아 보여, 같은 초록인데 더 선명하게 읽힙니다.",
    mood: ["작업장", "묵직함", "차분"],
    colors: {
      background: "#f8f6f4",
      surface: "#eeece9",
      surfaceAlt: "#e5e2de",
      primary: "#468a57",
      primaryDark: "#22542f",
      primaryLight: "#79ad83",
      accent: "#2e5b3c",
      accentSoft: "#e4f1e6",
      ink: "#181612",
      body: "#5c5954",
      muted: "#63615d",
      border: "#d6d4d0",
      fill: "#22542f",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#cde5d1", "#9cc3a3", "#6ca177", "#4c7c56", "#32573a"],
    },
  },

  {
    id: "kraft-olive",
    name: "크래프트 · 올리브",
    nameEn: "Kraft · Olive",
    group: "종이색 변경",
    source: "종이를 크라프트지로",
    fit: ["단정"],
    tagline: "재생지 종이 + 올리브 · 가장 따뜻한 화면",
    description:
      "종이를 크라프트(포장지·패턴지) 색으로 바꾸고 올리브를 얹었습니다. 스물네 종 중 화면이 가장 따뜻하고 손으로 만든 물건의 인상이 강합니다. 패턴지를 매일 쓰는 학원이라는 점에서 근거가 있지만, 작품 사진이 올라가면 종이색이 그 색을 끌어당깁니다.",
    mood: ["재생지", "수공", "따뜻함"],
    colors: {
      background: "#f8efe0",
      surface: "#f2e4d1",
      surfaceAlt: "#eadac3",
      primary: "#7e8f46",
      primaryDark: "#4c561b",
      primaryLight: "#9eac74",
      accent: "#535e2e",
      accentSoft: "#e8ead1",
      ink: "#1c160f",
      body: "#5c554e",
      muted: "#605b55",
      border: "#d8cab7",
      fill: "#4c561b",
      onFill: "#ffffff",
      onAccent: "#ffffff",
      ramp: ["#dbe2c8", "#b2bd94", "#8c9a61", "#697542", "#49522a"],
    },
  },
];

export const noranoClient = {
  slug: "norano",
  name: "노라노패션학원",
  shortName: "노라노",
  concept: "초록 계열 27종 · 네 갈래로",
  proposedAt: "2026-09-08",
  previewKind: "norano",
  intro:
    "★ 2026-09-11 「그래스 그린」으로 확정되었습니다 — 아래 목록에서 ✓ 확정 배지가 붙은 테마이고, 노라노패션학원 사이트에 이미 적용을 마쳤습니다. 나머지는 비교를 위해 그대로 둡니다. 스물일곱 종을 네 갈래로 갈라 놓았습니다 — 밝은 종이 10종은 종이·글씨색을 고정하고 초록만 노랑 끝에서 파랑 끝까지 훑은 것, 연한 초록 7종은 큰 색면 자체를 옅은 색으로 바꾼 것, 고급 초록 6종은 채도를 낮춘 초록 한 줄기를 한 단계씩 여섯 번 깊게 내린 사다리, 종이색 변경 4종은 화면 전체의 온도를 함께 옮긴 것입니다. 색값은 전부 계산해서 뽑았고 스물일곱 종 모두 대비 기준(AA 4.5:1)을 통과합니다.",
  preview,
  themes,
};
