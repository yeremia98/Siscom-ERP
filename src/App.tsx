/**
 * SISCOM ERP (siscom.co.id) SPA Main Application
 * Adheres strictly to Swiss/Minimalism B2B SaaS architecture and anti-AI-slop rules.
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ModulesBento } from './components/ModulesBento';
import { SegmentSelector } from './components/SegmentSelector';
import { ImplementationTimeline } from './components/ImplementationTimeline';
import { DeploymentComparison } from './components/DeploymentComparison';
import { ClientGrid } from './components/ClientGrid';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DemoPage } from './components/DemoPage';
import { EstimasiPage } from './components/EstimasiPage';
import { VerifikasiPage } from './components/VerifikasiPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { IndustriPage } from './components/IndustriPage';
import { LayananPage } from './components/LayananPage';
import { KlienPage } from './components/KlienPage';
import { NotFoundPage } from './components/NotFoundPage';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { COMPANY_DATA } from './content/company';

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname;
    if (path && path !== '/') return path;
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('/')) return hash;
    return '/';
  });

  // Handle browser popstate navigation (Back / Forward)
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
    // If it's a section anchor on home page
    if (route.startsWith('/#')) {
      const anchorId = route.replace('/#', '');
      if (currentRoute !== '/') {
        setCurrentRoute('/');
        try {
          window.history.pushState({}, '', '/');
        } catch {
          // ignore
        }
      }
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    setCurrentRoute(route);
    try {
      window.history.pushState({}, '', route);
    } catch {
      window.location.hash = route;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route Resolver
  const renderCurrentRoute = () => {
    if (currentRoute === '/' || currentRoute === '') {
      return (
        <main>
          <Hero onNavigate={handleNavigate} />
          <ModulesBento onNavigate={handleNavigate} />
          <SegmentSelector onNavigate={handleNavigate} />
          <ImplementationTimeline />
          <DeploymentComparison />
          <ClientGrid onNavigate={handleNavigate} />
          <FaqSection onNavigate={handleNavigate} />
        </main>
      );
    }

    if (currentRoute.startsWith('/produk/')) {
      const slug = currentRoute.replace('/produk/', '');
      return <ProductDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    if (currentRoute === '/industri') {
      return <IndustriPage onNavigate={handleNavigate} />;
    }

    if (currentRoute === '/layanan') {
      return <LayananPage onNavigate={handleNavigate} />;
    }

    if (currentRoute === '/klien') {
      return <KlienPage onNavigate={handleNavigate} />;
    }

    if (currentRoute === '/demo') {
      return <DemoPage onNavigate={handleNavigate} />;
    }

    if (currentRoute === '/estimasi') {
      return <EstimasiPage onNavigate={handleNavigate} />;
    }

    if (currentRoute === '/verifikasi') {
      return <VerifikasiPage onNavigate={handleNavigate} />;
    }

    return <NotFoundPage onNavigate={handleNavigate} />;
  };

  const whatsappUrl = `https://wa.me/62${COMPANY_DATA.whatsappPrimary.replace(/[-+ ]/g, '').replace(/^0/, '')}?text=Halo%20SISCOM,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20software%20ERP.`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] dark:bg-[#080E1E] text-slate-900 dark:text-slate-100 antialiased font-sans selection:bg-[#0B2447] selection:text-white dark:selection:bg-amber-400 dark:selection:text-slate-950">
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      <div className="flex-1">{renderCurrentRoute()}</div>

      <Footer onNavigate={handleNavigate} />

      {/* Single, Minimalist Floating WhatsApp Action (No mascot, no fake bot) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-lg hover:shadow-xl transition-all focus-visible:outline-2 focus-visible:outline-emerald-500"
        aria-label="Konsultasi WhatsApp Resmi SISCOM"
      >
        <PhoneCall className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Konsultasi</span>
      </a>
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
