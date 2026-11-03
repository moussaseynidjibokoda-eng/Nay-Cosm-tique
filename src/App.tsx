/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { ProductDetail } from './pages/ProductDetail';
import { KitDetail } from './pages/KitDetail';
import { NotFound } from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if there is no hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  const [showPreloader, setShowPreloader] = useState(() => {
    // Show preloader on first page load
    const hasSeen = sessionStorage.getItem('naye_intro_seen');
    return !hasSeen;
  });

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    sessionStorage.setItem('naye_intro_seen', 'true');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <div className="min-h-screen flex flex-col bg-[#160D08] text-[#FBF6EE]">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produit/:slug" element={<ProductDetail />} />
            <Route path="/kit/:slug" element={<KitDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
