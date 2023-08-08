import React, { ChangeEvent } from 'react';
import * as S from './styles';
import { InputProps } from 'types/InputProps';

export const Input: React.FC<InputProps> = function ({
  label = 'label',
  placeholder = 'placeholder',
  name = 'name',
  onChange,
  type = 'text',
}) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}> {label}</S.Label>
      <S.Input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      ></S.Input>
    </S.Wrapper>
  );
};

export default Input;
