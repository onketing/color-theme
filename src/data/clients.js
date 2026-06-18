// 의뢰업체별 컬러 테마 데이터.
// 새 업체는 이 배열에 객체 하나만 추가하면 /<slug> 경로로 자동 노출됩니다.
// 공유 시 클라이언트는 자기 업체 slug 링크로만 접근하며, 다른 업체는 보이지 않습니다.

/**
 * @typedef {Object} ClientPreview  홈페이지 미리보기 목업에 들어갈 업체별 콘텐츠
 * @property {string} brandInitial  로고 자리 한 글자
 * @property {string} brandName     상단 브랜드명
 * @property {string} domain        브라우저 주소창에 표시할 도메인
 * @property {string} badge         히어로 배지 문구
 * @property {string[]} headline    히어로 제목 (줄 단위 배열, 2번째 줄에 brandName 강조)
 * @property {string} sub           히어로 보조 문구
 * @property {string} ctaPrimary    히어로 주 버튼
 * @property {string} ctaSecondary  히어로 보조 버튼
 * @property {string[]} menu        네비게이션 메뉴
 * @property {string} sectionLabel  업무 섹션 라벨 (영문)
 * @property {string} sectionTitle  업무 섹션 제목
 * @property {{icon:string,title:string,desc:string}[]} services 업무 카드
 * @property {{value:string,label:string}[]} stats 통계
 * @property {string} phone         CTA 전화번호
 * @property {string} footer        푸터 문구
 */

