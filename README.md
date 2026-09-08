# 온케팅 컬러 테마 쇼케이스 (color-theme)

홈페이지 제작 외주를 받을 때, 클라이언트에게 색감(컬러 테마)을 제안하고 미리 보여주기 위한 쇼케이스 웹앱입니다.
의뢰업체별로 **전용 URL(`/<slug>`)** 을 가지며, 공유하면 클라이언트는 **자기 업체 색감만** 보게 됩니다.

- **현재 의뢰업체**
  - 초이스 행정사 사무소 → [`/choice`](#)
  - 노라노패션학원 → [`/norano`](#) · 초록 계열 27종
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
| `/norano` | 노라노패션학원 초록 계열 27종 |
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

업체 데이터가 커지면 [`src/data/norano.js`](src/data/norano.js) 처럼 파일을 나누고
`clients.js` 에서 import 해 배열에 넣습니다.

### 업체 전용 미리보기

`HomepagePreview` 는 **행정사 사무소 목업**입니다(정의의 저울·업무 분야 카드).
업종이 다르면 그대로 쓰지 말고 전용 컴포넌트를 만든 뒤 `previewKind` 로 고릅니다.

```js
// clients.js 의 업체 객체
previewKind: "norano",   // ClientShowcase 가 NoranoPreview 를 씁니다
```

### ⚠️ 미리보기는 **색이 큰 면으로 나오게** 짭니다

노라노 첫 판은 실제 사이트 규칙에 충실해 초록을 3px 선과 작은 점에만 썼습니다.
규칙은 맞았지만 **테마를 바꿔도 화면이 거의 안 변해** 색감 고르는 화면으로서
쓸모가 없었습니다. 그래서 한 화면에 큰 색면이 다섯 번 나오도록 다시 배치했습니다:

| 자리 | 쓰는 색 |
| --- | --- |
| 히어로 바탕 | `accentSoft` (가장 넓은 옅은 색면) |
| 히어로 패널 | `fill` (도식이 그 위에 올라감) |
| 숫자 밴드 | `accent` (가로 전체) |
| 작품 타일 | `ramp` 5단 (명도 단계가 통째로 보임) |
| 상담 밴드 | `fill` (전면 채움) |

#### 고급 초록 6종은 **사다리**입니다

초이스의 브라운 명도 사다리와 같은 방식 — hue(160°)와 낮은 채도를 묶어 두고
**명도만 한 단계씩** 내립니다. 인접 단끼리 대비비 1.14~1.17 로 고릅니다.

⚠️ 어두운 쪽은 같은 명도 차가 대비로 덜 벌어져, **아래로 갈수록 간격을 조금씩
넓혀야** 눈에 균등합니다. 등간격으로 내리면 마지막 두 단이 구분되지 않습니다.

「고급」을 카테고리(럭셔리 웹)가 아니라 **주제**에서 뽑았습니다 — 옷에서 고급이
어디서 나오는가. 여섯 단의 이름이 실제로 그 밝기의 초록이 나오는 옷 재료이고,
이름 순서가 곧 밝기 순서입니다: 모직 → 트위드 → 코트 → 안감 → 벨벳 → 먹.

**크림 배경 + 포레스트그린 + 세리프로 가지 않았습니다.** 그게 "고급"의 디폴트지만
`~/.claude/CLAUDE.md` 금지 항목이고(2세대 슬롭 클러스터 #1), 주제와 무관하게
나오는 관성입니다.

#### `fill` 과 `primaryDark` 는 다른 역할입니다 — 합치면 안 됩니다

| 키 | 역할 | 짝 |
| --- | --- | --- |
| `fill` | **큰 색면** (히어로 패널·상담 밴드·표 헤더·로고·CTA) | `onFill` |
| `accent` | 중간 색면 (숫자 밴드) | `onAccent` |
| `primaryDark` | **종이 위에 얹는 초록 글씨.** AA 를 책임지는 쪽 | — |
| `primary` | 선·마커·막대 전용. **흰 글씨를 얹지 않습니다**(3.13:1) | — |

밝은 종이·고급 초록에서는 `fill === primaryDark` 지만 **연한 초록 7종에서는
다릅니다** — `fill` 이 파스텔이고 `onFill` 이 어두우며, `primaryDark` 는 여전히
진한 초록입니다. 한쪽으로 합치면 연한 테마에서 글씨가 사라지거나 AA 가 깨집니다.

`fill`/`onFill`, `accent`/`onAccent` 는 **반드시 짝으로** 씁니다.

[`src/components/NoranoPreview.jsx`](src/components/NoranoPreview.jsx) 머리말 참고.

## 배포 (path 라우팅 주의)

SPA 라우팅이라 `/choice` 직접 접속/새로고침 시 호스트의 fallback 설정이 필요합니다.

- **Vercel:** [`vercel.json`](vercel.json) 의 rewrite 가 자동 처리 (별도 설정 불필요).
- **GitHub Pages:** [`public/404.html`](public/404.html) + `index.html` 복원 스크립트로 처리. 프로젝트 페이지(`user.github.io/color-theme`)에 올릴 경우 `404.html` 의 `pathSegmentsToKeep` 를 `1` 로 변경.
