import { z } from 'zod';
import { PersonFormSchema } from './personSchemaValidator';

const DriverSchema = z.object({
  cnh: z
    .string({ required_error: 'Preencha a CNH' })
    .nonempty('Preencha a CNH')
    .length(11, 'Preencha Corretamente a CNH'),
  category: z
    .string({ required_error: 'Preencha a categoria da CNH' })
    .nonempty('Preencha a categoria da CNH')
    .min(1, 'Preencha a categoria da CNH'),
  isOwnVehicle: z
    .string({ required_error: 'Selecione uma opção' })
    .nonempty('Selecione uma opção')
    .min(1, 'Selecione uma opção'),
});

export const DriverFormSchema = PersonFormSchema.merge(DriverSchema);

export type DriverFormSchemaType = z.infer<typeof DriverFormSchema>;
