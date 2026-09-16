"use client";

import SkillsSection from "@/components/SkillsSection";
import { useTranslation } from "react-i18next";

export default function SkillPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight font-race">
            {t('skills.title_my')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{t('skills.title_technical')}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        <SkillsSection />

      </div>
    </div>
  );
}