export const clients = [
  {
    slug: "choice",
    name: "초이스 행정사 사무소",
    shortName: "초이스 행정사",
    referenceSite: "https://lawus.co.kr/",
    referenceLabel: "lawus.co.kr",
    concept: "단색조 토프 브라운 · 차분한 어스 톤",
    proposedAt: "2026-06-18",
    intro:
      "요청하신 로어스(lawus.co.kr) 홈페이지의 실제 화면 톤을 그대로 맞췄습니다. 토프 브라운 한 가지로 통일한 단색조 어스 톤으로, 튀는 강조색 없이 절제된 신뢰감을 전달합니다. 같은 계열 안에서 명도·온도만 달리한 변형 5종을 더해 총 6가지로 제안드립니다.",
    preview: {
      brandInitial: "初",
      brandName: "초이스 행정사",
      domain: "choice-admin.co.kr",
      badge: "● 믿을 수 있는 행정 파트너",
      headline: ["복잡한 행정 절차,", "가 끝까지 함께합니다."],
      headlineBrand: "초이스",
      sub: "출입국·인허가부터 행정심판까지. 18년 실무 경력의 행정사가 의뢰인의 입장에서 가장 빠르고 확실한 해결책을 찾아드립니다.",
      ctaPrimary: "무료 상담 예약하기",
      ctaSecondary: "업무 분야 살펴보기",
      menu: ["사무소 소개", "업무 분야", "성공 사례", "상담 후기", "오시는 길"],
      navCta: "상담 신청",
      sectionLabel: "Practice Areas",
      sectionTitle: "주요 업무 분야",
      services: [
        { icon: "🛂", title: "출입국 · 체류", desc: "비자·체류자격 변경, 영주·귀화 신청 대행" },
        { icon: "🏢", title: "인·허가 대행", desc: "영업·건축·식품 등 각종 인허가 신청 업무" },
        { icon: "⚖️", title: "행정심판 · 이의신청", desc: "행정처분 불복, 과태료·영업정지 구제" },
        {
          icon: "📑",
          title: "손해사정 · 보상",
          desc: "자동차·화재·배상책임 손해사정 및 보상 청구",
        },
      ],
      stats: [
        { value: "18년+", label: "행정 실무 경력" },
        { value: "4,200+", label: "누적 상담 건수" },
        { value: "97%", label: "의뢰인 만족도" },
      ],
      ctaTitle: "지금 바로 상담받아 보세요",
      ctaSub: "첫 상담은 무료로 진행됩니다.",
      phone: "☎ 1551-0000",
      footer: "© 2026 초이스 행정사 사무소 · 대표 행정사 김초이 · 서울특별시 서초구 법원로 00",
    },
    themes: [
      {
        id: "lawus-signature",
        name: "로어스 시그니처",
        nameEn: "LawUs Signature",
        source: "lawus.co.kr 톤 일치",
        isReference: true,
        tagline: "단색조 토프 브라운 · 차분한 어스 톤",
        description:
          "로어스(lawus.co.kr)의 실제 화면 톤을 그대로 맞춘 색감입니다. 토프 브라운 한 가지로 헤더·버튼·푸터를 통일하고, 흰색과 밝은 회색·차콜 텍스트로 정돈했습니다. 튀는 강조색 없이 절제된 단색조로 신뢰감과 품격을 전달합니다.",
        mood: ["차분함", "절제", "신뢰감", "고급"],
        colors: {
          background: "#ffffff",
          surface: "#f3f1ed",
          surfaceAlt: "#e8e4dc",
          primary: "#6f6354",
          primaryDark: "#534a3e",
          primaryLight: "#9a8c79",
          accent: "#857560",
          accentSoft: "#e6ddcf",
          ink: "#242220",
          body: "#3f3a34",
          muted: "#8a8278",
          border: "#e2ddd3",
          onPrimary: "#ffffff",
          onAccent: "#ffffff",
        },
      },
      {
        id: "warm-greige",
        name: "웜 그레이지",
        nameEn: "Warm Greige",
        source: "유사 계열 변형",
        tagline: "한 톤 밝은 그레이지 · 한층 부드럽게",
        description:
          "시그니처를 한 톤 밝게 푼 변형입니다. 회색이 살짝 섞인 그레이지 브라운으로 더 가볍고 부드러운 인상을 주면서도 로어스 특유의 차분함은 그대로 유지합니다.",
        mood: ["부드러움", "차분함", "단정함"],
        colors: {
          background: "#ffffff",
          surface: "#f5f3ef",
          surfaceAlt: "#eae6df",
          primary: "#897c6b",
          primaryDark: "#6a5e4f",
          primaryLight: "#aaa091",
          accent: "#9a8b75",
          accentSoft: "#ece4d6",
          ink: "#2b2824",
          body: "#4a443d",
          muted: "#948b80",
          border: "#e6e1d8",
          onPrimary: "#ffffff",
          onAccent: "#ffffff",
        },
      },
      {
        id: "deep-walnut",
        name: "딥 월넛",
        nameEn: "Deep Walnut",
        source: "유사 계열 변형",
        tagline: "더 깊고 묵직한 월넛 브라운",
        description:
          "시그니처를 더 진하게 끌어내린 변형입니다. 깊은 월넛 브라운으로 대비를 높여 묵직하고 권위 있는 무게감을 줍니다. 같은 단색조 어스 톤 범위 안에 있습니다.",
        mood: ["묵직함", "권위", "프리미엄", "안정감"],
        colors: {
          background: "#fbf9f6",
          surface: "#f1ece4",
          surfaceAlt: "#e3dbce",
          primary: "#544535",
          primaryDark: "#3b2f22",
          primaryLight: "#8a7763",
          accent: "#6d5a45",
          accentSoft: "#ddccb6",
          ink: "#221b14",
          body: "#463c30",
          muted: "#7e7264",
          border: "#e1d8c9",
          onPrimary: "#ffffff",
          onAccent: "#ffffff",
        },
      },
      {
        id: "stone-gray",
        name: "스톤 그레이",
        nameEn: "Stone Gray",
        source: "유사 계열 변형",
        tagline: "회색이 도는 차분한 스톤 톤",
        description:
          "온도를 살짝 낮춰 회색이 더 도는 변형입니다. 따뜻함은 유지하되 한층 중립적이고 모던한 인상을 줍니다. 로어스의 절제된 무드와 잘 맞습니다.",
        mood: ["중립적", "모던", "정돈됨", "차분함"],
        colors: {
          background: "#ffffff",
          surface: "#f4f4f2",
          surfaceAlt: "#e8e7e2",
          primary: "#6a675f",
          primaryDark: "#4f4c45",
          primaryLight: "#94918a",
          accent: "#82796d",
          accentSoft: "#e3e0d8",
          ink: "#232220",
          body: "#403e3a",
          muted: "#86837c",
          border: "#e2e0da",
          onPrimary: "#ffffff",
          onAccent: "#ffffff",
        },
      },
      {
        id: "sand-beige",
        name: "샌드 베이지",
        nameEn: "Sand Beige",
        source: "유사 계열 변형",
        tagline: "밝고 따뜻한 샌드 · 베이지 중심",
        description:
          "로어스의 샌드 베이지(#ded0b9) 계열을 밝게 살린 변형입니다. 크림빛 배경과 따뜻한 샌드 브라운으로 밝고 환하면서도 고급스러운 분위기를 냅니다.",
        mood: ["밝음", "따뜻함", "우아함", "편안함"],
        colors: {
          background: "#fdfbf7",
          surface: "#f4ecde",
          surfaceAlt: "#e8dcc6",
          primary: "#9c8160",
          primaryDark: "#7a6444",
          primaryLight: "#c2ab88",
          accent: "#ab8c63",
          accentSoft: "#ecdfc8",
          ink: "#382e22",
          body: "#574b3b",
          muted: "#8f8068",
          border: "#e7dcc8",
          onPrimary: "#ffffff",
          onAccent: "#ffffff",
        },
      },
      {
        id: "charcoal-taupe",
        name: "차콜 토프",
        nameEn: "Charcoal Taupe",
        source: "유사 계열 변형",
        tagline: "차콜에 가까운 가장 진한 토프",
        description:
          "가장 진하고 차분한 변형입니다. 차콜에 가까운 토프 브라운으로 도시적이고 세련된 무게감을 줍니다. 단색조 어스 톤 중 가장 시크한 선택지입니다.",
        mood: ["시크", "도시적", "세련됨", "묵직함"],
        colors: {
          background: "#fafafa",
          surface: "#f0eeec",
          surfaceAlt: "#e0ddd8",
          primary: "#4a443d",
          primaryDark: "#322e29",
          primaryLight: "#7c756b",
          accent: "#6c6053",
          accentSoft: "#ddd6cb",
          ink: "#1f1d1a",
          body: "#423d37",
          muted: "#827b71",
          border: "#dedad3",
          onPrimary: "#ffffff",
          onAccent: "#ffffff",
        },
      },
    ],
  },
];

/** slug 로 업체 조회 (대소문자 무시) */
export function getClient(slug) {
  if (!slug) return undefined;
  const target = slug.toLowerCase();
  return clients.find((c) => c.slug.toLowerCase() === target);
}
