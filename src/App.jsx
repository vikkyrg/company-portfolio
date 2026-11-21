import React from 'react';
import Header from './components/Header';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-blue-100 selection:text-primary">
      {/* 1. Clean, Modern, Professional Header with Company Logo & Name (No separate page links) */}
      <Header />

      {/* 2. Main Centered Single-Page Scrolling Portfolio Section with Dynamic Filter Tabs */}
      <main className="flex-1 w-full pt-14 sm:pt-16">
        <PortfolioSection />
      </main>

      {/* 3. Compact Clean Single-Page Footer */}
      <Footer />
    </div>
  );
}
