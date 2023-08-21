import Header from 'components/Header/Header';
import * as S from './styles';
import Input from 'components/Input/Input';
import InputWithMask from 'components/InputWithMask/InputWithMask';
import ComboBox from 'components/ComboBox/ComboBox';
import { UFS } from 'Utilities/AllUFs';
import { CNHCategory } from 'Utilities/CNH';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  PersonFormSchema,
  PersonFormSchemaType,
} from 'SchemaValidators/personSchemaValidator';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from 'components/Button/Button';
const Motorista = function () {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<PersonFormSchemaType>({
    resolver: zodResolver(PersonFormSchema),
  });
  const onSumit: SubmitHandler<PersonFormSchemaType> = (data) => {
    alert(data);
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(onSumit)}>
          <S.Container>
            <S.TittleContainer>Dados Pessoas do Motorista</S.TittleContainer>
            <S.Field>
              <Input
                label="Nome do Motorista"
                placeholder="Nome"
                type="text"
                {...register('name')}
                messageError={errors.name?.message}
                control={control}
              ></Input>
            </S.Field>
            <S.Field>
              <InputWithMask
                label="CPF"
                mask="000.0006000-00"
                placeholder="CPF"
                type="text"
                {...register('cpf')}
                messageError={errors.cpf?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                label="RG"
                mask="00.000.000-0"
                placeholder="RG"
                type="text"
                {...register('rg')}
                messageError={errors.rg?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <ComboBox
                data={['Masculino', 'Feminino', 'Outro']}
                placeholder="Genero"
                label="Genero"
                {...register('gener')}
                messageError={errors.gener?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Data de Nascimento"
                label="Data de Nascimento"
                type="date"
                {...register('birth_date')}
                messageError={errors.birth_date?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Email"
                label="Email"
                type="text"
                {...register('email')}
                messageError={errors.email?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                mask="(00) 00000-0000"
                placeholder="Celular Princial"
                label="Celular Princial"
                type="text"
                {...register('phone1')}
                messageError={errors.phone1?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Celular"
                label="Celular"
                type="text"
                {...register('phone2')}
                messageError={errors.phone2?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Telefone reserva"
                label="Telefone reserva"
                type="text"
                {...register('phone3')}
                messageError={errors.phone3?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                label="CEP"
                mask="00000-000"
                placeholder="CEP"
                type="text"
                {...register('cep')}
                messageError={errors.cep?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Logradouro"
                label="Logradouro"
                type="text"
                {...register('public_adress')}
                messageError={errors.public_adress?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="N°"
                label="Numero do endereço"
                type="text"
                {...register('num_adress')}
                messageError={errors.num_adress?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Bairro"
                label="Bairro"
                type="text"
                {...register('neighborhood')}
                messageError={errors.neighborhood?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Complemento"
                label="Complemento"
                type="text"
                {...register('complement')}
                messageError={errors.complement?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <Input
                placeholder="Cidade"
                label="Cidade"
                type="text"
                {...register('city')}
                messageError={errors.city?.message}
                control={control}
              />
            </S.Field>
            <S.Field>
              <ComboBox
                data={UFS}
                placeholder="UF"
                label="UF"
                {...register('uf')}
                messageError={errors.uf?.message}
                control={control}
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
                control={control}
              />
            </S.Field>
            <S.Field>
              <InputWithMask
                label="CNH"
                mask="000.000.000-00"
                name="driverCNH"
                placeholder="CNH"
                type="text"
                control={control}
              />
            </S.Field>
            <S.Field>
              <ComboBox
                data={['Sim', 'Não']}
                name="driverIsOwn"
                placeholder="É proprietario do veiculo?"
                onChange={(e) => console.log(e.target.value)}
                label="É proprietario do veiculo?"
                control={control}
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
