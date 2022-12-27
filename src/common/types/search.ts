export interface ISearchResult {
  id: number;
  name: string;
  producer: string;
  category: string;
  feedback_cnt: number;
  review_cnt: number;
  visit_cnt: number;
  thumbnail_url: string;
  rate_sum: number;
  rate: number;
  tags: string;
  codes: string[];
}

export interface ISearchKeywords {
  keywords: string[];
}
