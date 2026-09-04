import React, { useState } from 'react';
import { BookOpen, Sparkles, Star, Award, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  type?: 'hero' | 'module' | 'bonus' | 'guarantee' | 'testimonial';
  title?: string;
  number?: string;
  badge?: string;
  color?: string;
  tagColor?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  className = '',
  type = 'module',
  title,
  number,
  badge,
  tagColor,
}) => {
  const [hasError, setHasError] = useState(false);

  // If error occurs with the external image url, render fallback card
  if (hasError || !src) {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
        <FallbackCard
          type={type}
          title={title || alt}
          number={number}
          badge={badge}
          tagColor={tagColor}
        />
      </div>
    );
  }

  // Real image rendering
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="w-full h-auto max-h-[240px] object-contain rounded-xl shadow-xs transition-transform duration-200 hover:scale-[1.02]"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

interface FallbackCardProps {
  type: 'hero' | 'module' | 'bonus' | 'guarantee' | 'testimonial';
  title: string;
  number?: string;
  badge?: string;
  tagColor?: string;
}

const FallbackCard: React.FC<FallbackCardProps> = ({
  type,
  title,
  number,
  badge,
  tagColor = 'bg-red-600',
}) => {
  if (type === 'hero') {
    return (
      <div className="w-full py-2 flex flex-col items-center justify-center select-none">
        {/* Mockup Stacks Composition */}
        <div className="relative w-full max-w-[330px] h-[260px] flex items-center justify-center">
          {/* Back Left Book (Portuguese) */}
          <div className="absolute -left-1 top-4 w-[150px] h-[210px] bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-xl -rotate-12 border-2 border-white/90 flex flex-col p-2.5 text-white z-0">
            <div className="flex justify-between items-center text-[9px] font-black tracking-wider opacity-90">
              <span className="bg-blue-800 px-1 py-0.5 rounded">PDF</span>
              <span>NOTA 10</span>
            </div>
            <div className="my-auto text-center font-black text-xs leading-tight">
              PORTUGUÊS & ALFABETIZAÇÃO
            </div>
            <div className="bg-white/20 rounded py-0.5 text-center text-[8px] font-bold">
              +500 ATIVIDADES
            </div>
          </div>

          {/* Back Right Book (Math) */}
          <div className="absolute -right-1 top-4 w-[150px] h-[210px] bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl shadow-xl rotate-12 border-2 border-white/90 flex flex-col p-2.5 text-white z-0">
            <div className="flex justify-between items-center text-[9px] font-black tracking-wider opacity-90">
              <span className="bg-emerald-800 px-1 py-0.5 rounded">BNCC</span>
              <span>PRÁTICO</span>
            </div>
            <div className="my-auto text-center font-black text-xs leading-tight">
              MATEMÁTICA & RACIOCÍNIO
            </div>
            <div className="bg-white/20 rounded py-0.5 text-center text-[8px] font-bold">
              +450 ATIVIDADES
            </div>
          </div>

          {/* Front Center Spiral Workbook */}
          <div className="relative z-10 w-[185px] h-[240px] bg-gradient-to-b from-amber-400 via-orange-500 to-red-600 rounded-2xl shadow-2xl border-[3px] border-white flex flex-col p-2.5 text-slate-900 overflow-hidden">
            {/* Spiral binding rings */}
            <div className="absolute left-1 top-2 bottom-2 flex flex-col justify-between py-1 z-20">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-3.5 h-1.5 bg-slate-800 rounded-full border border-slate-300 shadow -ml-2"></div>
              ))}
            </div>

            {/* Inner Cover Surface */}
            <div className="ml-3 flex-1 flex flex-col justify-between bg-white/95 backdrop-blur-xs rounded-xl p-2.5 shadow-sm border border-amber-200 text-center">
              <div className="flex items-center justify-between">
                <span className="bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                  KIT COMPLETO
                </span>
                <span className="text-[9px] font-black text-amber-700 flex items-center gap-0.5">
                  <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" /> NOTA 10
                </span>
              </div>

              <div className="my-auto">
                <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest leading-none">
                  Apostila Digital
                </p>
                <h4 className="font-kids text-lg font-black text-red-600 leading-none mt-1">
                  REFORÇO
                </h4>
                <h4 className="font-kids text-base font-black text-amber-600 leading-none">
                  ESCOLAR
                </h4>
                <div className="w-8 h-0.5 bg-amber-400 mx-auto my-1.5 rounded-full"></div>
                <p className="text-[9px] font-bold text-slate-700 leading-tight">
                  Coleção Completa em PDF para Imprimir
                </p>
              </div>

              <div className="bg-amber-100 rounded-md py-1 border border-amber-300/80">
                <span className="text-[8px] font-black text-amber-900 uppercase tracking-tight block">
                  TODOS OS MÓDULOS + 5 BÔNUS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Tag Below */}
        <div className="mt-2.5 inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-[11px] font-extrabold px-3 py-0.5 rounded-full border border-amber-300 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>Material 100% Digital • Envio Imediato em PDF</span>
        </div>
      </div>
    );
  }

  if (type === 'guarantee') {
    return (
      <div className="w-32 h-32 relative flex items-center justify-center select-none">
        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 p-1 shadow-lg flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-amber-300 p-1.5 border-2 border-dashed border-amber-400 text-center">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-[9px] font-black uppercase tracking-wider text-amber-400 mt-0.5">GARANTIA</span>
            <span className="text-xl font-black text-white leading-none my-0.5">7 DIAS</span>
            <span className="text-[7px] font-bold uppercase tracking-tight text-amber-300">INCONDICIONAL</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'testimonial') {
    return (
      <div className="w-full max-w-[300px] bg-white rounded-2xl shadow-md border-2 border-emerald-300 overflow-hidden select-none">
        {/* WhatsApp Chat Header */}
        <div className="bg-[#075E54] px-3.5 py-2 text-white flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-sm shadow-inner">
            👩‍🏫
          </div>
          <div className="text-left leading-tight">
            <p className="text-xs font-bold text-white">Mãe / Educadora</p>
            <p className="text-[9px] text-emerald-200">Online recentemente</p>
          </div>
        </div>

        {/* WhatsApp Chat Background Body */}
        <div className="p-3 bg-[#EFEAE2] space-y-2.5 text-xs">
          <div className="bg-white p-2.5 rounded-lg rounded-tl-none shadow-sm max-w-[92%] border border-slate-200 text-left">
            <p className="font-semibold text-slate-800 text-[11px] leading-snug">
              "{title}"
            </p>
            <div className="flex items-center gap-1 mt-1 text-[9px] text-slate-400 justify-end">
              <span>15:42</span>
              <CheckCircle2 className="w-3 h-3 text-blue-500" />
            </div>
          </div>

          <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none shadow-sm ml-auto max-w-[85%] border border-emerald-200 text-left">
            <p className="text-slate-800 text-[10px] font-medium leading-tight">
              Ficamos muito felizes em ajudar no aprendizado! ❤️
            </p>
            <div className="flex items-center gap-1 mt-0.5 text-[9px] text-slate-400 justify-end">
              <span>15:44</span>
              <CheckCircle2 className="w-3 h-3 text-blue-500" />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 px-3 py-1 text-center border-t border-slate-200">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">
            Print de Feedback Real
          </span>
        </div>
      </div>
    );
  }

  // Module / Bonus Workbook Mockup
  const iconMap: Record<string, string> = {
    'MÓDULO 01': '📖',
    'MÓDULO 02': '🔤',
    'MÓDULO 03': '🔍',
    'MÓDULO 04': '✍️',
    'MÓDULO 05': '🔢',
    'MÓDULO 06': '✏️',
    'MÓDULO 07': '📚',
    'MÓDULO 08': '📝',
    'MÓDULO 09': '🧩',
    'BÔNUS 01': '🎁',
    'BÔNUS 02': '📐',
    'BÔNUS 03': '🎲',
    'BÔNUS 04': '📑',
    'BÔNUS 05': '🖨️',
  };

  const currentIcon = (number && iconMap[number]) || (badge && iconMap[badge.split(':')[0]]) || '📘';

  return (
    <div className="relative w-full max-w-[200px] h-[190px] flex items-center justify-center my-1 select-none">
      {/* 3D Workbook Card */}
      <div className="relative w-[165px] h-[180px] bg-gradient-to-br from-slate-50 via-white to-amber-50 rounded-xl shadow-md border-2 border-slate-200 flex flex-col p-2 overflow-hidden hover:shadow-lg transition-shadow">
        {/* Spiral Spine on Left */}
        <div className="absolute left-1 top-2 bottom-2 flex flex-col justify-between py-1 z-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-3 h-1.5 bg-slate-800 rounded-full border border-slate-400 shadow -ml-1.5"></div>
          ))}
        </div>

        {/* Cover Face */}
        <div className="ml-2 flex-1 flex flex-col justify-between bg-gradient-to-b from-amber-50/60 to-white rounded-lg p-2 border border-amber-100 text-center">
          <div className="flex justify-between items-center">
            {number ? (
              <span className="bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded tracking-wider shadow-xs">
                {number}
              </span>
            ) : badge ? (
              <span className="bg-purple-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded tracking-wider shadow-xs">
                {badge}
              </span>
            ) : (
              <span className="bg-blue-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded">
                PDF
              </span>
            )}
            <BookOpen className="w-3 h-3 text-amber-600" />
          </div>

          <div className="my-auto px-1">
            <div className="text-2xl leading-none mb-1">
              {currentIcon}
            </div>
            <p className="text-[10px] font-black text-slate-800 leading-tight uppercase line-clamp-2">
              {title}
            </p>
          </div>

          <div className="bg-slate-100 rounded py-0.5 text-center">
            <span className="text-[8px] font-bold text-slate-600 uppercase tracking-tight">
              Pronto para Imprimir
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
