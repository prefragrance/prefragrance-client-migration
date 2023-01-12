import { palette } from "@src/styles/styles";

interface ITags {
  label: string;
  color: string;
}

export enum TagsType {
  Warm = "warm",
  Peaceful = "peaceful",
  Gentle = "gentle",
  Fresh = "fresh",
  Soft = "soft",
  Calm = "calm",
  Natural = "natural",
  Faschinating = "Faschinating",
  Sophisticated = "sophisticated",
  Sexy = "sexy",
  Seductive = "seductive",
  Neutral = "neutral",
  Professional = "professional",
  Heavy = "heavy",
  Modern = "modern",
  Cold = "cold",
  Chic = "chic",
  Elegant = "elegant",
  Refreshing = "refreshing",
  Bright = "bright",
  Citrusy = "citrusy",
  Lively = "lively",
  Healthy = "healthy",
  Spoty = "spoty",
  Casual = "casual",
  Light = "light",
  Dreamy = "dreamy",
  Mysterious = "mysterious",
  Airy = "airy",
  Pure = "pure",
  Clear = "clear",
  Tranquil = "tranquil",
  Neat = "neat",
  Revitalizing = "revitalizing",
  Delicate = "delicate",
  Glassy = "glassy",
  Clean = "clean",
  Cool = "cool",
  Romantic = "romantic",
  Cute = "cute",
  Lovely = "lovely",
  Sweet = "sweet",
  Strong = "strong",
  Passionate = "passionate",
  Glamorous = "glamorous",
}

export const Tags: Record<string, ITags> = {
  [TagsType.Warm]: {
    label: "따뜻한",
    color: palette.tags.babypink,
  },
  [TagsType.Peaceful]: {
    label: "평화로운",
    color: palette.tags.babypink,
  },
  [TagsType.Gentle]: {
    label: "상냥한",
    color: palette.tags.babypink,
  },
  [TagsType.Fresh]: {
    label: "산뜻한",
    color: palette.tags.babypink,
  },
  [TagsType.Soft]: {
    label: "부드러운",
    color: palette.tags.babypink,
  },
  [TagsType.Calm]: {
    label: "차분한",
    color: palette.tags.babypink,
  },
  [TagsType.Natural]: {
    label: "자연스러운",
    color: palette.tags.babypink,
  },
  [TagsType.Faschinating]: {
    label: "매혹적인",
    color: palette.tags.red,
  },
  [TagsType.Sophisticated]: {
    label: "세련된",
    color: palette.tags.red,
  },
  [TagsType.Sexy]: {
    label: "섹시한",
    color: palette.tags.red,
  },
  [TagsType.Seductive]: {
    label: "퇴폐적인",
    color: palette.tags.red,
  },
  [TagsType.Neutral]: {
    label: "중성의",
    color: palette.tags.gray,
  },
  [TagsType.Professional]: {
    label: "전문적인",
    color: palette.tags.gray,
  },
  [TagsType.Heavy]: {
    label: "무게감있는",
    color: palette.tags.gray,
  },
  [TagsType.Modern]: {
    label: "모던한",
    color: palette.tags.gray,
  },
  [TagsType.Cold]: {
    label: "차가운",
    color: palette.tags.gray,
  },
  [TagsType.Chic]: {
    label: "시크한",
    color: palette.tags.gray,
  },
  [TagsType.Elegant]: {
    label: "고급스러운",
    color: palette.tags.gray,
  },
  [TagsType.Refreshing]: {
    label: "싱그러운",
    color: palette.tags.yellow,
  },
  [TagsType.Bright]: {
    label: "화사한",
    color: palette.tags.yellow,
  },
  [TagsType.Citrusy]: {
    label: "상큼한",
    color: palette.tags.yellow,
  },
  [TagsType.Lively]: {
    label: "발랄한",
    color: palette.tags.yellow,
  },
  [TagsType.Healthy]: {
    label: "건강한",
    color: palette.tags.blue,
  },
  [TagsType.Spoty]: {
    label: "스포티한",
    color: palette.tags.blue,
  },
  [TagsType.Casual]: {
    label: "캐쥬얼한",
    color: palette.tags.blue,
  },
  [TagsType.Light]: {
    label: "자유분방한",
    color: palette.tags.blue,
  },
  [TagsType.Dreamy]: {
    label: "몽환적인",
    color: palette.tags.purple,
  },
  [TagsType.Mysterious]: {
    label: "신비로운",
    color: palette.tags.purple,
  },
  [TagsType.Airy]: {
    label: "은은한",
    color: palette.tags.purple,
  },
  [TagsType.Pure]: {
    label: "순수한",
    color: palette.tags.skyblue,
  },
  [TagsType.Clear]: {
    label: "맑은",
    color: palette.tags.skyblue,
  },
  [TagsType.Tranquil]: {
    label: "잔잔한",
    color: palette.tags.skyblue,
  },
  [TagsType.Neat]: {
    label: "깔끔한",
    color: palette.tags.skyblue,
  },
  [TagsType.Revitalizing]: {
    label: "청량한",
    color: palette.tags.skyblue,
  },
  [TagsType.Delicate]: {
    label: "청초한",
    color: palette.tags.skyblue,
  },
  [TagsType.Glassy]: {
    label: "투명한",
    color: palette.tags.skyblue,
  },
  [TagsType.Clean]: {
    label: "깨끗한",
    color: palette.tags.skyblue,
  },
  [TagsType.Cool]: {
    label: "시원한",
    color: palette.tags.skyblue,
  },
  [TagsType.Romantic]: {
    label: "로맨틱한",
    color: palette.tags.pink,
  },
  [TagsType.Cute]: {
    label: "귀여운",
    color: palette.tags.pink,
  },
  [TagsType.Lovely]: {
    label: "사랑스러운",
    color: palette.tags.pink,
  },
  [TagsType.Sweet]: {
    label: "달콤한",
    color: palette.tags.pink,
  },
  [TagsType.Strong]: {
    label: "강렬한",
    color: palette.tags.orange,
  },
  [TagsType.Passionate]: {
    label: "정렬적인",
    color: palette.tags.orange,
  },
  [TagsType.Glamorous]: {
    label: "화려한",
    color: palette.tags.orange,
  },
} as const;
