export interface ICode {
  id: number;
  name: string;
}

export interface IReview {
  id: number;
  user: string;
  product: number;
  season: Season;
  time: Time;
  duration: Duration;
  strength: Strength;
  content: string;
  rate: number;
  pub_date: Date;
  feedback_cnt: number;
  tags: string;
}

export enum Season {
  Spring = "SPRING",
  Summer = "SUMMER",
  Autumn = "AUTUMN",
  Winter = "WINTER",
}

export enum Time {
  Day = "DAY",
  Night = "NIGHT",
}

export enum Duration {
  One = 1,
  Two = 2,
  Three = 3,
}

export enum Strength {
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
