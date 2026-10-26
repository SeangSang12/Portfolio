"use client";

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageOption {
  code: string;
  label: string;
  flag?: string;
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: '', label: 'Any Language' },
  { code: 'en', label: 'English', flag: 'gb' },
  { code: 'km', label: 'Khmer', flag: 'kh' },
  { code: 'es', label: 'Spanish', flag: 'es' },
  { code: 'fr', label: 'French', flag: 'fr' },
  { code: 'zh', label: 'Chinese', flag: 'cn' },
];

export default function NewsFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangCode = searchParams.get('language') || '';
  const currentTab = searchParams.get('tab') || 'latest';

  const selectedOption = LANGUAGE_OPTIONS.find((opt) => opt.code === currentLangCode) || LANGUAGE_OPTIONS[0];

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

  const selectLanguage = (code: string) => {
    handleFilterChange('language', code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

      {/* Custom Language Filter Dropdown with Real Flag Icons */}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          id="language-select"
          aria-label="Filter by Language"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2.5 bg-white dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full pl-4 pr-3.5 py-2.5 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm cursor-pointer font-medium"
        >
          {selectedOption.flag ? (
            <span className={`fi fi-${selectedOption.flag} rounded-[2px] shadow-xs text-base shrink-0`} />
          ) : (
            <Globe className="w-4 h-4 text-blue-500 shrink-0" />
          )}
          <span>{selectedOption.label}</span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div 
            role="listbox"
            aria-label="Languages"
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl shadow-gray-900/10 dark:shadow-black/40 py-1.5 z-50 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-150"
          >
            {LANGUAGE_OPTIONS.map((opt) => {
              const isSelected = opt.code === currentLangCode;
              return (
                <button
                  key={opt.code || 'all'}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectLanguage(opt.code)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm transition-colors text-left cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/70 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {opt.flag ? (
                      <span className={`fi fi-${opt.flag} rounded-[2px] shadow-xs text-base shrink-0`} />
                    ) : (
                      <Globe className="w-4 h-4 text-blue-500 shrink-0" />
                    )}
                    <span>{opt.label}</span>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
