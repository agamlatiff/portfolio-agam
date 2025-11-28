
import React, { useEffect, useState, useMemo } from 'react';
import { X, ExternalLink, Github, Youtube, ChevronLeft, ChevronRight, ImageIcon, PlayCircle, Link2 } from 'lucide-react';
import { Project } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

type MediaType = 'video' | 'image';

interface MediaItem {
  type: MediaType;
  url: string;
  thumbnail: string; // Used for gallery preview
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Construct the unified media list: Video (if any) -> Hero Image -> Gallery
  const mediaItems: MediaItem[] = useMemo(() => {
    if (!project) return [];

    const items: MediaItem[] = [];

    // 1. Priority: YouTube Video (Slide 1)
    if (project.youtubeId) {
      items.push({
        type: 'video',
        url: project.youtubeId,
        thumbnail: project.heroImage // Use hero image as thumbnail cover for the video
      });
    }

    // 2. Hero Image
    items.push({
      type: 'image',
      url: project.heroImage,
      thumbnail: project.heroImage
    });

    // 3. Gallery Images
    if (project.gallery && project.gallery.length > 0) {
      project.gallery.forEach(img => {
        items.push({
          type: 'image',
          url: img,
          thumbnail: img
        });
      });
    }

    return items;
  }, [project]);

  // Reset index when project changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const currentMedia = mediaItems[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-200 dark:border-slate-800"
          >

            {/* Top Media Section (Unified Slider) - FORCED 16:9 Aspect Ratio */}
            <div className="relative bg-black flex-shrink-0 w-full aspect-video group flex items-center justify-center overflow-hidden">

              <AnimatePresence mode="wait">
                {currentMedia.type === 'video' ? (
                  <motion.div
                    key={`video-${currentMedia.url}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full absolute inset-0"
                  >
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${currentMedia.url}?autoplay=1&rel=0&modestbranding=1`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </motion.div>
                ) : (
                  <motion.img
                    key={`img-${currentMedia.url}`}
                    src={currentMedia.url}
                    alt={`${project.title} slide`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain bg-black"
                  />
                )}
              </AnimatePresence>

              {/* Gradient Overlay for Controls Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Navigation Controls */}
              {mediaItems.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 z-20 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 z-20 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={32} />
                  </button>
                  {/* Counter */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/50 text-white text-xs font-bold rounded-full backdrop-blur-sm z-20 border border-white/10">
                    {currentMedia.type === 'video' ? 'Video Demo' : `Image ${currentIndex + 1} / ${mediaItems.length}`}
                  </div>
                </>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/40 hover:bg-white text-white hover:text-slate-900 p-2 rounded-full shadow-lg transition-all backdrop-blur-md z-30"
                aria-label="Tutup"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body Content */}
            <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-900">
              <div className="flex flex-col lg:flex-row h-full">

                {/* Left Column: Thumbnails Gallery Only */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wide border border-primary/20">
                      {project.industry}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
                  </div>

                  {/* Thumbnails Gallery - Controls the top slider */}
                  {mediaItems.length > 1 && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-2">
                        <ImageIcon size={14} /> Galeri & Media
                      </h3>
                      <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                        {mediaItems.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all group ${idx === currentIndex
                                ? 'border-primary ring-2 ring-primary/20'
                                : 'border-transparent opacity-60 hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-600'
                              }`}
                          >
                            <img
                              src={item.thumbnail}
                              alt="Thumbnail"
                              className="w-full h-full object-cover"
                            />

                            {/* Video Indicator on Thumbnail */}
                            {item.type === 'video' && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                                <PlayCircle size={24} className="text-white fill-black/50" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Sidebar Info (Simplified) */}
                <div className="w-full lg:w-80 bg-slate-50 dark:bg-slate-950/30 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 p-6 md:p-8 flex flex-col justify-start">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Link2 size={16} /> Akses Project
                  </h4>

                  <div className="space-y-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full gap-2 bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                      >
                        <ExternalLink size={18} /> Kunjungi Demo Live
                      </a>
                    )}

                    {project.youtubeId && (
                      <a
                        href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full gap-2 bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-red-600/20 hover:-translate-y-0.5"
                      >
                        <Youtube size={18} /> Tonton Video Demo
                      </a>
                    )}

                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full gap-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:border-slate-800 dark:hover:border-slate-400 text-slate-700 dark:text-slate-300 py-3.5 rounded-xl text-sm font-bold transition-all hover:shadow-md"
                      >
                        <Github size={18} /> Source Code
                      </a>
                    )}

                    {!project.liveLink && !project.youtubeId && !project.repoLink && (
                      <div className="text-center text-sm text-slate-500 italic p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
                        Link demo bersifat privat (Internal Company). Hubungi saya untuk presentasi langsung.
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
