import { ModuleItem, BonusItem, FaqItem, TestimonialSlot } from './types';

// =========================================================================
// CONFIGURAÇÃO DOS LINKS DE CHECKOUT E IMAGENS
// Altere as URLs abaixo com os seus links de checkout da Kiwify, Hotmart, Eduzz, etc.
// =========================================================================
export const CHECKOUT_COMPLETO = "https://pay.wiapy.com/OdOyOUtSFlTL";
export const CHECKOUT_OFERTA_14_90 = "https://pay.wiapy.com/sm8D3NviuQxs";
export const CHECKOUT_BASICO = "https://pay.wiapy.com/D-ipQKapUo2I";
export const MOCKUP_PRINCIPAL_IMG = "https://i.ibb.co/Q7bGQfYv/Chat-GPT-Image-30-de-ago-de-2026-08-56-23.png";

// Lista de habilidades do bloco de benefícios
export const HABILIDADES = [
  "Leitura",
  "Escrita",
  "Formação de palavras",
  "Sílabas",
  "Interpretação",
  "Produção de frases",
  "Português",
  "Matemática",
  "Caligrafia",
  "Coordenação motora",
  "Ortografia",
  "Raciocínio lógico",
];

// Lista completa de módulos
export const MODULOS: ModuleItem[] = [
  {
    id: "modulo-01",
    number: "MÓDULO 01",
    title: "LEITURA E FORMAÇÃO DE PALAVRAS",
    description: "Atividades para ajudar a criança a reconhecer letras, sílabas, palavras e desenvolver progressivamente a leitura.",
    imageSrc: "https://i.ibb.co/QFPGZ162/Chat-GPT-Image-30-de-ago-de-2026-09-01-19-1.png",
    tagColor: "bg-amber-500",
  },
  {
    id: "modulo-02",
    number: "MÓDULO 02",
    title: "SÍLABAS SIMPLES E COMPLEXAS",
    description: "Exercícios para praticar formação de palavras, separação silábica e diferentes combinações de sílabas.",
    imageSrc: "https://i.ibb.co/5WQwgcyw/Chat-GPT-Image-30-de-ago-de-2026-09-01-21-9.png",
    tagColor: "bg-orange-500",
  },
  {
    id: "modulo-03",
    number: "MÓDULO 03",
    title: "INTERPRETAÇÃO DE TEXTOS",
    description: "Textos curtos acompanhados de atividades para desenvolver compreensão, atenção e interpretação.",
    imageSrc: "https://i.ibb.co/DPKcrZkN/Chat-GPT-Image-30-de-ago-de-2026-09-01-20-6.png",
    tagColor: "bg-red-500",
  },
  {
    id: "modulo-04",
    number: "MÓDULO 04",
    title: "PRODUÇÃO DE FRASES E TEXTOS",
    description: "Atividades para organizar ideias, completar frases e desenvolver gradativamente a escrita.",
    imageSrc: "https://i.ibb.co/GvmTJ77p/Chat-GPT-Image-30-de-ago-de-2026-09-01-20-2.png",
    tagColor: "bg-rose-500",
  },
  {
    id: "modulo-05",
    number: "MÓDULO 05",
    title: "MATEMÁTICA",
    description: "Atividades de números, sequência numérica, adição, subtração, multiplicação e raciocínio matemático.",
    imageSrc: "https://i.ibb.co/Ng0rDDqg/Chat-GPT-Image-30-de-ago-de-2026-09-01-20-7.png",
    tagColor: "bg-blue-600",
  },
  {
    id: "modulo-06",
    number: "MÓDULO 06",
    title: "CALIGRAFIA E COORDENAÇÃO MOTORA",
    description: "Atividades de traçado e escrita para estimular coordenação motora fina e formação das letras.",
    imageSrc: "https://i.ibb.co/W8kX52h/Chat-GPT-Image-30-de-ago-de-2026-09-01-20-4.png",
    tagColor: "bg-emerald-600",
  },
  {
    id: "modulo-07",
    number: "MÓDULO 07",
    title: "PORTUGUÊS",
    description: "Exercícios para reforçar conteúdos importantes da Língua Portuguesa.",
    imageSrc: "https://i.ibb.co/bRzT0L3x/Chat-GPT-Image-30-de-ago-de-2026-09-01-20-5.png",
    tagColor: "bg-indigo-600",
  },
  {
    id: "modulo-08",
    number: "MÓDULO 08",
    title: "ORTOGRAFIA",
    description: "Atividades para praticar dificuldades comuns da escrita e reconhecer padrões da Língua Portuguesa.",
    imageSrc: "https://i.ibb.co/vvkK5vKG/Chat-GPT-Image-30-de-ago-de-2026-09-01-20-3.png",
    tagColor: "bg-teal-600",
  },
  {
    id: "modulo-09",
    number: "MÓDULO 09",
    title: "RACIOCÍNIO LÓGICO",
    description: "Atividades para estimular atenção, percepção, associação, sequência e resolução de desafios.",
    imageSrc: "https://i.ibb.co/84QGRqGz/Chat-GPT-Image-30-de-ago-de-2026-09-01-21-8.png",
    tagColor: "bg-purple-600",
  },
];

