// 테마 표시용 공통 헬퍼.
// 실제 테마 데이터는 업체별로 src/data/clients.js 의 각 client.themes 안에 있습니다.

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
