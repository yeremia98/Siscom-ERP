/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ClientPortfolioSection } from './components/ClientPortfolioSection';
import { ModulesSection } from './components/ModulesSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { MethodologySection } from './components/MethodologySection';
import { SecurityCompliance } from './components/SecurityCompliance';
import { FaqSection } from './components/FaqSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingWidgets } from './components/FloatingWidgets';
import { ProductDetailPage } from './components/ProductDetailPage';
import { DedicatedFaqPage } from './components/DedicatedFaqPage';
import { DedicatedBlogPage } from './components/DedicatedBlogPage';
import { analytics } from './utils/analytics';
import { ArrowRight, Phone } from 'lucide-react';
import { VERIFIED_CONTACTS } from './data/erpData';

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    // Support pathname or hash-based route fallback
    const path = window.location.pathname;
    if (path && path !== '/') return path;
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('/')) return hash;
    return '/';
  });

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledSector, setPrefilledSector] = useState<string | undefined>();

  // Sync browser popstate (back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentRoute(path);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    try {
      window.history.pushState({}, '', route);
    } catch {
      // Fallback for strict sandbox iframe environments
      window.location.hash = route;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    analytics.track('page_view', { page_path: route });
  };

  const handleOpenConsultation = (sector?: string) => {
    setPrefilledSector(sector);
    setIsConsultationOpen(true);
    analytics.track('form_start', {
      form_name: 'enterprise_consultation',
      sector: sector || 'general',
    });
  };

  // Route View Resolver
  const renderRouteView = () => {
    if (currentRoute.startsWith('/product/')) {
      const slug = currentRoute.replace('/product/', '').split('/')[0];
      return (
        <ProductDetailPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenConsultation={handleOpenConsultation}
        />
      );
    }

    if (currentRoute === '/faq') {
      return (
        <DedicatedFaqPage
          onNavigate={handleNavigate}
          onOpenConsultation={handleOpenConsultation}
        />
      );
    }

    if (currentRoute === '/blog') {
      return (
        <DedicatedBlogPage
          onNavigate={handleNavigate}
          onOpenConsultation={handleOpenConsultation}
        />
      );
    }

    // Default Home View
    return (
      <main className="flex-1" id="main-content">
        {/* AstroWind Hero with 3D Mascot & Dashboard */}
        <Hero onNavigate={handleNavigate} onOpenConsultation={handleOpenConsultation} />

        {/* AstroWind Stats Strip */}
        <Stats />

        {/* Enterprise Client Portfolio & Industrial References from siscom.co.id */}
        <ClientPortfolioSection onOpenConsultation={handleOpenConsultation} />

        {/* Industry Modules Deep-Dive (7 Core Modules) */}
        <ModulesSection onOpenConsultation={handleOpenConsultation} />

        {/* Enterprise Architecture & Comparison vs Odoo/Salesforce */}
        <CapabilitiesSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 5-Step Implementation Methodology */}
        <MethodologySection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Security, Data Sovereignty & Tax Compliance */}
        <SecurityCompliance />

        {/* Enterprise Technical FAQ Accordion */}
        <FaqSection />

        {/* Executive Call To Action Banner */}
        <CallToAction onOpenConsultation={() => handleOpenConsultation()} />
      </main>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-orange-500 selection:text-white transition-colors duration-200">
      {/* AstroWind Enterprise Header with Theme Toggle & Mega Menu */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Dynamic View */}
      {renderRouteView()}

      {/* Corporate Footer with Official Details */}
      <Footer onNavigate={handleNavigate} onOpenConsultation={handleOpenConsultation} />

      {/* Enterprise Floating Speed Dial & Scroll-To-Top */}
      <FloatingWidgets onOpenConsultation={handleOpenConsultation} />

      {/* Sticky Mobile Bottom Enterprise Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-3 px-4 flex items-center gap-2 shadow-2xl">
        <button
          onClick={() => handleOpenConsultation()}
          className="flex-1 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-lg shadow-orange-600/30 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <span>Jadwalkan Konsultasi</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin konsultasi sistem ERP Enterprise.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 px-4 rounded-xl border border-emerald-600/60 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-bold text-xs flex items-center gap-1.5 shrink-0"
          title="WhatsApp Sales"
        >
          <Phone className="w-4 h-4 text-emerald-500" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>

      {/* Interactive Enterprise Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledSector={prefilledSector}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
