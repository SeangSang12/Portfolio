import { fetchCryptoNews, fetchLatestNews, fetchMarketNews, fetchNewsSources } from "@/api/news";
import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { Suspense } from "react";
import NewsInfiniteGrid from "@/components/NewsInfiniteGrid";
import NewsFilter from "@/components/NewsFilter";

export default async function NewsPage({ searchParams }: { searchParams?: Promise<{ tab?: string; page?: string; country?: string; language?: string }> }) {
  const resolvedParams = searchParams ? await searchParams : {};
  const tab = resolvedParams.tab || 'latest';
  const pageToken = resolvedParams.page;
  const country = resolvedParams.country;
  const language = resolvedParams.language;

  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-race-sport)] text-gray-900 dark:text-white uppercase tracking-wider mb-4">
          News Hub
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Stay updated with the latest cryptocurrency trends, market updates, and blockchain developments.
        </p>

        {/* Navigation Menu (Desktop) */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4 mb-8">
          {[
            { id: 'latest', label: 'Latest' },
            { id: 'crypto', label: 'Crypto' },
            { id: 'market', label: 'Market' },
            { id: 'sources', label: 'Sources' },
          ].map((item) => {
            // Build the URL, keeping the language if it exists, but resetting page
            const params = new URLSearchParams();
            params.set('tab', item.id);
            if (language) params.set('language', language);
            
            return (
              <Link 
                key={item.id} 
                href={`/news?${params.toString()}`}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  tab === item.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Filter UI */}
        <NewsFilter />
      </div>
      
      {/* Wrapped the data fetching grid in Suspense so the tabs and title are instant */}
      <Suspense key={`${tab}-${pageToken || ''}-${country || ''}-${language || ''}`} fallback={<NewsGridSkeleton />}>
        <NewsGrid tab={tab} pageToken={pageToken} country={country} language={language} />
      </Suspense>
    </div>
  );
}

function NewsGridSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden flex flex-col h-[400px] animate-pulse">
          <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800"></div>
          <div className="p-4 md:p-5 flex flex-col flex-1 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-800"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/3"></div>
            </div>
            <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
            <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
            <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function NewsGrid({ tab, pageToken, country, language }: { tab: string; pageToken?: string; country?: string; language?: string }) {
  let newsData;
  let errorMsg = null;

  try {
    switch (tab) {
      case 'latest':
        newsData = await fetchLatestNews(pageToken, country, language);
        break;
      case 'market':
        newsData = await fetchMarketNews(pageToken, country, language);
        break;
      case 'sources':
        newsData = await fetchNewsSources(pageToken, country, language);
        break;
      case 'crypto':
      default:
        newsData = await fetchCryptoNews(pageToken, country, language);
        break;
    }
  } catch (error: any) {
    errorMsg = error.message;
  }

  const items = newsData?.results || [];

  return (
    <>
      {errorMsg && (
        <div className="text-red-500 text-center mb-8 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg max-w-2xl mx-auto">
          {errorMsg}
        </div>
      )}

      {!errorMsg && items.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-12">
          No data available for this category at the moment.
        </div>
      )}

      <NewsInfiniteGrid 
        initialItems={items} 
        initialNextPage={newsData?.nextPage} 
        tab={tab} 
        country={country} 
        language={language} 
      />
    </>
  );
}
