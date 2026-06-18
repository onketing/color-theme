// 초이스 행정사 사무소 컬러 테마
// 1번 테마는 lawus.co.kr 의 실제 CSS 변수에서 추출한 색감이며,
// 2~6번은 동일한 "따뜻한 어스 톤 · 신뢰감" 계열의 변형 팔레트입니다.

/**
 * @typedef {Object} ThemeColors
 * @property {string} background  페이지 기본 배경 (가장 밝음)
 * @property {string} surface     카드/섹션 배경
 * @property {string} surfaceAlt  보조 배경 (대비용)
 * @property {string} primary     주조색 (헤더·버튼·브랜드)
 * @property {string} primaryDark 주조색 진한 버전 (hover·강조)
 * @property {string} primaryLight 주조색 옅은 버전
 * @property {string} accent      강조색 (CTA·포인트)
 * @property {string} accentSoft  강조색 옅은 버전 (배지·하이라이트)
 * @property {string} ink         제목 텍스트 (가장 진함)
 * @property {string} body        본문 텍스트
 * @property {string} muted       보조 텍스트
 * @property {string} border      구분선·테두리
 * @property {string} onPrimary   주조색 위 텍스트
 * @property {string} onAccent    강조색 위 텍스트
 */

export const themes = [
  {
    id: "lawus-signature",
    name: "로어스 시그니처",
    nameEn: "LawUs Signature",
    source: "lawus.co.kr 실측 추출",
    isReference: true,
    tagline: "따뜻한 토프 브라운 + 테라코타",
    description:
      "로어스(lawus.co.kr) 홈페이지의 실제 CSS 변수에서 추출한 원본 색감입니다. 토프 브라운을 주조색으로, 테라코타를 강조색으로 사용해 전문성과 따뜻한 신뢰감을 동시에 전달합니다.",
    mood: ["신뢰감", "전문성", "따뜻함", "고급"],
    colors: {
      background: "#ffffff",
      surface: "#f7f5f2",
      surfaceAlt: "#f0ece5",
      primary: "#7a6955",
      primaryDark: "#5e5142",
      primaryLight: "#9a8a76",
      accent: "#e76f51",
      accentSoft: "#f0a794",
      ink: "#212121",
      body: "#2c3e50",
      muted: "#476481",
      border: "#e0ddd6",
      onPrimary: "#ffffff",
      onAccent: "#ffffff",
    },
  },
  {
    id: "terracotta-warm",
    name: "테라코타 웜",
    nameEn: "Terracotta Warm",
    source: "유사 계열 변형",
    tagline: "한층 더 따뜻하고 포근한 클레이 톤",
    description:
      "로어스의 테라코타를 전면에 내세운 변형입니다. 크림빛 배경과 클레이 브라운으로 한층 부드럽고 다가가기 쉬운 인상을 줍니다.",
    mood: ["포근함", "친근함", "따뜻함"],
    colors: {
      background: "#fffaf6",
      surface: "#fdf1ea",
      surfaceAlt: "#f8e3d7",
      primary: "#c15f3c",
      primaryDark: "#9a4427",
      primaryLight: "#e08a6a",
      accent: "#d98841",
      accentSoft: "#f3c9a6",
      ink: "#3a2a22",
      body: "#5a4438",
      muted: "#8a7264",
      border: "#efd9c9",
      onPrimary: "#ffffff",
      onAccent: "#ffffff",
    },
  },
  {
    id: "deep-stone-navy",
    name: "딥 스톤 네이비",
    nameEn: "Deep Stone Navy",
    source: "유사 계열 변형",
    tagline: "묵직한 스톤 네이비 + 샌드 브론즈",
    description:
      "로어스의 스톤 네이비(stone) 톤을 주조색으로 끌어올린 변형입니다. 깊은 네이비에 따뜻한 샌드 브론즈를 더해 묵직하면서도 권위 있는 인상을 줍니다.",
    mood: ["권위", "신뢰감", "안정감", "묵직함"],
    colors: {
      background: "#ffffff",
      surface: "#f4f6f9",
      surfaceAlt: "#e7edf3",
      primary: "#1d3a5f",
      primaryDark: "#0f2742",
      primaryLight: "#3a5a82",
      accent: "#c08a5e",
      accentSoft: "#e3c9ad",
      ink: "#14233a",
      body: "#2c3e50",
      muted: "#5a6b80",
      border: "#d8e0ea",
      onPrimary: "#ffffff",
      onAccent: "#ffffff",
    },
  },
  {
    id: "sand-taupe",
    name: "샌드 & 토프",
    nameEn: "Sand & Taupe",
    source: "유사 계열 변형",
    tagline: "은은한 베이지 · 샌드 중심의 우아함",
    description:
      "로어스의 샌드 베이지(#ded0b9)와 브라운을 중심으로 한 밝고 우아한 변형입니다. 전체적으로 차분하고 고급스러운 분위기로, 텍스트 가독성이 좋습니다.",
    mood: ["우아함", "차분함", "고급", "편안함"],
    colors: {
      background: "#fbf8f3",
      surface: "#f3ece0",
      surfaceAlt: "#e9ddc9",
      primary: "#8a6c49",
      primaryDark: "#6b5236",
      primaryLight: "#ab8c68",
      accent: "#b07d52",
      accentSoft: "#ded0b9",
      ink: "#3b3026",
      body: "#5c4d3d",
      muted: "#8c7b66",
      border: "#e6dcc9",
      onPrimary: "#ffffff",
      onAccent: "#ffffff",
    },
  },
  {
    id: "steel-blue-grey",
    name: "스틸 블루 그레이",
    nameEn: "Steel Blue Grey",
    source: "유사 계열 변형",
    tagline: "차분한 스틸 블루 + 테라코타 포인트",
    description:
      "로어스의 스틸 블루(#476481)를 주조색으로 사용한 변형입니다. 쿨톤 블루그레이에 따뜻한 테라코타 포인트를 더해 깔끔하고 이지적인 인상을 줍니다.",
    mood: ["이지적", "깔끔함", "신뢰감", "모던"],
    colors: {
      background: "#ffffff",
      surface: "#f4f6f8",
      surfaceAlt: "#e8edf1",
      primary: "#476481",
      primaryDark: "#344d64",
      primaryLight: "#6b86a1",
      accent: "#c0694f",
      accentSoft: "#e6b3a3",
      ink: "#1f2a36",
      body: "#2c3e50",
      muted: "#62748a",
      border: "#dde4ea",
      onPrimary: "#ffffff",
      onAccent: "#ffffff",
    },
  },
  {
    id: "clay-earth",
    name: "클레이 어스",
    nameEn: "Clay Earth",
    source: "유사 계열 변형",
    tagline: "깊은 커피 브라운 + 브릭 레드",
    description:
      "로어스의 가장 진한 브라운(#63554a)과 브릭 레드(#a23216)를 결합한 가장 묵직한 변형입니다. 프리미엄하고 중후한 무게감을 원할 때 적합합니다.",
    mood: ["중후함", "프리미엄", "강인함", "전통"],
    colors: {
      background: "#faf7f2",
      surface: "#f1ebe1",
      surfaceAlt: "#e6dccd",
      primary: "#63554a",
      primaryDark: "#463b32",
      primaryLight: "#857467",
      accent: "#a23216",
      accentSoft: "#d98e76",
      ink: "#2e2620",
      body: "#4d4339",
      muted: "#837464",
      border: "#e3d9cb",
      onPrimary: "#ffffff",
      onAccent: "#ffffff",
    },
  },
];

