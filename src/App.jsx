import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleNavigate = (navId, categoryFilter) => {
    if (categoryFilter) {
      setActiveCategory(categoryFilter);
    } else if (navId === 'websites') {
      setActiveCategory('websites');
    } else if (navId === 'mobile-apps') {
      setActiveCategory('mobile');
    } else if (navId === 'saas') {
      setActiveCategory('saas');
    } else if (navId === 'work') {
      setActiveCategory('all');
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col antialiased selection:bg-primary-fixed selection:text-primary">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <ProjectsSection
          selectedCategory={activeCategory}
          onCategoryChange={(cat) => {
            setActiveCategory(cat);
          }}
        />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer onNavigate={handleNavigate} />
      <FloatingActions />
    </div>
  );
}
