import { TagsType } from "../constants/colors";

export interface ICode {
  id: number;
  name: string;
}

export interface IReview {
  id: number;
  user: string;
  product: number;
  season: SeasonType;
  time: TimeType;
  duration: Duration;
  strength: StrengthType;
  content: string;
  rate: number;
  pub_date: Date;
  feedback_cnt: number;
  tags: string;
}

export enum SeasonType {
  Spring = "SPRING",
  Summer = "SUMMER",
  Autumn = "AUTUMN",
  Winter = "WINTER",
  None = "NONE",
}

export enum TimeType {
  Day = "DAY",
  Night = "NIGHT",
  None = "NONE",
}

export enum DurationType {
  One = 1,
  Two = 2,
  Three = 3,
}

export enum StrengthType {
  One = 1,
  Two = 2,
  Three = 3,
}

export enum Category {
  Perfume = "perfume",
}

export interface IProductDetailResponse {
  id: number;
  category: Category;
  name: string;
  producer: string;
  tags: string[];
  codes: ICode[];
  feedback_cnt: number;
  review_cnt: number;
  visit_cnt: number;
  thumbnail_url: string;
  rate_sum: number;
  rate: number;
  liked_users: number[];
}

export interface IProductReviewResponse {
  id: number;
  nickname: string;
  profile_img: string | null;
  content: string;
  pub_date: Date;
  feedback_cnt: number;
}

export interface IPostReviewPayload {
  id: string;
  season: SeasonType;
  time: TimeType;
  duration: DurationType;
  strength: StrengthType;
  content: string;
  rate: number;
  tags: TagsType[];
}
