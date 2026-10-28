import React, { useEffect, useState } from 'react';
import { analytics, TrackedEvent } from '../utils/analytics';
import { 
  BarChart2, 
  X, 
  Activity, 
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Filter
} from 'lucide-react';

interface AnalyticsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalyticsDrawer: React.FC<AnalyticsDrawerProps> = ({ isOpen, onClose }) => {
  const [events, setEvents] = useState<TrackedEvent[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const unsubscribe = analytics.subscribe((updatedEvents) => {
      setEvents(updatedEvents);
    });
    return () => unsubscribe();
  }, []);

  if (!isOpen) return null;

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.eventName.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-slate-900 text-slate-100 shadow-2xl border-l border-slate-800 flex flex-col animate-in slide-in-from-right duration-200">
      {/* Drawer Header */}
      <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-emerald-400" />
          <div>
            <h3 className="font-bold text-sm text-white">Conversion & GTM Inspector</h3>
            <p className="text-[10px] text-slate-400">Arsitektur 1 Container GTM • GA4 Real-time</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          aria-label="Tutup inspector"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Architecture Badges */}
      <div className="p-3 bg-slate-950/60 border-b border-slate-800 text-[11px] space-y-2">
        <div className="flex items-center justify-between text-slate-400">
          <span>GTM Container Status:</span>
          <span className="font-mono text-emerald-400 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> GTM-SISCOM01 (Single Verified)
          </span>
        </div>
        <div className="flex items-center justify-between text-slate-400">
          <span>Consent Mode v2:</span>
          <span className="text-blue-400 font-semibold">Granted (UU PDP Compliant)</span>
        </div>
        <div className="flex items-center justify-between text-slate-400">
          <span>Lead Webhook:</span>
          <span className="text-amber-400 font-semibold">CRM Dispatch Ready</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="p-2 bg-slate-900 border-b border-slate-800 flex items-center gap-1 text-[11px]">
        {['all', 'form', 'cta', 'pricing', 'demo'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-2.5 py-1 rounded-md capitalize font-medium transition ${
              filter === f ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Event Stream */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5 text-xs font-mono">
        {filteredEvents.length === 0 ? (
          <div className="py-12 text-center text-slate-500">
            <Activity className="w-8 h-8 mx-auto mb-2 opacity-40 animate-pulse" />
            <p className="text-xs">Belum ada event tercatat.</p>
            <p className="text-[11px] text-slate-600 mt-1">Klik tombol CTA, coba kalkulator harga, atau buka form demo untuk melihat dispatch event.</p>
          </div>
        ) : (
          filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-emerald-400 font-bold">{evt.eventName}</span>
                <span className="text-[10px] text-slate-500">{evt.timestamp}</span>
              </div>
              <pre className="text-[10px] text-slate-400 bg-slate-900/90 p-1.5 rounded overflow-x-auto whitespace-pre-wrap">
                {JSON.stringify(evt.parameters, null, 2)}
              </pre>
            </div>
          ))
        )}
      </div>

      {/* Footer Info */}
      <div className="p-3 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
        <span>Menangkap {events.length} event sesi ini</span>
        <button
          onClick={() => {
            analytics.track('cta_click', { cta_label: 'Tes Simulasi Event', location: 'inspector' });
          }}
          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-sans text-[11px]"
        >
          Trigger Tes Event
        </button>
      </div>
    </div>
  );
};
