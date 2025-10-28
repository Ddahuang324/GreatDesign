
import React from 'react';
// FIX: Import Variants type from framer-motion to provide explicit typing for variant objects.
import { motion, Variants } from 'framer-motion';

interface HomePageProps {
  onViewGallery: () => void;
}

// FIX: Add Variants type annotation to ensure correct type inference for transition properties like 'ease'.
const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

// FIX: Add Variants type annotation to ensure correct type inference for transition properties like 'ease'.
const contentVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: 'easeOut',
      staggerChildren: 0.2,
      delayChildren: 0.5 
    } 
  },
};

const HomePage: React.FC<HomePageProps> = ({ onViewGallery }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/hero/1920/1080)' }}
        initial={{ scale: 1.1, filter: 'brightness(0.7)' }}
        animate={{ scale: 1, filter: 'brightness(0.5)', transition: { duration: 8, ease: 'easeInOut' } }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </motion.div>

      <motion.div 
        className="relative z-10 text-center text-white"
        variants={contentVariants}
      >
        <motion.h1 variants={contentVariants} className="text-4xl md:text-6xl font-light tracking-widest uppercase">
          空间的美学新生
        </motion.h1>
        <motion.p variants={contentVariants} className="mt-4 text-md md:text-lg font-extralight tracking-wider">
          匠心设计，品质生活
        </motion.p>
        <motion.div variants={contentVariants} className="mt-12">
          <motion.button
            onClick={onViewGallery}
            className="px-8 py-3 border border-white text-white font-medium tracking-widest uppercase text-sm transition-colors duration-300"
            whileHover={{ 
              backgroundColor: 'rgba(184, 134, 11, 0.8)',
              borderColor: '#B8860B',
              y: -2,
              transition: { duration: 0.3, ease: 'easeOut' }
            }}
            whileTap={{ scale: 0.95 }}
          >
            进入展廊
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
