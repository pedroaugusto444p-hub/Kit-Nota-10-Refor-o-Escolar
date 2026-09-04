export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  tagColor?: string;
  iconName?: string;
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialSlot {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
}
