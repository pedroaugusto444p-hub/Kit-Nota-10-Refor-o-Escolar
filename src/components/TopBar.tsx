import React from 'react';
import { Zap } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div id="top-bar" className="w-full bg-[#3B3A9A] text-white py-2 px-3 text-center shadow-sm">
      <div className="max-w-xl mx-auto flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold tracking-wide">
        <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300 animate-pulse" />
        <span>OFERTA ESPECIAL • ACESSO IMEDIATO AO MATERIAL</span>
      </div>
    </div>
  );
};
