"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import NewsCard from "./NewsCard";
import { fetchLatestNews, fetchCryptoNews, fetchMarketNews, fetchNewsSources } from "@/api/news";

interface NewsInfiniteGridProps {
  initialItems: any[];
  initialNextPage?: string;
  tab: string;
  country?: string;
  language?: string;
}

export default function NewsInfiniteGrid({
  initialItems,
  initialNextPage,
  tab,
  country,
  language
}: NewsInfiniteGridProps) {
  const [items, setItems] = useState<any[]>(initialItems);
  const [nextPage, setNextPage] = useState<string | undefined>(initialNextPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Sync state only when the fundamental query parameters change (like switching tabs)
  useEffect(() => {
    setItems(initialItems);
    setNextPage(initialNextPage);
    setError(null);
  }, [tab, country, language]); // Intentionally omitting initialItems and initialNextPage to prevent RSC refresh from wiping state

  const loadMore = useCallback(async () => {
    if (loadingRef.current || !nextPageRef.current) return;

    setLoading(true);
    setError(null);

    try {
      let newsData;
      switch (tab) {
        case 'latest':
          newsData = await fetchLatestNews(nextPageRef.current, country, language);
          break;
        case 'market':
          newsData = await fetchMarketNews(nextPageRef.current, country, language);
          break;
        case 'sources':
          newsData = await fetchNewsSources(nextPageRef.current, country, language);
          break;
        case 'crypto':
        default:
          newsData = await fetchCryptoNews(nextPageRef.current, country, language);
          break;
      }

      if (newsData && newsData.results) {
        setItems(prevItems => [...prevItems, ...newsData.results]);
        setNextPage(newsData.nextPage);
      }
    } catch (err: any) {
      setError(err.message || "Failed to load more news");
    } finally {
      setLoading(false);
    }
  }, [tab, country, language]); // Intentionally removed nextPage and loading so loadMore is stable

  // Keep a stable ref to avoid recreating the observer
  const loadingRef = useRef(loading);
  const nextPageRef = useRef(nextPage);

  useEffect(() => {
    loadingRef.current = loading;
    nextPageRef.current = nextPage;
  }, [loading, nextPage]);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPageRef.current && !loadingRef.current) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: '200px' } 
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [loadMore]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {items.map((item, index) => (
          <NewsCard key={`${item.article_id || item.id || index}-${index}`} item={item} index={index} />
        ))}
      </div>

      {loading && (
        <div className="text-center py-8">
          <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-2 text-sm text-gray-500 font-medium">Loading more news...</p>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center py-4 bg-red-50 dark:bg-red-950/20 rounded-lg mt-8 max-w-2xl mx-auto">
          {error}
        </div>
      )}

      {/* Invisible element at the bottom to trigger intersection observer */}
      {nextPage && !error && (
        <div ref={loadMoreRef} className="h-10 w-full mt-4"></div>
      )}
      
      {!nextPage && items.length > 0 && !loading && (
        <div className="text-center text-gray-500 py-12 font-medium">
          You have reached the end of the news feed.
        </div>
      )}
    </>
  );
}
