"use client";

import { MapPin, GraduationCap } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column - Profile Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 blur-xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
            <img 
              src="/assets/profile.png" 
              alt="Seang Sang" 
              className="relative w-56 h-56 rounded-[20px] object-cover shadow-sm border-2 border-white/50 dark:border-gray-800/50"
            />
          </div>
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

          <div className="flex items-center gap-2 text-gray-900 dark:text-white text-[15px] font-medium bg-gray-100 dark:bg-gray-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span>{t('about.location')}</span>
          </div>
        </motion.div>

        {/* Right Column - Background of studying */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="w-full lg:w-2/3 lg:pl-10"
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-12 font-race uppercase">
            {t('about.background')}
          </motion.h2>
          
          <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 space-y-8 pb-4">
            
            {/* Timeline Item 1 */}
            <motion.div variants={itemVariants} className="relative pl-10 group">
              <div className="absolute -left-[17px] top-1 bg-white dark:bg-white/5 text-blue-600 dark:text-blue-400 p-1.5 rounded-full ring-4 ring-white dark:ring-[#212529] group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md p-6 rounded-[10px] border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-[15px]">
                  {t('about.timeline_1_date')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                  <Trans i18nKey="about.timeline_1_desc">
                    I completed short course in ReactJs Framework Frontend Development at <strong className="text-gray-900 dark:text-white">Master-IT Professional training</strong> and started my journey as a frontend developer.
                  </Trans>
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div variants={itemVariants} className="relative pl-10 group">
              <div className="absolute -left-[17px] top-1 bg-white dark:bg-white/5 text-blue-600 dark:text-blue-400 p-1.5 rounded-full ring-4 ring-white dark:ring-[#212529] group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md p-6 rounded-[10px] border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-[15px]">
                  {t('about.timeline_2_date')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                  <Trans i18nKey="about.timeline_2_desc">
                    I graduented from high school in 2019 and started my journey in computer science at <strong className="text-gray-900 dark:text-white">Build Bright University.</strong>
                  </Trans>
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div variants={itemVariants} className="relative pl-10 group">
              <div className="absolute -left-[17px] top-1 bg-white dark:bg-white/5 text-blue-600 dark:text-blue-400 p-1.5 rounded-full ring-4 ring-white dark:ring-[#212529] group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md p-6 rounded-[10px] border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-[15px]">
                  {t('about.timeline_3_date')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {t('about.timeline_3_desc')}
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
