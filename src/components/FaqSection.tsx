import React, { useState } from 'react';
import { FAQ_ITEMS } from '../content/faq';
import { ChevronDown, Search, HelpCircle, PhoneCall } from 'lucide-react';
import { COMPANY_DATA } from '../content/company';

interface FaqSectionProps {
  onNavigate: (route: string) => void;
}

export function FaqSection({ onNavigate }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(FAQ_ITEMS.map((item) => item.category)))];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 border-b border-slate-200 dark:border-slate-800 bg-[#FAFAF7] dark:bg-[#080E1E] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="space-y-3 mb-10 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0B2447] dark:bg-amber-400"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Pertanyaan yang Sering Diajukan
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Penjelasan teknis arsitektur, kepatuhan hukum, dan biaya.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Jawaban lugas atas evaluasi CFO, manajer operasional, dan pimpinan IT sebelum memutuskan pengadaan sistem ERP.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 items-stretch sm:items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0B2447] text-white dark:bg-amber-400 dark:text-slate-950 font-semibold'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat === 'all' ? 'Semua topik' : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#0B2447] dark:focus:border-amber-400"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 max-w-4xl">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              Tidak ada pertanyaan yang sesuai dengan kata kunci pencarian.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-[#111D38] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors focus-visible:outline-2 focus-visible:outline-[#0B2447]"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 mt-1 transition-transform ${
                        isOpen ? 'rotate-180 text-[#0B2447] dark:text-amber-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 bg-slate-100/70 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-4xl">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Punya pertanyaan spesifik mengenai SOP internal perusahaan Anda?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Konsultan teknis kami siap membedah kesesuaian dokumen dan alur approval Anda.
            </p>
          </div>
          <a
            href={`https://wa.me/62${COMPANY_DATA.whatsappPrimary.replace(/[-+ ]/g, '').replace(/^0/, '')}?text=Halo%20SISCOM,%20saya%20ingin%20konsultasi%20mengenai%20kesesuaian%20modul%20ERP.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Tanya tim konsultan via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
