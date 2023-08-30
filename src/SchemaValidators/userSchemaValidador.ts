import { z } from 'zod';

export const LoginUserFormSchema = z.object({
  username: z
    .string({ required_error: 'Campo usuário é obrigatório' })
    .nonempty('Campo usuário é obrigatório'),
  password: z
    .string({ required_error: 'Campo senha é obrigatório' })
    .nonempty('Campo senha é obrigatório'),
});
export type LoginUserFormType = z.infer<typeof LoginUserFormSchema>;
