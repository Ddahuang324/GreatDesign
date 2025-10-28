import React from 'react';
// FIX: Import Variants type from framer-motion to provide explicit typing for variant objects.
import { motion, Variants } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import GalleryItem from './GalleryItem';
import GalleryTextItem from './GalleryTextItem';

interface GalleryPageProps {
  onImageClick: (id: number) => void;
}

// FIX: Add Variants type annotation to ensure correct type inference for transition properties, especially for the cubic-bezier array.
const pageVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.6, 0.01, 0.05, 0.9] } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.7, ease: 'easeInOut' } },
};

const GalleryPage: React.FC<GalleryPageProps> = ({ onImageClick }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container mx-auto px-4 sm:px-6 py-24 sm:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[250px]">
        {GALLERY_IMAGES.map((item) => {
            if (item.type === 'image') {
                return <GalleryItem key={item.id} image={item} onClick={() => onImageClick(item.id)} />;
            }
            return <GalleryTextItem key={item.id} item={item} />;
        })}
      </div>
    </motion.div>
  );
};

export default GalleryPage;