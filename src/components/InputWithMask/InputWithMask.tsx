import React, { useEffect } from 'react';
import * as S from './styles';
import { InputPropsWithMask } from 'types/InputProps';
import { Controller, useFormContext } from 'react-hook-form';
export const InputWithMask: React.FC<InputPropsWithMask> = function ({
  label = 'label',
  name = 'name',
  type = 'text',
  mask,
}) {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const x = watch(name);
  useEffect(() => {}, [mask]);
  console.log('sad');
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}> {label}</S.Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <S.Input
            {...field}
            mask={mask}
            unmask={true}
            value={field.value}
            type={type}
            {...register(name)}
          />
        )}
      />

      <S.SpanError>{errors[name]?.message} </S.SpanError>
    </S.Wrapper>
  );
};

export default InputWithMask;
