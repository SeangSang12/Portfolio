import React from 'react';
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiNestjs,
  SiGit, SiDocker, SiPostman, SiVercel, 
  SiTrivy, SiCursor, SiCoolify, SiCloudflare, SiGithubactions, SiTanstack
} from "react-icons/si";
import { TbApi, TbBrandVscode, TbBrandNextjs, TbBrandGithub } from "react-icons/tb";
import { FaRocket } from "react-icons/fa";

export const skillsData = {
  topTechStack: [
    { name: 'Next.js', level: 90, icon: <TbBrandNextjs className="text-black dark:text-white" /> },
    { name: 'Nest.js', level: 85, icon: <SiNestjs className="text-[#E0234E]" /> },
    { name: 'PostgreSQL', level: 80, icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: 'Postman', level: 85, icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: 'CI/CD', level: 80, icon: <SiGithubactions className="text-[#2088FF]" /> },
    { name: 'Trivy', level: 70, icon: <SiTrivy className="text-[#1D60A1]" /> },
    { name: 'Cloudflare', level: 75, icon: <SiCloudflare className="text-[#F38020]" /> },
    { name: 'Coolify', level: 75, icon: <SiCoolify className="text-[#40B480]" /> },
    { name: 'GitHub', level: 90, icon: <TbBrandGithub className="text-black dark:text-white" /> },
  ],
  frontend: [
    { name: 'HTML5', level: 95, icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3 / Tailwind', level: 90, icon: <div className="flex -space-x-1"><SiCss className="text-[#1572B6]" /><SiTailwindcss className="text-[#06B6D4]" /></div> },
    { name: 'JavaScript / ES6+', level: 85, icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'TypeScript', level: 80, icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'React.js', level: 90, icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', level: 85, icon: <TbBrandNextjs className="text-black dark:text-white" /> },
    { name: 'TanStack', level: 85, icon: <SiTanstack className="text-[#FF4154]" /> },
  ],
  backend: [
    { name: 'Node.js', level: 80, icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: 'Express.js', level: 85, icon: <SiExpress className="text-black dark:text-white" /> },
    { name: 'Nest.js', level: 80, icon: <SiNestjs className="text-[#E0234E]" /> },
    { name: 'PostgreSQL', level: 75, icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: 'RESTful APIs', level: 90, icon: <TbApi className="text-gray-600 dark:text-gray-300" /> },
  ],
  tools: [
    { name: 'Git & GitHub', level: 90, icon: <div className="flex -space-x-1"><SiGit className="text-[#F05032]" /><TbBrandGithub className="text-black dark:text-white" /></div> },
    { name: 'VS Code', level: 95, icon: <TbBrandVscode className="text-[#007ACC]" /> },
    { name: 'Cursor', level: 90, icon: <SiCursor className="text-black dark:text-white" /> },
    { name: 'Postman', level: 85, icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: 'Docker', level: 65, icon: <SiDocker className="text-[#2496ED]" /> },
    { name: 'Coolify', level: 70, icon: <SiCoolify className="text-[#40B480]" /> },
    { name: 'CI/CD', level: 75, icon: <SiGithubactions className="text-[#2088FF]" /> },
    { name: 'Trivy', level: 60, icon: <SiTrivy className="text-[#1D60A1]" /> },
    { name: 'Cloudflare', level: 80, icon: <SiCloudflare className="text-[#F38020]" /> },
    { name: 'Vercel', level: 85, icon: <SiVercel className="text-black dark:text-white" /> },
    { name: 'Antigravity', level: 90, icon: <FaRocket className="text-purple-500" /> },
  ]
};
