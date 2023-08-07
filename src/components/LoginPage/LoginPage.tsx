import React, { FormEventHandler, FormEvent, useEffect, useState } from 'react';
import * as S from './styles';
import Header from 'components/Header/Header';
import { z } from 'zod';
import api from 'services/api';
import Input from 'components/Input/Input';
import { ErrorValidation } from 'types/IErrorValidation';
import Button from 'components/Button/Button';
import { AxiosError } from 'axios';


const loginUserFormSchema = z.object({
  username: z.string().nonempty('Campo usuário é obrigatório'),
  password: z.string().nonempty('Campo senha é obrigatório')
});

const LoginPage =() => {
  const [username, setUsername]= useState('')
  const [password, setPassword] = useState('')
  const [errorValidation, setErrorValidation] = useState<ErrorValidation[]>([]);
  const [validateUSer, setValidationUser] = useState<string>('')
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = loginUserFormSchema.parse({ username, password });
      const result = await api.post('/api/login', data);
      if(result.status >= 400)
        setValidationUser('Senha incorreta')
      console.log(result)
      setErrorValidation([]);
      setValidationUser('')
    } catch (error) {
      console.error(error);
      if (error instanceof z.ZodError) {
        console.log(error);
        const erros: ErrorValidation[] = error.issues.map((issue) => ({
          message: issue.message,
          path: issue.path.toString(),
        }))
        setErrorValidation(erros);
        return
      }
      else if(error instanceof AxiosError){
        if(error.request.status == 406)
          setValidationUser("Senha ou Usuario invalido")
        return
      }
      setValidationUser('')
      setErrorValidation([]);
  }
  };
  
  return (
    <S.Wrapper>
      <Header />
      <S.Form method='post' onSubmit={handleSubmit}>
        <S.InputsArea>
          <Input label='Usuario' name='Usuario' placeholder='Digite o seu usuario'
          type='text' onChange={e=> setUsername(e.target.value)}></Input>
          {errorValidation?errorValidation?.map((erro)=>(
           <S.spanError>{erro.path === "username"?erro.message:''}</S.spanError>
        )): null}
          <Input label='Senha' name='senha' placeholder='Digite o sua Senha'
          type='text' onChange={e=> setPassword(e.target.value)}></Input>
          {errorValidation?errorValidation?.map((erro)=>(
           <S.spanError>{erro.path === "password"?erro.message:''}</S.spanError>
        )): null}
        </S.InputsArea>
        {validateUSer.length > 0? <S.spanError>{validateUSer}</S.spanError>:''}
        <Button value='Logar-se' typeButton='submit'></Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default LoginPage;
