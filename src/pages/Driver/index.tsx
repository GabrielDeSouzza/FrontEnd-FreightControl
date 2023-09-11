import Header from 'components/Header/Header';
import * as S from './styles';
import Input from 'components/InputForm/Input';
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
import api from 'services/api';
import { useState } from 'react';
import SpanMenssagem from 'components/SpanMessage/SpanMessage';
import { IMessageResult } from 'types/IMessageResults';
import { searchCEP } from 'Utilities/searchCEP';
import { Buttom } from 'components/Button/styles';
import { ICEPResponse } from 'types/ICepResponse';
const Motorista = function () {
  const methods = useForm<DriverFormSchemaType>({
    resolver: zodResolver(DriverFormSchema),
  });
  const [message, setMessage] = useState<IMessageResult>();
  const [publicAdress, setPublicAdress] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [complement, setComplement] = useState('');
  const onSumit: SubmitHandler<DriverFormSchemaType> = async (data) => {
    try {
      const result = await api.post('api/create/driver', data, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      console.log(result);
      setMessage({
        message: 'Motorista Cadastrado com Sucesso',
        isSucess: true,
        visible: true,
        setVisible: setMessage,
      });
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setMessage({
        message: 'Erro ao cadastrar motorista',
        isSucess: false,
        visible: true,
        setVisible: setMessage,
      });
    }
  };
  const handleSearchCEP = async () => {
    const cep = methods.getValues('cep');
    console.log(cep + ' sdasds');
    if (cep) {
      const data: ICEPResponse = await searchCEP(cep);
      setPublicAdress(data.public_adress);
      methods.setValue('public_adress', data.public_adress);
      setCity(data.city);
      methods.setValue('city', data.city);
      (data && data.complement.length > 0) ?? setComplement(data.complement);
      methods.setValue('complement', data.complement);
      setNeighborhood(data.neighborhood);
      methods.setValue('neighborhood', data.neighborhood);
      setUf(data.uf);
      methods.setValue('uf', data.uf);
      methods.trigger();
    }
  };
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
              <Buttom type="button" onClick={handleSearchCEP}>
                Pesquisar CEP{' '}
              </Buttom>
            </S.Field>
            <S.Field>
              <Input
                placeholder="Logradouro"
                label="Logradouro"
                type="text"
                name="public_adress"
                value={publicAdress || undefined}
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
                value={neighborhood}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Complemento"
                label="Complemento"
                type="text"
                name="complement"
                value={complement || undefined}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Cidade"
                label="Cidade"
                type="text"
                name="city"
                value={city}
              />
            </S.Field>
            <S.Field>
              <ComboBox
                data={UFS}
                placeholder="UF"
                label="UF"
                name="uf"
                value={uf}
              />
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
          {message?.message ? (
            <SpanMenssagem
              message={message?.message}
              isSucess={message?.isSucess}
              setVisible={setMessage}
              visible={true}
            />
          ) : null}
        </S.Form>
      </S.Wrapper>
    </>
  );
};

export default Motorista;
