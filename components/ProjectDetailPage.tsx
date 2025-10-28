import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GalleryImage } from '../types';

interface ProjectDetailPageProps {
  image: GalleryImage;
  onClose: () => void;
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


const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ image, onClose }) => {
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Gallery
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div className="h-[45vh] md:col-span-2 md:h-[80vh]" layoutId={`card-container-${image.id}`}>
                <motion.img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                    layoutId={`card-image-${image.id}`}
                />
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

                <motion.div variants={contentItemVariants} className="mt-auto pt-8 border-t border-gray-200">
                    <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">Details</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {image.details.map((detailSrc, index) => (
                            <motion.img
                                key={index}
                                src={detailSrc}
                                alt={`${image.caption} detail ${index + 1}`}
                                className="w-full h-auto object-cover"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;