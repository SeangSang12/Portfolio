"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import Card from "@/components/Card";
import { BadgeCheck } from "lucide-react";
import { 
  SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiNestjs, SiPrisma, SiPostgresql, 
  SiDocker, SiPostman, SiGithub 
} from "react-icons/si";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left Column - Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col">
          {/* Cover Image & Profile Container */}
          <div className="mb-6">
            <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden relative mb-4">
              <img src="/assets/bgprofile.jpeg" alt="Cover Background" className="w-full h-full object-cover" />
            </div>
            <div className="relative w-max -mt-20 ml-6">
              <div className="relative overflow-hidden rounded-full border-4 border-white dark:border-gray-950 shadow-sm bg-white dark:bg-gray-950">
                <img
                  src="/assets/profile.png"
                  alt="Seang Sang"
                  className="object-cover w-28 h-28"
                />
              </div>
              <div className="absolute bottom-1.5 right-1.5 bg-white dark:bg-gray-950 rounded-full flex items-center justify-center">
                <BadgeCheck className="w-7 h-7 text-white dark:text-gray-950 fill-blue-500" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight font-race">
            Seang Sang
          </h1>
          <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
            {t('home.role')}
          </p>

          <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-sm">
            {t('home.intro_1')}
          </p>

          {/* Expertise */}
          <div className="mt-8">
            <h2 className="text-[13px] font-bold text-gray-900 dark:text-white mb-4 font-race">
              {t('home.expertise')}
            </h2>
            <div className="relative flex flex-col gap-3 overflow-hidden">
              {/* Row 1 (Right to Left) */}
              <div className="flex w-max animate-scroll-left gap-3">
                {[
                  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
                  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
                  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
                  { name: 'Next.js', icon: SiNextdotjs },
                  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
                  { name: 'Express.js', icon: SiExpress },
                  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
                  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
                  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
                  { name: 'Next.js', icon: SiNextdotjs },
                  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
                  { name: 'Express.js', icon: SiExpress },
                ].map((skill, index) => (
                  <span key={index} className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium transition-colors hover:bg-gray-200 dark:hover:bg-white/10 whitespace-nowrap">
                    <skill.icon className="w-3.5 h-3.5" color={skill.color} />
                    {skill.name}
                  </span>
                ))}
              </div>
              
              {/* Row 2 (Left to Right) */}
              <div className="flex w-max animate-scroll-right gap-3 -ml-20">
                {[
                  { name: 'Nest.js', icon: SiNestjs, color: '#E0234E' },
                  { name: 'Prisma', icon: SiPrisma },
                  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
                  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
                  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
                  { name: 'GitHub', icon: SiGithub },
                  { name: 'Nest.js', icon: SiNestjs, color: '#E0234E' },
                  { name: 'Prisma', icon: SiPrisma },
                  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
                  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
                  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
                  { name: 'GitHub', icon: SiGithub },
                ].map((skill, index) => (
                  <span key={index} className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium transition-colors hover:bg-gray-200 dark:hover:bg-white/10 whitespace-nowrap">
                    <skill.icon className="w-3.5 h-3.5" color={skill.color} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Box */}
          <Card className="mt-8 p-6">
            <h2 className="text-[13px] font-bold text-gray-900 dark:text-white mb-6 font-race">
              {t('home.languages')}
            </h2>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="fi fi-kh text-2xl rounded-sm shadow-sm flex-shrink-0 mt-1"></span>
                <div>
                  <p className="text-[15px] font-bold text-gray-900 dark:text-white">{t('home.khmer')}</p>
                  <p className="text-[12px] text-gray-500 font-medium mt-0.5">{t('home.native')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="fi fi-gb text-2xl rounded-sm shadow-sm flex-shrink-0 mt-1"></span>
                <div>
                  <p className="text-[15px] font-bold text-gray-900 dark:text-white">{t('home.english')}</p>
                  <p className="text-[12px] text-gray-500 font-medium mt-0.5">{t('home.english_level')}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Main Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10">

          {/* Experience Section */}
          <section>
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6 font-race">{t('home.experience', 'Experience')}</h2>
            <Card className="p-8 md:p-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-2 border-b border-gray-100 dark:border-gray-800/50 pb-6">
                <div>
                  <h3 className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">{t('home.exp_role')}</h3>
                  <p className="text-gray-900 dark:text-white font-bold text-xl sm:text-2xl mt-1">{t('home.exp_company')} <span className="text-gray-400 font-medium text-lg">{t('home.exp_remote')}</span></p>
                </div>
                <div className="text-left sm:text-right mt-2 sm:mt-0">
                  <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold mb-1">{t('home.exp_date')}</span>
                  <p className="text-xs font-medium text-gray-500 mt-1">Malaysia</p>
                </div>
              </div>
              <ul className="space-y-4 text-[13px] text-gray-600 dark:text-gray-400">
                <li><strong className="text-gray-800 dark:text-gray-200 font-semibold">{t('home.exp_dev_title')}:</strong> {t('home.exp_dev_desc')}</li>
                <li><strong className="text-gray-800 dark:text-gray-200 font-semibold">{t('home.exp_opt_title')}:</strong> {t('home.exp_opt_desc')}</li>
                <li><strong className="text-gray-800 dark:text-gray-200 font-semibold">{t('home.exp_int_title')}:</strong> {t('home.exp_int_desc')}</li>
                <li><strong className="text-gray-800 dark:text-gray-200 font-semibold">{t('home.exp_collab_title')}:</strong> {t('home.exp_collab_desc')}</li>
              </ul>
            </Card>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6 font-race">{t('home.education', 'Education')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Short Course */}
              <Card className="p-8 flex flex-col justify-between md:col-span-2">
                <div>
                  <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-4">{t('home.edu_1_date')}</p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('home.edu_1_school')}</h3>
                  <p className="text-[13px] font-medium text-gray-600 dark:text-gray-400 max-w-2xl">
                    {t('home.edu_1_desc')}
                  </p>
                </div>
              </Card>

              {/* University */}
              <Card className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-4">{t('home.edu_2_date')}</p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('home.edu_2_school')}</h3>
                  <p className="text-[13px] font-medium text-gray-600 dark:text-gray-400">{t('home.edu_2_desc')}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800/50">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{t('home.edu_location')}</p>
                </div>
              </Card>

              {/* High School */}
              <Card className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-4">{t('home.edu_3_date')}</p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('home.edu_3_school')}</h3>
                  <p className="text-[13px] font-medium text-gray-600 dark:text-gray-400">{t('home.edu_3_desc')}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800/50">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{t('home.edu_location')}</p>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA Box */}
          <div className="mt-4 bg-blue-600 rounded-[32px] p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight whitespace-pre-line">
                {t('home.cta_title')}
              </h2>
              <p className="text-blue-100 text-[13px] md:text-sm font-medium max-w-md">
                {t('home.intro_2')}
              </p>
            </div>
            <Link
              href="mailto:seangsang7@gmail.com"
              className="whitespace-nowrap bg-white text-blue-600 font-bold py-3.5 px-8 rounded-full shadow-sm text-sm transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
            >
              {t('home.get_in_touch')}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
