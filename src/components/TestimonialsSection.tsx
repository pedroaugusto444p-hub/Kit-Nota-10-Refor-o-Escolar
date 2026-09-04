import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { DEPOIMENTOS } from '../data';
import { ImagePlaceholder } from './ImagePlaceholder';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? DEPOIMENTOS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === DEPOIMENTOS.length - 1 ? 0 : prev + 1));
  };

  const current = DEPOIMENTOS[currentIndex];

  return (
    <section id="depoimentos" className="w-full px-3 sm:px-4 py-6">
      <div className="max-w-md mx-auto text-center">
        {/* Section Header */}
        <div className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-sm tracking-wider mb-2">
          PROVA SOCIAL
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-red-600 uppercase tracking-tight mb-4">
          DEPOIMENTOS
        </h3>

        {/* Carousel / Card with Navigation Arrows */}
        <div className="relative flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={prevTestimonial}
            aria-label="Depoimento anterior"
            className="absolute -left-2 sm:-left-4 z-20 w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-md transition-transform active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Image Frame (Clean, without white background/border) */}
          <div className="w-full flex flex-col items-center justify-center">
            <img
              src={current.imageSrc}
              alt={current.title}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[420px] object-contain drop-shadow-sm transition-all duration-300"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            aria-label="Próximo depoimento"
            className="absolute -right-2 sm:-right-4 z-20 w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-md transition-transform active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {DEPOIMENTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para depoimento ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-6 bg-red-600' : 'w-2.5 bg-slate-300'
              }`}
            />
          ))}
        </div>

        <p className="mt-3 text-[11px] font-bold text-slate-500 uppercase tracking-wide">
          Espaço reservado para inserção de prints e relatos reais de clientes
        </p>
      </div>
    </section>
  );
};
