"use client";

import React from 'react';
import { skillsData } from '@/data/skills';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const SkillCategory = ({ title, skills, colorClass }: { title: string, skills: any[], colorClass: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[10px] p-6 md:p-8 shadow-sm border border-gray-200/50 dark:border-white/10"
    >
      <h3 className={`text-xl font-bold mb-6 ${colorClass} font-race tracking-wide uppercase`}>
        {title}
      </h3>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill, idx) => (
          <motion.div
            variants={itemVariants}
            key={idx}
          >
            <div
              className="animate-float flex items-center gap-2 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 px-4 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group/skill cursor-default"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <span className="text-xl transition-transform duration-300 ease-out group-hover/skill:scale-125 group-hover/skill:rotate-3">{skill.icon}</span>
              <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-4 scroll-mt-24">
      <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6 font-race">Technical Skills</h2>

      {/* Skills Rows */}
      <div className="flex flex-col gap-6">

        <SkillCategory
          title="Top Tech Stack"
          skills={skillsData.topTechStack}
          colorClass="text-orange-500 dark:text-orange-400"
        />

        <SkillCategory
          title="Frontend"
          skills={skillsData.frontend}
          colorClass="text-blue-500 dark:text-blue-400"
        />

        <SkillCategory
          title="Backend"
          skills={skillsData.backend}
          colorClass="text-emerald-500 dark:text-emerald-400"
        />

        <SkillCategory
          title="Tools & VC"
          skills={skillsData.tools}
          colorClass="text-purple-500 dark:text-purple-400"
        />

      </div>
    </section>
  );
}
