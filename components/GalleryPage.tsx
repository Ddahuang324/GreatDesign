
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { GALLERY_IMAGES, GALLERY_LAYOUTS } from '../constants';
import { LayoutConfig, GalleryImage } from '../types';
import GalleryItem from './GalleryItem';
import GalleryTextItem from './GalleryTextItem';
import HoverFilterPanel from './HoverFilterPanel';

interface GalleryPageProps {
  onImageClick: (id: number) => void;
}

const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: [0.6, 0.01, 0.05, 0.9] } },
  exit: { opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } },
};

const allProjects = GALLERY_IMAGES;
const categories = ['全部', ...Array.from(new Set(allProjects.filter(p => p.type === 'image').map(p => (p as GalleryImage).category)))];

const GalleryPage: React.FC<GalleryPageProps> = ({ onImageClick }) => {
    const [layout, setLayout] = useState<LayoutConfig[]>([]);
    const [activeFilter, setActiveFilter] = useState('全部');
    
    useEffect(() => {
        // Select a random layout on component mount or filter change
        setLayout(GALLERY_LAYOUTS[Math.floor(Math.random() * GALLERY_LAYOUTS.length)]);
    }, [activeFilter]);

    const filteredItems = useMemo(() => {
        if (activeFilter === '全部') {
            return allProjects;
        }
        return allProjects.filter(item => {
            if (item.type === 'text') return true; // Always show text blocks
            return item.category === activeFilter;
        });
    }, [activeFilter]);
    
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative container mx-auto px-4 sm:px-6 py-24 sm:py-32"
    >
      <HoverFilterPanel
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[250px]">
        <AnimatePresence>
            {layout.length > 0 && filteredItems.map((item, index) => {
                const itemLayout = layout[index % layout.length];
                
                if (item.type === 'image') {
                    return (
                        <GalleryItem 
                            key={item.id} 
                            item={item}
                            onClick={() => onImageClick(item.id)}
                            colSpan={itemLayout.colSpan}
                            rowSpan={itemLayout.rowSpan}
                        />
                    );
                }
                return (
                    <GalleryTextItem 
                        key={item.id} 
                        item={item} 
                        colSpan={itemLayout.colSpan}
                        rowSpan={itemLayout.rowSpan}
                    />
                );
            })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default GalleryPage;
