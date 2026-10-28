/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ModulesSection } from './components/ModulesSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { MethodologySection } from './components/MethodologySection';
import { SecurityCompliance } from './components/SecurityCompliance';
import { FaqSection } from './components/FaqSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { analytics } from './utils/analytics';
import { ArrowRight, Phone } from 'lucide-react';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledSector, setPrefilledSector] = useState<string | undefined>();

  const handleOpenConsultation = (sector?: string) => {
    setPrefilledSector(sector);
    setIsConsultationOpen(true);
    analytics.track('form_start', {
      form_name: 'enterprise_consultation',
      sector: sector || 'general',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* AstroWind Enterprise Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1" id="main-content">
        {/* AstroWind Hero */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* AstroWind Stats Strip */}
        <Stats />

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

      {/* Corporate Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Sticky Mobile Bottom Enterprise Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 px-4 flex items-center gap-2 shadow-2xl">
        <button
          onClick={() => handleOpenConsultation()}
          className="flex-1 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-lg shadow-orange-600/30 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <span>Jadwalkan Konsultasi Solusi</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin konsultasi sistem ERP Enterprise.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 px-4 rounded-xl border border-emerald-600/60 bg-emerald-950/40 text-emerald-400 font-bold text-xs flex items-center gap-1.5 shrink-0"
          title="WhatsApp Sales"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
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
