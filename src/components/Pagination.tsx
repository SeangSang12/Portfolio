"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

interface PaginationProps {
  pageToken?: string;
  nextPage?: string;
  tab?: string; // Kept for backward compatibility but unused
}

export default function Pagination({ pageToken, nextPage }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  if (!pageToken && !nextPage) return null;

  const createPageUrl = (pageValue: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (pageValue) {
      params.set('page', pageValue);
    } else {
      params.delete('page');
    }
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="mt-12 flex justify-center items-center gap-4">
      {pageToken && (
        <Link 
          href={createPageUrl(null)}
          className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-full shadow-sm transition-all text-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Start
        </Link>
      )}
      {nextPage && (
        <Link 
          href={createPageUrl(nextPage)}
          className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 transition-all text-sm flex items-center gap-2"
        >
          Next Page
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      )}
    </div>
  );
}
