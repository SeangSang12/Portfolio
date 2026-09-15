"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/project";
import { useTranslation } from "react-i18next";
import Card from "@/components/Card";

export default function ProjectPage() {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-12 lg:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight font-race">
          Featured Projects
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl text-[15px] sm:text-base leading-relaxed">
          A showcase of my recent work, side projects, and open-source contributions. 
          Each project is built with a focus on beautiful design and a premium user experience.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group relative flex flex-col h-full w-full max-w-[420px] overflow-hidden rounded-[24px] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-blue-900/10"
          >
            {/* Top Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-white/5 border-b border-gray-100 dark:border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Content Container */}
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4 mb-2.5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 font-race tracking-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      title="View Source Code"
                    >
                      <SiGithub className="h-5 w-5" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      title="View Live Site"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="mb-6 text-[14px] leading-relaxed text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="mt-auto flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1.5 px-1 py-1 text-[12px] font-semibold text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    <tag.icon className="h-3.5 w-3.5" color={tag.color} />
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
