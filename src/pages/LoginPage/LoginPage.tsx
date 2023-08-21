import React, { useState } from 'react';
import * as S from './styles';
import Header from 'components/Header/Header';
import { z } from 'zod';
import api from 'services/api';
import Input from 'components/Input/Input';
import { ErrorValidation } from 'types/IErrorValidation';
import Button from 'components/Button/Button';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

const loginUserFormSchema = z.object({
  username: z.string().nonempty('Campo usuário é obrigatório'),
  password: z.string().nonempty('Campo senha é obrigatório'),
});

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorValidation, setErrorValidation] = useState<ErrorValidation[]>([]);
  const [validateUSer, setValidationUser] = useState<string>('');
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = loginUserFormSchema.parse({ username, password });
      const result = await api.post('/api/login', data);
      if (result.data) {
        localStorage.setItem('token', result.data);
        router.push('/CenterOperation/CenterOperation');
      }
      setErrorValidation([]);
      setValidationUser('');
    } catch (error) {
      console.error(error);
      if (error instanceof z.ZodError) {
        console.log(error);
        const erros: ErrorValidation[] = error.issues.map((issue) => ({
          message: issue.message,
          path: issue.path.toString(),
        }));
        setErrorValidation(erros);
        return;
      } else if (error instanceof AxiosError) {
        switch (error.code) {
          case AxiosError.ERR_NETWORK:
            setValidationUser('Erro no servidor tente novamente');
            break;
          case AxiosError.ERR_BAD_REQUEST:
            setValidationUser('Senha ou usuario invalida');
            break;
        }
      } else {
        setValidationUser('');
        setErrorValidation([]);
      }
    }
  };

  return (
    <S.Wrapper>
      <Header />
      <S.Form method="post" onSubmit={handleSubmit}>
        <S.InputsArea>
          <Input
            label="Usuario"
            name="Usuario"
            placeholder="Digite o seu usuario"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          {errorValidation
            ? errorValidation?.map((erro) => (
                <S.spanError key="Error">
                  {erro.path === 'username' ? erro.message : ''}
                </S.spanError>
              ))
            : null}
          <Input
            label="Senha"
            name="senha"
            placeholder="Digite o sua Senha"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          {errorValidation
            ? errorValidation?.map((erro) => (
                <S.spanError key="erro validation">
                  {erro.path === 'password' ? erro.message : ''}
                </S.spanError>
              ))
            : null}
        </S.InputsArea>
        {validateUSer.length > 0 ? (
          <S.spanError>{validateUSer}</S.spanError>
        ) : (
          ''
        )}
        <Button value="Logar-se" typeButton=""></Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default LoginPage;
