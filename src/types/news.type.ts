export interface NewsArticle {
  article_id: string;
  link: string;
  title: string;
  description: string | null;
  content: string | null;
  keywords: string[] | null;
  creator: string[] | null;
  coin: string[] | null;
  language: string;
  pubDate: string;
  pubDateTZ: string;
  fetched_at: string;
  image_url: string | null;
  video_url: string | null;
  source_id: string;
  source_name: string;
  source_priority: number;
  source_url: string;
  source_icon: string | null;
  sentiment: string | null;
  sentiment_stats: string | null;
  ai_tag: string | null;
  duplicate: boolean;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  results: NewsArticle[];
  nextPage?: string;
}
