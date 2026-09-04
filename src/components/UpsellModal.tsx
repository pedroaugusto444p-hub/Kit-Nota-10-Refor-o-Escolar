import React from 'react';
import { Sparkles, CheckCircle2, X, ArrowRight } from 'lucide-react';
import { CHECKOUT_OFERTA_14_90, CHECKOUT_BASICO } from '../data';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedBasic: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({
  isOpen,
  onClose,
  onProceedBasic,
}) => {
  if (!isOpen) return null;

  const handleCheckout = (url: string) => {
    if (!url || url.includes('COLOCAR_LINK_CHECKOUT')) {
      alert('Aviso para o produtor: substitua a variável de checkout no arquivo data.ts com o seu link de checkout (R$ 14,90 ou R$ 10,00).');
      return;
    }
    window.location.href = url;
  };

  const benefits = [
    "Todos os 9 Módulos do Kit Reforço Completo",
    "Todos os 5 Bônus Exclusivos em PDF",
    "Caderno Especial de Alfabetização & Leitura",
    "Jogos Pedagógicos & Fichas de Grafomotricidade",
    "Acesso Vitalício + Atualizações e Impressões Ilimitadas",
  ];

  return (
    <div
      id="upsell-modal-overlay"
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        id="upsell-modal-card"
        className="relative w-full max-w-[340px] sm:max-w-[360px] bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title Header with Flame Badge */}
        <div className="flex items-center justify-center gap-1.5 mb-1 mt-0.5">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight uppercase">
            OFERTA ESPECIAL
          </h2>
          <span className="inline-flex items-center justify-center bg-amber-100 text-amber-600 w-6 h-6 rounded-lg text-sm shadow-sm">
            🔥
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-[13px] font-semibold text-slate-600 leading-snug max-w-[280px] mb-3.5">
          Leve o <span className="font-bold text-slate-900">Pacote Completo</span> por{' '}
          <span className="font-black text-emerald-600 text-base sm:text-lg">R$ 14,90</span>{' '}
          com todos os bônus incluso
        </p>

        {/* Bonus / Benefits Feature Box */}
        <div className="w-full bg-[#FFF9F2] rounded-xl p-3 border border-amber-200/90 text-left mb-4 shadow-sm">
          <div className="flex items-center gap-1.5 text-amber-700 font-black text-[11px] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>TODOS OS BENEFÍCIOS INCLUSOS:</span>
          </div>

          <ul className="space-y-1.5">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Primary CTA Button (14,90 Complete Package) */}
        <button
          type="button"
          id="btn-upsell-complete"
          onClick={() => handleCheckout(CHECKOUT_OFERTA_14_90)}
          className="w-full bg-[#10B981] hover:bg-[#059669] active:scale-[0.98] text-white font-black text-sm sm:text-base py-3 px-3 rounded-xl shadow-lg shadow-emerald-500/25 border-b-3 border-emerald-700 transition-all duration-150 flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
        >
          <span>QUERO O PACOTE COMPLETO</span>
        </button>

        {/* Secondary Decline Link (Proceed to 10.00 basic) */}
        <button
          type="button"
          id="btn-upsell-basic"
          onClick={() => {
            onClose();
            onProceedBasic();
          }}
          className="mt-2.5 text-[11px] sm:text-xs font-bold text-slate-500 hover:text-slate-800 underline decoration-slate-300 hover:decoration-slate-600 uppercase tracking-wide transition-colors py-1 px-2 cursor-pointer"
        >
          QUERO A OFERTA DE 10
        </button>
      </div>
    </div>
  );
};
