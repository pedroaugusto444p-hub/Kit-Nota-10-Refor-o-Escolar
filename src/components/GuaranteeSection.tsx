import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="w-full px-3 sm:px-4 py-6">
      <div className="max-w-md mx-auto bg-gradient-to-b from-amber-50/90 to-white rounded-3xl p-5 sm:p-6 shadow-sm border-2 border-amber-300 text-center flex flex-col items-center">
        {/* Seal / Badge */}
        <div className="mb-3">
          <ImagePlaceholder
            src="assets/garantia.webp"
            alt="Selo 7 Dias de Garantia Incondicional"
            type="guarantee"
            className="w-36 h-36"
          />
        </div>

        {/* Heading */}
        <span className="text-[11px] font-black text-amber-800 uppercase tracking-widest block">
          SATISFAÇÃO GARANTIDA
        </span>
        <h3 className="font-kids text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
          7 DIAS DE GARANTIA
        </h3>

        {/* Text */}
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          Você pode experimentar o material com total tranquilidade. Se durante os primeiros 7 dias você achar que o Kit Reforço Nota 10 não atende às suas expectativas, poderá solicitar o cancelamento e o reembolso de acordo com as regras da plataforma de pagamento.
        </p>

        {/* Mini Trust Footer */}
        <div className="mt-4 pt-3 border-t border-amber-200/60 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-amber-900">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Risco Zero Para Você</span>
        </div>
      </div>
    </section>
  );
};
