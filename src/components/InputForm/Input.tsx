import React from 'react';
import * as S from './styles';
import { InputProps } from 'types/InputProps';
import { Controller, useFormContext } from 'react-hook-form';
import { SpanError } from 'components/SpanError/SpanError';

export const InputForm: React.FC<InputProps> = function ({
  label = 'label',
  placeholder = 'placeholder',
  name = 'name',
  type = 'text',
  onClick,
  onKeyDown,
  value,
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}> {label}</S.Label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <S.Input
            {...field}
            type={type}
            placeholder={placeholder}
            onClick={onClick}
            onKeyDown={onKeyDown}
            value={value}
          ></S.Input>
        )}
      />

      <SpanError message={errors[name]?.message?.toString()} />
    </S.Wrapper>
  );
};

export default InputForm;
