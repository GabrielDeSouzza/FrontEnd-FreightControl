import { InputProps } from './InputProps';

export interface IComboBox extends Omit<InputProps, 'type'> {
  data: Array<string>;
}