// 팔레트 칩으로 노출할 색상 키와 한글 라벨 (표시 순서)
export const swatchKeys = [
  { key: "primary", label: "주조색", role: "Primary" },
  { key: "primaryDark", label: "주조색 (진하게)", role: "Primary Dark" },
  { key: "accent", label: "강조색", role: "Accent" },
  { key: "accentSoft", label: "강조색 (옅게)", role: "Accent Soft" },
  { key: "ink", label: "제목 텍스트", role: "Ink" },
  { key: "body", label: "본문 텍스트", role: "Body" },
  { key: "muted", label: "보조 텍스트", role: "Muted" },
  { key: "surface", label: "섹션 배경", role: "Surface" },
  { key: "border", label: "구분선", role: "Border" },
  { key: "background", label: "기본 배경", role: "Background" },
];

/** hex 색상 위에 올라갈 텍스트가 밝아야 하는지(어두운 배경) 판단 */
export function isDark(hex) {
  const c = hex.replace("#", "");
  const full =
    c.length === 3
      ? c
          .split("")
          .map((ch) => ch + ch)
          .join("")
      : c;
  const r = Number.parseInt(full.slice(0, 2), 16);
  const g = Number.parseInt(full.slice(2, 4), 16);
  const b = Number.parseInt(full.slice(4, 6), 16);
  // 상대 휘도 (sRGB 근사)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.6;
}
