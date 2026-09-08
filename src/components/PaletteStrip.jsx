import { swatchKeys } from "../data/themes.js";
import Swatch from "./Swatch.jsx";

/**
 * 한 테마의 주요 색상들을 칩 그리드로 보여줍니다.
 * @param {{ colors: Record<string, string> }} props
 */
export default function PaletteStrip({ colors }) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
      {/* 업체마다 갖는 키가 다르다 — 초이스 테마에는 `fill` 이 없다. 없는 키는 건너뛴다 */}
      {swatchKeys
        .filter(({ key }) => colors[key])
        .map(({ key, label, role }) => (
          <Swatch key={key} hex={colors[key]} label={label} role={role} />
        ))}
    </div>
  );
}
