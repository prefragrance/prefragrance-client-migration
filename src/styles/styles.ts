export const palette = {
  white: "#FFFFFF",
  black: "#333333",
  red: {
    primary: "#CC1900",
  },
  gray: {
    lighter: "#E0E0E0",
    light: "#F0F0F0",
    dark: "#6B6A6A",
    background: "#EDEDED",
  },
  green: {
    primary: "#1B5434",
    leftLogo: "#E4EDCD",
    rightLogo: "#D3ED91",
    300: "#589573",
  },
  keyword: {
    // 따뜻한 / 평화로운 / 상냥한 / 산뜻한 / 부드러운 / 차분한 / 자연스러운
    babypink: "#FF9999",
    // 매혹적인 / 세련된 / 섹시한 / 퇴폐적인
    red: "#9F1111",
    // 중성의 / 전문적인 / 무게감있는 / 모던한 / 차가운 / 시크한 / 고급스러운
    gray: "#A6A6A6",
    // 싱그러운 / 화사한 / 상큼한 / 발랄한
    yellow: "#FFC000",
    // 건강한 / 스포티한 / 캐쥬얼한 / 자유분방한
    blue: "#0066FF",
    // 몽환적인 / 신비로운 / 은은한
    purple: "#CF84DC",
    // 순수한 / 맑은 / 잔잔한 / 깔끔한 / 청량한 / 청초한 / 투명한 / 깨끗한 / 시원한
    skyblue: "#9DC3E6",
    // 로맨틱한 / 귀여운 / 사랑스러운 / 낭만적인 / 달콤한
    pink: "#E58BBA",
    // 강렬한 / 정열적인 / 열정적인 / 화려한

    orange: "#FF6600",
  },
} as const;

export const fontSize = {
  tiny: "0.6875rem",
  paragraph: "0.875rem",
  body: "1rem",
  smallTitle: "1.125rem",
  mediumTitle: "1.25rem",
  bigTitle: "1.5rem",
  biggestText: "2rem",
  extraBigText: "2.5rem",
} as const;

export const fontWeight = {
  demiLight: 350,
  regular: 400,
  semiBold: 500,
  bold: 700,
  extraBold: 800,
} as const;
