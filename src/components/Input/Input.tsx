import React, { ChangeEvent } from 'react';
import * as S from './styles';
import { InputProps } from 'types/InputProps';
import { Controller } from 'react-hook-form';

export const Input: React.FC<InputProps> = function ({
  label = 'label',
  placeholder = 'placeholder',
  name = 'name',
  type = 'text',
  onClick,
  onKeyDown,
  messageError,
  onChange,
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
        onChange={onChange}
        value={value}
      ></S.Input>
      <S.SpanError>{messageError}</S.SpanError>
    </S.Wrapper>
  );
};

export default Input;
