
import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';
import { ArrowUpRight, PlayCircle, Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProjectModal from '../ui/ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

// Separate Card Component to handle individual slider state
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const allImages = [project.heroImage, ...(project.gallery || [])];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      {project.isFeatured && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg border-2 border-white/50">
          <Star size={14} fill="currentColor" />
          <span>Unggulan</span>
        </div>
      )}

      {/* Image Slider Container - 9:16 Aspect Ratio (Portrait) */}
      <div className="relative aspect-[9/16] bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImgIndex}
            src={allImages[currentImgIndex]}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </AnimatePresence>

        {/* Play Button Indicator for Video Projects - Hides on Hover */}
        {project.youtubeId && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-lg">
              <PlayCircle size={32} className="text-white fill-white/20" />
            </div>
          </div>
        )}

        {/* Navigation Arrows (Visible on Hover if multiple images and not a video primary) */}
        {!project.youtubeId && allImages.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm pointer-events-auto transform hover:scale-110 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm pointer-events-auto transform hover:scale-110 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Overlay on Hover (Center Action) - Replaces Play Icon on Hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {project.youtubeId ? 'Tonton Demo' : 'Lihat Detail'} <ArrowUpRight size={16} />
          </div>
        </div>

        {/* Mobile Indicator */}
        <div className="md:hidden absolute bottom-3 right-3 bg-slate-900/80 text-white p-2 rounded-full z-10">
          <ArrowUpRight size={16} />
        </div>

        {/* Slide Indicators (Only if no video and multiple images) */}
        {!project.youtubeId && allImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {allImages.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImgIndex ? 'bg-white w-3' : 'bg-white/50'}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-bold text-primary uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded border border-indigo-100 dark:border-indigo-800/50">{project.industry}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed transition-colors flex-1">
          {project.shortDescription}
        </p>

        {/* REPLACED Tech Stack & Date with Simple Action Footer */}
        <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between group/footer">
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">
            Pelajari Project Ini
          </span>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { translations } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors"
            >
              Portofolio & Studi Kasus
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-slate-400 transition-colors text-lg"
            >
              Koleksi sistem yang telah saya bangun untuk menyelesaikan masalah bisnis nyata di berbagai industri.
            </motion.p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => {
            const tProject = translations.projects[project.id as keyof typeof translations.projects];
            const mergedProject = { ...project, ...tProject };

            return (
              <ProjectCard
                key={project.id}
                project={mergedProject}
                onClick={() => setSelectedProject(mergedProject)}
              />
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
