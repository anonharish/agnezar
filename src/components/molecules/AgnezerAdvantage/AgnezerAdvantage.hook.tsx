import { useMemo } from 'react';

export interface AdvantageCard {
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

export interface AgnezerAdvantageConfig {
  smallText?: string;
  title?: string;
  description?: string;
  cards?: AdvantageCard[];
}

export const useAgnezerAdvantage = (config: AgnezerAdvantageConfig = {}) => {
  const merged = useMemo(() => ({
    smallText: config.smallText ?? 'Excellence. Innovation. Partnership.',
    title: config.title ?? 'The Agnezar Advantage',
    description: config.description ?? 'Four pillars driving quality and trust in every project.',
    cards: config.cards ?? [
      {
        icon: '↔️',
        title: 'Regulatory Excellence',
        description: 'Ensure seamless global submissions. Our facilities adhere to cGMP, GLP, and ISO 17025 standards, are FDA-registered, and follow EMA guidelines—guaranteeing data integrity and acceptance.',
      },
      {
        icon: '💡',
        title: 'Innovation–Driven Science',
        description: 'Supercharge your outcomes with AI analytics, robotic automation, and predictive modeling—providing unparalleled precision, speed, and reliability for top-tier analysis.',
      },
      {
        icon: '🧩',
        title: 'One–Stop Solutions',
        description: 'Streamline your development with a unified partner. From testing to regulatory support and formulation, we integrate everything—assuring consistency and eliminating transitions.',
      },
      {
        icon: '🤝',
        title: 'Client–First Partnership',
        description: 'Experience true transparency. Benefit from dedicated managers and 24/7 data access via secure dashboards—keeping you informed and in command at all times.',
      },
    ],
  }), [config]);

  return merged;
};
