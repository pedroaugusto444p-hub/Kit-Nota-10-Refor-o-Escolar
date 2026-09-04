import React from 'react';
import { CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { HABILIDADES } from '../data';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="w-full px-3 sm:px-4 py-6">
      <div className="max-w-md mx-auto bg-white rounded-2xl p-5 shadow-sm border border-amber-100/80 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Desenvolvimento Focado</span>
        </div>

        {/* Title */}
        <h3 className="text-slate-800 text-base sm:text-lg font-black leading-snug">
          O KIT REFORÇO NOTA 10 FOI CRIADO PARA FACILITAR O MOMENTO DE ESTUDO
        </h3>

        {/* Description */}
        <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
          Com atividades direcionadas, você consegue trabalhar pouco a pouco exatamente as habilidades em que a criança apresenta mais dificuldade.
        </p>

        {/* Skills Grid */}
        <div className="mt-5 grid grid-cols-2 gap-2 text-left">
          {HABILIDADES.map((habilidade, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#FFF9F2] hover:bg-amber-50 p-2.5 rounded-xl border border-amber-200/60 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-xs font-bold text-slate-800 leading-tight">
                {habilidade}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
