import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { GalleryImage } from '../types';

interface ProjectDetailPageProps {
  image: GalleryImage;
  onClose: () => void;
  onOpenVR: (url: string) => void;
}

const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const contentContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const contentItemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const imageSlideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };
  
const NavButton: React.FC<{ onClick: (e: React.MouseEvent) => void; children: React.ReactNode; position: 'left' | 'right' }> = ({ onClick, children, position }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 ${position === 'left' ? 'left-2 md:left-4' : 'right-2 md:right-4'} z-20 bg-black/30 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center backdrop-blur-sm hover:bg-black/50 transition-colors focus:outline-none`}
    >
        {children}
    </button>
);


const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ image, onClose, onOpenVR }) => {
    const [allImages] = useState([image.src, ...image.details]);
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = ((page % allImages.length) + allImages.length) % allImages.length;
    const currentImageSrc = allImages[imageIndex];

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const hasVR = image.vrUrl && currentImageSrc === image.src;

    const handleImageClick = () => {
        if (hasVR) {
        onOpenVR(image.vrUrl!);
        }
    };

    const visibleThumbnails = Array.from({ length: Math.min(4, allImages.length - 1) }, (_, i) => {
        const idx = (imageIndex + i + 1) % allImages.length;
        return allImages[idx];
    });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 bg-[#F9F9F9] z-50 overflow-y-auto"
    >
      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <motion.button
            onClick={onClose}
            className="absolute top-6 left-6 z-50 text-sm font-medium tracking-wider uppercase flex items-center"
            whileHover={{ color: '#B8860B' }}
        >
            <svg xmlns="http://www.w.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Gallery
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div 
                className="relative h-[45vh] md:col-span-2 md:h-[80vh] overflow-hidden group" 
                layoutId={`card-container-${image.id}`}
            >
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        src={currentImageSrc}
                        alt={`${image.caption} view ${imageIndex + 1}`}
                        custom={direction}
                        variants={imageSlideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className={`absolute w-full h-full object-cover ${hasVR ? 'cursor-pointer' : ''}`}
                        onClick={handleImageClick}
                        // Only the first image gets the layoutId to animate from the gallery
                        layoutId={currentImageSrc === image.src ? `card-image-${image.id}` : undefined}
                    />
                </AnimatePresence>

                 {allImages.length > 1 && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <NavButton onClick={(e) => { e.stopPropagation(); paginate(-1); }} position="left">
                            <svg xmlns="http://www.w.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </NavButton>
                        <NavButton onClick={(e) => { e.stopPropagation(); paginate(1); }} position="right">
                            <svg xmlns="http://www.w.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </NavButton>
                    </div>
                )}
            </motion.div>

            <motion.div 
              className="md:col-span-1 flex flex-col pt-8 md:pt-0"
              variants={contentContainerVariants}
              initial="initial"
              animate="animate"
            >
                <motion.h1 variants={contentItemVariants} className="text-3xl sm:text-4xl font-light tracking-wide mb-4">
                    {image.caption}
                </motion.h1>
                <motion.p variants={contentItemVariants} className="text-base leading-relaxed text-gray-700 mb-8">
                    {image.description}
                </motion.p>

                {allImages.length > 1 && (
                    <motion.div variants={contentItemVariants} className="mt-auto pt-8 border-t border-gray-200">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">Details</h3>
                        <motion.div layout className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-2">
                            {visibleThumbnails.map((detailSrc) => (
                                <motion.div 
                                    key={detailSrc} 
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-auto aspect-[4/3] overflow-hidden"
                                >
                                    <img
                                        src={detailSrc}
                                        alt={`${image.caption} detail`}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;