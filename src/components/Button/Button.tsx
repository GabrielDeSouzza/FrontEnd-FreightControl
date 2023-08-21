import * as S from './styles';

interface MeuComponenteProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode | null;
  value: string;
  typeButton: string;
}
const Button: React.FC<MeuComponenteProps> = function ({
  value = 'value',
  typeButton = 'button',
  children = null,
}) {
  return (
    <S.Buttom type={typeButton}>
      {value}
      {children}
    </S.Buttom>
  );
};

export default Button;
