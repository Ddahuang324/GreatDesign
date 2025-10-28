
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Page, GalleryImage } from './types';
import { GALLERY_IMAGES } from './constants';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import AboutPage from './components/AboutPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import VRViewer from './components/VRViewer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [vrUrlToView, setVrUrlToView] = useState<string | null>(null);

  const handleSelectImage = (id: number) => {
    setSelectedImageId(id);
  };

  const handleCloseProject = () => {
    setSelectedImageId(null);
  };

  const handleOpenVR = (url: string) => {
    setVrUrlToView(url);
  };

  const handleCloseVR = () => {
    setVrUrlToView(null);
  };

  const selectedImage = GALLERY_IMAGES.find(item => item.type === 'image' && item.id === selectedImageId) as GalleryImage | undefined;

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage key="home" onViewGallery={() => setCurrentPage(Page.Gallery)} />;
      case Page.Gallery:
        return <GalleryPage key="gallery" onImageClick={handleSelectImage} />;
      case Page.About:
        return <AboutPage key="about" />;
      default:
        return <HomePage key="home" onViewGallery={() => setCurrentPage(Page.Gallery)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        <AnimatePresence mode="wait">
          {selectedImage ? (
            <ProjectDetailPage 
              key="project-detail"
              image={selectedImage} 
              onClose={handleCloseProject} 
              onOpenVR={handleOpenVR}
            />
          ) : (
            renderPage()
          )}
        </AnimatePresence>
      </main>
      <AnimatePresence>
        {vrUrlToView && <VRViewer url={vrUrlToView} onClose={handleCloseVR} />}
      </AnimatePresence>
    </div>
  );
};

export default App;