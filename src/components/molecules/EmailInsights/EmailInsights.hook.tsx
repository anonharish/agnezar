import { useTheme } from '@mui/material/styles';

export interface EmailInsightsData {
  heading?: string;
  description?: string;
  label?: string;
  placeholder?: string;
  buttonLabel?: string;
  onSubmit?: (value: string) => void;
}

export const useEmailInsights = (overrides?: EmailInsightsData) => {
  const theme = useTheme();

  const defaults: EmailInsightsData = {
    heading: 'Get new insights by email',
    description:
      'Subscribe to receive the latest research, regulatory updates, and analytical insights',
    label: 'Email',
    placeholder: 'Enter Your Email',
    buttonLabel: 'Subscribe',
    onSubmit: (v: string) => {
      console.log('subscribe:', v);
    },
  };

  return { ...defaults, ...overrides, theme };
};

export default useEmailInsights;
