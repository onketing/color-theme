# 🎨 온케팅 컬러 테마 카탈로그

홈페이지 제작 외주 의뢰업체별로 제안한 **색감(컬러 테마)을 누적 기록**하는 문서입니다.
새 의뢰가 들어올 때마다 맨 아래 [➕ 새 의뢰업체 추가 템플릿](#-새-의뢰업체-추가-템플릿)을 복사해 항목을 추가합니다.

> 색상 칩은 GitHub에서 이미지로 렌더링됩니다. HEX 값은 그대로 복사해 사용하세요.
> 코드 상의 원본 데이터는 [`src/data/themes.js`](src/data/themes.js)에 있습니다 (쇼케이스 웹앱과 연동).

---

## 📑 의뢰업체 목록

| # | 의뢰업체 | 공유 URL | 컨셉 | 참고 사이트 | 제안일 | 상태 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | [초이스 행정사 사무소](#1-초이스-행정사-사무소) | `/choice` | 단색조 토프 브라운 · 차분한 어스 톤 | [lawus.co.kr](https://lawus.co.kr/) | 2026-06-18 | 제안 |

> 공유 시 클라이언트는 자기 업체 `공유 URL` 로만 접근하며, 루트(`/`)는 업체 목록을 노출하지 않습니다.

---

## 1. 초이스 행정사 사무소

- **컨셉:** 단색조(monochromatic) 토프 브라운 · 차분한 어스 톤 · 신뢰감
- **참고 사이트:** https://lawus.co.kr/ (로어스 — 클라이언트 요청)
- **톤 일치 원칙:** 로어스 **실제 화면 톤**에 맞춤. 브라운 한 가지로 헤더·버튼·푸터·카드를 통일하고, 흰색/밝은 회색 배경 + 차콜~회색 텍스트로 정돈. **튀는 강조색(테라코타·블루) 사용 안 함.**
- **제안 구성:** 시그니처 1종 + 동일 계열 변형 5종 = **총 6종**

> ⚠️ **참고:** 로어스 CSS 에는 `--color-accent-base: #e76f51`(테라코타)가 정의돼 있으나 **실제 디자인에서는 쓰이지 않습니다.** 화면은 브라운 단색조이므로, 강조색도 같은 계열의 브라운 톤 시프트로만 잡았습니다.

### 추출 근거 (lawus.co.kr 실제 화면 톤)

| 역할 | HEX | 설명 |
| --- | --- | --- |
| 주조색 (`--color-brand-600`) | `#7a6955` | 토프 브라운 (헤더·버튼·푸터·카드 전부 이 계열) |
| 밝은 브라운 (하단 바) | `#9a8b76` | CTA 하단 바 |
| 본문/제목 | `#222` / `#333` | 차콜~다크 그레이 |
| 보조 텍스트 | `#666` / `#888` | 회색 |
| 배경 | `#ffffff` / `#f5f5f5` | 흰색 · 밝은 회색 |
| 샌드 베이지 | `#ded0b9` | 웜 베이지 (변형용 참고) |

---

### 1-1. 로어스 시그니처 ⭐ `톤 일치 (원본)`

> 토프 브라운 단색조. 헤더·버튼·푸터를 한 가지 브라운으로 통일하고, 흰색·밝은 회색·차콜 텍스트로 정돈. 튀는 강조색 없이 절제된 품격.
> `#차분함` `#절제` `#신뢰감` `#고급`

**팔레트 미리보기**
![](https://placehold.co/56x40/6f6354/6f6354.png) ![](https://placehold.co/56x40/534a3e/534a3e.png) ![](https://placehold.co/56x40/857560/857560.png) ![](https://placehold.co/56x40/e6ddcf/e6ddcf.png) ![](https://placehold.co/56x40/242220/242220.png) ![](https://placehold.co/56x40/f3f1ed/f3f1ed.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| Primary | `#6f6354` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#534a3e` | hover · 강조 |
| Primary Light | `#9a8c79` | 옅은 강조 · 하단 바 |
| Accent | `#857560` | 포인트 (같은 계열 톤 시프트) |
| Accent Soft | `#e6ddcf` | 배지 · 아이콘 배경 |
| Ink (제목) | `#242220` | 제목 텍스트 |
| Body (본문) | `#3f3a34` | 본문 텍스트 |
| Muted (보조) | `#8a8278` | 보조 텍스트 |
| Surface | `#f3f1ed` | 카드 · 섹션 배경 |
| Surface Alt | `#e8e4dc` | 보조 배경 |
| Border | `#e2ddd3` | 구분선 · 테두리 |
| Background | `#ffffff` | 기본 배경 |

---

### 1-2. 웜 그레이지 `유사 계열 변형`

> 시그니처를 한 톤 밝게 푼 그레이지 브라운. 더 가볍고 부드러우면서도 차분함은 유지.
> `#부드러움` `#차분함` `#단정함`

**팔레트 미리보기**
![](https://placehold.co/56x40/897c6b/897c6b.png) ![](https://placehold.co/56x40/6a5e4f/6a5e4f.png) ![](https://placehold.co/56x40/9a8b75/9a8b75.png) ![](https://placehold.co/56x40/ece4d6/ece4d6.png) ![](https://placehold.co/56x40/2b2824/2b2824.png) ![](https://placehold.co/56x40/f5f3ef/f5f3ef.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| Primary | `#897c6b` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#6a5e4f` | hover · 강조 |
| Primary Light | `#aaa091` | 옅은 강조 · 배경 장식 |
| Accent | `#9a8b75` | 포인트 (같은 계열 톤 시프트) |
| Accent Soft | `#ece4d6` | 배지 · 아이콘 배경 |
| Ink (제목) | `#2b2824` | 제목 텍스트 |
| Body (본문) | `#4a443d` | 본문 텍스트 |
| Muted (보조) | `#948b80` | 보조 텍스트 |
| Surface | `#f5f3ef` | 카드 · 섹션 배경 |
| Surface Alt | `#eae6df` | 보조 배경 |
| Border | `#e6e1d8` | 구분선 · 테두리 |
| Background | `#ffffff` | 기본 배경 |

---

### 1-3. 딥 월넛 `유사 계열 변형`

> 시그니처를 더 진하게 끌어내린 깊은 월넛 브라운. 대비를 높여 묵직하고 권위 있는 무게감.
> `#묵직함` `#권위` `#프리미엄` `#안정감`

**팔레트 미리보기**
![](https://placehold.co/56x40/544535/544535.png) ![](https://placehold.co/56x40/3b2f22/3b2f22.png) ![](https://placehold.co/56x40/6d5a45/6d5a45.png) ![](https://placehold.co/56x40/ddccb6/ddccb6.png) ![](https://placehold.co/56x40/221b14/221b14.png) ![](https://placehold.co/56x40/f1ece4/f1ece4.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| Primary | `#544535` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#3b2f22` | hover · 강조 |
| Primary Light | `#8a7763` | 옅은 강조 · 배경 장식 |
| Accent | `#6d5a45` | 포인트 (같은 계열 톤 시프트) |
| Accent Soft | `#ddccb6` | 배지 · 아이콘 배경 |
| Ink (제목) | `#221b14` | 제목 텍스트 |
| Body (본문) | `#463c30` | 본문 텍스트 |
| Muted (보조) | `#7e7264` | 보조 텍스트 |
| Surface | `#f1ece4` | 카드 · 섹션 배경 |
| Surface Alt | `#e3dbce` | 보조 배경 |
| Border | `#e1d8c9` | 구분선 · 테두리 |
| Background | `#fbf9f6` | 기본 배경 |

---

### 1-4. 스톤 그레이 `유사 계열 변형`

> 온도를 살짝 낮춰 회색이 더 도는 변형. 따뜻함은 유지하되 한층 중립적이고 모던.
> `#중립적` `#모던` `#정돈됨` `#차분함`

**팔레트 미리보기**
![](https://placehold.co/56x40/6a675f/6a675f.png) ![](https://placehold.co/56x40/4f4c45/4f4c45.png) ![](https://placehold.co/56x40/82796d/82796d.png) ![](https://placehold.co/56x40/e3e0d8/e3e0d8.png) ![](https://placehold.co/56x40/232220/232220.png) ![](https://placehold.co/56x40/f4f4f2/f4f4f2.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| Primary | `#6a675f` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#4f4c45` | hover · 강조 |
| Primary Light | `#94918a` | 옅은 강조 · 배경 장식 |
| Accent | `#82796d` | 포인트 (같은 계열 톤 시프트) |
| Accent Soft | `#e3e0d8` | 배지 · 아이콘 배경 |
| Ink (제목) | `#232220` | 제목 텍스트 |
| Body (본문) | `#403e3a` | 본문 텍스트 |
| Muted (보조) | `#86837c` | 보조 텍스트 |
| Surface | `#f4f4f2` | 카드 · 섹션 배경 |
| Surface Alt | `#e8e7e2` | 보조 배경 |
| Border | `#e2e0da` | 구분선 · 테두리 |
| Background | `#ffffff` | 기본 배경 |

---

### 1-5. 샌드 베이지 `유사 계열 변형`

> 로어스의 샌드 베이지(`#ded0b9`) 계열을 밝게 살린 변형. 크림빛 배경 + 따뜻한 샌드 브라운으로 환하고 고급스럽게.
> `#밝음` `#따뜻함` `#우아함` `#편안함`

**팔레트 미리보기**
![](https://placehold.co/56x40/9c8160/9c8160.png) ![](https://placehold.co/56x40/7a6444/7a6444.png) ![](https://placehold.co/56x40/ab8c63/ab8c63.png) ![](https://placehold.co/56x40/ecdfc8/ecdfc8.png) ![](https://placehold.co/56x40/382e22/382e22.png) ![](https://placehold.co/56x40/f4ecde/f4ecde.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| Primary | `#9c8160` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#7a6444` | hover · 강조 |
| Primary Light | `#c2ab88` | 옅은 강조 · 배경 장식 |
| Accent | `#ab8c63` | 포인트 (같은 계열 톤 시프트) |
| Accent Soft | `#ecdfc8` | 배지 · 아이콘 배경 |
| Ink (제목) | `#382e22` | 제목 텍스트 |
| Body (본문) | `#574b3b` | 본문 텍스트 |
| Muted (보조) | `#8f8068` | 보조 텍스트 |
| Surface | `#f4ecde` | 카드 · 섹션 배경 |
| Surface Alt | `#e8dcc6` | 보조 배경 |
| Border | `#e7dcc8` | 구분선 · 테두리 |
| Background | `#fdfbf7` | 기본 배경 |

---

### 1-6. 차콜 토프 `유사 계열 변형`

> 차콜에 가까운 가장 진한 토프 브라운. 도시적이고 세련된 무게감 — 단색조 어스 톤 중 가장 시크.
> `#시크` `#도시적` `#세련됨` `#묵직함`

**팔레트 미리보기**
![](https://placehold.co/56x40/4a443d/4a443d.png) ![](https://placehold.co/56x40/322e29/322e29.png) ![](https://placehold.co/56x40/6c6053/6c6053.png) ![](https://placehold.co/56x40/ddd6cb/ddd6cb.png) ![](https://placehold.co/56x40/1f1d1a/1f1d1a.png) ![](https://placehold.co/56x40/f0eeec/f0eeec.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| Primary | `#4a443d` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#322e29` | hover · 강조 |
| Primary Light | `#7c756b` | 옅은 강조 · 배경 장식 |
| Accent | `#6c6053` | 포인트 (같은 계열 톤 시프트) |
| Accent Soft | `#ddd6cb` | 배지 · 아이콘 배경 |
| Ink (제목) | `#1f1d1a` | 제목 텍스트 |
| Body (본문) | `#423d37` | 본문 텍스트 |
| Muted (보조) | `#827b71` | 보조 텍스트 |
| Surface | `#f0eeec` | 카드 · 섹션 배경 |
| Surface Alt | `#e0ddd8` | 보조 배경 |
| Border | `#dedad3` | 구분선 · 테두리 |
| Background | `#fafafa` | 기본 배경 |

---
---

## ➕ 새 의뢰업체 추가 템플릿

아래 블록을 복사해서 [의뢰업체 목록](#-의뢰업체-목록) 표에 한 줄, 본문에 한 섹션을 추가하세요.
색상 칩 이미지 URL 형식: `https://placehold.co/56x40/{hex}/{hex}.png` (`#` 제외).

```markdown
## N. 의뢰업체명

- **공유 URL:** `/slug` (영문 소문자 슬러그 — `src/data/clients.js` 의 slug 와 동일하게)
- **컨셉:** (예: 단색조 토프 브라운 · 차분한 어스 톤)
- **참고 사이트:** https://example.com/
- **톤 일치 원칙:** (CSS 정의값이 아니라 **실제 화면에서 쓰이는 톤**을 기준으로 맞출 것)
- **제안 구성:** 시그니처 1종 + 변형 N종

### N-1. 테마명 ⭐ `톤 일치 (원본)`

> 한 줄 설명.
> `#무드1` `#무드2` `#무드3`

**팔레트 미리보기**
![](https://placehold.co/56x40/RRGGBB/RRGGBB.png) ![](https://placehold.co/56x40/RRGGBB/RRGGBB.png) ...

| 역할 | HEX | 용도 |
| --- | --- | --- |
| Primary | `#______` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#______` | hover · 강조 |
| Primary Light | `#______` | 옅은 강조 · 배경 장식 |
| Accent | `#______` | 포인트 |
| Accent Soft | `#______` | 배지 · 아이콘 배경 |
| Ink (제목) | `#______` | 제목 텍스트 |
| Body (본문) | `#______` | 본문 텍스트 |
| Muted (보조) | `#______` | 보조 텍스트 |
| Surface | `#______` | 카드 · 섹션 배경 |
| Surface Alt | `#______` | 보조 배경 |
| Border | `#______` | 구분선 · 테두리 |
| Background | `#______` | 기본 배경 |
```

> 💡 쇼케이스 웹앱에도 함께 반영하려면 [`src/data/themes.js`](src/data/themes.js)의 `themes` 배열에 같은 값을 추가하면 탭/비교 그리드에 자동 노출됩니다.
>
> 🎯 **톤 일치 교훈:** 참고 사이트의 CSS 변수에 정의된 색이라도 *실제 화면에서 쓰이지 않으면* 제외할 것. 눈에 보이는 톤을 기준으로 맞춰야 클라이언트가 기대한 색감과 일치한다.
