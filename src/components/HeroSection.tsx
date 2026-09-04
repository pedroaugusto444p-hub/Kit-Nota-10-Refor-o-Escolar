import React from 'react';
import { ArrowDown, ShieldCheck, Printer, Zap, Sparkles } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { MOCKUP_PRINCIPAL_IMG } from '../data';

interface HeroSectionProps {
  onScrollToOffers: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffers }) => {
  return (
    <section id="hero" className="w-full text-center px-2 sm:px-4 pt-2 pb-6">
      <div className="max-w-md mx-auto">
        {/* Subhead Question */}
        <h2 className="text-slate-900 text-lg sm:text-xl font-extrabold leading-snug tracking-tight">
          Seu filho está com{' '}
          <span className="inline bg-red-600 text-white font-black px-1.5 py-0.5 rounded shadow-xs">
            DIFICULDADE PARA ACOMPANHAR AS ATIVIDADES DA ESCOLA
          </span>
          ... e você não sabe por onde começar para ajudá-lo?
        </h2>

        <p className="mt-2.5 text-slate-700 text-sm font-medium leading-relaxed">
          Ele demora para realizar as tarefas, apresenta dificuldade para ler, escrever, interpretar textos ou resolver continhas?
        </p>

        {/* Orange Alert Banner */}
        <div className="mt-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white rounded-xl p-3 shadow-md border border-orange-400">
          <p className="font-black text-xs sm:text-sm uppercase tracking-wide leading-tight">
            EXISTE UMA FORMA SIMPLES, PRÁTICA E ORGANIZADA DE REFORÇAR O APRENDIZADO
          </p>
          <p className="text-[11px] text-amber-100 font-bold mt-0.5">
            mesmo para quem não é professor!
          </p>
        </div>

        {/* Main 3D Workbook Hero Mockup */}
        <div className="mt-4 flex justify-center">
          <ImagePlaceholder
            src={MOCKUP_PRINCIPAL_IMG}
            alt="Kit Reforço Nota 10 - Mockup Principal de Apostilas"
            type="hero"
            title="Kit Reforço Nota 10"
            className="w-full max-w-[360px] min-h-[260px] rounded-2xl overflow-hidden shadow-sm"
          />
        </div>

        {/* Product Details Presentation Card */}
        <div className="mt-3 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-200/80">
          <h3 className="font-kids text-2xl font-black text-red-600 tracking-tight leading-none">
            KIT REFORÇO NOTA 10
          </h3>
          <p className="text-slate-700 text-xs sm:text-sm font-semibold mt-1.5 leading-snug">
            Uma coleção completa de atividades para reforçar o aprendizado da criança em casa ou em sala de aula.
          </p>

          {/* Key Topics Tag Pill */}
          <div className="mt-3 bg-amber-50/90 rounded-xl p-2.5 border border-amber-200/80">
            <p className="text-xs font-black text-amber-900 leading-relaxed">
              Leitura • Escrita • Português • Matemática • Interpretação • Sílabas • Caligrafia • Raciocínio e muito mais.
            </p>
          </div>

          <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Tudo pronto para você imprimir e aplicar sem precisar perder horas procurando atividades diferentes na internet.
          </p>

          {/* Price Box */}
          <div className="mt-4 pt-3 border-t border-dashed border-slate-200">
            <p className="text-xs font-bold text-slate-400 line-through">
              De: R$ 57,00
            </p>
            <p className="text-xs font-black text-slate-700 uppercase tracking-wide mt-0.5">
              POR APENAS:
            </p>
            <div className="flex items-baseline justify-center gap-1 my-0.5">
              <span className="text-lg font-black text-red-600">R$</span>
              <span className="text-5xl sm:text-6xl font-black text-red-600 tracking-tight leading-none">
                10,00
              </span>
            </div>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-black px-2.5 py-0.5 rounded-full border border-emerald-200">
              Pagamento único • Acesso imediato em PDF
            </span>
          </div>

          {/* Main CTA Button */}
          <div className="mt-4">
            <button
              id="cta-hero"
              onClick={onScrollToOffers}
              className="w-full bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-black text-base sm:text-lg py-4 px-3 rounded-2xl shadow-xl border-b-4 border-emerald-800 transition-all duration-150 flex flex-col items-center justify-center uppercase tracking-wide animate-pulse-cta cursor-pointer"
            >
              <div className="flex items-center justify-center gap-2">
                <span>GARANTIR MEU KIT AGORA!</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>
              <span className="text-[10px] font-bold text-emerald-100 lowercase normal-case tracking-normal">
                clique aqui para ver todas as opções disponíveis
              </span>
            </button>
          </div>

          {/* Micro badges below CTA */}
          <div className="mt-3 flex items-center justify-center gap-3 text-[11px] font-bold text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Compra Segura
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Printer className="w-3.5 h-3.5 text-blue-600" /> Pronto p/ Imprimir
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> Envio Imediato
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
