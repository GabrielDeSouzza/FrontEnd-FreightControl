import React, { useEffect } from 'react';
import * as S from './styles';
import { InputPropsWithMask } from 'types/InputProps';
import { Controller, useFormContext } from 'react-hook-form';
import { IMask } from 'react-imask';
export const InputWithMask: React.FC<InputPropsWithMask> = function ({
  label = 'label',
  name = 'name',
  type = 'text',
  mask,
}) {
  const {
    control,
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  React.useEffect(() => {
    const inputElement = document.querySelector(`input[name="${name}"]`);
    if (inputElement instanceof HTMLInputElement) {
      const maskInstance = IMask(inputElement, mask);

      const updateValue = () => {
        console.log(maskInstance);
        setValue(name, maskInstance.unmaskedValue);
      };

      maskInstance.on('accept', updateValue);

      return () => {
        maskInstance.off('accept', updateValue);
        maskInstance.destroy();
      };
    }
  }, [name, mask, setValue]);
  console.log('MErda');
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

      <S.SpanError>{errors[name]?.message?.toString()} </S.SpanError>
    </S.Wrapper>
  );
};

export default InputWithMask;
