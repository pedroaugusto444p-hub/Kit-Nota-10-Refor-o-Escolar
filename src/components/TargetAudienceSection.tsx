import React from 'react';
import { Users, BookOpenCheck, HeartHandshake } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section id="para-quem-e" className="w-full px-3 sm:px-4 py-6">
      <div className="max-w-md mx-auto text-center">
        {/* Title */}
        <div className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-sm tracking-wider mb-4">
          PÚBLICO ALVO
        </div>
        <h3 className="text-slate-800 text-base sm:text-lg font-black leading-snug mb-5">
          PARA QUEM É O KIT REFORÇO NOTA 10?
        </h3>

        {/* 3 Blocks */}
        <div className="space-y-3">
          {/* Block 1 */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-100/90 text-left flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-800 uppercase">
                PAIS E RESPONSÁVEIS
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Para quem deseja complementar os estudos da criança em casa e ter atividades prontas sempre que precisar.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-100/90 text-left flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpenCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-800 uppercase">
                PROFESSORES
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Para profissionais que precisam de novas atividades para sala de aula, reforço ou tarefas complementares.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-100/90 text-left flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-800 uppercase">
                PROFISSIONAIS DA EDUCAÇÃO
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Para quem utiliza atividades impressas em acompanhamento e reforço pedagógico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
