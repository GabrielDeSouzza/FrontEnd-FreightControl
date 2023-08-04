import * as S from './styles';
import Button from '../Button/Button'
const Header = function ({
  title = 'React Avancado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
}) {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.png" />
      <S.Title>Transportando Qualidade</S.Title>
    </S.Wrapper>
  );
};

export default Header;
