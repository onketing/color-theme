# 온케팅 컬러 테마 쇼케이스 (color-theme)

홈페이지 제작 외주를 받을 때, 클라이언트에게 색감(컬러 테마)을 제안하고 미리 보여주기 위한 쇼케이스 웹앱입니다.
의뢰업체별로 **전용 URL(`/<slug>`)** 을 가지며, 공유하면 클라이언트는 **자기 업체 색감만** 보게 됩니다.

- **현재 의뢰업체:** 초이스 행정사 사무소 → [`/choice`](#)
- **요청 사항:** [로어스(lawus.co.kr)](https://lawus.co.kr/) 와 동일한 색감
- **결과물:** 로어스 실제 화면 톤에 맞춘 **시그니처 1종 + 동일 계열 변형 5종 = 총 6종**

전체 색감 카탈로그는 [`COLOR-THEMES.md`](COLOR-THEMES.md) 참고.

## 색감 톤 일치 원칙

로어스는 **토프 브라운 단색조(monochromatic)** 디자인입니다. CSS 변수에 테라코타(`#e76f51`)가 정의돼 있으나 **실제 화면에서는 쓰이지 않으므로** 제외했습니다.

| 역할 | 값 | 비고 |
| --- | --- | --- |
| 주조색 | `#7a6955` 계열 | 토프 브라운 (헤더·버튼·푸터·카드 전부 동일 계열) |
| 배경 | `#ffffff` / `#f5f5f5` | 흰색 · 밝은 회색 |
| 텍스트 | `#222` / `#666` | 차콜 · 회색 (블루 캐스트 없음) |

> 핵심: 참고 사이트의 CSS 정의값이 아니라 **눈에 보이는 톤**을 기준으로 맞춰야 클라이언트 기대와 일치합니다.

## URL 구조

| 경로 | 화면 |
| --- | --- |
| `/` | 중립 랜딩 (업체 목록 비노출 — 공유받은 링크로만 접근) |
| `/choice` | 초이스 행정사 사무소 색감 6종 |
| 잘못된 slug | "찾을 수 없음" 랜딩 |

각 테마는 컬러 팔레트(클릭 시 HEX 복사)와, 해당 업체 홈페이지 화면에 적용된 라이브 미리보기를 함께 제공합니다.

## 기술 스택

- React 19 + React Router 7
- Vite 6
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Biome (lint + format)

## 실행

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:5173/choice)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
npm run lint     # Biome 검사
npm run format   # Biome 포맷
```

## 새 의뢰업체 추가 방법

[`src/data/clients.js`](src/data/clients.js) 의 `clients` 배열에 객체 하나만 추가하면 `/<slug>` 경로로 자동 노출됩니다.

```js
{
  slug: "newco",                 // 공유 URL: /newco
  name: "○○ 주식회사",
  referenceSite: "https://...",  // 참고 사이트 (선택)
  concept: "...",
  intro: "...",
  preview: { /* 미리보기 목업 콘텐츠 (브랜드명·메뉴·업무 카드 등) */ },
  themes: [ /* 테마 배열 (각 테마는 colors 12색) */ ],
}
```

테마 색상 키와 라벨은 [`src/data/themes.js`](src/data/themes.js) 의 `swatchKeys` 참고. 문서용 정리는 [`COLOR-THEMES.md`](COLOR-THEMES.md) 의 템플릿 사용.

## 배포 (path 라우팅 주의)

SPA 라우팅이라 `/choice` 직접 접속/새로고침 시 호스트의 fallback 설정이 필요합니다.

- **Vercel:** [`vercel.json`](vercel.json) 의 rewrite 가 자동 처리 (별도 설정 불필요).
- **GitHub Pages:** [`public/404.html`](public/404.html) + `index.html` 복원 스크립트로 처리. 프로젝트 페이지(`user.github.io/color-theme`)에 올릴 경우 `404.html` 의 `pathSegmentsToKeep` 를 `1` 로 변경.
