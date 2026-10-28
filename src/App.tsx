/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { AnalyticsDrawer } from './components/AnalyticsDrawer';
import { ScorecardModal } from './components/ScorecardModal';
import { HomeView } from './views/HomeView';
import { ProductContractorView } from './views/ProductContractorView';
import { SolutionsView } from './views/SolutionsView';
import { PricingView } from './views/PricingView';
import { CaseStudiesView } from './views/CaseStudiesView';
import { ComparisonView } from './views/ComparisonView';
import { SecurityView } from './views/SecurityView';
import { ResourcesView } from './views/ResourcesView';
import { ContactView } from './views/ContactView';
import { analytics } from './utils/analytics';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState<string | undefined>();
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [isScorecardOpen, setIsScorecardOpen] = useState(false);

  // Sync with browser hash for easy navigation & direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'produk/erp-kontraktor') setCurrentView('product-contractor');
      else if (hash === 'solusi') setCurrentView('solutions');
      else if (hash === 'harga') setCurrentView('pricing');
      else if (hash === 'studi-kasus') setCurrentView('case-studies');
      else if (hash === 'bandingkan') setCurrentView('comparison');
      else if (hash === 'keamanan') setCurrentView('security');
      else if (hash === 'sumber-daya') setCurrentView('resources');
      else if (hash === 'kontak') setCurrentView('contact');
      else setCurrentView('home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash
    let hash = '';
    if (view === 'product-contractor') hash = '#/produk/erp-kontraktor';
    else if (view === 'solutions') hash = '#/solusi';
    else if (view === 'pricing') {
      hash = '#/harga';
      analytics.track('pricing_view', { source: 'navigation' });
    } else if (view === 'case-studies') hash = '#/studi-kasus';
    else if (view === 'comparison') hash = '#/bandingkan';
    else if (view === 'security') hash = '#/keamanan';
    else if (view === 'resources') hash = '#/sumber-daya';
    else if (view === 'contact') hash = '#/kontak';
    else hash = '#/';

    window.history.pushState(null, '', hash);
  };

  const handleOpenDemo = (product?: string) => {
    setPrefilledProduct(product);
    setIsDemoModalOpen(true);
    analytics.track('form_start', { form_name: 'demo_booking_3step', product });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenDemo={handleOpenDemo}
        onOpenAnalytics={() => setIsAnalyticsOpen(true)}
        onOpenScorecard={() => setIsScorecardOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1" id="main-content">
        {currentView === 'home' && (
          <HomeView onNavigate={handleNavigate} onOpenDemo={handleOpenDemo} />
        )}
        {currentView === 'product-contractor' && (
          <ProductContractorView onNavigate={handleNavigate} onOpenDemo={handleOpenDemo} />
        )}
        {currentView === 'solutions' && (
          <SolutionsView onNavigate={handleNavigate} onOpenDemo={handleOpenDemo} />
        )}
        {currentView === 'pricing' && (
          <PricingView onNavigate={handleNavigate} onOpenDemo={handleOpenDemo} />
        )}
        {currentView === 'case-studies' && (
          <CaseStudiesView onNavigate={handleNavigate} onOpenDemo={handleOpenDemo} />
        )}
        {currentView === 'comparison' && (
          <ComparisonView onNavigate={handleNavigate} onOpenDemo={handleOpenDemo} />
        )}
        {currentView === 'security' && (
          <SecurityView onNavigate={handleNavigate} onOpenDemo={() => handleOpenDemo()} />
        )}
        {currentView === 'resources' && (
          <ResourcesView onNavigate={handleNavigate} onOpenDemo={() => handleOpenDemo()} />
        )}
        {currentView === 'contact' && (
          <ContactView onNavigate={handleNavigate} onOpenDemo={() => handleOpenDemo()} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenDemo={() => handleOpenDemo()} />

      {/* Sticky Mobile Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 flex items-center gap-2 shadow-2xl">
        <button
          onClick={() => handleOpenDemo()}
          className="flex-1 py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/30 flex items-center justify-center gap-1.5 active:scale-95 transition"
        >
          <span>Jadwalkan Demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin konsultasi sistem ERP.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 px-3.5 rounded-xl border border-emerald-600 bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center gap-1 shrink-0"
          title="WhatsApp Sales"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>

      {/* 3-Step Demo Booking Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        prefilledProduct={prefilledProduct}
      />

      {/* Live Conversion & Event Tracking Inspector */}
      <AnalyticsDrawer
        isOpen={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
      />

      {/* Comprehensive Audit Scorecard Modal */}
      <ScorecardModal
        isOpen={isScorecardOpen}
        onClose={() => setIsScorecardOpen(false)}
      />
    </div>
  );
}
