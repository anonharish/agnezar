import { useMemo } from 'react';

export interface UnParalleledConfig {
  smallText?: string;
  mainHeading?: string;
  description?: string;
  button?: {
    label: string;
    onClick?: () => void;
  };
}

export const useUnParalleled = (config: UnParalleledConfig = {}) => {
  const merged = useMemo(() => ({
    smallText: config.smallText ?? 'Engineered for transparency',
    mainHeading: config.mainHeading ?? 'An Unparalleled Client Experience, Engineered for Your Success',
    description: config.description ?? 'In today\'s competitive landscape, access to data is not enough. You need a partner who has engineered a smarter, faster, and more transparent way for you to get the critical information you need to make decisions. We have moved beyond the traditional CRO model to provide a service experience built on visibility and control.',
    button: config.button ?? undefined,
  }), [config]);

  return merged;
};
