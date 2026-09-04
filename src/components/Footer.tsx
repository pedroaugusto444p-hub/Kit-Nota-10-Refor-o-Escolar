import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Mail, HelpCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'termos' | 'privacidade' | 'contato' | null>(null);

  const currentYear = new Date().getFullYear();

  return (
    <footer id="rodape" className="w-full bg-[#1E293B] text-slate-300 py-10 px-4 mt-8">
      <div className="max-w-md mx-auto text-center space-y-5">
        {/* Brand */}
        <div>
          <h4 className="font-kids text-lg font-bold text-white tracking-wide">
            KIT REFORÇO NOTA 10
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Material pedagógico digital para apoio e reforço escolar infantil.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300 pt-2 border-t border-slate-700/60">
          <button
            onClick={() => setActiveModal('termos')}
            className="hover:text-amber-400 underline underline-offset-4 cursor-pointer transition-colors"
          >
            Termos de Uso
          </button>
          <span>•</span>
          <button
            onClick={() => setActiveModal('privacidade')}
            className="hover:text-amber-400 underline underline-offset-4 cursor-pointer transition-colors"
          >
            Política de Privacidade
          </button>
          <span>•</span>
          <button
            onClick={() => setActiveModal('contato')}
            className="hover:text-amber-400 underline underline-offset-4 cursor-pointer transition-colors"
          >
            Contato & Suporte
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-slate-400 leading-relaxed max-w-xs mx-auto">
          Aviso Legal: Os resultados podem variar de acordo com o ritmo e dedicação individual de cada criança. Este site não possui afiliação com o Facebook, Meta, Google ou entidades governamentais.
        </p>

        {/* Copyright */}
        <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
          © {currentYear} Kit Reforço Nota 10. Todos os direitos reservados.
        </p>
      </div>

      {/* ================= MODALS ================= */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white text-slate-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto relative">
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Fechar"
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal: Termos de Uso */}
            {activeModal === 'termos' && (
              <div className="text-left space-y-3">
                <div className="flex items-center gap-2 text-slate-900 border-b pb-2">
                  <FileText className="w-5 h-5 text-amber-600" />
                  <h3 className="font-bold text-lg">Termos de Uso</h3>
                </div>
                <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <p>
                    <strong>1. Acesso ao Conteúdo:</strong> Ao adquirir o Kit Reforço Nota 10, o comprador recebe licença de uso pessoal e não exclusiva para download e impressão das atividades pedagógicas contidas no pacote.
                  </p>
                  <p>
                    <strong>2. Direitos Autorais:</strong> É expressamente proibida a revenda, rateio, compartilhamento público, cópia não autorizada ou distribuição comercial dos arquivos sem autorização prévia por escrito.
                  </p>
                  <p>
                    <strong>3. Garantia e Cancelamento:</strong> O comprador tem direito à garantia incondicional de 7 dias a contar da data de confirmação da compra, processada diretamente através da plataforma intermediadora de pagamento.
                  </p>
                </div>
              </div>
            )}

            {/* Modal: Política de Privacidade */}
            {activeModal === 'privacidade' && (
              <div className="text-left space-y-3">
                <div className="flex items-center gap-2 text-slate-900 border-b pb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-lg">Política de Privacidade</h3>
                </div>
                <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <p>
                    <strong>1. Proteção de Dados:</strong> Respeitamos a sua privacidade e cumprimos as diretrizes da LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018).
                  </p>
                  <p>
                    <strong>2. Coleta de Informações:</strong> As informações fornecidas no momento da compra (como nome e e-mail) são utilizadas exclusivamente para o envio do acesso ao produto digital e comunicações essenciais sobre o material.
                  </p>
                  <p>
                    <strong>3. Segurança:</strong> Os pagamentos são processados por gateways seguros com criptografia SSL. Não armazenamos dados de cartão de crédito.
                  </p>
                </div>
              </div>
            )}

            {/* Modal: Contato */}
            {activeModal === 'contato' && (
              <div className="text-left space-y-3">
                <div className="flex items-center gap-2 text-slate-900 border-b pb-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-lg">Contato & Suporte</h3>
                </div>
                <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <p>
                    Precisa de ajuda com o seu acesso, dúvidas sobre o material ou suporte pedagógico?
                  </p>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 mt-2 space-y-1">
                    <p className="font-semibold text-slate-800">
                      📧 E-mail de Atendimento:
                    </p>
                    <p className="text-amber-700 font-bold">
                      suporte@kitreforconota10.com
                    </p>
                    <p className="text-[11px] text-slate-500 pt-1">
                      Horário de resposta: Segunda a Sexta, das 09h às 18h.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
