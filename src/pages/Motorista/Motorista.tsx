import Header from 'components/Header/Header';
import * as S from './styles';
import Input from 'components/Input/Input';
import { useState } from 'react';
import { IDriver } from 'types/IMotorista';

const Motorista = function () {
  const [driver, setDriver] = useState<IDriver>();
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Form>
          <S.Field>
            <Input
              label="Nome do Motorista"
              name="driverName"
              placeholder="Nome"
              type="text"
            ></Input>
          </S.Field>
          <S.Field>
            <Input
              label="Nome do Motorista"
              name="driverName"
              placeholder="Nome"
              type="text"
            ></Input>
          </S.Field>
        </S.Form>
      </S.Wrapper>
    </>
  );
};

export default Motorista;
