import { z } from 'zod';

export const PersonFormSchema = z
  .object({
    name: z
      .string({ required_error: 'Preencha o nome' })
      .nonempty('Digite um nome')
      .min(1, 'digite um nome'),
    cpf: z
      .string({ required_error: 'Preencha o CPF' })
      .nonempty('Digite o CPF')
      .length(11, 'Digite o CPF Completo'),
    rg: z
      .string({ required_error: 'Preecha o cpf' })
      .nonempty('Digite o RG')
      .length(11, 'Digite o RG Completo'),
    gener: z
      .string({ required_error: 'Preencha o Genero' })
      .nonempty('Selecione o Genero')
      .min(1, 'Selecione um Genero'),
    birth_date: z.date({ required_error: 'Selecione uma Data' }),
    email: z.string().email('Digite um email valido').min(1, 'digite um email'),
    phone1: z
      .string()
      .min(10, 'Digite um telefone valido')
      .max(20, 'Digite um telefone valido')
      .optional(),
    phone2: z
      .string()
      .min(10, 'Digite um telefone valido')
      .max(20, 'Digite um telefone valido'),
    phone3: z
      .string()
      .min(10, 'Digite um telefone valido')
      .max(20, 'Digite um telefone valido')
      .optional(),
    cep: z
      .string({ required_error: 'Preencha o CEP' })
      .length(7, 'CEP Invalido'),
    public_adress: z
      .string({ required_error: 'Preencha o Logradouro' })
      .min(1, 'digite um logradouro'),
    num_adress: z
      .string({ required_error: 'Preencha o Endereço' })
      .min(1, 'Digite o numero do endereço'),
    complement: z.string({ required_error: 'Preencha o Bairro' }).optional(),
    neighborhood: z.string().min(1, 'Digite o Bairro'),
    city: z
      .string({ required_error: 'Preencha o Cidade' })
      .min(1, 'digite uma cidade'),
    uf: z.string({ required_error: 'Preencha o UF' }).min(1, 'selecione um UF'),
  })
  .refine(
    (data) => !data.phone1 && !data.phone2 && !data.phone3,
    'Ao menos um telefone deve ser digitado'
  );

export type PersonFormSchemaType = z.infer<typeof PersonFormSchema>;
