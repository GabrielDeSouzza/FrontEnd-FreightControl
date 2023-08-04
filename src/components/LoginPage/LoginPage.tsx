import React, { useState } from 'react';
import * as S from './styles';
import Header from 'components/Header/Header';
import Form from 'components/Form/Form';
import { z } from 'zod';
import { IFormsProps } from 'types/FormsProps';
import { InputProps } from 'types/inputProps';

const loginUserFormSchema = z.object({
  username: z.string().nonempty('Campo usuário é obrigatório'),
  password: z.string().nonempty('Campo senha é obrigatório').min(6, 'A senha deve ter pelo menos 6 caracteres'),
});
const LoginPage: React.FC = () => {
  const handleSubmit = (formData: { [key: string]: string }) => {
    // Aqui você pode fazer a lógica para autenticar o usuário usando os dados do formulário.
    // Por exemplo, você pode enviar os dados para o servidor usando uma requisição HTTP.
    console.log('Formulário enviado:', formData);
  };
  
  const [username, setUsername]= useState('')
  const [passoword, setPassword] = useState('')

  const formFields: [InputProps] =[{label : "Username",
    name: "username",
    placeholder: "digite o seu username",
    type: "text",
    value: username,
    onChange(event) {
      setUsername(event.target.value)
    },
  }
]
  
formFields.push({label : "Password",
name: "Password",
placeholder: "digite o sua senha",
type: "password",
value: passoword,
onChange(event) {
  setPassword(event.target.value)
},})
  return (
    <S.Wrapper>
      <Header />
      <Form fields={formFields} onSubmit={handleSubmit} schemaValidation={loginUserFormSchema} />
    </S.Wrapper>
  );
};

export default LoginPage;
