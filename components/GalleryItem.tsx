import React from 'react';
// FIX: Import Variants type from framer-motion to provide explicit typing for variant objects.
import { motion, Variants } from 'framer-motion';
import { GalleryImage } from '../types';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

// FIX: Add Variants type annotation to ensure correct type inference for transition properties like 'ease'.
const overlayVariants: Variants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.4, ease: 'easeIn' } },
};

// FIX: Add Variants type annotation to ensure correct type inference for transition properties like 'ease'.
const captionVariants: Variants = {
  rest: { y: 15, opacity: 0 },
  hover: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

// FIX: Add Variants type annotation to ensure correct type inference for transition properties like 'ease'.
const imageVariants: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.4, ease: 'easeOut' } },
}

// FIX: Add Variants type annotation to ensure correct type inference for transition properties like 'ease'.
const itemScrollVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};


const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  const { src, caption, colSpan, rowSpan, vrUrl } = image;

  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer w-full h-full ${colSpan} ${rowSpan}`}
      variants={itemScrollVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onClick={onClick}
      layoutId={`card-container-${image.id}`}
    >
      <motion.div
        className="w-full h-full"
        initial="rest"
        whileHover="hover"
      >
        <motion.img
          src={src}
          alt={caption}
          className="absolute inset-0 w-full h-full object-cover"
          variants={imageVariants}
          layoutId={`card-image-${image.id}`}
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4"
          variants={overlayVariants}
        >
          <motion.div
            className="flex items-center"
            variants={captionVariants}
          >
            {vrUrl && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.254 9.682a9.023 9.023 0 0117.492 0 9.024 9.024 0 01-17.492 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 1v2.428m0 17.144V23m8.682-14.254l-1.717 1.717M5.035 5.035L6.752 6.752m12.213 12.213l-1.717-1.717M5.035 18.965l1.717-1.717M1 12h2.428m17.144 0H23" />
                </svg>
            )}
            <h3
                className="text-white text-lg md:text-xl font-light tracking-wider"
            >
                {caption}
            </h3>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryItem;