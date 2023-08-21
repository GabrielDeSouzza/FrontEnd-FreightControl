import Header from 'components/Header/Header';
import * as S from './styles';
import Input from 'components/Input/Input';
import InputWithMask from 'components/InputWithMask/InputWithMask';
import ComboBox from 'components/ComboBox/ComboBox';
import { UFS } from 'Utilities/AllUFs';
import { CNHCategory } from 'Utilities/CNH';
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import {
  PersonFormSchema,
  PersonFormSchemaType,
} from 'SchemaValidators/personSchemaValidator';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from 'components/Button/Button';
const Motorista = function () {
  const methods = useForm<PersonFormSchemaType>({
    resolver: zodResolver(PersonFormSchema),
  });
  const onSumit: SubmitHandler<PersonFormSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <S.Wrapper {...methods}>
        <S.Form onSubmit={methods.handleSubmit(onSumit)}>
          <S.Container>
            <S.TittleContainer>Dados Pessoas do Motorista</S.TittleContainer>
            <S.Field>
              <Input
                label="Nome do Motorista"
                placeholder="Nome"
                type="text"
                {...methods.register('name')}
              ></Input>
            </S.Field>
            <S.Field>
              <InputWithMask
                label="CPF"
                mask="000.0006000-00"
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
                {...methods.register('rg')}
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
                name="birthDateDriver"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Email"
                label="Email"
                type="text"
                name="emailDriver"
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                mask="(00) 00000-0000"
                placeholder="Celular Princial"
                label="Celular Princial"
                type="text"
                name="phone"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Celular"
                label="Celular"
                type="text"
                name="phone2"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Telefone reserva"
                label="Telefone reserva"
                type="text"
                name="phone3Driver"
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                label="CEP"
                mask="00000-000"
                placeholder="CEP"
                type="text"
                name="cepDriver"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Logradouro"
                label="Logradouro"
                type="text"
                name="publicAdressDriver"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="N°"
                label="Numero do endereço"
                type="text"
                name="numAdressDriver"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Bairro"
                label="Bairro"
                type="text"
                name="neighborhoodDriver"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Complemento"
                label="Complemento"
                type="text"
                name="complementDriver"
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Cidade"
                label="Cidade"
                type="text"
                name="cityDriver"
              />
            </S.Field>
            <S.Field>
              <ComboBox
                data={UFS}
                placeholder="UF"
                label="UF"
                name="ufDriver"
              />
            </S.Field>
          </S.Container>
          <S.Container>
            <S.TittleContainer>Dados da CNH</S.TittleContainer>
            <S.Field>
              <ComboBox
                data={CNHCategory}
                name="driverCNHCategory"
                placeholder="Categoria da CNH"
                onChange={(e) => console.log(e.target.value)}
                label="Categoria da CNH"
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                label="CNH"
                mask="000.000.000-00"
                name="driverCNH"
                placeholder="CNH"
                type="text"
              />
            </S.Field>
            <S.Field>
              <ComboBox
                data={['Sim', 'Não']}
                name="driverIsOwn"
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
