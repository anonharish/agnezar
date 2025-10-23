import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useInput } from './Input.hook';
import { StyledInput } from './Input.style';

export interface InputProps extends Omit<TextFieldProps, 'onChange'> {
  label?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  error = false,
  helperText,
  required = false,
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
  const { handleChange, handleBlur, handleFocus } = useInput({
    onChange,
    onBlur,
    onFocus,
  });

  return (
    <StyledInput
      label={label}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      required={required}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      {...props}
    />
  );
};
