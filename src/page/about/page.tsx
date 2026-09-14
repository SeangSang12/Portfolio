"use client";

import { MapPin, GraduationCap } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column - Profile Info */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img 
            src="/assets/profile.png" 
            alt="Seang Sang" 
            className="w-56 h-56 rounded-[20px] object-cover shadow-sm mb-8"
          />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2 font-race">
            SEANG SANG
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-8 text-[15px]">
            {t('about.role')}
          </p>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-10">
            <p>{t('about.bio_1')}</p>
            <p>{t('about.bio_2')}</p>
          </div>

          <div className="flex items-center gap-2 text-gray-900 dark:text-white text-[15px] font-medium">
            <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span>{t('about.location')}</span>
          </div>
        </div>

        {/* Right Column - Background of studying */}
        <div className="w-full lg:w-2/3 lg:pl-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 font-race">
            {t('about.background')}
          </h2>
          
          <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 space-y-12 pb-4">
            
            {/* Timeline Item 1 */}
            <div className="relative pl-10">
              <div className="absolute -left-[17px] top-0 bg-gray-900 dark:bg-white text-white dark:text-[#212529] p-1.5 rounded-full ring-4 ring-white dark:ring-[#212529]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-[15px] pt-0.5">
                {t('about.timeline_1_date')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                <Trans i18nKey="about.timeline_1_desc">
                  I completed short course in ReactJs Framework Frontend Development at <strong className="text-gray-900 dark:text-white">Master-IT Professional training</strong> and started my journey as a frontend developer.
                </Trans>
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-10">
              <div className="absolute -left-[17px] top-0 bg-gray-900 dark:bg-white text-white dark:text-[#212529] p-1.5 rounded-full ring-4 ring-white dark:ring-[#212529]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-[15px] pt-0.5">
                {t('about.timeline_2_date')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                <Trans i18nKey="about.timeline_2_desc">
                  I graduented from high school in 2019 and started my journey in computer science at <strong className="text-gray-900 dark:text-white">Build Bright University.</strong>
                </Trans>
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-10">
              <div className="absolute -left-[17px] top-0 bg-gray-900 dark:bg-white text-white dark:text-[#212529] p-1.5 rounded-full ring-4 ring-white dark:ring-[#212529]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-[15px] pt-0.5">
                {t('about.timeline_3_date')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                {t('about.timeline_3_desc')}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
