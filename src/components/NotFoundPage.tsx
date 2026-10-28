import React from 'react';
import { ArrowLeft, Home, HelpCircle } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (route: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="py-24 bg-[#FAFAF7] dark:bg-[#080E1E] min-h-[70vh] flex items-center justify-center transition-colors">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <span className="text-5xl font-mono font-bold text-[#0B2447] dark:text-amber-400 block">
          404
        </span>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Halaman tidak ditemukan.
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Tautan yang Anda tuju mungkin telah dipindahkan atau tautan salah ketik.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#0B2447] text-white hover:bg-[#071930] dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300"
          >
            <Home className="w-3.5 h-3.5" />
            Kembali ke Beranda
          </button>
          <button
            onClick={() => onNavigate('/#faq')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300"
          >
            Pusat Bantuan & FAQ
          </button>
        </div>
      </div>
    </div>
  );
}
