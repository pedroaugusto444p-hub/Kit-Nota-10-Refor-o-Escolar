import React from 'react';
import { Gift, Sparkles } from 'lucide-react';
import { BONUS } from '../data';
import { ImagePlaceholder } from './ImagePlaceholder';

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="w-full px-3 sm:px-4 py-6">
      <div className="max-w-md mx-auto text-center">
        {/* Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xs sm:text-sm uppercase px-5 py-2 rounded-full shadow-md tracking-wider">
            <Gift className="w-4 h-4 text-yellow-300" />
            <span>BÔNUS EXCLUSIVOS</span>
          </div>
          <h3 className="text-slate-800 text-base sm:text-lg font-black mt-3 leading-snug">
            Adquirindo o Kit Reforço Nota 10 Completo HOJE, você também terá acesso a materiais extras:
          </h3>
        </div>

        {/* Bonus Cards List */}
        <div className="space-y-4">
          {BONUS.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md border border-purple-100 text-center flex flex-col items-center transition-all duration-200"
            >
              {/* Bonus Mockup */}
              <div className="w-full flex justify-center mb-3">
                <ImagePlaceholder
                  src={bonus.imageSrc}
                  alt={`${bonus.number} - ${bonus.title}`}
                  type="bonus"
                  title={bonus.title}
                  badge={bonus.badge || bonus.number}
                  className="w-full max-w-[260px]"
                />
              </div>

              {/* Bonus Tag */}
              <span className="bg-purple-100 text-purple-800 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1">
                {bonus.badge || bonus.number}
              </span>

              <h4 className="text-sm sm:text-base font-black text-slate-800 uppercase leading-snug">
                {bonus.title}
              </h4>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
