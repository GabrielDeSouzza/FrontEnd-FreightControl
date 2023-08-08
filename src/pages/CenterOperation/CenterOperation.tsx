import Input from 'components/Input/Input';
import * as S from './styles';
import Header from 'components/Header/Header';
import Button from 'components/Button/Button';
import Link from 'next/link';

const CenterOperation = function () {
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
