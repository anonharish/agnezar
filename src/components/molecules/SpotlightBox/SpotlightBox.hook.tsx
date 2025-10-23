import { useMemo } from 'react';

export interface SpotlightBoxConfig {
  heading?: string;
  title?: string;
  description?: string;
  button?: {
    label: string;
    onClick?: () => void;
  };
}

export const useSpotlightBox = (config: SpotlightBoxConfig = {}) => {
  const merged = useMemo(() => ({
    heading: config.heading ?? 'Spotlight Box',
    title: config.title ?? 'Urgent Need? Nitrosamine Impurity Solutions',
    description: config.description ?? '',
    button: config.button ?? undefined,
  }), [config]);

  return merged;
};
