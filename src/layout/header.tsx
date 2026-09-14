"use client";

import Link from "next/link";
import { Moon, Sun, User, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AppHeader() {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState(i18n.language || "EN");

  // Basic theme and lang logic
  useEffect(() => {
    document.documentElement.lang = lang;

    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = () => {
    const nextLang = lang === "EN" ? "KH" : "EN";
    setLang(nextLang);
    i18n.changeLanguage(nextLang);
    document.documentElement.lang = nextLang;
  };

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Link 
            href="/" 
            className="font-[family-name:var(--font-race-sport)] text-lg text-gray-900 dark:text-white uppercase tracking-wider"
          >
            Portfolio
          </Link>
        </div>

        {/* Right: Nav & Actions */}
        <div className="flex items-center gap-6">
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <Link href="/about" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              {t('nav.about', 'About Me')}
            </Link>
            <Link href="#skills" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              {t('nav.skills', 'Skills')}
            </Link>
            <Link href="#projects" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              {t('nav.projects', 'Projects')}
            </Link>
          </nav>

          {/* Spacer */}
          <div className="hidden md:block w-px h-6 bg-gray-200 dark:bg-gray-800 mx-2"></div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Language Switch */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{lang}</span>
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-1.5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Profile Button */}
            <Link 
              href="#profile"
              className="flex items-center justify-center ml-2 transition-transform hover:scale-105 active:scale-95"
            >
              <img src="/assets/profile.png" alt="Profile" className="w-9 h-9 rounded-full object-cover border-2 border-blue-600 shadow-sm" />
            </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
}
