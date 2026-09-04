import React from 'react';
import { ArrowDown, Check, Sparkles, Star } from 'lucide-react';

interface PlanComparisonSectionProps {
  onScrollToOffers: () => void;
}

export const PlanComparisonSection: React.FC<PlanComparisonSectionProps> = ({ onScrollToOffers }) => {
  return (
    <section className="w-full px-2 sm:px-4 py-5 text-center">
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-b from-amber-500 via-orange-500 to-red-600 rounded-3xl p-4 sm:p-5 text-white shadow-xl border-2 border-amber-300">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            COMPARE E ECONOMIZE
          </div>

          <h3 className="text-xl sm:text-2xl font-black uppercase leading-tight tracking-tight">
            POR QUE ESCOLHER O PACOTE COMPLETO?
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-amber-100 font-semibold leading-relaxed">
            Por uma pequena diferença de apenas <strong className="text-yellow-300 font-black">R$ 19,90</strong>, você leva a coleção definitiva:
          </p>

          <div className="mt-3.5 bg-white rounded-2xl p-3.5 text-slate-800 text-left space-y-2 shadow-inner">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900">
              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Todos os 9 Módulos estruturados (de R$ 10 por módulo)</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900">
              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>5 Super Bônus exclusivos avaliados em R$ 97,00</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900">
              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Acesso vitalício, atualizações e impressão ilimitada</span>
            </div>
          </div>

          <button
            onClick={onScrollToOffers}
            className="mt-4 w-full bg-white hover:bg-amber-50 active:scale-[0.98] text-red-600 font-black text-sm sm:text-base py-3.5 px-3 rounded-2xl shadow-lg border-b-4 border-amber-200 transition-all flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
          >
            <span>VER OS PLANOS E GARANTIR MEU ACESSO</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
