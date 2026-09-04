import React from 'react';
import { Star, Sparkles, GraduationCap } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div id="brand-logo" className="flex flex-col items-center justify-center pt-5 pb-2 text-center select-none">
      {/* Icon Badge */}
      <div className="relative mb-1">
        <div className="w-14 h-14 bg-gradient-to-tr from-amber-400 via-orange-500 to-red-500 rounded-2xl shadow-md rotate-3 flex items-center justify-center border-2 border-white">
          <GraduationCap className="w-8 h-8 text-white -rotate-3" />
        </div>
        <span className="absolute -top-1 -right-2 bg-yellow-300 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded-full border border-amber-400 shadow-sm flex items-center gap-0.5">
          <Star className="w-2.5 h-2.5 fill-slate-900 text-slate-900" /> 10
        </span>
      </div>

      {/* Main Title */}
      <div className="flex flex-col items-center">
        <span className="text-[11px] font-extrabold tracking-[0.2em] text-orange-600 uppercase flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-orange-500" /> ATIVIDADES PEDAGÓGICAS
        </span>
        <h1 className="font-kids text-2xl sm:text-3xl font-black text-slate-800 tracking-tight leading-none mt-0.5">
          KIT REFORÇO <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">NOTA 10</span>
        </h1>
      </div>
    </div>
  );
};
