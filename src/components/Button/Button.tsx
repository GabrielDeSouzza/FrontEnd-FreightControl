import { useState } from 'react';
import * as S from './styles';
import { boolean } from 'zod';

const Button = function ({
  value = "value",
  typeButton ="button"
}) {
  return (
    <S.Buttom type={typeButton} >{value}</S.Buttom>
  )
}

export default Button;
