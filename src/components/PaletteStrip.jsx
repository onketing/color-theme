import { swatchKeys } from "../data/themes.js";
import Swatch from "./Swatch.jsx";

/**
 * 한 테마의 주요 색상들을 칩 그리드로 보여줍니다.
 * @param {{ colors: Record<string, string> }} props
 */
export default function PaletteStrip({ colors }) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
      {swatchKeys.map(({ key, label, role }) => (
        <Swatch key={key} hex={colors[key]} label={label} role={role} />
      ))}
    </div>
  );
}
