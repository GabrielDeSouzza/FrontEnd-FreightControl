import Header from 'components/Header/Header';
import * as S from './styles';
import Input from 'components/Input/Input';
import InputWithMask from 'components/InputWithMask/InputWithMask';
import ComboBox from 'components/ComboBox/ComboBox';
import { UFS } from 'Utilities/AllUFs';
import { CNHCategory } from 'Utilities/CNH';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import Button from 'components/Button/Button';
import {
  DriverFormSchema,
  DriverFormSchemaType,
} from 'SchemaValidators/driverSchemaValidationType';
const Motorista = function () {
  const methods = useForm<DriverFormSchemaType>({
    resolver: zodResolver(DriverFormSchema),
  });
  const onSumit: SubmitHandler<DriverFormSchemaType> = async (data) => {
    try {
      console.log(data);
      alert(JSON.stringify(data, null, 2)); // Mostra os dados em um alerta para depuração
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };
  console.log('Test');
  console.log(methods.formState.errors);
  return (
    <>
      <Header />
      <S.Wrapper {...methods}>
        <S.Form
          autoComplete="off"
          onSubmit={methods.handleSubmit(onSumit)}
          method="post"
        >
          <S.Container>
            <S.TittleContainer>Dados Pessoas do Motorista</S.TittleContainer>
            <S.Field>
              <Input
                label="Nome do Motorista"
                placeholder="Nome"
                type="text"
                name="name"
              ></Input>
            </S.Field>
            <S.Field>
              <InputWithMask
                label="CPF"
                mask="000.000.000-00"
                placeholder="CPF"
                type="text"
                name="cpf"
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                label="RG"
                mask="00.000.000-0"
                placeholder="RG"
                type="text"
                name="rg"
              />
            </S.Field>
            <S.Field>
              <ComboBox
                data={['Masculino', 'Feminino', 'Outro']}
                placeholder="Genero"
                label="Genero"
                name="gener"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Data de Nascimento"
                label="Data de Nascimento"
                type="date"
                name={'birth_date'}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Email"
                label="Email"
                type="text"
                name="email"
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                mask="(00) 00000-0000"
                placeholder="Celular Princial"
                label="Celular Princial"
                type="text"
                name="phone1"
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                mask="(00) 00000-0000"
                placeholder="Celular"
                label="Celular"
                type="text"
                name="phone2"
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                placeholder="Telefone reserva"
                label="Telefone reserva"
                type="text"
                name="phone3"
                mask="(00) 00000-0000"
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                label="CEP"
                mask="00000-000"
                placeholder="CEP"
                type="text"
                name="cep"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Logradouro"
                label="Logradouro"
                type="text"
                name="public_adress"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="N°"
                label="Numero do endereço"
                type="text"
                name="num_adress"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Bairro"
                label="Bairro"
                type="text"
                name="neighborhood"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Complemento"
                label="Complemento"
                type="text"
                name="complement"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Cidade"
                label="Cidade"
                type="text"
                name="city"
              />
            </S.Field>
            <S.Field>
              <ComboBox data={UFS} placeholder="UF" label="UF" name="uf" />
            </S.Field>
          </S.Container>
          <S.Container>
            <S.TittleContainer>Dados da CNH</S.TittleContainer>
            <S.Field>
              <ComboBox
                data={CNHCategory}
                name="category"
                placeholder="Categoria da CNH"
                onChange={(e) => console.log(e.target.value)}
                label="Categoria da CNH"
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                label="CNH"
                mask="000.000.000-00"
                name="cnh"
                placeholder="CNH"
                type="text"
              />
            </S.Field>
            <S.Field>
              <ComboBox
                data={['Sim', 'Não']}
                name="isOwnVehicle"
                placeholder="É proprietario do veiculo?"
                onChange={(e) => console.log(e.target.value)}
                label="É proprietario do veiculo?"
              />
            </S.Field>
          </S.Container>
          <Button typeButton="submit" value="Cadastrar Motorista"></Button>
        </S.Form>
      </S.Wrapper>
    </>
  );
};

export default Motorista;
