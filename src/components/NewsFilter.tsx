"use client";

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function NewsFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    
    // Always reset the page token when a filter changes to start from the first page of results
    params.delete('page');
    
    // Push the new URL which will trigger the Server Component to re-fetch with new params
    router.push(`${pathname}?${params.toString()}`);
  };

  const currentTab = searchParams.get('tab') || 'latest';

  return (
    <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 mb-10">

      {/* Category Tab Dropdown (Mobile Only) */}
      <div className="relative group sm:hidden">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-blue-500 transition-colors z-10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
        </div>
        <select 
          id="category" 
          aria-label="Filter by Category"
          className="appearance-none bg-white dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full pl-10 pr-10 py-2.5 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm cursor-pointer font-medium relative z-0"
          value={currentTab}
          onChange={(e) => handleFilterChange('tab', e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="crypto">Crypto</option>
          <option value="market">Market</option>
          <option value="sources">Sources</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-blue-500 transition-colors z-10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>

      {/* Language Filter Pill */}
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-blue-500 transition-colors z-10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <select 
          id="language" 
          aria-label="Filter by Language"
          className="appearance-none bg-white dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full pl-10 pr-10 py-2.5 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm cursor-pointer font-medium relative z-0"
          value={searchParams.get('language') || ''}
          onChange={(e) => handleFilterChange('language', e.target.value)}
        >
          <option value="">Any Language</option>
          <option value="en">🇬🇧 English</option>
          <option value="km">🇰🇭 Khmer</option>
          <option value="es">🇪🇸 Spanish</option>
          <option value="fr">🇫🇷 French</option>
          <option value="zh">🇨🇳 Chinese</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-blue-500 transition-colors z-10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>
  );
}
