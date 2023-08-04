import Input from 'components/Input/Input';
import * as S from './styles';
import { FormEvent, useState } from 'react';
import { IFormsProps } from 'types/FormsProps';


const Form: React.FC<IFormsProps>  = ({fields, onSubmit,schemaValidation}) => {
  
  const handleSubmit = (event : FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    onSubmit({["sdfsd"]: fields[0].value as string})
  }
  const validation = schemaValidation.safeParse(fields[0].value)
  return (
    <S.Wrapper onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          name={field.name}
          onChange={field.onChange}
          placeholder={field.placeholder}
          type={field.type}
          value={field.value}
          messageError={validation.success? '' : validation.error.message}
        />
      ))}
      <button type='submit'>Submit</button>
    </S.Wrapper>
  );
}
export default Form;
