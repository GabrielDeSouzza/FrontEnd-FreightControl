import React from 'react';
import * as S from './styles';
import { InputPropsWithMask } from 'types/InputProps';
import { Controller } from 'react-hook-form';
import { useIMask } from 'react-imask';
export const InputWithMask: React.FC<InputPropsWithMask> = function ({
  label = 'label',
  placeholder = 'placeholder',
  name = 'name',
  type = 'text',
  mask,
  messageError,
  onChange,
}) {
  const mas = useIMask({ mask: mask });
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}> {label}</S.Label>

      <S.Input
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      ></S.Input>

      <S.SpanError>{messageError}</S.SpanError>
    </S.Wrapper>
  );
};

export default InputWithMask;
