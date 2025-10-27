import React, { useState } from 'react';
import { CustomFilledButton } from '@components/atoms';
import { StyledEmailInsights, Inner, FormRow, InputWrap, Heading, Description, StyledInput } from './EmailInsights.style';
import { useEmailInsights } from './EmailInsights.hook';

export interface EmailInsightsProps {
  heading?: string;
  description?: string;
  label?: string;
  placeholder?: string;
  buttonLabel?: string;
  onSubmit?: (value: string) => void;
}

export const EmailInsights: React.FC<EmailInsightsProps> = (props) => {
  const { heading, description, label, placeholder, buttonLabel, onSubmit } = useEmailInsights(props);
  const [value, setValue] = useState('');

  return (
    <StyledEmailInsights>
      <Inner>
        <Heading variant="h4">{heading}</Heading>
        <Description>{description}</Description>

        <FormRow>
          <InputWrap>
            <StyledInput
              label={label}
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              fullWidth
            />
          </InputWrap>

          <CustomFilledButton onClick={() => onSubmit && onSubmit(value)}>
            {buttonLabel}
          </CustomFilledButton>
        </FormRow>
      </Inner>
    </StyledEmailInsights>
  );
};

export default EmailInsights;
