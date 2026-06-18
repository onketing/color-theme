# 🎨 온케팅 컬러 테마 카탈로그

홈페이지 제작 외주 의뢰업체별로 제안한 **색감(컬러 테마)을 누적 기록**하는 문서입니다.
새 의뢰가 들어올 때마다 맨 아래 [➕ 새 의뢰업체 추가 템플릿](#-새-의뢰업체-추가-템플릿)을 복사해 항목을 추가합니다.

> 색상 칩은 GitHub에서 이미지로 렌더링됩니다. HEX 값은 그대로 복사해 사용하세요.
> 코드 상의 원본 데이터는 [`src/data/clients.js`](src/data/clients.js)에 있습니다 (쇼케이스 웹앱과 연동).

---

## 📑 의뢰업체 목록

| # | 의뢰업체 | 공유 URL | 컨셉 | 참고 사이트 | 제안일 | 상태 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | [초이스 행정사 사무소](#1-초이스-행정사-사무소) | `/choice` | 로어스 토프 브라운 기준 · 톤업/톤다운 | [lawus.co.kr](https://lawus.co.kr/) | 2026-06-18 | 제안 |

> 공유 시 클라이언트는 자기 업체 `공유 URL` 로만 접근하며, 루트(`/`)는 업체 목록을 노출하지 않습니다.

---

## 1. 초이스 행정사 사무소

- **컨셉:** 로어스(lawus.co.kr) 실제 브랜드 색 `#7a6955`(토프 브라운) **기준 · 톤업/톤다운 세트**
- **참고 사이트:** https://lawus.co.kr/ (로어스 — 클라이언트 요청)
- **원칙:** 로어스 실제 브랜드 색 `#7a6955`(`--color-brand-600`)를 기준으로 **같은 브라운을 살짝씩 톤업/톤다운**한 변형만 제공. 배경(`#fff`/`#f5f3ef`)·텍스트(`#222`/`#888`) 등 **중성색은 로어스와 동일하게 고정**하고 브라운의 명도만 단계별로 조정.
- **제안 구성:** 기준 1종 + 톤다운 2종 + 톤업 2종 = **로어스 톤 5종** + 골드 계열 추가 1종 = **총 6종**

> ⚠️ **참고:** 로어스 CSS 에는 `--color-accent-base: #e76f51`(테라코타)가 정의돼 있으나 **실제 디자인에서는 쓰이지 않습니다.** 화면은 브라운 단색조이므로 강조색도 같은 브라운 계열로만 잡았습니다.

### 추출 근거 (lawus.co.kr 실제 화면 톤)

| 역할 | HEX | 설명 |
| --- | --- | --- |
| 주조색 (`--color-brand-600`) | `#7a6955` | 토프 브라운 (헤더·버튼·푸터·카드 전부 이 계열) — **기준색** |
| 밝은 브라운 (하단 바) | `#9a8b76` | CTA 하단 바 |
| 제목 / 본문 | `#222222` / `#3f3a34` | 차콜 · 다크 그레이 |
| 보조 텍스트 | `#888888` | 회색 |
| 배경 | `#ffffff` / `#f5f3ef` | 흰색 · 밝은 회색 |

> 아래 1-1 ~ 1-5 는 위 `#7a6955` 를 기준으로 **명도만** 단계별로 조정한 톤 세트입니다 (중성색 동일).

---

### 1-1. 로어스 시그니처 ⭐ `기준 · 로어스 실제 브랜드 색`

> 로어스 실제 브랜드 색 그대로. 주조색 `#7a6955`(`--color-brand-600`)를 동일 사용, 배경·텍스트도 실제 사이트와 일치. **나머지 변형의 기준점.**
> `#기준` `#신뢰감` `#절제` `#고급`

**팔레트 미리보기**
![](https://placehold.co/56x40/7a6955/7a6955.png) ![](https://placehold.co/56x40/5e5142/5e5142.png) ![](https://placehold.co/56x40/9a8b76/9a8b76.png) ![](https://placehold.co/56x40/8a6c49/8a6c49.png) ![](https://placehold.co/56x40/222222/222222.png) ![](https://placehold.co/56x40/f5f3ef/f5f3ef.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| **Primary** | `#7a6955` | 헤더 · 버튼 · 브랜드 (로어스 `--color-brand-600` 동일) |
| Primary Dark | `#5e5142` | hover · 강조 |
| Primary Light | `#9a8b76` | 옅은 강조 · 하단 바 |
| Accent | `#8a6c49` | 포인트 (로어스 팔레트 브라운) |
| Accent Soft | `#e6ddcf` | 배지 · 아이콘 배경 |
| Ink / Body / Muted | `#222222` / `#3f3a34` / `#888888` | 텍스트 (로어스 동일) |
| Surface / Surface Alt | `#f5f3ef` / `#ece7df` | 섹션 · 보조 배경 |
| Border / Background | `#e2ddd3` / `#ffffff` | 구분선 · 기본 배경 |

---

### 1-2. 로어스 톤다운 `기준 -1단계`

> 기준 `#7a6955` 을 한 단계 어둡게. 같은 브라운, 조금 더 차분하고 묵직하게.
> `#차분함` `#묵직함` `#안정감`

**팔레트 미리보기**
![](https://placehold.co/56x40/6c5d4c/6c5d4c.png) ![](https://placehold.co/56x40/524636/524636.png) ![](https://placehold.co/56x40/8c7d6a/8c7d6a.png) ![](https://placehold.co/56x40/7c6346/7c6346.png) ![](https://placehold.co/56x40/222222/222222.png) ![](https://placehold.co/56x40/f5f3ef/f5f3ef.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| **Primary** | `#6c5d4c` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#524636` | hover · 강조 |
| Primary Light | `#8c7d6a` | 옅은 강조 |
| Accent | `#7c6346` | 포인트 |
| Accent Soft | `#e1d7c6` | 배지 · 아이콘 배경 |
| 중성색 | `#222222`·`#3f3a34`·`#888888`·`#f5f3ef`·`#ece7df`·`#e2ddd3`·`#ffffff` | 로어스 동일 |

---

### 1-3. 로어스 딥 `기준 -2단계`

> 기준을 가장 깊게. 명도만 낮춰 대비를 높인 권위·중후 버전.
> `#권위` `#중후함` `#프리미엄`

**팔레트 미리보기**
![](https://placehold.co/56x40/574b3c/574b3c.png) ![](https://placehold.co/56x40/3d3327/3d3327.png) ![](https://placehold.co/56x40/7c6e5b/7c6e5b.png) ![](https://placehold.co/56x40/6a5436/6a5436.png) ![](https://placehold.co/56x40/222222/222222.png) ![](https://placehold.co/56x40/f5f3ef/f5f3ef.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| **Primary** | `#574b3c` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#3d3327` | hover · 강조 |
| Primary Light | `#7c6e5b` | 옅은 강조 |
| Accent | `#6a5436` | 포인트 |
| Accent Soft | `#dccfba` | 배지 · 아이콘 배경 |
| 중성색 | `#222222`·`#3f3a34`·`#888888`·`#f5f3ef`·`#ece7df`·`#e2ddd3`·`#ffffff` | 로어스 동일 |

---

### 1-4. 로어스 톤업 `기준 +1단계`

> 기준 `#7a6955` 을 한 단계 밝게. 같은 브라운, 한층 부드럽고 가볍게.
> `#부드러움` `#따뜻함` `#단정함`

**팔레트 미리보기**
![](https://placehold.co/56x40/897763/897763.png) ![](https://placehold.co/56x40/6a5b49/6a5b49.png) ![](https://placehold.co/56x40/aa9b86/aa9b86.png) ![](https://placehold.co/56x40/9a7e57/9a7e57.png) ![](https://placehold.co/56x40/222222/222222.png) ![](https://placehold.co/56x40/f5f3ef/f5f3ef.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| **Primary** | `#897763` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#6a5b49` | hover · 강조 |
| Primary Light | `#aa9b86` | 옅은 강조 |
| Accent | `#9a7e57` | 포인트 |
| Accent Soft | `#ece3d2` | 배지 · 아이콘 배경 |
| 중성색 | `#222222`·`#3f3a34`·`#888888`·`#f5f3ef`·`#ece7df`·`#e2ddd3`·`#ffffff` | 로어스 동일 |

---

### 1-5. 로어스 소프트 `기준 +2단계`

> 기준을 가장 밝게. 명도만 높여 환하고 가벼우면서도 따뜻하게.
> `#밝음` `#편안함` `#우아함`

**팔레트 미리보기**
![](https://placehold.co/56x40/94826c/94826c.png) ![](https://placehold.co/56x40/74654f/74654f.png) ![](https://placehold.co/56x40/b6a995/b6a995.png) ![](https://placehold.co/56x40/a68b64/a68b64.png) ![](https://placehold.co/56x40/222222/222222.png) ![](https://placehold.co/56x40/f5f3ef/f5f3ef.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| **Primary** | `#94826c` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#74654f` | hover · 강조 |
| Primary Light | `#b6a995` | 옅은 강조 |
| Accent | `#a68b64` | 포인트 |
| Accent Soft | `#efe7d8` | 배지 · 아이콘 배경 |
| 중성색 | `#222222`·`#3f3a34`·`#888888`·`#f5f3ef`·`#ece7df`·`#e2ddd3`·`#ffffff` | 로어스 동일 |

---

### 1-6. 클래식 골드 `추가 제안 (골드 계열)`

> 로어스 톤과 별개로, 골드·브론즈 계열을 원할 경우의 추가 제안. 아이보리 배경 + 골드 포인트로 권위·고급스러움 강조.
> `#럭셔리` `#권위` `#전문성`

**팔레트 미리보기**
![](https://placehold.co/56x40/9d7a3a/9d7a3a.png) ![](https://placehold.co/56x40/6f5432/6f5432.png) ![](https://placehold.co/56x40/c6a15b/c6a15b.png) ![](https://placehold.co/56x40/b08a4a/b08a4a.png) ![](https://placehold.co/56x40/3a2f1d/3a2f1d.png) ![](https://placehold.co/56x40/f8f2e8/f8f2e8.png)

| 역할 | HEX | 용도 |
| --- | --- | --- |
| **Primary** | `#9d7a3a` | 헤더 · 버튼 · 브랜드 (Muted Gold) |
| Primary Dark | `#6f5432` | hover · 강조 (Dark Walnut) |
| Primary Light | `#c6a15b` | 옅은 강조 (Classic Gold) |
| Accent | `#b08a4a` | 포인트 (Gold Brown) |
| Accent Soft | `#ead9b8` | 배지 · 아이콘 배경 |
| Ink / Body / Muted | `#3a2f1d` / `#574a35` / `#90805f` | 텍스트 |
| Surface / Surface Alt | `#f8f2e8` / `#efe5d2` | 섹션 · 보조 배경 (아이보리) |
| Border / Background | `#e7dcc3` / `#fffdf9` | 구분선 · 기본 배경 |

> 원본 골드 팔레트: Classic Gold `#C6A15B` · Gold Brown `#B08A4A` · Muted Gold `#9D7A3A` · Camel Brown `#A67C52` · Deep Bronze `#8B6B3E` · Dark Walnut `#6F5432`

---
---

## ➕ 새 의뢰업체 추가 템플릿

아래 블록을 복사해서 [의뢰업체 목록](#-의뢰업체-목록) 표에 한 줄, 본문에 한 섹션을 추가하세요.
색상 칩 이미지 URL 형식: `https://placehold.co/56x40/{hex}/{hex}.png` (`#` 제외).

```markdown
## N. 의뢰업체명

- **공유 URL:** `/slug` (영문 소문자 슬러그 — `src/data/clients.js` 의 slug 와 동일하게)
- **컨셉:** (예: 참고 사이트 기준색 · 톤업/톤다운)
- **참고 사이트:** https://example.com/
- **원칙:** 참고 사이트의 CSS 정의값이 아니라 **실제 화면에서 쓰이는 톤**을 기준으로 맞출 것
- **제안 구성:** 기준 1종 + 톤 변형 N종

### N-1. 테마명 ⭐ `기준`

> 한 줄 설명.
> `#무드1` `#무드2` `#무드3`

**팔레트 미리보기**
![](https://placehold.co/56x40/RRGGBB/RRGGBB.png) ...

| 역할 | HEX | 용도 |
| --- | --- | --- |
| Primary | `#______` | 헤더 · 버튼 · 브랜드 |
| Primary Dark | `#______` | hover · 강조 |
| Primary Light | `#______` | 옅은 강조 |
| Accent | `#______` | 포인트 |
| Accent Soft | `#______` | 배지 · 아이콘 배경 |
| Ink / Body / Muted | `#__` / `#__` / `#__` | 텍스트 |
| Surface / Surface Alt | `#__` / `#__` | 섹션 · 보조 배경 |
| Border / Background | `#__` / `#__` | 구분선 · 기본 배경 |
```

> 💡 쇼케이스 웹앱 반영: [`src/data/clients.js`](src/data/clients.js)의 `clients` 배열에 같은 값을 추가하면 `/<slug>` 경로와 탭/비교 그리드에 자동 노출됩니다.
>
> 🎯 **톤 일치 교훈:** ① 참고 사이트의 CSS 변수에 정의됐어도 *실제 화면에서 안 쓰이면 제외*. ② 변형은 기준색에서 **명도만 살짝 톤업/톤다운**해야 같은 브랜드 톤으로 읽힌다.
