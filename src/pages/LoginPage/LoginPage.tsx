import React, { useState } from 'react';
import * as S from './styles';
import Header from 'components/Header/Header';
import api from 'services/api';
import Input from 'components/InputForm/Input';
import Button from 'components/Button/Button';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  LoginUserFormSchema,
  LoginUserFormType,
} from 'SchemaValidators/userSchemaValidador';
import { zodResolver } from '@hookform/resolvers/zod';
import { SpanError } from 'components/SpanError/SpanError';

const LoginPage = () => {
  const methods = useForm<LoginUserFormType>({
    resolver: zodResolver(LoginUserFormSchema),
  });
  const [error, setError] = useState('');
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginUserFormType> = async (data) => {
    try {
      const result = await api.post('/api/login', data);
      if (result.data) {
        localStorage.setItem('token', result.data);
        router.push('/CenterOperation/CenterOperation');
      }
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        switch (error.code) {
          case AxiosError.ERR_NETWORK:
            setError('Erro no servidor tente novamente');
            break;
          case AxiosError.ERR_BAD_REQUEST:
            setError('Senha ou usuario invalida');
            break;
        }
      } else {
        setError('');
      }
    }
  };

  return (
    <S.Wrapper {...methods}>
      <Header />
      <S.Form method="post" onSubmit={methods.handleSubmit(onSubmit)}>
        <S.InputsArea>
          <Input
            label="Usuario"
            name="username"
            placeholder="Digite o seu usuario"
            type="text"
          ></Input>
          <Input
            label="Senha"
            name="password"
            placeholder="Digite o sua Senha"
            type="text"
          ></Input>
        </S.InputsArea>
        <SpanError message={error} />
        <Button value="Logar-se" typeButton=""></Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default LoginPage;
