import { useState } from 'react';
import * as S from './styles';

const Button = () => {
  const [value, setValue] = useState("")
  const handleChange = (event: React.ChangeEvent<HTMLButtonElement>)=> {
    setValue(event.target.value)
  }

  return (
    <S.Buttom value={value} onChange={handleChange}></S.Buttom>
  )
}

export default Button;
