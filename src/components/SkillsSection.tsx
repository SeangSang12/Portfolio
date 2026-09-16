import React from 'react';
import { skillsData } from '@/data/skills';

const SkillCategory = ({ title, skills, colorClass }: { title: string, skills: any[], colorClass: string }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <h3 className={`text-xl font-bold mb-6 ${colorClass} font-race tracking-wide uppercase`}>
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="text-xl">{skill.icon}</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
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
