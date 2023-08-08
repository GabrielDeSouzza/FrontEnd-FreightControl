import * as S from './styles';

const Button = function ({ value = 'value', typeButton = 'button' }) {
  const validTypeButton = ['button', 'submit', 'reset', 'undefined'].includes(
    typeButton
  )
    ? typeButton
    : 'button';
  return <S.Buttom type={validTypeButton}>{value}</S.Buttom>;
};

export default Button;
