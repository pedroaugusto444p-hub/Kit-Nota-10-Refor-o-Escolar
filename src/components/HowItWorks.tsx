import React from 'react';
import { MailCheck, Printer, HeartHandshake, Clock, Download } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="w-full px-3 sm:px-4 py-6">
      <div className="max-w-md mx-auto text-center">
        {/* Section Pill Badge */}
        <div className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-sm tracking-wider mb-5">
          COMO FUNCIONA?
        </div>

        {/* 3 Vertical Cards */}
        <div className="space-y-3.5">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-100 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3 shadow-inner">
              <MailCheck className="w-6 h-6 text-amber-600" />
            </div>
            <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">PASSO 01</span>
            <h4 className="text-sm sm:text-base font-black text-slate-800 uppercase mt-0.5">
              VOCÊ RECEBE O MATERIAL
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              O Kit Reforço Nota 10 é 100% digital. Após a confirmação da compra, você recebe as instruções para acessar as atividades em formato PDF.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-100 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3 shadow-inner">
              <Printer className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">PASSO 02</span>
            <h4 className="text-sm sm:text-base font-black text-slate-800 uppercase mt-0.5">
              VOCÊ ESCOLHE E IMPRIME
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Não precisa imprimir tudo de uma vez. Escolha as atividades que deseja utilizar e imprima somente o necessário.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-100 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 shadow-inner">
              <HeartHandshake className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">PASSO 03</span>
            <h4 className="text-sm sm:text-base font-black text-slate-800 uppercase mt-0.5">
              REALIZE AS ATIVIDADES COM A CRIANÇA
            </h4>
            
            {/* Highlight Box */}
            <div className="my-2 inline-flex items-center gap-1.5 bg-red-50 text-red-700 font-extrabold text-xs px-3 py-1 rounded-full border border-red-200">
              <Clock className="w-3.5 h-3.5 text-red-600" />
              <span>De 15 a 30 minutos por dia</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Escolha uma habilidade, aplique as atividades e avance de acordo com o desenvolvimento da criança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
