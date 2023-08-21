import Input from 'components/Input/Input';
import * as S from './styles';
import Header from 'components/Header/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const CenterOperation = function () {
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.attributes.item(1));
    router.push(event.currentTarget.getAttribute('value') as string);
  };
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.SearchArea>
          <Input
            label="Procurar"
            name="searchInput"
            placeholder="digite o que você procura"
            type="text"
            key="searchInput"
          />
        </S.SearchArea>
        <S.Container>
          <S.Content>
            <S.linkFromContent value={'/Driver/Driver'} onClick={handleClick}>
              <S.Image src="/img/x.png"></S.Image>
              Cadastro de motorista
            </S.linkFromContent>
          </S.Content>
          <S.Content>
            <S.linkFromContent>
              <S.Image src="/img/x.png"></S.Image>
              Cadastro de motorista
            </S.linkFromContent>
          </S.Content>
          <S.Content>
            <S.linkFromContent>
              <S.Image src="/img/x.png"></S.Image>
              Cadastro de motorista
            </S.linkFromContent>
          </S.Content>
          <S.Content>
            <S.linkFromContent>
              <S.Image src="/img/x.png"></S.Image>
              Cadastro de motorista
            </S.linkFromContent>
          </S.Content>
          <S.Content>
            <S.linkFromContent>
              <S.Image src="/img/x.png"></S.Image>
              Cadastro de motorista
              <Link href={'/LoginPage/LoginPage'}> </Link>
            </S.linkFromContent>
          </S.Content>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default CenterOperation;
