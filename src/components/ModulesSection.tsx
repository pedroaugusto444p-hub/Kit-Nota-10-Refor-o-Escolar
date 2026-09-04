import React from 'react';
import { MODULOS } from '../data';
import { ImagePlaceholder } from './ImagePlaceholder';

export const ModulesSection: React.FC = () => {
  return (
    <section id="conteudo-completo" className="w-full px-3 sm:px-4 py-6">
      <div className="max-w-md mx-auto text-center">
        {/* Header Ribbon / Pill */}
        <div className="mb-6">
          <div className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-xs sm:text-sm uppercase px-5 py-2 rounded-full shadow-md tracking-wider">
            CONTEÚDO COMPLETO
          </div>
          <p className="text-slate-600 text-xs font-semibold mt-2">
            Conheça todos os módulos desenvolvidos para o reforço escolar do seu filho
          </p>
        </div>

        {/* Individual Module Cards */}
        <div className="space-y-4">
          {MODULOS.map((modulo) => (
            <div
              key={modulo.id}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md border border-amber-100/90 text-center flex flex-col items-center transition-all duration-200"
            >
              {/* Module Book Mockup */}
              <div className="w-full flex justify-center mb-3">
                <ImagePlaceholder
                  src={modulo.imageSrc}
                  alt={`${modulo.number} - ${modulo.title}`}
                  type="module"
                  title={modulo.title}
                  number={modulo.number}
                  className="w-full max-w-[260px]"
                />
              </div>

              {/* Module Name and Header */}
              <span className="text-[11px] font-black text-red-600 uppercase tracking-widest">
                {modulo.number}
              </span>
              <h4 className="text-sm sm:text-base font-black text-slate-800 uppercase mt-0.5 leading-snug">
                {modulo.title}
              </h4>

              {/* Module Description */}
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                "{modulo.description}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
