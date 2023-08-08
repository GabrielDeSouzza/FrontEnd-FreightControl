import { ChangeEvent } from 'react';

export interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}
