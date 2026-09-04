import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="w-full px-3 sm:px-4 py-8">
      <div className="max-w-md mx-auto text-center">
        {/* Section Header */}
        <div className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-sm tracking-wider mb-2">
          DÚVIDAS
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-red-600 uppercase tracking-tight mb-6">
          PERGUNTAS FREQUENTES
        </h3>

        {/* Accordion List */}
        <div className="space-y-2.5 text-left">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-amber-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  id={`btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left font-extrabold text-xs sm:text-sm text-slate-800 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-red-100 text-red-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-dashed border-slate-100 bg-amber-50/30 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
