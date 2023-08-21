import React, { ChangeEvent } from 'react';

export interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  onClick?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: any;
  messageError?: string;
}
export interface InputPropsWithMask extends InputProps {
  mask: string;
}
