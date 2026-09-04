import React, { useState } from 'react';
import { Check, X, ShieldCheck, Zap, Lock, Star, ArrowDown } from 'lucide-react';
import { CHECKOUT_COMPLETO, CHECKOUT_BASICO, MOCKUP_PRINCIPAL_IMG } from '../data';
import { ImagePlaceholder } from './ImagePlaceholder';
import { UpsellModal } from './UpsellModal';

export const PricingSection: React.FC = () => {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const handleCheckout = (url: string) => {
    if (!url || url.includes('COLOCAR_LINK_CHECKOUT')) {
      alert('Aviso para o produtor: substitua a variável de checkout no arquivo data.ts com o seu link da Kiwify, Hotmart ou Eduzz.');
      return;
    }
    window.location.href = url;
  };

  const completoItems = [
    "Kit Reforço Nota 10 Completo",
    "Módulo 01: Leitura e Formação de Palavras",
    "Módulo 02: Sílabas Simples e Complexas",
    "Módulo 03: Interpretação de Textos",
    "Módulo 04: Produção de Frases e Textos",
    "Módulo 05: Matemática e Operações",
    "Módulo 06: Caligrafia e Coordenação",
    "Módulo 07: Português e Gramática",
    "Módulo 08: Ortografia Prática",
    "Módulo 09: Raciocínio Lógico",
    "Bônus 01: Apostila Extra de Português",
    "Bônus 02: Apostila Extra de Matemática",
    "Bônus 03: Jogos Educativos e Lúdicos",
    "Bônus 04: Leitura, Frases e Textos",
    "Bônus 05: Atividades Extras para Imprimir",
    "Acesso Vitalício ao Material",
    "Download e Impressão Ilimitados",
    "Suporte e Futuras Atualizações",
  ];

  const basicoIncluded = [
    "Seleção de atividades de reforço escolar",
    "Atividades de leitura básica",
    "Atividades de escrita inicial",
    "Atividades de Português",
    "Atividades de Matemática",
    "Material digital em formato PDF",
  ];

  const basicoNotIncluded = [
    "Coleção completa com 9 módulos",
    "Todos os 5 Bônus exclusivos",
    "Atividades extras de caligrafia e lógica",
    "Futuras atualizações do material",
  ];

  return (
    <section id="ofertas" className="w-full px-2 sm:px-4 py-6">
      <div className="max-w-md mx-auto text-center">
        {/* Section Header */}
        <div className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-sm tracking-wider mb-2">
          TABELA DE PREÇOS
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-red-600 uppercase tracking-tight mb-5">
          ESCOLHA A SUA OFERTA:
        </h3>

        {/* ========================================================
            PLANO COMPLETO (SUPER DESTACADO)
            ======================================================== */}
        <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border-[3.5px] border-red-600 text-center overflow-hidden mb-6">
          {/* Top Recommendation Ribbon */}
          <div className="bg-red-600 text-white font-black text-xs sm:text-sm py-2 px-4 -mx-6 -mt-6 uppercase tracking-wider shadow-sm flex items-center justify-center gap-1.5">
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            <span>MAIS VENDIDO • PACOTE COMPLETO</span>
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
          </div>

          {/* Plan Title & Subtitle */}
          <div className="mt-3.5">
            <span className="text-[10px] font-black text-red-600 uppercase tracking-widest block">
              ACESSO TOTAL
            </span>
            <h4 className="font-kids text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              KIT REFORÇO NOTA 10 COMPLETO
            </h4>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              Todos os 9 Módulos + 5 Bônus Exclusivos em PDF.
            </p>
          </div>

          {/* Pricing Box Spotlight */}
          <div className="mt-3 bg-gradient-to-b from-amber-50 to-orange-50/80 rounded-2xl p-3.5 border-2 border-amber-200 shadow-inner">
            <p className="text-xs font-medium text-slate-600">
              De <span className="font-extrabold text-slate-900 line-through decoration-red-600 decoration-2">R$ 97,00</span> por apenas:
            </p>
            <div className="flex items-baseline justify-center gap-1 my-0.5">
              <span className="text-xl font-black text-red-600">R$</span>
              <span className="text-5xl sm:text-6xl font-black text-red-600 tracking-tighter leading-none">
                29,90
              </span>
            </div>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-black px-3 py-0.5 rounded-full border border-emerald-200">
              PAGAMENTO ÚNICO • SEM MENSALIDADE
            </span>
          </div>

          {/* Mockup Preview */}
          <div className="mt-3 flex justify-center">
            <ImagePlaceholder
              src={MOCKUP_PRINCIPAL_IMG}
              alt="Kit Completo Mockup"
              type="hero"
              className="w-full max-w-[280px] h-[200px]"
            />
          </div>

          {/* Complete Checklist */}
          <div className="mt-3 text-left space-y-2 pt-3 border-t border-slate-100">
            {completoItems.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className={index === 0 || index >= 10 ? "font-bold text-slate-900" : "text-slate-700"}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Big Green 3D CTA Button */}
          <div className="mt-5">
            <a
              id="cta-completo"
              href={CHECKOUT_COMPLETO}
              onClick={(e) => {
                if (CHECKOUT_COMPLETO.includes('COLOCAR_LINK_CHECKOUT')) {
                  e.preventDefault();
                  handleCheckout(CHECKOUT_COMPLETO);
                }
              }}
              className="w-full bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-black text-base sm:text-lg py-4 px-3 rounded-2xl shadow-xl border-b-4 border-emerald-800 transition-all duration-150 flex flex-col items-center justify-center uppercase tracking-wide animate-pulse-cta cursor-pointer block text-center"
            >
              <span>QUERO O KIT COMPLETO POR R$ 29,90</span>
              <span className="text-[10px] font-bold text-emerald-100 lowercase normal-case tracking-normal">
                clique aqui para liberar seu acesso imediato
              </span>
            </a>
          </div>

          {/* Micro Trust Badges */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 grid grid-cols-3 gap-1 text-[10px] font-bold text-slate-600">
            <div className="flex flex-col items-center gap-0.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>GARANTIA 7 DIAS</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>ENVIO IMEDIATO</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>COMPRA SEGURA</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            PLANO BÁSICO (SECUNDÁRIO)
            ======================================================== */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border-2 border-slate-300 text-center">
          {/* Header */}
          <div className="inline-block bg-slate-100 text-slate-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-1.5">
            OFERTA BÁSICA
          </div>
          <h4 className="font-kids text-lg sm:text-xl font-bold text-slate-800">
            KIT REFORÇO NOTA 10 — BÁSICO
          </h4>
          <p className="text-xs text-slate-500 font-medium">
            Seleção resumida de atividades essenciais.
          </p>

          {/* Price */}
          <div className="mt-2.5 bg-slate-50 rounded-2xl p-3 border border-slate-200">
            <p className="text-xs font-medium text-slate-600">
              De <span className="font-extrabold text-slate-900 line-through decoration-red-600 decoration-2">R$ 57,00</span> por apenas:
            </p>
            <div className="flex items-baseline justify-center gap-1 my-0.5">
              <span className="text-base font-black text-slate-800">R$</span>
              <span className="text-4xl font-black text-slate-800 tracking-tight">10,00</span>
            </div>
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
              PAGAMENTO ÚNICO
            </p>
          </div>

          {/* Included / Excluded Items */}
          <div className="mt-3 text-left space-y-1.5 text-xs font-medium text-slate-700">
            {basicoIncluded.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <span>{item}</span>
              </div>
            ))}

            {basicoNotIncluded.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-slate-400 line-through">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5 stroke-[2.5]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Orange CTA Button */}
          <div className="mt-4">
            <button
              type="button"
              id="cta-basico"
              onClick={() => setIsUpsellOpen(true)}
              className="w-full bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] text-white font-black text-sm sm:text-base py-3.5 px-3 rounded-xl shadow-md border-b-4 border-amber-800 transition-all duration-150 flex items-center justify-center uppercase tracking-wide cursor-pointer block text-center"
            >
              <span>QUERO O KIT BÁSICO POR R$ 10,00</span>
            </button>
          </div>
        </div>
      </div>

      {/* Upsell Modal to Complete Offer R$ 14,90 */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onProceedBasic={() => handleCheckout(CHECKOUT_BASICO)}
      />
    </section>
  );
};
