import { useCallback } from 'react';

interface UseInputProps {
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export const useInput = ({ onChange, onBlur, onFocus }: UseInputProps) => {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  }, [onChange]);

  const handleBlur = useCallback(() => {
    onBlur?.();
  }, [onBlur]);

  const handleFocus = useCallback(() => {
    onFocus?.();
  }, [onFocus]);

  return {
    handleChange,
    handleBlur,
    handleFocus,
  };
};
