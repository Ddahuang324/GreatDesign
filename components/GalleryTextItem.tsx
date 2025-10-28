import React from 'react';
// FIX: Import Variants type from framer-motion to provide explicit typing for variant objects.
import { motion, Variants } from 'framer-motion';
import { GalleryTextBlock } from '../types';

interface GalleryTextItemProps {
  item: GalleryTextBlock;
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

const GalleryTextItem: React.FC<GalleryTextItemProps> = ({ item }) => {
  const { title, paragraph, colSpan, rowSpan } = item;

  return (
    <motion.div
      className={`relative w-full h-full flex flex-col justify-center items-start p-6 sm:p-8 bg-white/50 ${colSpan} ${rowSpan}`}
      variants={itemScrollVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-xl sm:text-2xl font-medium text-[#222222] mb-3">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {paragraph}
      </p>
    </motion.div>
  );
};

export default GalleryTextItem;