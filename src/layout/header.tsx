"use client";

import Link from "next/link";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function AppHeader() {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState(i18n.language || "EN");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = () => {
    const nextLang = lang === "EN" ? "KH" : "EN";
    setLang(nextLang);
    i18n.changeLanguage(nextLang);
    document.documentElement.lang = nextLang;
  };

  return (
    <>
      <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 backdrop-blur-md relative z-40">
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
              {t('nav.about', 'About')}
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
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              <span className={`fi fi-${lang === 'EN' ? 'gb' : 'kh'} rounded-sm shadow-sm opacity-90`} />
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
              className="hidden md:flex items-center justify-center ml-2 transition-transform hover:scale-105 active:scale-95"
            >
              <img src="/assets/profile.png" alt="Profile" className="w-9 h-9 rounded-full object-cover border-2 border-blue-600 shadow-sm" />
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 -mr-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
        </div>
      </div>
    </header>


      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 z-50 bg-white dark:bg-gray-950 flex flex-col"
          >
            <div className="flex justify-between items-center p-4 h-16 border-b border-gray-100 dark:border-gray-800/50">
              <Link 
                href="#profile"
                className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img src="/assets/profile.png" alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-blue-600 shadow-sm" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">{t('nav.profile', 'Profile')}</span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <motion.nav 
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col flex-1 items-center justify-start px-6 pb-6 pt-10 space-y-8"
            >
              <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}>
                <Link 
                  href="/about" 
                  className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.about', 'About Me')}
                </Link>
              </motion.div>
              
              <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}>
                <Link 
                  href="#skills" 
                  className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.skills', 'Skills')}
                </Link>
              </motion.div>
              
              <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}>
                <Link 
                  href="#projects" 
                  className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.projects', 'Projects')}
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
