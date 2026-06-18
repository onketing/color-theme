// 테마 색(currentColor)으로 칠해지는 가벼운 라인 아이콘 세트.
// 홈페이지 미리보기에서 골드/브라운 라인 아이콘 느낌을 내기 위해 사용합니다.

const PATHS = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.7 2.4 2.7 15.6 0 18M12 3c-2.7 2.4-2.7 15.6 0 18" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17.5" cy="9" r="2.3" />
      <path d="M16.5 14c2.4 0 4.5 1.6 4.5 4.2" />
    </>
  ),
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
  doc: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3.5" />
    </>
  ),
  building: (
    <>
      <path d="M4 9l8-5 8 5" />
      <path d="M5 9v11h14V9" />
      <path d="M9.5 20v-5h5v5" />
    </>
  ),
  plane: <path d="M21 3L10.5 13.5M21 3l-6.5 18-4-7.5L3 9.5 21 3z" />,
  phone: (
    <path d="M5 4h3.5l1.8 4.5-2.3 1.6a11 11 0 005.3 5.3l1.6-2.3L19.5 16V19.5a2 2 0 01-2.1 2A15.5 15.5 0 013 5.6 2 2 0 015 4z" />
  ),
  chat: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="3" />
      <path d="M8.5 21l3.5-4" />
    </>
  ),
  pencil: (
    <>
      <path d="M4 20h4l10-10-4-4L4 16z" />
      <path d="M13.5 6.5l4 4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </>
  ),
  bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6.5 8-6.5s8 2.5 8 6.5" />
    </>
  ),
  language: (
    <>
      <path d="M3.5 5H11M7.2 5c0 5-2 8.3-4.2 10.5M5 9c2 3.2 4.3 4.5 6.5 5.3" />
      <path d="M12 19.5l3.8-9 3.8 9M13.4 16.2h4.8" />
    </>
  ),
  shield: <path d="M12 3l8 3v5c0 5-4 8.2-8 10-4-1.8-8-5-8-10V6z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3.5 2" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.3L7 21l5-2.8L17 21l-2-7.7" />
    </>
  ),
  like: (
    <path d="M7 21V10l5-7 1.2.7c.6.4.9 1 .9 1.7L13 10h5.5a2 2 0 012 2.4l-1.4 7A2 2 0 0117 21zM7 21H4V10h3" />
  ),
  map: (
    <>
      <path d="M9 4L4 6v14l5-2 6 2 5-2V4l-5 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
};

/**
 * @param {{ name: keyof typeof PATHS, className?: string, style?: object }} props
 */
export default function Icon({ name, className = "", style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {PATHS[name] ?? PATHS.check}
    </svg>
  );
}
