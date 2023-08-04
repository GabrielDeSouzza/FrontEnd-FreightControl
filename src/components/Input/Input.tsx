import React, { ChangeEvent } from 'react';
import * as S from './styles';
import { InputProps } from 'types/inputProps';


const Input: React.FC<InputProps>  = function ({
  label = "label",
  placeholder = "placeholder",
  name = "name",
  onChange,
  type =  'text',
  messageError = null
}) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}> {label}</S.Label>
      <S.Input type={type} onChange={onChange} placeholder={placeholder} ></S.Input>
      <span> {messageError? messageError : ''}</span>
    </S.Wrapper>
  );
};

export default Input;
