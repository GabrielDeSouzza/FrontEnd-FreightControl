import React from 'react';
import * as S from './styles';
import { InputProps } from 'types/InputProps';

export const Input: React.FC<InputProps> = function ({
  label = 'label',
  placeholder = 'placeholder',
  name = 'name',
  type = 'text',
  onClick,
  onKeyDown,
  value,
}) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}> {label}</S.Label>
      <S.Input
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        onKeyDown={onKeyDown}
        value={value}
      />
    </S.Wrapper>
  );
};

export default Input;