// Lista de bônus exclusivos
export const BONUS: BonusItem[] = [
  {
    id: "bonus-01",
    number: "BÔNUS 01",
    title: "APOSTILA EXTRA DE PORTUGUÊS",
    description: "Mais atividades para reforçar leitura, escrita, gramática e ortografia.",
    imageSrc: "https://i.ibb.co/FL7pyPg6/bonus-01.png",
    badge: "BÔNUS 1: APOSTILA DE PORTUGUÊS",
  },
  {
    id: "bonus-02",
    number: "BÔNUS 02",
    title: "APOSTILA EXTRA DE MATEMÁTICA",
    description: "Atividades adicionais para praticar números, operações e raciocínio matemático.",
    imageSrc: "https://i.ibb.co/mV17PpSq/bons-02.png",
    badge: "BÔNUS 2: APOSTILA DE MATEMÁTICA",
  },
  {
    id: "bonus-03",
    number: "BÔNUS 03",
    title: "JOGOS EDUCATIVOS",
    description: "Atividades lúdicas para complementar o aprendizado de uma forma mais divertida.",
    imageSrc: "https://i.ibb.co/tTyTkxLX/bonus-03.png",
    badge: "BÔNUS 3: JOGOS DIDÁTICOS",
  },
  {
    id: "bonus-04",
    number: "BÔNUS 04",
    title: "LEITURA, FRASES E TEXTOS",
    description: "Mais atividades voltadas para leitura, compreensão e construção de frases.",
    imageSrc: "https://i.ibb.co/YFZz5dKf/bonus-04.png",
    badge: "BÔNUS 4: FRASES E TEXTOS",
  },
  {
    id: "bonus-05",
    number: "BÔNUS 05",
    title: "ATIVIDADES EXTRAS PARA IMPRIMIR",
    description: "Uma seleção adicional de atividades para utilizar sempre que precisar.",
    imageSrc: "https://i.ibb.co/Q7Yf8fMt/bonus-05.png",
    badge: "BÔNUS 5: ATIVIDADES EXTRAS",
  },
];

// Perguntas frequentes (FAQ)
export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "1. COMO VOU RECEBER O KIT?",
    answer: "O produto é 100% digital. Após a confirmação do pagamento, você recebe as instruções para acessar o material.",
  },
  {
    id: "faq-2",
    question: "2. VOU RECEBER ALGUM PRODUTO PELO CORREIO?",
    answer: "Não. O Kit Reforço Nota 10 é um produto digital em formato PDF.",
  },
  {
    id: "faq-3",
    question: "3. PRECISO IMPRIMIR TODO O KIT?",
    answer: "Não. Você pode imprimir somente as atividades que deseja utilizar.",
  },
  {
    id: "faq-4",
    question: "4. PARA QUAL IDADE O MATERIAL É INDICADO?",
    answer: "O material foi pensado principalmente para crianças nos primeiros anos escolares. As atividades devem ser escolhidas de acordo com o nível de aprendizagem da criança.",
  },
  {
    id: "faq-5",
    question: "5. PRECISO SER PROFESSOR PARA UTILIZAR?",
    answer: "Não. O material pode ser utilizado por pais, responsáveis, professores e profissionais da educação.",
  },
  {
    id: "faq-6",
    question: "6. SERVE PARA CRIANÇAS COM DIFICULDADES NA ESCOLA?",
    answer: "As atividades podem ser utilizadas como material complementar de prática e reforço escolar. Elas não substituem avaliação ou acompanhamento profissional quando necessário.",
  },
  {
    id: "faq-7",
    question: "7. QUAL A DIFERENÇA ENTRE O BÁSICO E O COMPLETO?",
    answer: "O Básico de R$10,00 possui uma seleção reduzida de atividades. O Completo de R$29,90 libera a coleção completa, módulos adicionais e bônus.",
  },
  {
    id: "faq-8",
    question: "8. O PAGAMENTO É MENSAL?",
    answer: "Não. O pagamento é único.",
  },
  {
    id: "faq-9",
    question: "9. QUANDO RECEBO O ACESSO?",
    answer: "Após a confirmação do pagamento.",
  },
];

// Slots de depoimentos reais
export const DEPOIMENTOS: TestimonialSlot[] = [
  {
    id: "depoimento-1",
    title: "Depoimento Real 01",
    subtitle: "Avaliação de mãe/professora",
    imageSrc: "https://i.ibb.co/Lw98NBf/Chat-GPT-Image-30-de-ago-de-2026-10-11-38.png",
  },
  {
    id: "depoimento-2",
    title: "Depoimento Real 02",
    subtitle: "Avaliação de mãe/professora",
    imageSrc: "https://i.ibb.co/YFKdtwLX/Chat-GPT-Image-30-de-ago-de-2026-10-11-24.png",
  },
  {
    id: "depoimento-3",
    title: "Depoimento Real 03",
    subtitle: "Avaliação de mãe/professora",
    imageSrc: "https://i.ibb.co/KxHWk6fw/Chat-GPT-Image-30-de-ago-de-2026-10-13-17.png",
  },
  {
    id: "depoimento-4",
    title: "Depoimento Real 04",
    subtitle: "Avaliação de mãe/professora",
    imageSrc: "https://i.ibb.co/7xPZCjVX/Chat-GPT-Image-30-de-ago-de-2026-10-14-49.png",
  },
];
